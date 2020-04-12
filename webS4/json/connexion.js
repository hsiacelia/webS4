(function(){
    'use strict';
    $(document).ready(function () {
        $.ajax({
            url: 'json/is_connected.php',
            method: 'POST'
        })
            .done(function (data){
                console.log(data);
                if (!data.isConnected){
                    window.location.href = 'login.html';
                }

            })

    });
}) ();
