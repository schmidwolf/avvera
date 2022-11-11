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


$('[data-id="40"]').on('click', function() {
    document.querySelector(".is-german").style.display = "none";
    document.querySelector(".is-english").style.display = "inline-block";
    alert ("Englisch");
});

$('[data-id="57"]').on('click', function() {
    document.querySelector(".is-german").style.display = "inline-block";
    document.querySelector(".is-english").style.display = "none";
    alert ("Deutsch");
});