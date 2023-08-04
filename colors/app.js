var colors = ["Orangered","Blue","Yellow","Green","Orange", "Cyan","DodgerBlue", "Violet", "Navy", "Purple", "YellowGreen", "OrangeRed", "SlateBlue", "Salmon", "Crimson", "HotPink", "Magenta"];
var index = 0;

function changeColor(){
  var colors = ["Red","Blue","Yellow","Green","Orange", "Cyan","DodgerBlue", "Violet", "Navy", "Purple", "YellowGreen", "OrangeRed", "SlateBlue", "Salmon", "Crimson", "HotPink", "Magenta"];

  document.getElementsByTagName("body")[0].style.background = colors[index++];

document.querySelector("#submit").addEventListener"click", () => {
  if(index > colors.length - 1)
    index = 0;
}document.body.style.backgroundColor = colors[index++];  
});