let buttons = document.getElementsByClassName("btn-lengrd");

buttons[0].addEventListener("mouseover", () => {
  
  document.getElementsByClassName("red")[0].style.color = "red";
});
buttons[1].addEventListener("mouseover", (e) => {
  let area = document.getElementsByClassName("red");
  area[1].style.color = "red";
});
buttons[2].addEventListener("mouseover", (e) => {
  let area = document.getElementsByClassName("red");
  area[2].style.color = "red";
});
buttons[3].addEventListener("mouseover", (e) => {
  let area = document.getElementsByClassName("red");
  area[3].style.color = "red";
});

buttons[0].addEventListener("mouseout", (e) => {
   let area = document.getElementsByClassName("red");
   area[0].style.color = "black";
 });buttons[1].addEventListener("mouseout", (e) => {
   let area = document.getElementsByClassName("red");
   area[1].style.color = "black";
 });buttons[2].addEventListener("mouseout", (e) => {
   let area = document.getElementsByClassName("red");
   area[2].style.color = "black";
 });buttons[3].addEventListener("mouseout", (e) => {
   let area = document.getElementsByClassName("red");
   area[3].style.color = "black";
 });
 