class Questionnaire{

    constructor() {
        let css_none = {'display':'none'};
        let css_block = {'display':'block'};
        let css_top = {'padding-top':'10%'};
        let css_top_3 = {'padding-top':'3%'};
        let css_30 = {'font-size':'30px'};
        let etat = false;

        let questionnaire = this;
        let cpt = 1;

        $('#numero').empty().append('Question ' + cpt);
        questionnaire.choix(cpt);

        $('#previous').click(function () {
            $.ajax({
                type: 'POST',
                url: 'question/pokemon.php',
                data:{question : cpt},
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
                url: 'question/pokemon.php',
                data: {question : cpt},
            });
            if(cpt == 10){
                etat = true;
                $.ajax({
                    type : 'POST',
                    url : 'question/pokemon.php',
                    dataType : 'html',
                    data : {fini: etat},
                })
                    .done(function (data){
                        console.log(data.resultat);
                        console.log(data);
                        $('#again').css(css_block);
                        $('#rep1').css(css_none);
                        $('#rep3').css(css_none);
                        $('#titre').html('Resultat');
                        $('#titre').css(css_top);
                        $('#titre').css(css_30);
                        $('#rep2').css(css_none);
                        $('#rep4').css(css_none);
                        $('#resultat').html(data.resultat + ' / 10');
                        $('#resultat').css(css_top_3);
                        $('#numero').css(css_none);
                        $('#question').css(css_none);
                        $('#previous').css(css_none);
                        $('#next').css(css_none);
                    })


            }
            else {
                cpt = cpt + 1;
                $('#numero').empty().append('Question ' + cpt);
                questionnaire.choix(cpt);
            }
        });

        $('#again').click(function () {
            window.location.href = 'pokemon.html'
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
        $('#question').empty().append('Combien de génération y-a-t-il dans le jeu (avril 2020) ?');
        $('#rep1').empty().append('3');
        $('#rep2').empty().append('4');
        $('#rep3').empty().append('5');
        $('#rep4').empty().append('6');
    }

    question2() {
        $('#question').empty().append('Combien coûte la boîte hyper ?');
        $('#rep1').empty().append('1470 Poképièces');
        $('#rep2').empty().append('1480 Poképièces'); //vrai
        $('#rep3').empty().append('1490 Poképièces');
        $('#rep4').empty().append('1500 Poképièces');
    }

    question3() {
        $('#question').empty().append('Combien coûte un pass premium ?');
        $('#rep1').empty().append('50 Poképièces');
        $('#rep2').empty().append('80 Poképièces');
        $('#rep3').empty().append('100 Poképièces');
        $('#rep4').empty().append('200 Poképièces');
    }

    question4() {
        $('#question').empty().append('Combien de ligue de combat existe-il ?');
        $('#rep1').empty().append('1');
        $('#rep2').empty().append('2');
        $('#rep3').empty().append('3');
        $('#rep4').empty().append('4');
    }

    question5() {
        $('#question').empty().append('Combien de kilomètre par semaine faut-il marcher pour avoir un espoir d\'obtenir un oeuf de 10 km dans la récompense quotidienne ?');
        $('#rep1').empty().append('10 km');
        $('#rep2').empty().append('20 km');
        $('#rep3').empty().append('40 km');
        $('#rep4').empty().append('50 km');
    }

    question6() {

        $('#question').empty().append('Quel est le pokémon qui possède le plus de PC dans le jeu (avril 2020) ?');
        $('#rep1').empty().append('Monaflémit');
        $('#rep2').empty().append('Kyogre');
        $('#rep3').empty().append('Dialga');
        $('#rep4').empty().append('Mewtwo');
    }

    question7() {

        $('#question').empty().append('Les demandes de pokéstop peuvent être faites à partir de quelle niveau ?');
        $('#rep1').empty().append('30');
        $('#rep2').empty().append('35');
        $('#rep3').empty().append('40');
        $('#rep4').empty().append('Il n\'y a pas de niveau minimum requis');
    }

    question8() {

        $('#question').empty().append('Combien de poképièce (au maximum) peut-on avoir par jour ?');
        $('#rep1').empty().append('50');
        $('#rep2').empty().append('100');
        $('#rep3').empty().append('150');
        $('#rep4').empty().append('Il n\'y a pas de niveau minimum requis');
    }

    question9() {

        $('#question').empty().append('En chromatique, Rayquaza est de quelle couleur ?');
        $('#rep1').empty().append('Blanc');
        $('#rep2').empty().append('Noir');
        $('#rep3').empty().append('Rouge');
        $('#rep4').empty().append('Vert foncé');
    }

    question10() {

        $('#question').empty().append('Parmis ces pokémons, qui n\'est pas un légendaire ?');
        $('#rep1').empty().append('Darkrai');
        $('#rep2').empty().append('Dialga');
        $('#rep3').empty().append('Groudon');
        $('#rep4').empty().append('Créfollet');
    }

}



(function() {
    'use strict';
    $(document).ready(function () {
        let question = new Questionnaire();
    });

})();
