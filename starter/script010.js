/*****************************
 * 10 - Opérateurs de base
 */

// 1. Déclarez les variables now, ageJohn, ageMark, yearJohn et yearMark, puis affectez aux trois premières les valeurs 2019, 28 et 33.
let now = 2019;
const ageJohn = 28;
const ageMark = 33;
let yearJohn = 0;
let yearMark = 0;
// Opérateurs mathématiques

// 2. Affectez à yearJohn sa date de naissance (en la calculant à partir de l'année courante et de son âge). Faites de même pour yearMark. Ensuite, affichez la date de naissance de John et "Mark est né en …".
yearJohn = now - ageJohn;
yearMark = now - ageMark;
console.log("Mark est née " + yearMark);
console.log("John est née " + yearJohn);
// 3. Affichez l'année à laquelle nous serons dans deux ans, le double de l'année et le dixième de l'année.
now = now + 2;
console.log(now);
now = 2019 * 2;
console.log(now);
now = 2019 * 0.1;
console.log(now);
// Opérateurs logiques
// && = and
// || = or
// !() = not
let a = 5;
let b = 10;

if (x < 10 && y > 5) {
    console.log("Les deux conditions sont justes");
}
if (x > 10 || y < 5) {
    console.log("Une des conditions est juste");
}
if (!(x > 10)){
    console.log("La conditions est interverti");
}
// 4. … (Veuillez préciser votre question ou vos actions ici)

// Opérateur typeof
console.log(typeof now);