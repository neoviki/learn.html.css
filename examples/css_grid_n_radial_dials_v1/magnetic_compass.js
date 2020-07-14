/* Check the following for configuration options */

/* canvas-gauges.com/documentation/user-guide/configuration */
/* Do not keep numbers or boolean inside quotes, It should be used as it is  */
/* Reference : https://github.com/Mikhus/canvas-gauges/wiki/Gauge-API */
var dial_ctr = 0;
var blue_compass_obj;
var black_compass_obj;

function blue_compass(container_id, w, h) {
  dial_ctr += 1;
  var canvas_id = "compass_canvas_".concat(dial_ctr.toString());
  var cv = document.createElement("canvas");
  cv.setAttribute("id", canvas_id);
  cv.setAttribute("data-type", "radial-gauge");

  var main_container = document.getElementById(container_id);
  main_container.appendChild(cv);

  var guage_major_ticks_array = [];
  var guage_major_ticks_interval = 30;
  var guage_start_value = 0;
  var guage_end_value = 360;
  var guage_minor_ticks_interval = guage_major_ticks_interval / 2;
  var array_length = guage_end_value / guage_major_ticks_interval;

  for (i = 0; i < array_length; i++) {
    guage_major_ticks_array[i] = (i * guage_major_ticks_interval).toString();
  }

  guage_major_ticks_array[i] = guage_start_value.toString();
  console.log(guage_major_ticks_array);

  /*
  majorTicks: ["N", "NE", "E", "SE", "S", "SW", "W", "NW", "N"],
  minorTicks: 22,

  majorTicks: ["0", "45", "90", "135", "180", "225", "270", "315", "0"],

  */

  blue_compass_obj = new RadialGauge({
    renderTo: canvas_id,
    width: w,
    height: h,
    minValue: 0,
    maxValue: 360,
    majorTicks: guage_major_ticks_array,
    minorTicks: guage_minor_ticks_interval /* Every 5 degrees */,
    ticksAngle: 360,
    startAngle: 180,
    strokeTicks: false,
    highlights: false,
    colorPlate: "#21216F" /* blue plate color : #33a*/,
    colorMajorTicks: "#f5f5f5",
    colorMinorTicks: "#ddd",
    colorNumbers: "#ccc" /* grey = #ccc */,
    colorNeedle: "rgba(240, 128, 128, 1)",
    colorNeedleEnd: "rgba(255, 160, 122, .9)",
    valueBox: false,
    valueTextShadow: false,
    colorNeedleCircleInner: "#fff" /* #fff = white */,
    colorNeedleCircleOuter: "#ccc",
    needleCircleSize: 15,
    needleCircleOuter: false,
    animationRule: "linear",
    needleType: "line" /* arrow or line */,
    needleStart: 40 /*70 - needle tail length*/,
    needleEnd: 60 /*99 - needle head length */,
    needleWidth: 3,
    borders: true,
    borderInnerWidth: 0,
    borderMiddleWidth: 0,
    borderOuterWidth: 10,
    colorBorderOuter: "#ccc",
    colorBorderOuterEnd: "#ccc",
    colorNeedleShadowDown: "#222",
    borderShadowWidth: 0,
    animationTarget: "plate" /* needle or plate*/,
    units: "",
    title: "DIRECTION",
    fontTitleSize: 19,
    colorTitle: "#f5f5f5",
    animationDuration: 1500,
    value: 360,
    animateOnInit: true,
  });
  blue_compass_obj.draw();
}

function black_compass(container_id, w, h) {
  dial_ctr += 1;
  var canvas_id = "compass_canvas_".concat(dial_ctr.toString());
  var cv = document.createElement("canvas");
  cv.setAttribute("id", canvas_id);
  cv.setAttribute("data-type", "radial-gauge");

  var main_container = document.getElementById(container_id);
  main_container.appendChild(cv);

  var guage_major_ticks_array = [];
  var guage_major_ticks_interval = 30;
  var guage_start_value = 0;
  var guage_end_value = 360;
  var guage_minor_ticks_interval = 22;
  var array_length = guage_end_value / guage_major_ticks_interval;

  guage_major_ticks_array = ["N", "NE", "E", "SE", "S", "SW", "W", "NW", "N"];
  console.log(guage_major_ticks_array);

  /*
  majorTicks: ["N", "NE", "E", "SE", "S", "SW", "W", "NW", "N"],
  minorTicks: 22,

  majorTicks: ["0", "45", "90", "135", "180", "225", "270", "315", "0"],

  */

    black_compass_obj = new RadialGauge({
    renderTo: canvas_id,
    width: w,
    height: h,
    minValue: 0,
    maxValue: 360,
    majorTicks: guage_major_ticks_array,
    minorTicks: guage_minor_ticks_interval,
    ticksAngle: 360,
    startAngle: 180,
    strokeTicks: false,
    highlights: false,
    colorPlate: "#000" /* black color */,
    colorMajorTicks: "#f5f5f5",
    colorMinorTicks: "#ddd",
    colorNumbers: "#ccc" /* grey = #ccc */,
    colorNeedle: "rgba(240, 128, 128, 1)",
    colorNeedleEnd: "rgba(255, 160, 122, .9)",
    valueBox: false,
    valueTextShadow: false,
    colorNeedleCircleInner: "#fff" /* #fff = white */,
    colorNeedleCircleOuter: "#ccc",
    needleCircleSize: 15,
    needleCircleOuter: false,
    animationRule: "linear",
    needleType: "line" /* arrow or line */,
    needleStart: 40 /*70 - needle tail length*/,
    needleEnd: 60 /*99 - needle head length */,
    needleWidth: 3,
    borders: true,
    borderInnerWidth: 0,
    borderMiddleWidth: 0,
    borderOuterWidth: 10,
    colorBorderOuter: "#ccc",
    colorBorderOuterEnd: "#ccc",
    colorNeedleShadowDown: "#222",
    borderShadowWidth: 0,
    animationTarget: "plate" /* needle or plate*/,
    units: "",
    title: "DIRECTION",
    fontTitleSize: 19,
    colorTitle: "#f5f5f5",
    animationDuration: 1500,
    value: 360,
    animateOnInit: true,
  });
  black_compass_obj.draw();
}

function update_blue_compass_value(degrees) {
  blue_compass_obj.value = degrees;
}

function update_black_compass_value(degrees) {
  black_compass_obj.value = degrees;
}

function display_current_value() {
  var value = blue_compass_obj.value;
  console.log(value);
  var value = black_compass_obj.value;
  console.log(value);
}

blue_compass("magnetic_compass_area_1", 200, 200);
black_compass("magnetic_compass_area_2", 200, 200);
update_blue_compass_value(0);
update_black_compass_value(0);
display_current_value();
