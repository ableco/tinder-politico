import Link from "next/link";
import titleize from "../utils/titleize";

export default function FirstCandidate({ candidate }) {
  return (
    <div className="px-10 sm:px-10 md:px-16 py-6 flex flex-col items-center justify-center">
      <div className="flex flex-row">
        <img
          className="w-28 h-28 bg-neutral-200 rounded-lg object-cover border-neutral-200 border-2"
          src={candidate.data.profile_photo_url}
          alt={titleize(
            `${candidate.data.names}  ${candidate.data.family_name} ${candidate.data.mothers_maiden_name}`,
          )}
        />
        <img
          className="w-28 h-28 bg-neutral-200 rounded-lg object-cover ml-4 border-neutral-200 border-2"
          src={candidate.data.political_organization.logo}
          alt={candidate.data.political_organization.name}
        />
      </div>
      <h4 className="font-medium text-xl text-neutral-800 text-center mt-4">
        {titleize(
          `${candidate.data.names}  ${candidate.data.family_name} ${candidate.data.mothers_maiden_name}`,
        )}
      </h4>
      <h5 className="font-light text-lg text-neutral-700 text-center">
        {titleize(candidate.data.political_organization.name)}
      </h5>
      <span className="bg-gradient-to-l from-successGradient-start to-successGradient-end rounded-lg text-white px-6 py-1 font-normal text-xl mt-4 mb-6">
        {candidate.percentage}% Compatible
      </span>
      <Link href={`https://www.yovoto.pe/candidates/${candidate.data.id}`}>
        <a
          rel="nofollow noopener noreferrer external"
          target="_blank"
          className="font-normal text-lg text-link text-center underline"
        >
          Ver Perfil
        </a>
      </Link>
    </div>
  );
}
