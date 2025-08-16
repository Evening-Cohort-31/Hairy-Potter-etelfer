let sellablePottery = []

export const toSellOrNotToSell = (potteryObject) => {

    if (potteryObject.weight >= 6 && potteryObject.cracked !== true) {
        potteryObject.price = 40 
        sellablePottery.push(potteryObject)
    }
    else if (potteryObject.weight < 6 && potteryObject.cracked !== true) {
        potteryObject.price = 20
        sellablePottery.push(potteryObject)
    }

    else if (potteryObject.cracked === true) {
        potteryObject.price = 2.50
        sellablePottery.push(potteryObject)
    }

    return sellablePottery

}

export function usePottery() {

  return structuredClone(sellablePottery)

}