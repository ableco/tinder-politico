import { useRouter } from "next/router";
import Link from "next/link";
import Button from "../components/Button";
import Card from "../components/Card";
import ShareSection from "../components/ShareSection";
import { useEffect } from "react";

const temporalData = {
  recommendations: [
    {
      name: "Julio Guzmán",
      politicalParty: {
        name: "Partido Morado",
      },
      compatible: "99%",
      url: "https://politicalhub-client.herokuapp.com/candidates/9",
      img: "https://declara.jne.gob.pe/Assets/Fotos-HojaVida/135685.jpg",
    },
    {
      name: "Verónika Mendoza",
      politicalParty: {
        name: "Juntos por el Perú",
      },
      compatible: "79%",
      url: "https://politicalhub-client.herokuapp.com/candidates/65",
      img: "https://declara.jne.gob.pe/Assets/Fotos-HojaVida/135605.jpg",
    },
    {
      name: "Daniel Salaverry",
      politicalParty: {
        name: "Somos Perú",
      },
      compatible: "52%",
      url: "https://politicalhub-client.herokuapp.com/candidates/31",
      img: "https://declara.jne.gob.pe/Assets/Fotos-HojaVida/134382.jpg",
    },
  ],
};

export default function PreguntaPage() {
  const router = useRouter();
  const {
    recommendations: [firstCandidate, ...restCandidates],
  } = temporalData;

  useEffect(() => {
    document.querySelector("#__next").classList.add("scrollable");
    return () =>
      document.querySelector("#__next").classList.remove("scrollable");
  }, []);

  return (
    <div className="bg-gradient-to-b from-bgGradient-start to-bgGradient-end max-w-2xl mx-auto flex flex-col">
      <div className="py-4 shadow-lg justify-center flex">
        <h3 className="font-normal text-base text-neutral-800">Resultados</h3>
      </div>
      <div className="flex flex-col items-center flex-1 p-4">
        <Card>
          <div className="px-16 py-6 flex flex-col items-center justify-center">
            <img
              className="w-28 h-28 bg-neutral-200 rounded-full object-cover"
              src={firstCandidate.img}
              alt={firstCandidate.name}
            />
            <h4 className="font-medium text-xl text-neutral-800 text-center">
              {firstCandidate.name}
            </h4>
            <h5 className="font-light text-lg text-neutral-700 text-center">
              {firstCandidate.politicalParty.name}
            </h5>
            <span className="bg-gradient-to-l from-successGradient-start to-successGradient-end rounded-lg text-white px-6 py-1 font-normal text-xl mt-4 mb-6">
              {firstCandidate.compatible} Compatible
            </span>
            <Link href={firstCandidate.url}>
              <a className="font-normal text-lg text-link text-center underline">
                Ver Perfil
              </a>
            </Link>
          </div>
        </Card>
        <span className="font-normal text-lg text-secondary text-center my-6">
          Otras Recomendaciones
        </span>
        {restCandidates.map((candidate) => (
          <div className="mb-2 w-full" key={candidate.name}>
            <Card>
              <div className="p-6 flex w-full justify-between">
                <div className="flex">
                  <img
                    className="w-12 h-12 bg-neutral-200 rounded-full object-cover"
                    src={candidate.img}
                    alt={candidate.name}
                  />
                  <div className="mx-3 flex flex-col justify-between">
                    <div>
                      <p className="font-medium text-xl text-neutral-800">
                        {candidate.name} {candidate.name}
                      </p>
                      <p className="font-light text-lg text-neutral-700">
                        {candidate.politicalParty.name}
                      </p>
                    </div>
                    <div>
                      <Link href={candidate.url}>
                        <a className="font-normal text-lg text-link underline">
                          Ver Perfil
                        </a>
                      </Link>
                    </div>
                  </div>
                </div>
                <div>
                  <span className="block bg-gradient-to-l from-successGradient-start to-successGradient-end rounded-lg text-white px-3 py-1 font-normal text-xl">
                    {firstCandidate.compatible}
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
            onClick={() => router.push("/")}
          />
        </div>
        <ShareSection />
      </div>
    </div>
  );
}
