export type listItem = {
  id: number;
  name: string;
  type: string;
};

// Generate an array of 2000 unique resonant names
function generateUniqueNames() {
  const list = [];
  const prefixes = [
    "Alpha",
    "Beta",
    "Gamma",
    "Delta",
    "Sigma",
    "Omega",
    "Zeta",
    "Theta",
    "Lambda",
    "Epsilon",
  ];
  const suffixes = [
    "Tech",
    "Dynamics",
    "Solutions",
    "Systems",
    "Innovations",
    "Enterprises",
    "Labs",
    "Services",
    "Industries",
    "Ventures",
  ];

  const totalNames = prefixes.length * suffixes.length;

  if (totalNames < 20000) {
    for (const prefix of prefixes) {
      for (const suffix of suffixes) {
        list.push(`${prefix} ${suffix}`);
      }
    }
  } else {
    const usedIndices = new Set();
    while (list.length < 20000) {
      const index = Math.floor(Math.random() * totalNames);
      if (!usedIndices.has(index)) {
        const prefixIndex = Math.floor(index / suffixes.length);
        const suffixIndex = index % suffixes.length;
        list.push(`${prefixes[prefixIndex]} ${suffixes[suffixIndex]}`);
        usedIndices.add(index);
      }
    }
  }

  return list;
}

const uniqueNamesList = generateUniqueNames();

const categories = ["pc", "others", "assistance"];

export const mockList = [] as listItem[];

function generateRandomItem() {
  return {
    id: Math.floor(Math.random() * Math.floor(Math.random() * Date.now())),
    name: uniqueNamesList[Math.floor(Math.random() * 26)],
    type: categories[Math.round(Math.random() * 2)],
  };
}

for (let i = 0; i < 20000; i++) {
  mockList.push(generateRandomItem());
}
