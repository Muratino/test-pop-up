

const wrapper = document.querySelector(".wrapper__modal");
const buttonTrue = document.querySelector("#btn-true");
const buttonFalse = document.querySelector("#btn-false");

const openModalTime = setTimeout(open, 1000);

function open() {
    wrapper.classList.add("active");
    buttonTrue.addEventListener('click', (e) => {
        savePage(e) 
        close();
        // ? console.log('Удачно добавлена закладка') : console.log(' НЕ получилось добавить закладку') ;
    })
    buttonFalse.addEventListener('click', close);
    clearInterval(openModalTime);
}


function savePage(a) {
    let title = document.title;  
    let url = location.href; 

    try {
        // Internet Explorer 
        window.external.AddFavorite(url, title);
    }
    catch (e) {
        try {
            // Mozilla 
            window.sidebar.addPanel(title, url, "");
        }
        catch (e) {
            // Opera 
            if (typeof (opera) == "object") {
                a.rel = "sidebar";
                a.title = title;
                a.url = url;
                return true;
            }
            else {
                // Unknown 
                alert('Ваш браузер не поддерживает автоматическое добавление закладок. Нажмите Ctrl+D чтобы добавить страницу в закладки.');
            }
        }
    }
    return false;
}

function close() {
    wrapper.classList.remove("active");
}


window.addEventListener('DOMContentLoaded', () => { openModalTime })