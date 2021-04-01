import Link from "next/link";
import titleize from "../utils/titleize";

export default function RestCandidateCard({ candidate }) {
  return (
    <div className="mb-5 w-full">
      <div className="flex px-1 w-full justify-between">
        <div className="flex items-center">
          <div className="flex items-center justify-center flex-col xs:flex-col sm:flex-row md:flex-row relative">
            <img
              className="min-w-12 w-12 h-12 bg-white rounded-full shadow-button object-contain border-white border-2 grayscale"
              src={candidate.data.profile_photo_url}
              alt={titleize(
                `${candidate.data.names}  ${candidate.data.family_name}`,
              )}
            />
            <img
              className="absolute -bottom-3 left-1/3 w-5 h-5 bg-white rounded-lg object-contain shadow-button border-white border-2"
              src={candidate.data.political_organization.logo}
              alt={candidate.data.political_organization.name}
            />
          </div>
          <div className="mx-3 flex flex-col justify-start">
            <div>
              <p className="font-extrabold text-xl text-black">
                {titleize(
                  `${candidate.data.names}  ${candidate.data.family_name}`,
                )}
              </p>
              <p className="font-extrabold text-xs text-gray-base uppercase">
                {titleize(candidate.data.political_organization.name)}
              </p>
            </div>
          </div>
        </div>
        <div>
          <p className="block bg-gradient-to-l from-successGradient-start to-successGradient-end rounded-full text-black text-center px-4 py-2 font-extrabold text-xl mb-1">
            {candidate.percentage}%
          </p>
          <Link
            href={`https://www.yovoto.pe/candidates/${candidate.data.id}?activeTab=Perfil+Político`}
          >
            <a
              rel="nofollow noopener noreferrer external"
              target="_blank"
              className="font-extrabold text-black text-xs xs:text-xs sm:text-sm md:text-sm text-center underline"
            >
              Ver resultados
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
}
