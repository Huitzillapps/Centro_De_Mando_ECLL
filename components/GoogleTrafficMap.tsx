"use client";

import { useEffect, useRef, useState } from "react";
import {
  importLibrary,
  setOptions,
} from "@googlemaps/js-api-loader";

let googleMapsConfigured = false;

function configureGoogleMaps() {
  if (googleMapsConfigured) return;

  const apiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY;

  if (!apiKey) {
    throw new Error(
      "No se encontró NEXT_PUBLIC_GOOGLE_MAPS_API_KEY en .env.local"
    );
  }

  setOptions({
    key: apiKey,
    v: "weekly",
    language: "es",
    region: "MX",
  });

  googleMapsConfigured = true;
}

export default function GoogleTrafficMap() {
  const mapContainerRef = useRef<HTMLDivElement | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let trafficLayer: InstanceType<
      Awaited<ReturnType<typeof importLibrary<"maps">>>["TrafficLayer"]
    > | null = null;

    let cancelled = false;

    async function initializeMap() {
      try {
        configureGoogleMaps();

        const { Map, TrafficLayer } = await importLibrary("maps");

        if (!mapContainerRef.current || cancelled) return;

        const map = new Map(mapContainerRef.current, {
          // Centro aproximado de Ciudad de México
          center: {
            lat: 19.4326,
            lng: -99.1332,
          },

          zoom: 11,

          mapTypeControl: false,
          streetViewControl: false,
          fullscreenControl: true,
          zoomControl: true,

          gestureHandling: "greedy",

          clickableIcons: false,

          mapTypeId: "roadmap",
        });

        trafficLayer = new TrafficLayer({
          autoRefresh: true,
        });

        trafficLayer.setMap(map);

        if (!cancelled) {
          setLoading(false);
        }
      } catch (err) {
        console.error("Error al cargar Google Maps:", err);

        if (!cancelled) {
          setLoading(false);
          setError(
            "No fue posible cargar el mapa. Verifica la API de Google Maps."
          );
        }
      }
    }

    void initializeMap();

    return () => {
      cancelled = true;

      if (trafficLayer) {
        trafficLayer.setMap(null);
      }
    };
  }, []);

  return (
    <div className="relative h-full min-h-[500px] w-full overflow-hidden bg-[#DCE2E6]">
      <div
        ref={mapContainerRef}
        className="absolute inset-0 h-full w-full"
      />

      {/* Indicador superior */}
      <div className="pointer-events-none absolute left-5 top-5 z-10">
        <div className="rounded-xl border border-white/80 bg-white/95 px-4 py-3 shadow-lg backdrop-blur-sm">
          <div className="flex items-center gap-2">
            <span className="relative flex h-2.5 w-2.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#2D7074] opacity-30" />
              <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-[#2D7074]" />
            </span>

            <span className="text-xs font-semibold uppercase tracking-[0.08em] text-[#2D7074]">
              Tráfico activo
            </span>
          </div>

          <p className="mt-1 text-sm font-semibold text-[#20262D]">
            Ciudad de México
          </p>

          <p className="mt-0.5 text-xs text-[#6F7B85]">
            Condiciones actuales de circulación
          </p>
        </div>
      </div>

      {/* Leyenda */}
      <div className="pointer-events-none absolute bottom-6 left-5 z-10">
        <div className="rounded-xl border border-white/80 bg-white/95 p-3 shadow-lg backdrop-blur-sm">
          <p className="mb-2 text-[11px] font-semibold uppercase tracking-wide text-[#6F7B85]">
            Tráfico
          </p>

          <div className="flex items-center gap-4 text-xs text-[#36414A]">
            <div className="flex items-center gap-1.5">
              <span className="h-1.5 w-5 rounded-full bg-green-500" />
              Fluido
            </div>

            <div className="flex items-center gap-1.5">
              <span className="h-1.5 w-5 rounded-full bg-orange-400" />
              Moderado
            </div>

            <div className="flex items-center gap-1.5">
              <span className="h-1.5 w-5 rounded-full bg-red-500" />
              Intenso
            </div>
          </div>
        </div>
      </div>

      {loading && (
        <div className="absolute inset-0 z-20 flex items-center justify-center bg-[#F4F6F7]">
          <div className="text-center">
            <div className="mx-auto h-7 w-7 animate-spin rounded-full border-2 border-[#DDEBEC] border-t-[#2D7074]" />

            <p className="mt-3 text-sm text-[#6F7B85]">
              Cargando mapa...
            </p>
          </div>
        </div>
      )}

      {error && (
        <div className="absolute inset-0 z-30 flex items-center justify-center bg-[#F4F6F7] p-8">
          <div className="max-w-sm rounded-xl border border-[#DCE2E6] bg-white p-6 text-center shadow-sm">
            <p className="font-semibold text-[#20262D]">
              Mapa no disponible
            </p>

            <p className="mt-2 text-sm leading-6 text-[#6F7B85]">
              {error}
            </p>
          </div>
        </div>
      )}
    </div>
  );
}