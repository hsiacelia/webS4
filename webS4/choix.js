class Choix {

    constructor() {
        let css_blue = {'background-color': 'blue'};
        let css_blanchedalmond = {'background-color': 'blanchedalmond'};

        $('#rep1').click(function () {
            console.log('rep1');
            $('#rep1').css(css_blue);
            $('#rep2').css(css_blanchedalmond);
            $('#rep3').css(css_blanchedalmond);
            $('#rep4').css(css_blanchedalmond);
            $.ajax({
                type: 'POST',
                url: './question/cuisine.php',
                data: 'reponse =' + 1,
            });
        });
        $('#rep2').click(function () {
            console.log('rep2');

            $('#rep1').css(css_blanchedalmond);
            $('#rep2').css(css_blue);
            $('#rep3').css(css_blanchedalmond);
            $('#rep4').css(css_blanchedalmond);
            $.ajax({
                type: 'POST',
                url: './question/cuisine.php',
                data: 'reponse =' + 2,
            });

        });
        $('#rep3').click(function () {
            console.log('rep3');

            $('#rep1').css(css_blanchedalmond);
            $('#rep2').css(css_blanchedalmond);
            $('#rep3').css(css_blue);
            $('#rep4').css(css_blanchedalmond);
            $.ajax({
                type: 'POST',
                url: './question/cuisine.php',
                data: 'reponse =' + 3,
            });

        });
        $('#rep4').click(function () {
            console.log('rep4');

            $('#rep1').css(css_blanchedalmond);
            $('#rep2').css(css_blanchedalmond);
            $('#rep3').css(css_blanchedalmond);
            $('#rep4').css(css_blue);
            $.ajax({
                type: 'POST',
                url: './question/cuisine.php',
                data: 'reponse =' + 4,
            });
        });

        $('#next').click(function () {
            $('#rep1').css(css_blanchedalmond);
            $('#rep2').css(css_blanchedalmond);
            $('#rep3').css(css_blanchedalmond);
            $('#rep4').css(css_blanchedalmond);
        })

        $('#previous').click(function () {
            $('#rep1').css(css_blanchedalmond);
            $('#rep2').css(css_blanchedalmond);
            $('#rep3').css(css_blanchedalmond);
            $('#rep4').css(css_blanchedalmond);
        })
    }

}

(function() {
    'use strict';
    $(document).ready(function () {
        let question = new Choix();
    });

})();
