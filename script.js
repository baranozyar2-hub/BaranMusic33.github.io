// ==========================
// BaranMusic33 Official
// script.js
// ==========================

// Sayfa yüklendiğinde animasyon
window.addEventListener("load", () => {
    document.body.classList.add("loaded");
});

// Menü aktif bağlantı
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav ul li a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 120;
        const sectionHeight = section.clientHeight;

        if (pageYOffset >= sectionTop) {
            current = section.getAttribute("id");
        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {
            link.classList.add("active");
        }

    });

});

// Kart Animasyonu
const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        }

    });

}, {
    threshold: 0.15
});

document.querySelectorAll(".songCard,.albumCard,.videoCard,.galleryCard,.box")
.forEach(card => {

    observer.observe(card);

});

// Smooth Scroll
document.querySelectorAll("a[href^='#']").forEach(anchor => {

    anchor.addEventListener("click", function(e){

        e.preventDefault();

        document.querySelector(this.getAttribute("href"))
        .scrollIntoView({

            behavior:"smooth"

        });

    });

});

// İstatistik Sayaçları
const counters = document.querySelectorAll(".box h1");

counters.forEach(counter=>{

    const target = Number(counter.innerText);

    let count = 0;

    const speed = 30;

    function update(){

        if(count < target){

            count++;

            counter.innerText = count;

            setTimeout(update,speed);

        }else{

            counter.innerText = target;

        }

    }

    update();

});

// Takip Butonu
const followBtn = document.querySelector(".goldBtn");

if(followBtn){

followBtn.addEventListener("click",()=>{

    followBtn.innerHTML="✔ Takip Ediliyor";

    followBtn.style.background="#00d26a";

});

}

// Mouse Glow
document.addEventListener("mousemove",(e)=>{

const glow=document.querySelector(".glow");

if(glow){

glow.style.left=e.clientX+"px";
glow.style.top=e.clientY+"px";

}

});

// Arama
const search=document.getElementById("searchInput");

if(search){

search.addEventListener("keyup",()=>{

const value=search.value.toLowerCase();

document.querySelectorAll(".songCard").forEach(card=>{

const text=card.innerText.toLowerCase();

card.style.display=text.includes(value)?"block":"none";

});

});

}

// Gelecekte şarkı eklemek için
let songs=[];

function addSong(title,cover,file){

songs.push({

title,
cover,
file

});

console.log("Şarkı eklendi:",title);

}

// Gelecekte video eklemek için
let videos=[];

function addVideo(title,cover,video){

videos.push({

title,
cover,
video

});

console.log("Video eklendi:",title);

}

// Gelecekte albüm eklemek için
let albums=[];

function addAlbum(title,cover){

albums.push({

title,
cover

});

console.log("Albüm eklendi:",title);

}

console.log("BaranMusic33 Official Script Hazır ✔");
