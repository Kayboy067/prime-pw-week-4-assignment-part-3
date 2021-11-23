console.log('***** Cart Functions *****');
// Make sure to test all functions here in the JS file!
// We want to see how you are testing your code!!!
let basket = [];
const maxItem = 5;

function addItem(item){
  basket.push(item);
  return true;
}
console.log(addItem ('apple'));
console.log(addItem ('strawberry'));
console.log(addItem ('grape'));
console.log(basket);

//creating function for listItems
function listItems(){
  for (let item of basket) {
    console.log(item);
  }
}
//listItems on new line in the console
listItems()

function empty(rice){
  basket = [rice];
}
empty()
console.log(`Basket is now ${basket}`);
