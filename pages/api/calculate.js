import calculateAveragePercentage from "../../utils/calculateAveragePercentage";

// Yonhy Lescano Ancieta
const temporalResultsCandidate1 = {
  id: 42,
  answers: {
    1: 1,
    2: 1,
    3: 5,
    4: 3,
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
};

// Cesar Acuña Peralta
const temporalResultsCandidate2 = {
  id: 130,
  answers: {
    1: 3,
    2: 5,
    3: 5,
    4: 5,
    5: 5,
    6: 2,
    7: 5,
    8: 3,
    9: 3,
    10: 3,
    11: 5,
    12: 3,
    13: 2,
    14: 3,
    15: 2,
  },
};

// Hernando De Soto Polar
const temporalResultsCandidate3 = {
  id: 108,
  answers: {
    1: 3,
    2: 5,
    3: 5,
    4: 5,
    5: 3,
    6: 2,
    7: 5,
    8: 5,
    9: 5,
    10: 3,
    11: 3,
    12: 3,
    13: 2,
    14: 5,
    15: 2,
  },
};

// Andres Avelino Alcantara Paredes
const temporalResultsCandidate4 = {
  id: 86,
  answers: {
    1: 1,
    2: 1,
    3: 1,
    4: 3,
    5: 3,
    6: 1,
    7: 1,
    8: 1,
    9: 1,
    10: 3,
    11: 1,
    12: 3,
    13: 1,
    14: 1,
    15: 2,
  },
};

// Marco Antonio Arana Zegarra
const temporalResultsCandidate5 = {
  id: 159,
  answers: {
    1: 1,
    2: 1,
    3: 1,
    4: 3,
    5: 1,
    6: 1,
    7: 1,
    8: 2,
    9: 1,
    10: 3,
    11: 3,
    12: 1,
    13: 1,
    14: 1,
    15: 4,
  },
};

// Keiko Sofia Fujimori Higuchi
const temporalResultsCandidate6 = {
  id: 75,
  answers: {
    1: 2,
    2: 5,
    3: 5,
    4: 5,
    5: 3,
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
};

// Veronika Fanny Mendoza Frisch
const temporalResultsCandidate7 = {
  id: 65,
  answers: {
    1: 1,
    2: 1,
    3: 1,
    4: 3,
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
};

// Daniel Enrique Salaverry Villa
const temporalResultsCandidate8 = {
  id: 31,
  answers: {
    1: 1,
    2: 5,
    3: 3,
    4: 3,
    5: 5,
    6: 2,
    7: 5,
    8: 2,
    9: 1,
    10: 5,
    11: 5,
    12: 3,
    13: 4,
    14: 1,
    15: 4,
  },
};

// Julio Armando Guzman Caceres
const temporalResultsCandidate9 = {
  id: 9,
  answers: {
    1: 5,
    2: 5,
    3: 5,
    4: 3,
    5: 3,
    6: 1,
    7: 2,
    8: 2,
    9: 1,
    10: 1,
    11: 1,
    12: 1,
    13: 4,
    14: 1,
    15: 4,
  },
};

// Ollanta Moises Humala Tasso
const temporalResultsCandidate10 = {
  id: 97,
  answers: {
    1: 5,
    2: 1,
    3: 1,
    4: 3,
    5: 5,
    6: 2,
    7: 2,
    8: 1,
    9: 1,
    10: 1,
    11: 1,
    12: 1,
    13: 2,
    14: 1,
    15: 4,
  },
};

// Jose Pedro Castillo Terrones
const temporalResultsCandidate11 = {
  id: 168,
  answers: {
    1: 1,
    2: 1,
    3: 3,
    4: 3,
    5: 1,
    6: 1,
    7: 3,
    8: 2,
    9: 3,
    10: 5,
    11: 3,
    12: 3,
    13: 1,
    14: 3,
    15: 1,
  },
};

// Alberto Ismael Beingolea Delgado
const temporalResultsCandidate12 = {
  id: 206,
  answers: {
    1: 2,
    2: 5,
    3: 5,
    4: 5,
    5: 3,
    6: 1,
    7: 5,
    8: 2,
    9: 5,
    10: 5,
    11: 5,
    12: 5,
    13: 2,
    14: 1,
    15: 1,
  },
};

// Rafael Gaston Tadeo Milagros Santos Normand
const temporalResultsCandidate13 = {
  id: 189,
  answers: {
    1: 2,
    2: 5,
    3: 5,
    4: 3,
    5: 1,
    6: 2,
    7: 5,
    8: 5,
    9: 3,
    10: 5,
    11: 3,
    12: 3,
    13: 2,
    14: 5,
    15: 1,
  },
};

// Daniel Belizario Urresti Elera
const temporalResultsCandidate14 = {
  id: 119,
  answers: {
    1: 3,
    2: 5,
    3: 3,
    4: 3,
    5: 1,
    6: 2,
    7: 5,
    8: 5,
    9: 1,
    10: 5,
    11: 1,
    12: 1,
    13: 2,
    14: 1,
    15: 4,
  },
};

// Ciro Alfredo Galvez Herrera
const temporalResultsCandidate15 = {
  id: 53,
  answers: {
    1: 1,
    2: 5,
    3: 3,
    4: 5,
    5: 5,
    6: 4,
    7: 4,
    8: 2,
    9: 5,
    10: 3,
    11: 1,
    12: 3,
    13: 1,
    14: 5,
    15: 1,
  },
};

// George Patrick Forsyth Sommer
const temporalResultsCandidate16 = {
  id: 149,
  answers: {
    1: 3,
    2: 5,
    3: 5,
    4: 5,
    5: 3,
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
};

// Rafael Bernardo Lopez Aliaga Cazorla
const temporalResultsCandidate17 = {
  id: 198,
  answers: {
    1: 3,
    2: 5,
    3: 5,
    4: 5,
    5: 1,
    6: 4,
    7: 5,
    8: 5,
    9: 5,
    10: 5,
    11: 5,
    12: 5,
    13: 2,
    14: 5,
    15: 2,
  },
};

// Jose Alejandro Vega Antonio
const temporalResultsCandidate18 = {
  id: 203,
  answers: {
    1: 1,
    2: 1,
    3: 1,
    4: 1,
    5: 1,
    6: 2,
    7: 1,
    8: 3,
    9: 5,
    10: 3,
    11: 3,
    12: 3,
    13: 1,
    14: 5,
    15: 1,
  },
};

const temporalCandidateAnswers = [
  temporalResultsCandidate1,
  temporalResultsCandidate2,
  temporalResultsCandidate3,
  temporalResultsCandidate4,
  temporalResultsCandidate5,
  temporalResultsCandidate6,
  temporalResultsCandidate7,
  temporalResultsCandidate8,
  temporalResultsCandidate9,
  temporalResultsCandidate10,
  temporalResultsCandidate11,
  temporalResultsCandidate12,
  temporalResultsCandidate13,
  temporalResultsCandidate14,
  temporalResultsCandidate15,
  temporalResultsCandidate16,
  temporalResultsCandidate17,
  temporalResultsCandidate18,
];

async function getCandidateData(url) {
  const response = await fetch(url);
  const data = await response.json();
  return data;
}

export default async function handler(req, res) {
  const {
    query: { results },
  } = req;

  let candidates = temporalCandidateAnswers
    .map((canditate) => ({
      id: canditate.id,
      percentage: calculateAveragePercentage(
        JSON.parse(results),
        canditate.answers,
      ),
    }))
    .sort((a, b) => b.percentage - a.percentage)
    .slice(0, 3);

  const candidatesData = await Promise.all([
    getCandidateData(
      `https://politicalhub-api.herokuapp.com/candidates/${candidates[0].id}?include=political_organization`,
    ),
    getCandidateData(
      `https://politicalhub-api.herokuapp.com/candidates/${candidates[1].id}?include=political_organization`,
    ),
    getCandidateData(
      `https://politicalhub-api.herokuapp.com/candidates/${candidates[2].id}?include=political_organization`,
    ),
  ]);

  candidates = candidates.map((candidate, index) => ({
    ...candidate,
    data: candidatesData[index].candidate,
  }));

  res.status(200).json({ candidates });
}
