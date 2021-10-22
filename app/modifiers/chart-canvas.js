import { modifier } from 'ember-modifier';

export default modifier((canvas, [projects]) => /*, params, hash*/ {
  const ctx = canvas.getContext('2d');
  // const { width, height } = canvas.getBoundingClientRect();
  const nSides = 10;
  const nLevels = 5;
  const a = (2 * Math.PI) / nSides;
  const width = window.screen.width;
  const height = window.screen.height;
  // query
  let r = 40;
  let x_org = 400;
  let y_org = height / 3;
  ctx.canvas.width = width / 2;
  // responsive
  let isMobile = width < 650;
  if (width < 1600) {
    if (width < 1200) {
      if (width < 800) {
        if (isMobile) {
          if (width < 400) {
            r = 15;
            x_org = width / 2;
            y_org = height / 6;
            ctx.canvas.width = width;
            ctx.canvas.height = height / 3;
          } else {
            r = 20;
            x_org = width / 2;
            y_org = height / 5;
            ctx.canvas.width = width;
            ctx.canvas.height = height / 2.5;
          }
        } else {
          r = 30;
          x_org = width / 2;
          y_org = height / 4;
          ctx.canvas.width = width;
          ctx.canvas.height = height / 2;
        }
      } else {
        r = 30;
        x_org = width / 3;
        ctx.canvas.width = width / 1.25;
      }
    } else {
      r = 30;
      x_org = width / 4;
      // ctx.canvas.width = 800;
    }
  }

  let hex = [];
  const hex_color = '#ABABAB';
  console.log('init');
  init();
  console.log('angles name');
  // Back
  angleName('back', 'AWS - PHP - \nWordpress - MySQL', 'left', 'middle');
  angleName('front', 'HTML - CSS \n- JS - SCSS - jQuery', 'left', 'middle');
  angleName('js', 'Ember.js', 'left', 'top');
  angleName('flutter', 'Flutter', 'right', 'top');
  angleName('android', 'Java - Kotlin \n- Firebase', 'right', 'middle');
  angleName('linux', 'Linux - Shell - IOT', 'right', 'middle');
  angleName('python', 'Python - IOT \n- Beautiful Soup', 'right', 'middle');
  angleName('unity', 'C# - Game Design', 'right', 'bottom');
  angleName('design', 'Design Vector - UI/UX Design', 'left', 'bottom');
  angleName('animation', 'Motion Design - Illustration', 'left', 'middle');

  console.log('draw');
  projects.forEach((pjt) => {
    projectValuating(pjt);
  });

  console.log('end');

  function init() {
    for (let j = 0; j < nLevels + 1; j++) {
      hex[j] = {
        back: [],
        front: [],
        js: [],
        flutter: [],
        android: [],
        linux: [],
        python: [],
        unity: [],
        design: [],
        animation: [],
      };
      drawPolygon(x_org, y_org, (j + 1) * r, hex[j]);
    }
  }

  function angleName(key, name, align, baseline) {
    const margin = 20;
    const lineheight = 20;
    const h_margin = align === 'left' ? margin : -1 * margin;
    ctx.font = '0.75em Roboto, sans-serif';
    ctx.fillStyle = '#FEFEFE';
    ctx.textAlign = align;
    ctx.textBaseline = baseline;
    let lines;
    if (isMobile) {
      name = name.replace('\n', '');
      lines = name.split('-');
    } else {
      lines = name.split('\n');
    }
    for (var i = 0; i < lines.length; i++)
      ctx.fillText(
        lines[i],
        hex[nLevels][key][0] + h_margin,
        hex[nLevels][key][1] + i * lineheight
      );
  }

  function drawPolygon(x, y, r, hx) {
    ctx.beginPath();
    ctx.strokeStyle = hex_color;
    ctx.fillStyle = hex_color + '44';

    var i = 0;
    ctx.beginPath();
    for (const [key, value] of Object.entries(hx)) {
      hx[key] = [x + r * Math.cos(a * i), y + r * Math.sin(a * i)];
      if (key === 'back') {
        ctx.moveTo(hx.back[0], hx.back[1]);
      } else {
        ctx.lineTo(hx[key][0], hx[key][1]);
      }
      console.log(hx[key], i);
      i++;
    }
    ctx.stroke();
    ctx.fill();

    ctx.closePath();
    ctx.stroke();
  }

  function projectValuating(pjt) {
    console.log('color', pjt.color);
    ctx.beginPath();
    ctx.strokeStyle = pjt.color;
    ctx.fillStyle = pjt.color + '55';
    let i = 0;
    for (const [key, value] of Object.entries(pjt.skills)) {
      let v = parseInt(value.toString());
      if (key === 'back') {
        if (v < 0) {
          ctx.moveTo(x_org, y_org);
        } else {
          ctx.moveTo(hex[v].back[0], hex[v].back[1]);
        }
      } else {
        if (v < 0) {
          ctx.lineTo(x_org, y_org);
        } else {
          ctx.lineTo(hex[v][key][0], hex[v][key][1]);
        }
      }
      console.log(pjt[key], i);
      i++;
    }

    ctx.stroke();
    ctx.fill();

    ctx.closePath();
    ctx.stroke();
  }
});
