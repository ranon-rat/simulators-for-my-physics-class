const routes = [
  [
    "mcu-simulator",
    "Movimiento Circular Uniforme",
    "Es un simulador simple para observar y manipular el fenómeno del movimiento circular uniforme.",
  ],
  [
    "planetary-orbit-simulator",
    "Órbita Planetaria",
    "Es un simulador simple para poder observar y manipular la orbita de los planetas.",
  ],
  [
    "kepler-simulator",
    "Ley gravitacional",
    "Simulador de la ley gravitacional"
  ]
];

await (async function main() {
  const sleep = (ms: number) => new Promise((r) => setTimeout(r, ms));

  for (const route of routes)
    document.getElementById("route-list")!.innerHTML += `
      <div class="route-list-container animated animatedFadeInUp fadeInUp">
        <a href="#/${route[0]}/">
          <div class="route-content">
            <div class="route-content-title">
              <h2>${route[1]}</h2>
              <hr>
            </div>

            <div class="route-content-desc">
              <p>${route[2]}</p>
            </div>
          </div>
        </a>
      </div>
    `;

  for (const animation of document.getElementsByClassName("fadeInUp")) {
    await sleep(1000);

    // @ts-ignore
    animation.style["animation-play-state"] = "running"
  }

  await sleep(1000);

  const document_viewer = document.getElementById("document-viewer")!;

  window.location.hash = "#/";
  window.location.hash = "#/mcu-simulator/"

  window.addEventListener("hashchange", () => {
    console.log(window.location.hash); // @ts-ignore
    document_viewer.src = window.location.hash.slice(2);
  });

})();

export {};
