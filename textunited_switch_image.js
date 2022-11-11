$( document ).ready(function() {
    if (document.cookie.includes("TextUnitedSelectedLanguage=40")) {
        $('.is-german').css('display', 'none');
        $('.is-english').css('display', 'inline-block');
    //   alert ("Englisch");
    } else {
        $('.is-english').css('display', 'none');
        $('.is-german').css('display', 'inline-block');
    //    alert ("Deutsch");
    }



    $('[data-id="40"]').on('click', function() {
     $('.is-german').css('display', 'none');
      $('.is-english').css('display', 'inline-block');
    //   alert ("Englisch");
    });

    $('[data-id="57"]').on('click', function() {
     $('.is-english').css('display', 'none');
     $('.is-german').css('display', 'inline-block');
    // alert ("Deutsch");
    });

});