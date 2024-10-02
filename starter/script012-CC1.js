/*****************************
 * CODING CHALLENGE 1
 */

// Mark et John veulent comparer leur BMI (Indice de masse corporelle),
// qui est calculé en utilisant la formule :
// BMI = poids / taille^2 = poids / (taille * taille).
// N.B. Le poids est en kg et la taille est en mètres.
//
// 1. Stockez le poids et la taille de Mark et de John dans des variables.
const weightMark = 115 ;
const weightJohn = 82;
const heightMark = 1.93;
const heightJohn = 1.70;
// 2. Calculez le BMI de chacun.
const bmiMark = weightMark/(heightMark * heightMark);
const bmiJohn = weightJohn/(heightJohn * heightJohn);
console.log(bmiMark);
console.log(bmiJohn);
// 3. Créez une variable booléenne qui contient l'information de savoir
//    si le BMI de Mark est plus élevé que celui de John.
const isBmiMarkBiggerThanBmiJohn = bmiMark>bmiJohn;
console.log(isBmiMarkBiggerThanBmiJohn);
// 4. Imprimez une chaîne de caractères dans la console contenant la
//    variable de l'étape 3 (Quelque chose du genre "Est-ce que le BMI de
//    Mark est plus élevé que celui de John ? true").
console.log("Est-ce que le BMI de Mark est plus élévé que celui de john ? " + isBmiMarkBiggerThanBmiJohn);
console.log(`Est-ce que le BMI de Mark est plus élévé que celui de john ? ${ bmiMark>bmiJohn }`)
// `${valeur}`
// BONNE CHANCE 😀
if (isBmiMarkBiggerThanBmiJohn){
    console.log("Mark>John");
    if (bmiMark <= 18) {
        console.log('Ton (Mark) BMI est <= 18.');
    } else if (bmiMark <= 25) {
        console.log('Ton (Mark) BMI est  [19-25]');
    } else if (bmiMark <= 35) {
        console.log('Ton (Mark) BMI est  [26-35]');
    } else {
        console.log('Ton (Mark) BMI est  >35');
    }
} else if (bmiJohn===bmiMark){
    console.log("Mark=John");
    } else {
    console.log("Mark<John");
}











