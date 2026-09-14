"use client";

import {
  AlertTriangle,
  Bus,
  CalendarDays,
  ClipboardList,
  FileText,
  LayoutDashboard,
  LogOut,
  Map,
  Route,
  Settings,
  Users,
  UserRound,
} from "lucide-react";

const items = [
  { label: "Inicio", icon: LayoutDashboard, active: true },
  { label: "Mapa en vivo", icon: Map },
  { label: "Viajes", icon: Route },
  { label: "Unidades", icon: Bus },
  { label: "Operadores", icon: Users },
  { label: "Asignaciones", icon: ClipboardList },
  { label: "Calendario", icon: CalendarDays },
  { label: "Incidentes", icon: AlertTriangle, badge: 2 },
  { label: "Documentación", icon: FileText },
  { label: "Reportes", icon: FileText },
];

export default function Sidebar() {
  return (
    <aside className="hidden h-screen w-[230px] shrink-0 flex-col justify-between border-r border-[#DCE2E6] bg-white lg:flex">
      <div>
        <div className="flex h-16 items-center gap-3 border-b border-[#DCE2E6] px-4">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#2D7074] text-white">
            <Bus size={20} />
          </div>

          <div className="min-w-0">
            <p className="truncate text-sm font-bold">¿En cuánto llega?</p>
            <p className="text-xs text-[#6F7B85]">Centro de Mando</p>
          </div>
        </div>

        <nav className="space-y-1 p-2">
          {items.map(({ label, icon: Icon, active, badge }) => (
            <button
              key={label}
              className={`flex w-full items-center justify-between rounded-lg px-3 py-2.5 text-left text-sm transition ${
                active
                  ? "bg-[#DDEBEC] font-semibold text-[#2D7074]"
                  : "text-[#6F7B85] hover:bg-[#F4F6F7] hover:text-[#20262D]"
              }`}
            >
              <div className="flex items-center gap-3">
                <Icon size={18} />
                <span>{label}</span>
              </div>

              {badge && (
                <span className="rounded-full bg-[#C34A45]/10 px-2 py-0.5 text-[10px] font-bold text-[#C34A45]">
                  {badge}
                </span>
              )}
            </button>
          ))}
        </nav>
      </div>

      <div className="border-t border-[#DCE2E6] p-2">
        <button className="flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-sm text-[#6F7B85] hover:bg-[#F4F6F7]">
          <Settings size={18} />
          Configuración
        </button>

        <div className="mt-2 flex items-center justify-between rounded-xl border border-[#DCE2E6] bg-[#F4F6F7] p-3">
          <div className="flex min-w-0 items-center gap-2">
            <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#2D7074] text-white">
              <UserRound size={16} />
            </div>

            <div className="min-w-0">
              <p className="truncate text-xs font-semibold">
                Usuario demo
              </p>
              <p className="truncate text-[10px] text-[#6F7B85]">
                Supervisor operativo
              </p>
            </div>
          </div>

          <button
            title="Cerrar sesión"
            className="text-[#6F7B85] hover:text-[#20262D]"
          >
            <LogOut size={16} />
          </button>
        </div>
      </div>
    </aside>
  );
}