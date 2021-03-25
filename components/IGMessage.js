import { Instagram } from "./icons";

export default function IGMessage() {
  return (
    <div className="border-neutral-400 border-2 rounded-lg px-6 py-4 flex flex-col items-center">
      <Instagram />
      <p className="mt-4 text-lg text-center">
        Tómale screenshot a tus resultados y compártelo en tus stories
      </p>
    </div>
  );
}
