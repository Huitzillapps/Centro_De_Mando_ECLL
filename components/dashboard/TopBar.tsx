"use client";

import { Bell, Plus } from "lucide-react";
import { useEffect, useState } from "react";

export default function TopBar() {
  const [now, setNow] = useState<Date | null>(null);

  useEffect(() => {
    setNow(new Date());

    const interval = setInterval(() => {
      setNow(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <header className="flex h-16 shrink-0 items-center justify-between border-b border-[#DCE2E6] bg-white px-5">
      <div>
        <h1 className="text-base font-bold">Resumen operativo</h1>
        <p className="text-xs text-[#6F7B85]">
          Estado actual de la operación
        </p>
      </div>

      <div className="flex items-center gap-5">
        <div className="hidden items-center gap-2 rounded-lg border border-[#C8E6C9] bg-[#E8F5E9] px-3 py-1.5 md:flex">
          <span className="relative flex h-2 w-2">
            <span className="absolute h-full w-full animate-ping rounded-full bg-[#2E7D5B] opacity-40" />
            <span className="relative h-2 w-2 rounded-full bg-[#2E7D5B]" />
          </span>

          <span className="text-[10px] font-bold uppercase tracking-wide text-[#2E7D5B]">
            Sistema operativo
          </span>
        </div>

        {now && (
          <div className="hidden text-right text-xs text-[#6F7B85] xl:block">
            <p>
              {now.toLocaleDateString("es-MX", {
                weekday: "long",
                day: "2-digit",
                month: "short",
                year: "numeric",
              })}
            </p>

            <p className="font-semibold text-[#20262D]">
              {now.toLocaleTimeString("es-MX")} hrs
            </p>
          </div>
        )}

        <button className="relative rounded-lg p-2 text-[#6F7B85] hover:bg-[#F4F6F7]">
          <Bell size={19} />

          <span className="absolute right-0 top-0 flex h-4 w-4 items-center justify-center rounded-full bg-[#C34A45] text-[9px] font-bold text-white">
            4
          </span>
        </button>

        <button className="flex items-center gap-2 rounded-lg bg-[#2D7074] px-3 py-2 text-xs font-semibold text-white hover:bg-[#255F63]">
          <Plus size={16} />
          Nueva asignación
        </button>
      </div>
    </header>
  );
}