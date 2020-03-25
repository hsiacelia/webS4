(function () {
    'use strict';
    $(() => {
        var cpt = 1
        const nb = document.getElementById('numero');
        const question = document.getElementById('question');
        const rep1 = document.getElementById('rep1');
        const rep2 = document.getElementById('rep2');
        const rep3 = document.getElementById('rep3');
        const rep4 = document.getElementById('rep4');
        const bouton = document.getElementById('submit');
        const reponse = document.getElementById('reponse');
        console.log("jhbhj");
        while(cpt<10){
            switch (cpt) {
                case (cpt == 1) :
                    nb.innerHTML = 'Question' + cpt;
                    question.innerHTML = 'De quel pays les nems sont-elles originaires ?';
                    rep1.innerHTML = 'Chine';
                    rep2.innerHTML = 'Japon';
                    rep3.innerHTML = 'Vietnam';
                    rep4.innerHTML = 'Thailand';
                    if (reponse.click()) {
                        let couleur = reponse.style.color;
                        if (couleur == 'none') {
                            couleur = 'red';
                            console.log(couleur);
                            console.log('yoyoyo');
                        } else
                            couleur = 'black';
                    }
                    let rep = rep3.style.color;
                    if (rep == 'red' && bouton.click()) {
                        console.log('juste');
                    }
                case(cpt == 2):
                    console.log('question2');
            }
        }
    });
}) ();