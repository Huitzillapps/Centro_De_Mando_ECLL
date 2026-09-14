const alerts = [
  {
    type: "CRÍTICO",
    title: "ECO-017 · Unidad sin conexión",
    description: "Última posición recibida hace 3 minutos.",
    time: "Hace 3 min",
    color: "#C34A45",
    background: "#FDF2F2",
  },
  {
    type: "ATENCIÓN",
    title: "ECO-023 · Exceso de velocidad",
    description: "Velocidad registrada fuera del rango configurado.",
    time: "Hace 5 min",
    color: "#C18A32",
    background: "#FEF6EB",
  },
  {
    type: "DOCUMENTACIÓN",
    title: "Operador OP-042",
    description: "Licencia del operador próxima a vencer.",
    time: "3 días",
    color: "#47758F",
    background: "#EBF3F7",
  },
  {
    type: "INCIDENTE",
    title: "ECO-008 · Incidente reportado",
    description: "Evento operativo pendiente de seguimiento.",
    time: "Hace 12 min",
    color: "#C34A45",
    background: "#FDF2F2",
  },
];

export default function AlertsPanel() {
  return (
    <section className="flex h-[570px] flex-col rounded-xl border border-[#DCE2E6] bg-white">
      <header className="flex items-center justify-between border-b border-[#DCE2E6] p-4">
        <div>
          <h2 className="text-sm font-bold">Alertas y eventos</h2>
          <p className="mt-0.5 text-xs text-[#6F7B85]">
            Atención operativa
          </p>
        </div>

        <span className="rounded-full bg-[#C34A45]/10 px-2 py-1 text-[10px] font-bold text-[#C34A45]">
          4 activas
        </span>
      </header>

      <div className="flex-1 space-y-3 overflow-y-auto p-3">
        {alerts.map((alert) => (
          <article
            key={alert.title}
            className="rounded-lg border border-[#DCE2E6] p-3"
            style={{
              borderLeftWidth: 4,
              borderLeftColor: alert.color,
              backgroundColor: alert.background,
            }}
          >
            <div className="flex items-start justify-between gap-2">
              <div>
                <span
                  className="rounded px-1.5 py-0.5 text-[9px] font-bold text-white"
                  style={{ backgroundColor: alert.color }}
                >
                  {alert.type}
                </span>

                <p className="mt-2 text-xs font-bold">
                  {alert.title}
                </p>
              </div>

              <span className="whitespace-nowrap text-[10px] text-[#6F7B85]">
                {alert.time}
              </span>
            </div>

            <p className="mt-2 text-xs leading-5 text-[#556069]">
              {alert.description}
            </p>
          </article>
        ))}
      </div>

      <button className="border-t border-[#DCE2E6] p-3 text-xs font-semibold text-[#2D7074] hover:bg-[#F4F6F7]">
        Ver todas las alertas
      </button>
    </section>
  );
}