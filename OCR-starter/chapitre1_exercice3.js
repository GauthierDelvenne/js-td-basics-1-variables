// Prédiction de résultat
/*
Affichez dans la console le résultat de l'opérateur "+" dans les différentes cas de figure
avec les valeurs 4 et 5 selon qu'elles sont de type nombre ou de type chaîne :
- 4 et 5 sont toutes deux de type nombres :
    * quelle opération réalise l'opérateur "+" dans ce cas ?
    une somme
    * quel est le résultat de l'opération ?
    9
- 4 et 5 sont toutes deux de type chaîne :
    * quelle opération réalise l'opérateur "+" dans ce cas ?

    * quel est le résultat de l'opération ?
    45
- 4 est de type chaîne et 5 est de type nombre :
    * quelle opération réalise l'opérateur "+" dans ce cas ?

    * quel est le résultat de l'opération ?
    45
- que se passe-t-il si on entoure toute l'expression (VALEUR OPÉRANDE VALEUR) de guillemets ? Pourquoi ?
*/
const a = 4;
const b = 5;
const c = ("4");
const d = ("5");
// Cas 1 : 4 et 5 sont toutes deux de type nombres
const typeNombre = a+b
console.log(typeNombre);
// Cas 2 : 4 et 5 sont toutes deux de type chaîne
const typeChaine = c+d
console.log(typeChaine);
// Cas 3 : 4 est de type chaîne et 5 est de type nombre
const typeMixt = c+b
console.log(typeMixt)
// Cas 4 : Entourer l'expression (VALEUR OPÉRANDE VALEUR) de guillemets
const entourer = "c+b"
console.log(entourer)
