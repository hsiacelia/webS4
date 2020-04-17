class Question{

    constructor() {
        let css_none = {'display':'none'};
        let css_block = {'display':'block'};
        let css_blanchedalmond = {'background-color':'blanchedalmond'};
        let css_blue = {'background-color':'blue'};
        let css_top = {'padding-top':'10%'};
        let css_30 = {'font-size':'30px'};
        let css_top_3 = {'padding-top':'3%'};
        let css_border = {'border':'none'};
        let reponse;
        let numero = 1;
        let question = this;
        $('.category-button').on('click', function (e) {
            e.preventDefault();
            console.log('click');
            $.ajax({
                url: 'json/category.php',
                method: 'post',
                data: {'category': $(this).data('category')}
            // }).done(this.handle_result)
            }).done(function (data) {
                if (data.success) {
                    $('.questionnaire').css(css_block);
                    $('#category-form').css(css_none);
                    $('#valider').css(css_block);
                    $('#title').empty().append(data.category);
                    question.affichequestion(data.number, data.question, data.reponse1, data.reponse2, data.reponse3, data.reponse4);
                    $('.onlyone').click(function () {
                       $('.onlyone').css(css_blanchedalmond);
                       $(this).css(css_blue);
                       reponse = $(this).data('reponse');
                        $('#valider').prop('disabled', false);
                    });
                    $('#valider').on('click', function (e) {
                        e.preventDefault();
                        $.ajax({
                            url: 'json/question.php',
                            method: 'post',
                            data: {"numero" : numero, "reponse" : reponse, 'valider' : true}
                        }).done(function (data) {
                            if(!data.fini){
                                numero = numero + 1;
                                console.log('fini',data.fini);
                                $('.onlyone').css(css_blanchedalmond)
                                question.affichequestion(data.number, data.question, data.reponse1, data.reponse2, data.reponse3, data.reponse4);
                                $('.onlyone').click(function () {
                                    $('.onlyone').css(css_blanchedalmond);
                                    $(this).css(css_blue);
                                    reponse = $(this).data('reponse');
                                    $('#valider').prop('disabled', false);
                                });
                            }
                            else{
                                console.log('fini', data.fini);
                                console.log(data.tab);
                                console.log(data.resultat);
                                console.log(data.test);
                                let res = data.resultat;
                                $('#valider').html('Retour aux choix').click(function () {
                                    window.location.href = 'question.html';
                                });
                                $('#number')
                                    .html('Resultat')
                                    .css(css_top)
                                    .css(css_30)
                                    .css(css_border);
                                $('#rep1')
                                    .empty()
                                    .css(css_none);
                                $('#rep3')
                                    .empty()
                                    .css(css_none);
                                $('#rep4')
                                    .empty()
                                    .css(css_none);
                                $('#rep2')
                                    .empty()
                                    .append(res + ' /10')
                                    .css(css_top_3)
                                    .css(css_border);
                                $('#question')
                                    .empty()
                                    .css(css_none);
                            }
                        });
                        return false;
                    });
                }
            });
            return false;
        });

    }

    affichequestion(number,question,rep1,rep2,rep3,rep4){
        $('#number').empty().append("Question " + number);
        $('#question').empty().append(question);
        $('#rep1').empty().append(rep1);
        $('#rep2').empty().append(rep2);
        $('#rep3').empty().append(rep3);
        $('#rep4').empty().append(rep4);
        $('#valider').prop('disabled', true);
    }

}

(function() {
    'use strict';
    $(document).ready(function () {
        let question = new Question();
    });

})();
