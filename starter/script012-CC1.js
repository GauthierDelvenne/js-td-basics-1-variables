/*****************************
 * CODING CHALLENGE 1
 */

// Mark et John veulent comparer leur BMI (Indice de masse corporelle),
// qui est calculé en utilisant la formule :
// BMI = poids / taille^2 = poids / (taille * taille).
// N.B. Le poids est en kg et la taille est en mètres.
//
// 1. Stockez le poids et la taille de Mark et de John dans des variables.
const weightMark = 103 ;
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
const diff = bmiMark>bmiJohn;
console.log(diff);
// 4. Imprimez une chaîne de caractères dans la console contenant la
//    variable de l'étape 3 (Quelque chose du genre "Est-ce que le BMI de
//    Mark est plus élevé que celui de John ? true").
console.log("Est-ce que le BMI de Mark est plus élévé que celui de john ? " + diff);
// ${valeur}
// BONNE CHANCE 😀