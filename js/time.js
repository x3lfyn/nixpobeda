window.onload = () => {
  setInterval(() => {
    let el = document.getElementById("years");
    let years = (Date.now() - 1055620800000) / 1000 / 60 / 60 / 24 / 365;
    el.innerText = years.toFixed(9);
  }, 10);
};
