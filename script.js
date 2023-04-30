function generate() {
    var genre = document.getElementById("genre").value
    var topic = document.getElementById("input").value
    var width = document.getElementById("width").value
    var height = document.getElementById("height").value
    var myImg = document.querySelectorAll(".myImg")
    console.log(width);
    for (var i = 0; i < myImg.length; i++) {
        myImg[i].src = `https://source.unsplash.com/${width}x${height}/?${genre},${topic}`;
    }
    if(width >= 400){
        document.getElementById("sec").style.display = "none"
        document.getElementById("first").style.flexDirection = "column"
        document.getElementById("first").style.marginRight = "50px"
        for (var i = 0; i < myImg.length; i++) {
            myImg[i].style.marginBottom = "10px";
        }
    }
}