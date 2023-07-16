// Element Variables:
let itemElements = document.querySelectorAll("[data-item]");
const img = document.getElementById("petImage");
const resultElement = document.getElementById("result");
const calcButton = document.getElementById("btn");
const noteElement = document.getElementById("note");
const HCIndicator = document.getElementById("hardcorePet");
const container = document.getElementById("container");
const titleElement = document.getElementById("title");
const itemContainers = document.getElementById("items");
const soundEffect = new Audio("SoundEffect.mp3");

// Toggle Elements:
const SuperLuckyElement = document.getElementById("SuperLuckyElement");
const UltraLuckyElement = document.getElementById("UltraLuckyElement");
const ServerLuckyElement = document.getElementById("ServerLuckyElement");
const MaxMasteryElement = document.getElementById("MaxMasteryLevel");
const LuckyGamePassElement = document.getElementById("LuckyGamePassElement");
const InsaneLuckElement = document.getElementById("InsaneLuckElement");
const VaryingBoosts = document.getElementById("SpecialBoostElement");
const hmmm = document.getElementById(atob("c2hoaGg="));

// Boosts:
const SuperLucky = 6;
const UltraLucky = 20;
const LuckPass = 3.5;
const ServerLucky = 6;
const MaxMastery = 2.5;
const InsaneLuck = 25;

// Other Variables:
let a = false;

const items = {
    hgbc: {
      name: "Huge Green Balloon",
      image: "https://i.postimg.cc/BbsQ21Kn/Huge-Green-Balloon-Cat.webp",
      selected: true,
      chance: 100_000_000,
      hardcore: false,
      hidden: false
    },
    hdoc: {
      name: "Huge Doodle Cat",
      image: "https://i.postimg.cc/C5NM7LGH/Huge-Doodle-Cat.webp",
      selected: false,
      chance: 20_000_000,
      hardcore: false,
      hidden: false
    },
    hdof: {
      name: "Huge Doodle Fairy",
      image: "https://i.postimg.cc/HxbkJtjN/Huge-Doodle-Fairy.webp",
      selected: false,
      chance: 33_000_000,
      hardcore: false,
      hidden: false
    },
    hkac: {
        name: "Huge Kawaii Cat",
        image: "https://i.postimg.cc/Dz9zyNfs/Huge-Kawaii-Cat.webp",
        selected: false,
        chance: 100_000_000,
        hardcore: false,
        hidden: false
    },
    hbrs: {
        name: "Huge Bread Shiba",
        image: "https://i.postimg.cc/sg0XbXtT/Huge-Bread-Shiba.webp",
        selected: false,
        chance: 100_000_000,
        hardcore: true,
        hidden: false
    },
    hnia: {
        name: "Huge Ninja Axolotl",
        image: "https://i.postimg.cc/XvGJWWW4/Huge-Ninja-Axolotl.webp",
        selected: false,
        chance: 25_000_000,
        hardcore: false,
        hidden: false
    },
    hkad: {
        name: "Huge Kawaii Dragon",
        image: "https://i.postimg.cc/x1d8sHFk/Huge-Kawaii-Dragon.webp",
        selected: false,
        chance: 50_000_000,
        hardcore: false,
        hidden: false
    },
    hgsh: {
        name: "Huge Gamer Shiba",
        image: "https://i.postimg.cc/mZQPhTHr/Huge-Gamer-Shiba.webp",
        selected: false,
        chance: 100_000_000,
        hardcore: false,
        hidden: false
    },
    hffd: {
        name: "Huge Fire Dalmation",
        image: "https://i.postimg.cc/HsdVyFw9/Huge-Firefighter-Dalmatian.webp",
        selected: false,
        chance: 50_000_000,
        hardcore: false,
        hidden: false
    },
    hbbr: {
        name: "Huge BBall Retriver",
        image: "https://i.postimg.cc/VvBvhF8t/Huge-Basketball-Retriever.webp",
        selected: false,
        chance: 50_000_000,
        hardcore: true,
        hidden: false
    },
    hupc: {
        name: "Huge Pineapple Cat",
        image: "https://i.postimg.cc/4NPnbwwk/Huge-Pineapple-Cat.webp",
        selected: false,
        chance: 100_000_000,
        hardcore: false,
        hidden: false
    },
    hutk: {
        name: "Huge Tiki Dominus",
        image: "https://i.postimg.cc/wMd3FGSH/Huge-Tiki-Dominus.webp",
        selected: false,
        chance: 100_000_000,
        hardcore: false,
        hidden: false
    },
    husa: {
        name: "Huge Sun Angelus",
        image: "https://i.postimg.cc/g0QxLJsx/Huge-Sun-Angelus.webp",
        selected: false,
        chance: 100_000_000,
        hardcore: false,
        hidden: false,
    },
    huby: {
        name: "Huge Butterfly",
        image: "https://i.postimg.cc/ZRNC8SsV/Huge-Butterfly.webp",
        selected: false,
        chance: 200_000_000,
        hardcore: false,
        hidden: false
    },
    hupf: {
        name: "Huge Pufferfish",
        image: "https://i.postimg.cc/P56phK8z/Huge-Pufferfish.webp",
        selected: false,
        chance: 400_000_000,
        varying: true,
        hardcore: false,
        hidden: false
    },
    tica: {
        name: "Titanic Cat (:O)",
        image: "https://i.postimg.cc/G3MgJ9mL/image-2023-07-08-212945034.png",
        selected: false,
        chance: 3_300_000_000,
        hardcore: false,
        hidden: false 
    }
};

function selectItem(e){itemElements=document.querySelectorAll("[data-item]");itemElements.forEach(el=>el.removeAttribute("class"));turnOffVarying(),titleElement.innerText=items[e].name;resultElement.innerHTML="";noteElement.style.visibility="hidden";HCIndicator.setAttribute("hidden",!0),!0===items[e].varying?VaryingBoosts.removeAttribute("hidden"):!0===items[e].hardcore&&HCIndicator.removeAttribute("hidden"),disable(),items[e].selected=!0,document.getElementById(e).setAttribute("class","selected"),!1===items[e].image?img.setAttribute("src","Pics/Nimg.png"):img.setAttribute("src",items[e].image)}
function animateImg(){soundEffect.play(),setTimeout(()=>{img.style.visibility="hidden",setTimeout(()=>{img.style.visibility="visible",setTimeout(()=>{img.style.visibility="hidden",setTimeout(()=>{img.style.visibility="visible",setTimeout(()=>{img.style.visibility="hidden",setTimeout(()=>{img.style.visibility="visible";setTimeout(()=>{img.style.visibility="hidden";setTimeout(()=>{img.style.visibility="visible"},75)},70)},65)},60)},55)},50)},30)})}
function turnOffVarying(){VaryingBoosts.setAttribute("hidden",!0),VaryingBoosts.innerText="1X",VaryingBoosts.style.backgroundColor="#FFFFFF"}
function disable(){for(let e in itemElements.forEach(e=>e.removeAttribute("class")),items)items[e].selected=!1}
function calculate($){$>=1e12&&($=1e12),$=parseInt($);let e=0;InsaneLuckElement.checked&&(e+=InsaneLuck),SuperLuckyElement.checked&&(e+=SuperLucky),ServerLuckyElement.checked&&(e+=ServerLucky),LuckyGamePassElement.checked&&(e+=LuckPass),MaxMasteryElement.checked&&(e+=MaxMastery),UltraLuckyElement.checked&&(e+=UltraLucky),!0===a&&($/=3.2),0===e&&(e=1),chance=parseInt($/=e),chance=parseInt(chance/=parseInt(VaryingBoosts.innerText)),percent=100/$,chance=String(chance.toLocaleString()),resultElement.innerHTML="1 in "+chance,String((percent=ConvertExponent(percent)).length)>=12&&(percent=String(percent).slice(0,12)),setTimeout(()=>{resultElement.innerHTML="1 in "+chance+"<br>"+percent+"%",setTimeout(()=>{noteElement.style.visibility="visible",setTimeout(()=>{calcButton.removeAttribute("disabled")},250)},225)},150)}
function ConvertExponent(t){var e="";"-"==(t+="").charAt(0)&&(t=t.substring(1),e="-");var r=t.split(/[eE]/g);if(r.length<2)return e+t;var n=r[1];if(0==n||-0==n)return e+r[0];var $=1.1.toLocaleString().substring(1,2),i=(r=r[0].split($))[1]||"",l=r[0];return n>0?(n>i.length&&(i+="0".repeat(n-i.length)),(i=i.slice(0,n)+$+i.slice(n)).charAt(i.length-1)==$&&(i=i.slice(0,-1))):((num=Math.abs(n)-l.length)>0&&(l="0".repeat(num)+l),(l=l.slice(0,n)+$+l.slice(n)).charAt(0)==$&&(l="0"+l)),e+l+i}
itemElements.forEach(el=>el.addEventListener("click",function(){selectItem(el.id)}));
VaryingBoosts.addEventListener("click",()=>{let e=VaryingBoosts.innerText;1===parseInt(e)&&(VaryingBoosts.innerText="2X",VaryingBoosts.style.backgroundColor="#EF0010"),2===parseInt(e)&&(VaryingBoosts.innerText="3X",VaryingBoosts.style.backgroundColor="#EF0099"),3===parseInt(e)&&(VaryingBoosts.innerText="5X",VaryingBoosts.style.backgroundColor="#FFA500"),5===parseInt(e)&&(VaryingBoosts.innerText="10X",VaryingBoosts.style.backgroundColor="#FFEE12"),10===parseInt(e)&&(VaryingBoosts.innerText="20X",VaryingBoosts.style.backgroundColor="#0065FF"),20===parseInt(e)&&(VaryingBoosts.innerText="50X",VaryingBoosts.style.backgroundColor="#00FFAA"),50===parseInt(e)&&(VaryingBoosts.innerText="1X",VaryingBoosts.style.backgroundColor="#FFFFFF")});
calcButton.addEventListener("click",()=>{resultElement.innerHTML = "";for(let e in animateImg(),noteElement.style.visibility="hidden",calcButton.setAttribute("disabled",!0),items)!0===items[e].selected&&setTimeout(()=>{calculate(items[e].chance)},500)})
hmmm.addEventListener(("click"),()=>{if(a===false){a=true;}else{a=false;}});
for(let key in items){if(!document.getElementById(key)){let el=document.createElement("h2");el.id=key;el.dataset.item="";el.textContent=items[key].name;el.addEventListener(("click"),()=>{selectItem(key)});itemContainers.appendChild(el);};if(items[key].selected){titleElement.innerText=items[key].name;};if(items[key].hidden){document.getElementById(key).remove()}};
setInterval(()=>{for(let key in items){setTimeout(()=>{container.removeAttribute("hidden")},75);if(items[key].selected){document.getElementById(key).setAttribute("class","selected");img.setAttribute("src",items[key].image);}}}, 50)
// Framework
