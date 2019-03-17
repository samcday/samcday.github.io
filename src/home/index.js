import "./style.css";

const random = (min, max) => Math.floor(Math.random() * (max - min) + min);

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

const staticFacts = [
  "have completed 29 trips around the sun.",
  "am an Aussie.",
  "am sometimes called a Computer Programmer.",
  "live in Berlin.",
];

document.body.className = "js-loading";
document.write(`
  <div id="loading-overlay">
    <div class="spinner">
      <div class="double-bounce1"></div>
      <div class="double-bounce2"></div>
    </div>
    <span id="loading-message">Just a sec...</span>
  </div>`);

let slowInternet = setTimeout(() => {
  document.getElementById("loading-message").innerHTML = "Sorry, but your internet kinda blows.<br/>Still loadin'.";
}, 1000);

document.addEventListener('DOMContentLoaded', () => {
  clearTimeout(slowInternet);

  document.getElementById("greeting").innerText = `${greetings[random(0, greetings.length)]}.`;

  let facts = staticFacts.slice();
  for (let i = 0; i < facts.length; i++) {
    const j = random(0, facts.length);
    [facts[i], facts[j]] = [facts[j], facts[i]];
  }

  let factIndex = 0;
  const factElement = document.getElementById("fact");
  setInterval(() => {
    factIndex = (factIndex + 1) % facts.length;
    factElement.innerHTML = facts[factIndex];
  }, 3000);

  document.body.className = "";
  document.body.removeChild(document.getElementById("loading-overlay"));
});
