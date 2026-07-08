// ===== SCRIPT PART 1 =====
// Temel site hareketleri


// Sayfa açılış efekti
window.addEventListener("load", () => {

    document.body.classList.add("loaded");

});



// Navbar scroll efekti
window.addEventListener("scroll", () => {

    const navbar = document.querySelector(".navbar");

    if (navbar) {

        if (window.scrollY > 50) {

            navbar.style.background =
            "rgba(0,0,0,0.8)";

        } else {

            navbar.style.background =
            "rgba(0,0,0,0.35)";

        }

    }

});



// Galeri resim büyütme
const galleryImages =
document.querySelectorAll(".gallery img");


galleryImages.forEach(img => {

    img.addEventListener("click", () => {

        img.classList.toggle("active");

    });

});



// Mobil menü aç/kapat
const menuBtn =
document.querySelector(".menu-btn");

const navLinks =
document.querySelector(".nav-links");


if (menuBtn) {

    menuBtn.addEventListener("click", () => {

        navLinks.classList.toggle("show");

    });

}



// Sayfa içi yumuşak geçiş
document.querySelectorAll("a[href^='#']")
.forEach(link => {

    link.addEventListener("click", function(e) {

        const hedef =
        document.querySelector(this.getAttribute("href"));


        if (hedef) {

            e.preventDefault();

            hedef.scrollIntoView({

                behavior: "smooth"

            });

        }

    });

});



// Müzik kartı hareket efekti
const musicCards =
document.querySelectorAll(".music-card");


musicCards.forEach(card => {

    card.addEventListener("mouseenter", () => {

        card.style.transform =
        "translateY(-10px)";

    });


    card.addEventListener("mouseleave", () => {

        card.style.transform =
        "translateY(0)";

    });

});

// ===== SCRIPT PART 2 =====
// Profesyonel ek efektler


// Yazı yazma efekti
const typingText = document.querySelector(".typing");

if (typingText) {

    const text = typingText.innerHTML;
    typingText.innerHTML = "";

    let i = 0;

    function yaz() {

        if (i < text.length) {

            typingText.innerHTML += text.charAt(i);
            i++;

            setTimeout(yaz, 80);

        }

    }

    yaz();

}



// Scroll ile element gösterme efekti
const elements = document.querySelectorAll(
    ".box, .card, .profile-card, .music-card"
);


const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.classList.add("show");

        }

    });

});


elements.forEach(el => {

    observer.observe(el);

});



// 3D fare hareket efekti
document.addEventListener("mousemove", (e) => {

    const cards = document.querySelectorAll(
        ".profile-card, .music-card"
    );


    cards.forEach(card => {

        const x =
        (window.innerWidth / 2 - e.clientX) / 50;


        const y =
        (window.innerHeight / 2 - e.clientY) / 50;


        card.style.transform =
        `rotateY(${x}deg) rotateX(${y}deg)`;

    });

});



// Otomatik yıl güncelleme
const year = document.querySelector(".year");

if (year) {

    year.innerHTML = new Date().getFullYear();

}



// Bozuk resim kontrolü
document.querySelectorAll("img").forEach(img => {

    img.addEventListener("error", () => {

        img.style.display = "none";

    });

});

// ===== SCRIPT PART 4 =====
// Müzik özellikleri + ekstra kullanıcı deneyimi


// Müzik oynatıcı kontrolü
const audio = document.querySelector("audio");
const playButtons = document.querySelectorAll(".play-btn");


playButtons.forEach(btn => {

    btn.addEventListener("click",()=>{

        if(audio){

            if(audio.paused){

                audio.play();
                btn.innerHTML="⏸";

            }else{

                audio.pause();
                btn.innerHTML="▶";

            }

        }

    });

});



// Ses seviyesi kontrolü
const volume = document.querySelector(".volume");


if(volume && audio){

    volume.addEventListener("input",()=>{

        audio.volume = volume.value;

    });

}



// Aktif link değiştirme
const sections = document.querySelectorAll("section");
const links = document.querySelectorAll(".nav-links a");


window.addEventListener("scroll",()=>{

    let current="";

    sections.forEach(section=>{

        const top = section.offsetTop - 150;

        if(scrollY >= top){

            current = section.id;

        }

    });


    links.forEach(link=>{

        link.classList.remove("active-link");

        if(link.getAttribute("href") === "#"+current){

            link.classList.add("active-link");

        }

    });

});



// Sayı animasyonu
const numbers = document.querySelectorAll(".number");


numbers.forEach(number=>{

    let hedef = Number(number.innerHTML);
    let sayi = 0;


    let timer = setInterval(()=>{

        sayi++;

        number.innerHTML=sayi;


        if(sayi>=hedef){

            clearInterval(timer);

        }

    },30);

});





// ===== SCRIPT PART 5 =====
// Son profesyonel dokunuşlar


// Sağ tık kapatma (fotoğraf koruma)
document.addEventListener("contextmenu",(e)=>{

    if(e.target.tagName==="IMG"){

        e.preventDefault();

    }

});



// Sayfa giriş animasyonu
setTimeout(()=>{

    document.body.style.opacity="1";

},300);



// Mouse takip ışığı
const glow = document.querySelector(".mouse-glow");


document.addEventListener("mousemove",(e)=>{

    if(glow){

        glow.style.left =
        e.clientX+"px";

        glow.style.top =
        e.clientY+"px";

    }

});



// Telefon titreşim desteği
const buttons =
document.querySelectorAll("button");


buttons.forEach(btn=>{

    btn.addEventListener("click",()=>{

        if(navigator.vibrate){

            navigator.vibrate(50);

        }

    });

});



// Rastgele karşılama mesajı
const welcome =
document.querySelector(".welcome");


const messages=[

"Hoş geldin 👋",
"Keyifli gezintiler 🎵",
"Yeni içerikler yakında 🔥"

];


if(welcome){

    welcome.innerHTML =
    messages[Math.floor(Math.random()*messages.length)];

}



// Yükseğe çık butonu otomatik oluşturma
let upBtn=document.createElement("button");

upBtn.innerHTML="↑";

upBtn.className="auto-top";

document.body.appendChild(upBtn);


upBtn.style.display="none";


window.addEventListener("scroll",()=>{

    if(scrollY>500){

        upBtn.style.display="block";

    }else{

        upBtn.style.display="none";

    }

});


upBtn.onclick=()=>{

    window.scrollTo({

        top:0,
        behavior:"smooth"

    });

};





