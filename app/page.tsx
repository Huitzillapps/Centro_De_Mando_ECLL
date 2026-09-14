"use client";

import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";
import GoogleTrafficMap from "@/components/GoogleTrafficMap";

export default function Home() {
  const router = useRouter();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [remember, setRemember] = useState(true);
  const [loading, setLoading] = useState(false);

 async function handleSubmit(event: FormEvent<HTMLFormElement>) {
  event.preventDefault();

  if (!username.trim() || !password.trim()) {
    return;
  }

  setLoading(true);

  // Simulación temporal del acceso para el MVP.
  await new Promise((resolve) => setTimeout(resolve, 900));

  router.push("/dashboard");
}

  return (
    <main className="min-h-screen bg-[#F4F6F7] text-[#20262D]">
      {/* Barra superior */}
      <header className="fixed left-0 top-0 z-50 flex h-14 w-full items-center border-b border-[#DCE2E6] bg-white/95 px-5 backdrop-blur">
        <div>
          <p className="text-sm font-semibold tracking-tight text-[#20262D]">
            ¿En cuánto llega?
          </p>

          <p className="text-[11px] text-[#6F7B85]">
            Centro de Mando
          </p>
        </div>
      </header>

      <div className="flex min-h-screen flex-col pt-14 lg:flex-row">
        {/* LOGIN - IZQUIERDA */}
        <section className="flex min-h-[calc(100vh-3.5rem)] w-full items-center justify-center bg-[#F4F6F7] px-5 py-10 lg:w-[42%] lg:px-10">
          <div className="w-full max-w-md">
            {/* Identidad */}
            <div className="mb-8">
              <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#DCE2E6] bg-white px-3 py-1.5">
                <span className="h-2 w-2 rounded-full bg-[#2D7074]" />

                <span className="text-[10px] font-semibold uppercase tracking-[0.12em] text-[#2D7074]">
                  Plataforma operativa
                </span>
              </div>

              <h1 className="text-3xl font-bold tracking-[-0.035em] text-[#20262D]">
                ¿En cuánto llega?
              </h1>

              <p className="mt-1 text-lg font-semibold text-[#2D7074]">
                Centro de Mando
              </p>

              <p className="mt-3 max-w-sm text-sm leading-6 text-[#6F7B85]">
                Supervisión y control de la operación del transporte.
              </p>
            </div>

            {/* Card */}
            <div className="rounded-2xl border border-[#DCE2E6] bg-white p-6 shadow-[0_12px_35px_rgba(32,38,45,0.06)] sm:p-8">
              <div className="mb-7">
                <h2 className="text-2xl font-bold tracking-tight text-[#20262D]">
                  Bienvenido
                </h2>

                <p className="mt-2 text-sm leading-6 text-[#6F7B85]">
                  Ingresa tus credenciales para acceder al Centro de Mando.
                </p>
              </div>

              <form
                onSubmit={handleSubmit}
                className="space-y-5"
              >
                {/* Usuario */}
                <div>
                  <label
                    htmlFor="username"
                    className="mb-2 block text-sm font-semibold text-[#20262D]"
                  >
                    Usuario o correo electrónico
                  </label>

                  <input
                    id="username"
                    name="username"
                    type="text"
                    autoComplete="username"
                    value={username}
                    onChange={(event) =>
                      setUsername(event.target.value)
                    }
                    placeholder="Ingresa tu usuario"
                    required
                    className="h-12 w-full rounded-xl border border-[#DCE2E6] bg-white px-4 text-sm text-[#20262D] outline-none transition placeholder:text-[#8A949E] hover:border-[#8A949E] focus:border-[#2D7074] focus:ring-4 focus:ring-[#DDEBEC]"
                  />
                </div>

                {/* Contraseña */}
                <div>
                  <label
                    htmlFor="password"
                    className="mb-2 block text-sm font-semibold text-[#20262D]"
                  >
                    Contraseña
                  </label>

                  <div className="relative">
                    <input
                      id="password"
                      name="password"
                      type={showPassword ? "text" : "password"}
                      autoComplete="current-password"
                      value={password}
                      onChange={(event) =>
                        setPassword(event.target.value)
                      }
                      placeholder="Ingresa tu contraseña"
                      required
                      className="h-12 w-full rounded-xl border border-[#DCE2E6] bg-white px-4 pr-20 text-sm text-[#20262D] outline-none transition placeholder:text-[#8A949E] hover:border-[#8A949E] focus:border-[#2D7074] focus:ring-4 focus:ring-[#DDEBEC]"
                    />

                    <button
                      type="button"
                      onClick={() =>
                        setShowPassword((current) => !current)
                      }
                      className="absolute inset-y-0 right-3 text-xs font-medium text-[#2D7074]"
                    >
                      {showPassword ? "Ocultar" : "Mostrar"}
                    </button>
                  </div>
                </div>

                {/* Utilidades */}
                <div className="flex items-center justify-between gap-4">
                  <label className="flex cursor-pointer items-center gap-2 text-sm text-[#6F7B85]">
                    <input
                      type="checkbox"
                      checked={remember}
                      onChange={(event) =>
                        setRemember(event.target.checked)
                      }
                      className="h-4 w-4 accent-[#2D7074]"
                    />

                    Recordarme
                  </label>

                  <button
                    type="button"
                    className="text-sm font-medium text-[#2D7074] hover:underline"
                  >
                    ¿Olvidaste tu contraseña?
                  </button>
                </div>

                {/* Ingresar */}
                <button
                  type="submit"
                  disabled={loading}
                  className="flex h-12 w-full items-center justify-center gap-2 rounded-xl bg-[#2D7074] px-4 text-sm font-semibold text-white shadow-sm transition hover:bg-[#255F63] focus:outline-none focus:ring-4 focus:ring-[#DDEBEC] disabled:cursor-wait disabled:opacity-70"
                >
                  {loading ? (
                    <>
                      <span className="h-4 w-4 animate-spin rounded-full border-2 border-white/40 border-t-white" />
                      Validando acceso...
                    </>
                  ) : (
                    "Ingresar"
                  )}
                </button>
              </form>

              <div className="mt-6 rounded-xl border border-[#DCE2E6] bg-[#F4F6F7] p-4">
                <p className="text-xs font-semibold text-[#20262D]">
                  Acceso restringido
                </p>

                <p className="mt-1 text-xs leading-5 text-[#6F7B85]">
                  El Centro de Mando está destinado únicamente a
                  personal autorizado.
                </p>
              </div>
            </div>

            <div className="mt-5 text-center">
              <p className="text-xs text-[#6F7B85]">
                ¿En cuánto llega? · Centro de Mando
              </p>
            </div>
          </div>
        </section>

        {/* MAPA - DERECHA */}
        <section className="h-[600px] w-full border-t border-[#DCE2E6] lg:h-[calc(100vh-3.5rem)] lg:w-[58%] lg:border-l lg:border-t-0">
          <GoogleTrafficMap />
        </section>
      </div>
    </main>
  );
}