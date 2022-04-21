function darkMode() 
{
  //document.getElementById("navbar").classList.toggle("nav-class-light");
  //document.getElementById("main-doc").classList.toggle("main-doc-light");
  document.getElementById("link1").classList.toggle("link-dark");
  document.getElementById("link2").classList.toggle("link-dark");
  document.getElementById("link3").classList.toggle("link-dark");
  document.getElementById("link4").classList.toggle("link-dark");
  document.getElementById("welcome-text").classList.toggle("welcome-text-dark");
  document.getElementById("welcome-section").classList.toggle("welcome-dark");
  document.getElementById("theme-sun").classList.toggle("link-dark");
  document.getElementById("theme-moon").classList.toggle("link-dark");
  document.getElementById("about").classList.toggle("about-dark");
  document.getElementById("hobby1").classList.toggle("hobby1-dark");
  document.getElementById("hobby2").classList.toggle("hobby2-dark");
  document.getElementById("hobby3").classList.toggle("hobby3-dark");
  document.getElementById("hobby4").classList.toggle("hobby4-dark");
  document.getElementById("hobby5").classList.toggle("hobby5-dark");
  document.getElementById("hobby6").classList.toggle("hobby6-dark");
  document.getElementById("logo").classList.toggle("logo-dark");
  document.getElementById("projects").classList.toggle("project-dark");

  //document.getElementById("back-to-top").classList.toggle("back-to-top-dark");
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

