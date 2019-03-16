import "./style.css";

const greetings = [
  "G'day",
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
  // That's right, assholes. It's a document.write in 2019. In a function hanging off window.
  // I'm as modern as JS devs get.
  document.write(greetings[random(0, greetings.length)]);
};

const staticFacts = [
  "am a human.",
  "have completed 29 trips around the sun.",
  "like eating bacon, sometimes.",
  "am an Aussie.",
  "like writing computer code.",
  "live in Berlin.",
];
