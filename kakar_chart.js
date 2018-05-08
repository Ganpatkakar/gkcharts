function css(el, styles) {
    for (var property in styles)
        el.style[property] = styles[property];
}

class ChartSurface {
    constructor() {
    }

    static ratio(canvasContainer) {
        var ctx = canvasContainer.getContext('2d');
        var dpr = window.devicePixelRatio || 1;
        var bsr = ctx.webkitBackingStorePixelRatio || ctx.mozBackingStorePixelRatio || ctx.msBackingStorePixelRatio || ctx.oBackingStorePixelRatio || ctx.backingStorePixelRatio || 1;
        return dpr / bsr;
    }

    static prepSurface(nr, width, height, container) {
        try {
            console.log("Start : prepSurface");
            var canvas = document.createElement("CANVAS");
            canvas.id = 'canvas' + nr;
            canvas.setAttribute('class', 'canvas');
            canvas.setAttribute("style", "position:absolute");
            var container = document.getElementById(container);
            container.appendChild(canvas);

            var canvasDom = document.getElementById('canvas' + nr);
            canvasDom.width = width * ChartSurface.ratio(canvasDom);
            canvasDom.height = height * ChartSurface.ratio(canvasDom);
            canvasDom.style.width = width + "px";
            canvasDom.style.height = height + "px";

            // document.getElementById('container').append('<canvas id="canvas' + nr + '" class="canvas"' +
            //     ' style="position:absolute;" width="' + width + '" height="' + height + '"></canvas> ');
            console.log("End : prepSurface");
        } catch (e) {
            console.log("error occured in prepareSurface : ", e);
        }
    }

    static prepUI(nr) {
        try {
            console.log("Start : prepUI");
            //console.log(nr);
            var canvas = document.getElementById('canvas' + nr);
            var ctx = canvas.getContext('2d');
            ctx.font = "23px arial";
            ctx.lineWidth = 1;
            return ctx;
            console.log("End : prepUI");
        } catch (e) {
            console.log("error occured in prepUI : ", e);
        }
    }

    preparePlot(nr, sizex, sizey, container) {
        try {
            console.log("Start : preparePlot");
            ChartSurface.prepSurface(nr, sizex, sizey, container);
            var canvasContext = ChartSurface.prepUI(nr);
            return canvasContext;
            console.log("End : preparePlot");
        } catch (e) {
            console.log("error occured in preparePlot : ", e);
        }
    }

    static prepSurfaceupper(nr, width, height, container) {
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
            canvasDom.width = width * ChartSurface.ratio(canvasDom);
            canvasDom.height = height * ChartSurface.ratio(canvasDom);
            canvasDom.style.width = width + "px";
            canvasDom.style.height = height + "px";

            //container.innerHTML = '<canvas id="canvasupper'+nr+'" width="'+width+'" height="'+height+'"></canvas>'
            //document.write();
            console.log("End : prepSurfaceupper");
        } catch (e) {
            console.log("error occured in prepSurfaceupper : ", e);
        }
    }

    static prepUIUpper(nr) {
        try {

            var canvas = document.getElementById('canvasupper' + nr);
            var ctx = canvas.getContext('2d');
            //ctx.font = '18px Arial';
            ctx.lineWidth = 1;
            return ctx;
            console.log("End : prepUIUpper");
        } catch (e) {
            console.log("error occured in prepUIUpper : ", e);
        }
    }

    preparePlotUpper(nr, sizex, sizey, container) {
        try {
            console.log("Start : preparePlotUpper");
            ChartSurface.prepSurfaceupper(nr, sizex, sizey, container);
            var canvasContext = ChartSurface.prepUIUpper(nr);
            return canvasContext;
            console.log("End : preparePlotUpper");
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
        ctx.strokeStyle = 'rgba(0,0,0,.7)';
        ctx.fillStyle = "#000";
        ctx.lineWidth = .4;
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
        ctx.beginPath();
        /*Vertical grid*/
        for (var i = 0; i < data[0].datapoints.length + 1; i++) {
            ctx.moveTo(i * spacingHorizontal + 100, 0);
            ctx.lineTo(i * spacingHorizontal + 100, hei + 5);
        }
        ctx.stroke();
        /*Horizontal grid*/
        for (var i = 0; i < verticanNr + 1; i++) {
            ctx.moveTo(90, i * spacingVertical);
            ctx.lineTo(wid + 100, i * spacingVertical);
        }
        ctx.fill();
        ctx.stroke();
        ctx.closePath();
        return barwidth;
        console.log("End : drawGrid");
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
        ctx.fillText(cdata.yaxis.title, 0, 20);

        ctx.restore();
        /* xaxis Horizontal Documents*/
        ctx.save();
        //ctx.font = "18px";
        var xangle;
        for (var i = 0; i < cdata.data[0].datapoints.length; i++) {
            if (ctx.measureText(cdata.data[0].datapoints[i].lable).width > spacingHorizontal / 1.1) {
                xangle = 'angular';
                /*angular*/
                break;
            } else if (ctx.measureText(cdata.data[0].datapoints[i].lable).width < spacingHorizontal / 2) {
                xangle = 'straight';
                /*straight*/
            }
        }
        if (xangle === 'angular') {
            for (var i = 0; i < cdata.data[0].datapoints.length; i++) {
                ctx.translate(i * spacingHorizontal + 32, hei + 8);
                ctx.rotate(Math.PI / 4);
                ctx.fillText(cdata.data[0].datapoints[i].lable, 0, 0);
                //console.log(cdata.xaxis.categories[i], i*spacingHorizontal, hei-spacingVertical);
                ctx.rotate(-Math.PI / 4);
                ctx.translate(-(i * spacingHorizontal + 32), -(hei + 8));
            }
        } else {
            for (var i = 0; i < cdata.data[0].datapoints.length; i++) {
                ctx.fillText(cdata.data[0].datapoints[i].lable, i * spacingHorizontal + 104, hei + 25);
            }
        }
        //ctx.restore();

        /* yaxis Vertical Documents*/
        ctx.save();
        for (var i = 0; i < verticalNr + 1; i++) {
            var max = cdata.yaxis.max;
            var min = cdata.yaxis.min;
            var difference = cdata.yaxis.difference;
            ctx.fillText(i * difference, 35, canvas.height - (i * spacingVertical + 40));
        }
        //ctx.restore();
        ctx.closePath();
        console.log("End : drawGraphicLinearYcord");
    } catch (e) {
        console.log("error occurred in drawGraphicLinearYcord : ", e);
    }

}

class DrawChart {
    constructor() {
    }

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
            var mov;
            ctx.strokeStyle = chartColor;
            ctx.beginPath();
            var xcord = 100;
            var ycord = hei - (data.datapoints[0].y - range[0]) * verticalCoefficient;
            for (var i = 0; i < data.datapoints.length; i++) {
                //console.log(xcord, ycord);
                ctx.beginPath();
                ctx.moveTo(xcord + 6, ycord);
                ctx.strokeStyle = chartColor;
                ctx.lineWidth = 3;
                if (i > 0) {
                    xcord = i * spacingHorizontal + 100;
                    ycord = hei - (data.datapoints[i].y - range[0]) * verticalCoefficient;

                    /*Draw line for line chart connecting and end points*/
                    ctx.lineTo(xcord - 5, ycord);
                }
                ctx.closePath();
                ctx.stroke();
                (function () {
                    /*Draw arc for line chart connecting and end points*/
                    //ctx.save();
                    ctx.beginPath();
                    ctx.lineWidth = 5;
                    //ctx.strokeStyle = "red";
                    ctx.arc(xcord, ycord, 8, 0, 2 * Math.PI);
                    ctx.fillStyle = "#fff";
                    ctx.fill();
                    ctx.stroke();
                    ctx.closePath();
                    ctx.lineWidth = 5;
                    //ctx.restore();
                })();
                ctx.closePath();
                ctx.lineWidth = 6;

                var newobj = {
                    x: i * spacingHorizontal + 100
                    , y: hei - (data.datapoints[i].y - range[0]) * verticalCoefficient
                    , lable: data.datapoints[i].lable
                    , dataval: data.datapoints[i].y
                };
                //console.log(newobj);
                linecord.push(newobj);
            }
            return linecord;
            console.log("End : drawGraphicLinear");
        } catch (e) {
            console.log("error occured in drawGraphicLinear : ", e);
        }
    };

    drawBar(canvas, ctx, verticalNr, data, range, curx, chartColor, linecord, barwidth) {

        try {
            console.log("Start : drawBar");
            var canvas = document.getElementById(canvas);
            var hei = canvas.height - 60;
            var wid = canvas.width - 100;
            var spacingVertical = hei / verticalNr;
            var spacingHorizontal = wid / data.datapoints.length;
            //console.log("barChart spacingHorizontal :" + spacingHorizontal);
            //console.log("barchart div width :" + wid);
            var totalcompare = data.datapoints.length;
            //var barwidth = 15;
            ctx.beginPath();
            ctx.strokeStyle = chartColor;
            //ctx.moveTo(0, hei-(data[0]-range[0])*verticalCoefficient+spacingVertical);
            for (var i = 0; i < data.datapoints.length; i++) {
                ctx.fillStyle = chartColor;
                var h = (data.datapoints[i].y / range[1]) * hei;
                ctx.fillRect(curx, hei - h, barwidth, h);
                var newobj = {
                    x: curx
                    , y: hei - h
                    , wid: barwidth
                    , hei: h
                    , lable: data.datapoints[i].lable
                    , dataval: data.datapoints[i].y
                };
                //console.log(newobj);
                linecord.push(newobj);
                ctx.fillStyle = "#000";
                //ctx.fillText(data.datapoints[i].y, curx, hei - h);
                curx += spacingHorizontal;
            }
            ctx.stroke();
            ctx.closePath();
            //console.log(linecord);
            return linecord;
            console.log("End : drawBar");
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
                    wid: canvas.width
                    , hei: canvas.height
                    , startangle: lastend
                    , lastangle: lastend + (Math.PI * 2 * (data.datapoints[i].y / myTotal))
                    , lable: data.datapoints[i].lable
                    , y: data.datapoints[i].y
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
            return linecord;
            console.log("End : drawPie");
        } catch (e) {
            console.log("error occured in drawPie : ", e);
        }
    }

    drawDonut(canvas, ctx, verticalNr, data, range, chartColor, linecord) {
        try {
            console.log("Start : drawDonut");
            var canvas = document.getElementById(canvas);
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            var linewidth = 80;
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
                    wid: canvas.width
                    , startangle: lastend
                    , lastangle: lastend + (Math.PI * 2 * (data.datapoints[i].y / myTotal))
                    , lable: data.datapoints[i].lable
                    , y: data.datapoints[i].y
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
            return linecord;
            console.log("End : drawDonut");
        } catch (e) {
            console.log("error occured in drawDonut : ", e);
        }
    }

    drawMeter(canvas, ctx, verticalNr, data, range, chartColor, linecord) {
        try {
            console.log("Start : drawMeter");
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
                    x: canvas.width / 2
                    , startangle: lastend
                    , lastangle: lastend + (Math.PI * (data.datapoints[i].y / myTotal))
                    , lable: data.datapoints[i].lable
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
            var rotateangel = Math.PI * (data.dataval / 100) + 3.141592653589793;
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
                 ctx.fillText(data.datapoints[i].lable.toString(), x + radius, y);
                 angle = (Math.PI * (data.datapoints[i].y / myTotal)) - anglemiddle;*/
                //console.log(angle);

                var fx = canvas.width / 2 + (radius * 1.01) * Math.cos(angle + anglemiddle);
                var fy = canvas.height / 2 + (radius * 1.01) * Math.sin(angle + anglemiddle);
                ctx.translate(fx, fy);
                ctx.rotate(angle + 1.8);
                ctx.fillText(data.datapoints[i].lable.toString(), 0, 0);
                ctx.rotate(-(angle + 1.8));
                ctx.translate(-fx, -fy);
                angle += (Math.PI * (data.datapoints[i].y / myTotal));
            }
            ctx.restore();
            return linecord;
            console.log("End : drawMeter");
        } catch (e) {
            console.log("error occured in drawMeter : ", e);
        }
    }

    static bezierPointsCalc(a, f) {
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


    /*Currently Spline Chart Functionality is not present*/
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
            ctx.beginPath();
            var xcord = 100;
            var ycord = hei - (data.datapoints[0].y - range[0]) * verticalCoefficient;
            var localLineCords = [];
            for (var i = 0; i < data.datapoints.length; i++) {
                //console.log(xcord, ycord);
                ctx.beginPath();
                ctx.moveTo(xcord + 6, ycord);
                if (i > 0) {
                    xcord = i * spacingHorizontal + 100;
                    ycord = hei - (data.datapoints[i].y - range[0]) * verticalCoefficient;
                }

                var newobj = {
                    x: xcord
                    , y: ycord
                    , lable: data.datapoints[i].lable
                    , dataval: data.datapoints[i].y
                };
                //console.log(newobj);
                linecord.push(newobj);
                localLineCords.push(newobj);
            }

            ctx.closePath();
            var f = 2;
            var a = DrawChart.bezierPointsCalc(localLineCords, f);
            console.log(a);
            ctx.strokeStyle = chartColor;
            ctx.lineWidth = 3;
            ctx.beginPath();
            ctx.moveTo(a[0].x, a[0].y);
            for(var i =1; i < a.length; i += 3) {
              if(i <= a.length -3) {
                ctx.bezierCurveTo(a[i].x, a[i].y, a[i+1].x, a[i+1].y, a[i+2].x, a[i+2].y);
              }
            }
            ctx.stroke();
            ctx.closePath();

            for (var i = 0; i < localLineCords.length; i++) {
                (function () {
                    /*Draw arc for line chart connecting and end points*/
                    //ctx.save();
                    ctx.beginPath();
                    ctx.lineWidth = 5;
                    //ctx.strokeStyle = "red";
                    ctx.arc(localLineCords[i].x, localLineCords[i].y, 8, 0, 2 * Math.PI);
                    ctx.fillStyle = "#fff";
                    ctx.fill();
                    ctx.stroke();
                    ctx.closePath();
                    ctx.lineWidth = 5;
                    //ctx.restore();
                })(); 
            }
            ctx.closePath();

            return linecord;
            console.log("End : drawsplinechart");
        } catch (e) {
            console.log("error occured in drawsplinechart : ", e);
        }
    };
}

class DrawChartUpperCanvas {
    constructor() {
    }

    static ratio(ctx) {
        var dpr = window.devicePixelRatio || 1;
        var bsr = ctx.webkitBackingStorePixelRatio || ctx.mozBackingStorePixelRatio || ctx.msBackingStorePixelRatio || ctx.oBackingStorePixelRatio || ctx.backingStorePixelRatio || 1;
        return dpr / bsr;
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
                        css(document.querySelector('#' + container + ' .canvasjs-chart-tooltip'), {"left": linecord[i].x / DrawChartUpperCanvas.ratio(ctx)+"px", 
                            "top" : linecord[i].y / DrawChartUpperCanvas.ratio(ctx) +"px", 
                            "display": "block"})
                        document.querySelector('#' + container + ' .canvasjs-chart-tooltip div').innerHTML = linecord[i].lable + ' : ' + linecord[i].dataval;
                        break;
                    }
                    else {
                        ctx.clearRect(0, 0, document.getElementById('canvasupper' + nr).width, document.getElementById('canvasupper' + nr).height);
                    }
                    ctx.closePath();
                }
            }, false);

            document.getElementById('canvasupper' + nr).addEventListener('mouseout', function (evt) {
                setTimeout(function () {
                    css(document.querySelector('#' + container + ' .canvasjs-chart-tooltip'), {'display': 'none'});
                }, 2000);
            });
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
                        ctx.fillStyle = 'rgba(0,0,0,.3)'
                        ctx.fill();
                        ctx.stroke();
                        css(document.querySelector('#' + container + ' .canvasjs-chart-tooltip'), {"left": linecord[i].x / DrawChartUpperCanvas.ratio(ctx) +"px",
                         "top" : linecord[i].y / DrawChartUpperCanvas.ratio(ctx)+"px", 
                         "display": "block"})
                        document.querySelector('#' + container + ' .canvasjs-chart-tooltip div').innerHTML = linecord[i].lable + ' : ' + linecord[i].dataval;
                        break;
                    }
                    else {
                        ctx.clearRect(0, 0, document.getElementById('canvasupper' + nr).width, document.getElementById('canvasupper' + nr).height);
                    }
                }
            }, false);
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
                        ctx.fillStyle = 'rgba(0,0,0,.3)'
                        ctx.fill();
                        css(document.querySelector('#' + container + ' .canvasjs-chart-tooltip'), {
                            'display': 'block'
                            , 'left': mousePos.x / DrawChartUpperCanvas.ratio(ctx)+"px"
                            , 'top': mousePos.y / DrawChartUpperCanvas.ratio(ctx)+"px"
                        });
                        document.querySelector('#' + container + ' .canvasjs-chart-tooltip div').innerHTML = linecord[i].lable + ' : ' + linecord[i].y;
                        
                        break;
                    }
                    else {
                        ctx.clearRect(0, 0, document.getElementById('canvasupper' + nr).width, document.getElementById('canvasupper' + nr).height);
                    }
                }
            }, false);
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
                        css(document.querySelector('#' + container + ' .canvasjs-chart-tooltip'),{
                            'display': 'block'
                            , 'left': mousePos.x / DrawChartUpperCanvas.ratio(ctx) +"px"
                            , 'top': mousePos.y + 5 / DrawChartUpperCanvas.ratio(ctx) + "px"
                        });
                        document.querySelector('#' + container + ' .canvasjs-chart-tooltip div').innerHTML = linecord[i].lable + ' : ' + linecord[i].y;
                        break;
                    }
                    if (!(ctx.isPointInStroke(mousePos.x, mousePos.y))) {
                        ctx.clearRect(0, 0, document.getElementById('canvasupper' + nr).width, document.getElementById('canvasupper' + nr).height);
                    }
                }
            }, false);
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

    splineChartUpperCanvas(nr, ctx, width, height, linecord, container, charttype) {
        try {
            console.log("Start : splineChartUpperCanvas");
            /*for (var i = 0; i < linecord.length; i++) {
             //console.log(linecord[i]);
             ctx.beginPath();
             ctx.arc(linecord[i].x, linecord[i].y, 5, 0, 2 * Math.PI);
             ctx.stroke();
             }*/
            ctx.clearRect(0, 0, document.getElementById('canvasupper' + nr).width, document.getElementById('canvasupper' + nr).height);
            document.getElementById('canvasupper' + nr).addEventListener('mousemove', function (evt) {
                var mousePos = getMousePos(document.getElementById('canvasupper' + nr), evt);
                //console.log(mousePos);
                /*var message = 'Mouse position: ' + mousePos.x + ',' + mousePos.y;*/
                for (var i = 0; i < linecord.length; i++) {
                    ctx.beginPath();
                    ctx.arc(linecord[i].x, linecord[i].y, 5, 0, 2 * Math.PI);
                    if (ctx.isPointInStroke(mousePos.x, mousePos.y) || ctx.isPointInPath(mousePos.x, mousePos.y)) {
                        ctx.lineWidth = 4;
                        ctx.strokeStyle = 'rgba(0,0,0,.5)';
                        ctx.stroke();
                        css(document.querySelector('#' + container + ' .canvasjs-chart-tooltip'), {
                            'display': 'block'
                            , 'left': linecord[i].x / DrawChartUpperCanvas.ratio(ctx) + "px" 
                            , 'top': linecord[i].y + 5 / DrawChartUpperCanvas.ratio(ctx) + "px"
                        });
                        document.querySelector('#' + container + ' .canvasjs-chart-tooltip div').innerHTML = linecord[i].lable;
                        break;
                    }
                    if (!(ctx.isPointInStroke(mousePos.x, mousePos.y))) {
                        ctx.clearRect(0, 0, document.getElementById('canvasupper' + nr).width, document.getElementById('canvasupper' + nr).height);
                    }
                }
            }, false);
            document.getElementById('canvasupper' + nr).addEventListener('mouseout', function (evt) {
                setTimeout(function () {
                    css(document.querySelector('#' + container + ' .canvasjs-chart-tooltip'), {
                        'display': 'none'
                    });
                }, 2000);
            });
            console.log("End : splineChartUpperCanvas");
        } catch (e) {
            console.log("error occurred in splineChartUpperCanvas : ", e);
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
            x: (evt.clientX - rect.left) / (rect.right - rect.left) * canvas.width
            , y: (evt.clientY - rect.top) / (rect.bottom - rect.top) * canvas.height
        };
        //console.log("End : getMousePos");
    } catch (e) {
        console.log("error occurred in getMousePos : ", e);
    }
}

function PrintContent(event){
    //console.log(event);
    var elem = event.target.parentNode;
    var canvasWidth = document.querySelector('#'+elem.id).clientWidth;
    var canvasHeight = document.querySelector('#'+elem.id).clientHeight;
    var dataUrl = document.querySelector('#'+elem.id+" canvas").toDataURL();


    let windowContent = '<!DOCTYPE html>';
    windowContent += '<html>';
    windowContent += '<head><title>Print canvas</title></head>';
    windowContent += '<body>';
    windowContent += elem.innerHTML;
    windowContent += '<img width="'+canvasWidth+'" height="'+canvasHeight+'" src="' + dataUrl + '">';
    windowContent += '</body>';
    windowContent += '</html>';

    const printWin = window.open('', '', 'width=' + screen.availWidth + ',height=' + screen.availHeight);
    printWin.document.open();
    printWin.document.write(windowContent); 

    printWin.document.addEventListener('load', function() {
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

    lineChart(chart, chartID, chartNumber) {
        try {
            console.log("Start : lineChart");
            //console.log(chart);
            chart.container = chartID;
            chart.chartnumber = chartNumber;
            chart.wid = document.querySelector("#" + chart.container).clientWidth - 10;
            //chart.wid = chart.width;
            //chart.hei = chart.height;
            chart.hei = document.querySelector('#' + chart.container).clientHeight - 33;
            //console.log("chart.wid :" + chart.wid + ", chart.hei : " + chart.hei);

            var titleAndPrintButton = '<h2 class="chartTitle">' + chart.config.title + '</h2>';
                titleAndPrintButton += '<button style="position: absolute;right: 25px;margin-top:-40px" id="print_'+chartID+'">Print</button>'
            document.querySelector('#' + chart.container).innerHTML = titleAndPrintButton;
            var ctx = this.chartSurface.preparePlot(chart.chartnumber, chart.wid, chart.hei, chart.container);
            var verticaldevisions = (chart.yaxis.max - chart.yaxis.min) / chart.yaxis.difference;
            //console.log("verticaldevisions" + verticaldevisions);
            drawGrid(chart.chartnumber, verticaldevisions, ctx, chart.data);
            var canvas = 'canvas' + chart.chartnumber;
            var maxdata = [chart.yaxis.min, chart.yaxis.max];
            var linecord = [];
            for (var i = 0; i < chart.data.length; i++) {
                this.drawChart.drawGraphicLinear(canvas, ctx, verticaldevisions, chart.data[i], maxdata, chart.data[i].chartColor, linecord);
            }

            drawGraphicLinearYcord(canvas, ctx, verticaldevisions, chart);
            console.log(linecord);
            var ctx = this.chartSurface.preparePlotUpper(chart.chartnumber, chart.wid, chart.hei, chart.container);
            this.drawUpperChart.lineChartUpperCanvas(chart.chartnumber, ctx, chart.wid, chart.hei, linecord, chart.container, chart.type);
            console.log("End : lineChart");

            document.querySelector("#"+chartID+" #print_"+chartID).addEventListener('click', function(event) {
                PrintContent(event);
            });

        } catch (err) {
            console.error("Exception occurred in line chart module:  " + err.message);
        }
    }

    barChart(chart, chartID, chartNumber) {
        try {
            console.log("Start : barChart");
            chart.container = chartID;
            chart.chartnumber = chartNumber;
            chart.wid = document.querySelector("#" + chart.container).clientWidth - 10;
            chart.hei = document.querySelector('#' + chart.container).clientHeight - 33;

            var titleAndPrintButton = '<h2 class="chartTitle">' + chart.config.title + '</h2>';
                titleAndPrintButton += '<button style="position: absolute;right: 25px;margin-top:-40px" id="print_'+chartID+'">Print</button>'
            document.querySelector('#' + chart.container).innerHTML = titleAndPrintButton;
            var ctx = this.chartSurface.preparePlot(chart.chartnumber, chart.wid, chart.hei, chart.container);
            var verticaldevisions = (chart.yaxis.max - chart.yaxis.min) / chart.yaxis.difference;
            //console.log("verticaldevisions" + verticaldevisions);
            var barwidth = drawGrid(chart.chartnumber, verticaldevisions, ctx, chart.data);
            //console.log("barwidth:" + barwidth);
            var canvas = 'canvas' + chart.chartnumber;
            var maxdata = [chart.yaxis.min, chart.yaxis.max];
            //console.log("maxdata:" + maxdata);
            var linecord = [];
            var nextcurve = 100;
            for (var i = 0; i < chart.data.length; i++) {
                this.drawChart.drawBar(canvas, ctx, verticaldevisions, chart.data[i], maxdata, nextcurve, chart.data[i].chartColor, linecord, barwidth);
                nextcurve += barwidth + 5;
                //this.drawChart.drawGraphicLinear(canvas, ctx, verticaldevisions, chart.data[i], maxdata, chart.data[i].chartColor, linecord);
            }
            drawGraphicLinearYcord(canvas, ctx, verticaldevisions, chart);
            //console.log(linecord);
            var ctx = this.chartSurface.preparePlotUpper(chart.chartnumber, chart.wid, chart.hei, chart.container);
            this.drawUpperChart.barChartUpperCanvas(chart.chartnumber, ctx, chart.wid, chart.hei, linecord, chart.container, chart.type);
            console.log("End : barChart");
            document.querySelector("#"+chartID+" #print_"+chartID).addEventListener('click', function(event) {
                PrintContent(event);
            });
        } catch (err) {
            console.error("Exception occurred in bar chart module:  " + err.message);
        }
    }

    pieChart(chart, chartID, chartNumber) {
        try {
            console.log("Start : pieChart");
            chart.container = chartID;
            chart.chartnumber = chartNumber;
            chart.wid = document.querySelector("#" + chart.container).clientWidth - 10;
            chart.hei = document.querySelector('#' + chart.container).clientHeight - 33;

            var titleAndPrintButton = '<h2 class="chartTitle">' + chart.config.title + '</h2>';
                titleAndPrintButton += '<button style="position: absolute;right: 25px;margin-top:-40px" id="print_'+chartID+'">Print</button>'
            document.querySelector('#' + chart.container).innerHTML = titleAndPrintButton;
            var ctx = this.chartSurface.preparePlot(chart.chartnumber, chart.wid, chart.hei, chart.container);
            drawGrid(chart.chartnumber, 10, ctx, chart.data);
            var canvas = 'canvas' + chart.chartnumber;
            var maxdata = [];
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
            var linecord = [];
            for (var i = 0; i < chart.data.length; i++) {
                this.drawChart.drawPie(canvas, ctx, 10, chart.data[i], maxdata, chart.data[i].chartColor, linecord);
            }
            //console.log(linecord);
            var ctx = this.chartSurface.preparePlotUpper(chart.chartnumber, chart.wid, chart.hei, chart.container);
            this.drawUpperChart.pieChartUpperCanvas(chart.chartnumber, ctx, chart.wid, chart.hei, linecord, chart.container, chart.type);
            console.log("End : pieChart");
            document.querySelector("#"+chartID+" #print_"+chartID).addEventListener('click', function(event) {
                PrintContent(event);
            });
        } catch (err) {
            console.error("Exception occurred in pie chart module:  " + err.message);
        }
    }

    donutChart(chart, chartID, chartNumber) {
        try {
            console.log("Start : donutChart");
            chart.container = chartID;
            chart.chartnumber = chartNumber;
            chart.wid = document.querySelector("#" + chart.container).clientWidth - 10;
            chart.hei = document.querySelector('#' + chart.container).clientHeight - 33;

            var titleAndPrintButton = '<h2 class="chartTitle">' + chart.config.title + '</h2>';
                titleAndPrintButton += '<button style="position: absolute;right: 25px;margin-top:-40px" id="print_'+chartID+'">Print</button>'
            document.querySelector('#' + chart.container).innerHTML = titleAndPrintButton;
            var ctx = this.chartSurface.preparePlot(chart.chartnumber, chart.wid, chart.hei, chart.container);
            drawGrid(chart.chartnumber, 10, ctx, chart.data);
            var canvas = 'canvas' + chart.chartnumber;
            var maxdata = [];
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
            var linecord = [];
            var linewidth = 60;
            for (var i = 0; i < chart.data.length; i++) {
                this.drawChart.drawDonut(canvas, ctx, 10, chart.data[i], maxdata, chart.data[i].chartColor, linecord);
            }
            //console.log(linecord);
            var ctx = this.chartSurface.preparePlotUpper(chart.chartnumber, chart.wid, chart.hei, chart.container);
            this.drawUpperChart.donutChartUpperCanvas(chart.chartnumber, ctx, chart.wid, chart.hei, linecord, chart.container, chart.type);
            document.querySelector("#"+chartID+" #print_"+chartID).addEventListener('click', function(event) {
                PrintContent(event);
            });
            console.log("End : donutChart");
        } catch (err) {
            console.error("Exception occurred in donut chart module:  " + err.message);
        }
    }

    meterChart(chart, chartID, chartNumber) {
        try {
            console.log("Start : meterChart");
            chart.container = chartID;
            chart.chartnumber = chartNumber;
            chart.wid = document.querySelector("#" + chart.container).clientWidth - 10;
            chart.hei = document.querySelector('#' + chart.container).clientHeight - 33;

            var titleAndPrintButton = '<h2 class="chartTitle">' + chart.config.title + '</h2>';
                titleAndPrintButton += '<button style="position: absolute;right: 25px;margin-top:-40px" id="print_'+chartID+'">Print</button>'
            document.querySelector('#' + chart.container).innerHTML = titleAndPrintButton;
            var ctx = this.chartSurface.preparePlot(chart.chartnumber, chart.wid, chart.hei, chart.container);
            drawGrid(chart.chartnumber, 10, ctx, chart.data);
            var canvas = 'canvas' + chart.chartnumber;
            var maxdata = [];
            maxdata[0] = maxdata[1] = chart.data[0].datapoints[0].y;
            var meterTotal = 0;
            for (var j = 0; j < chart.data[0].datapoints.length; j++) {
                if (chart.data[0].datapoints[j].y < maxdata[0]) {
                    maxdata[0] = chart.data[0].datapoints[j].y;
                }
                if (chart.data[0].datapoints[j].y > maxdata[1]) {
                    maxdata[1] = chart.data[0].datapoints[j].y;
                }
                meterTotal += chart.data[0].datapoints[j].y;
            }
            //console.log(meterTotal);
            var linecord = [];
            var linewidth = 50;
            chart.data[0].dataval = Math.round((chart.data[0].dataval / meterTotal) * 100);
            //console.log(chart.data[0].dataval);
            this.drawChart.drawMeter(canvas, ctx, 10, chart.data[0], maxdata, chart.data[0].chartColor, linecord);
            document.querySelector("#"+chartID+" #print_"+chartID).addEventListener('click', function(event) {
                PrintContent(event);
            });
            console.log("End : meterChart");
        } catch (err) {
            console.error("Exception occurred in  meter chart module:  " + err.message);
        }
    }

    column(chart, chartID, chartNumber) {
        try {
            console.log("Start : barChart");
            chart.container = chartID;
            chart.chartnumber = chartNumber;
            chart.wid = document.querySelector("#" + chart.container).clientWidth - 10;
            chart.hei = document.querySelector('#' + chart.container).clientHeight - 33;

            var titleAndPrintButton = '<h2 class="chartTitle">' + chart.config.title + '</h2>';
                titleAndPrintButton += '<button style="position: absolute;right: 25px;margin-top:-40px" id="print_'+chartID+'">Print</button>'
            document.querySelector('#' + chart.container).innerHTML = titleAndPrintButton;
            var ctx = this.chartSurface.preparePlot(chart.chartnumber, chart.wid, chart.hei, chart.container);
            var verticaldevisions = (chart.yaxis.max - chart.yaxis.min) / chart.yaxis.difference;
            //console.log("verticaldevisions" + verticaldevisions);
            var barwidth = drawGrid(chart.chartnumber, verticaldevisions, ctx, chart.data);
            //console.log("barwidth:" + barwidth);
            var canvas = 'canvas' + chart.chartnumber;
            var maxdata = [chart.yaxis.min, chart.yaxis.max];
            //console.log("maxdata:" + maxdata);
            var linecord = [];
            var nextcurve = 0;
            var nextcurve = 100;
            for (var i = 0; i < chart.data.length; i++) {
                if (chart.data[i].type == "bar") {
                    this.drawChart.drawBar(canvas, ctx, verticaldevisions, chart.data[i], maxdata, nextcurve, chart.data[i].chartColor, linecord, barwidth);
                    nextcurve += barwidth + 5;
                }
                if (chart.data[i].type == "line") {
                    this.drawChart.drawGraphicLinear(canvas, ctx, verticaldevisions, chart.data[i], maxdata, chart.data[i].chartColor, linecord);
                }
            }
            drawGraphicLinearYcord(canvas, ctx, verticaldevisions, chart);
            console.log(linecord);
            var ctx = this.chartSurface.preparePlotUpper(chart.chartnumber, chart.wid, chart.hei, chart.container);
            this.drawUpperChart.lineChartUpperCanvas(chart.chartnumber, ctx, chart.wid, chart.hei, linecord, chart.container, chart.type);
            this.drawUpperChart.barChartUpperCanvas(chart.chartnumber, ctx, chart.wid, chart.hei, linecord, chart.container, chart.type);
            document.querySelector("#"+chartID+" #print_"+chartID).addEventListener('click', function(event) {
                PrintContent(event);
            });
            console.log("End : barChart");
        } catch (err) {
            console.error("Exception occurred in bar chart module:  " + err.message);
        }
    }

    splineChart(chart, chartID, chartNumber) {
        try {
            console.log("Start : lineChart");
            //console.log(chart);
            chart.container = chartID;
            chart.chartnumber = chartNumber;
            chart.wid = document.querySelector("#" + chart.container).clientWidth - 10;
            //chart.wid = chart.width;
            //chart.hei = chart.height;
            chart.hei = document.querySelector('#' + chart.container).clientHeight - 33;

            var titleAndPrintButton = '<h2 class="chartTitle">' + chart.config.title + '</h2>';
                titleAndPrintButton += '<button style="position: absolute;right: 25px;margin-top:-40px" id="print_'+chartID+'">Print</button>'
            document.querySelector('#' + chart.container).innerHTML = titleAndPrintButton;
            var ctx = this.chartSurface.preparePlot(chart.chartnumber, chart.wid, chart.hei, chart.container);
            var verticaldevisions = (chart.yaxis.max - chart.yaxis.min) / chart.yaxis.difference;
            //console.log("verticaldevisions" + verticaldevisions);
            drawGrid(chart.chartnumber, verticaldevisions, ctx, chart.data);
            var canvas = 'canvas' + chart.chartnumber;
            drawGraphicLinearYcord(canvas, ctx, verticaldevisions, chart);
            var maxdata = [chart.yaxis.min, chart.yaxis.max];
            var linecord = [];
            for (var i = 0; i < chart.data.length; i++) {
                this.drawChart.drawsplinechart(canvas, ctx, verticaldevisions, chart.data[i], maxdata, chart.data[i].chartColor, linecord);
            }

            console.log(linecord);
            var ctx = this.chartSurface.preparePlotUpper(chart.chartnumber, chart.wid, chart.hei, chart.container);
            this.drawUpperChart.lineChartUpperCanvas(chart.chartnumber, ctx, chart.wid, chart.hei, linecord, chart.container, chart.type);
            document.querySelector("#"+chartID+" #print_"+chartID).addEventListener('click', function(event) {
                PrintContent(event);
            });
            console.log("End : lineChart");
        } catch (err) {
            console.error("Exception occurred in line chart module:  " + err.message);
        }
    }
}

class cChartMain {
    constructor() {
        cChartMain.initialize();
    };

    static initialize() {
        try {
            console.log("Start : initialize");
            var chartDefining = document.getElementsByTagName('kakarChart');
            //console.log(chartDefining);

            let chartCall = new chartCalling();

            for (var i = 0; i < chartDefining.length; i++) {
                let chartID = chartDefining[i].getAttribute("id");
                let chartData = chartDefining[i].getAttribute("data-value");
                let chartType = eval(chartData).config.chartType;
                let chartNumber = i + 1;
                //console.log("chartType : " + chartType + ", chartID : " + chartID + ", chartData : " + chartData);

                /*Define chart css properties*/
                css(chartDefining[i], {'display' : 'block'});

                switch (chartType) {
                    case "line": {
                        chartCall.lineChart(eval(chartData), chartID, chartNumber);
                        break;
                    }
                    case 'bar': {
                        chartCall.barChart(eval(chartData), chartID, chartNumber);
                        break;
                    }
                    case "pie": {
                        chartCall.pieChart(eval(chartData), chartID, chartNumber);
                        break;
                    }
                    case "donut": {
                        chartCall.donutChart(eval(chartData), chartID, chartNumber);
                        break;
                    }
                    case "meter" : {
                        chartCall.meterChart(eval(chartData), chartID, chartNumber);
                        break;
                    }
                    case "column" : {
                        chartCall.column(eval(chartData), chartID, chartNumber);
                        break;
                    }
                    case "spline" : {
                        chartCall.splineChart(eval(chartData), chartID, chartNumber);
                    }
                    default: {
                        console.log("Invalid choice of chart");
                        break;
                    }
                }
            }

            window.addEventListener("resize", function (e) {
                window.resizeEvt;
                window.addEventListener("resize", function () {
                    clearTimeout(window.resizeEvt);
                    window.resizeEvt = setTimeout(function () {
                        cChartMain.initialize();
                    }, 250);
                });
            });

            console.log("End : initialize");

        } catch (err) {
            console.error("Exception occurred in Home module:  " + err.message);
        }
    }
};

(function () {
    console.info("Enter: Chart Designing initialize function");
    new cChartMain();
    console.info("Exit: Chart Designing initialize function");
})();
