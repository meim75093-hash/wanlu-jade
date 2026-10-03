"use client";

import { useEffect, useRef, useState } from "react";
import { Maximize2, RotateCcw } from "lucide-react";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";

type Props = {
  id: string;
  modelSrc: string;
  lot: string;
  title: string;
};

export function JadeStoneViewer({ id, modelSrc, lot, title }: Props) {
  const mountRef = useRef<HTMLDivElement>(null);
  const engineRef = useRef<{
    camera: THREE.PerspectiveCamera;
    controls: OrbitControls;
    renderer: THREE.WebGLRenderer;
    initialPosition: THREE.Vector3;
  } | null>(null);
  const autoRotateRef = useRef(false);
  const [status, setStatus] = useState<"loading" | "ready" | "error">("loading");
  const [autoRotate, setAutoRotate] = useState(false);
  autoRotateRef.current = autoRotate;

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;

    let renderer: THREE.WebGLRenderer;
    try {
      renderer = new THREE.WebGLRenderer({ antialias: true, alpha: false });
    } catch {
      setStatus("error");
      return;
    }

    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.15;
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    renderer.setClearColor(0xf2f1ed, 1);
    renderer.domElement.setAttribute("aria-label", `可旋转查看的第 ${lot} 号翡翠原石三维模型`);
    renderer.domElement.setAttribute("role", "img");
    mount.appendChild(renderer.domElement);

    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0xf2f1ed);
    const camera = new THREE.PerspectiveCamera(38, 1, 0.05, 100);
    const initialPosition = new THREE.Vector3(0.25, 0.55, 4.7);
    camera.position.copy(initialPosition);

    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.dampingFactor = 0.065;
    controls.enablePan = false;
    controls.minDistance = 2.2;
    controls.maxDistance = 9;
    controls.autoRotate = false;
    controls.autoRotateSpeed = 0.7;
    controls.target.set(0, 0, 0);

    const ambient = new THREE.HemisphereLight(0xffffff, 0xb6b1a7, 2.2);
    const key = new THREE.DirectionalLight(0xfffaf1, 3.4);
    key.position.set(3.5, 5, 4);
    key.castShadow = true;
    key.shadow.mapSize.set(1024, 1024);
    const fill = new THREE.DirectionalLight(0xffffff, 1.5);
    fill.position.set(-4, 2, -1);
    scene.add(ambient, key, fill);

    engineRef.current = { camera, controls, renderer, initialPosition };
    let disposed = false;
    let frame = 0;
    let model: THREE.Object3D | null = null;
    const wake = () => {
      if (!disposed && !document.hidden && !frame) frame = requestAnimationFrame(render);
    };
    const render = () => {
      frame = 0;
      if (disposed) return;
      controls.autoRotate = autoRotateRef.current;
      const changed = controls.update();
      renderer.render(scene, camera);
      if (changed || autoRotateRef.current) wake();
    };

    const resize = () => {
      const width = mount.clientWidth;
      const height = mount.clientHeight;
      if (!width || !height) return;
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height, false);
      wake();
    };
    const observer = new ResizeObserver(resize);
    observer.observe(mount);
    resize();

    setStatus("loading");
    new GLTFLoader().load(
      modelSrc,
      (gltf) => {
        if (disposed) return;
        model = gltf.scene;
        const bounds = new THREE.Box3().setFromObject(model);
        const size = bounds.getSize(new THREE.Vector3());
        const longest = Math.max(size.x, size.y, size.z);
        if (!Number.isFinite(longest) || longest <= 0) {
          setStatus("error");
          return;
        }

        const center = bounds.getCenter(new THREE.Vector3());
        model.position.sub(center);
        model.scale.multiplyScalar(2.55 / longest);
        model.traverse((object) => {
          if (object instanceof THREE.Mesh) {
            object.castShadow = true;
            object.receiveShadow = true;
          }
        });
        scene.add(model);
        const distance = Math.max(4.4, (2.55 * 0.75) / Math.tan(THREE.MathUtils.degToRad(camera.fov / 2)));
        initialPosition.set(distance * 0.05, distance * 0.12, distance);
        camera.position.copy(initialPosition);
        controls.update();
        setStatus("ready");
        wake();
      },
      undefined,
      () => {
        if (!disposed) setStatus("error");
      },
    );

    const handleVisibility = () => {
      if (document.hidden) {
        cancelAnimationFrame(frame);
        frame = 0;
      } else wake();
    };
    controls.addEventListener("change", wake);
    document.addEventListener("visibilitychange", handleVisibility);

    return () => {
      disposed = true;
      cancelAnimationFrame(frame);
      observer.disconnect();
      controls.removeEventListener("change", wake);
      document.removeEventListener("visibilitychange", handleVisibility);
      controls.dispose();
      model?.traverse((object) => {
        if (!(object instanceof THREE.Mesh)) return;
        object.geometry.dispose();
        for (const material of Array.isArray(object.material) ? object.material : [object.material]) {
          for (const value of Object.values(material)) {
            if (value instanceof THREE.Texture) value.dispose();
          }
          material.dispose();
        }
      });
      renderer.dispose();
      renderer.forceContextLoss();
      renderer.domElement.remove();
      engineRef.current = null;
    };
  }, [modelSrc, lot]);

  useEffect(() => {
    if (!engineRef.current) return;
    engineRef.current.controls.autoRotate = autoRotate;
    engineRef.current.controls.update();
  }, [autoRotate]);

  const resetView = () => {
    const engine = engineRef.current;
    if (!engine) return;
    engine.camera.position.copy(engine.initialPosition);
    engine.controls.target.set(0, 0, 0);
    engine.controls.update();
  };

  const toggleFullscreen = () => {
    const section = document.getElementById(id);
    if (!section) return;
    if (document.fullscreenElement) void document.exitFullscreen();
    else void section.requestFullscreen().catch(() => undefined);
  };

  return (
    <section id={id} className="frame relative isolate overflow-hidden bg-[#f2f1ed]">
      <div ref={mountRef} className="relative aspect-[4/5] w-full sm:aspect-[16/10] lg:aspect-[16/9]" />
      <div className="pointer-events-none absolute left-4 top-4 z-10 flex flex-col gap-1 sm:left-7 sm:top-7">
        <span className="label-sm w-fit bg-white/75 px-3 py-2 text-ink">INTERACTIVE 3D · LOT {lot}</span>
        <span className="w-fit bg-white/65 px-3 py-1 text-[11px] tracking-wide text-ink-soft">{title}</span>
        <span className="w-fit bg-white/65 px-3 py-1 text-[10px] tracking-wide text-ink-muted">三维重建样片 · 完整度待复核</span>
      </div>

      {status === "loading" && (
        <div className="absolute inset-0 grid place-items-center bg-[#f2f1ed]/75" role="status">
          <span className="label-sm text-ink-muted">正在载入原石模型…</span>
        </div>
      )}
      {status === "error" && (
        <div className="absolute inset-0 grid place-items-center bg-[#f2f1ed] px-6 text-center" role="alert">
          <span className="serif text-sm text-ink-muted">3D 模型暂时无法载入，请稍后重试。</span>
        </div>
      )}

      <div className="absolute inset-x-0 bottom-0 z-10 flex items-center justify-between gap-2 bg-gradient-to-t from-black/55 via-black/20 to-transparent px-4 pb-4 pt-12 text-white sm:px-7 sm:pb-6">
        <span className="text-[10px] tracking-wide2 sm:text-xs">拖动旋转 · 双指或滚轮缩放</span>
        <div className="flex shrink-0 items-center gap-2">
          <button
            className="grid h-10 w-10 place-items-center border border-white/55 bg-black/20 transition hover:bg-white/20"
            type="button"
            aria-label={autoRotate ? "暂停自动旋转" : "开始自动旋转"}
            aria-pressed={autoRotate}
            onClick={() => setAutoRotate((value) => !value)}
          >
            <span className="text-base" aria-hidden>{autoRotate ? "Ⅱ" : "↻"}</span>
          </button>
          <button
            className="grid h-10 w-10 place-items-center border border-white/55 bg-black/20 transition hover:bg-white/20"
            type="button"
            aria-label="复位视角"
            onClick={resetView}
          >
            <RotateCcw className="h-4 w-4" />
          </button>
          <button
            className="grid h-10 w-10 place-items-center border border-white/55 bg-black/20 transition hover:bg-white/20"
            type="button"
            aria-label="全屏查看"
            onClick={toggleFullscreen}
          >
            <Maximize2 className="h-4 w-4" />
          </button>
        </div>
      </div>
      <p className="sr-only">当前显示的是三维重建模型，细节和颜色请以实物及现场复核为准。</p>
    </section>
  );
}
