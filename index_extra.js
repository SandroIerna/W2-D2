let spaghetti = 400;
let guanciale = 250;
let eggYolks = 6;
let pecorinoRomano = 50;
let blackPepper = 4;
console.log("----Ingredients for 4 persons:----");
console.log("spaghetti", spaghetti, "g");
console.log("guanciale", guanciale, "g");
console.log("very fresh egg yolks", eggYolks);
console.log("aged grated Pecorino Romano cheese", pecorinoRomano, "g");
console.log("raw black pepper", blackPepper, "g");
console.log("----Let's start cooking----");
let averageEggYolkWeight = 18;
let eggWeight = eggYolks * averageEggYolkWeight;
// console.log(eggWeight);
let eggCheese = eggWeight + pecorinoRomano;
console.log(
  "Combine the egg yolks with the finely grated Pecorino Romano.",
  eggCheese,
  "g"
);
let roastingRate = 0.999;
let roastedBlackPepper = blackPepper * roastingRate;
let smallPepper = roastedBlackPepper - 2;
roastedBlackPepper = roastedBlackPepper - smallPepper;
let eggCheesePepper = eggCheese + smallPepper;
console.log(
  "Roast the black pepper on a pan until it smokes and sizzles, and combine a small amount of it to the yolks and chees mixture, set aside the rest.",
  "Mixture",
  eggCheesePepper,
  "g"
);
let greasingRate = 0.8;
let greasedGuanciale = guanciale * greasingRate;
let grease = guanciale - greasedGuanciale - 20;
console.log(
  "Brown the strips of guanciale for 3 minutes at medium heat, then 1 minute on high heat til crisp, then turn off the heat, take out the guanciale, leaving only the grease on the pan cool down.",
  "Greased Guanciale",
  greasedGuanciale,
  "g"
);
let pastaWater = 30;
let absorbtionRate = 1.8;
let cookedPasta = spaghetti * absorbtionRate;
console.log(
  "Cook the pasta with a pinch of salt in the water, set aside a ladleful of the pasta water before draining it, then drain the pasta once it is cooked al dente.",
  "Cooked spaghetti",
  cookedPasta,
  "g"
);
let guancialeMixture = grease + greasedGuanciale + pastaWater;
console.log(
  "Pour 2 spoons of the reserved hot water into the part of the frying pan containing the cooled guanciale and turn on the heat: this will create a creamy sauce with the pasta starch contained in that water.",
  "Creamy Sauce",
  guancialeMixture,
  "g"
);
let pastaMixture = guancialeMixture + cookedPasta;
console.log(
  "TURN OFF THE HEAT AND SET ASIDE for 1 minute, then transfer the pasta to the same pan and mix togheter.",
  "Pasta with guanciale cream",
  pastaMixture,
  "g"
);
let carboCrema = pastaMixture + eggCheesePepper;
console.log(
  "Add the yolk and cheese mixture, stirring rapidly. In the warm pan with the hot pasta, the eggs will cook gently and become creamy.",
  "Carbocrema",
  carboCrema,
  "g"
);
let carbonara = carboCrema + roastedBlackPepper;
console.log(
  "It is important to do this part quickly to prevent the yolks from congealing and taking on the texture of scrambled eggs. Add the remaining roasted black pepper and serve immediately.",
  "Carbonara total weight",
  carbonara,
  "g"
);
