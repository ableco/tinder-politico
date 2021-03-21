import { useEffect } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import { useQuery } from "react-query";
import Button from "../components/Button";
import Card from "../components/Card";
import ShareSection from "../components/ShareSection";
import useLocalStorage from "../hooks/useLocalStorage";
import titleize from "../utils/titleize";
import { questionsSize } from "../utils/questions";
import OGMetas from "../components/icons/OGMetas";
import { Instagram } from "../components/icons";

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
  const [results, setResults] = useLocalStorage("results");
  const { isLoading, error, data } = useQuery("calculation", () =>
    fetch(`/api/calculate?results=${JSON.stringify(results)}`).then((res) =>
      res.json(),
    ),
  );

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

  if (isLoading) return null;

  if (error) return null;

  if (data === undefined || data === null) return null;

  const {
    candidates: [firstCandidate, ...restCandidates],
  } = data;

  return (
    <div className="bg-gradient-to-b from-bgGradient-start to-bgGradient-end max-w-2xl mx-auto flex flex-col">
      <OGMetas />
      <div className="py-4 shadow-lg justify-center flex">
        <h3 className="font-normal text-base text-neutral-800">Resultados</h3>
      </div>
      <div className="flex flex-col items-center flex-1 p-4">
        <Card>
          <div className="px-16 py-6 flex flex-col items-center justify-center">
            <div className="flex flex-row">
              <img
                className="w-28 h-28 bg-neutral-200 rounded-lg object-cover border-neutral-200 border-2"
                src={firstCandidate.data.profile_photo_url}
                alt={titleize(
                  `${firstCandidate.data.names}  ${firstCandidate.data.family_name} ${firstCandidate.data.mothers_maiden_name}`,
                )}
              />
              <img
                className="w-28 h-28 bg-neutral-200 rounded-lg object-cover ml-4 border-neutral-200 border-2"
                src={firstCandidate.data.political_organization.logo}
                alt={firstCandidate.data.political_organization.name}
              />
            </div>
            <h4 className="font-medium text-xl text-neutral-800 text-center mt-4">
              {titleize(
                `${firstCandidate.data.names}  ${firstCandidate.data.family_name} ${firstCandidate.data.mothers_maiden_name}`,
              )}
            </h4>
            <h5 className="font-light text-lg text-neutral-700 text-center">
              {titleize(firstCandidate.data.political_organization.name)}
            </h5>
            <span className="bg-gradient-to-l from-successGradient-start to-successGradient-end rounded-lg text-white px-6 py-1 font-normal text-xl mt-4 mb-6">
              {Number.parseInt(firstCandidate.percentage)}% Compatible
            </span>
            <Link
              href={`https://www.yovoto.pe/candidates/${firstCandidate.data.id}`}
            >
              <a
                rel="nofollow noopener noreferrer external"
                target="_blank"
                className="font-normal text-lg text-link text-center underline"
              >
                Ver Perfil
              </a>
            </Link>
          </div>
        </Card>
        <span className="font-normal text-lg text-secondary text-center my-6">
          Otras Recomendaciones
        </span>
        {restCandidates.map((candidate) => (
          <div className="mb-2 w-full" key={candidate.id}>
            <Card>
              <div className="p-6 flex w-full justify-between">
                <div className="flex">
                  <div className="flex flex-col min-w-12">
                    <img
                      className="w-12 h-12 bg-neutral-200 rounded-lg object-cover border-neutral-200 border-2"
                      src={candidate.data.profile_photo_url}
                      alt={titleize(
                        `${candidate.data.names}  ${candidate.data.family_name} ${candidate.data.mothers_maiden_name}`,
                      )}
                    />
                    <img
                      className="w-12 h-12 bg-neutral-200 rounded-lg object-cover mt-1 border-neutral-200 border-2"
                      src={candidate.data.political_organization.logo}
                      alt={titleize(candidate.data.political_organization.name)}
                    />
                  </div>
                  <div className="mx-3 flex flex-col justify-between">
                    <div>
                      <p className="font-medium text-xl text-neutral-800">
                        {titleize(
                          `${candidate.data.names}  ${candidate.data.family_name} ${candidate.data.mothers_maiden_name}`,
                        )}
                      </p>
                      <p className="font-light text-lg text-neutral-700">
                        {titleize(candidate.data.political_organization.name)}
                      </p>
                    </div>
                    <div>
                      <Link
                        href={`https://www.yovoto.pe/candidates/${candidate.data.id}`}
                      >
                        <a
                          rel="nofollow noopener noreferrer external"
                          target="_blank"
                          className="font-normal text-lg text-link underline"
                        >
                          Ver Perfil
                        </a>
                      </Link>
                    </div>
                  </div>
                </div>
                <div>
                  <span className="block bg-gradient-to-l from-successGradient-start to-successGradient-end rounded-lg text-white px-3 py-1 font-normal text-xl">
                    {Number.parseInt(candidate.percentage)}%
                  </span>
                </div>
              </div>
            </Card>
          </div>
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
