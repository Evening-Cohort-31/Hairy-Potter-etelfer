export const firePottery = (potteryObject, kilnTemp) => {
  
    const firedPottery = {...potteryObject}
    
    if (kilnTemp >= 2200){
        firedPottery.cracked = true 
    }
      else {
        firedPottery.fired = true
}

return firedPottery

}