// ---------- Cosas cayendo de fondo ----------
// Menú principal (oscuro): chanchitos 🐷 · Sorpresa (claro): flores
const pigEmojis = ["🐷", "🐖", "🐽"];
const flowerEmojis = ["🌼", "🌻", "🌷", "💛", "🌸"];
const petalsLayer = document.getElementById("petals");

function spawnFalling(count, emojis) {
  petalsLayer.innerHTML = "";
  for (let i = 0; i < count; i++) {
    const p = document.createElement("span");
    p.className = "petal";
    p.textContent = emojis[Math.floor(Math.random() * emojis.length)];
    p.style.left = Math.random() * 100 + "vw";
    p.style.fontSize = 18 + Math.random() * 22 + "px";
    p.style.animationDuration = 6 + Math.random() * 8 + "s";
    p.style.animationDelay = Math.random() * 8 + "s";
    petalsLayer.appendChild(p);
  }
}

// Arranca en modo oscuro con chanchitos cayendo
document.body.classList.add("dark");
spawnFalling(26, pigEmojis);

// ---------- Jardín de flores (tulipanes, girasoles y flores al azar) ----------
// Predominan las amarillas; se incluyen tulipanes y flores variadas ("al azar").
const flowerTypes = ["🌷", "🌻", "🌼", "🌷", "🌻", "🌼", "🌸", "🌺", "🏵️", "🌷"];
const garden = document.getElementById("garden");

function growGarden() {
  garden.innerHTML = "";
  const total = 11;
  for (let i = 0; i < total; i++) {
    const flower = document.createElement("div");
    flower.className = "flower";

    const leftPct = (i / (total - 1)) * 92 + Math.random() * 4;
    const height = 90 + Math.random() * 90;
    const delay = Math.random() * 0.6;

    flower.style.left = leftPct + "%";
    flower.style.animationDelay = delay + "s, " + delay + "s";
    flower.style.zIndex = Math.round(height);

    const stem = document.createElement("div");
    stem.className = "stem";
    stem.style.height = height + "px";

    const leaf = document.createElement("div");
    leaf.className = "leaf";
    leaf.style.bottom = height * 0.4 + "px";
    leaf.style.left = (Math.random() > 0.5 ? "12px" : "-24px");

    const bloom = document.createElement("div");
    bloom.className = "bloom";
    bloom.textContent = flowerTypes[Math.floor(Math.random() * flowerTypes.length)];
    bloom.style.fontSize = 34 + Math.random() * 20 + "px";
    bloom.style.animationDelay = Math.random() * 2 + "s";

    flower.appendChild(stem);
    flower.appendChild(leaf);
    // el bloom se posiciona en la punta del tallo
    bloom.style.top = "auto";
    bloom.style.bottom = height - 12 + "px";
    flower.appendChild(bloom);

    garden.appendChild(flower);
  }
}

// ---------- Navegación entre pantallas ----------
const intro = document.getElementById("intro");
const gift = document.getElementById("gift");
const startBtn = document.getElementById("startBtn");
const replayBtn = document.getElementById("replayBtn");

function showGift() {
  document.body.classList.remove("dark");
  intro.classList.add("hide");
  gift.classList.add("show");
  gift.setAttribute("aria-hidden", "false");
  spawnFalling(40, flowerEmojis);
  growGarden();
  window.scrollTo({ top: 0, behavior: "smooth" });
}

startBtn.addEventListener("click", showGift);

replayBtn.addEventListener("click", () => {
  document.body.classList.add("dark");
  gift.classList.remove("show");
  gift.setAttribute("aria-hidden", "true");
  intro.classList.remove("hide");
  spawnFalling(26, pigEmojis);
  window.scrollTo({ top: 0, behavior: "smooth" });
});

// ---------- Descargar el recuerdo como imagen ----------
const downloadBtn = document.getElementById("downloadBtn");
const capture = document.getElementById("capture");

downloadBtn.addEventListener("click", async () => {
  const original = downloadBtn.textContent;
  downloadBtn.textContent = "✨ Preparando...";
  downloadBtn.disabled = true;
  try {
    const dataUrl = await htmlToImage.toPng(capture, {
      pixelRatio: 2,
      backgroundColor: "#fffdf3",
    });
    const link = document.createElement("a");
    link.download = "flores-amarillas-para-ti.png";
    link.href = dataUrl;
    link.click();
    downloadBtn.textContent = "💛 ¡Guardado!";
  } catch (err) {
    console.error(err);
    downloadBtn.textContent = "Ups, intenta de nuevo";
  } finally {
    setTimeout(() => {
      downloadBtn.textContent = original;
      downloadBtn.disabled = false;
    }, 2200);
  }
});
