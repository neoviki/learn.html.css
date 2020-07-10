let element = document.getElementById("radial_dial_1");
let element1 = element.getElementsByClassName("value")[0];

let root = document.documentElement;

var x = 0,
  prev_x = 0,
  init_flag = 0;

var ctr = 0;

function mouse_event_listener() {
  root.addEventListener("mousemove", (e) => {
    x = e.clientX;
    if (init_flag == 0) {
      prev_x = x;
      init_flag = 1;
    }

    if (x > prev_x) {
      ctr = (ctr + (x - prev_x)) % 100;
    } else {
      ctr = ctr - (prev_x - x);
      if (ctr < 0) {
        ctr = 100;
      }
    }
    element.style.setProperty("--dial_position", ctr);
    prev_x = x;
  });
}

function Sleep(milliseconds) {
  return new Promise((resolve) => setTimeout(resolve, milliseconds));
}

async function animate_dial() {
  while (1) {
    ctr = (ctr + 1) % 100;
    element.style.setProperty("--dial_position", ctr);
    element1.innerHTML = ctr;
    await Sleep(100);
  }
}

//mouse_event_listener();
animate_dial();
