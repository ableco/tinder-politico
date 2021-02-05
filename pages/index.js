import Head from "next/head";
import { useRouter } from "next/router";
import Button from "../components/Button";
import { Logo } from "../components/icons";

export default function Home() {
  const router = useRouter();

  return (
    <div className="bg-gradient-to-b from-bgGradient-start to-bgGradient-end max-w-2xl mx-auto h-full">
      <Head>
        <title>Tinder Politico</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="flex flex-col place-items-center px-12 py-24 h-full justify-center">
        <Logo className="min-h-16" />
        <h2 className="text-3xl text-neutral-800 text-center mt-16 font-medium">
          Descubre tu match para las elecciones de Abril
        </h2>
        <h3 className="text-base text-neutral-700 text-center my-8 font-light">
          Contesta una serie de preguntas y te decimos que candidato tiene mas
          compatibilidad contigo.
        </h3>
        <Button label="¡Empieza!" onClick={() => router.push("/preguntas/1")} />
      </div>
    </div>
  );
}
