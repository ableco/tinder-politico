import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect } from "react";
import Button from "../components/Button";
import { HazteUna, ImpulsoPais, TuDecides } from "../components/icons";
import OGMetas from "../components/OGMetas";

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    document.querySelector("#__next").classList.add("scrollable");
    return () =>
      document.querySelector("#__next").classList.remove("scrollable");
  }, []);

  return (
    <div className="bg-white max-w-2xl mx-auto h-full overflow-hidden min-h-screen">
      <OGMetas />

      <div className="flex flex-col place-items-center px-12 py-24 h-full justify-center min-h-screen">
        <img src="/logo.png" alt="Logo" className="origin-right mb-11 w logo" />
        <div className="mb-3">
          <TuDecides />
        </div>
        <h2 className="text-4xl text-black text-center mb-2 font-extrabold">
          ¿Con cuál partido político simpatizas?
        </h2>
        <h3 className="text-2xl text-black text-center mb-4 font-light">
          Este test te lo dirá
        </h3>
        <Button
          label="Empezar"
          appearance="white"
          onClick={() => router.push("/preguntas/1")}
        />
        <div className="flex flex-col justify-center items-center mt-16">
          <p className="text-sm font-bold text-black">En alianza con:</p>
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
