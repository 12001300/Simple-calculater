let calculaterContainer=document.getElementById("calc-container");
let displayArea=document.getElementById("display");
calculaterContainer.addEventListener("click" , (e)=>{
    if(e.target.nodeName=="BUTTON"){
        switch(e.target.textContent){
        case "C":
             clear();
             break;
        case "DEL":
            Delete();
            break;
        case "=":
            evaluate();
            break;
        default:
            addtoDisplay(e.target.textContent) ; 


        }
    }
})

function clear(){
    displayArea.textContent=" "
};
function Delete(){
    let curentcontent=displayArea.textContent;
    displayArea.textContent=curentcontent.substring(0,curentcontent.length-1);

}
function addtoDisplay(value){
    displayArea.innerHTML+=value;

}
function evaluate(){
    try{
        let calculation=math.evaluate(displayArea.textContent)
        displayArea.textContent=calculation
    }catch(error){
        displayArea.textContent="invalid Operation";
        console.error(error);
    }
}