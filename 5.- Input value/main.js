addValue = () => {
    let val=document.getElementById('input').value;
    if (val=="") {
        alert("You must add a value!");
        return;
    }
    let div = document.getElementById ("principale");
    let parag = document.createElement("p");
    parag.innerHTML = val;
    div.append(parag);
    document.getElementById('input').value = "";
    document.getElementById("input").focus();
}