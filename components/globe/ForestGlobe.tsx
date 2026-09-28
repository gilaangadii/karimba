"use client";

import { useRef, useEffect, useState, useCallback } from "react";
import { Forest } from "@/types";
import { forests } from "@/data/forests";

// Globe palette — mirrors CSS theme tokens for visual consistency.
// These hex values are used in Three.js/WebGL contexts where CSS variables are unavailable.
// To change the globe palette, update the corresponding --color-globe-* tokens in globals.css.
const PALETTE = {
  ocean: "#0D1F1A",            // deep dark teal, blends with hero bg
  oceanHighlight: "#183D34",
  landDark: "#263B27",         // --color-globe-land-dark (muted olive)
  landHover: "#3A5130",        // --color-globe-land-hover
  land: "#577831",             // --color-globe-land
  landHighlight: "#71984A",    // --color-globe-land-highlight
  indonesia: "#7FA94B",        // --color-globe-indonesia (bright natural green)
  indonesiaHighlight: "#A6D96A", // --color-globe-indonesia-highlight
  indonesiaActive: "#DDEA81",  // --color-globe-indonesia-active
  marker: "#F8EB8C",           // --color-globe-marker (warm yellow-green)
  markerActive: "#F7AF36",     // --color-globe-marker-active
  text: "#F4F0E8",             // --color-text-primary
  otherBorder: "#2b9348", // --color-globe-other-border
  indonesiaBorder: "rgba(127,169,75,0.60)", // --color-globe-indonesia-border
  mutedText: "rgba(244,240,232,0.55)", // --color-text-secondary
  border: "rgba(244,240,232,0.12)", // --color-border-default
  tooltipBg: "rgba(11,22,15,0.95)",  // --bg-deep with high opacity
  otherSide: "rgba(38,59,39,0.7)", // --color-globe-other-side
  atmosphere: "rgba(45,70,37,0.35)", // --color-globe-atmosphere
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

      g.showGlobe(true)
        .showAtmosphere(true)
        .atmosphereColor('#87CEEB')
        .atmosphereAltitude(0.15)
        .globeImageUrl('//unpkg.com/three-globe/example/img/earth-blue-marble.jpg')
        .bumpImageUrl('//unpkg.com/three-globe/example/img/earth-topology.png')
        .showGraticules(false);

      // Force canvas background transparent
      g.renderer().setClearColor(0x000000, 0);
      g.renderer().setClearAlpha(0);
      g.backgroundColor('rgba(0,0,0,0)');

      // Ensure canvas element has no CSS background
      if (containerRef.current) {
        const canvas = containerRef.current.querySelector('canvas');
        if (canvas) {
          canvas.style.background = 'transparent';
        }
      }

      try {
        const res = await fetch("/data/countries.geojson");
        const geojson = await res.json();

        if (destroyed) return;

        g.polygonsData(geojson.features)
          .polygonStrokeColor((d: any) => {
            const name = d.properties?.name;
            if (name === "Indonesia") return PALETTE.markerActive; // Outline
            return "rgba(0,0,0,0)";
          })
          .polygonCapColor((d: any) => {
            const name = d.properties?.name;
            if (name === "Indonesia") return "rgba(247, 175, 54, 0.2)"; // Light/glow fallback
            return "rgba(0,0,0,0)";
          })
          .polygonSideColor(() => {
            return "rgba(0,0,0,0)";
          })
          .polygonAltitude((d: any) => {
            const name = d.properties?.name;
            if (name === "Indonesia") return 0.01;
            return 0.001;
          })
          .polygonCapMaterial((d: any) => {
            const name = d.properties?.name;
            const THREE = (window as any).THREE;
            if (!THREE) return undefined;
            if (name === "Indonesia") {
              return new THREE.MeshPhongMaterial({
                color: new THREE.Color(PALETTE.markerActive),
                transparent: true,
                opacity: 0.15,
                shininess: 50,
                emissive: new THREE.Color(PALETTE.markerActive),
                emissiveIntensity: 0.2
              });
            }
            return new THREE.MeshBasicMaterial({ transparent: true, opacity: 0 });
          })
          .onPolygonHover((d: any) => {
            if (!containerRef.current) return;
            containerRef.current.style.cursor = (d && d.properties?.name === "Indonesia") ? "pointer" : "grab";
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
                background: ${PALETTE.tooltipBg};
                backdrop-filter: blur(8px);
                border: 1px solid ${PALETTE.border};
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

      // CINEMATIC LIGHTING — natural Earth editorial feel
      const THREE = (window as any).THREE;
      if (THREE) {
        const scene = g.scene();
        
        // Remove existing lights to replace with our cinematic setup
        const existingLights = scene.children.filter((c: any) => c.isLight);
        existingLights.forEach((l: any) => scene.remove(l));

        // 1. Ambient light: soft baseline so globe isn't pitch black
        const ambientLight = new THREE.AmbientLight(0xffffff, 0.6);
        scene.add(ambientLight);

        // 2. Key light: warm directional from top-right (simulates sun)
        const keyLight = new THREE.DirectionalLight(0xfff5e6, 1.0);
        keyLight.position.set(200, 120, 100);
        scene.add(keyLight);

        // 3. Fill light: cooler from left, softer (gives depth)
        const fillLight = new THREE.DirectionalLight(0xe0f0e0, 0.35);
        fillLight.position.set(-150, 50, -80);
        scene.add(fillLight);

        // 4. Rim light: subtle warm edge on the dark side
        const rimLight = new THREE.DirectionalLight(0xDDEA81, 0.25);
        rimLight.position.set(-100, -80, -120);
        scene.add(rimLight);
      }

      // Post-init: force canvas transparent after globe.gl finishes setup
      setTimeout(() => {
        if (!containerRef.current) return;
        const canvas = containerRef.current.querySelector('canvas');
        if (canvas) {
          canvas.style.background = 'transparent';
          canvas.style.backgroundColor = 'transparent';
        }
        g.renderer().setClearColor(0x000000, 0);
        g.renderer().setClearAlpha(0);
      }, 100);

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
        className="w-full h-full cursor-grab active:cursor-grabbing relative z-[1]"
        style={{
          overflow: "hidden",
        }}
      />

      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-2 text-xs max-md:text-[10px] font-body text-neutral/40 z-10 pointer-events-none select-none whitespace-nowrap max-w-[calc(100vw-3rem)]">
        <span className="w-1.5 h-1.5 rounded-full bg-accent" style={{ animation: 'karimba-pulse 2s infinite' }} />
        Drag to rotate · Scroll to zoom
      </div>
    </div>
  );
}
