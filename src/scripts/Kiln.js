export const firePottery = (potteryObject, kilnTemp) => {
  
  potteryObject.fired = true
    
    if (kilnTemp >= 2200){

        potteryObject.cracked = true 
        
}

return potteryObject

}