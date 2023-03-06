$(function () {
    $('#dowebok').fullpage({
        'navigation': true,
        'navigationPosition': "left",
        'navigationColor': ['#fff'],

    });

    let bir = document.querySelector('.bir');
    let jm = document.querySelector('.jm');
    jm.addEventListener('click', function () {
        bir.autoplay = '';
    })
});