document.getElementById("submit-btn").onclick=function(){
    let sheds={
        A:document.getElementById("q"),
        B:document.getElementById("z"),
        C:document.getElementById("y"),
        D:document.getElementById("p"),
    }
    let production=
        document.getElementById("G").value="Your productions in shed A is " + q.value+ " litres per day"
        document.getElementById("K").value="Your productions in shed B is " + z.value + " litres per day"
        document.getElementById("L").value="Your productions in shed C is " + y.value + " litres per day"
        document.getElementById("I").value="Your productions in shed D is " + p.value + " litres per day"
        document.getElementById("O").value="Your productions in shed Total is " + Total+ " litres per day"
document.getElementById("btt").onclick = function(){
    let price = 45 ;
    let weeklyoutput = total *prce * 7;
    let yearlyoutput = total *prce * 365;
    document.getElementById("weeklyoutput").value = "Your weekly income will be Ksh "+ weeklyoutput;
    document.getElementById("yearlyoutput").value = "Your Yearly income will be Ksh "+ yearlyoutput;
}
}














// const shedData={
//     A:510,
//     B:308,
//     C:486,
//     D:572
// }
// const leapYear={
//     January:31,
//     February:29,
//     March:31,
//     April:30,
//     May:31,
//     June:30,
//     July:31,
//     August:31,
//     September:30,
//     October:31,
//     November:30,
//     December:31
// }

// function totalProduction(){
//   let total=0
//   Object.keys(shedData).forEach(key=>{
//     total+=shedData[key]
//   })
//   return total
// }
// console.log(totalProduction())

// function brooksideData(price,time){
//     if(time.toUpperCase()==="WEEKLY"){
//       return `Your weekly income will be Ksh${totalProduction()*7*price}`
//     }else if(time.toUpperCase()==="YEARLY"){
//       return `Your yearly income will be Ksh${totalProduction()*365*price}`

//     }
// }
// function leapYearIncome(price){

// return Object.keys(leapYear).map(key=>{
// return `Your income for ${key} is Ksh ${leapYear[key]*totalProduction()*price}`
// })
// }
// console.log(leapYearIncome(45))
