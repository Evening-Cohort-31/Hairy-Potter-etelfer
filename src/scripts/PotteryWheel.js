let potteryId = 1

export const makePottery = (potteryShape, potteryWeight, potteryHeight) => {

let potteryObject = {
    shape: potteryShape,
    weight: potteryWeight,
    height: potteryHeight,
    id: potteryId 
}

potteryId++

return potteryObject

}