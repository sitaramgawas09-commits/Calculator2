const display = document.getElementById("screen")

function appendToDisplay(click){
  display.value+=click
}


function ClearDisplay(){
    display.value=""
}


function calculate(){
    try{
        display.value=eval(display.value)
    }
   catch(error){
       display.value="Select A Opratent"
   }
}



// Product of Max 2 Numbers in an array
let arr = [1,2,3,4,5,6]

function max(arr){
   let arr1 = arr.sort((a,b)=>b-a)
      return arr1[0] * arr1[1]
}

console.log( max(arr))



function sumEven(...rest){
    let sum = rest.reduce((acc,value)=>(value % 2 == 0 ? acc + value : acc ));
        return sum
  
}


console.log(sumEven(1,2,3,4,5))