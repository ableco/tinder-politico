import Link from "next/link";
import titleize from "../utils/titleize";

export default function RestCandidateCard({ candidate }) {
  return (
    <div className="mb-5 w-full">
      <div className="flex px-1 w-full justify-between">
        <div className="flex items-center">
          <Link href={`https://www.yovoto.pe/candidates/${candidate.data.id}`}>
            <a rel="nofollow noopener noreferrer external" target="_blank">
              <img
                className="w-12 h-12 bg-white rounded-full object-cover border-white border-2 shadow-button grayscale"
                src={candidate.data.profile_photo_url}
                alt={titleize(
                  `${candidate.data.names}  ${candidate.data.family_name}`,
                )}
              />
            </a>
          </Link>
          <img
            className="w-7 h-7 bg-white rounded-sm object-cover ml-2 border-white border-2 shadow-button"
            src={candidate.data.political_organization.logo}
            alt={titleize(candidate.data.political_organization.name)}
          />
          <div className="mx-3 flex flex-col justify-start">
            <div>
              <Link
                href={`https://www.yovoto.pe/candidates/${candidate.data.id}`}
              >
                <a rel="nofollow noopener noreferrer external" target="_blank">
                  <p className="font-extrabold text-xl text-black">
                    {titleize(
                      `${candidate.data.names}  ${candidate.data.family_name}`,
                    )}
                  </p>
                </a>
              </Link>
              <p className="font-extrabold text-sm text-gray-base uppercase">
                {titleize(candidate.data.political_organization.name)}
              </p>
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
