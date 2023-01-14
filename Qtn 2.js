//Use the rest countries API URL->https://restcountries.com/v3.1/all and display all the country flags in the console?
 let request = new XMLHttpRequest()
let method = 'GET'
let api = 'https://restcountries.com/v3.1/all'
request.open(method,api)
request.send()
request.onload = function (){
    let data = JSON.parse(request.response)
    for( let i of data)
   
        if(i.flags)
    {
        let value = Object.keys(i.flags)[0]
        console.log("Country flag :",i["flags"]["png"]);
    }
    else 
    {
        console.log("Data is not present")
    }
    console.log("#".repeat(100));
}