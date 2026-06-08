// HEADER BACKGROUND AO ROLAR

window.addEventListener("scroll", () => {

  const header = document.querySelector(".header");

  if(window.scrollY > 50){
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }

});

// BOTÃO EXPLORAR

document.getElementById("exploreBtn")
.addEventListener("click", () => {

  document.querySelector(".destinos")
  .scrollIntoView({
    behavior:"smooth"
  });

});

const darkModeBtn = document.getElementById("darkModeBtn");

darkModeBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");

    if(document.body.classList.contains("dark-mode")){
        darkModeBtn.textContent = "☀️";
    }else{
        darkModeBtn.textContent = "🌙";
    }
});

navigator.geolocation.getCurrentPosition(async (posicao) => {
    const lat = posicao.coords.latitude;
    const lon = posicao.coords.longitude;

    const url =
        `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current=temperature_2m`;

    const resposta = await fetch(url);
    const dados = await resposta.json();

    document.getElementById("temperatura").textContent =
        `${dados.current.temperature_2m} °C`;
});