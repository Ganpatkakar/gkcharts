function css(el, styles) {
    for (var property in styles) {
      el.style[property] = styles[property];
    }
  }
  
  
  class ChartSurface {
  
    ratio(canvasContainer) {
      let ctx = canvasContainer.getContext('2d');
      let dpr = window.devicePixelRatio || 1; 1
      let bsr = ctx.webkitBackingStorePixelRatio || ctx.mozBackingStorePixelRatio || ctx.msBackingStorePixelRatio || ctx.oBackingStorePixelRatio || ctx.backingStorePixelRatio || 1;
      // return dpr / bsr;
      return 2;
    }
  
    prepSurface(nr, width, height, container) {
      try {
        console.log("Start : prepSurface");
        var canvas = document.createElement("CANVAS");
        canvas.id = 'canvas' + nr;
        canvas.setAttribute('class', 'canvas');
        canvas.setAttribute("style", "position:absolute");
        var container = document.getElementById(container);
        container.appendChild(canvas);
  
        var canvasDom = document.getElementById('canvas' + nr);
        canvasDom.width = width * this.ratio(canvasDom);
        canvasDom.height = height * this.ratio(canvasDom);
        canvasDom.style.width = width + "px";
        canvasDom.style.height = height + "px";
  
        // document.getElementById('container').append('<canvas id="canvas' + nr + '" class="canvas"' +
        //     ' style="position:absolute;" width="' + width + '" height="' + height + '"></canvas> ');
        console.log("End : prepSurface");
      } catch (e) {
        console.log("error occured in prepareSurface : ", e);
      }
    }
  
    prepUI(nr) {
      try {
        console.log("Start : prepUI");
        //console.log(nr);
        var canvas = document.getElementById('canvas' + nr);
        var ctx = canvas.getContext('2d');
        ctx.font = "23px arial";
        ctx.lineWidth = 1;
        console.log("End : prepUI");
        return ctx;
      } catch (e) {
        console.log("error occured in prepUI : ", e);
      }
    }
  
    preparePlot(nr, sizex, sizey, container) {
      try {
        console.log("Start : preparePlot");
        this.prepSurface(nr, sizex, sizey, container);
        var canvasContext = this.prepUI(nr);
        console.log("End : preparePlot");
        return canvasContext;
      } catch (e) {
        console.log("error occured in preparePlot : ", e);
      }
    }
  
    prepSurfaceupper(nr, width, height, container) {
      try {
        console.log("Start : prepSurfaceupper");
        var container = document.getElementById(container);
        var innerCotent = '<canvas id="canvasupper' + nr + '" class="canvas" style="position:absolute;" width="' + width + '" height="' + height + '"></canvas>         '
        innerCotent += '<div class="canvasjs-chart-tooltip" style="position: absolute; height: auto; box-shadow: rgba(0, 0, 0, 0.0980392) 1px 1px 2px 2px; z-index: 1000; display: none; border-radius: 5px; transition: left 0.2s ease-out, bottom 0.2s ease-out;"> '
        innerCotent += '<div style="width: auto; height: auto; min-width: 50px; margin: 0px; padding: 5px; font-family: Calibri, Arial, Georgia, serif; font-weight: normal; font-style: italic; color: rgb(0, 0, 0); text-shadow: rgba(0, 0, 0, 0.0980392) 1px 1px 1px; text-align: left; border: 2px solid rgb(127, 96, 132); text-indent: 0px; white-space: nowrap; border-radius: 5px; -webkit-user-select: none; background: rgba(255, 255, 255, 0.901961);">'
        innerCotent += '<span style="color:#7F6084;"></span>'
        innerCotent += '</div></div>'
        container.insertAdjacentHTML('beforeend', innerCotent);
  
        var canvasDom = document.getElementById('canvasupper' + nr);
        canvasDom.width = width * this.ratio(canvasDom);
        canvasDom.height = height * this.ratio(canvasDom);
        canvasDom.style.width = width + "px";
        canvasDom.style.height = height + "px";
  
        //container.innerHTML = '<canvas id="canvasupper'+nr+'" width="'+width+'" height="'+height+'"></canvas>'
        //document.write();
        console.log("End : prepSurfaceupper");
      } catch (e) {
        console.log("error occured in prepSurfaceupper : ", e);
      }
    }
  
    prepUIUpper(nr) {
      try {
        console.log("Start : prepUIUpper");
        var canvas = document.getElementById('canvasupper' + nr);
        var ctx = canvas.getContext('2d');
        //ctx.font = '18px Arial';
        ctx.lineWidth = 1;
        console.log("End : prepUIUpper");
        return ctx;
      } catch (e) {
        console.log("error occured in prepUIUpper : ", e);
      }
    }
  
    preparePlotUpper(nr, sizex, sizey, container) {
      try {
        console.log("Start : preparePlotUpper");
        this.prepSurfaceupper(nr, sizex, sizey, container);
        var canvasContext = this.prepUIUpper(nr);
        console.log("End : preparePlotUpper");
        return canvasContext;
      } catch (e) {
        console.log("error occured in preparePlotUpper : ", e);
      }
    }
  
  }
  
  function drawGrid(nr, verticanNr, ctx, data) {
    try {
      console.log("Start : drawGrid");
      var canvas = document.getElementById('canvas' + nr);
      var hei = canvas.height - 60;
      //console.log("canvas height to draw grid lines:" + hei);
      var wid = canvas.width - 100;
      //console.log("canvas width to draw grid lines:" + wid);
      ctx.beginPath();
      ctx.fillStyle = "#000";
  
      var spacingVertical = hei / verticanNr;
      //console.log("canvas vertical spacings to draw grid lines:" + spacingVertical);
      var spacingHorizontal = wid / data[0].datapoints.length;
      //console.log("canvas horizontal spacings to draw grid lines:" + spacingHorizontal);
      /*console.log(spacingVertical + 20);
       console.log(wid);*/
      var barwidth = 0;
      if (data.length > 1) {
        barwidth = (spacingHorizontal - 30) / data.length;
      } else {
        barwidth = 30;
      }
      if (barwidth > 30) {
        barwidth = 30;
      }
      /*Vertical grid*/
      // Vartical first grid row
      ctx.beginPath();
      ctx.lineWidth = 2;
      ctx.strokeStyle = 'rgba(0,0,0,1)';
      ctx.moveTo(100, 0);
      ctx.lineTo(100, hei + 10);
      ctx.stroke();
  
      // vartical other grid rows
      for (var i = 0; i < data[0].datapoints.length; i++) {
        ctx.beginPath();
        ctx.moveTo(i * spacingHorizontal + spacingHorizontal / 2 + 100, hei);
        ctx.lineTo(i * spacingHorizontal + spacingHorizontal / 2 + 100, hei + 10);
        ctx.stroke();
      }
      ctx.beginPath();
      ctx.moveTo(wid + 99, hei);
      ctx.lineTo(wid + 99, hei + 10);
      ctx.stroke();
  
      /*Horizontal grid*/
      for (var i = 0; i < verticanNr + 1; i++) {
        ctx.beginPath();
        ctx.strokeStyle = 'rgba(0,0,0,.2)';
        ctx.lineWidth = .4;
        if (i == verticanNr) {
          ctx.lineWidth = 2;
          ctx.strokeStyle = 'rgba(0,0,0,1)';
        }
        ctx.moveTo(90, i * spacingVertical);
        ctx.lineTo(wid + 100, i * spacingVertical);
        ctx.stroke();
        ctx.strokeStyle = 'rgba(0,0,0,.2)';
      }
      console.log("End : drawGrid");
      return barwidth;
    } catch (e) {
      console.log("error occurred in drawGrid : ", e);
    }
  }
  
  function drawGraphicLinearYcord(canvas, ctx, verticalNr, cdata) {
    try {
      console.log("Start : drawGraphicLinearYcord");
      //console.log(cdata);
      var canvas = document.getElementById(canvas);
      var hei = canvas.height - 60;
      var wid = canvas.width - 100;
      var spacingVertical = hei / verticalNr;
      var spacingHorizontal = wid / cdata.data[0].datapoints.length;
      //console.log(spacingHorizontal);
      ctx.beginPath();
      ctx.fillStyle = "#000";
      ctx.save();
      ctx.translate(0, canvas.height / 2);
      ctx.rotate(-Math.PI / 2);
      ctx.textAlign = "center";
      if (cdata.yaxis.title === undefined) {
        cdata.yaxis.title = "Y-Axis"
      }
      ctx.fillText(cdata.yaxis.title, 0, 20);
  
      ctx.restore();
      /* xaxis Horizontal Documents*/
      ctx.save();
      //ctx.font = "18px";
      var xangle;
      for (var i = 0; i < cdata.data[0].datapoints.length; i++) {
        if (ctx.measureText(cdata.data[0].datapoints[i].label).width > spacingHorizontal / 1.1) {
          xangle = 'angular';
          /*angular*/
          break;
        } else if (ctx.measureText(cdata.data[0].datapoints[i].label).width < spacingHorizontal / 2) {
          xangle = 'straight';
          /*straight*/
        }
      }
      if (xangle === 'angular') {
        for (var i = 0; i < cdata.data[0].datapoints.length; i++) {
          ctx.translate(i * spacingHorizontal + 104, hei + 8);
          ctx.rotate(Math.PI / 4);
          ctx.fillText(cdata.data[0].datapoints[i].label, 0, 0);
          //console.log(cdata.xaxis.categories[i], i*spacingHorizontal, hei-spacingVertical);
          ctx.rotate(-Math.PI / 4);
          ctx.translate(-(i * spacingHorizontal + 104), -(hei + 8));
        }
      } else {
        for (var i = 0; i < cdata.data[0].datapoints.length; i++) {
          let textWidth = ctx.measureText(cdata.data[0].datapoints[i].label).width;
          let fromLeft = (i * spacingHorizontal + spacingHorizontal / 2 + 100) - textWidth / 2;
          ctx.fillText(cdata.data[0].datapoints[i].label, fromLeft, hei + 35);
        }
      }
      //ctx.restore();
  
      /* yaxis Vertical Documents*/
      ctx.save();
      for (var i = 0; i < verticalNr + 1; i++) {
        var max = cdata.yaxis.max;
        var min = cdata.yaxis.min;
        var difference = cdata.yaxis.difference;
        ctx.fillText(i * difference + min, 35, canvas.height - (i * spacingVertical + 40));
      }
      //ctx.restore();
      ctx.closePath();
      console.log("End : drawGraphicLinearYcord");
    } catch (e) {
      console.log("error occurred in drawGraphicLinearYcord : ", e);
    }
  
  }
  
  class DrawChart {
  
    drawGraphicLinear(canvas, ctx, verticalNr, data, range, chartColor, linecord) {
      try {
        console.log("Start : drawGraphicLinear");
        var canvas = document.getElementById(canvas);
        var hei = canvas.height - 60;
        var wid = canvas.width - +100
        var spacingVertical = hei / verticalNr;
        //console.log("spacingVertical:" + spacingVertical);
        var spacingHorizontal = wid / data.datapoints.length;
        //console.log("spacingHorizontal:" + spacingHorizontal);
  
        var totalRange = range[1] - range[0];
        var verticalCoefficient = hei / totalRange;
        ctx.beginPath();
        var localLineCords = [];
        for (var i = 0; i < data.datapoints.length; i++) {
          var newobj = {
            x: i * spacingHorizontal + spacingHorizontal / 2 + 100,
            y: hei - (data.datapoints[i].y - range[0]) * verticalCoefficient,
            label: data.datapoints[i].label,
            dataLabel: data.dataLabel,
            dataval: data.datapoints[i].y
          };
          //console.log(newobj);
          // This linecord contains multiple charts data ponts for the visualization purpose of on hover.
          linecord.push(newobj);
          // To differentiate between multiple line chart data points and current line chart data points.
          localLineCords.push(newobj);
        }
        var t = 0;
        var differencePoints = 25;
        var points = calcWaypoints(localLineCords);
  
        function calcWaypoints(vertices) {
          var waypoints = [];
          for (var i = 1; i < vertices.length; i++) {
            var pt0 = vertices[i - 1];
            var pt1 = vertices[i];
            var dx = pt1.x - pt0.x;
            var dy = pt1.y - pt0.y;
            for (var j = 0; j < differencePoints; j++) {
              var x = pt0.x + dx * j / differencePoints;
              var y = pt0.y + dy * j / differencePoints;
              waypoints.push({
                x: x,
                y: y
              });
            }
          }
          return (waypoints);
        }
  
        points.push(localLineCords[localLineCords.length - 1]);
  
        animate();
        console.log("points.length", points.length);
        function animate() {
          if (t < points.length - 1) {
            requestAnimationFrame(animate);
          }
          ctx.lineWidth = 3;
          ctx.beginPath();
          ctx.globalAlpha = 1;
          ctx.strokeStyle = chartColor;
          if (t == 0) {
            ctx.moveTo(points[t].x, points[t].y);
          } else {
            ctx.moveTo(points[t - 1].x, points[t - 1].y);
            ctx.lineTo(points[t].x, points[t].y);
          }
          ctx.stroke();
          // increment "t" to get the next waypoint
          if (t % differencePoints == 0 || t == points.length - 1) {
            commonCodeCircle();
          }
          if (data.fill) {
            let p = {};
            if (t) {
              p = points.slice(t - 1, t + 1);
            }
            fillAreaCall(p);
          }
          t += 1;
        }
  
  
        function commonCodeCircle() {
          ctx.beginPath();
          ctx.fillStyle = chartColor;
          ctx.arc(points[t].x, points[t].y, 8, 0, 2 * Math.PI);
          ctx.fill();
          ctx.stroke();
          ctx.closePath();
        }
  
        function fillAreaCall(vertices) {
          ctx.beginPath();
          if (vertices.length) {
            ctx.moveTo(vertices[0].x, hei);
          }
          for (let points = 0; points < vertices.length; points++) {
            ctx.lineTo(vertices[points].x, vertices[points].y + 4);
          }
          if (vertices.length) {
            ctx.lineTo(vertices[vertices.length - 1].x, hei);
          }
          ctx.closePath();
          ctx.globalAlpha = 0.1;
          ctx.fillStyle = chartColor;
          ctx.fill();
        }
        ctx.globalAlpha = 1;
        console.log("End : drawGraphicLinear");
        return linecord;
      } catch (e) {
        console.log("error occured in drawGraphicLinear : ", e);
      }
    };
  
    drawStepchart(canvas, ctx, verticalNr, data, range, chartColor, linecord) {
      try {
        console.log("Start : drawStepchart");
        var canvas = document.getElementById(canvas);
        var hei = canvas.height - 60;
        var wid = canvas.width - +100
        var spacingVertical = hei / verticalNr;
        var spacingHorizontal = wid / data.datapoints.length;
  
        var totalRange = range[1] - range[0];
        var verticalCoefficient = hei / totalRange;
  
        ctx.beginPath();
        var localLineCords = [];
        for (var i = 0; i < data.datapoints.length; i++) {
          var newobj = {
            x: i * spacingHorizontal + spacingHorizontal / 2 + 100,
            y: hei - (data.datapoints[i].y - range[0]) * verticalCoefficient,
            label: data.datapoints[i].label,
            dataLabel: data.dataLabel,
            dataval: data.datapoints[i].y
          };
          //console.log(newobj);
          linecord.push(newobj);
          localLineCords.push(newobj);
        }
  
        ctx.beginPath();
        ctx.globalAlpha = 1;
        ctx.strokeStyle = chartColor;
        let lPoints = []
        for (var i = 0; i < localLineCords.length; i++) {
          if (i == 0) {
            lPoints.push({ x: localLineCords[i].x, y: localLineCords[i].y })
          } else {
            lPoints.push({ x: localLineCords[i].x, y: localLineCords[i - 1].y })
            lPoints.push({ x: localLineCords[i].x, y: localLineCords[i].y })
          }
        }
  
        var t = 0;
        var differencePoints = 15;
        var points = calcWaypoints(lPoints);
  
        function calcWaypoints(vertices) {
          var waypoints = [];
          for (var i = 1; i < vertices.length; i++) {
            var pt0 = vertices[i - 1];
            var pt1 = vertices[i];
            var dx = pt1.x - pt0.x;
            var dy = pt1.y - pt0.y;
            for (var j = 0; j < differencePoints; j++) {
              var x = pt0.x + dx * j / differencePoints;
              var y = pt0.y + dy * j / differencePoints;
              waypoints.push({
                x: x,
                y: y
              });
            }
          }
          return (waypoints);
        }
  
        points.push(localLineCords[localLineCords.length - 1]);
  
        animate();
        console.log("points.length", points.length);
        function animate() {
          ctx.lineWidth = 3;
          ctx.beginPath();
          ctx.globalAlpha = 1;
          ctx.strokeStyle = chartColor;
          if (t < points.length - 1) {
            requestAnimationFrame(animate);
          }
          // draw a line segment from the last waypoint
          // to the current waypoint
          ctx.beginPath();
          if (t == 0) {
            ctx.moveTo(points[t].x, points[t].y);
          } else {
            ctx.moveTo(points[t - 1].x, points[t - 1].y);
            ctx.lineTo(points[t].x, points[t].y);
          }
          ctx.stroke();
          // increment "t" to get the next waypoint
          if (t % (differencePoints * 2) == 0 || t == points.length - 1) {
            commonCodeCircle();
          }
          if (data.fill) {
            let p = {};
            if (t) {
              p = points.slice(t - 1, t + 1);
            }
            fillAreaCall(p);
          }
          t += 1;
        }
  
        function fillAreaCall(vertices) {
          ctx.beginPath();
          if (vertices.length) {
            ctx.moveTo(vertices[0].x, hei);
          }
          for (let points = 0; points < vertices.length; points++) {
            ctx.lineTo(vertices[points].x, vertices[points].y + 4);
          }
          if (vertices.length) {
            ctx.lineTo(vertices[vertices.length - 1].x, hei);
          }
          ctx.closePath();
          ctx.globalAlpha = 0.1;
          ctx.fillStyle = chartColor;
          ctx.fill();
        }
  
        function commonCodeCircle() {
          ctx.beginPath();
          ctx.fillStyle = chartColor;
          ctx.arc(points[t].x, points[t].y, 8, 0, 2 * Math.PI);
          ctx.fill();
          ctx.stroke();
          ctx.closePath();
        }
        ctx.globalAlpha = 1;
  
        console.log("End : drawStepchart");
        return linecord;
      } catch (e) {
        console.log("error occured in drawGraphicLinear : ", e);
      }
    };
  
    drawBar(canvas, ctx, verticalNr, data, range, curx, chartColor, linecord, barwidth, barChartCount) {
      try {
        console.log("Start : drawBar");
        var canvas = document.getElementById(canvas);
        var hei = canvas.height - 60;
        var wid = canvas.width - 100;
        var spacingHorizontal = wid / data.datapoints.length;
        var totalRange = range[1] - range[0];
        var verticalCoefficient = hei / totalRange;
        ctx.beginPath();
        let localLinecord = [];
        for (var i = 0; i < data.datapoints.length; i++) {
          var rectHeight = (hei - (data.datapoints[i].y - range[0]) * verticalCoefficient);
          let barChartWidth = barChartCount * barwidth + (barChartCount - 1) * 5
          let fromLeft = (i * spacingHorizontal + spacingHorizontal / 2 + curx) - barChartWidth / 2;
          var newobj = {
            x: fromLeft,
            y: rectHeight,
            wid: barwidth,
            hei: hei - rectHeight,
            label: data.datapoints[i].label,
            dataLabel: data.dataLabel,
            dataval: data.datapoints[i].y
          };
          linecord.push(newobj);
          localLinecord.push(newobj);
        }
        ctx.closePath();
        let points = calcWaypoints(localLinecord);
        function calcWaypoints(points){
          let wayPoints = [];
          for(let i = 0; i < points.length; i++){
            let x1 = points[i].x;
            let totalHeight = hei;
            let rectHeight = points[i].hei;
            let currentHeight = 0;
            //console.log(rectHeight);
            let newWayPoint = [];
            while(currentHeight <=  rectHeight ){
              newWayPoint.push({x: x1, y : totalHeight-currentHeight, hei: currentHeight, wid: barwidth});
              let difference = rectHeight - currentHeight;
              currentHeight += (difference < 15 && difference > 0) ? difference : 15;
            }
            wayPoints.push(newWayPoint);
          }
          return (wayPoints);
        }
        for(let i = 0 ; i < points.length; i++){
          let t = 0;
          let cColor = chartColor;
          animate(points[i], t, cColor);
        }
        function animate(animateArr, t, cColor){
          ctx.beginPath();
          ctx.globalAlpha = 1;
          ctx.fillStyle = cColor;
          ctx.fillRect(animateArr[t].x, animateArr[t].y, animateArr[t].wid, animateArr[t].hei);
          //ctx.stroke();
          ctx.closePath();
          t = t+1;
          if(t < animateArr.length){
            requestAnimationFrame(animate.bind(this, animateArr, t, cColor));
          }
        }
        //console.log("Bar Chart Waypoints", points);
        console.log("End : drawBar");
        return linecord;
      } catch (e) {
        console.log("error occured in drawBar : ", e);
      }
    };
  
    drawPie(canvas, ctx, verticalNr, data, range, chartColor, linecord) {
      try {
        console.log("Start : drawPie");
        var canvas = document.getElementById(canvas);
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        var lastend = 0;
        var myTotal = 0; // Automatically calculated so don't touch
        var radius = canvas.height / 2;
        for (var e = 0; e < data.datapoints.length; e++) {
          myTotal += data.datapoints[e].y;
        }
        for (var i = 0; i < data.datapoints.length; i++) {
          ctx.fillStyle = data.datapoints[i].color;
          ctx.beginPath();
          ctx.moveTo(canvas.width / 2, canvas.height / 2);
          if (data.datapoints[i].y == 0) {
            ctx.arc(canvas.width / 2, canvas.height / 2, canvas.height / 2, lastend, lastend + (Math.PI * 2 * (data.datapoints[i].y / myTotal)), false);
            //console.log(canvas.width / 2, canvas.height / 2, canvas.height / 2, lastend, lastend + (Math.PI * 2 * (data.datapoints[i].y / myTotal)));
            ctx.lineTo(canvas.width / 2, canvas.height / 2);
            ctx.strokeStyle = '1';
            ctx.strokeStyle = '#fff';
            ctx.stroke();
          }
          ctx.arc(canvas.width / 2, canvas.height / 2, canvas.height / 2, lastend, lastend + (Math.PI * 2 * (data.datapoints[i].y / myTotal)), false);
          //console.log(canvas.width / 2, canvas.height / 2, canvas.height / 2, lastend, lastend + (Math.PI * 2 * (data.datapoints[i].y / myTotal)));
          ctx.lineTo(canvas.width / 2, canvas.height / 2);
          var newobj = {
            wid: canvas.width,
            hei: canvas.height,
            startangle: lastend,
            lastangle: lastend + (Math.PI * 2 * (data.datapoints[i].y / myTotal)),
            label: data.datapoints[i].label,
            y: data.datapoints[i].y
          };
          //console.log(newobj);
          linecord.push(newobj);
          lastend += Math.PI * 2 * (data.datapoints[i].y / myTotal);
          //console.log(lastend);
          ctx.fill();
        }
        /* Draw piechart number values and numbers*/
        var angle = 0;
        var x = Math.floor(canvas.width / 2);
        var y = Math.floor(canvas.height / 2);
        ctx.fillStyle = "#fff";
        ctx.font = radius * 0.10 + "px arial";
        var anglenew;
        for (i = 0; i < data.datapoints.length; i++) {
          if (data.datapoints[i].y != 0) {
            anglenew = (Math.PI * 2 * (data.datapoints[i].y / myTotal));
            var anglemiddle = anglenew / 3;
            var fx = canvas.width / 2 + (radius * .7) * Math.cos(angle + anglemiddle);
            var fy = radius + (radius * .7) * Math.sin(angle + anglemiddle);
            //ctx.moveTo(x, y);
            ctx.translate(fx, fy);
            //ctx.rotate(angle + anglemiddle);
            ctx.fillText(data.datapoints[i].y.toString(), 0, 0 /*x + radius / 1.3, y*/);
            ctx.translate(-fx, -fy);
            angle += (Math.PI * 2 * (data.datapoints[i].y / myTotal));
          }
        }
        console.log("End : drawPie");
        return linecord;
      } catch (e) {
        console.log("error occured in drawPie : ", e);
      }
    }
  
    drawDonut(canvas, ctx, verticalNr, data, range, chartColor, linecord, chartHeight) {
      try {
        console.log("Start : drawDonut");
        var canvas = document.getElementById(canvas);
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        var linewidth = chartHeight / 4;
        var radius = canvas.height / 2 - linewidth;
        ctx.lineWidth = linewidth * 2;
        var lastend = 0;
        var myTotal = 0; // Automatically calculated so don't touch
        for (var e = 0; e < data.datapoints.length; e++) {
          myTotal += data.datapoints[e].y;
        }
        for (var i = 0; i < data.datapoints.length; i++) {
          if (data.datapoints[i].y == 0) {
            ctx.beginPath();
            ctx.arc(canvas.width / 2, canvas.height / 2, radius, lastend, lastend + (Math.PI * 2 * (data.datapoints[i].y / myTotal)), false);
            ctx.strokeStyle = '#fff';
            ctx.stroke()
          }
          ctx.strokeStyle = data.datapoints[i].color;
          ctx.beginPath();
          //ctx.moveTo(canvas.width / 2, canvas.height / 2);
          ctx.arc(canvas.width / 2, canvas.height / 2, radius, lastend, lastend + (Math.PI * 2 * (data.datapoints[i].y / myTotal)), false);
          //console.log(canvas.width / 2, canvas.height / 2, canvas.height / 2, lastend, lastend + (Math.PI * 2 * (data.datapoints[i].y / myTotal)));
          //ctx.lineTo(canvas.width / 2, canvas.height / 2);
          var newobj = {
            hei: canvas.height,
            wid: canvas.width,
            startangle: lastend,
            lastangle: lastend + (Math.PI * 2 * (data.datapoints[i].y / myTotal)),
            label: data.datapoints[i].label,
            y: data.datapoints[i].y
          };
          //console.log(newobj);
          linecord.push(newobj);
          lastend += Math.PI * 2 * (data.datapoints[i].y / myTotal);
          //console.log(lastend);
          //ctx.fill();
          ctx.stroke();
        }
        /* Draw piechart number values */
        var angle = 0;
        var x = Math.floor(canvas.width / 2);
        var y = Math.floor(canvas.height / 2);
        ctx.fillStyle = "#fff";
        ctx.font = radius * 0.12 + "px arial";
        var anglenew;
        for (i = 0; i < data.datapoints.length; i++) {
          if (data.datapoints[i].y != 0) {
            anglenew = (Math.PI * 2 * (data.datapoints[i].y / myTotal));
            var anglemiddle = anglenew / 3;
            var fx = (canvas.width / 2) + radius * Math.cos(angle + anglemiddle);
            var fy = (radius * 1.5) + radius * Math.sin(angle + anglemiddle);
            //ctx.moveTo(x, y);
            ctx.translate(fx, fy);
            //ctx.rotate(angle + anglemiddle);
            ctx.fillText(data.datapoints[i].y.toString(), 0, 0 /*x + radius / 1.3, y*/);
            ctx.translate(-fx, -fy);
            angle += (Math.PI * 2 * (data.datapoints[i].y / myTotal));
          }
        }
        console.log("End : drawDonut");
        return linecord;
      } catch (e) {
        console.log("error occured in drawDonut : ", e);
      }
    }
  
    drawMeter(canvas, ctx, verticalNr, data, range, chartColor, ChartDataToShow) {
      try {
        console.log("Start : drawMeter");
        var linecord = [];
        var canvas = document.getElementById(canvas);
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        var linewidth = 50;
        ctx.lineWidth = 4;
        var lastend = 3.141592653589793;
        var myTotal = 0; // Automatically calculated so don't touch
        var radius = canvas.height / 2 - linewidth;
        for (var e = 0; e < data.datapoints.length; e++) {
          myTotal += data.datapoints[e].y;
        }
        for (var i = 0; i < data.datapoints.length; i++) {
          ctx.strokeStyle = "#fff";
          ctx.fillStyle = data.datapoints[i].color;
          ctx.beginPath();
          ctx.moveTo(canvas.width / 2, canvas.height / 2);
          ctx.arc(canvas.width / 2, canvas.height / 2, radius, lastend, lastend + (Math.PI * (data.datapoints[i].y / myTotal)));
          //console.log(canvas.width / 2, canvas.height / 2, canvas.height / 2, lastend, lastend + (Math.PI * 2 * (data.datapoints[i].y / myTotal)));
          ctx.lineTo(canvas.width / 2, canvas.height / 2);
          ctx.fill();
          ctx.stroke();
          var newobj = {
            x: canvas.width / 2,
            startangle: lastend,
            lastangle: lastend + (Math.PI * (data.datapoints[i].y / myTotal)),
            label: data.datapoints[i].label
          };
          linecord.push(newobj);
          lastend += Math.PI * (data.datapoints[i].y / myTotal);
        }
        //console.log(linecord);
        ctx.beginPath();
        ctx.fillStyle = "#fff";
        ctx.arc(canvas.width / 2, canvas.height / 2, radius * 0.7, 0, 2 * Math.PI);
        ctx.fill();
        ctx.closePath();
        ctx.beginPath();
        ctx.fillStyle = "#000";
        ctx.arc(canvas.width / 2, canvas.height / 2, radius * 0.1, 0, 2 * Math.PI);
        ctx.fill();
        ctx.closePath();
        ctx.beginPath();
        var rotateangel = Math.PI * (ChartDataToShow / 100) + 3.141592653589793;
        //console.log(rotateangel);
        var headlen = 10;
        ctx.lineWidth = 6;
        ctx.lineCap = "round";
        var tox = canvas.width / 2 + (radius * .8) * Math.cos(rotateangel);
        var toy = canvas.height / 2 + (radius * .8) * Math.sin(rotateangel);
        var fromx = canvas.width / 2;
        var fromy = canvas.height / 2;
        ctx.moveTo(canvas.width / 2, canvas.height / 2);
        ctx.lineTo(tox, toy);
        ctx.strokeStyle = "#000";
        ctx.stroke();
        ctx.beginPath();
        ctx.fillStyle = "#fff";
        ctx.arc(canvas.width / 2, canvas.height / 2, radius * 0.07, 0, 2 * Math.PI);
        ctx.fill();
        ctx.closePath();
  
        /* Draw piechart number values */
        var angle = 3.141592653589793;
        var x = Math.floor(canvas.width / 2);
        var y = Math.floor(canvas.height / 2);
        ctx.fillStyle = "#000";
        ctx.font = "18px Arial";
        ctx.save();
  
        /*Text in data format loop*/
        var anglenew;
        for (i = 0; i < data.datapoints.length; i++) {
          anglenew = (Math.PI * 2 * (data.datapoints[i].y / myTotal)) / 2;
          var anglemiddle = anglenew / 6;
          /*ctx.translate(x, y);
           ctx.rotate(angle + anglemiddle);
           ctx.translate(-x, -y);
           ctx.fillText(data.datapoints[i].label.toString(), x + radius, y);
           angle = (Math.PI * (data.datapoints[i].y / myTotal)) - anglemiddle;*/
          //console.log(angle);
  
          var fx = canvas.width / 2 + (radius * 1.01) * Math.cos(angle + anglemiddle);
          var fy = canvas.height / 2 + (radius * 1.01) * Math.sin(angle + anglemiddle);
          ctx.translate(fx, fy);
          ctx.rotate(angle + 1.8);
          ctx.fillText(data.datapoints[i].label.toString(), 0, 0);
          ctx.rotate(-(angle + 1.8));
          ctx.translate(-fx, -fy);
          angle += (Math.PI * (data.datapoints[i].y / myTotal));
        }
        ctx.restore();
        console.log("End : drawMeter");
        return linecord;
      } catch (e) {
        console.log("error occured in drawMeter : ", e);
      }
    }
  
    bezierPointsCalc(a, f) {
      for (var b = [], c, e = 0; e < a.length; e++)
        if (0 == e)
          b.push(a[0]);
        else {
          var g, h, l;
          l = e - 1;
          g = 0 === l ? 0 : l - 1;
          h = l === a.length - 1 ? l : l + 1;
          c = Math.abs((a[h].x - a[g].x) / (0 === a[h].x - a[l].x ? 0.01 : a[h].x - a[l].x)) * (f - 1) / 2 + 1;
          var t = (a[h].x - a[g].x) / c;
          c = (a[h].y - a[g].y) / c;
          b[b.length] = a[l].x > a[g].x && 0 < t || a[l].x < a[g].x && 0 > t ? {
            x: a[l].x + t / 3,
            y: a[l].y + c / 3
          } : {
              x: a[l].x,
              y: a[l].y + c / 9
            };
          l = e;
          g = 0 === l ? 0 : l - 1;
          h = l === a.length - 1 ? l : l + 1;
          c = Math.abs((a[h].x - a[g].x) / (0 === a[l].x - a[g].x ? 0.01 : a[l].x - a[g].x)) * (f - 1) / 2 + 1;
          t = (a[h].x - a[g].x) / c;
          c = (a[h].y - a[g].y) / c;
          b[b.length] = a[l].x > a[g].x && 0 < t || a[l].x < a[g].x && 0 > t ? {
            x: a[l].x - t / 3,
            y: a[l].y - c / 3
          } : {
              x: a[l].x,
              y: a[l].y - c / 9
            };
          b[b.length] = a[e]
        }
      return b
    }
  
    drawsplinechart(canvas, ctx, verticalNr, data, range, chartColor, linecord) {
      try {
        console.log("Start : drawGraphicLinear");
        var canvas = document.getElementById(canvas);
        var hei = canvas.height - 60;
        var wid = canvas.width - +100
        var spacingVertical = hei / verticalNr;
        //console.log("spacingVertical:" + spacingVertical);
        var spacingHorizontal = wid / data.datapoints.length;
        //console.log("spacingHorizontal:" + spacingHorizontal);
  
        var totalRange = range[1] - range[0];
        var verticalCoefficient = hei / totalRange;
        var mov;
        ctx.strokeStyle = chartColor;
        ctx.globalAlpha = 1;
        var localLineCords = [];
  
        for (let i = 0; i < data.datapoints.length; i++) {
          var newobj = {
            x: i * spacingHorizontal + spacingHorizontal / 2 + 100,
            y: hei - (data.datapoints[i].y - range[0]) * verticalCoefficient,
            label: data.datapoints[i].label,
            dataLabel: data.dataLabel,
            dataval: data.datapoints[i].y
          };
          //console.log(newobj);
          linecord.push(newobj);
          localLineCords.push(newobj);
        }
  
        ctx.closePath();
        var f = 2;
        var a = this.bezierPointsCalc(localLineCords, f);
        console.log(a);
        
        // for (var i = 1; i <= a.length-3; i += 3) {
        //   ctx.bezierCurveTo(a[i].x, a[i].y, a[i + 1].x, a[i + 1].y, a[i + 2].x, a[i + 2].y);
        // }
        let difference = 25
        var points = calcWaypoints(a);
        function calcWaypoints(vertices) {
            var waypoints = [];
            for (var i = 1; i < vertices.length; i+=3) {
                let startPt = {x: vertices[i-1].x, y:vertices[i-1].y}
                let ct1 = {x: vertices[i].x, y:vertices[i].y}
                let ct2 = {x: vertices[i+1].x, y:vertices[i+1].y}
                let endPt = {x: vertices[i+2].x, y:vertices[i+2].y}
                for (var t = 0; t < difference; t++) {
                    let pointers = getQuadraticBezierXYatT(startPt, ct1, ct2, endPt, t/difference);
                    waypoints.push({
                        x: pointers.x,
                        y: pointers.y
                    });
                }
            }
            return (waypoints);
        }
  
        function getQuadraticBezierXYatT(startPt, ct1, ct2, endPt, t) {
          let x = Math.pow(1-t, 3) * startPt.x + 3*Math.pow(1-t, 2) * t * ct1.x + 3*(1-t) * Math.pow(t,2) * ct2.x + Math.pow(t,3) * endPt.x
          let y = Math.pow(1-t, 3) * startPt.y + 3*Math.pow(1-t, 2) * t * ct1.y + 3*(1-t) * Math.pow(t,2) * ct2.y + Math.pow(t,3) * endPt.y 
          return( {x:x,y:y} );
        }
  
        points.push(localLineCords[localLineCords.length-1]);
  
        let i = 0;
        //ctx.beginPath();
        animate(points);
        function animate(points){
            if(i < points.length-1){
                requestAnimationFrame(animate.bind(this, points));
            }
            ctx.lineWidth = 3;
            ctx.beginPath();
            ctx.globalAlpha = 1;
            ctx.strokeStyle = chartColor;
            if (i == 0) {
              ctx.moveTo(points[i].x, points[i].y);
            } else {
              ctx.moveTo(points[i - 1].x, points[i - 1].y);
              ctx.lineTo(points[i].x, points[i].y);
            }
            ctx.stroke();
  
            if (i % difference == 0 || i == points.length - 1) {
              commonCodeCircle();
            }
  
            if (data.fill) {
              let p = {};
              if (i) {
                p = points.slice(i - 1, i + 1);
              }
              fillAreaCall(p);
            }
  
            i = i + 1;
        }
  
        function commonCodeCircle() {
          ctx.beginPath();
          ctx.fillStyle = chartColor;
          ctx.arc(points[i].x, points[i].y, 8, 0, 2 * Math.PI);
          ctx.fill();
          ctx.strokeStyle = chartColor;
          ctx.stroke();
        }
  
        function fillAreaCall(vertices) {
          ctx.beginPath();
          if (vertices.length) {
            ctx.moveTo(vertices[0].x, hei);
          }
          for (let points = 0; points < vertices.length; points++) {
            ctx.lineTo(vertices[points].x, vertices[points].y + 4);
          }
          if (vertices.length) {
            ctx.lineTo(vertices[vertices.length - 1].x, hei);
          }
          ctx.closePath();
          ctx.globalAlpha = 0.1;
          ctx.fillStyle = chartColor;
          ctx.fill();
        }
        ctx.globalAlpha = 1;
  
        // if (data.fill) {
        //   ctx.beginPath();
        //   ctx.moveTo(a[0].x, hei);
        //   ctx.lineTo(a[0].x, a[0].y);
        //   for (let i = 1; i < a.length; i += 3) {
        //     ctx.bezierCurveTo(a[i].x, a[i].y, a[i + 1].x, a[i + 1].y, a[i + 2].x, a[i + 2].y);
        //   }
        //   ctx.lineTo(a[a.length - 1].x, hei);
        //   ctx.globalAlpha = 0.2;
        //   ctx.fillStyle = chartColor;
        //   ctx.closePath();
        //   ctx.fill();
        // }
        //ctx.globalAlpha = 1;
        console.log("End : drawsplinechart");
        return linecord;
      } catch (e) {
        console.log("error occured in drawsplinechart : ", e);
      }
    };
  }
  
  class DrawChartUpperCanvas {
    constructor() {
    }
  
    ratio(ctx) {
      var dpr = window.devicePixelRatio || 1;
      var bsr = ctx.webkitBackingStorePixelRatio || ctx.mozBackingStorePixelRatio || ctx.msBackingStorePixelRatio || ctx.oBackingStorePixelRatio || ctx.backingStorePixelRatio || 1;
      return 2;
      //return dpr / bsr;
    }
  
    lineChartUpperCanvas(nr, ctx, width, height, linecord, container, charttype) {
      try {
        console.log("Start : lineChartUpperCanvas");
        document.getElementById('canvasupper' + nr).addEventListener('mousemove', function (evt) {
          ctx.clearRect(0, 0, document.getElementById('canvasupper' + nr).width, document.getElementById('canvasupper' + nr).height);
          var mousePos = getMousePos(document.getElementById('canvasupper' + nr), evt);
          /*var message = 'Mouse position: ' + mousePos.x + ',' + mousePos.y;
          console.log(message);*/
          for (var i = 0; i < linecord.length; i++) {
            ctx.beginPath();
            ctx.arc(linecord[i].x, linecord[i].y, 7, 0, 2 * Math.PI);
            if (ctx.isPointInStroke(mousePos.x, mousePos.y) || ctx.isPointInPath(mousePos.x, mousePos.y)) {
              //console.log("lineChart compar mouse over on upper canvas");
              ctx.lineWidth = 5;
              ctx.strokeStyle = 'rgba(0,0,0,.7)';
              ctx.stroke();
              //ctx.fill();
              css(document.querySelector('#' + container + ' .canvasjs-chart-tooltip'), {
                "left": linecord[i].x / this.ratio(ctx) + "px",
                "top": linecord[i].y / this.ratio(ctx) + "px",
                "display": "block"
              });
              document.querySelector('#' + container + ' .canvasjs-chart-tooltip div').innerHTML =
                linecord[i].dataLabel + " <br /> " + linecord[i].label + ' : ' + linecord[i].dataval;
              break;
            } else {
              ctx.clearRect(0, 0, document.getElementById('canvasupper' + nr).width, document.getElementById('canvasupper' + nr).height);
              css(document.querySelector('#' + container + ' .canvasjs-chart-tooltip'), {
                'display': 'none'
              });
            }
            ctx.closePath();
          }
        }.bind(this), false);
        console.log("End : lineChartUpperCanvas");
      } catch (e) {
        console.log("error occurred in lineChartUpperCanvas : ", e);
      }
    }
  
    barChartUpperCanvas(nr, ctx, width, height, linecord, container, charttype) {
      try {
        console.log("Start : barChartUpperCanvas");
        document.getElementById('canvasupper' + nr).addEventListener('mousemove', function (evt) {
          ctx.clearRect(0, 0, document.getElementById('canvasupper' + nr).width, document.getElementById('canvasupper' + nr).height);
          var mousePos = getMousePos(document.getElementById('canvasupper' + nr), evt);
          //console.log(mousePos);
          /*var message = 'Mouse position: ' + mousePos.x + ',' + mousePos.y;
          console.log(message);*/
          for (var i = 0; i < linecord.length; i++) {
            ctx.beginPath();
            ctx.rect(linecord[i].x, linecord[i].y, linecord[i].wid, linecord[i].hei);
            if (ctx.isPointInStroke(mousePos.x, mousePos.y) || ctx.isPointInPath(mousePos.x, mousePos.y)) {
              ctx.lineWidth = .5;
              ctx.fillStyle = 'rgba(0,0,0,.3)';
              ctx.fill();
              ctx.stroke();
              css(document.querySelector('#' + container + ' .canvasjs-chart-tooltip'), {
                "left": linecord[i].x / this.ratio(ctx) + "px",
                "top": linecord[i].y / this.ratio(ctx) + "px",
                "display": "block"
              });
              document.querySelector('#' + container + ' .canvasjs-chart-tooltip div').innerHTML =
                linecord[i].dataLabel + " <br /> " + linecord[i].label + ' : ' + linecord[i].dataval;
              break;
            } else {
              ctx.clearRect(0, 0, document.getElementById('canvasupper' + nr).width, document.getElementById('canvasupper' + nr).height);
            }
          }
        }.bind(this), false);
        document.getElementById('canvasupper' + nr).addEventListener('mouseout', function (evt) {
          setTimeout(function () {
            css(document.querySelector('#' + container + ' .canvasjs-chart-tooltip'), {
              'display': 'none'
            });
          }, 2000);
        });
        console.log("End : barChartUpperCanvas");
      } catch (e) {
        console.log("error occurred in barChartUpperCanvas : ", e);
      }
    }
  
    pieChartUpperCanvas(nr, ctx, width, height, linecord, container, charttype) {
      try {
        console.log("Start : pieChartUpperCanvas");
        document.getElementById('canvasupper' + nr).addEventListener('mousemove', function (evt) {
          ctx.clearRect(0, 0, document.getElementById('canvasupper' + nr).width, document.getElementById('canvasupper' + nr).height);
          var mousePos = getMousePos(document.getElementById('canvasupper' + nr), evt);
          /*var message = 'Mouse position: ' + mousePos.x + ',' + mousePos.y;
          console.log(message);*/
          for (var i = 0; i < linecord.length; i++) {
            ctx.beginPath();
            ctx.lineTo(linecord[i].wid / 2, linecord[i].hei / 2);
            ctx.arc(linecord[i].wid / 2, linecord[i].hei / 2, linecord[i].hei / 2, linecord[i].startangle, linecord[i].lastangle, false);
            ctx.lineTo(linecord[i].x, linecord[i].x);
            if (ctx.isPointInStroke(mousePos.x, mousePos.y) || ctx.isPointInPath(mousePos.x, mousePos.y)) {
              /*ctx.lineWidth=1;
               ctx.stroke();*/
              ctx.fillStyle = 'rgba(0,0,0,.3)';
              ctx.fill();
              css(document.querySelector('#' + container + ' .canvasjs-chart-tooltip'), {
                'display': 'block',
                'left': mousePos.x / this.ratio(ctx) + "px",
                'top': mousePos.y / this.ratio(ctx) + "px"
              });
              document.querySelector('#' + container + ' .canvasjs-chart-tooltip div').innerHTML = linecord[i].label + ' : ' + linecord[i].y;
  
              break;
            } else {
              ctx.clearRect(0, 0, document.getElementById('canvasupper' + nr).width, document.getElementById('canvasupper' + nr).height);
            }
          }
        }.bind(this), false);
        document.getElementById('canvasupper' + nr).addEventListener('mouseout', function (evt) {
          setTimeout(function () {
            ctx.clearRect(0, 0, document.getElementById('canvasupper' + nr).width, document.getElementById('canvasupper' + nr).height);
            css(document.querySelector('#' + container + ' .canvasjs-chart-tooltip'), {
              'display': 'none'
            });
          }, 2000);
        });
        console.log("End : pieChartUpperCanvas");
      } catch (e) {
        console.log("error occurred in pieChartUpperCanvas : ", e);
      }
    }
  
    donutChartUpperCanvas(nr, ctx, width, height, linecord, container, charttype) {
      try {
        console.log("Start : donutChartUpperCanvas");
        document.getElementById('canvasupper' + nr).addEventListener('mousemove', function (evt) {
          ctx.clearRect(0, 0, document.getElementById('canvasupper' + nr).width, document.getElementById('canvasupper' + nr).height);
          var linewidth = 80;
          var mousePos = getMousePos(document.getElementById('canvasupper' + nr), evt);
          /*var message = 'Mouse position: ' + mousePos.x + ',' + mousePos.y;
          console.log(message);*/
          for (var i = 0; i < linecord.length; i++) {
            var radius = linecord[i].hei / 2 - linewidth;
            ctx.lineWidth = linewidth * 2;
            ctx.beginPath();
            //ctx.lineTo(linecord[i].x, linecord[i].x);
            ctx.arc(linecord[i].wid / 2, linecord[i].hei / 2, radius, linecord[i].startangle, linecord[i].lastangle, false);
            //ctx.lineTo(linecord[i].x, linecord[i].x);
            if (ctx.isPointInStroke(mousePos.x, mousePos.y)) {
              /*ctx.lineWidth=1;*/
              ctx.strokeStyle = "rgba(0,0,0,0.2)";
              ctx.stroke();
              css(document.querySelector('#' + container + ' .canvasjs-chart-tooltip'), {
                'display': 'block',
                'left': mousePos.x / this.ratio(ctx) + "px",
                'top': mousePos.y / this.ratio(ctx) + "px"
              });
              document.querySelector('#' + container + ' .canvasjs-chart-tooltip div').innerHTML = linecord[i].label + ' : ' + linecord[i].y;
              break;
            }
            if (!(ctx.isPointInStroke(mousePos.x, mousePos.y))) {
              ctx.clearRect(0, 0, document.getElementById('canvasupper' + nr).width, document.getElementById('canvasupper' + nr).height);
            }
          }
        }.bind(this), false);
        document.getElementById('canvasupper' + nr).addEventListener('mouseout', function (evt) {
          setTimeout(function () {
            ctx.clearRect(0, 0, document.getElementById('canvasupper' + nr).width, document.getElementById('canvasupper' + nr).height);
            css(document.querySelector('#' + container + ' .canvasjs-chart-tooltip'), {
              'display': 'none'
            });
          }, 2000);
        });
        console.log("End : donutChartUpperCanvas");
      } catch (e) {
        console.log("error occurred in donutChartUpperCanvas : ", e);
      }
    }
  }
  
  function enumerateIt(nr, hei, spacv, spach) {
    try {
      console.log("Start : enumerateIt");
      var data = data2;
      ctx.fillStyle = text;
      for (var i = 0; i < data.length; i++) {
        ctx.fillText(i + 1, spach * i + 4, hei + 2 * spacv + 20);
      }
      console.log("End : enumerateIt");
    } catch (e) {
      console.log("error occurred in enumerateIt : ", e);
    }
  }
  
  function writeMessage(canvas, message) {
    try {
      console.log("Start : writeMessage");
      //ctx.font = '18px Arial';
      ctx.fillStyle = 'black';
      ctx.fillText(message, 10, 25);
      console.log("End : writeMessage");
    } catch (e) {
      console.log("error occurred in writeMessage : ", e);
    }
  }
  
  function getMousePos(canvas, evt) {
    try {
      //console.log("Start : getMousePos");
      var rect = canvas.getBoundingClientRect();
      return {
        x: (evt.clientX - rect.left) / (rect.right - rect.left) * canvas.width,
        y: (evt.clientY - rect.top) / (rect.bottom - rect.top) * canvas.height
      };
      //console.log("End : getMousePos");
    } catch (e) {
      console.log("error occurred in getMousePos : ", e);
    }
  }
  
  function PrintContent(event, canvasWidth, canvasHeight) {
    //console.log(event);
    let elem = event.target.parentNode;
    let dataUrl = document.querySelector('#' + elem.id + " canvas").toDataURL();
  
    let windowContent = '<!DOCTYPE html>';
    windowContent += '<html>';
    windowContent += '<head><title>Print canvas</title></head>';
    windowContent += '<body>';
    windowContent += elem.innerHTML;
    windowContent += '<img width="' + canvasWidth + '" height="' + canvasHeight + '" src="' + dataUrl + '">';
    windowContent += '</body>';
    windowContent += '</html>';
  
    const printWin = window.open('', '', 'width=' + screen.availWidth + ',height=' + screen.availHeight);
    printWin.document.open();
    printWin.document.write(windowContent);
  
    printWin.document.addEventListener('load', function () {
      printWin.focus();
      printWin.print();
      printWin.document.close();
      printWin.close();
    }, true);
  }
  
  class chartCalling {
    constructor() {
      this.chartSurface = new ChartSurface();
      this.drawChart = new DrawChart();
      this.drawUpperChart = new DrawChartUpperCanvas();
    }
  
    lineChart(chart, chartID) {
      try {
        console.log("Start : lineChart");
        //console.log(chart);
        chart.container = chartID;
        chart.chartnumber = chartID;
        let ChartContainer = document.querySelector("#" + chart.container);
        chart.wid = ChartContainer.clientWidth - 10;
        chart.hei = ChartContainer.clientHeight - 33;
        //console.log("chart.wid :" + chart.wid + ", chart.hei : " + chart.hei);
  
        let titleAndPrintButton = ''
        if (chart.config.title != undefined) {
          titleAndPrintButton += '<h2 class="chartTitle">' + chart.config.title + '</h2>';
        }
        if (chart.config.printEnable != undefined && chart.config.printEnable == true) {
          titleAndPrintButton += '<button style="position: absolute;right: 25px;margin-top:-65px;border-radius:4px;border:1px solid #000" id="print_' + chartID + '">Print</button>'
        }
        ChartContainer.innerHTML = titleAndPrintButton;
  
        let ctx_base = this.chartSurface.preparePlot(chart.chartnumber, chart.wid, chart.hei, chart.container);
        (chart.yaxis === undefined) ? chart.yaxis = {} : null
        if (chart.yaxis.max === undefined && chart.yaxis.min === undefined) {
          chart.yaxis.max = parseInt(chart.data[0].datapoints[0].y);
          chart.yaxis.min = parseInt(chart.data[0].datapoints[0].y);
          for (var i = 0; i < chart.data.length; i++) {
            for (var j = 0; j < chart.data[i].datapoints.length; j++) {
              if (parseInt(chart.data[i].datapoints[j].y) < chart.yaxis.min) {
                chart.yaxis.min = parseInt(chart.data[i].datapoints[j].y);
              }
              if (parseInt(chart.data[i].datapoints[j].y) > chart.yaxis.max) {
                chart.yaxis.max = parseInt(chart.data[i].datapoints[j].y);
              }
            }
          }
          chart.yaxis.max += 10;
          (chart.yaxis.min >= 10) ? chart.yaxis.min += -10 : null
        }
        if (chart.yaxis.difference === undefined) {
          chart.yaxis.difference = Math.floor((chart.yaxis.max - chart.yaxis.min) / 8);
        }
        let verticaldevisions = Math.floor((chart.yaxis.max - chart.yaxis.min) / chart.yaxis.difference);
        //console.log("verticaldevisions" + verticaldevisions);
        drawGrid(chart.chartnumber, verticaldevisions, ctx_base, chart.data);
        let canvas = 'canvas' + chart.chartnumber;
        let maxdata = [chart.yaxis.min, chart.yaxis.max];
        let linecord = [];
        for (var i = 0; i < chart.data.length; i++) {
          this.drawChart.drawGraphicLinear(canvas, ctx_base, verticaldevisions, chart.data[i], maxdata, chart.data[i].chartColor, linecord);
        }
  
        drawGraphicLinearYcord(canvas, ctx_base, verticaldevisions, chart);
        console.log(linecord);
        let ctx_upper = this.chartSurface.preparePlotUpper(chart.chartnumber, chart.wid, chart.hei, chart.container);
        this.drawUpperChart.lineChartUpperCanvas(chart.chartnumber, ctx_upper, chart.wid, chart.hei, linecord, chart.container, chart.type);
        console.log("End : lineChart");
        if (chart.config.printEnable != undefined && chart.config.printEnable == true) {
          document.querySelector("#" + chartID + " #print_" + chartID).addEventListener('click', function (event) {
            PrintContent(event, chart.wid, chart.hei);
          });
        }
  
      } catch (err) {
        console.error("Exception occurred in line chart module:  " + err.message);
      }
    }
  
    barChart(chart, chartID) {
      try {
        console.log("Start : barChart");
        chart.container = chartID;
        chart.chartnumber = chartID;
        let ChartContainer = document.querySelector("#" + chart.container);
        chart.wid = ChartContainer.clientWidth - 10;
        chart.hei = ChartContainer.clientHeight - 33;
  
        let titleAndPrintButton = ''
        if (chart.config.title != undefined) {
          titleAndPrintButton += '<h2 class="chartTitle">' + chart.config.title + '</h2>';
        }
        if (chart.config.printEnable != undefined && chart.config.printEnable == true) {
          titleAndPrintButton += '<button style="position: absolute;right: 25px;margin-top:-65px;border-radius:4px;border:1px solid #000" id="print_' + chartID + '">Print</button>'
        }
        ChartContainer.innerHTML = titleAndPrintButton;
  
        let ctx_base = this.chartSurface.preparePlot(chart.chartnumber, chart.wid, chart.hei, chart.container);
        (chart.yaxis === undefined) ? chart.yaxis = {} : null
  
        if (chart.yaxis.max === undefined && chart.yaxis.min === undefined) {
          chart.yaxis.max = parseInt(chart.data[0].datapoints[0].y);
          chart.yaxis.min = parseInt(chart.data[0].datapoints[0].y);
          for (var i = 0; i < chart.data.length; i++) {
            for (var j = 0; j < chart.data[i].datapoints.length; j++) {
              if (parseInt(chart.data[i].datapoints[j].y) < chart.yaxis.min) {
                chart.yaxis.min = parseInt(chart.data[i].datapoints[j].y);
              }
              if (parseInt(chart.data[i].datapoints[j].y) > chart.yaxis.max) {
                chart.yaxis.max = parseInt(chart.data[i].datapoints[j].y);
              }
            }
          }
          chart.yaxis.max += 10;
          (chart.yaxis.min >= 10) ? chart.yaxis.min += -10 : null
        }
        if (chart.yaxis.difference === undefined) {
          chart.yaxis.difference = Math.floor((chart.yaxis.max - chart.yaxis.min) / 8);
        }
        let verticaldevisions = Math.floor((chart.yaxis.max - chart.yaxis.min) / chart.yaxis.difference);
        //console.log("verticaldevisions" + verticaldevisions);
        let barwidth = drawGrid(chart.chartnumber, verticaldevisions, ctx_base, chart.data);
        //console.log("barwidth:" + barwidth);
        let canvas = 'canvas' + chart.chartnumber;
        let rangedata = [chart.yaxis.min, chart.yaxis.max];
        //console.log("maxdata:" + maxdata);
        let linecord = [];
        let nextcurve = 100;
        let barChartCount = chart.data.length;
        for (var i = 0; i < chart.data.length; i++) {
          this.drawChart.drawBar(canvas, ctx_base, verticaldevisions, chart.data[i], rangedata, nextcurve, chart.data[i].chartColor, linecord, barwidth, barChartCount);
          nextcurve += barwidth + 5;
          //this.drawChart.drawGraphicLinear(canvas, ctx_base, verticaldevisions, chart.data[i], maxdata, chart.data[i].chartColor, linecord);
        }
        drawGraphicLinearYcord(canvas, ctx_base, verticaldevisions, chart);
        //console.log(linecord);
        let ctx_upper = this.chartSurface.preparePlotUpper(chart.chartnumber, chart.wid, chart.hei, chart.container);
        this.drawUpperChart.barChartUpperCanvas(chart.chartnumber, ctx_upper, chart.wid, chart.hei, linecord, chart.container, chart.type);
        console.log("End : barChart");
        if (chart.config.printEnable != undefined && chart.config.printEnable == true) {
          document.querySelector("#" + chartID + " #print_" + chartID).addEventListener('click', function (event) {
            PrintContent(event, chart.wid, chart.hei);
          });
        }
      } catch (err) {
        console.error("Exception occurred in bar chart module:  " + err.message);
      }
    }
  
    pieChart(chart, chartID) {
      try {
        console.log("Start : pieChart");
        chart.container = chartID;
        var chartContainerSelector = document.querySelector("#" + chart.container);
        let ChartContainer = document.querySelector("#" + chart.container);
        chart.chartnumber = chartID;
        chart.wid = chartContainerSelector.clientWidth;
        chart.hei = chartContainerSelector.clientHeight - 33;
  
        let chartHeight = chart.hei;
  
        if (chart.hei > chart.wid) {
          chartHeight = chart.wid;
        }
  
        let titleAndPrintButton = ''
        if (chart.config.title != undefined) {
          titleAndPrintButton += '<h2 class="chartTitle">' + chart.config.title + '</h2>';
        }
        if (chart.config.printEnable != undefined && chart.config.printEnable == true) {
          titleAndPrintButton += '<button style="position: absolute;right: 25px;margin-top:-65px;border-radius:4px;border:1px solid #000" id="print_' + chartID + '">Print</button>'
        }
        ChartContainer.innerHTML = titleAndPrintButton;
  
        let ctx_base = this.chartSurface.preparePlot(chart.chartnumber, chart.wid, chartHeight, chart.container);
        //drawGrid(chart.chartnumber, 10, ctx_base, chart.data);
        let canvas = 'canvas' + chart.chartnumber;
        let maxdata = [];
        maxdata[0] = maxdata[1] = chart.data[0].datapoints[0].y;
        for (var i = 0; i < chart.data.length; i++) {
          for (var j = 0; j < chart.data[i].datapoints.length; j++) {
            if (chart.data[i].datapoints[j].y < maxdata[0]) {
              maxdata[0] = chart.data[i].datapoints[j].y;
            }
            if (chart.data[i].datapoints[j].y > maxdata[1]) {
              maxdata[1] = chart.data[i].datapoints[j].y;
            }
          }
        }
        console.log(maxdata);
        var linecord = [];
        for (var i = 0; i < chart.data.length; i++) {
          this.drawChart.drawPie(canvas, ctx_base, 10, chart.data[i], maxdata, chart.data[i].chartColor, linecord);
        }
        //console.log(linecord);
        let ctx_upper = this.chartSurface.preparePlotUpper(chart.chartnumber, chart.wid, chartHeight, chart.container);
        this.drawUpperChart.pieChartUpperCanvas(chart.chartnumber, ctx_upper, chart.wid, chartHeight, linecord, chart.container, chart.type);
  
        var pieChartDataDisplay = '<ul style="list-style: none; width: ' + chart.wid + 'px; padding: 0px; display: inline-block; position: relative; top: ' + chart.hei + 'px">'
        for (var i = 0; i < chart.data[0].datapoints.length; i++) {
          pieChartDataDisplay += '<li style="width: 50%; float: left">' +
            '<span style="width:20px; height: 10px; display: inline-block; margin-right: 10px; background-color:' + chart.data[0].datapoints[i].color + '; border: 1px solid black; border-radius: 2px;"></span>' +
            '<span>' + chart.data[0].datapoints[i].label + ' : ' + chart.data[0].datapoints[i].y + '</span>' +
            '</li>'
        }
        pieChartDataDisplay += '</ul>'
        chartContainerSelector.insertAdjacentHTML('beforeend', pieChartDataDisplay);
        if (chart.config.printEnable != undefined && chart.config.printEnable == true) {
          document.querySelector("#" + chartID + " #print_" + chartID).addEventListener('click', function (event) {
            PrintContent(event, chart.wid, chart.hei);
          });
        }
        console.log("End : pieChart");
      } catch (err) {
        console.error("Exception occurred in pie chart module:  " + err.message);
      }
    }
  
    donutChart(chart, chartID) {
      try {
        console.log("Start : donutChart");
        chart.container = chartID;
        let chartContainerSelector = document.querySelector("#" + chart.container);
        let ChartContainer = document.querySelector("#" + chart.container);
        chart.chartnumber = chartID;
        chart.wid = chartContainerSelector.clientWidth;
        chart.hei = chartContainerSelector.clientHeight - 33;
  
        let chartHeight = chart.hei;
  
        if (chart.hei > chart.wid) {
          chartHeight = chart.wid;
        }
  
        let titleAndPrintButton = ''
        if (chart.config.title != undefined) {
          titleAndPrintButton += '<h2 class="chartTitle">' + chart.config.title + '</h2>';
        }
        if (chart.config.printEnable != undefined && chart.config.printEnable == true) {
          titleAndPrintButton += '<button style="position: absolute;right: 25px;margin-top:-65px;border-radius:4px;border:1px solid #000" id="print_' + chartID + '">Print</button>'
        }
        ChartContainer.innerHTML = titleAndPrintButton;
        let ctx_base = this.chartSurface.preparePlot(chart.chartnumber, chart.wid, chartHeight, chart.container);
        drawGrid(chart.chartnumber, 10, ctx_base, chart.data);
        let canvas = 'canvas' + chart.chartnumber;
        let maxdata = [];
        maxdata[0] = maxdata[1] = chart.data[0].datapoints[0].y;
        for (var i = 0; i < chart.data.length; i++) {
          for (var j = 0; j < chart.data[i].datapoints.length; j++) {
            if (chart.data[i].datapoints[j].y < maxdata[0]) {
              maxdata[0] = chart.data[i].datapoints[j].y;
            }
            if (chart.data[i].datapoints[j].y > maxdata[1]) {
              maxdata[1] = chart.data[i].datapoints[j].y;
            }
          }
        }
        //console.log(maxdata);
        let linecord = [];
        let linewidth = 60;
        for (let i = 0; i < chart.data.length; i++) {
          this.drawChart.drawDonut(canvas, ctx_base, 10, chart.data[i], maxdata, chart.data[i].chartColor, linecord, chartHeight);
        }
        //console.log(linecord);
        let ctx_upper = this.chartSurface.preparePlotUpper(chart.chartnumber, chart.wid, chartHeight, chart.container);
        this.drawUpperChart.donutChartUpperCanvas(chart.chartnumber, ctx_upper, chart.wid, chartHeight, linecord, chart.container, chart.type);
  
        var pieChartDataDisplay = '<ul style="list-style: none; width: ' + chart.wid + 'px; padding: 0px; display: inline-block; position: relative; top: ' + chart.hei + 'px">'
        for (let i = 0; i < chart.data[0].datapoints.length; i++) {
          pieChartDataDisplay += '<li style="width: 50%; float: left">' +
            '<span style="width:20px; height: 10px; display: inline-block; margin-right: 10px; background-color:' + chart.data[0].datapoints[i].color + '; border: 1px solid black; border-radius: 2px;"></span>' +
            '<span>' + chart.data[0].datapoints[i].label + ' : ' + chart.data[0].datapoints[i].y + '</span>' +
            '</li>'
        }
        pieChartDataDisplay += '</ul>';
        chartContainerSelector.insertAdjacentHTML('beforeend', pieChartDataDisplay);
        if (chart.config.printEnable != undefined && chart.config.printEnable == true) {
          document.querySelector("#" + chartID + " #print_" + chartID).addEventListener('click', function (event) {
            PrintContent(event, chart.wid, chart.hei);
          });
        }
        console.log("End : donutChart");
      } catch (err) {
        console.error("Exception occurred in donut chart module:  " + err.message);
      }
    }
  
    meterChart(chart, chartID) {
      try {
        console.log("Start : meterChart");
        chart.container = chartID;
        chart.chartnumber = chartID;
        let ChartContainer = document.querySelector("#" + chart.container);
        chart.wid = ChartContainer.clientWidth - 10;
        chart.hei = ChartContainer.clientHeight - 33;
  
        let titleAndPrintButton = ''
        if (chart.config.title != undefined) {
          titleAndPrintButton += '<h2 class="chartTitle">' + chart.config.title + '</h2>';
        }
        if (chart.config.printEnable != undefined && chart.config.printEnable == true) {
          titleAndPrintButton += '<button style="position: absolute;right: 25px;margin-top:-65px;border-radius:4px;border:1px solid #000" id="print_' + chartID + '">Print</button>'
        }
        ChartContainer.innerHTML = titleAndPrintButton;
        let ctx_base = this.chartSurface.preparePlot(chart.chartnumber, chart.wid, chart.hei, chart.container);
        drawGrid(chart.chartnumber, 10, ctx_base, chart.data);
        let canvas = 'canvas' + chart.chartnumber;
        let maxdata = [];
        maxdata[0] = maxdata[1] = chart.data[0].datapoints[0].y;
        let meterTotal = 0;
        for (let j = 0; j < chart.data[0].datapoints.length; j++) {
          if (chart.data[0].datapoints[j].y < maxdata[0]) {
            maxdata[0] = chart.data[0].datapoints[j].y;
          }
          if (chart.data[0].datapoints[j].y > maxdata[1]) {
            maxdata[1] = chart.data[0].datapoints[j].y;
          }
          meterTotal += chart.data[0].datapoints[j].y;
        }
        console.log("meterTotal " + meterTotal);
        let ChartDataToShow = chart.data[0].dataval;
        let linewidth = 50;
        ChartDataToShow = Math.round((ChartDataToShow / meterTotal) * 100);
        //console.log(ChartDataToShow);
        this.drawChart.drawMeter(canvas, ctx_base, 10, chart.data[0], maxdata, chart.data[0].chartColor, ChartDataToShow);
        if (chart.config.printEnable != undefined && chart.config.printEnable == true) {
          document.querySelector("#" + chartID + " #print_" + chartID).addEventListener('click', function (event) {
            PrintContent(event, chart.wid, chart.hei);
          });
        }
        console.log("End : meterChart");
      } catch (err) {
        console.error("Exception occurred in  meter chart module:  " + err.message);
      }
    }
  
    column(chart, chartID) {
      try {
        console.log("Start : barChart");
        chart.container = chartID;
        chart.chartnumber = chartID;
        let ChartContainer = document.querySelector("#" + chart.container);
        chart.wid = ChartContainer.clientWidth - 10;
        chart.hei = ChartContainer.clientHeight - 33;
  
        let titleAndPrintButton = ''
        if (chart.config.title != undefined) {
          titleAndPrintButton += '<h2 class="chartTitle">' + chart.config.title + '</h2>';
        }
        if (chart.config.printEnable != undefined && chart.config.printEnable == true) {
          titleAndPrintButton += '<button style="position: absolute;right: 25px;margin-top:-65px;border-radius:4px;border:1px solid #000" id="print_' + chartID + '">Print</button>'
        }
        ChartContainer.innerHTML = titleAndPrintButton;
        let ctx_base = this.chartSurface.preparePlot(chart.chartnumber, chart.wid, chart.hei, chart.container);
        (chart.yaxis === undefined) ? chart.yaxis = {} : null;
        if (chart.yaxis.max === undefined && chart.yaxis.min === undefined) {
          chart.yaxis.max = parseInt(chart.data[0].datapoints[0].y);
          chart.yaxis.min = parseInt(chart.data[0].datapoints[0].y);
          for (var i = 0; i < chart.data.length; i++) {
            for (var j = 0; j < chart.data[i].datapoints.length; j++) {
              if (parseInt(chart.data[i].datapoints[j].y) < chart.yaxis.min) {
                chart.yaxis.min = parseInt(chart.data[i].datapoints[j].y);
              }
              if (parseInt(chart.data[i].datapoints[j].y) > chart.yaxis.max) {
                chart.yaxis.max = parseInt(chart.data[i].datapoints[j].y);
              }
            }
          }
          chart.yaxis.max += 10;
          (chart.yaxis.min >= 10) ? chart.yaxis.min += -10 : null
        }
        if (chart.yaxis.difference === undefined) {
          chart.yaxis.difference = Math.floor((chart.yaxis.max - chart.yaxis.min) / 8);
        }
        let verticaldevisions = Math.floor((chart.yaxis.max - chart.yaxis.min) / chart.yaxis.difference);
        //console.log("verticaldevisions" + verticaldevisions);
        let barwidth = drawGrid(chart.chartnumber, verticaldevisions, ctx_base, chart.data);
        //console.log("barwidth:" + barwidth);
        let canvas = 'canvas' + chart.chartnumber;
        let maxdata = [chart.yaxis.min, chart.yaxis.max];
        //console.log("maxdata:" + maxdata);
        let linecord = [];
        let barCords = [];
        let lineLineCords = [];
        let nextcurve = 100;
        let barChartCount = 0;
        for (let i in chart.data) {
          (chart.data[i].type == "bar") ? barChartCount++ : null;
        }
        for (let i = 0; i < chart.data.length; i++) {
          if (chart.data[i].type == "bar") {
            this.drawChart.drawBar(canvas, ctx_base, verticaldevisions, chart.data[i], maxdata, nextcurve, chart.data[i].chartColor, barCords, barwidth, barChartCount);
            nextcurve += barwidth + 5;
          }
          if (chart.data[i].type == "line") {
            this.drawChart.drawGraphicLinear(canvas, ctx_base, verticaldevisions, chart.data[i], maxdata, chart.data[i].chartColor, lineLineCords);
          }
          if (chart.data[i].type == "spline") {
            let splineCord = this.drawChart.drawsplinechart(canvas, ctx_base, verticaldevisions, chart.data[i], maxdata, chart.data[i].chartColor, lineLineCords);
          }
        }
        drawGraphicLinearYcord(canvas, ctx_base, verticaldevisions, chart);
        console.log("barCords ", barCords);
        console.log("lineLineCords ", lineLineCords);
        let ctx_upper = this.chartSurface.preparePlotUpper(chart.chartnumber, chart.wid, chart.hei, chart.container);
  
        this.drawUpperChart.lineChartUpperCanvas(chart.chartnumber, ctx_upper, chart.wid, chart.hei, lineLineCords, chart.container, chart.type);
        this.drawUpperChart.barChartUpperCanvas(chart.chartnumber, ctx_upper, chart.wid, chart.hei, barCords, chart.container, chart.type);
        if (chart.config.printEnable != undefined && chart.config.printEnable == true) {
          document.querySelector("#" + chartID + " #print_" + chartID).addEventListener('click', function (event) {
            PrintContent(event, chart.wid, chart.hei);
          });
        }
        console.log("End : barChart");
      } catch (err) {
        console.error("Exception occurred in bar chart module:  " + err.message);
      }
    }
  
    splineChart(chart, chartID) {
      try {
        console.log("Start : splineChart");
        //console.log(chart);
        chart.container = chartID;
        chart.chartnumber = chartID;
        let ChartContainer = document.querySelector("#" + chart.container);
        chart.wid = ChartContainer.clientWidth - 10;
        //chart.wid = chart.width;
        //chart.hei = chart.height;
        chart.hei = ChartContainer.clientHeight - 33;
  
        let titleAndPrintButton = ''
        if (chart.config.title != undefined) {
          titleAndPrintButton += '<h2 class="chartTitle">' + chart.config.title + '</h2>';
        }
        if (chart.config.printEnable != undefined && chart.config.printEnable == true) {
          titleAndPrintButton += '<button style="position: absolute;right: 25px;margin-top:-65px;border-radius:4px;border:1px solid #000" id="print_' + chartID + '">Print</button>'
        }
        ChartContainer.innerHTML = titleAndPrintButton;
  
        let ctx_base = this.chartSurface.preparePlot(chart.chartnumber, chart.wid, chart.hei, chart.container);
  
        (chart.yaxis === undefined) ? chart.yaxis = {} : null
        if (chart.yaxis.max === undefined && chart.yaxis.min === undefined) {
          chart.yaxis.max = parseInt(chart.data[0].datapoints[0].y);
          chart.yaxis.min = parseInt(chart.data[0].datapoints[0].y);
          for (var i = 0; i < chart.data.length; i++) {
            for (var j = 0; j < chart.data[i].datapoints.length; j++) {
              if (parseInt(chart.data[i].datapoints[j].y) < chart.yaxis.min) {
                chart.yaxis.min = parseInt(chart.data[i].datapoints[j].y);
              }
              if (parseInt(chart.data[i].datapoints[j].y) > chart.yaxis.max) {
                chart.yaxis.max = parseInt(chart.data[i].datapoints[j].y);
              }
            }
          }
          chart.yaxis.max += 10;
          (chart.yaxis.min >= 10) ? chart.yaxis.min += -10 : null
        }
        if (chart.yaxis.difference === undefined) {
          chart.yaxis.difference = Math.floor((chart.yaxis.max - chart.yaxis.min) / 8);
        }
        let verticaldevisions = Math.floor((chart.yaxis.max - chart.yaxis.min) / chart.yaxis.difference);
        //console.log("verticaldevisions" + verticaldevisions);
        drawGrid(chart.chartnumber, verticaldevisions, ctx_base, chart.data);
        let canvas = 'canvas' + chart.chartnumber;
        drawGraphicLinearYcord(canvas, ctx_base, verticaldevisions, chart);
        let maxdata = [chart.yaxis.min, chart.yaxis.max];
        let linecord = [];
        for (let i = 0; i < chart.data.length; i++) {
          this.drawChart.drawsplinechart(canvas, ctx_base, verticaldevisions, chart.data[i], maxdata, chart.data[i].chartColor, linecord);
        }
  
        //console.log(linecord);
        let ctx_upper = this.chartSurface.preparePlotUpper(chart.chartnumber, chart.wid, chart.hei, chart.container);
        this.drawUpperChart.lineChartUpperCanvas(chart.chartnumber, ctx_upper, chart.wid, chart.hei, linecord, chart.container, chart.type);
        if (chart.config.printEnable != undefined && chart.config.printEnable == true) {
          document.querySelector("#" + chartID + " #print_" + chartID).addEventListener('click', function (event) {
            PrintContent(event, chart.wid, chart.hei);
          });
        }
        console.log("End : splineChart");
      } catch (err) {
        console.error("Exception occurred in line chart module:  " + err.message);
      }
    }
  
    stepChart(chart, chartID) {
      try {
        console.log("Start : stepChart");
        //console.log(chart);
        chart.container = chartID;
        chart.chartnumber = chartID;
        let ChartContainer = document.querySelector("#" + chart.container);
        chart.wid = ChartContainer.clientWidth - 10;
        chart.hei = ChartContainer.clientHeight - 33;
  
        let titleAndPrintButton = ''
        if (chart.config.title != undefined) {
          titleAndPrintButton += '<h2 class="chartTitle">' + chart.config.title + '</h2>';
        }
        if (chart.config.printEnable != undefined && chart.config.printEnable == true) {
          titleAndPrintButton += '<button style="position: absolute;right: 25px;margin-top:-65px;border-radius:4px;border:1px solid #000" id="print_' + chartID + '">Print</button>'
        }
        ChartContainer.innerHTML = titleAndPrintButton;
  
        let ctx_base = this.chartSurface.preparePlot(chart.chartnumber, chart.wid, chart.hei, chart.container);
        (chart.yaxis === undefined) ? chart.yaxis = {} : null
        if (chart.yaxis.max === undefined && chart.yaxis.min === undefined) {
          chart.yaxis.max = chart.data[0].datapoints[0].y;
          chart.yaxis.min = chart.data[0].datapoints[0].y;
          for (var i = 0; i < chart.data.length; i++) {
            for (var j = 0; j < chart.data[i].datapoints.length; j++) {
              if (chart.data[i].datapoints[j].y < chart.yaxis.min) {
                chart.yaxis.min = chart.data[i].datapoints[j].y;
              }
              if (chart.data[i].datapoints[j].y > chart.yaxis.max) {
                chart.yaxis.max = chart.data[i].datapoints[j].y;
              }
            }
          }
          chart.yaxis.max += 10;
          (chart.yaxis.min >= 10) ? chart.yaxis.min += -10 : null
        }
        if (chart.yaxis.difference === undefined) {
          chart.yaxis.difference = Math.floor((chart.yaxis.max - chart.yaxis.min) / 8);
        }
        let verticaldevisions = Math.floor((chart.yaxis.max - chart.yaxis.min) / chart.yaxis.difference);
        //console.log("verticaldevisions" + verticaldevisions);
        drawGrid(chart.chartnumber, verticaldevisions, ctx_base, chart.data);
  
        let canvas = 'canvas' + chart.chartnumber;
        drawGraphicLinearYcord(canvas, ctx_base, verticaldevisions, chart);
        let maxdata = [chart.yaxis.min, chart.yaxis.max];
        let linecord = [];
        for (let i = 0; i < chart.data.length; i++) {
          this.drawChart.drawStepchart(canvas, ctx_base, verticaldevisions, chart.data[i], maxdata, chart.data[i].chartColor, linecord);
        }
  
        console.log(linecord);
        let ctx_upper = this.chartSurface.preparePlotUpper(chart.chartnumber, chart.wid, chart.hei, chart.container);
        this.drawUpperChart.lineChartUpperCanvas(chart.chartnumber, ctx_upper, chart.wid, chart.hei, linecord, chart.container, chart.type);
        if (chart.config.printEnable != undefined && chart.config.printEnable == true) {
          document.querySelector("#" + chartID + " #print_" + chartID).addEventListener('click', function (event) {
            PrintContent(event, chart.wid, chart.hei);
          });
        }
        console.log("End : stepChart");
      } catch (error) {
        console.log("Error Occured while chart calling of step chart" + error.message)
      }
    }
  }
  
  class GKChart {
    constructor(data) {
      try {
        console.info("Enter: Chart Designing initialize function");
        this.chartID = data.id;
        this.chartData = data.data;
        this.chartCall = new chartCalling();
        this.initialize.bind(this)();
        console.info("Exit: Chart Designing initialize function");
      } catch (err) {
        console.log("Error Found in GKChart Constructoru", err);
      }
    };
  
    initialize() {
      try {
        console.log("Start : initialize");
  
        /*Define chart css properties*/
        css(document.querySelector("#" + this.chartID), {
          'display': 'block'
        });
  
        switch (this.chartData.config.chartType) {
          case "line": {
            this.chartCall.lineChart(this.chartData, this.chartID);
            break;
          }
          case 'bar': {
            this.chartCall.barChart(this.chartData, this.chartID);
            break;
          }
          case "pie": {
            this.chartCall.pieChart(this.chartData, this.chartID);
            break;
          }
          case "donut": {
            this.chartCall.donutChart(this.chartData, this.chartID);
            break;
          }
          case "meter": {
            this.chartCall.meterChart(this.chartData, this.chartID);
            break;
          }
          case "column": {
            this.chartCall.column(this.chartData, this.chartID);
            break;
          }
          case "spline": {
            this.chartCall.splineChart(this.chartData, this.chartID);
            break;
          }
          case "step": {
            this.chartCall.stepChart(eval(this.chartData), this.chartID);
            break;
          }
          default: {
            console.log("Invalid choice of chart");
            break;
          }
        }
  
        window.addEventListener("resize", function () {
          clearTimeout(this.resize);
          this.resize = setTimeout(function () {
            this.initialize();
          }.bind(this), 100);
        }.bind(this));
  
        console.log("End : initialize");
      } catch (err) {
        console.error("Exception occurred in Home module:  " + err.message);
      }
    }
  };
  