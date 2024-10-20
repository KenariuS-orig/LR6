// function isEnoughCapacity(products, containerSize)
// { 
//   products = 
//   { apples: 2, grapes: 4 , grapes: 3, lime: 16};

//   containerSize = 100;

//   if (products <= containerSize)
//   {
//     return("There is free space in the container")
//   }else{
//     if(containerSize <= products)
//     {
//       return("There are too many products and not enough space")
//     }
//   }
// }

// console.log(isEnoughCapacity({ apples: 2, grapes: 3, carrots:
//   1 }, 8)); // true
//   console.log(isEnoughCapacity({ apples: 4, grapes: 6, lime: 16
//   }, 12)); // false
//   console.log(isEnoughCapacity({ apples: 1, lime: 5, tomatoes: 3
//   }, 14)); // true
//   console.log(isEnoughCapacity({ apples: 18, potatoes: 5,
//   oranges: 2 }, 7)); // false
  

function isEnoughCapacity(products, containerSize, fragileItems)
{
  let totalProducts = 0;

  for (let product in products)
{
    totalProducts += products[product];
  
  if(fragileItems.includes(product))
  {
    containsFragileITems = true;
  }
}

  if(containsFragileITems)
  {
    console.log("Увага! Контейнер містить крихкі товари, поводьтеся обережно.");
  }

  return totalProducts <= containerSize;
}

console.log(isEnoughCapacity({ apples: 2, grapes: 3, carrots: 1 }, 8, ['apples', 'grapes'])); 
// true
console.log(isEnoughCapacity({ apples: 4, grapes: 6, lime: 16 }, 12, ['apples', 'grapes'])); 
// false
console.log(isEnoughCapacity({ apples: 1, lime: 5, tomatoes: 3 }, 14, ['apples'])); 
// true
console.log(isEnoughCapacity({ apples: 18, potatoes: 5, oranges: 2 }, 7, ['oranges'])); 
// false
console.log("____________________________________");