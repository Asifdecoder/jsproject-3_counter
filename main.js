const btn1= document.getElementById("btn1");
const btn2 = document.getElementById("btn2");
const counter = document.getElementById("counter1")
let value = counter.textContent

btn1.addEventListener('click', decrement)
btn2.addEventListener('click',increment)

function decrement(){

    

    if(value>0){

        value= +value-1
    counter.textContent=value
        
    }





}

function increment(){

    value= +value+1
    counter.textContent=value

}