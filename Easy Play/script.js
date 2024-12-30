console.log("Welcome to Easy Play");

// Initialize the Variables
let songIndex = 0;
let audioElement = new Audio('songs/1.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
let masterSongName = document.getElementById('masterSongName');
let songItems = Array.from(document.getElementsByClassName('songItem'));

let songs = [
    {songName:"Yaalo Yaalo- Animal", filePath:"songs/1.mp3", coverPath:"covers/1.jpg"},
    {songName:"Nee Kannulo Nenu- Winner", filePath:"songs/2.mp3", coverPath:"covers/2.jpeg"},
    {songName:"Nanna Nvu Na Pranam- Animal", filePath:"songs/3.mp3", coverPath:"covers/1.jpg"},
    {songName:"Velugu Chikati Lo Na- Sapthagiri Express", filePath:"songs/4.mp3", coverPath:"covers/4.jpg"},
    {songName:"Rela Rela- Vimanam", filePath:"songs/5.mp3", coverPath:"covers/5.jpeg"},

    {songName:"Dosthulam- Mem Famous", filePath:"songs/6.mp3", coverPath:"covers/6.jpg"},
    {songName:"O My Friends- Happy Days", filePath:"songs/7.mp3", coverPath:"covers/7.jpeg"},
    {songName:"Trendu Marina- Vunnadhi Okate Zindhagi ", filePath:"songs/8.mp3", coverPath:"covers/8.jpeg"},
    {songName:"Friendshin Ni Minchina- Lovers Day", filePath:"songs/9.mp3", coverPath:"covers/9.jpeg"},
    {songName:"Dhoom Dhaam Dosthan- Dussehra", filePath:"songs/108.mp3", coverPath:"covers/10.jpeg"},

    {songName:"Srekara Shubhakara", filePath:"songs/11.mp3", coverPath:"covers/11.jpeg"},
    {songName:"Badra Sheela", filePath:"songs/12.mp3", coverPath:"covers/12.jpeg"},
    {songName:"Podaganti Mayya", filePath:"songs/13.mp3", coverPath:"covers/13.jpeg"},
    {songName:"Dhaasharadi ", filePath:"songs/14.mp3", coverPath:"covers/14.jpeg"},
    {songName:"Amma Bhavani", filePath:"songs/15.mp3", coverPath:"covers/15.jpeg"},

    {songName:"Ammayi- Animal", filePath:"songs/16.mp3", coverPath:"covers/16.jpeg"},
    {songName:"Ninnele- Radhe Shyam", filePath:"songs/17.mp3", coverPath:"covers/17.jpeg"},
    {songName:"Ninnila- Tholi Pranam", filePath:"songs/18.mp3", coverPath:"covers/18.jpeg"},
    {songName:"Nuvvu Navvukuntu Vellipomake- MAD", filePath:"songs/19.mp3", coverPath:"covers/19.jpeg"},
    {songName:"Katha Kadhey- Remo", filePath:"songs/20.mp3", coverPath:"covers/20.jpeg"},

    {songName:"Kantininda", filePath:"songs/21.mp3", coverPath:"covers/21.jpg"},
    {songName:"Gurthukochi Nappudalla", filePath:"songs/22.mp3", coverPath:"covers/22.jpeg"},
    {songName:"Maruvanidhi Ni Pi Prema", filePath:"songs/23.mp3", coverPath:"covers/23.jpeg"},
    {songName:"Saave Osthaledhe", filePath:"songs/24.mp3", coverPath:"covers/24.jpeg"},
    {songName:"Somasilli Pothunnave", filePath:"songs/25.mp3", coverPath:"covers/25.jpeg"},

    {songName:"Yevarra ManakiCustody- Mahaan", filePath:"songs/26.mp3", coverPath:"covers/26.jpeg"},
    {songName:"Ranjithame- Vaarasudu", filePath:"songs/27.mp3", coverPath:"covers/27.jpeg"},
    {songName:"DJ Tillu- DJ Tillu", filePath:"songs/28.mp3", coverPath:"covers/28.jpeg"},
    {songName:"Jinthaka Chitha Chitha- Dhamaka", filePath:"songs/29.mp3", coverPath:"covers/29.jpeg"},
    {songName:"Kanney- Kanchana", filePath:"songs/30.mp3", coverPath:"covers/30.jpeg"},

    {songName:"Aasha Pasham", filePath:"songs/31.mp3", coverPath:"covers/31.jpeg"},
    {songName:"Kaalam Nitho Nadavadhu", filePath:"songs/32.mp3", coverPath:"covers/32.jpeg"},
    {songName:"Oke Oka Jeevitham- Happy Days", filePath:"songs/33.mp3", coverPath:"covers/33.jpeg"},
    {songName:"Prayathnamee", filePath:"songs/34.mp3", coverPath:"covers/34.jpeg"},
    {songName:"Anukunte Kaanidhi M Unnadhi", filePath:"songs/35.mp3", coverPath:"covers/35.jpg"},
   
]

songItems.forEach((element, i) => {
    if (songs[i] && songs[i].coverPath && songs[i].songName) {
        element.getElementsByTagName("img")[0].src = songs[i].coverPath;
        element.getElementsByClassName("songName")[0].innerText = songs[i].songName;
    } else {
        console.error(`Invalid data for index ${i} in the songs array.`);
    }
});
 

// Handle play/pause click
masterPlay.addEventListener('click', ()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        gif.style.opacity = 1;
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
        gif.style.opacity = 0;
    }
})


// Listen to Events
audioElement.addEventListener('timeupdate', ()=>{ 
    // Update Seekbar
    progress = parseInt((audioElement.currentTime/audioElement.duration)* 100); 
    myProgressBar.value = progress;
})

myProgressBar.addEventListener('change', ()=>{
    audioElement.currentTime = myProgressBar.value * audioElement.duration/100;
})

const makeAllPlays = ()=>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
        element.classList.remove('fa-pause-circle');
        element.classList.add('fa-play-circle');
    })
}

Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.addEventListener('click', (e)=>{ 
        makeAllPlays();
        songIndex = parseInt(e.target.id);
        e.target.classList.remove('fa-play-circle');
        e.target.classList.add('fa-pause-circle');
        audioElement.src = `songs/${songIndex+1}.mp3`;
        masterSongName.innerText = songs[songIndex].songName;
        audioElement.currentTime = 0;
        audioElement.play();
        gif.style.opacity = 1;
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
    })
})

document.getElementById('next').addEventListener('click', ()=>{
    if(songIndex>=50){
        songIndex = 0
    }
    else{
        songIndex += 1;
    }
    audioElement.src = `songs/${songIndex+1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');

})

document.getElementById('previous').addEventListener('click', ()=>{
    if(songIndex<=0){
        songIndex = 50
    }
    else{
        songIndex -= 1;
    }
    audioElement.src = `songs/${songIndex+1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
})