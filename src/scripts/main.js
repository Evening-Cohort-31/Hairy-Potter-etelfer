// Imports go first

import { firePottery } from "./Kiln.js";
import { toSellOrNotToSell, usePottery } from "./PotteryCatalog.js";
import { makePottery } from "./PotteryWheel.js"

// Make 5 pieces of pottery at the wheel
let mug = makePottery("Mug", 2, 7)
let platter = makePottery("Platter", 6, 1)
let bowl = makePottery("Bowl", 3, 4);
let vase = makePottery("Vase", 8, 8);
let cup = makePottery("Cup", 1, 3);

console.log(mug)
console.log(platter)
console.log(bowl)
console.log(vase)
console.log(cup)


// Fire each piece of pottery in the kiln

let firedMug = firePottery(mug, 2500)
let firedPlatter = firePottery(platter, 1400)
let firedBowl = firePottery(bowl, 1870)
let firedVase = firePottery(vase, 1530)
let firedCup = firePottery(cup, 10000)

console.log(firedMug)
console.log(firedPlatter)
console.log(firedBowl)
console.log(firedVase)
console.log(firedCup)



// Determine which ones should be sold, and their price
toSellOrNotToSell(firedMug)
toSellOrNotToSell(firedPlatter)
toSellOrNotToSell(firedBowl)
toSellOrNotToSell(firedVase)
toSellOrNotToSell(firedCup)



// Invoke the component function that renders the HTML list

