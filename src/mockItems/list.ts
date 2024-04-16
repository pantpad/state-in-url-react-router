export type listItem = {
  id: number;
  name: string;
  type: string;
};

const alphabet = [
  "Ape",
  "Bike",
  "Corn",
  "Dolphin",
  "Elephant",
  "Fragola",
  "Giostra",
  "Helium",
  "Istrix",
  "Javelin",
  "Karma",
  "Love",
  "Mountain",
  "Nosepass",
  "Ortodox",
  "Paddel",
  "Qwerty",
  "Rave",
  "Sex",
  "Trip",
  "Uber",
  "Velocity",
  "Weasel",
  "Xavier",
  "Y",
  "Zed",
];

export const mockList = [
  {
    id: Math.floor(Math.random() * Math.floor(Math.random() * Date.now())),
    name: alphabet[2],
    type: "pc",
  },
  {
    id: Math.floor(Math.random() * Math.floor(Math.random() * Date.now())),
    name: alphabet[Math.floor(Math.random() * 26)],
    type: "asd",
  },
  {
    id: Math.floor(Math.random() * Math.floor(Math.random() * Date.now())),
    name: alphabet[Math.floor(Math.random() * 26)],
    type: "pc",
  },
  {
    id: Math.floor(Math.random() * Math.floor(Math.random() * Date.now())),
    name: alphabet[Math.floor(Math.random() * 26)],
    type: "adsd",
  },
  {
    id: Math.floor(Math.random() * Math.floor(Math.random() * Date.now())),
    name: alphabet[Math.floor(Math.random() * 26)],
    type: "pc",
  },
  {
    id: Math.floor(Math.random() * Math.floor(Math.random() * Date.now())),
    name: alphabet[Math.floor(Math.random() * 26)],
    type: "pc",
  },
  {
    id: Math.floor(Math.random() * Math.floor(Math.random() * Date.now())),
    name: alphabet[Math.floor(Math.random() * 26)],
    type: "asda",
  },
  {
    id: Math.floor(Math.random() * Math.floor(Math.random() * Date.now())),
    name: alphabet[Math.floor(Math.random() * 26)],
    type: "pc",
  },
  {
    id: Math.floor(Math.random() * Math.floor(Math.random() * Date.now())),
    name: alphabet[Math.floor(Math.random() * 26)],
    type: "pc",
  },
  {
    id: Math.floor(Math.random() * Math.floor(Math.random() * Date.now())),
    name: alphabet[Math.floor(Math.random() * 26)],
    type: "ccc",
  },
  {
    id: Math.floor(Math.random() * Math.floor(Math.random() * Date.now())),
    name: alphabet[Math.floor(Math.random() * 26)],
    type: "pc",
  },
  {
    id: Math.floor(Math.random() * Math.floor(Math.random() * Date.now())),
    name: alphabet[Math.floor(Math.random() * 26)],
    type: "pc",
  },
  {
    id: Math.floor(Math.random() * Math.floor(Math.random() * Date.now())),
    name: alphabet[Math.floor(Math.random() * 26)],
    type: "pc",
  },
] as listItem[];
