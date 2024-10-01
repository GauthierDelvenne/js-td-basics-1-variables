// Permutation de variables
switch (variable) {

}
// Solution classique utilisant une variable temporaire
let a = 1;
let b = 2;
const temp = a;
a = b;
b = temp;
console.log(a);
console.log(b);
// Solution alternative valable uniquement pour des nombres
let c = 3;
let d = 4;
c = c + d;
d = c - d;
c = c - d;
console.log(c);
console.log(d);
/*
// Échange de nombre1 et nombre2 sans variable temporaire
*/

