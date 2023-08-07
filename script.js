// Element Variables:
const img = document.getElementById("petImage");
const resultElement = document.getElementById("result");
const calcButton = document.getElementById("btn");
const noteElement = document.getElementById("note");
const HCIndicator = document.getElementById("hardcorePet");
const CUIndicator = document.getElementById("customPet");
const container = document.getElementById("container");
const titleElement = document.getElementById("title");
const itemContainers = document.getElementById("items");
const apiElement = document.getElementById("apikey");
const soundEffect = new Audio("SoundEffect.mp3");
let itemElements = document.querySelectorAll("[data-item]");

// Toggle Elements:
const SuperLuckyElement = document.getElementById("SuperLuckyElement");
const UltraLuckyElement = document.getElementById("UltraLuckyElement");
const ServerLuckyElement = document.getElementById("ServerLuckyElement");
const MaxMasteryElement = document.getElementById("MaxMasteryLevel");
const LuckyGamePassElement = document.getElementById("LuckyGamePassElement");
const InsaneLuckElement = document.getElementById("InsaneLuckElement");

// Amount
const LuckPass = 3.5;
const SixTimes = 6;
const UltraLucky = 20;
const InsaneLuck = 25;

// IMPORTANT
const chanceCap = true;
const disabled = false;

const items = {
    hgbc: {
        name: "Huge Green Balloon",
        image: "https://static.wikia.nocookie.net/pet-simulator/images/f/fc/Huge_Green_Balloon_Cat.png/revision/latest/scale-to-width-down/350?cb=20221113174838",
        selected: true,
        chance: 100_000_000,
    },
    hupe: {
        name: "Huge Peacock",
        image: "https://static.wikia.nocookie.net/pet-simulator/images/9/97/Huge_Peacock.png/revision/latest/scale-to-width-down/350?cb=20230204183905",
        chance: 20_000,
        selected: false,
        disboost: true
    },
    hdoc: {
        name: "Huge Doodle Cat",
        image: "https://static.wikia.nocookie.net/pet-simulator/images/f/f6/Huge_Doodle_Cat.png/revision/latest/scale-to-width-down/350?cb=20230114170336",
        selected: false,
        chance: 20_000_000,
        hardcore: false,
    },
    hdof: {
        name: "Huge Doodle Fairy",
        image: "https://static.wikia.nocookie.net/pet-simulator/images/1/11/Huge_Doodle_Fairy.png/revision/latest/scale-to-width-down/350?cb=20230129015146",
        selected: false,
        chance: 33_000_000,
    },
    hkac: {
        name: "Huge Kawaii Cat",
        image: "https://static.wikia.nocookie.net/pet-simulator/images/6/64/Huge_Kawaii_Cat.png/revision/latest?cb=20230803053323",
        selected: false,
        chance: 100_000_000,
    },
    hbrs: {
        name: "Huge Bread Shiba",
        image: "https://static.wikia.nocookie.net/pet-simulator/images/2/20/Huge_Bread_Shiba.png/revision/latest/scale-to-width-down/350?cb=20230408002041",
        selected: false,
        chance: 100_000_000,
        hardcore: true,
    },
    hnia: {
        name: "Huge Ninja Axolotl",
        image: "https://static.wikia.nocookie.net/pet-simulator/images/9/97/PSX_Huge_Ninja_Axolotl.png/revision/latest/scale-to-width-down/350?cb=20230326030610",
        selected: false,
        chance: 25_000_000,      
    },
    hkad: {
        name: "Huge Kawaii Dragon",
        image: "https://static.wikia.nocookie.net/pet-simulator/images/f/fa/PSX_Huge_Kawaii_Dragon.png/revision/latest/scale-to-width-down/350?cb=20230326030041",
        selected: false,
        chance: 50_000_000,
    },
    hgsh: {
        name: "Huge Gamer Shiba",
        image: "https://static.wikia.nocookie.net/pet-simulator/images/4/40/Huge_Gamer_Shiba.png/revision/latest?cb=20230610205638",
        selected: false,
        chance: 100_000_000,
    },
    hffd: {
        name: "Huge Fire Dalmation",
        image: "https://static.wikia.nocookie.net/pet-simulator/images/5/51/Huge_Firefighter_Dalmatian.png/revision/latest?cb=20230527185628",
        selected: false,
        chance: 50_000_000,
    },
    hbbr: {
        name: "Huge BBall Retriver",
        image: "https://static.wikia.nocookie.net/pet-simulator/images/7/72/Huge_Basketball_Retriever.png/revision/latest?cb=20230527212335",
        selected: false,
        chance: 50_000_000,
        hardcore: true,
    },
    hwfa: {
        name: "Huge Wildfire Agony",
        image: "https://static.wikia.nocookie.net/pet-simulator/images/2/25/Huge_Wildfire_Agony.png/revision/latest/scale-to-width-down/350?cb=20230725070849",
        selected: false,
        chance: 52_631_580,
    },
    hdom: {
        name: "Huge Domortuus",
        image: "https://cdn.discordapp.com/attachments/1131584322881724446/1131930037034168360/Untitled17_20230703163158.png",
        selected: false,
        chance: 8_000_000,
        custom: true,
        hardcore: true,
    }
};

// Code Starts NOW

for (let key in items) {
    if (!document.getElementById(key)) {
        let el = document.createElement("h2");
        el.id = key;
        el.dataset.item = "";
        el.textContent = items[key].name;
        el.addEventListener("click", () => {
            selectItem(key);
        });
        itemContainers.appendChild(el);
    }
    if (items[key].selected) {
        titleElement.innerText = items[key].name;
    }
    if (items[key].custom && !localStorage.getItem("admin")) {
        document.getElementById(key).remove();
    }
}

for(let key in items){
    if(items[key].selected){
        img.setAttribute("src", items[key].image);
        document.getElementById(key).setAttribute("class", "selected");
    }
}

function selectItem(e) {
    let id = e;
    document.querySelectorAll("[data-item]").forEach((el) => el.removeAttribute("class"));
    disable();
    titleElement.innerText = items[id].name;
    resultElement.innerHTML = "";
    noteElement.style.visibility = "hidden";

    items[id].selected = true;
    document.getElementById(id).setAttribute("class", "selected");
    visualManager(id);
}

function visualManager(e) {
    let id = e;
    img.setAttribute("src", items[id].image);
    if(!items[id].image) {
        img.setAttribute("src", "Pics/Nimg.png");
    }
    HCIndicator.setAttribute("hidden", true);
    CUIndicator.setAttribute("hidden", true);
    if(items[id].hardcore) {
        HCIndicator.removeAttribute("hidden");
    }
    if(items[id].custom) {
        CUIndicator.removeAttribute("hidden");    
    }
}

function animateImg() {soundEffect.play();setTimeout(()=>{img.style.visibility="hidden",setTimeout(()=>{img.style.visibility="visible",setTimeout(()=>{img.style.visibility="hidden",setTimeout(()=>{img.style.visibility="visible",setTimeout(()=>{img.style.visibility="hidden",setTimeout(()=>{img.style.visibility="visible",setTimeout(()=>{img.style.visibility="hidden",setTimeout(()=>{img.style.visibility="visible"},75)},70)},65)},60)},55)},50)},30)})}

function turnOffVarying() {
    VaryingBoosts.setAttribute("hidden", true);
    VaryingBoosts.innerText = "1X";
    VaryingBoosts.style.backgroundColor = "#FFFFFF";
}

function disable() {
    itemElements.forEach((e) => e.removeAttribute("class"));
    for (let e in items) {items[e].selected = false};
}

function calculate(chance) {
    if(chance > 1e12 && chanceCap){
        chance = 1_000_000_000_000;
    }
    chance = parseInt(chance);
    let boost = 0;
    MaxMasteryElement.checked && (boost += LuckPass-1);
    LuckyGamePassElement.checked && (boost += LuckPass);
    SuperLuckyElement.checked && (boost += SixTimes);
    ServerLuckyElement.checked && (boost += SixTimes);
    UltraLuckyElement.checked && (boost += UltraLucky);
    InsaneLuckElement.checked && (boost += InsaneLuck);
    if(boost === 0){
        boost = 1;
    }
    chance = parseInt(chance /= boost);
    percent = 100 / chance;
    percent = percent.toString().slice(0, 10);
    chance = String(chance.toLocaleString());
    resultElement.innerHTML = "1 in " + chance;
    setTimeout(() => {
        resultElement.innerHTML = "1 in " + chance + "<br>" + " " + ConvertExponent(percent.toString()) + "%";
            setTimeout(() => {
                noteElement.style.visibility = "visible";
                    setTimeout(() => {
                        calcButton.removeAttribute("disabled");
                    }, 250);
            }, 225);
    }, 150);
}

function ConvertExponent(num) {
    const [base, exponent] = num.split("e-");
    const zeros = "0".repeat(exponent - 1);
    return "0." + zeros + base.replace(".", "");
}

calcButton.addEventListener("click", () => {
    resultElement.innerHTML = "";
    animateImg();
    noteElement.style.visibility = "hidden"; 
    calcButton.setAttribute("disabled", true);
    for (let e in items) {
        if (items[e].selected) {
            setTimeout(() => {
                calculate(items[e].chance);
            }, 500);
        }
    }
})

setTimeout(() => {
    if(!disabled) {
        container.removeAttribute("hidden");
    }
}, 150)

document.querySelector("[data-date]").addEventListener("click", () => {
    alert("Current date: " + new Date);
    alert("Thats right, I know where you are."); // Trolly
})
