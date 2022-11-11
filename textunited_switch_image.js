window.addEventListener('load', (event) => {
    if (document.cookie.includes("TextUnitedSelectedLanguage=40")) {
        document.querySelector(".is-german").style.display = "none";
        document.querySelector(".is-english").style.display = "inline-block";
        alert ("Englisch");
    } else {
        document.querySelector(".is-german").style.display = "inline-block";
        document.querySelector(".is-english").style.display = "none";
        alert ("Deutsch");
    }
});


document.querySelector('[data-id="40"]').addEventListener("click", isEnglish); 
document.querySelector('[data-id="57"]').addEventListener("click", isGerman); 

function isEnglish(){
    document.querySelector(".is-german").style.display = "none";
    document.querySelector(".is-english").style.display = "inline-block";
    alert ("Englisch");
};

function isGerman(){
    document.querySelector(".is-german").style.display = "inline-block";
    document.querySelector(".is-english").style.display = "none";
    alert ("Deutsch");
};