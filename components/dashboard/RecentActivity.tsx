const activity = [
  {
    time: "21:42",
    text: "ECO-032 inició viaje en Ruta 12.",
    color: "#2E7D5B",
  },
  {
    time: "21:39",
    text: "Se registró un incidente en ECO-008.",
    color: "#C34A45",
  },
  {
    time: "21:31",
    text: "ECO-017 perdió conexión.",
    color: "#7D858C",
  },
  {
    time: "21:20",
    text: "Se actualizó una asignación operativa.",
    color: "#47758F",
  },
];

export default function RecentActivity() {
  return (
    <section className="h-full rounded-xl border border-[#DCE2E6] bg-white p-4">
      <header className="border-b border-[#DCE2E6] pb-3">
        <h2 className="text-sm font-bold">Actividad reciente</h2>
        <p className="mt-0.5 text-xs text-[#6F7B85]">
          Bitácora de operaciones
        </p>
      </header>

      <div className="mt-4 space-y-4">
        {activity.map((item) => (
          <div
            key={`${item.time}-${item.text}`}
            className="flex items-start gap-3"
          >
            <span className="rounded border border-[#DCE2E6] bg-[#F4F6F7] px-2 py-1 text-[10px] font-semibold text-[#6F7B85]">
              {item.time}
            </span>

            <p className="flex-1 text-xs leading-5">
              {item.text}
            </p>

            <span
              className="mt-1.5 h-2 w-2 rounded-full"
              style={{ backgroundColor: item.color }}
            />
          </div>
        ))}
      </div>
    </section>
  );
}