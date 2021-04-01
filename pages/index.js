import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect } from "react";
import Button from "../components/Button";
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
        <img src="/logo.png" alt="Logo" className="mb-4" />
        <h2 className="text-2xl text-white text-center font-medium italic">
          Descubre tu match politico
        </h2>
        <h3 className="text-sm text-neutral-400 text-center my-8 font-light">
          Encuentra al candidato que tiene posturas más compatibles con las
          tuyas. Pero recuerda que nada ni nadie debe decirte por quién votar,
          esa decisión es tuya.
        </h3>
        <Button label="¡Empieza!" onClick={() => router.push("/preguntas/1")} />
        <div className="flex flex-col justify-center items-center mt-16">
          <div className="flex flex-row justify-center items-center mt-4">
            <div className="mr-6">
              <Link href="https://www.instagram.com/hazteuna_/">
                <a rel="nofollow noopener noreferrer external" target="_blank">
                  <img src="/hazteuna.png" width="64" alt="Hazte Una" />
                </a>
              </Link>
            </div>
            <Link href="https://www.instagram.com/impulsopais/">
              <a rel="nofollow noopener noreferrer external" target="_blank">
                <img src="/impulsopais.png" width="64" alt="Impulso Pais" />
              </a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
