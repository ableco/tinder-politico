import Link from "next/link";
import titleize from "../utils/titleize";

export default function FirstCandidateCard({ candidate, size }) {
  return (
    <div className="px-2 sm:px-4 md:px-16 py-6 flex flex-col items-center justify-center flex-1">
      <div className="flex flex-row relative">
        <Link
          href={`https://www.yovoto.pe/candidates/${candidate.data.id}?activeTab=Perfil+Político`}
        >
          <a rel="nofollow noopener noreferrer external" target="_blank">
            <img
              className={`${
                size > 1 ? "w-20 h-20" : "w-28 h-28"
              } bg-white rounded-full shadow-button object-cover border-white border-2 grayscale`}
              src={candidate.data.profile_photo_url}
              alt={titleize(
                `${candidate.data.names}  ${candidate.data.family_name}`,
              )}
            />
          </a>
        </Link>
        <img
          className="absolute -bottom-3 left-1/3 w-9 h-9 bg-white rounded-lg object-cover shadow-button border-white border-2"
          src={candidate.data.political_organization.logo}
          alt={candidate.data.political_organization.name}
        />
      </div>
      <Link
        href={`https://www.yovoto.pe/candidates/${candidate.data.id}?activeTab=Perfil+Político`}
      >
        <a rel="nofollow noopener noreferrer external" target="_blank">
          <h4
            className={`${
              size > 1 ? "text-xl" : "text-2xl"
            } font-extrabold text-black text-center mt-5 mb-1`}
          >
            {titleize(`${candidate.data.names}  ${candidate.data.family_name}`)}
          </h4>
        </a>
      </Link>
      <h5
        className={`${
          size > 1 ? "text-xs" : "text-sm"
        } font-extrabold text-gray-base text-center uppercase`}
      >
        {titleize(candidate.data.political_organization.name)}
      </h5>
    </div>
  );
}
