createList = list => {
    ol = document.getElementById("orderedlist");
    list.forEach(lItem => {
        li = document.createElement("li")
        li.append(lItem);
        ol.append(li);
    });
}

let array = ['color1', 'color2', 'color3', 'pippo'];
createList (array);