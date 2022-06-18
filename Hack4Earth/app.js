
const navigation = document.getElementById("navlinks");
const menu = document.getElementById("menu");

menu.addEventListener("click", () => {
  navigation.style.setProperty("--childenNumber", navigation.children.length);
  navigation.classList.toggle("active");
  menu.classList.toggle("active");
});




/*const downArrowArray = document.getElementsByClassName("fa-angle-down");
const questionArray = document.getElementsByClassName("question-summary");


for(let j = 0 ; j < questionArray.length ; j++)
{
    questionArray[j].addEventListener("click", () => {


    for(let i = 0 ; i < downArrowArray.length ; i++)
    {
      downArrowArray[i].classList.toggle("active");
    }

});
}*/