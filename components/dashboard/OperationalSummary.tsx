import {
  AlertTriangle,
  Bus,
  FileWarning,
  Route,
  Siren,
} from "lucide-react";

const cards = [
  {
    label: "Unidades activas",
    value: "32",
    detail: "de 38 asignadas",
    icon: Bus,
    color: "#2E7D5B",
    background: "#E8F5E9",
  },
  {
    label: "Viajes en curso",
    value: "18",
    detail: "operación activa",
    icon: Route,
    color: "#2D7074",
    background: "#DDEBEC",
  },
  {
    label: "Alertas activas",
    value: "4",
    detail: "2 requieren atención",
    icon: AlertTriangle,
    color: "#C18A32",
    background: "#FEF6EB",
  },
  {
    label: "Incidentes abiertos",
    value: "2",
    detail: "1 en seguimiento",
    icon: Siren,
    color: "#C34A45",
    background: "#FDF2F2",
  },
  {
    label: "Documentos",
    value: "6",
    detail: "por atender",
    icon: FileWarning,
    color: "#47758F",
    background: "#EBF3F7",
  },
];

export default function OperationalSummary() {
  return (
    <section className="grid grid-cols-1 gap-3 sm:grid-cols-2 xl:grid-cols-5">
      {cards.map((card) => {
        const Icon = card.icon;

        return (
          <div
            key={card.label}
            className="rounded-xl border border-[#DCE2E6] bg-white p-4"
          >
            <div className="flex items-center justify-between">
              <span className="text-[10px] font-semibold uppercase tracking-[0.08em] text-[#6F7B85]">
                {card.label}
              </span>

              <div
                className="flex h-8 w-8 items-center justify-center rounded-lg"
                style={{
                  backgroundColor: card.background,
                  color: card.color,
                }}
              >
                <Icon size={17} />
              </div>
            </div>

            <div className="mt-3 flex items-end gap-2">
              <span className="text-3xl font-bold leading-none">
                {card.value}
              </span>

              <span className="text-xs text-[#6F7B85]">
                {card.detail}
              </span>
            </div>
          </div>
        );
      })}
    </section>
  );
}