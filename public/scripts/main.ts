(function main() {
  const elements = document.getElementsByClassName("fadeUp");

  for (let i = 0, j = [2, 4, 6, 8]; i < elements.length; i++) // @ts-ignore
    setTimeout(() => (elements[i].style["animation-play-state"] = "running"), +(j[i] + "000"))

})();