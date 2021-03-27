import { useEffect } from "react";
import { useRouter } from "next/router";
import Button from "../components/Button";
import ShareSection from "../components/ShareSection";
import useLocalStorage from "../hooks/useLocalStorage";
import { questionsSize } from "../utils/questions";
import calculateResults from "../utils/calculateResults";
import OGMetas from "../components/OGMetas";
import RestCandidateCard from "../components/RestCandidateCard";
import FirstCandidateCard from "../components/FirstCandidateCard";

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
    <div className="bg-gradient-to-b from-bgGradient-start to-bgGradient-end max-w-2xl mx-auto flex flex-col items-center min-h-screen">
      <OGMetas />
      <div className="mt-8 justify-center flex">
        <h3 className="font-extrabold text-xl text-black">
          Tu match político es...
        </h3>
      </div>
      <div className="flex flex-col items-center flex-1 p-4 pt-0">
        <div className="flex items-start">
          {firstCandidates.map((firstCandidate) => (
            <FirstCandidateCard
              key={firstCandidate?.id}
              candidate={firstCandidate}
              size={firstCandidates.length}
            />
          ))}
        </div>
        <div className="w-52 h-52 flex flex-col justify-center items-center bg-green shadow-xl rounded-full px-6 py-1 mt-2 mb-8">
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
        <div className="mt-7">
          <Button
            label="Jugar de nuevo"
            appearance="black"
            onClick={handlePlayAgain}
          />
        </div>
        <ShareSection />
      </div>
    </div>
  );
}
