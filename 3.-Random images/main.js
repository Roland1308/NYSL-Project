RandomImage = () => {
    let imgList = ["./images/baseball.jpg","./images/cross.jpg","./images/cycling.jpg","./images/football.jpg","./images/icehockey.jpg","./images/mix.jpg","./images/soccer.jpg","./images/tennis.jpg","./images/tennistable.jpg"]
    let casualNr = Math.floor(Math.random()*(imgList.length++));
    let casualImage = imgList[casualNr];
    document.getElementById("immagine").src = casualImage;
}