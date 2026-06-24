const songs = [

{
title:"Future Bass",
artist:"SigmaMusicArt",
src:"songs/sigmamusicart-no-copyright-music-537751.mp3",
cover:"https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=800"
},

{
title:"Funk & Breakbeat",
artist:"AlexGuz",
src:"songs/alexguz-funk-amp-breakbeat-541097.mp3",
cover:"https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=800"
},

{
title:"Escape Your Love",
artist:"FASSounds",
src:"songs/fassounds-escape-your-love-upbeat-fashion-pop-dance-412230.mp3",
cover:"https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?w=800"
}

];

const audio = document.getElementById("audio");
const cover = document.getElementById("cover");
const title = document.getElementById("title");
const artist = document.getElementById("artist");

const playBtn = document.getElementById("play");
const nextBtn = document.getElementById("next");
const prevBtn = document.getElementById("prev");

const progress = document.getElementById("progress");
const progressContainer = document.getElementById("progressContainer");

const currentTime = document.getElementById("currentTime");
const duration = document.getElementById("duration");

const volume = document.getElementById("volume");

const playlistItems = document.querySelectorAll("#playlist li");

let songIndex = 0;
let playing = false;

loadSong(songIndex);

function loadSong(index){

title.textContent = songs[index].title;
artist.textContent = songs[index].artist;
audio.src = songs[index].src;
cover.src = songs[index].cover;

playlistItems.forEach(item=>{
item.classList.remove("active");
});

playlistItems[index].classList.add("active");
}

function playSong(){

playing = true;
audio.play();

cover.classList.add("playing");

playBtn.innerHTML =
'<i class="fas fa-pause"></i>';
}

function pauseSong(){

playing = false;
audio.pause();

cover.classList.remove("playing");

playBtn.innerHTML =
'<i class="fas fa-play"></i>';
}

playBtn.onclick = ()=>{
playing ? pauseSong() : playSong();
};

nextBtn.onclick = ()=>{

songIndex++;

if(songIndex > songs.length-1){
songIndex = 0;
}

loadSong(songIndex);
playSong();
};

prevBtn.onclick = ()=>{

songIndex--;

if(songIndex < 0){
songIndex = songs.length-1;
}

loadSong(songIndex);
playSong();
};

audio.addEventListener("timeupdate",()=>{

const {duration:dur,currentTime:cur}=audio;

const percent = (cur/dur)*100;

progress.style.width = percent + "%";

currentTime.textContent = formatTime(cur);
duration.textContent = formatTime(dur);

});

function formatTime(time){

if(isNaN(time)) return "0:00";

let mins = Math.floor(time/60);
let secs = Math.floor(time%60);

if(secs<10) secs = "0"+secs;

return mins + ":" + secs;
}

progressContainer.addEventListener("click",(e)=>{

const width = progressContainer.clientWidth;
const clickX = e.offsetX;

audio.currentTime =
(clickX/width)*audio.duration;

});

volume.addEventListener("input",()=>{
audio.volume = volume.value;
});

playlistItems.forEach(item=>{

item.addEventListener("click",()=>{

songIndex = item.dataset.index;

loadSong(songIndex);

playSong();

});

});

audio.addEventListener("ended",()=>{
nextBtn.click();
});

document.getElementById("searchSong")
.addEventListener("keyup",function(){

const value =
this.value.toLowerCase();

document.querySelectorAll("#playlist li")
.forEach(song=>{

song.style.display =
song.innerText.toLowerCase()
.includes(value)
? "flex"
: "none";

});

});

document.addEventListener("keydown",(e)=>{

if(e.code==="Space"){

e.preventDefault();

playing
? pauseSong()
: playSong();

}

});