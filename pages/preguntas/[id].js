import { useRouter } from "next/router";
import { useState } from "react";
import Button from "../../components/Button";
import Option from "../../components/Option";

const temporalQuestion =
  "¿Cómo defines tu posición frente al cambio climatico?";

const temporalAnswers = [
  "Estoy activamente comprometido",
  "Me interesa",
  "No es mi prioridad",
  "Soy indiferente",
  "Creo que todo es una farsa",
];

export default function PreguntaPage() {
  const router = useRouter();
  const { id } = router.query;
  const [selectedAnswer, setSelectedAnswer] = useState(null);

  return (
    <div className="bg-gradient-to-b from-bgGradient-start to-bgGradient-end max-w-2xl mx-auto flex flex-col h-full">
      <div className="py-4 shadow-lg justify-center flex">
        <h3 className="font-normal text-base text-neutral-800">
          Pregunta {id} de 12
        </h3>
      </div>
      <div className="flex flex-col items-center flex-1">
        <h4 className="font-normal text-xl text-neutral-800 m-10 text-center">
          {temporalQuestion}
        </h4>
        <div className="flex flex-col items-center flex-1 w-full">
          {temporalAnswers.map((answer, index) => {
            let appearance = "default";
            if (selectedAnswer !== null) {
              selectedAnswer === answer
                ? (appearance = "active")
                : (appearance = "disabled");
            }
            function handleSelected(event) {
              event.preventDefault();
              setSelectedAnswer((current) =>
                current === answer ? null : answer,
              );
            }

            return (
              <div className="mb-3 w-full px-4" key={index}>
                <Option
                  label={answer}
                  appearance={appearance}
                  onClick={handleSelected}
                />
              </div>
            );
          })}
          <div className="mt-7">
            <Button
              label="Siguiente"
              appearance={selectedAnswer !== null ? "default" : "disabled"}
              disabled={selectedAnswer == null}
              onClick={() => router.push("/results")}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
