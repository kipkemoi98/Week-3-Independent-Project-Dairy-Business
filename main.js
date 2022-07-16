const shedData={
  A:510,
  B:308,
  C:486,
  D:572
}
const leapYear={
  January:31,
  February:28,
  March:31,
  April:30,
  May:31,
  June:30,
  July:31,
  August:31,
  September:30,
  October:31,
  November:30,
  December:31
}

function totalProduction(){
let total=0
Object.keys(shedData).forEach(key=>{
  total+=shedData[key]
})
return total
}
console.log(totalProduction())

function brooksideData(price,time){
  if(time.toUpperCase()==="WEEKLY"){
    return `Your weekly income will be Ksh${totalProduction()*7*price}`
  }else if(time.toUpperCase()==="YEARLY"){
    return `Your yearly income will be Ksh${totalProduction()*365*price}`

  }
}
function leapYearIncome(price){

return Object.keys(leapYear).map(key=>{
return `Your income for ${key} is Ksh ${leapYear[key]*totalProduction()*price}`
})
}
console.log(leapYearIncome(45))