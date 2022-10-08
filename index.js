const wrapper = document.querySelector(".wrapper__modal");
const buttonTrue = document.querySelector("#btn-true");
const buttonFalse = document.querySelector("#btn-false");
const modalButton = document.querySelector('.modal__button');
const openModalTime = setTimeout(open, 1000);

function open() {
    wrapper.classList.add("active");
    buttonTrue.addEventListener('click', (e) => {savePage(e, buttonTrue), close()})
    buttonFalse.addEventListener('click', close);
    clearInterval(openModalTime);
}

function savePage(e, a) {
    // let title = document.title;
    // let url = location.href;

    alert('Ваш браузер не поддерживает автоматическое скачиване веб-страниц. Нажмите Ctrl+S чтобы скачать страницу.');
}

function close() {
    wrapper.classList.remove("active");
}

window.addEventListener('DOMContentLoaded', () => openModalTime)