const bgColors = ["#ffcccc","#ffeb99","#b3ffb3","#ffb3d9","#b3e0ff","#b3ffff","#ffcc99","#ffff66","#c299ff","#ccccff"];

const meals = [
   { name:"Bolani",
    src:"https://live.staticflickr.com/5324/8411101127_f1a1cbf4ca_m.jpg",
    price:100},

    { name:"Sandwich",
    src:"https://live.staticflickr.com/4535/38843775311_ccff8a4c57_n.jpg",
    price:200},

    { name:"Quabili Pallow",
    src:"https://live.staticflickr.com/2028/2062080488_a9d48fbd79_n.jpg",
    price:300},

    { name:"Aushak",
    src:"https://live.staticflickr.com/2335/2061291681_a6e2d3c85c_m.jpg",
    price:10},

    { name:"Afghan Chicken",
    src:"https://live.staticflickr.com/2728/4517478125_2c51642a8b_n.jpg",
    price:20},

    { name:"kabab",
    src:"https://live.staticflickr.com/7448/9252570638_29b8c549f1_n.jpg",
    price:60},

    { name:"Pizza",
    src:"https://live.staticflickr.com/3762/12244783725_714f1e17a5_n.jpg",
    price:80},

    { name:"Tomato Soup",
    src:"https://live.staticflickr.com/7167/6649917835_a97fe4c0c5_w.jpg",
    price:40},
];

let wallet = 600;
document.querySelector("#wallet").textContent = wallet;

function generateRandomNumber(max){
    console.log("Running generateRandomNumber function");
    let randomFinalNum = Math.floor(Math.random() * max);
    console.log("randomFinalNum " , randomFinalNum);
    return randomFinalNum;
}

function generateBackgroundColor(){
    console.log("Running generateBackgroundColor function");
    const randomNum = generateRandomNumber(bgColors.length);
    const randColor = bgColors[randomNum];
    document.body.style.backgroundColor= randColor;
    console.log("Random Baclground-Color", randColor);
    return randomNum;
}

generateBackgroundColor();

let previousMealIndexes = [];
function generateMeals(){
    console.log("Running generateMeals function");
    const uniqueMealIndexes = [];

    while(uniqueMealIndexes.length < 3){
        const randMealIndex = generateRandomNumber(meals.length);
        if(!previousMealIndexes.includes(randMealIndex) && !uniqueMealIndexes.includes(randMealIndex)){
            uniqueMealIndexes.push(randMealIndex);
        }
    }
    previousMealIndexes = uniqueMealIndexes;

    document.querySelector("#meal1 img").src = meals[uniqueMealIndexes[0]].src;
    document.querySelector(".card-body .card-title").textContent = meals[uniqueMealIndexes[0]].name;
    document.querySelector(".card-body .price").textContent = meals[uniqueMealIndexes[0]].price;

    document.querySelector("#meal2 img").src = meals[uniqueMealIndexes[1]].src;
    document.querySelector("#meal2 .card-body .card-title").textContent = meals[uniqueMealIndexes[1]].name;

    document.querySelector("#meal2 .card-body .price").textContent = meals[uniqueMealIndexes[1]].price;

    document.querySelector("#meal3 img").src = meals[uniqueMealIndexes[2]].src;
    document.querySelector("#meal3 .card-body .card-title").textContent = meals[uniqueMealIndexes[2]].name;
    document.querySelector("#meal3 .card-body .price").textContent = meals[uniqueMealIndexes[2]].price;

}
generateMeals()

function calculateBill(){
    console.log("Running calculateBill function");
    const price1 = document.querySelector("#meal1 .card-body .price").textContent;
    const price2 = document.querySelector("#meal2 .card-body .price").textContent;
    const price3 = document.querySelector("#meal3 .card-body .price").textContent;
    let num1 = parseInt(price1);
    let num2 = parseInt(price2);
    let num3 = parseInt(price3);
    const res = num1 + num2 + num3;

    document.querySelector("#total").textContent= res;
    console.log(res);
}

calculateBill();

function purchase(total){
    console.log("Running purchase function");
    if(wallet >= total){
        wallet -= total;
        document.querySelector("#wallet").textContent = wallet.toString();
        document.querySelector("#message").classList.remove('invisible');
        document.querySelector("#purchase-cost").textContent = total.toString();
        generateBackgroundColor();
        generateMeals();
    }else{
        alert("Sorry, you cannot purchase the meals!");
        document.querySelector("#message").classList.add('invisible');
    }
}
purchase();

function addFunds(funds){
    console.log("Running addfunds function");
    wallet += funds;
    console.log(wallet);
    document.querySelector("#wallet").textContent = wallet;
}
document.querySelector("#generate-button").onclick = function(){
    generateMeals();
    calculateBill();
}
document.querySelector("#purchase-button").onclick = function(){
    const totalValue = parseInt(document.querySelector("#total").textContent);
    purchase(totalValue);
}
document.querySelector("#add-funds-button").onclick = function(){
    const fundsAdd = parseInt(prompt("How much funds would you like to put in?"));
    addFunds(fundsAdd);
}