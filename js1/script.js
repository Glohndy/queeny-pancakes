$(function () {
    
    $('#contactForm').submit(function(e) {
        e.preventDefault();
        $('.comments').empty();
        var postdata = $('#contactForm').serialize();
        
        $.ajax({
            type: 'POST',
            url: 'php/contact.php',
            data: postdata,
            dataType: 'json',
            success: function(json) {
                 
                if(json.isSuccess) {
                    $('#contactForm').append("<p class='thank-you'>Votre message a bien été envoyé. Merci de m'avoir contacté :)</p>");
                    $('#contactForm')[0].reset();
                } else {

                    $('#name + .comments').html(json.nameError);
                    $('#email + .comments').html(json.emailError);
                    $('#message + .comments').html(json.messageError);
                    $('#message + .comments').html(json.messageError);
                }                
            }
        });
    });

})