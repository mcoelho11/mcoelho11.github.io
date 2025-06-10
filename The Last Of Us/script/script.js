function abrirModal() {
    const modal = document.getElementById('termo');
    if (modal) {
      modal.classList.add('abrir');
      document.body.classList.add('body-modal-aberto');
    }
  }
  
  document.getElementById('fechar')?.addEventListener('click', () => {
    const modal = document.getElementById('termo');
    if (modal) {
      modal.classList.remove('abrir');
      document.body.classList.remove('body-modal-aberto');
    }
  });
  
  window.addEventListener("scroll", function () {
    const header = document.querySelector("header");

    if (window.scrollY > 50) {
        header.classList.add("scroll");
    } else {
        header.classList.remove("scroll");
    }
});

window.addEventListener("scroll", function () {
  const nav = document.querySelector(".nav-container");

  if (window.scrollY > 50) {
      nav.classList.add("scroll");
  } else {
      nav.classList.remove("scroll");
  }
});
