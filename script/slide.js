function prepareSlideshow() {
    var slidepic = document.getElementById("slidepic");
    slidepic.style.position = "absolute";
    slidepic.style.left = "0px";
    slidepic.style.left = "0px";
    var list = document.getElementById("header-ul");
    var links = list.getElementsByTagName("a");
    links[0].onmouseover = function() {
        moveElement("slidepic",0,0,5)
    }
    links[1].onmouseover = function() {
        moveElement("slidepic",-150,0,5)
    }
    links[2].onmouseover = function() {
        moveElement("slidepic",-300,0,5)
    }
    links[3].onmouseover = function() {
        moveElement("slidepic",-450,0,5)
    }
    links[4].onmouseover = function() {
        moveElement("slidepic",-600,0,5)
    }
}

addLoadEvent(prepareSlideshow);