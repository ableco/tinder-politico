import { useRouter } from "next/router";
import { useEffect, useMemo } from "react";
import { Back } from "../../components/icons";
import OGMetas from "../../components/OGMetas";
import Option from "../../components/Option";
import useLocalStorage from "../../hooks/useLocalStorage";
import { questions } from "../../utils/questions";

const LETTERS = ["A", "B", "C", "D", "E"];

function AnswerItem({ letter, answer, value, handleNext }) {
  function handleSelected(event) {
    event.preventDefault();
    handleNext(value);
  }

  return (
    <div className="mb-3 w-full px-4">
      <Option
        label={answer}
        appearance="gray"
        onClick={handleSelected}
        letter={letter}
      />
    </div>
  );
}

export default function PreguntaPage() {
  const router = useRouter();
  const { pid } = router.query;
  const [, setResults] = useLocalStorage("results");
  const { id, question, answers } = questions.find(
    (element) => element.id == pid,
  ) || { id: "", question: "", answers: [] };

  function handleNext(value) {
    setResults((results) => {
      const newResults = {
        ...results,
        [pid]: value,
      };
      return newResults;
    });
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
      <div className="py-4 items-center flex flex-col">
        <div className="flex items-center justify-center w-full h-12 relative">
          <button
            className="p-1 absolute left-1 sm:left-1 md:left-5 top-1"
            onClick={handlePrevious}
          >
            <Back />
          </button>
          <h3 className="font-extrabold text-xl text-black">
            Descubre tu match político
          </h3>
          <div />
        </div>
        <div className="flex mt-4">
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
        <h4 className="font-extrabold text-2xl text-black my-10 mx-4 text-center">
          {id}. {question}
        </h4>
        <div className="flex flex-col items-center flex-1 w-full">
          {shuffledAnswers.map(([key, answer], index) => (
            <AnswerItem
              key={key}
              letter={LETTERS[index]}
              answer={answer}
              value={Number(key.slice(-1))}
              handleNext={handleNext}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
