function getSzoveg(obj){
    var szoveg_input = obj.value;
    let szoveg=document.getElementById("szoveg")
    document.getElementById("input_szoveg").innerHTML =szoveg_input;
    if (szoveg_input ==" " || szoveg_input==""){
        document.getElementById("alert").style.color="red";
        document.getElementById("alert").textContent="A szöveg nem lehet üres";
    }else{
        document.getElementById("alert").style.color="black";
        document.getElementById("alert").textContent="Mintaszöveg";
    }

}
function setMeret(obj){
    var betumeret=obj.value;
    if(betumeret>0){
        document.getElementById("input_szoveg").style.fontSize = betumeret + "px";
    }
}
function setFontColor(obj){
    document.getElementById("input_szoveg").style.color = obj.value;;
}
function setBackgroundColor(obj){
    document.getElementById("input_szoveg").style.backgroundColor = obj.value;
}

  