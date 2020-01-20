let div = document.getElementById("newsspeed");
let txt =
"Felice anno nuovo ! -- Happy new year ! -- Joyeux Nouvel An ! -- Feliz Año Nuevo ! -- Feliç Any Nou ! -- Glückliches neues Jahr ! -- Feliz Ano Novo ! -- 明けましておめでとうございます ! -- سنة جديدة سعيدة ! -- 新年快樂 ! -- Furaha ya Mwaka Mpya ! -- С Новым годом ! -- La mulţi ani ! -- Ευτυχισμένο το Νέο Έτος !"
document.getElementById("newsspeed").innerHTML = txt;
let len = txt.length;
let time = len / 10 + 3 + (10/len);
let actSpeed = div.style.animationDuration;
div.style.animationDuration = `${time}s`;
actSpeed = div.style.animationDuration;
