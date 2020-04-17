(function(){
    'use strict';
    $(() =>{
        /* verifie si l'utilisateur est connecté */
        $.ajax({
            url: 'json/is_connected.php',
            method: 'POST'
        })
            .done(function (data){
                console.log(data);
                if (data.isConnected){
                    $('body').append(
                        $('<button />')
                        .html('Déconnexion')
                        .click(function (){
                            $.ajax({
                                url: './json/logout.php',
                                method: 'GET'
                            })
                            .done(function() {
                                window.location.href = 'index.html';
                            })
                        })
                    )
                }
                else {
                    $('#login-form').submit(function() {
                        $.ajax({
                            url: $(this).attr('action'),
                            method: $(this).attr('method'),
                            data: $(this).serialize()
                        })
                            .done(function(data) {
                                if(data.success ) {  //bon compte
                                    window.location.href = 'question.html';
                                } else {                     // mauvais pwd ou id;
                                    $('body').append('<div />');
                                    $('#message')
                                        .html(data.message)
                                        .fadeIn();
                                }
                            })
                            .fail(function() {
                                $('body').html('Erreur fatale');

                            });
                        return false;
                    });
                }
            })
        // envoyer les variables issues d'un formulaire HTML à un script PHP en AJAX

    });
}) ();
