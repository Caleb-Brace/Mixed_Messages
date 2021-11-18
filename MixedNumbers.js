const foodChoice = {
    Breakfast: ["IHOP", "Ana's House", "Denny's", "Waffle House" ],
    Lunch:["Wild Chef", "Red Robins", "Pizza Hut", "Chick-fil-a" ],
    Dinner:["Applebees", "Outback Steakhouse", "Logan's", "Crust 54"]
}

function randomizer(number){
    return Math.floor(Math.random() * number);
}

let number = []
let mealDecision = []
 
for (let value in foodChoice) {
    console.log(value)
    let generate = randomizer(foodChoice[value].length)
        
    mealDecision.push(value + ':' + foodChoice[value][generate])
}
    

console.log(`Your meal plan for the day is: "${mealDecision}" `)

