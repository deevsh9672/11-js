functiom calculate(){
const cartype= document.querySelector('Input[name="cartype"]:clicked').value;

    const days= document.querySelector("#days").value;

    let rent =0;
    switch(cartype){
        case "ecomnory":
            rent= 400*days;
            break;

        case "midsize":
            rent = 10000*days;
            break;
        case "luxury":
            rent= 20000*days;
            break;

            defualt:
            alert("please selector all rent")
             break;
    }
     document.querySelector("span").innerText=rent;
}
            
  
