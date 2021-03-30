import { useRouter } from "next/router";
import { useEffect, useMemo, useState } from "react";
import Button from "../../components/Button";
import { Back } from "../../components/icons";
import OGMetas from "../../components/OGMetas";
import Option from "../../components/Option";
import useLocalStorage from "../../hooks/useLocalStorage";
import { questions } from "../../utils/questions";

function AnswerItem({ answer, value, selectedAnswer, setSelectedAnswer }) {
  let appearance = "default";
  if (selectedAnswer !== null) {
    selectedAnswer === value
      ? (appearance = "active")
      : (appearance = "disabled");
  }
  function handleSelected(event) {
    event.preventDefault();
    setSelectedAnswer((current) => (current === value ? null : value));
  }

  return (
    <div className="mb-3 w-full px-4">
      <Option label={answer} appearance={appearance} onClick={handleSelected} />
    </div>
  );
}

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

  function handlePrevious(event) {
    event.preventDefault();
    if (id == 1) {
      router.push("/");
    } else {
      router.push(`/preguntas/${Number.parseInt(id) - 1}`);
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

  const shuffledAnswers = useMemo(
    () =>
      Object.entries(answers)
        .filter(([_key, answer]) => answer !== null)
        .sort(() => Math.random() - 0.5),
    [answers],
  );

  return (
    <div className="bg-white max-w-2xl mx-auto flex flex-col h-full min-h-screen">
      <OGMetas />
      <div className="py-4 items-center flex flex-col shadow-lg">
        <div className="flex items-center justify-center w-full h-12 relative">
          <button
            className="p-1 absolute left-1 sm:left-1 md:left-5 top-1"
            onClick={handlePrevious}
          >
            <Back stroke="#3F305F" />
          </button>
          <h3 className="font-normal text-base text-black">
            Pregunta {id} de {questions.length}
          </h3>
          <div />
        </div>
        <div className="flex mt-1">
          {Array.apply(
            null,
            // eslint-disable-next-line unicorn/new-for-builtins
            Array(questions.length),
          ).map((_val, idx) => (
            <div
              key={idx}
              className={`${
                id >= idx + 1 ? "bg-green" : "bg-gray-light"
              } w-4 sm:w-4 md:w-6 h-1 mx-0.5`}
            ></div>
          ))}
        </div>
      </div>
      <div className="flex flex-col items-center flex-1">
        <h4 className="font-normal text-xl text-black m-10 text-center">
          {question}
        </h4>
        <div className="flex flex-col items-center flex-1 w-full">
          {shuffledAnswers.map(([key, answer]) => (
            <AnswerItem
              key={key}
              answer={answer}
              value={Number(key.slice(-1))}
              selectedAnswer={selectedAnswer}
              setSelectedAnswer={setSelectedAnswer}
            />
          ))}
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
