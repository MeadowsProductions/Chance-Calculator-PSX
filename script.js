// Y'all are not funny

const imgElement=document.getElementById("petImage"),hgbcElement=document.getElementById("hgbc"),hdocElement=document.getElementById("hdoc"),hdofElement=document.getElementById("hdof"),hkacElement=document.getElementById("hkac"),hbrsElement=document.getElementById("hbrs"),hkadElement=document.getElementById("hkad"),hniaElement=document.getElementById("hnia"),hgshElement=document.getElementById("hgsh"),hupcElement=document.getElementById("hupc"),hupfElement=document.getElementById("hupf"),hutkElement=document.getElementById("hutk"),hubyElement=document.getElementById("huby"),hffdElement=document.getElementById("hffd"),hbbrElement=document.getElementById("hbbr"),calcElement=document.getElementById("btn"),resultElement=document.getElementById("result"),varyElement=document.getElementById("SpecialBoostElement"),noteElement=document.getElementById("note"),openLogElement=document.getElementById("openLog"),logElement=document.getElementById("log"),container=document.getElementById("container"),exitLogElement=document.getElementById("exit"),soundEffect=new Audio("SoundEffect.mp3"),SuperLuckyElement=document.getElementById("SuperLuckyElement"),UltraLuckyElement=document.getElementById("UltraLuckyElement"),ServerLuckyElement=document.getElementById("ServerLuckyElement"),MaxMasteryElement=document.getElementById("MaxMasteryLevel"),LuckyGamePassElement=document.getElementById("LuckyGamePassElement"),InsaneLuckElement=document.getElementById("InsaneLuckElement"),VaryingBoosts=document.getElementById("SpecialBoostElement"),SuperLucky=16,UltraLucky=40,LuckPass=3,ServerLucky=16,MaxMastery=3,InsaneLuck=25;hgbc=!0,hkad=!1,hdof=!1,hdoc=!1,hkac=!1,hbrs=!1,hnia=!1,hgsh=!1,hupc=!1,hupf=!1,hutk=!1,huby=!1,hffd=!1,hbbr=!1;let fundrMil=4e8,twohnMil=2e8,hundrMil=1e8,fiftyMil=5e7,ththrMil=33e6,twfivMil=25e6,twentMil=2e7,tennnMil=1e7;function selectItem(e){hkad=!1,hgbc=!1,hdof=!1,hdoc=!1,hkac=!1,hbrs=!1,hkad=!1,hnia=!1,hgsh=!1,hupc=!1,hupf=!1,hutk=!1,huby=!1,hffd=!1,hbbr=!1,resultElement.innerText="",noteElement.style.visibility="hidden","hgbc"===e?(hgbc=!0,clear()):"hdof"===e?(hdof=!0,clear()):"hdoc"===e?(hdoc=!0,clear()):"hkac"===e?(hkac=!0,clear()):"hbrs"===e?(hbrs=!0,clear()):"hkad"===e?(hkad=!0,clear()):"hnia"===e?(hnia=!0,clear()):"hgsh"===e?(hgsh=!0,clear()):"hupc"===e?(hupc=!0,clear()):"hupf"===e?(hupf=!0,varyElement.removeAttribute("hidden")):"hutk"===e?(hutk=!0,clear()):"huby"===e?(huby=!0,clear()):"hffd"===e?(hffd=!0,clear()):"hbbr"===e?(hbbr=!0,clear()):location.reload()}function clear(){varyElement.setAttribute("hidden",!0),varyElement.innerText="1X"}function disable(){[hgbcElement,hdofElement,hdocElement,hkacElement,hbrsElement,hkadElement,hgshElement,hniaElement,hupcElement,hupfElement,hutkElement,hubyElement,hffdElement,hbbrElement].forEach(e=>e.removeAttribute("class"))}function calculate(e){let t=0;SuperLuckyElement.checked&&(t+=16),UltraLuckyElement.checked&&(t+=40),LuckyGamePassElement.checked&&(t+=3),ServerLuckyElement.checked&&(t+=16),MaxMasteryElement.checked&&(t+=3),InsaneLuckElement.checked&&(t+=25),t+=parseInt(VaryingBoosts.innerText),e/=t,(percentString=String(percent=100/e)).length>10&&(percent=percentString.slice(0,10)),e=String((e=parseInt(e)).toLocaleString("en")),resultElement.innerHTML="1 in "+e+"<br>",setTimeout(()=>{resultElement.innerHTML="1 in "+e+"<br>"+percent+"%",setTimeout(()=>{noteElement.style.visibility="visible",calcElement.removeAttribute("disabled")},225)},150)}hgbcElement.addEventListener("click",()=>{selectItem("hgbc"),disable(),hgbcElement.setAttribute("class","selected"),imgElement.setAttribute("src","Pics/HGbc.png")}),hdofElement.addEventListener("click",()=>{selectItem("hdof"),disable(),hdofElement.setAttribute("class","selected"),imgElement.setAttribute("src","Pics/HDof.png")}),hdocElement.addEventListener("click",()=>{selectItem("hdoc"),disable(),hdocElement.setAttribute("class","selected"),imgElement.setAttribute("src","Pics/HDoc.png")}),hkacElement.addEventListener("click",()=>{selectItem("hkac"),disable(),hkacElement.setAttribute("class","selected"),imgElement.setAttribute("src","Pics/HKac.png")}),hbrsElement.addEventListener("click",()=>{selectItem("hbrs"),disable(),hbrsElement.setAttribute("class","selected"),imgElement.setAttribute("src","Pics/HBrs.png")}),hkadElement.addEventListener("click",()=>{selectItem("hkad"),disable(),hkadElement.setAttribute("class","selected"),imgElement.setAttribute("src","Pics/HKad.png")}),hniaElement.addEventListener("click",()=>{selectItem("hnia"),disable(),hniaElement.setAttribute("class","selected"),imgElement.setAttribute("src","Pics/HNia.png")}),hgshElement.addEventListener("click",()=>{selectItem("hgsh"),disable(),hgshElement.setAttribute("class","selected"),imgElement.setAttribute("src","Pics/HGsh.png")}),hupcElement.addEventListener("click",()=>{selectItem("hupc"),disable(),hupcElement.setAttribute("class","selected"),imgElement.setAttribute("src","Pics/HUpc.png")}),hupfElement.addEventListener("click",()=>{selectItem("hupf"),disable(),hupfElement.setAttribute("class","selected"),imgElement.setAttribute("src","Pics/HUpf.png")}),hutkElement.addEventListener("click",()=>{selectItem("hutk"),disable(),hutkElement.setAttribute("class","selected"),imgElement.setAttribute("src","Pics/HUtk.png")}),hubyElement.addEventListener("click",()=>{selectItem("huby"),disable(),hubyElement.setAttribute("class","selected"),imgElement.setAttribute("src","Pics/HUby.png")}),hffdElement.addEventListener("click",()=>{selectItem("hffd"),disable(),hffdElement.setAttribute("class","selected"),imgElement.setAttribute("src","Pics/HFfd.png")}),hbbrElement.addEventListener("click",()=>{selectItem("hbbr"),disable(),hbbrElement.setAttribute("class","selected"),imgElement.setAttribute("src","Pics/HBbr.png")}),calcElement.addEventListener("click",()=>{calcElement.setAttribute("disabled",!0),noteElement.style.visibility="hidden",resultElement.innerHTML="",setTimeout(()=>{imgElement.style.visibility="hidden",setTimeout(()=>{imgElement.style.visibility="visible",setTimeout(()=>{imgElement.style.visibility="hidden",setTimeout(()=>{imgElement.style.visibility="visible",setTimeout(()=>{imgElement.style.visibility="hidden",setTimeout(()=>{imgElement.style.visibility="visible"},75)},70)},65)},60)},55)},50),!0===hkad?(setTimeout(()=>{calculate(twfivMil)},500),soundEffect.play()):!0===hgbc?(setTimeout(()=>{calculate(hundrMil)},500),soundEffect.play()):!0===hdof?(setTimeout(()=>{calculate(ththrMil)},500),soundEffect.play()):!0===hdoc?(setTimeout(()=>{calculate(twentMil)},500),soundEffect.play()):!0===hkac?(setTimeout(()=>{calculate(hundrMil)},500),soundEffect.play()):!0===hbrs?(setTimeout(()=>{calculate(hundrMil)},500),soundEffect.play()):!0===hnia?(setTimeout(()=>{calculate(fiftyMil)},500),soundEffect.play()):!0===hgsh?(setTimeout(()=>{calculate(hundrMil)},500),soundEffect.play()):!0===hupc?(setTimeout(()=>{calculate(hundrMil)},500),soundEffect.play()):!0===hupf?(setTimeout(()=>{calculate(fundrMil)},500),soundEffect.play()):!0===hutk?(setTimeout(()=>{calculate(hundrMil)},500),soundEffect.play()):!0===huby?(setTimeout(()=>{calculate(twohnMil)},500),soundEffect.play()):!0===hffd?(setTimeout(()=>{calculate(fiftyMil)},500),soundEffect.play()):!0===hbbr?(setTimeout(()=>{calculate(fiftyMil)},500),soundEffect.play()):location.reload()}),VaryingBoosts.addEventListener("click",()=>{let e=VaryingBoosts.innerText;1===parseInt(e)&&(VaryingBoosts.innerText="2X",VaryingBoosts.style.backgroundColor="#EF0010"),2===parseInt(e)&&(VaryingBoosts.innerText="3X",VaryingBoosts.style.backgroundColor="#EF0099"),3===parseInt(e)&&(VaryingBoosts.innerText="5X",VaryingBoosts.style.backgroundColor="#FFA500"),5===parseInt(e)&&(VaryingBoosts.innerText="10X",VaryingBoosts.style.backgroundColor="#FFEE12"),10===parseInt(e)&&(VaryingBoosts.innerText="20X",VaryingBoosts.style.backgroundColor="#0065FF"),20===parseInt(e)&&(VaryingBoosts.innerText="50X",VaryingBoosts.style.backgroundColor="#00FFAA"),50===parseInt(e)&&(VaryingBoosts.innerText="1X",VaryingBoosts.style.backgroundColor="#FFFFFF")}),openLogElement.addEventListener("click",()=>{container.setAttribute("hidden",!0),logElement.removeAttribute("hidden")}),exitLogElement.addEventListener("click",()=>{container.removeAttribute("hidden"),logElement.setAttribute("hidden",!0)});