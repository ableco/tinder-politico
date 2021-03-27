import Link from "next/link";
import titleize from "../utils/titleize";

export default function RestCandidateCard({ candidate }) {
  return (
    <div className="mb-5 w-full">
      <div className="flex px-1 w-full justify-between">
        <div className="flex items-center">
          <div className="flex items-center justify-center flex-col xs:flex-col sm:flex-row md:flex-row">
            <img
              className="w-12 h-12 bg-white rounded-full object-cover border-white border-2 shadow-button grayscale"
              src={candidate.data.profile_photo_url}
              alt={titleize(
                `${candidate.data.names}  ${candidate.data.family_name}`,
              )}
            />
            <img
              className="w-7 h-7 bg-white rounded-sm object-cover border-white border-2 shadow-button ml-0 sm:ml-2 md:ml-2 mt-2 sm:mt-0 md:mt-0"
              src={candidate.data.political_organization.logo}
              alt={titleize(candidate.data.political_organization.name)}
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
              <Link
                href={`https://www.yovoto.pe/candidates/${candidate.data.id}?activeTab=Perfil+Político`}
              >
                <a
                  rel="nofollow noopener noreferrer external"
                  target="_blank"
                  className="font-extrabold text-black text-center underline mt-1 mb-1"
                >
                  Ver resultados
                </a>
              </Link>
            </div>
          </div>
        </div>
        <div>
          <p className="block bg-green rounded-full text-black px-4 py-2 font-extrabold text-xl">
            {candidate.percentage}%
          </p>
        </div>
      </div>
    </div>
  );
}
