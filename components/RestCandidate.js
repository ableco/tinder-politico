import Link from "next/link";
import titleize from "../utils/titleize";
import Card from "./Card";

export default function RestCandidate({ candidate, number }) {
  return (
    <div className="mb-2 w-full" key={candidate.id}>
      <Card>
        <div className="p-6 flex w-full justify-between">
          <div className="flex">
            <div className="flex flex-col min-w-12">
              <div className="flex justify-center mb-1">
                <p className="bg-gradient-to-l from-neutralGradient-start to-neutralGradient-end rounded-lg text-white px-4 py-1 font-normal text-xl text-center max-w-min">
                  {number}
                </p>
              </div>
              <img
                className="w-12 h-12 bg-neutral-200 rounded-lg object-cover border-neutral-200 border-2"
                src={candidate.data.profile_photo_url}
                alt={titleize(
                  `${candidate.data.names}  ${candidate.data.family_name} ${candidate.data.mothers_maiden_name}`,
                )}
              />
              <img
                className="w-12 h-12 bg-neutral-200 rounded-lg object-cover mt-1 border-neutral-200 border-2"
                src={candidate.data.political_organization.logo}
                alt={titleize(candidate.data.political_organization.name)}
              />
            </div>
            <div className="mx-3 flex flex-col justify-between">
              <div>
                <p className="font-medium text-xl text-neutral-800">
                  {titleize(
                    `${candidate.data.names}  ${candidate.data.family_name} ${candidate.data.mothers_maiden_name}`,
                  )}
                </p>
                <p className="font-light text-lg text-neutral-700">
                  {titleize(candidate.data.political_organization.name)}
                </p>
              </div>
              <div>
                <Link
                  href={`https://www.yovoto.pe/candidates/${candidate.data.id}`}
                >
                  <a
                    rel="nofollow noopener noreferrer external"
                    target="_blank"
                    className="font-normal text-lg text-link underline"
                  >
                    Ver Perfil
                  </a>
                </Link>
              </div>
            </div>
          </div>
          <div>
            <span className="block bg-gradient-to-l from-successGradient-start to-successGradient-end rounded-lg text-white px-3 py-1 font-normal text-xl">
              {candidate.percentage}%
            </span>
          </div>
        </div>
      </Card>
    </div>
  );
}
