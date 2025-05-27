const popup = document.getElementById("popup");
const openBtn = document.getElementById("learn");
const closeBtn = document.getElementById("closePopup");

const popupgold = document.getElementById("popupgold");
const openBtngold = document.getElementById("learngold");
const closeBtngold = document.getElementById("closePopupgold");

const popupsilver = document.getElementById("popupsilver");
const openBtnsilver = document.getElementById("learnsilver");
const closeBtnsilver = document.getElementById("closePopupsilver");

openBtn.onclick = () =>{
    popup.style.display = "flex"
}

closeBtn.onclick = () =>{
    popup.style.display = "none"
}

openBtngold.onclick = () =>{
    popupgold.style.display = "flex"
}

closeBtngold.onclick = () =>{
    popupgold.style.display = "none"
}

openBtnsilver.onclick = () =>{
    popupsilver.style.display = "flex"
}

closeBtnsilver.onclick = () =>{
    popupsilver.style.display = "none"
}

window.onclick = function (event) {
    if (event.target === popup) {
        popup.style.display = "none"
       
    }

    if (event.target === popupgold) {
        popupgold.style.display = "none"
       
    }

     if (event.target === popupsilver) {
        popupsilver.style.display = "none"
       
    }
}
