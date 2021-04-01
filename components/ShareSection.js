import { Facebook, Twitter, Whatsapp } from "./icons";
import Link from "next/link";
import useCopyClipboard from "react-use-clipboard";

const url = "https://www.yovoto.pe";
const encodedUrl = encodeURIComponent(url);
const text =
  "¿No sabes por quién votar? Responde una serie de preguntas y descubre el candidato mas compatible con tus preferencias:";

const twitterUrl = `https://twitter.com/share?url=${encodedUrl}"&text="${encodeURIComponent(
  text,
)}`;

const facebookUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`;

const whatsappUrl = `whatsapp://send?text=${encodeURIComponent(
  text,
)} ${encodedUrl}`;

export default function ShareSection() {
  const [isCopied, setCopied] = useCopyClipboard(url, {
    successDuration: 1000,
  });

  return (
    <div className="flex flex-col items-center">
      <p className="font-normal text-lg">Comparte este juego en tus redes:</p>
      <div className="flex flex-col relative">
        <button
          onClick={setCopied}
          className="font-light border-neutral-400 border-2 bg-white text-base px-6 py-3 my-3 rounded-lg focus:outline-none"
        >
          {isCopied ? "Copiado" : url}
        </button>
      </div>
      <div className="flex justify-center mb-8">
        <Link href={twitterUrl}>
          <a rel="nofollow noopener noreferrer external" target="_blank">
            <Twitter />
          </a>
        </Link>
        <div className="mx-4">
          <Link href={facebookUrl}>
            <a rel="nofollow noopener noreferrer external" target="_blank">
              <Facebook />
            </a>
          </Link>
        </div>
        <Link href={whatsappUrl}>
          <a rel="nofollow noopener noreferrer external" target="_blank">
            <Whatsapp />
          </a>
        </Link>
      </div>
    </div>
  );
}
