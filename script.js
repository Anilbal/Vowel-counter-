function vowelCounter(e){
    e.preventDefault()
    let inputField=document.querySelector("#textField")
    let input=inputField.value

    //spliting value 
    let inputValue=[]
    inputValue=[...input]
    let finalValue=inputValue.filter(n=>n==="e" ||n==="a" || n==="i" || n==="o" || n==="u")

    //result
    let result=document.querySelector("#result")
    result.innerHTML=`Your Total vowel is ${finalValue.length}`

    //clearing my input
    inputField.value=""
}
let btn=document.querySelector("#btn").addEventListener("click",vowelCounter)