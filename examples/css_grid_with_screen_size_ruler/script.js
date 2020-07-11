function calculage_screen_size() {
  var width = window.innerWidth;
  var height = window.innerHeight;
  document.getElementById("display_width_area").innerHTML =
    " Width : " + width + " px ";
  document.getElementById("display_height_area").innerHTML =
    " Height : " + height + " px ";
}

calculage_screen_size();
window.addEventListener("resize", calculage_screen_size);
