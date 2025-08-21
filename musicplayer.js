const songs = [
    {
        title: "Pizza Mayhem",
        artist: "Mr. Sauceman",
        url: "https://file.garden/Zi1RIXKllhGepRPS/Website%20Files/Pizza%20Mayhem.mp3",
        cover: "https://file.garden/Zi1RIXKllhGepRPS/Website%20Files/Pizza%20Tower%20Soundtrack",
        loop: false 
    },
    {
        title: "greenroom.ogg",
        artist: "Toby Fox",
        url: "https://file.garden/Zi1RIXKllhGepRPS/Website%20Files/greenroom.ogg",
        cover: "https://file.garden/Zi1RIXKllhGepRPS/Website%20Files/greenroom.png",
        loop: true
    },
    {
        title: "Mirror Temple (Mirror Magic Mix)",
        artist: "2 Mello",
        url: "https://file.garden/Zi1RIXKllhGepRPS/Website%20Files/Mirror%20Temple%20(Mirror%20Magic%20Mix)",
        cover: "https://file.garden/Zi1RIXKllhGepRPS/Website%20Files/various-artists-celeste-b-sides.jpg",
        loop: false
    },
    {
        title: "DEATH IN THE FAMILY",
        artist: "Bromius",
        url: "https://file.garden/Zi1RIXKllhGepRPS/Website%20Files/DEATH_IN_THE_FAMILY.mp3",
        cover: "https://file.garden/Zi1RIXKllhGepRPS/Website%20Files/boggio-death-in-the-family.jpg",
        loop: false 
    },
    {
        title: "Companion",
        artist: "Kreagato ft. Kasane Teto",
        url: "https://file.garden/Zi1RIXKllhGepRPS/Website%20Files/16.%20Companion.mp3",
        cover: "https://file.garden/Zi1RIXKllhGepRPS/Website%20Files/various-artists-fnf-weekly-tweakmas-ost.jpg",
        loop: false 
    },
    {
        title: "indomitable2weak",
        artist: "Cloverderus, maddiesmiles, Lethrial, niffrg",
        url: "https://file.garden/Zi1RIXKllhGepRPS/Website%20Files/18.%20indomitable2weak.mp3",
        cover: "https://file.garden/Zi1RIXKllhGepRPS/Website%20Files/various-artists-fnf-weekly-tweakmas-ost.jpg",
        loop: false 
    },
    {
        title: "Frostburn",
        artist: "KatAnims, scrumbo_",
        url: "https://file.garden/Zi1RIXKllhGepRPS/Website%20Files/07.%20Frostburn.mp3",
        cover: "https://file.garden/Zi1RIXKllhGepRPS/Website%20Files/various-artists-fnf-weekly-tweakmas-ost.jpg",
        loop: false 
    },
    {
        title: "Main Theme",
        artist: "Ivy Sly",
        url: "https://file.garden/Zi1RIXKllhGepRPS/Website%20Files/Your%20Only%20Move%20Is%20HUSTLE.mp3",
        cover: "https://file.garden/Zi1RIXKllhGepRPS/Website%20Files/yomi%20hustle.png",
        loop: false 
    },
    {
        title: "Lit Up (BF Mix)",
        artist: "Saruky",
        url: "https://file.garden/Zi1RIXKllhGepRPS/Website%20Files/lit%20up%20bf%20mix.mp3",
        cover: "https://file.garden/Zi1RIXKllhGepRPS/Website%20Files/funkin'-sound-team-friday-night-funkin'-ost.jpg",
        loop: false 
    },
    {
        title: "Vs. Susie",
        artist: "Toby Fox",
        url: "https://file.garden/Zi1RIXKllhGepRPS/Website%20Files/24%20-%20Vs.%20Susie.mp3",
        cover: "https://file.garden/Zi1RIXKllhGepRPS/Website%20Files/dt%20chp1.jpg",
        loop: true 
    },
    {
        title: "April 2012",
        artist: "Toby Fox",
        url: "https://file.garden/Zi1RIXKllhGepRPS/Website%20Files/April%202012.mp3",
        cover: "https://file.garden/Zi1RIXKllhGepRPS/Website%20Files/dt%20chp1.jpg",
        loop: true 
    },
    {
        title: "Chaos King",
        artist: "Toby Fox",
        url: "https://file.garden/Zi1RIXKllhGepRPS/Website%20Files/30_-_Chaos_King.mp3",
        cover: "https://file.garden/Zi1RIXKllhGepRPS/Website%20Files/dt%20chp1.jpg",
        loop: false 
    },
    {
        title: "THE WORLD REVOLVING",
        artist: "Toby Fox",
        url: "https://file.garden/Zi1RIXKllhGepRPS/Website%20Files/33_-_THE_WORLD_REVOLVING.mp3",
        cover: "https://file.garden/Zi1RIXKllhGepRPS/Website%20Files/dt%20chp1.jpg",
        loop: false 
    },
    {
        title: "Spamton",
        artist: "Toby Fox",
        url: "https://file.garden/Zi1RIXKllhGepRPS/Website%20Files/Spamton.mp3",
        cover: "https://file.garden/Zi1RIXKllhGepRPS/Website%20Files/dt%20chp2.jpg",
        loop: false 
    },
    {
        title: "HEY EVERY !",
        artist: "Toby Fox",
        url: "https://file.garden/Zi1RIXKllhGepRPS/Website%20Files/HEY%20EVERY%20!.mp3",
        cover: "https://file.garden/Zi1RIXKllhGepRPS/Website%20Files/dt%20chp2.jpg",
        loop: false 
    },
    {
        title: "NOW'S YOUR CHANCE TO BE A",
        artist: "Toby Fox",
        url: "https://file.garden/Zi1RIXKllhGepRPS/Website%20Files/NOW'S%20YOUR%20CHANCE%20TO%20BE%20A.mp3",
        cover: "https://file.garden/Zi1RIXKllhGepRPS/Website%20Files/dt%20chp2.jpg",
        loop: false 
    },
    {
        title: "BIG SHOT",
        artist: "Toby Fox",
        url: "https://file.garden/Zi1RIXKllhGepRPS/Website%20Files/BIG%20SHOT.mp3",
        cover: "https://file.garden/Zi1RIXKllhGepRPS/Website%20Files/dt%20chp2.jpg",
        loop: false 
    },
    {
        title: "Dialtone",
        artist: "Toby Fox",
        url: "https://file.garden/Zi1RIXKllhGepRPS/Website%20Files/Dialtone.mp3",
        cover: "https://file.garden/Zi1RIXKllhGepRPS/Website%20Files/dt%20chp2.jpg",
        loop: true 
    },
    {
        title: "MIKE, the BOARD, please!",
        artist: "Toby Fox",
        url: "https://file.garden/Zi1RIXKllhGepRPS/Website%20Files/MIKE%2C%20the%20BOARD%2C%20please!.mp3",
        cover: "https://file.garden/Zi1RIXKllhGepRPS/Website%20Files/toby-fox-chapter-4.jpg",
        loop: true 
    },
    {
        title: "Raise Up Your Bat",
        artist: "Toby Fox",
        url: "https://file.garden/Zi1RIXKllhGepRPS/Website%20Files/Raise%20Up%20Your%20Bat.mp3",
        cover: "https://file.garden/Zi1RIXKllhGepRPS/Website%20Files/toby-fox-chapter-4.jpg",
        loop: true 
    },
    {
        title: "The Dark Sanctuary",
        artist: "Toby Fox, Itoki Hana",
        url: "https://file.garden/Zi1RIXKllhGepRPS/Website%20Files/Dark%20Sanctuary%20(feat.%20Itoki%20Hana).mp3",
        cover: "https://file.garden/Zi1RIXKllhGepRPS/Website%20Files/toby-fox-chapter-4.jpg",
        loop: true 
    },
    {
        title: "The Second Sanctuary",
        artist: "Toby Fox",
        url: "https://file.garden/Zi1RIXKllhGepRPS/Website%20Files/The%20Second%20Sanctuary.mp3",
        cover: "https://file.garden/Zi1RIXKllhGepRPS/Website%20Files/toby-fox-chapter-4.jpg",
        loop: true 
    },
    {
        title: "Machine Love",
        artist: "Jamie Paige",
        url: "https://file.garden/Zi1RIXKllhGepRPS/Website%20Files/Machine%20Love%20-%20Jamie%20Paige.mp3",
        cover: "https://file.garden/Zi1RIXKllhGepRPS/Website%20Files/machine-love.jpg",
        loop: false 
    },
    {
        title: "REGRET ROCK",
        artist: "MonochroMenace",
        url: "https://file.garden/Zi1RIXKllhGepRPS/Website%20Files/REGRET%20ROCK%20-%20MonochroMenace.mp3",
        cover: "https://file.garden/Zi1RIXKllhGepRPS/Website%20Files/REGRET%20ROCK.jpg",
        loop: false
    },
    {
        title: "Bunkertown",
        artist: "Noah Simcox",
        url: "https://file.garden/Zi1RIXKllhGepRPS/Website%20Files/Bunkertown.mp3",
        cover: "https://file.garden/Zi1RIXKllhGepRPS/Website%20Files/Bunkertown.jpg",
        loop: false 
    },
    {
        title: "The Truth Hurts",
        artist: "Noah Simcox",
        url: "https://file.garden/Zi1RIXKllhGepRPS/Website%20Files/The%20Truth%20Hurts.mp3",
        cover: "https://file.garden/Zi1RIXKllhGepRPS/Website%20Files/Bunkertown.jpg",
        loop: false 
    },
    {
        title: "CT Central Intro",
        artist: "CT Himself",
        url: "https://file.garden/Zi1RIXKllhGepRPS/Website%20Files/CT%20Central%20Intro.mp3",
        cover: "https://file.garden/Zi1RIXKllhGepRPS/Website%20Files/ct%20great%20hit.jpg",
        loop: false 
    },
    {
        title: "Hiring Day",
        artist: "CT Himself",
        url: "https://file.garden/Zi1RIXKllhGepRPS/Website%20Files/Hiring%20Day.mp3",
        cover: "https://file.garden/Zi1RIXKllhGepRPS/Website%20Files/ct%20great%20hit.jpg",
        loop: false 
    },
    {
        title: "Random Final Boss Theme I May Use Someday",
        artist: "CT Himself",
        url: "https://file.garden/Zi1RIXKllhGepRPS/Website%20Files/Random%20Final%20Boss%20Theme%20I%20May%20Use%20Someday.mp3",
        cover: "https://file.garden/Zi1RIXKllhGepRPS/Website%20Files/ct%20great%20hit.jpg",
        loop: false 
    },
    {
        title: "Bohemian Rhapsody",
        artist: "Queen",
        url: "https://file.garden/Zi1RIXKllhGepRPS/Website%20Files/Bohemian%20Rasphody%20-%20Queen.mp3",
        cover: "https://file.garden/Zi1RIXKllhGepRPS/Website%20Files/queen-a-night-at-the-opera.jpg",
        loop: false 
    },
    {
        title: "INVISIBLE",
        artist: "Duran Duran",
        url: "https://file.garden/Zi1RIXKllhGepRPS/Website%20Files/INVISIBLE%20-%20Duran%20Duran.mp3",
        cover: "https://file.garden/Zi1RIXKllhGepRPS/Website%20Files/duran-duran-future-past.jpg",
        loop: false 
    },
    {
        title: "Glee Co.",
        artist: "Churgney Gurgney, duccly",
        url: "https://file.garden/Zi1RIXKllhGepRPS/Website%20Files/Glee%20Co.%20-%20Churgney%20Gurgney.mp3",
        cover: "https://file.garden/Zi1RIXKllhGepRPS/Website%20Files/churgney-gurgney-glee-co..jpg",
        loop: false 
    },
    {
        title: "Live and Learn - Main Theme of Sonic Adventure 2",
        artist: "Crush 40",
        url: "https://file.garden/Zi1RIXKllhGepRPS/Website%20Files/Live%20%26%20Learn%20...%20Main%20Theme%20of%20Sonic%20Adventure%202.mp3",
        cover: "https://file.garden/Zi1RIXKllhGepRPS/Website%20Files/sonic%20adventure%202.png",
        loop: false 
    },
    {
        title: "Purple Comet",
        artist: "SUPER MARIO GALAXY ORCHESTRA",
        url: "https://file.garden/Zi1RIXKllhGepRPS/Website%20Files/Purple%20Comet.mp3",
        cover: "https://file.garden/Zi1RIXKllhGepRPS/Website%20Files/smgost.jpg",
        loop: false 
    },
    {
        title: "Hatred",
        artist: "nicopatty, Streetwise Rhapsody",
        url: "https://file.garden/Zi1RIXKllhGepRPS/Website%20Files/Hatred%20-%20Block%20Tales%20OST.mp3",
        cover: "https://file.garden/Zi1RIXKllhGepRPS/Website%20Files/hatred%20album%20cover.png",
        loop: false 
    },
    {
        title: "robert battle.mid",
        artist: "johued1",
        url: "https://file.garden/Zi1RIXKllhGepRPS/Website%20Files/robert%20battle.mp3",
        cover: "https://file.garden/Zi1RIXKllhGepRPS/Website%20Files/robert.png",
        loop: false 
    },
        {
        title: "Break Free",
        artist: "ThatGuyRamon, Rob Lungdren",
        url: "https://file.garden/Zi1RIXKllhGepRPS/Website%20Files/Break%20Free.mp3",
        cover: "https://file.garden/Zi1RIXKllhGepRPS/Website%20Files/outcome.jpg",
        loop: false 
    }
    
    
];

let currentSongIndex = 0;
let isSpecialSongActive = false;
const audio = new Audio();
audio.preload = "auto";

function loadSong(index) {
    const song = songs[index];
    document.getElementById("song-title").textContent = song.title;
    document.getElementById("artist-name").textContent = song.artist;
    document.getElementById("cover-image").src = song.cover;
    audio.src = song.url;
    audio.loop = song.loop;

    const body = document.body;
    const musicPlayer = document.getElementById("music-player");
    const textBlock = document.querySelector(".text-block");
    const socialIconGirlie = document.querySelector(".social-icon-girlie");

    const existingRundeer = document.getElementById("rundeer-gif");
    if (existingRundeer) {
        existingRundeer.remove();
    }

    body.style.backgroundImage = "url('secret.png')";
    musicPlayer.style.backgroundImage = "url('musicplayer-bg.png')";
    textBlock.style.backgroundColor = "rgba(218, 149, 250, 0.5)";
    socialIconGirlie.src = "girlie.gif";

    if (song.title === "Dialtone") {
        body.style.backgroundImage = "url('scarysecret.png')";
        musicPlayer.style.backgroundImage = "url('musicplayerscary-bg.png')";
        textBlock.style.backgroundColor = "rgba(158, 158, 158, 0.47)";
        socialIconGirlie.src = "scarygirlie.png";
    }

    if (song.title === "Hatred") {
        body.style.backgroundImage = "url('hatred.png')";
        musicPlayer.style.backgroundImage = "url('musicplayerhatred-bg.png')";
        textBlock.style.backgroundColor = "rgba(0, 0, 0, 0.47)";
        socialIconGirlie.src = "scarygirlie.png";
    }
    if (song.title === "robert battle.mid") {
        body.style.backgroundImage = "url('stupid-shit.png')";
        musicPlayer.style.backgroundImage = "url('stupid-shit.png')";
        textBlock.style.backgroundColor = "rgba(9, 98, 98, 0.4)";
    }

    if (song.title === "Bunkertown" || song.title === "The Truth Hurts") {
        const rundeerGif = document.createElement("img");
        rundeerGif.src = "rundeer.gif";
        rundeerGif.id = "rundeer-gif";
        rundeerGif.style.position = "fixed";
        rundeerGif.style.bottom = "10px";
        rundeerGif.style.left = "50%";
        rundeerGif.style.transform = "translateX(-50%)";
        rundeerGif.style.zIndex = "9999";
        body.appendChild(rundeerGif);
    }
}

function playSong() {
    audio.play();
}

function pauseSong() {
    audio.pause();
}

function nextSong() {
    if (isSpecialSongActive) {
        return;
    }

    const randomChance = Math.floor(Math.random() * 64) + 1;

    if (randomChance === 1) {
        const specialSong = {
            title: "Gaster's Theme",
            artist: "The One Who Speaks In Hands",
            url: "https://file.garden/Zi1RIXKllhGepRPS/Website%20Files/Gaster's%20Theme.mp3",
            cover: "https://file.garden/Zi1RIXKllhGepRPS/Website%20Files/toby-fox-undertale-soundtrack.jpg",
            loop: true
        };

        document.getElementById("song-title").textContent = specialSong.title;
        document.getElementById("artist-name").textContent = specialSong.artist;
        document.getElementById("cover-image").src = specialSong.cover;
        audio.src = specialSong.url;
        audio.loop = specialSong.loop;

        isSpecialSongActive = true;

        setTimeout(() => {
            window.location.href = "thankyou.html";
        }, 17000);
    } else {
        currentSongIndex = (currentSongIndex + 1) % songs.length;
        loadSong(currentSongIndex);
        playSong();
    }
}

function prevSong() {
    if (isSpecialSongActive) {
        console.log("Cannot change songs while the special song is active.");
        return;
    }

    currentSongIndex = (currentSongIndex - 1 + songs.length) % songs.length;
    loadSong(currentSongIndex);
    playSong();
}

const fontStyle = document.createElement("style");
fontStyle.textContent = `
    @font-face {
        font-family: 'CustomFont';
        src: url('https://file.garden/Zi1RIXKllhGepRPS/Website%20Files/Unageo-Regular.ttf') format('truetype');
    }

    #music-player {
        font-family: 'CustomFont', sans-serif;
    }

    #music-player #song-title, 
    #music-player #artist-name {
        font-family: 'CustomFont', sans-serif;
    }
`;
document.head.appendChild(fontStyle);

window.addEventListener("load", () => {
    currentSongIndex = Math.floor(Math.random() * songs.length);
    loadSong(currentSongIndex);

    audio.play().catch((error) => {
        console.log("Autoplay blocked by the browser:", error);
    });
});

audio.addEventListener("ended", () => {
    if (!audio.loop) {
        nextSong();
    }
});

audio.addEventListener("timeupdate", () => {
    const progressBar = document.getElementById("progress");
    const progressContainer = document.querySelector(".progress-bar");
    const progressPercent = (audio.currentTime / audio.duration) * 100;
    progressBar.style.width = `${progressPercent}%`;
});

document.querySelector(".progress-bar").addEventListener("click", (event) => {
    const clickX = event.offsetX;
    const width = event.target.offsetWidth;
    const duration = audio.duration;
    audio.currentTime = (clickX / width) * duration;
});

document.getElementById("play-btn").addEventListener("click", () => {
    if (audio.paused) {
        playSong();
    } else {
        pauseSong();
    }
});

document.getElementById("next-btn").addEventListener("click", nextSong);
document.getElementById("prev-btn").addEventListener("click", prevSong);

document.getElementById("volume-slider").addEventListener("input", (e) => {
    audio.volume = e.target.value / 100;
});

loadSong(currentSongIndex);