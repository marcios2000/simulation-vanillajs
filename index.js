let expenses = [1, 3, 6]

let total = 0




function amountTotal(amount) {
  
   for (let i = 0; i < amount.length; ++i) {
        total += amount[i]; // add each element in an array to total
   }
   return total;// return sum of elements in array
}

document.getElementById("add").addEventListener("click", amountTotal);
document.getElementById("result").innerHTML= "$" + total;


