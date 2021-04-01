import calculateAveragePercentage from "./calculateAveragePercentage";
import { candidates as allCandidatesData } from "../data/candidates.json";

// Yonhy Lescano Ancieta
const candidateAnswers1 = {
  id: 42,
  answers: {
    1: 1,
    2: 1,
    3: 5,
    4: 2,
    5: 1,
    6: 1,
    7: 4,
    8: 5,
    9: 1,
    10: 5,
    11: 1,
    12: 5,
    13: 1,
    14: 1,
    15: 2,
  },
  source: "https://impulsopais.pe/p/yovoto/fuentes/accion-popular/",
};

// Cesar Acuña Peralta
const candidateAnswers2 = {
  id: 130,
  answers: {
    1: 2,
    2: 5,
    3: 3,
    4: 5,
    5: 2,
    6: 1,
    7: 5,
    8: 3,
    9: 3,
    10: 3,
    11: 3,
    12: 3,
    13: 2,
    14: 2,
    15: 2,
  },
  source: "https://impulsopais.pe/p/yovoto/fuentes/alianza-para-el-progreso/",
};

// Hernando De Soto Polar
const candidateAnswers3 = {
  id: 108,
  answers: {
    1: 2,
    2: 5,
    3: 5,
    4: 5,
    5: 1,
    6: 2,
    7: 5,
    8: 3,
    9: 1,
    10: 5,
    11: 3,
    12: 3,
    13: 2,
    14: 3,
    15: 2,
  },
  source: "https://impulsopais.pe/p/yovoto/fuentes/avanza-pais/",
};

// Andres Avelino Alcantara Paredes
const candidateAnswers4 = {
  id: 86,
  answers: {
    1: 1,
    2: 1,
    3: 1,
    4: 2,
    5: 3,
    6: 1,
    7: 1,
    8: 1,
    9: 1,
    10: 3,
    11: 1,
    12: 3,
    13: 1,
    14: 3,
    15: 2,
  },
  source: "https://impulsopais.pe/p/yovoto/fuentes/democracia-directa/",
};

// Marco Antonio Arana Zegarra
const candidateAnswers5 = {
  id: 159,
  answers: {
    1: 1,
    2: 1,
    3: 1,
    4: 2,
    5: 1,
    6: 1,
    7: 2,
    8: 1,
    9: 1,
    10: 3,
    11: 3,
    12: 1,
    13: 1,
    14: 1,
    15: 4,
  },
  source: "https://impulsopais.pe/p/yovoto/fuentes/frente-amplio/",
};

// Keiko Sofia Fujimori Higuchi
const candidateAnswers6 = {
  id: 75,
  answers: {
    1: 5,
    2: 5,
    3: 5,
    4: 5,
    5: 2,
    6: 2,
    7: 5,
    8: 5,
    9: 5,
    10: 5,
    11: 5,
    12: 5,
    13: 2,
    14: 1,
    15: 4,
  },
  source: "https://impulsopais.pe/p/yovoto/fuentes/fuerza-popular/",
};

// Veronika Fanny Mendoza Frisch
const candidateAnswers7 = {
  id: 65,
  answers: {
    1: 1,
    2: 1,
    3: 1,
    4: 2,
    5: 1,
    6: 1,
    7: 1,
    8: 1,
    9: 1,
    10: 1,
    11: 1,
    12: 1,
    13: 1,
    14: 1,
    15: 1,
  },
  source: "https://impulsopais.pe/p/yovoto/fuentes/juntos-por-el-peru/",
};

// Daniel Enrique Salaverry Villa
const candidateAnswers8 = {
  id: 31,
  answers: {
    1: 1,
    2: 5,
    3: 3,
    4: 3,
    5: 3,
    6: 2,
    7: 5,
    8: 2,
    9: 1,
    10: 5,
    11: 5,
    12: 3,
    13: 5,
    14: 1,
    15: 4,
  },
  source: "https://impulsopais.pe/p/yovoto/fuentes/somos-peru/",
};

// Julio Armando Guzman Caceres
const candidateAnswers9 = {
  id: 9,
  answers: {
    1: 3,
    2: 3,
    3: 5,
    4: 2,
    5: 2,
    6: 1,
    7: 2,
    8: 2,
    9: 1,
    10: 1,
    11: 1,
    12: 1,
    13: 3,
    14: 1,
    15: 1,
  },
  source: "https://impulsopais.pe/p/yovoto/fuentes/partido-morado/",
};

// Ollanta Moises Humala Tasso
const candidateAnswers10 = {
  id: 97,
  answers: {
    1: 3,
    2: 1,
    3: 1,
    4: 2,
    5: 1,
    6: 2,
    7: 2,
    8: 1,
    9: 1,
    10: 1,
    11: 3,
    12: 1,
    13: 2,
    14: 1,
    15: 4,
  },
  source: "https://impulsopais.pe/p/yovoto/fuentes/partido-nacionalista/",
};

// Jose Pedro Castillo Terrones
const candidateAnswers11 = {
  id: 168,
  answers: {
    1: 1,
    2: 1,
    3: 3,
    4: 2,
    5: 1,
    6: 1,
    7: 1,
    8: 2,
    9: 3,
    10: 1,
    11: 3,
    12: 3,
    13: 1,
    14: 3,
    15: 1,
  },
  source: "https://impulsopais.pe/p/yovoto/fuentes/peru-libre/",
};

// Alberto Ismael Beingolea Delgado
const candidateAnswers12 = {
  id: 206,
  answers: {
    1: 5,
    2: 5,
    3: 5,
    4: 5,
    5: 2,
    6: 1,
    7: 2,
    8: 5,
    9: 1,
    10: 5,
    11: 3,
    12: 5,
    13: 2,
    14: 1,
    15: 1,
  },
  source: "https://impulsopais.pe/p/yovoto/fuentes/partido-popular-cristiano/",
};

// Rafael Gaston Tadeo Milagros Santos Normand
const candidateAnswers13 = {
  id: 189,
  answers: {
    1: 2,
    2: 5,
    3: 3,
    4: 2,
    5: 1,
    6: 2,
    7: 5,
    8: 5,
    9: 3,
    10: 5,
    11: 1,
    12: 3,
    13: 2,
    14: 3,
    15: 1,
  },
  source: "https://impulsopais.pe/p/yovoto/fuentes/peru-patria-segura/",
};

// Daniel Belizario Urresti Elera
const candidateAnswers14 = {
  id: 119,
  answers: {
    1: 2,
    2: 3,
    3: 3,
    4: 2,
    5: 1,
    6: 2,
    7: 5,
    8: 2,
    9: 1,
    10: 5,
    11: 1,
    12: 1,
    13: 2,
    14: 1,
    15: 4,
  },
  source: "https://impulsopais.pe/p/yovoto/fuentes/podemos-peru/",
};

// Ciro Alfredo Galvez Herrera
const candidateAnswers15 = {
  id: 53,
  answers: {
    1: 1,
    2: 3,
    3: 3,
    4: 3,
    5: 3,
    6: 4,
    7: 4,
    8: 2,
    9: 1,
    10: 3,
    11: 1,
    12: 3,
    13: 1,
    14: 3,
    15: 1,
  },
  source: "https://impulsopais.pe/p/yovoto/fuentes/runa/",
};

// George Patrick Forsyth Sommer
const candidateAnswers16 = {
  id: 149,
  answers: {
    1: 2,
    2: 5,
    3: 5,
    4: 5,
    5: 2,
    6: 2,
    7: 4,
    8: 5,
    9: 1,
    10: 5,
    11: 5,
    12: 3,
    13: 2,
    14: 1,
    15: 2,
  },
  source: "https://impulsopais.pe/p/yovoto/fuentes/victoria-nacional/",
};

// Rafael Bernardo Lopez Aliaga Cazorla
const candidateAnswers17 = {
  id: 198,
  answers: {
    1: 2,
    2: 5,
    3: 5,
    4: 2,
    5: 1,
    6: 4,
    7: 5,
    8: 5,
    9: 5,
    10: 1,
    11: 5,
    12: 5,
    13: 2,
    14: 5,
    15: 1,
  },
  source: "https://impulsopais.pe/p/yovoto/fuentes/renovacion-popular/",
};

// Jose Alejandro Vega Antonio
const candidateAnswers18 = {
  id: 203,
  answers: {
    1: 1,
    2: 1,
    3: 1,
    4: 3,
    5: 1,
    6: 1,
    7: 1,
    8: 5,
    9: 3,
    10: 5,
    11: 3,
    12: 3,
    13: 1,
    14: 5,
    15: 1,
  },
  source: "https://impulsopais.pe/p/yovoto/fuentes/union-por-el-peru/",
};

const candidateAnswers = [
  candidateAnswers1,
  candidateAnswers2,
  candidateAnswers3,
  candidateAnswers4,
  candidateAnswers5,
  candidateAnswers6,
  candidateAnswers7,
  candidateAnswers8,
  candidateAnswers9,
  candidateAnswers10,
  candidateAnswers11,
  candidateAnswers12,
  candidateAnswers13,
  candidateAnswers14,
  candidateAnswers15,
  candidateAnswers16,
  candidateAnswers17,
  candidateAnswers18,
];

export default function calculateResults(results) {
  try {
    let candidates = Object.entries(
      candidateAnswers
        .map((candidate) => ({
          id: candidate.id,
          percentage: calculateAveragePercentage(
            results,
            candidate.answers,
          ).toFixed(1),
        }))
        // eslint-disable-next-line unicorn/no-array-reduce
        .reduce((acc, element) => {
          const percentage = (acc[element.percentage] =
            acc[element.percentage] || []);
          percentage.push(element);
          return acc;
        }, {}),
    ).sort(([a], [b]) => b - a);

    const candidatesResultSize =
      candidates[0][1].length > 1 ? candidates[0][1].length + 2 : 3;

    candidates = candidates
      .map(([_key, elements]) => elements)
      .flat()
      .slice(0, candidatesResultSize);

    const candidatesData = Array.apply(
      null,
      // eslint-disable-next-line unicorn/new-for-builtins
      Array(candidatesResultSize),
    ).map((_val, idx) =>
      allCandidatesData.find(
        (candidateData) => candidateData.id === candidates[idx].id,
      ),
    );

    candidates = candidates.map((candidate, index) => ({
      ...candidate,
      data: candidatesData[index],
    }));

    return candidates;
  } catch {
    return [];
  }
}
