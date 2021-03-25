import { useEffect } from "react";
import { useRouter } from "next/router";
import Button from "../components/Button";
import ShareSection from "../components/ShareSection";
import useLocalStorage from "../hooks/useLocalStorage";
import { questionsSize } from "../utils/questions";
import calculateResults from "../utils/calculateResults";
import OGMetas from "../components/icons/OGMetas";
import { Instagram } from "../components/icons";
import RestCandidate from "../components/RestCandidate";

function IGMessage() {
  return (
    <div className="border-neutral-400 border-2 rounded-lg px-6 py-4 flex flex-col items-center">
      <Instagram />
      <p className="mt-4 text-lg text-center">
        Tómale screenshot a tus resultados y compártelo en tus stories
      </p>
    </div>
  );
}

function Disclaimer() {
  return (
    <div className="my-8">
      <p className="text-base font-light text-center text-neutral-700">
        Este juego está basado en declaraciones, propuestas y planes de gobierno
        de los partidos y sus candidatos a la presidencia. Te puede ayudar a
        identificar cuáles se acercan más a tus intereses, pero igual te
        recomendamos seguir investigando a tus candidatos y conociendo sus
        posturas políticas, económicas y sociales.
      </p>
    </div>
  );
}

export default function PreguntaPage() {
  const router = useRouter();
  const [results, setResults] = useLocalStorage("results", {});

  const candidates = calculateResults(results);

  // eslint-disable-next-line unicorn/prefer-negative-index
  const firstCandidates = candidates.slice(0, candidates.length - 2);

  // eslint-disable-next-line unicorn/prefer-negative-index
  const restCandidates = candidates.slice(candidates.length - 2);

  function handlePlayAgain() {
    setResults({});
    router.push("/");
  }

  useEffect(() => {
    document.querySelector("#__next").classList.add("scrollable");
    return () =>
      document.querySelector("#__next").classList.remove("scrollable");
  }, []);

  useEffect(() => {
    if (Object.keys(results || {}).length !== questionsSize) {
      router.push("/");
    }
  }, [router, results]);

  return (
    <div className="bg-gradient-to-b from-bgGradient-start to-bgGradient-end max-w-2xl mx-auto flex flex-col">
      <OGMetas />
      <div className="py-4 shadow-lg justify-center flex">
        <h3 className="font-normal text-base text-neutral-800">Resultados</h3>
      </div>
      <div className="flex flex-col items-center flex-1 p-4">
        {firstCandidates.map((firstCandidate) => (
          <RestCandidate
            candidate={firstCandidate}
            key={firstCandidate.data.id}
            number={1}
          />
        ))}
        {restCandidates.map((candidate, index) => (
          <RestCandidate
            key={candidate.data.id}
            candidate={candidate}
            number={index + 2}
          />
        ))}
        <div className="m-7">
          <Button
            label="Juega de Nuevo"
            appearance="default"
            onClick={handlePlayAgain}
          />
        </div>
        <ShareSection />
        <IGMessage />
        <Disclaimer />
      </div>
    </div>
  );
}
