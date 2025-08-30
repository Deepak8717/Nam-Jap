const stage = document.getElementById("stage");
const emitBtn = document.getElementById("emitBtn");

let counter = 0;

const mantras = [
  { text: "जय श्री राम", color: "#ffb347" }, // orange
  { text: "श्री कृष्ण", color: "#5cb3ff" }, // blue
  { text: "श्री राधे", color: "#ff77c0" }, // pink
];

function getMantra() {
  const group = Math.floor(counter / 108) % mantras.length; // every 4 clicks change mantra
  return mantras[group];
}

function emitMantra() {
  counter++;

  const mantraObj = getMantra();

  const el = document.createElement("span");
  el.className = "mantra";
  el.textContent = mantraObj.text;
  el.style.color = mantraObj.color;

  const duration = 1000; // 4s
  el.style.setProperty("--dur", `${duration}ms`);

  stage.appendChild(el);

  // remove after animation
  el.addEventListener("animationend", () => el.remove(), { once: true });

  // cap for safety
  const MAX_MANTRAS = 20;
  if (stage.childElementCount > MAX_MANTRAS) {
    stage.removeChild(stage.firstChild);
  }
}

emitBtn.addEventListener("click", emitMantra);
