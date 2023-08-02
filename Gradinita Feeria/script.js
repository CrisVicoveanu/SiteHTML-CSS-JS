$(document).ready(function() {
    $("a.nav-link").on('click', function(event) {
        if (this.hash !== "") {
            event.preventDefault();
            var hash = this.hash;
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 800, function() {
                window.location.hash = hash;
            });
        }
    });
});

// Eveniment de clic pentru formularul de contact
$(document).ready(function() {
    $("#contact-form").on('submit', function(event) {
        event.preventDefault();
        var name = $("#name").val();
        var email = $("#email").val();
        var message = $("#message").val();
        if (name && email && message) {
            // Aici puteți adăuga cod pentru a trimite mesajul către server sau a afișa un mesaj de succes
            alert("Mulțumim pentru mesaj, " + name + "!");
            $("#name").val("");
            $("#email").val("");
            $("#message").val("");
        } else {
            alert("Vă rugăm să completați toate câmpurile!");
        }
    });
});

