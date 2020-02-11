function calculate(){
    let totalIn = parseFloat(document.getElementById("totalIN").value);
    console.log(typeof totalIn);
    let rateIn = parseFloat(document.getElementById("rateIN").value);
    if (totalIn == "" || rateIn == ""){
        alert("hey dummy you forgot something");
    }
    document.getElementById("tipo").innerHTML = "$" + totalIn*rateIn;
    document.getElementById("taxo").innerHTML = "$" + totalIn*0.055;
    document.getElementById("grandtotalo").innerHTML = "$" + (totalIn + (totalIn*rateIn) + (totalIn*0.055));
    return false;
}
