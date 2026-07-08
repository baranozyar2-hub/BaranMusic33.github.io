// =======================================
// BARANMUSIC33 OFFICIAL SCRIPT
// =======================================

// Arama

const searchInput = document.getElementById("searchInput");

searchInput?.addEventListener("keyup", function(){

let value = this.value.toLowerCase();

document.querySelectorAll(".album-card,.song-card,.video-card").forEach(card=>{

card.style.display = card.innerText.toLowerCase().includes(value)
? "block"
: "none";

});

});

// Takip Et

const followBtn = document.querySelector(".followBtn");

if(followBtn){

followBtn.onclick = ()=>{

followBtn.innerHTML="✔ Takip Ediliyor";

followBtn.style.background="#27ae60";

};

}

// Paylaş

const shareBtn=document.querySelector(".shareBtn");

if(shareBtn){

shareBtn.onclick=()=>{

if(navigator.share){

navigator.share({

title:"BaranMusic33",

text:"BaranMusic33 Resmi Müzik Platformu",

url:window.location.href

});

}else{

navigator.clipboard.writeText(window.location.href);

alert("Site bağlantısı kopyalandı.");

}

};

}

// Favoriler

document.querySelectorAll(".song-play").forEach(btn=>{

btn.onclick=()=>{

alert("Favorilere eklendi ❤️");

};

});

// Müzik Oynatıcı

const play=document.getElementById("play");

let playing=false;

if(play){

play.onclick=()=>{

playing=!playing;

play.innerHTML=playing

?'<i class="fa-solid fa-pause"></i>'

:'<i class="fa-solid fa-play"></i>';

};

}

// Video Yayınlama

const uploadBtn=document.querySelector(".uploadBox button");

if(uploadBtn){

uploadBtn.onclick=()=>{

const inputs=document.querySelectorAll(".uploadBox input");

const title=inputs[0].value;

const image=inputs[1].value;

const video=inputs[2].value;

if(title==""||image==""||video==""){

alert("Lütfen tüm alanları doldurun.");

return;

}

const container=document.getElementById("videoContainer");

container.innerHTML+=`

<div class="video-card">

<img src="${image}">

<div class="video-info">

<h3>${title}</h3>

<video controls width="100%">

<source src="${video}" type="video/mp4">

</video>

</div>

</div>

`;

inputs.forEach(i=>i.value="");

alert("Video eklendi.");

};

}

// Sayfa Açılış Animasyonu

window.onload=()=>{

document.body.style.opacity="0";

setTimeout(()=>{

document.body.style.transition="1s";

document.body.style.opacity="1";

},100);

};

// Yukarı Çık

window.addEventListener("scroll",()=>{

const header=document.querySelector("header");

if(window.scrollY>100){

header.style.background="#000";

}else{

header.style.background="rgba(0,0,0,.75)";

}

});

// Geliştirici

console.log("BaranMusic33 Official Website");
console.log("Developer: BaranMusic33");
// ==============================
// BARANMUSIC33 PREMIUM v2
// ==============================

// Sayfa yüklendi bildirimi
window.addEventListener("load", () => {
    console.log("BaranMusic33 Premium Yüklendi");
});

// Smooth Scroll
document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener("click", function(e){
        e.preventDefault();

        document.querySelector(this.getAttribute("href"))
        ?.scrollIntoView({
            behavior:"smooth"
        });

    });
});

// Navbar küçülme efekti
window.addEventListener("scroll",()=>{

const header=document.querySelector("header");

if(window.scrollY>60){

header.classList.add("small");

}else{

header.classList.remove("small");

}

});

// Buton Efekti
document.querySelectorAll("button").forEach(btn=>{

btn.addEventListener("mouseenter",()=>{

btn.style.transform="scale(1.05)";

});

btn.addEventListener("mouseleave",()=>{

btn.style.transform="scale(1)";

});

});

// Rastgele Hoşgeldiniz Yazısı

const messages=[

"BaranMusic33 Resmi Sitesine Hoşgeldiniz",

"Arabesk • Pop Dünyasına Hoşgeldiniz",

"Yeni Şarkılar Çok Yakında",

"Takipte Kalın"

];

const welcome=document.querySelector(".overlay p");

if(welcome){

welcome.innerHTML=messages[Math.floor(Math.random()*messages.length)];

}

// Sayfa Başlığı

let original=document.title;

window.onblur=()=>{

document.title="🎵 Geri Gel :)";

}

window.onfocus=()=>{

document.title=original;

}

// Footer Yılı

const year=new Date().getFullYear();

const footer=document.querySelector("footer p");

if(footer){

footer.innerHTML="© "+year+" BaranMusic33 | Tüm Hakları Saklıdır.";

}
