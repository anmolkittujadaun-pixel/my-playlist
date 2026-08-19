let songs = [
    { title: "Ye Tune Kya Kiya", artist: "Javed Bashir", audio: "Once_Upon_A_Time_In_Mumbai_Dobaara_-_Ye_Tune_Kya_Kiya_Javed_Bashir_(mp3.pm).mp3" }
];

let currentSongIndex = 0;
let isPlaying = false;
let audioPlayer = new Audio();

// स्क्रीन पर दिखने वाले एलिमेंट्स
const songTitle = document.querySelector('.main-card h2');
const songArtist = document.querySelector('.artist');
const playBtn = document.querySelector('.play-pause-btn');
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');

function loadSong(index) {
    const song = songs[index];
    songTitle.innerText = song.title;
    songArtist.innerText = song.artist;
    audioPlayer.src = song.audio;
}

function playSong() {
    isPlaying = true;
    audioPlayer.play();
    playBtn.innerHTML = '⏸️'; // पॉज का आइकॉन
}

function pauseSong() {
    isPlaying = false;
    audioPlayer.pause();
    playBtn.innerHTML = '▶️'; // प्ले का आइकॉन
}

playBtn.addEventListener('click', () => {
    if (isPlaying) {
        pauseSong();
    } else {
        playSong();
    }
});
