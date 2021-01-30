import Head from "next/head";
import Button from "../components/Button";
import Logo from "../components/icons/Logo";

export default function Home() {
  return (
    <div className="bg-gradient-to-b from-bgGradient-start to-bgGradient-end max-w-2xl mx-auto">
      <Head>
        <title>Tinder Politico</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="flex flex-col place-items-center px-12 py-24">
        <Logo />
        <h2 className="text-3xl text-neutral-800 text-center mt-16">
          Descubre tu match para las elecciones de Abril
        </h2>
        <h3 className="text-base text-neutral-700 text-center my-8">
          Contesta una serie de preguntas y te decimos que candidato tiene mas
          compatibilidad contigo.
        </h3>
        <Button label="Empieza!" />
      </div>
    </div>
  );
}
