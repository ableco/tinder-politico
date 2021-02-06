import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Button from "../../components/Button";
import Option from "../../components/Option";
import useLocalStorage from "../../hooks/useLocalStorage";
import { questions } from "../../utils/questions";

export default function PreguntaPage() {
  const router = useRouter();
  const { pid } = router.query;
  const [, setResults] = useLocalStorage("results");
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const { id, question, answers } = questions.find(
    (element) => element.id == pid,
  ) || { id: "", question: "", answers: [] };

  function handleNext() {
    setResults((results) => {
      const newResults = {
        ...results,
        [pid]: selectedAnswer,
      };
      return newResults;
    });
    setSelectedAnswer(null);
    if (id == questions[questions.length - 1].id) {
      router.push("/results");
    } else {
      router.push(`/preguntas/${Number.parseInt(id) + 1}`);
    }
  }

  useEffect(() => {
    document.querySelector("#__next").classList.add("scrollable");
    return () =>
      document.querySelector("#__next").classList.remove("scrollable");
  }, []);

  useEffect(() => {
    if (pid > questions.length) {
      router.push("/");
    }
  }, [router, pid]);

  return (
    <div className="bg-gradient-to-b from-bgGradient-start to-bgGradient-end max-w-2xl mx-auto flex flex-col h-full">
      <div className="py-4 shadow-lg justify-center flex">
        <h3 className="font-normal text-base text-neutral-800">
          Pregunta {id} de 12
        </h3>
      </div>
      <div className="flex flex-col items-center flex-1">
        <h4 className="font-normal text-xl text-neutral-800 m-10 text-center">
          {question}
        </h4>
        <div className="flex flex-col items-center flex-1 w-full">
          {Object.values(answers).map((answer, index) => {
            let appearance = "default";
            if (selectedAnswer !== null) {
              selectedAnswer === index + 1
                ? (appearance = "active")
                : (appearance = "disabled");
            }
            function handleSelected(event) {
              event.preventDefault();
              setSelectedAnswer((current) =>
                current === index + 1 ? null : index + 1,
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
          <div className="my-7">
            <Button
              label="Siguiente"
              appearance={selectedAnswer !== null ? "default" : "disabled"}
              disabled={selectedAnswer == null}
              onClick={handleNext}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
