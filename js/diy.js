$(function () {
    $('#dowebok').fullpage({
        'navigation': true,
        'navigationPosition': "left",
        'navigationColor': ['#fff'],

    });

    let audiolist = document.querySelectorAll('audio')
    for (let i = 0; i < audiolist.length; i++) {
        let audio = audiolist[i]
        audio.addEventListener('play', function (e) {
            console.log(audio)
            console.log('该音频正在播放')
            for (let j = 0; j < audiolist.length; j++) {
                if (j !== i) audiolist[j].pause();
            }
        })
    }
});