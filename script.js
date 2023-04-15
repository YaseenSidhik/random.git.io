function one()
{
    let num = Math.floor(Math.random()*100)+1
    let store = document.getElementById("one-el")
    store.textContent = num
}

function two()
{   
    let store = document.getElementById("two-el")
     let num = Math.floor(Math.random()*100)+1
    let num2 = Math.floor(Math.random()*100)+1
    store.textContent = num + "-" + num2
}



function wish()
{
    let n = document.getElementById("input-el").value
    let store = document.getElementById("wish-el")
    store.textContent = "";
    for(let i=0; i<n;i++)
    {
    let num = Math.floor(Math.random()*100)+1
    store.textContent += " "+ num + " " 
    }
    
}