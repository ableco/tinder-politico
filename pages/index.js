import Head from "next/head";
import { useRouter } from "next/router";
import Button from "../components/Button";
import { Logo } from "../components/icons";

export default function Home() {
  const router = useRouter();

  return (
    <div className="bg-gradient-to-b from-neutralGradient-start to-neutralGradient-end max-w-2xl mx-auto h-full">
      <Head>
        <title>Busco Partido</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="flex flex-col place-items-center px-12 py-24 h-full justify-center">
        <Logo className="min-h-24" />
        <h2 className="text-3xl text-white text-center mt-8 font-medium">
          Descrube tu match politico
        </h2>
        <h3 className="text-xl text-neutral-400 text-center my-8 font-light">
          Contesta una serie de preguntas y te decimos que candidato tiene mas
          compatibilidad contigo.
        </h3>
        <Button label="¡Empieza!" onClick={() => router.push("/preguntas/1")} />
      </div>
    </div>
  );
}
