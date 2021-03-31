import { useEffect } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import Button from "../components/Button";
import ShareSection from "../components/ShareSection";
import useLocalStorage from "../hooks/useLocalStorage";
import { questionsSize } from "../utils/questions";
import calculateResults from "../utils/calculateResults";
import OGMetas from "../components/OGMetas";
import RestCandidateCard from "../components/RestCandidateCard";
import IGMessage from "../components/IGMessage";
import Disclaimer from "../components/Disclaimer";
import FirstCandidateCard from "../components/FirstCandidateCard";
import { HazteUna, ImpulsoPais } from "../components/icons";

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
      <div className="py-4 shadow-lg justify-between items-center flex flex-col xs:flex-col sm:flex-row md:flex-row">
        <div className="w-36" />
        <h3 className="font-normal text-base text-black">Resultados</h3>
        <div className="flex flex-row justify-center items-center mt-2 xs:mt-2 sm:mt-0 md:mt-0">
          <div className="mr-3">
            <Link href="https://www.instagram.com/impulsopais/">
              <a rel="nofollow noopener noreferrer external" target="_blank">
                <ImpulsoPais height="32px" />
              </a>
            </Link>
          </div>
          <Link href="https://www.instagram.com/hazteuna_/">
            <a rel="nofollow noopener noreferrer external" target="_blank">
              <HazteUna textcolor="#000000" height="32px" />
            </a>
          </Link>
        </div>
      </div>
      <div className="flex flex-col items-center flex-1 p-4">
        <div className="flex items-start">
          {firstCandidates.map((firstCandidate) => (
            <FirstCandidateCard
              key={firstCandidate?.id}
              candidate={firstCandidate}
              size={firstCandidates.length}
            />
          ))}
        </div>
        <div className="w-52 h-52 flex flex-col justify-center items-center bg-gradient-to-l from-successGradient-start to-successGradient-end shadow-xl rounded-full px-6 py-1 mt-2 mb-8">
          <span className="font-extrabold text-center text-5xl text-black">
            {firstCandidates?.[0]?.percentage}%
          </span>
          <span className="font-extrabold text-center text-sm text-black mt-1">
            COMPATIBLE
          </span>
        </div>
        <div className="flex justify-start w-full mb-4 px-1">
          <p className="font-extrabold text-gray-base text-lg">
            Otros compatibles
          </p>
        </div>
        <div>
          {restCandidates.map((candidate) => (
            <RestCandidateCard key={candidate?.id} candidate={candidate} />
          ))}
        </div>
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
