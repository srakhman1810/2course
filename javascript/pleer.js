const video = document.querySelector('.video'),
    play = document.querySelector('.play'),
    duration = document.querySelector('.progress'),
    laut = document.querySelector('.laut'),
    volume = document.querySelector('.volume'),
    playIcon = document.querySelector('.play-icon'),
    pauseIcon = document.querySelector('.pause-icon'),
    muteIcon = document.querySelector('.mute-icon'),
    volumeIcon = document.querySelector('.volume-icon'),
    playBig = document.querySelector('.video-icon'),
    curtimetext = document.querySelector('.curtimetext'),
    durtimetext = document.querySelector('.durtimetext');

play.addEventListener('click', function (e) {
    if (video.paused) {
        video.play();
        playIcon.style.opacity = "0";
        pauseIcon.style.opacity = "1";
        playBig.style.opacity ="0";
    }
    else {
        video.pause();
        pauseIcon.style.opacity = "0";
        playIcon.style.opacity = "1";
        playBig.style.opacity ="1";
    }
});

video.addEventListener('click', function (e) {
    if (video.paused) {
        video.play();  
        playIcon.style.opacity = "0";
        pauseIcon.style.opacity = "1";
        playBig.style.opacity ="0";
    }
    else {
        video.pause();
        pauseIcon.style.opacity = "0";
        playIcon.style.opacity = "1";
        playBig.style.opacity ="1";
  
    }
});

playBig.addEventListener('click', function (e) {
    if (video.paused) {
        video.play();  
        playIcon.style.opacity = "0";
        pauseIcon.style.opacity = "1";
        playBig.style.opacity ="0";
    }
    else {
        video.pause();
        pauseIcon.style.opacity = "0";
        playIcon.style.opacity = "1";
        playBig.style.opacity ="1";
  
    }
});


laut.addEventListener('click', function (e) {

    if (video.muted) {
        video.muted = false;
        volume.value = 100;
        volumeIcon.style.opacity = "1";
        muteIcon.style.opacity = "0";
    }
    else {
        video.muted = true;
        volume.value = 0;
        volumeIcon.style.opacity = "0";
        muteIcon.style.opacity = "1";
    }
});

volume.addEventListener('mousemove', function (e) {
    video.volume = volume.value / 100;

});


video.ontimeupdate = progressUpdate;
function progressUpdate() {
    console.log(video.duration);
    console.log(video.currentTime);
    let d = video.duration;
    let c = video.currentTime;
    progress.value = 100 * c / d;
    var curmins = Math.floor(video.currentTime / 60);
    var cursecs = Math.floor(video.currentTime - curmins * 60);
    var durmins = Math.floor(video.duration / 60);
    var dursecs = Math.round(video.duration - durmins * 60);
    if (cursecs<10) {
        cursecs = "0"+cursecs;
    }
    if (dursecs<10) {
        dursecs = "0"+dursecs;
    }
    curtimetext.innerHTML = curmins+":"+cursecs;
    durtimetext.innerHTML=  durmins+":"+dursecs;
}

progress.addEventListener('click', function(e) {
    let w = this.offsetWidth;
    let o = event.offsetX;
    this.value = 100 * o / w;
    video.pause();
    video.currentTime = video.duration * (o / w);
    video.play();
})









