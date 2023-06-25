// ElementVariables:
const imgElement = document.getElementById("petImage");
const hgbcElement = document.getElementById("hgbc");
const hdocElement = document.getElementById("hdoc");
const hdofElement = document.getElementById("hdof");
const hkacElement = document.getElementById("hkac");
const hbrsElement = document.getElementById("hbrs");
const hkadElement = document.getElementById("hkad");
const hniaElement = document.getElementById("hnia");
const calcElement = document.getElementById("btn");
const resultElement = document.getElementById("result");
const noteElement = document.getElementById("note");
const soundEffect = new Audio("SoundEffect.mp3");

// ToggleElements:
const SuperLuckyElement = document.getElementById("SuperLuckyElement");
const UltraLuckyElement = document.getElementById("UltraLuckyElement");
const ServerLuckyElement = document.getElementById("ServerLuckyElement");
const MaxMasteryElement = document.getElementById("MaxMasteryLevel");
const LuckyGamePassElement = document.getElementById("LuckyGamePassElement");
const InsaneLuckElement = document.getElementById("InsaneLuckElement");

// Boosts:
const SuperLucky = 16;
const UltraLucky = 40;
const LuckPass = 3;
const ServerLucky = 16;
const MaxMastery = 3;
const InsaneLuck = 25;

// ToggleVariables:
hgbc = true;
hkad = false;
hdof = false;
hdoc = false;
hkac = false;
hbrs = false;
hnia = false;

// BaseChanceVariables:
let tennnBil = 10_000_000_000;
let bananMil = 512_038_832;
let hundrMil = 100_000_000;
let fiftyMil = 50_000_000;
let ththrMil = 33_000_000;
let twfivMil = 25_000_000;
let twentMil = 20_000_000;
let tennnMil = 10_000_000;

// NOW TIME TO CODE WOOOOOOOOOOOOOOOOOOOOOOOOO

function selectItem(ite){
    hkad = false; hgbc = false; hdof = false; hdoc = false; hkac = false; hbrs = false; hkad = false; hnia = false;
    if(ite === "hgbc"){
        hgbc = true;
    } else if(ite === "hdof"){
        hdof = true;
    } else if(ite === "hdoc"){
        hdoc = true;
    } else if(ite === "hkac"){
        hkac = true;
    } else if(ite === "hbrs"){
        hbrs = true;
    } else if(ite === "hkad"){
        hkad = true;
    } else if(ite === "hnia"){
        hnia = true;
    }
}

hgbcElement.addEventListener("click", () => {
    selectItem("hgbc");
    hgbcElement.setAttribute("class", "selected");
    [hkadElement, hdofElement, hdocElement, hkacElement, hbrsElement, hniaElement].forEach(element => element.removeAttribute("class"));
    imgElement.setAttribute("src", "Pics/HGbc.png");
});
  
hdofElement.addEventListener("click", () => {
    selectItem("hdof");
    hdofElement.setAttribute("class", "selected");
    [hkadElement, hgbcElement, hdocElement, hkacElement, hbrsElement, hniaElement].forEach(element => element.removeAttribute("class"));
    imgElement.setAttribute("src", "Pics/HDof.png");
});
  
hdocElement.addEventListener("click", () => {
    selectItem("hdoc");
    hdocElement.setAttribute("class", "selected");
    [hkadElement, hdofElement, hgbcElement, hkacElement, hbrsElement, hniaElement].forEach(element => element.removeAttribute("class"));
    imgElement.setAttribute("src", "Pics/HDoc.png");
});

hkacElement.addEventListener("click", () => {
    selectItem("hkac");
    hkacElement.setAttribute("class", "selected");
    [hkadElement, hdofElement, hgbcElement, hdocElement, hbrsElement, hniaElement].forEach(element => element.removeAttribute("class"));
    imgElement.setAttribute("src", "Pics/HKac.png");
})

hbrsElement.addEventListener("click", () => {
    selectItem("hbrs");
    hbrsElement.setAttribute("class", "selected");
    [hkadElement, hdofElement, hgbcElement, hkacElement, hdocElement, hniaElement].forEach(element => element.removeAttribute("class"));
    imgElement.setAttribute("src", "Pics/HBrs.png");
})

hkadElement.addEventListener("click", () => {
    selectItem("hkad");
    hkadElement.setAttribute("class", "selected");
    [hgbcElement, hdofElement, hdocElement, hkacElement, hbrsElement, hniaElement].forEach(element => element.removeAttribute("class"));
    imgElement.setAttribute("src", "Pics/HKad.png");
});

hniaElement.addEventListener("click", () => {
    selectItem("hnia");
    hniaElement.setAttribute("class", "selected");
    [hgbcElement, hdofElement, hdocElement, hkacElement, hbrsElement, hkadElement].forEach(element => element.removeAttribute("class"));
    imgElement.setAttribute("src", "Pics/HNia.png");
})

calcElement.addEventListener("click", () => {
    calcElement.setAttribute("disabled", true);
    noteElement.style.visibility = "hidden";
    resultElement.innerHTML = "";
    setTimeout(() => {
        imgElement.style.visibility = "hidden";
        setTimeout(() => {
            imgElement.style.visibility = "visible";
            setTimeout(() => {
                imgElement.style.visibility = "hidden";
                setTimeout(() => {
                    imgElement.style.visibility = "visible";
                    setTimeout(() => {
                        imgElement.style.visibility = "hidden";
                        setTimeout(() => {
                            imgElement.style.visibility = "visible";
                        }, 75)
                    }, 70)
                }, 65)
            }, 60)
        }, 55)
    }, 50)
    if (hkad === true) {
        setTimeout(() => {
            calculate(twfivMil);
        }, 500)
        soundEffect.play();
    } else if (hgbc === true) {
        setTimeout(() => {
            calculate(hundrMil);
        }, 500)
        soundEffect.play();
    } else if (hdof === true) {
        setTimeout(() => {
            calculate(ththrMil);
        }, 500)
        soundEffect.play();
    } else if (hdoc === true) {
        setTimeout(() => {
            calculate(twentMil);
        }, 500)
        soundEffect.play();
    } else if (hkac === true) {
        setTimeout(() => {
            calculate(hundrMil);
        }, 500)
        soundEffect.play();
    } else if (hbrs === true) {
        setTimeout(() => {
            calculate(hundrMil);
        }, 500)
        soundEffect.play();
    } else if(hnia === true){
        setTimeout(() => {
            calculate(fiftyMil);
        }, 500)
        soundEffect.play();
    } else {
        console.warn("No number to calculate, halting execution."); 
        window.location.reload();
    }
});
  

function calculate(chance){
    let luck = 0;
    if(SuperLuckyElement.checked){
        luck += SuperLucky;
    }
    if(UltraLuckyElement.checked){
        luck += UltraLucky;
    }
    if(LuckyGamePassElement.checked){
        luck += LuckPass;
    }
    if(ServerLuckyElement.checked){
        luck += ServerLucky;
    }
    if(MaxMasteryElement.checked){
        luck += MaxMastery;
    }
    if(InsaneLuckElement.checked){
        luck += InsaneLuck;
    }
    if(luck <= 0){
        luck = 1;
    }
    chance = chance / luck;
    percent = 100 / chance;
    percentString = String(percent);
    if (percentString.length > 8) {
        percent = percentString.slice(0, 8); 
    }
    chance = parseInt(chance);
    chance = String(chance.toLocaleString("en"));
    resultElement.innerHTML = "1 in " + chance + "<br>";
    setTimeout(() => {
        resultElement.innerHTML = "1 in " + chance + "<br>" + percent + "%";
        setTimeout(() => {
            noteElement.style.visibility = "visible";
            calcElement.removeAttribute("disabled");
        }, 225)
}, 150)}