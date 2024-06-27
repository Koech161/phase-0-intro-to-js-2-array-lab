// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"];
function destructivelyAppendCat(name){
cats.push('Ralph');
}
function destructivelyPrependCat(name){
    cats.unshift('Bob')
}
function destructivelyRemoveLastCat(){
    cats.pop(length -1)
}
function destructivelyRemoveFirstCat(){
    cats.shift(0)
}
function appendCat(_Broom){
let newCats= [...cats,'Broom'];
return newCats;
}

function  prependCat(Arnold){
  let newCats=['Arnold', ...cats];
   return newCats;
}
function removeLastCat(){
    let newCats= cats.slice(0,cats.length -1) 
    return newCats;
}
function removeFirstCat(){
    let newCats= cats.slice(1);
    return newCats;
}

