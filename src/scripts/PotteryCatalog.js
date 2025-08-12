let sellablePottery = []

export const toSellOrNotToSell = (firedPottery) => {

    if (firedPottery.weight >= 6 && firedPottery.fired === true) {
        firedPottery.price = 40 
        sellablePottery.push(firedPottery)
    }
    else if (firedPottery.weight < 6 && firedPottery.fired === true) {
        firedPottery.price = 20
        sellablePottery.push(firedPottery)
    }


    return sellablePottery
}

export function usePottery() {
  return structuredClone(sellablePottery)
}