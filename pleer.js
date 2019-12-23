const video = document.querySelector('.video'),
    play = document.querySelector('.play'),
    duration = document.querySelector('.progress'),
    laut = document.querySelector('.laut'),
    volume = document.querySelector('.volume'),
    playIcon = document.querySelector('.play-icon'),
    pauseIcon = document.querySelector('.pause-icon');

play.addEventListener('click', function (e) {
    if (video.paused) {
        video.play();
        playIcon.style.opacity = "0";
        pauseIcon.style.opacity = "1";



        // video.duration = true;
        //  video.ontimeupdate = true;
        // startDuration = setInterval(initDuration);
    }
    else {
        video.pause();
        pauseIcon.style.opacity = "0";
        playIcon.style.opacity = "1";
        // video.duration = false;
        // clearInterval(startDuration);
    }
    // var duration;
    // var startDuration;
    // duration.value = 0;
    // duration.min = 0;
    // duration.max = video.duration;
    // function initDuration() {
    //  duration.value = video.currentTime;
    // }
});

video.addEventListener('click', function (e) {
    if (video.paused) {
        video.play();  
        // video.duration = true;
       
    }
    else {
        video.pause();
        // video.duration = false;
    }
});


laut.addEventListener('click', function (e) {

    if (video.muted) {
        video.muted = false;
        volume.value = 100;
    }
    else {
        video.muted = true;
        volume.value = 0;
    }
});

volume.addEventListener('mousemove', function (e) {
    video.volume = volume.value / 100;

});


// let progressUpdate = video.ontimeupdate;

// function progressUpdate() {
//     console.log(video.duration);
//     let d = video.duration;
    
// }

progress.addEventListener('click', function () {
    let w = this.offsetWidth;
    let o = event.offsetX;
    this.value = 100 * o / w;
    video.pause();
    video.currentTime = video.duration * (o / w);
    video.play();

})







