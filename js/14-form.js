function checkQuantity(){
    var a=document.getElementById("quantity").value;
    if(a<0||a>99)
        alert("Quantity must be between 0 and 99")
        else
        alert ("You're good to continue")
}