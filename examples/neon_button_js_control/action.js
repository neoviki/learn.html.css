var button_1 = document.getElementById("button_1");
var button_1_state = 0;

button_1.onclick = function () {
  if (button_1_state == 0) {
    button_1.style.color = "#111";
    button_1.style.backgroundColor = "#84e421";
    button_1_state = 1;
  } else {
    button_1.style.color = "#84e421";
    button_1.style.backgroundColor = "#000";
    button_1_state = 0;
  }

  alert("Button1 pressed");
};
