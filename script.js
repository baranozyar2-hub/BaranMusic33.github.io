const videos = [
{
title:"Yeni Albüm Tanıtımı",
artist:"BaranMusic33",
views:"124.000 görüntüleme",
time:"2 gün önce",
image:"https://picsum.photos/600/340?random=11"
},
{
title:"Arabesk Live Session",
artist:"BaranMusic33",
views:"58.000 görüntüleme",
time:"5 gün önce",
image:"https://picsum.photos/600/340?random=12"
},
{
title:"Rap Performance",
artist:"BaranMusic33",
views:"310.000 görüntüleme",
time:"1 hafta önce",
image:"https://picsum.photos/600/340?random=13"
},
{
title:"Yeni Klip",
artist:"BaranMusic33",
views:"1.2 Mn görüntüleme",
time:"2 hafta önce",
image:"https://picsum.photos/600/340?random=14"
},
{
title:"Backstage",
artist:"BaranMusic33",
views:"85.000 görüntüleme",
time:"3 hafta önce",
image:"https://picsum.photos/600/340?random=15"
},
{
title:"Stüdyo Günlüğü",
artist:"BaranMusic33",
views:"40.000 görüntüleme",
time:"1 ay önce",
image:"https://picsum.photos/600/340?random=16"
}
];

const container = document.getElementById("videos");

function render(list){

container.innerHTML="";

list.forEach(video=>{

container.innerHTML+=`

<div class="video">

<img src="${video.image}" alt="${video.title}">

<h3>${video.title}</h3>

<p>${video.artist}</p>

<p>${video.views} • ${video.time}</p>

</div>

`;

});

}

render(videos);

const search=document.querySelector(".search input");

search.addEventListener("input",()=>{

const text=search.value.toLowerCase();

const filtered=videos.filter(v=>

v.title.toLowerCase().includes(text)||

v.artist.toLowerCase().includes(text)

);

render(filtered);

});