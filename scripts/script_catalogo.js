const icon = document.querySelector(".aa");
const filtroCor = document.querySelector(".cores-filtros");

const trocaicon = () => {
  filtroCor.classList.toggle("ativo");
  if (filtroCor.classList.contains("ativo")) {
    icon.classList.remove("fa-plus");
    icon.classList.add("fa-minus");
  } else {
    icon.classList.remove("fa-minus");
    icon.classList.add("fa-plus");
  }
};

icon.addEventListener("click", () => trocaicon());
