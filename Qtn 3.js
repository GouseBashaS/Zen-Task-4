//Use the same rest countries and print all countries names,regions,sub-region and populations?
let xmr = new XMLHttpRequest()
xmr.open('GET','https://restcountries.com/v3.1/all')
xmr.send()
xmr.onload = function (){
    let data = JSON.parse(xmr.response)
    for( let i of data)
   
        if(i.name.common,i.region,i.subregion,i.population)
    {
        let value = Object.keys(i.name.common,i.region,i.subregion,i.population)[0]
        console.log("Name : ",i["name"]["common"],"||","Region : ",i["region"],"||","Subregion : ",i["subregion"],"||","Population : ",i["population"]);
    }
    else 
    {
        console.log("Data is not present")
    }
    console.log("#".repeat(100))
}