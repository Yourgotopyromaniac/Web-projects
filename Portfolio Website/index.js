function darkMode() 
{
  document.getElementById("link1").classList.toggle("link-dark");
  document.getElementById("link2").classList.toggle("link-dark");
  document.getElementById("link3").classList.toggle("link-dark");
  document.getElementById("link4").classList.toggle("link-dark");
  document.getElementById("welcome-text").classList.toggle("welcome-text-dark");
  document.getElementById("welcome-section").classList.toggle("welcome-dark");
  document.getElementById("theme-sun").classList.toggle("link-dark");
  document.getElementById("theme-moon").classList.toggle("link-dark");
  document.getElementById("about").classList.toggle("about-dark");
  document.getElementById("skill1").classList.toggle("skill1-dark");
  document.getElementById("skill2").classList.toggle("skill2-dark");
  document.getElementById("skill3").classList.toggle("skill3-dark");
  document.getElementById("skill4").classList.toggle("skill4-dark");
  document.getElementById("logo").classList.toggle("logo-dark");
  document.getElementById("projects").classList.toggle("project-box-dark");
  document.getElementById("project1").classList.toggle("project-tile-dark");
  document.getElementById("project2").classList.toggle("project-tile-dark");
  document.getElementById("project3").classList.toggle("project-tile-dark");
  document.getElementById("project4").classList.toggle("project-tile-dark");
  document.getElementById("project5").classList.toggle("project-tile-dark");
  document.getElementById("proj-link1").classList.toggle("proj-link-dark");
  document.getElementById("proj-link2").classList.toggle("proj-link-dark");
  document.getElementById("proj-link3").classList.toggle("proj-link-dark");
  document.getElementById("proj-link4").classList.toggle("proj-link-dark");
  document.getElementById("proj-link5").classList.toggle("proj-link-dark");
  document.getElementById("proj-link6").classList.toggle("proj-link-dark");
  document.getElementById("proj-link7").classList.toggle("proj-link-dark");
  document.getElementById("proj-link8").classList.toggle("proj-link-dark");
  document.getElementById("proj-link9").classList.toggle("proj-link-dark");
  document.getElementById("proj-link10").classList.toggle("proj-link-dark");
  document.getElementById("up-to").classList.toggle("upto-dark");
  document.getElementById("contact").classList.toggle("contact-dark");
  document.getElementById("back-to-top").classList.toggle("back-to-top-dark");
} 

var nickName = document.getElementById("name");
nickName.addEventListener('animationiteration', nameChange);
function nameChange() 
{
  if(nickName.innerHTML==="CIPHER")
  {
    nickName.innerHTML = "EMMANUEL";
  }

  else if( nickName.innerHTML==="EMMANUEL")
  {
    nickName.innerHTML= "BIOLA"
  }

  else
  {
    nickName.innerHTML="CIPHER"
  }
    
}

var cip = $(".video").hover( hoverVideo, hideVideo );

function hoverVideo(e) {  
    $('video', this).get(0).play(); 
}

function hideVideo(e) {
    $('video', this).get(0).pause(); 
}