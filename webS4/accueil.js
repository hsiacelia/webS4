(function () {
    'use strict';
    $(() => {
        const cooking = document.getElementById('cuisine')
        const virus = document.getElementById('corona')

        if (cooking.click()) {
            window.location.href = '/cuisine.html'
        }
        if (virus.click()) {
            window.location.href = '/corona.html'
        }
    });
});