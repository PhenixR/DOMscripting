function insertAfter(newElement,targetElement) {
    var parent = targetElement.parentNode;
    if (parent.lastChild == targetElement) {
        parent.appendChild(newElement);
    } else {
        parent.insertBefore(newElement,targetElement.nextSibling);
    }
}
function preparePlaceholder() {
    var placeholder = document.createElement("img");
    placeholder.setAttribute("class","placeholder_pic");
    placeholder.setAttribute("src","images/placeholder.gif");
    placeholder.setAttribute("alt","choose an image");
    var description = document.createElement("p");
    description.setAttribute("class","placeholder_text");
    var desetext = document.createTextNode("Choose an image");
    description.appendChild(desetext);
    var list = document.getElementsByClassName("preview")[0];
    insertAfter(description,list)
    insertAfter(placeholder,description);    
}
function showPic(whichpic) {
    var source = whichpic.getAttribute("href");
    var placeholder = document.getElementsByClassName("placeholder_pic")[0];
    placeholder.setAttribute("src",source);
    if (document.getElementsByClassName("placeholder_text")) {
    var text = whichpic.getAttribute("title");
    var description = document.getElementsByClassName("placeholder_text")[0];
    description.firstChild.nodeValue =text;
    }
    return true;
}
function prepareGallery() {
    var gallery = document.getElementsByClassName("preview")[0];
    var links = gallery.getElementsByTagName("a");
    for ( var i=0; i < links.length; i++) {
        links[i].onclick = function() {
            return !showPic(this);
        }
    }
}
addLoadEvent(prepareGallery);
addLoadEvent(preparePlaceholder);
