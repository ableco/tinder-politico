import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect } from "react";
import Button from "../components/Button";
import { HazteUna, ImpulsoPais } from "../components/icons";
import OGMetas from "../components/OGMetas";

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    document.querySelector("#__next").classList.add("scrollable");
    return () =>
      document.querySelector("#__next").classList.remove("scrollable");
  }, []);

  return (
    <div className="bg-gradient-to-b from-neutralGradient-start to-neutralGradient-end max-w-2xl mx-auto h-full overflow-hidden min-h-screen">
      <OGMetas />

      <div className="flex flex-col place-items-center px-12 py-24 h-full justify-center min-h-screen">
        <img src="/logo.png" alt="Logo" className="mb-11" />
        <h2 className="text-3xl text-white text-center mt-8 font-medium">
          Descubre tu match politico
        </h2>
        <h3 className="text-xl text-neutral-400 text-center my-8 font-light">
          Contesta estas preguntas y te diremos qué candidato tiene más
          compatibilidad contigo.
        </h3>
        <Button label="¡Empieza!" onClick={() => router.push("/preguntas/1")} />
        <div className="flex flex-col justify-center items-center mt-16">
          <p className="text-sm font-bold text-white">En alianza con:</p>
          <div className="flex flex-row justify-center items-center mt-4">
            <div className="mr-3">
              <Link href="https://www.instagram.com/hazteuna_/">
                <a rel="nofollow noopener noreferrer external" target="_blank">
                  <HazteUna />
                </a>
              </Link>
            </div>
            <Link href="https://www.instagram.com/impulsopais/">
              <a rel="nofollow noopener noreferrer external" target="_blank">
                <ImpulsoPais />
              </a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
