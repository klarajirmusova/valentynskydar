const today = new Date();
const day = today.getDate();
const month = today.getMonth() +1;
const year = today.getFullYear();
const dayMonth = `${day}.${month}`;
const week = today.getDay();
console.log(week);

if (month === 1) {
        document.getElementById("weekly").innerHTML = 
        ` <img src="novaanim/darky-0005.png" id="gift1">`;
        document.getElementById("gift1").addEventListener("click", () => {
        document.getElementById("weekly").innerHTML =
        `<p>Gratuluji! Vyhráváš poukaz na: 1 celý den kdy se na tebe nemůžu naštvat!(ne nemůžu odmitnout)</p>
        <button id="denbeznervu">Přijímám</button>`;
        });}
    else if (month === 2) {
        document.getElementById("weekly").innerHTML = 
        ` <img src="novaanim/darky-0001.png" id="gift2">`;
        document.getElementById("gift2").addEventListener("click", () => {
        document.getElementById("weekly").innerHTML =
        `<p>Gratuluji! Vyhráváš poukaz na: 5 her šachů se mnou!(ne nemůžu odmitnout)</p>
        <button id="sachy">Přijímám</button>`;
        });}
    else if (month === 3) {
        document.getElementById("weekly").innerHTML = 
        ` <img src="novaanim/darky-0002.png" id="gift3">`;
        document.getElementById("gift3").addEventListener("click", () => {
        document.getElementById("weekly").innerHTML =
        `<p>Gratuluji! Vyhráváš poukaz na: 5 fotek na přání!(ne nemůžu odmitnout)</p>
        <button id="fotky">Přijímám</button>`;
        });}
    else if (month === 4) {
        document.getElementById("weekly").innerHTML =
        `<img src="novaanim/darky-0003.png" id="gift4">`;
        document.getElementById("gift4").addEventListener("click", () => {
        document.getElementById("weekly").innerHTML = `<p>Gratuluji! Vyhráváš poukaz na: 1 celý den, kdy je vše podle tebe!(ne nemůžu odmitnout)</p> <button id="denpodletebe">Přijímám</button>`;
        });}
    else if (month === 5) {
        document.getElementById("weekly").innerHTML =
        ` <img src="novaanim/darky-0004.png" id="gift5">`;
        document.getElementById("gift5").addEventListener("click", () => {
        document.getElementById("weekly").innerHTML =
        `<p>Gratuluji! Vyhráváš poukaz na: 1 masáž dle tvého výběru!(ne nemůžu odmitnout)</p>
        <button id="masaz">Přijímám</button>`;
        });}
    else if (month === 6) {
        document.getElementById("weekly").innerHTML =
        ` <img src="novaanim/darky-0005.png" id="gift6">`;
        document.getElementById("gift6").addEventListener("click", () => {
        document.getElementById("weekly").innerHTML =
        `<p>Gratuluji! Vyhráváš poukaz na: Společné zkouknutí filmu dle tvého výběru!(ne nemůžu odmitnout)</p>
        <button id="film">Přijímám</button>`;
        });}
    else if (month === 7) {
        document.getElementById("weekly").innerHTML =
        ` <img src="novaanim/darky-0001.png" id="gift7">`;
        document.getElementById("gift7").addEventListener("click", () => {
        document.getElementById("weekly").innerHTML =
        `<p>Gratuluji! Vyhráváš poukaz na: 5 otázek na které ti musím odpovědět i kdybych nechtěla!(ne nemůžu odmitnout)</p>
        <button id="otazky">Přijímám</button>`;
        });}
    else if (month === 8) {
        document.getElementById("weekly").innerHTML =
        ` <img src="novaanim/darky-0002.png" id="gift8">`;
        document.getElementById("gift8").addEventListener("click", () => {
        document.getElementById("weekly").innerHTML =
        `<p>Gratuluji! Vyhráváš poukaz na: 1 dlouhá hlasová zpráva podle tvého přání!
        (ne nemůžu odmitnout)</p>
        <button id="hlasovka">Přijímám</button>`;
        });}
    else if (month === 9) {
        document.getElementById("weekly").innerHTML =
        ` <img src="novaanim/darky-0003.png" id="gift9">`;
        document.getElementById("gift9").addEventListener("click", () => {
        document.getElementById("weekly").innerHTML =
        `<p>Gratuluji! Vyhráváš poukaz na: 1 hodinu škrábání zad!(ne nemůžu odmitnout)</p>
        <button id="skrabani">Přijímám</button>`;
        });}
    else if (month === 10) {
        document.getElementById("weekly").innerHTML =
        ` <img src="novaanim/darky-0004.png" id="gift10">`;
        document.getElementById("gift10").addEventListener("click", () => {
        document.getElementById("weekly").innerHTML =
        `<p>Gratuluji! Vyhráváš poukaz na: 1 tanec jen pro tebe!(ne nemůžu odmitnout)</p>
        <button id="tanec">Přijímám</button>`;
        });}
    else if (month === 11) {
        document.getElementById("weekly").innerHTML =
        ` <img src="novaanim/darky-0005.png" id="gift11">`;
        document.getElementById("gift11").addEventListener("click", () => {
        document.getElementById("weekly").innerHTML =
        `<p>Gratuluji! Vyhráváš poukaz na: 1 striptease!(ne nemůžu odmitnout)</p>
        <button id="striptease">Přijímám</button>`;
        });}
    else if (month === 12) {
        document.getElementById("weekly").innerHTML =
        ` <img src="novaanim/darky-0001.png" id="gift12">`;
        document.getElementById("gift12").addEventListener("click", () => {
        document.getElementById("weekly").innerHTML =
        `<p>Gratuluji! Vyhráváš poukaz na: Večer celý jen podle tebe!
        (ne nemůžu odmitnout)</p>
        <button id="vecerpodletebe">Přijímám</button>`;
        });}
    else {
    document.getElementById("weekly").innerHTML =
    `<p>Toto asi nefunguje</p>`;}

