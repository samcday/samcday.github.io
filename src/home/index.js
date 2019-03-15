import "./style.css";

const greetings = [
  "'Sup",
  "Hey",
  "Yo",
  "Salutations",
  "Greetings",
  "Guten Tag",
  "Hallo",
  "Hiya",
  "'Ello",
  "Whaddup",
];

const random = (min, max) => Math.floor(Math.random() * (max - min) + min);

window.greeting = () => {
  document.write(`${greetings[random(0, greetings.length)]}.`);
};

// asdf