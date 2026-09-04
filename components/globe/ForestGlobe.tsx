"use client";

import { useRef, useEffect, useState, useCallback } from "react";
import { Forest } from "@/types";
import { forests } from "@/data/forests";

const PALETTE = {
  background: "#577831", // Hero background (90% blend)
  ocean: "#071812", // Globe ocean
  landDark: "#0A160F",
  otherCountriesHover: "#14261A",
  indonesia: "#577831", // Leaf Green (secondary)
  indonesiaHighlight: "#DDEA81", // Soft Lime (accent)
  indonesiaActive: "#F8EB8C", // Warm Sunlight (accent warm)
  marker: "#DDEA81", // Soft Lime (accent)
  markerActive: "#F7AF36", // Forest Gold (tertiary)
  text: "#F4F0E8",
  otherBorder: "rgba(90,110,80,0.12)",
  indonesiaBorder: "rgba(87,120,49,0.65)",
  mutedText: "rgba(244,240,232,0.55)",
  border: "rgba(244,240,232,0.12)"
};

// Focused on Indonesia, slightly right-weighted by adjusting longitude/camera positioning
const INDONESIA_CENTER = { lat: -2.0, lng: 118, altitude: 2.8 };

interface ForestGlobeProps {
  selectedForest: Forest | null;
  onSelectForest: (forest: Forest) => void;
  className?: string;
}

export default function ForestGlobe({
  selectedForest,
  onSelectForest,
  className = "",
}: ForestGlobeProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const globeRef = useRef<any>(null);
  const initRef = useRef(false);
  const selectedRef = useRef<Forest | null>(null);
  const hoveredRef = useRef<string | null>(null);
  const [hoveredForest, setHoveredForest] = useState<string | null>(null);

  const handleMarkerClick = useCallback(
    (forest: Forest) => {
      onSelectForest(forest);
    },
    [onSelectForest]
  );

  useEffect(() => {
    selectedRef.current = selectedForest;
  }, [selectedForest]);

  useEffect(() => {
    hoveredRef.current = hoveredForest;
  }, [hoveredForest]);

  useEffect(() => {
    if (initRef.current || !containerRef.current) return;
    initRef.current = true;

    let destroyed = false;
    let resizeObserver: ResizeObserver | null = null;

    const init = async () => {
      const GlobeModule = await import("globe.gl");
      const Globe = GlobeModule.default || GlobeModule;

      if (destroyed || !containerRef.current) return;

      const g = new Globe(containerRef.current);

      // Set ukuran awal sesuai container yang sebenarnya
      const setSize = () => {
        if (!containerRef.current) return;
        const { clientWidth, clientHeight } = containerRef.current;
        g.width(clientWidth).height(clientHeight);
      };
      setSize();

      // Pastikan globe resize mengikuti container setiap kali ukurannya berubah
      resizeObserver = new ResizeObserver(() => setSize());
      resizeObserver.observe(containerRef.current);

      g.backgroundColor(PALETTE.background)
        .showGlobe(true)
        .showAtmosphere(true)
        .atmosphereColor("#2D4625") // greenish atmosphere from blend
        .atmosphereAltitude(0.12)
        .showGraticules(false);

      // Explicitly set the ocean color
      try {
        const THREE = (window as any).THREE;
        if (THREE) {
           const globeMaterial = g.globeMaterial() as any;
           if (globeMaterial) {
              globeMaterial.color = new THREE.Color(PALETTE.ocean);
              globeMaterial.shininess = 20; // some reflection for ocean
           }
        }
      } catch (e) {
        console.warn("Could not set globe ocean color explicitly", e);
      }

      try {
        const res = await fetch("/data/countries.geojson");
        const geojson = await res.json();

        if (destroyed) return;

        g.polygonsData(geojson.features)
          .polygonStrokeColor((d: any) => {
            const name = d.properties?.name;
            if (name === "Indonesia") return PALETTE.indonesiaBorder;
            return PALETTE.otherBorder;
          })
          .polygonCapColor((d: any) => {
            const name = d.properties?.name;
            if (name === "Indonesia") return PALETTE.indonesia;
            return PALETTE.landDark;
          })
          .polygonSideColor((d: any) => {
            const name = d.properties?.name;
            if (name === "Indonesia") return PALETTE.indonesia;
            return "rgba(27,48,31,0.6)";
          })
          .polygonAltitude((d: any) => {
            const name = d.properties?.name;
            if (name === "Indonesia") return 0.02; // slightly higher
            return 0.003;
          })
          .polygonCapMaterial((d: any) => {
            const name = d.properties?.name;
            const THREE = (window as any).THREE;
            if (!THREE) return undefined;
            if (name === "Indonesia") {
              return new THREE.MeshPhongMaterial({
                color: new THREE.Color(PALETTE.indonesia),
                transparent: true,
                opacity: 0.9,
                shininess: 30, // moderate shininess, not neon
              });
            }
            return new THREE.MeshPhongMaterial({
              color: new THREE.Color(PALETTE.landDark),
              transparent: true,
              opacity: 0.7,
              shininess: 10,
            });
          })
          .onPolygonHover((d: any) => {
            if (!containerRef.current) return;
            containerRef.current.style.cursor = d ? "pointer" : "grab";
          });

      } catch (err) {
        console.warn("Failed to load GeoJSON:", err);
      }

      // Restrict markers to top 8 forests to keep hero clean
      const markerData = forests.slice(0, 8);

      g.htmlElementsData(markerData)
        .htmlLat("latitude")
        .htmlLng("longitude")
        .htmlAltitude(0.02)
        .htmlElement((d: any) => {
          const isActive = selectedRef.current?.id === d.id;
          const isHovered = hoveredRef.current === d.id;
          const showLabel = isActive || isHovered;

          const color = isActive ? PALETTE.markerActive : PALETTE.marker;
          
          const el = document.createElement("div");
          el.className = "globe-marker-container";
          el.style.pointerEvents = "auto";
          el.style.cursor = "pointer";

          el.innerHTML = `
            <div style="
              position: relative;
              display: flex;
              align-items: center;
              justify-content: center;
              transform: translate(-50%, -50%);
            ">
              <!-- Animated Ring -->
              <div style="
                position: absolute;
                width: ${isActive ? '24px' : '16px'};
                height: ${isActive ? '24px' : '16px'};
                border: 1px solid ${color};
                border-radius: 50%;
                opacity: ${isActive ? '0.8' : '0.4'};
                animation: ${isActive ? 'karimba-pulse 2s infinite' : 'karimba-pulse 3s infinite'};
                transition: all 0.3s ease;
              "></div>
              
              <!-- Core Dot -->
              <div style="
                width: ${isActive ? '8px' : '5px'};
                height: ${isActive ? '8px' : '5px'};
                background-color: ${color};
                border-radius: 50%;
                box-shadow: 0 0 ${isActive ? '12px' : '8px'} ${color};
                transition: all 0.3s ease;
              "></div>

              <!-- Tooltip -->
              <div style="
                position: absolute;
                bottom: 100%;
                left: 50%;
                transform: translate(-50%, -12px);
                background: rgba(27, 48, 31, 0.95);
                backdrop-filter: blur(8px);
                border: 1px solid rgba(244, 240, 232, 0.12);
                border-radius: 4px;
                padding: 6px 10px;
                white-space: nowrap;
                pointer-events: none;
                opacity: ${showLabel ? '1' : '0'};
                transition: opacity 0.2s ease;
                box-shadow: 0 4px 12px rgba(0,0,0,0.5);
              ">
                <div style="
                  font-family: 'Manrope', system-ui, sans-serif;
                  font-size: 11px;
                  font-weight: 600;
                  color: ${color};
                  line-height: 1.3;
                  letter-spacing: 0.02em;
                  text-transform: uppercase;
                ">${d.name}</div>
                <div style="
                  font-family: 'Manrope', system-ui, sans-serif;
                  font-size: 9px;
                  color: ${PALETTE.mutedText};
                  margin-top: 2px;
                ">${d.location}</div>
              </div>
            </div>
          `;

          el.onmouseenter = () => setHoveredForest(d.id);
          el.onmouseleave = () => setHoveredForest(null);
          el.onclick = (e) => {
            e.stopPropagation();
            handleMarkerClick(d as Forest);
          };

          return el;
        });

      g.pointOfView(
        { lat: INDONESIA_CENTER.lat, lng: INDONESIA_CENTER.lng, altitude: INDONESIA_CENTER.altitude },
        0
      );

      if (g.controls) {
        g.controls().enableZoom = true;
        g.controls().minDistance = 120;
        g.controls().maxDistance = 400; // Allow a bit more zoom out
        g.controls().enablePan = false;
        g.controls().rotateSpeed = 0.5;
        g.controls().zoomSpeed = 0.6;
        g.controls().enableDamping = true;
        g.controls().dampingFactor = 0.08;
        g.controls().autoRotate = true;
        g.controls().autoRotateSpeed = 0.15;
      }

      // CINEMATIC LIGHTING
      const THREE = (window as any).THREE;
      if (THREE) {
        const scene = g.scene();
        
        // Remove existing ambient light to replace it
        const existingLights = scene.children.filter((c: any) => c.isLight);
        existingLights.forEach((l: any) => scene.remove(l));

        // 1. Ambient light: provides baseline visibility so globe isn't pitch black
        const ambientLight = new THREE.AmbientLight(0xffffff, 0.8); 
        scene.add(ambientLight);

        // 2. Directional light: simulates sun, gives 3D sphere volume
        const directionalLight = new THREE.DirectionalLight(0xffffff, 1.2);
        directionalLight.position.set(200, 100, 100); // from top-right
        scene.add(directionalLight);

        // 3. Fill light / Rim light: helps define the shape of the dark side
        const rimLight = new THREE.DirectionalLight(PALETTE.indonesiaHighlight, 0.5);
        rimLight.position.set(-100, -50, -100); // from bottom-left
        scene.add(rimLight);
      }

      g.renderer().setClearColor(PALETTE.background, 1);

      globeRef.current = g;
    };

    init();

    return () => {
      destroyed = true;
      if (resizeObserver) {
        resizeObserver.disconnect();
      }
      if (globeRef.current) {
        try {
          const g = globeRef.current;
          if (g.controls) g.controls().dispose();
          if (g.renderer) g.renderer().dispose();
          if (g.scene) {
            const scene = g.scene();
            while (scene.children.length > 0) {
              scene.remove(scene.children[0]);
            }
          }
        } catch {}
        globeRef.current = null;
      }
      initRef.current = false;
    };
  }, []);

  // Update HTML elements explicitly on interaction
  useEffect(() => {
    if (!globeRef.current) return;

    const g = globeRef.current;
    
    // Just trigger a re-evaluation of htmlElements by passing the same data
    const currentData = g.htmlElementsData();
    g.htmlElementsData(currentData);
    
    // Manage auto rotation based on interaction
    if (g.controls) {
        if (selectedForest || hoveredForest) {
            g.controls().autoRotate = false;
        } else {
            g.controls().autoRotate = true;
        }
    }
  }, [selectedForest, hoveredForest]);

  useEffect(() => {
    if (!globeRef.current || !selectedForest) return;

    const g = globeRef.current;
    
    g.pointOfView(
      {
        lat: selectedForest.latitude,
        lng: selectedForest.longitude,
        altitude: 1.4, // gentle zoom in, not too extreme
      },
      800 // smooth 800ms transition
    );
  }, [selectedForest]);

  useEffect(() => {
    if (globeRef.current && !selectedForest) {
      globeRef.current.pointOfView(
        {
          lat: INDONESIA_CENTER.lat,
          lng: INDONESIA_CENTER.lng,
          altitude: INDONESIA_CENTER.altitude,
        },
        800
      );
    }
  }, [selectedForest]);

  return (
    <div className={`relative ${className}`}>
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes karimba-pulse {
          0% { transform: scale(0.8); opacity: 0.8; }
          50% { transform: scale(1.4); opacity: 0; }
          100% { transform: scale(0.8); opacity: 0; }
        }
      `}} />
      <div
        ref={containerRef}
        className="w-full h-full cursor-grab active:cursor-grabbing"
        style={{
          overflow: "hidden",
        }}
      />

      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-2 text-xs font-body text-neutral/40 z-10 pointer-events-none select-none">
        <span className="w-1.5 h-1.5 rounded-full bg-[#DDEA81]" style={{ animation: 'karimba-pulse 2s infinite' }} />
        Drag untuk memutar · Scroll untuk zoom
      </div>
    </div>
  );
}
