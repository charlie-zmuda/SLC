function calcTotal(){
    var itemTotal = 0;
    var list = document.getElementsByTagName("input");
    var i;
    for (i=0; i<list.length; i++){
        if (list[i].checked==true){
            itemTotal += list[i].value * 1;
        }
    }
    if (itemTotal == 1){
        window.alert("Thank you for your help. Check back soon to see info on this  park.");
    }
    else if (itemTotal != 1){
        window.alert("Please select only one park.");
    }
    event.preventDefault(); 
}
document.getElementById("submit").addEventListener("click",calcTotal,false);