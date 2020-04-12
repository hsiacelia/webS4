class Questionnaire{

    constructor() {
        let css_none = {'display':'none'};
        let css_block = {'display':'block'};
        let css_top = {'padding-top':'10%'};
        let css_top_3 = {'padding-top':'3%'};
        let css_30 = {'font-size':'30px'};

        let questionnaire = this;
        let cpt = 1;

        $('#numero').empty().append('Question ' + cpt);
        questionnaire.choix(cpt);

        $('#previous').click(function () {
            $.ajax({
                type: 'POST',
                url: './question/cuisine.php',
                data: 'question =' + cpt,
            });

            if (cpt ==  1) {
                cpt = cpt + 1;
            }
            else {
                cpt = cpt - 1;
                $('#numero').empty().append('Question ' + cpt);
                questionnaire.choix(cpt);
            }
        });

        $('#next').click(function () {
            $.ajax({
                type: 'POST',
                url: './question/cuisine.php',
                data: 'question =' + cpt,
            });

            if(cpt == 10){
                $.ajax({
                    url : './question/cuisine.php',
                    dataType : 'html',
                }),
                    function (data) {
                        console.log(data);
                        $('#again').css(css_block);
                        $('#rep1').css(css_none);
                        $('#rep3').css(css_none);
                        $('#titre').html('Resultat');
                        $('#titre').css(css_top);
                        $('#titre').css(css_30);
                        $('#rep2').css(css_none);
                        $('#rep4').css(css_none);
                        $('#resultat').html(data + ' / 10');
                        $('#resultat').css(css_top_3);
                        $('#numero').css(css_none);
                        $('#question').css(css_none);
                        $('#previous').css(css_none);
                        $('#next').css(css_none);
                    }




            }
            else {
                cpt = cpt + 1;
                $('#numero').empty().append('Question ' + cpt);
                questionnaire.choix(cpt);
            }
        });

        $('#again').click(function () {
            window.location.href = 'cuisine.html'
        })

    }



    choix(num){
        switch (num){
            case 1:
                this.question1();
                break;
            case 2:
                this.question2();
                break;
            case 3:
                this.question3();
                break;
            case 4:
                this.question4();
                break;
            case 5:
                this.question5();
                break;
            case 6:
                this.question6();
                break;
            case 7:
                this.question7();
                break;
            case 8:
                this.question8();
                break;
            case 9:
                this.question9();
                break;
            case 10:
                this.question10();
                break;
        }
    }


    question1() {
        $('#question').empty().append('De quelle pays les nems sont-ils originaire ?');
        $('#rep1').empty().append('Chine');
        $('#rep2').empty().append('Vietnam'); //vrai
        $('#rep3').empty().append('Thailand');
        $('#rep4').empty().append('Japon');
    }

    question2() {
        $('#question').empty().append('Utilise-t-on élément n\'utilise-t-on pour faire des sushi ?');
        $('#rep1').empty().append('Sel');
        $('#rep2').empty().append('Sucre');
        $('#rep3').empty().append('Vinaigre de riz');
        $('#rep4').empty().append('Riz gluant'); //vrai
    }

    question3() {
        $('#question').empty().append('De quelle pays les burgers sont-ils originaire ?');
        $('#rep1').empty().append('France');
        $('#rep2').empty().append('Brésil');
        $('#rep3').empty().append('Etats-Unis');
        $('#rep4').empty().append('Allemagne'); //vrai
    }

    question4() {
        $('#question').empty().append('D\'où provient le meilleur fromage du monde World Cheese Awards 2019 ?');
        $('#rep1').empty().append('Italie');
        $('#rep2').empty().append('France');
        $('#rep3').empty().append('Suisse');
        $('#rep4').empty().append('Etats-Unis'); //vrai
    }

    question5() {
        $('#question').empty().append('De quelle ville la tapenade est-elle originaire ?');
        $('#rep1').empty().append('Nice');
        $('#rep2').empty().append('Marseille'); //vrai
        $('#rep3').empty().append('Arles');
        $('#rep4').empty().append('Avignon');
    }

    question6() {

        $('#question').empty().append('Quelle l\'épice la plus chère au monde ?');
        $('#rep1').empty().append('Safran'); //vrai
        $('#rep2').empty().append('Vanille');
        $('#rep3').empty().append('Cardamone');
        $('#rep4').empty().append('Curcumin');
    }

    question7() {

        $('#question').empty().append('Quelle est la deuxième épice la plus chère au monde ?');
        $('#rep1').empty().append('Safran');
        $('#rep2').empty().append('Vanille'); //vrai
        $('#rep3').empty().append('Cardamone');
        $('#rep4').empty().append('Curcumin');
    }

    question8() {

        $('#question').empty().append('Quelle est le fruit ou le légume qui possède la plus forte teneur en eau ?');
        $('#rep1').empty().append('Tomate');
        $('#rep2').empty().append('Pastèque');
        $('#rep3').empty().append('Carambole');
        $('#rep4').empty().append('Concombre'); //vrai
    }

    question9() {

        $('#question').empty().append('Quelle fruit n\'est pas un fruit exotique ?');
        $('#rep1').empty().append('Litchi');
        $('#rep2').empty().append('Avocat');
        $('#rep3').empty().append('Grenadine'); //vrai
        $('#rep4').empty().append('Durian');
    }

    question10() {

        $('#question').empty().append('Quelle numero sur les oeufs correspondent à un élevage plein air et une alimentation biologique ?');
        $('#rep1').empty().append('0');//vrai
        $('#rep2').empty().append('1');
        $('#rep3').empty().append('2');
        $('#rep4').empty().append('3');
    }

}



(function() {
    'use strict';
    $(document).ready(function () {
        let question = new Questionnaire();
    });

})();
