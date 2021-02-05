import { Facebook, Twitter, Whatsapp } from "./icons";

export default function ShareSection() {
  return (
    <div className="flex flex-col items-center">
      <p className="font-normal text-lg">Comparte este juego en tus redes:</p>
      <button className="font-light border-neutral-400 border-2 bg-white text-base px-6 py-3 my-3 rounded-lg">
        https://tinder-politico.herokuapp.com
      </button>
      <div className="flex justify-center mb-8">
        <Twitter />
        <div className="mx-4">
          <Facebook />
        </div>
        <Whatsapp />
      </div>
    </div>
  );
}
