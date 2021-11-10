let nouns = ["whale", "dinosaur", "monkey"];
let verbs = ["look", "make", "continue"];
let adjectives = ["good", "different", "possibilities"];

let noun = nouns[Math.floor(Math.random()*nouns.length)];
let verb = verbs[Math.floor(Math.random()*verbs.length)];
let adjective = adjectives[Math.floor(Math.random()*adjectives.length)];


let sentence = `My ${noun} leaps ${adjective} when I ${verb} a rainbow in the sky.`;

document.getElementById("meta").innerHTML = (sentence);

function generateSentence() {
document.getElementById("meta").innerHTML = (sentence);
}
