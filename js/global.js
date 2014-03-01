function addLoadEvent(func) {
  var oldonload = window.onload;
  if (typeof window.onload != 'function') {
    window.onload = func;
  } else {
    window.onload = function() {
      oldonload();
      func();
    }
  }
}




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



function prepareInternalnav(){

	var sections = document.getElementsByTagName("section");
	if(sections.length == 0) return false;
	
	sections[0].style.display = "block";
	sections[1].style.display = "none";
	sections[1].style.position = "relative";
	var navs = document.getElementsByClassName("subnav");
	
	if (navs.length == 0) return false;
	var nav = navs[0];
	var links = nav.getElementsByTagName("a");
	
	for (var i=0; i<links.length; i++ ) {
	
    var sectionId = links[i].getAttribute("href").split("#")[1];
	
    if (!document.getElementById(sectionId)) continue;
	
    links[i].destination = sectionId;
    links[i].onclick = function() {
      showSection(this.destination);
      return false;
    }
  }
}




function loadEvents() {

  prepareInternalnav();
 
}


// Load events

addLoadEvent(loadEvents);












