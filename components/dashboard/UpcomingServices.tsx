const services = [
  {
    time: "22:00",
    route: "Ruta 04",
    unit: "ECO-021",
    operator: "M. Hernández",
    status: "Asignado",
    color: "#2E7D5B",
    bg: "#E8F5E9",
  },
  {
    time: "22:15",
    route: "Ruta 12",
    unit: "ECO-032",
    operator: "J. Ramírez",
    status: "En espera",
    color: "#47758F",
    bg: "#EBF3F7",
  },
  {
    time: "22:30",
    route: "Ruta 08",
    unit: "—",
    operator: "—",
    status: "Sin asignar",
    color: "#C18A32",
    bg: "#FEF6EB",
  },
  {
    time: "22:45",
    route: "Ruta 02",
    unit: "ECO-019",
    operator: "A. Morales",
    status: "Asignado",
    color: "#2E7D5B",
    bg: "#E8F5E9",
  },
];

export default function UpcomingServices() {
  return (
    <section className="overflow-hidden rounded-xl border border-[#DCE2E6] bg-white">
      <header className="flex items-center justify-between border-b border-[#DCE2E6] p-4">
        <div>
          <h2 className="text-sm font-bold">Próximos servicios</h2>
          <p className="mt-0.5 text-xs text-[#6F7B85]">
            Salidas programadas
          </p>
        </div>

        <button className="text-xs font-semibold text-[#2D7074]">
          Ver calendario
        </button>
      </header>

      <div className="overflow-x-auto">
        <table className="w-full text-left text-xs">
          <thead className="bg-[#F4F6F7] text-[10px] uppercase text-[#6F7B85]">
            <tr>
              <th className="px-4 py-3">Hora</th>
              <th className="px-4 py-3">Ruta</th>
              <th className="px-4 py-3">Unidad</th>
              <th className="px-4 py-3">Operador</th>
              <th className="px-4 py-3 text-right">Estado</th>
            </tr>
          </thead>

          <tbody>
            {services.map((service) => (
              <tr
                key={`${service.time}-${service.route}`}
                className="border-t border-[#DCE2E6]"
              >
                <td className="px-4 py-3 font-semibold">{service.time}</td>
                <td className="px-4 py-3">{service.route}</td>
                <td className="px-4 py-3 text-[#6F7B85]">
                  {service.unit}
                </td>
                <td className="px-4 py-3">{service.operator}</td>

                <td className="px-4 py-3 text-right">
                  <span
                    className="rounded px-2 py-1 text-[10px] font-semibold"
                    style={{
                      color: service.color,
                      backgroundColor: service.bg,
                    }}
                  >
                    {service.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}