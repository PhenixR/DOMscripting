function showSection(id) {
  var sections = document.getElementsByTagName("section");
  for (var i=0; i<sections.length; i++ ) {
      if (sections[i].getAttribute("id") != id) {
          sections[i].style.display = "none";
      } else {
          sections[i].style.display = "block";
      }
  }
}

function prepareInternalnav() {
  var nav = document.getElementById("internalnav");
  var links = nav.getElementsByTagName("a");
  for (var i=0; i<links.length; i++ ) {
    var sectionId = links[i].getAttribute("href").split("#")[1];
    if (!document.getElementById(sectionId)) continue;
    document.getElementById(sectionId).style.display = "none";
    links[i].destination = sectionId;
    links[i].onclick = function() {
      showSection(this.destination);
      return false;
    }
  }
}
addLoadEvent(prepareInternalnav);