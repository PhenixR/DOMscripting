function highlightPage() {
  var nav = document.getElementsByClassName("header_nav")[0];
  var links = nav.getElementsByTagName("a");
  for (var i=0; i<links.length; i++) {
    var linkurl = links[i].getAttribute("href");
    var currenturl = window.location.href;
    if (currenturl.indexOf(linkurl) != -1) {
      links[i].id = "here";
      var linktext = links[i].lastChild.nodeValue.toLowerCase();
      document.body.setAttribute("class",linktext);
    }
  }
}

addLoadEvent(highlightPage);