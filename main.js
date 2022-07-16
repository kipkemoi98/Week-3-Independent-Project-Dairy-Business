let selling_price = 45; //cost of milk per litre
var sheds = {
        name: "shed-A",
        averageProduction: 510,
    },
    {
        name: "shed-B",
        averageProduction: 308,
    },
    {
        name: "shed-C",
        averageProduction: 486,
    },
    {
        name: "shed-D",
        averageProduction: 572,
    },
document.getElementById("submit-btn").onclick=function(){
  let sheds={
  shedA: document.getElementById("shed-A"),
  shedA: document.getElementById("shed-B"),
  shedA: document.getElementById("shed-C"),
  shedA: document.getElementById("shed-D"),
  }
  console.log(sheds);
}

var milkproduce= function(e) {
    let sum = 0;
    for (let i = 0; i < e.length; i++) {
        sum += e[i].averageProduction;
        if (i == e.length - 1) {
            return sum;
        }
    }
};

var totalProduction = function(obj) {
    for (let i = 0; i < obj.length; i++) {
        console.log(
            "Your production in " +
            obj[i].name +
            " " +
            obj[i].averageProduction +
            " litres per day"
        );
    }
    console.log(
        "The total production is " + allProduction(obj) + " litres per day"
    );

};
totalProduction(sheds);
var months = {
    January: 31,
    February: 29,
    March: 31,
    April: 30,
    May: 31,
    June: 30,
    July: 31,
    August: 31,
    September: 30,
    October: 31,
    November: 30,
    December: 31,
};
var sellingPricePerLitre = 45;

function incomeOverTime(selling_price, time) {
    if (time == "weekly") {
        let week = allProduction(sheds) * 7 * selling_price;
        console.log("Your weekly income will be ksh " + week);
    } else if (time == "yearly") {
        let sum = 0;
        for (let values of Object.values(months)) {
            sum = values * allProduction(sheds) * selling_price;
        };
        console.log("Your yearly income will be Ksh " + sum);
    }
}
incomeOverTime(sellingPricePerLitre, "weekly");
incomeOverTime(sellingPricePerLitre, "yearly");

function incomePerMonth(selling_price) {
    let monthlyProduction;
    for (let [keys, values] of Object.entries(months)) {
        monthlyProduction = values * allProduction(sheds) * selling_price;
        console.log("Your income for " + keys + " is " + monthlyProduction);
    }
}
incomePerMonth(sellingPricePerLitre);
  let sheds={
shedA: document.getElementById("shed-A"),
shedA: document.getElementById("shed-B"),
shedA: document.getElementById("shed-C"),
shedA: document.getElementById("shed-D"),
  }
