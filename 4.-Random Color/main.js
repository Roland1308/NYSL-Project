RandomColor = () => {
    let r = Math.floor(Math.random () * 255);
    let g = Math.floor(Math.random () * 255);
    let b = Math.floor(Math.random () * 255);
    let table = document.getElementById ("table");
    let row = document.createElement("tr");
    let data = document.createElement("td");
    data.innerHTML = `Color: rgb(${r},${g},${b})`;
    table.append(row);
    row.append(data);
    lastData = document.getElementById("table").lastElementChild
    lastData.style.background = `rgb(${r},${g},${b})`;
}