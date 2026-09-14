import Sidebar from "@/components/dashboard/Sidebar";
import TopBar from "@/components/dashboard/TopBar";
import OperationalSummary from "@/components/dashboard/OperationalSummary";
import AlertsPanel from "@/components/dashboard/AlertsPanel";
import UpcomingServices from "@/components/dashboard/UpcomingServices";
import RecentActivity from "@/components/dashboard/RecentActivity";
import GoogleTrafficMap from "@/components/GoogleTrafficMap";

export default function Home() {
  return (
    <div className="flex h-screen overflow-hidden bg-[#F4F6F7] text-[#20262D]">
      <Sidebar />

      <div className="flex min-w-0 flex-1 flex-col">
        <TopBar />

        <main className="flex-1 overflow-y-auto p-5">
          <div className="mx-auto max-w-[1800px] space-y-5">
            <OperationalSummary />

            <section className="grid grid-cols-1 gap-5 xl:grid-cols-12">
              {/* MAPA */}
              <div className="overflow-hidden rounded-xl border border-[#DCE2E6] bg-white xl:col-span-8">
                <div className="relative h-[570px]">
                  {/* Toolbar superior */}
                  <div className="pointer-events-none absolute left-3 right-3 top-3 z-20 flex flex-wrap items-center justify-between gap-3">
                    <div className="pointer-events-auto flex rounded-lg border border-[#DCE2E6] bg-white/95 p-1 shadow-sm">
                      <button className="rounded-md bg-[#2D7074] px-3 py-1.5 text-xs font-semibold text-white">
                        Todas (38)
                      </button>

                      <button className="rounded-md px-3 py-1.5 text-xs font-medium text-[#6F7B85] hover:bg-[#F4F6F7]">
                        En operación (32)
                      </button>

                      <button className="rounded-md px-3 py-1.5 text-xs font-medium text-[#6F7B85] hover:bg-[#F4F6F7]">
                        Con alerta (4)
                      </button>

                      <button className="rounded-md px-3 py-1.5 text-xs font-medium text-[#6F7B85] hover:bg-[#F4F6F7]">
                        Sin conexión (2)
                      </button>
                    </div>

                    <input
                      type="search"
                      placeholder="Buscar unidad, operador o ruta..."
                      className="pointer-events-auto h-9 w-64 rounded-lg border border-[#DCE2E6] bg-white/95 px-3 text-xs outline-none shadow-sm placeholder:text-[#8A949E] focus:border-[#2D7074]"
                    />
                  </div>

                  <GoogleTrafficMap />

                  {/* Leyenda de unidades */}
                  <div className="pointer-events-none absolute bottom-4 left-4 z-20 flex flex-wrap gap-3 rounded-lg border border-[#DCE2E6] bg-white/95 px-3 py-2 text-xs shadow-sm">
                    <StatusDot color="#2E7D5B" label="Operando" />
                    <StatusDot color="#C18A32" label="Atención" />
                    <StatusDot color="#C34A45" label="Crítico" />
                    <StatusDot color="#7D858C" label="Sin conexión" />
                  </div>
                </div>
              </div>

              {/* ALERTAS */}
              <div className="xl:col-span-4">
                <AlertsPanel />
              </div>
            </section>

            <section className="grid grid-cols-1 gap-5 xl:grid-cols-12">
              <div className="xl:col-span-7">
                <UpcomingServices />
              </div>

              <div className="xl:col-span-5">
                <RecentActivity />
              </div>
            </section>
          </div>
        </main>
      </div>
    </div>
  );
}

function StatusDot({
  color,
  label,
}: {
  color: string;
  label: string;
}) {
  return (
    <div className="flex items-center gap-1.5 text-[#36414A]">
      <span
        className="h-2.5 w-2.5 rounded-full"
        style={{ backgroundColor: color }}
      />
      {label}
    </div>
  );
}