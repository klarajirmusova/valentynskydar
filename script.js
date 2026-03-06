const heslo = 12345;
let input;
let btn = document.getElementById("odeslat");

btn.onclick = function () {
    input = document.getElementById("heslo").value;
    input = Number(input);
    if (input === 12345) document.getElementById("tu").innerHTML = `<button id="btn"><a href="gift.html">Klikni Sem</a></button>`;
}

gsap.to("#box3", {
backgroundPosition:"-2048px 0px",
duration: 4,
ease: "steps(16)",
repeat:-1
});
(console.log(gsap));