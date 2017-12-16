function chartCalling (chart, chartType, chartID) {
    console.log(chart);
    var charttype = chartType;
    chart.container = chartID;
    chart.wid = $("#" + chart.container).width() - 10;
    //chart.hei = chart.wid  * .50;
    chart.hei = $('#' + chart.container).height();
    console.log("chart.wid :" + chart.wid + ", chart.hei : " + chart.hei);

    if (charttype == 'linechartcomparision') {
        $('#' + chart.container).css({
            'height': chart.hei + 100
        });
        $('#' + chart.container).html('<h2 class="chartTitle">' + chart.title.text + '</h2>');
        var ctx = preparePlot(chart.chartnumber, chart.wid, chart.hei, chart.container);
        var verticaldevisions = (chart.yaxis.max - chart.yaxis.min) / chart.yaxis.difference;
        console.log("verticaldevisions" + verticaldevisions);
        drawGrid(chart.chartnumber, verticaldevisions, ctx, chart.data);
        var canvas = 'canvas' + chart.chartnumber;
        var maxdata = [chart.yaxis.min, chart.yaxis.max];
        var linecord = [];
        for (var i = 0; i < chart.data.length; i++) {
            drawGraphicLinear(canvas, ctx, verticaldevisions, chart.data[i], maxdata, chart.data[i].stroke, linecord);
        }

        drawGraphicLinearYcord(canvas, ctx, verticaldevisions, chart);
        //console.log(linecord);
        var ctx = preparePlotUpper(chart.chartnumber, chart.wid, chart.hei, chart.container);
        drawupercanvas(chart.chartnumber, ctx, chart.wid, chart.hei, linecord, chart.container, chart.type);
    }
    if (charttype == 'splinechart') {
        $('#' + chart.container).css({
            'height': chart.hei + 100
        });
        $('#' + chart.container).html('<h2 class="chartTitle">' + chart.title.text + '</h2>');
        var ctx = preparePlot(chart.chartnumber, chart.wid, chart.hei, chart.container);
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
            drawsplinechart(canvas, ctx, 10, chart.data[i], maxdata, chart.data[i].stroke, linecord);
        }
        //console.log(linecord);
        var ctx = preparePlotUpper(chart.chartnumber, chart.wid, chart.hei, chart.container);
        drawupercanvas(chart.chartnumber, ctx, chart.wid, chart.hei, linecord, chart.container, chart.type);
    }
    if (charttype == 'barchart') {
        $('#' + chart.container).css({
            'height': chart.hei + 100
        });
        //console.log(chart);
        $('#' + chart.container).html('<h2 class="chartTitle">' + chart.title.text + '</h2>');
        var ctx = preparePlot(chart.chartnumber, chart.wid, chart.hei, chart.container);
        var verticaldevisions = (chart.yaxis.max - chart.yaxis.min) / chart.yaxis.difference;
        console.log("verticaldevisions" + verticaldevisions);
        var barwidth = drawGrid(chart.chartnumber, verticaldevisions, ctx, chart.data);
        console.log("barwidth:" + barwidth);
        var canvas = 'canvas' + chart.chartnumber;
        var maxdata = [chart.yaxis.min, chart.yaxis.max];
        console.log("maxdata:" + maxdata);
        var linecord = [];
        var nextcurve = 0;
        var nextcurve = 60;
        for (var i = 0; i < chart.data.length; i++) {
            drawBar(canvas, ctx, verticaldevisions, chart.data[i], maxdata, nextcurve, chart.data[i].stroke, linecord, barwidth);
            nextcurve += barwidth;
        }
        drawGraphicLinearYcord(canvas, ctx, verticaldevisions, chart);
        //console.log(linecord);
        var ctx = preparePlotUpper(chart.chartnumber, chart.wid, chart.hei, chart.container);
        drawupercanvas(chart.chartnumber, ctx, chart.wid, chart.hei, linecord, chart.container, chart.type);
    }
    if (charttype == 'piechart') {
        $('#' + chart.container).css({
            'height': chart.hei + 100
        });
        $('#' + chart.container).html('<h2 class="chartTitle">' + chart.title.text + '</h2>');
        var ctx = preparePlot(chart.chartnumber, chart.wid, chart.hei, chart.container);
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
            drawPie(canvas, ctx, 10, chart.data[i], maxdata, chart.data[i].stroke, linecord);
        }
        //console.log(linecord);
        var ctx = preparePlotUpper(chart.chartnumber, chart.wid, chart.hei, chart.container);
        drawupercanvas(chart.chartnumber, ctx, chart.wid, chart.hei, linecord, chart.container, chart.type);
    }
    if (charttype == 'donutchart') {
        $('#' + chart.container).css({
            'height': chart.hei + 100
        });
        $('#' + chart.container).html('<h2 class="chartTitle">' + chart.title.text + '</h2>');
        var ctx = preparePlot(chart.chartnumber, chart.wid, chart.hei, chart.container);
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
            drawDonut(canvas, ctx, 10, chart.data[i], maxdata, chart.data[i].stroke, linecord);
        }
        //console.log(linecord);
        var ctx = preparePlotUpper(chart.chartnumber, chart.wid, chart.hei, chart.container);
        drawupercanvas(chart.chartnumber, ctx, chart.wid, chart.hei, linecord, chart.container, chart.type);
    }
    if (charttype == 'meterchart') {
        $('#' + chart.container).css({
            'height': chart.hei + 100
        });
        $('#' + chart.container).html('<h2 class="chartTitle">' + chart.title.text + '</h2>');
        var ctx = preparePlot(chart.chartnumber, chart.wid, chart.hei, chart.container);
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
        var linewidth = 50;
        for (var i = 0; i < chart.data.length; i++) {
            drawMeter(canvas, ctx, 10, chart.data[i], maxdata, chart.data[i].stroke, linecord);
        }
        //console.log(linecord);
        var ctx = preparePlotUpper(chart.chartnumber, chart.wid, chart.hei, chart.container);
        drawupercanvas(chart.chartnumber, ctx, chart.wid, chart.hei, linecord, chart.container, chart.type);
    }
}

function prepSurface(nr, width, height, container) {
    //var container = document.getElementById(container);
    $('#' + container).append('<canvas id="canvas' + nr + '" class="canvas"' +
    ' style="position:absolute;" width="' + width + '" height="' + height + '"></canvas> ');
    //document.write();
}

function prepUI(nr) {
    console.log(nr);
    var canvas = document.getElementById('canvas' + nr);
    var ctx = canvas.getContext('2d');
    ctx.font = '12px helvetica';
    ctx.lineWidth = 1;
    return ctx;
}

function preparePlot(nr, sizex, sizey, container) {
    prepSurface(nr, sizex, sizey, container);
    var canvasContext = prepUI(nr);
    return canvasContext;
}

function prepSurfaceupper(nr, width, height, container) {
    var container = document.getElementById(container);
    container.insertAdjacentHTML('beforeend', '<canvas id="canvasupper' + nr + '" class="canvas" style="position:absolute;" width="' + width + '" height="' + height + '"></canvas> 		<div class="canvasjs-chart-tooltip" style="position: absolute; height: auto; box-shadow: rgba(0, 0, 0, 0.0980392) 1px 1px 2px 2px; z-index: 1000; display: none; border-radius: 5px; transition: left 0.2s ease-out, bottom 0.2s ease-out;"><div style="width: auto; height: auto; min-width: 50px; margin: 0px; padding: 5px; font-family: Calibri, Arial, Georgia, serif; font-weight: normal; font-style: italic; font-size: 14px; color: rgb(0, 0, 0); text-shadow: rgba(0, 0, 0, 0.0980392) 1px 1px 1px; text-align: left; border: 2px solid rgb(127, 96, 132); text-indent: 0px; white-space: nowrap; border-radius: 5px; -webkit-user-select: none; background: rgba(255, 255, 255, 0.901961);"><span style="color:#7F6084;"></span>3,125,844</div></div>');
    //container.innerHTML = '<canvas id="canvasupper'+nr+'" width="'+width+'" height="'+height+'"></canvas>'
    //document.write();
}

function prepUIUpper(nr) {
    var canvas = document.getElementById('canvasupper' + nr);
    var ctx = canvas.getContext('2d');
    ctx.font = '12px helvetica';
    ctx.lineWidth = 1;
    return ctx;
}

function preparePlotUpper(nr, sizex, sizey, container) {
    prepSurfaceupper(nr, sizex, sizey, container);
    var canvasContext = prepUIUpper(nr);
    return canvasContext;
}

function drawGrid(nr, verticanNr, ctx, data) {
    var canvas = document.getElementById('canvas' + nr);
    var hei = canvas.height - 60;
    console.log("canvas height to draw grid lines:" + hei);
    var wid = canvas.width - 60;
    console.log("canvas width to draw grid lines:" + wid);
    ctx.beginPath();
    ctx.strokeStyle = 'rgba(0,0,0,.2)';
    ctx.fillStyle = "#000";
    ctx.lineWidth = .3;
    var spacingVertical = hei / verticanNr;
    console.log("canvas vertical spacings to draw grid lines:" + spacingVertical);
    var spacingHorizontal = wid / data[0].datapoints.length;
    console.log("canvas horizontal spacings to draw grid lines:" + spacingHorizontal);
    /*console.log(spacingVertical + 20);
     console.log(wid);*/
    var barwidth = 0;
    if (data.length > 1) {
        barwidth = (spacingHorizontal - 15) / data.length;
    } else {
        barwidth = 15;
    }
    if (barwidth > 15) {
        barwidth = 15;
    }
    ctx.beginPath();
    /*Vertical grid*/
    for (var i = 0; i < data[0].datapoints.length + 1; i++) {
        ctx.moveTo(i * spacingHorizontal + 60, 0);
        ctx.lineTo(i * spacingHorizontal + 60, hei + 5);
    }
    ctx.stroke();
    /*Horizontal grid*/
    for (var i = 0; i < verticanNr + 1; i++) {
        ctx.moveTo(50, i * spacingVertical);
        ctx.lineTo(wid + 60, i * spacingVertical);
    }
    ctx.fill();
    ctx.stroke();
    ctx.closePath();
    return barwidth;
}

function drawGraphicLinearYcord(canvas, ctx, verticalNr, cdata) {
    console.log(cdata);
    var canvas = document.getElementById(canvas);
    var hei = canvas.height - 60;
    var wid = canvas.width - 60;
    var spacingVertical = hei / verticalNr;
    var spacingHorizontal = wid / cdata.data[0].datapoints.length;
    //console.log(spacingHorizontal);
    ctx.beginPath();
    ctx.fillStyle = "#000";
    ctx.save();
    ctx.translate(0, canvas.height / 2);
    ctx.rotate(-Math.PI / 2);
    ctx.textAlign = "center";
    ctx.fillText(cdata.yaxis.title, 0, 10);

    ctx.restore();
    /* xaxis Horizontal Documents*/
    ctx.save();
    ctx.font = "12px arial";
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
            ctx.fillText(cdata.data[0].datapoints[i].lable, i * spacingHorizontal + 64, hei + 15);
        }
    }
    //ctx.restore();

    /* yaxis Vertical Documents*/
    ctx.save();
    for (var i = 0; i < verticalNr + 1; i++) {
        var max = cdata.yaxis.max;
        var min = cdata.yaxis.min;
        var difference = cdata.yaxis.difference;
        ctx.fillText(i * difference, 25, canvas.height - (i * spacingVertical + 50));
    }
    //ctx.restore();
    ctx.closePath();

}

var drawsplinechart = function (canvas, ctx, verticalNr, data, range, stroke, linecord) {
    var canvas = document.getElementById(canvas);
    var spacingVertical = canvas.height / verticalNr;
    var spacingHorizontal = canvas.width / data.datapoints.length;
    var hei = canvas.height - 3 * spacingVertical;
    var totalRange = range[1] - range[0];
    var verticalCoefficient = hei / totalRange;
    var mov;
    ctx.strokeStyle = stroke;
    ctx.beginPath();
    for (var i = 0; i < data.datapoints.length - 1; i++) {
        ctx.moveTo(i * spacingHorizontal, hei - (data.datapoints[i].y - range[0]) * verticalCoefficient + spacingVertical);
        //console.log(i*spacingHorizontal, hei-(data.datapoints[i].y-range[0])*verticalCoefficient+spacingVertical);
        /*if(i == 0){
         if(data.datapoints[i].y < data.datapoints[i+1].y ){
         var anglepoint = 10;
         ctx.bezierCurveTo(i*spacingHorizontal + anglepoint, hei-(data.datapoints[i].y-range[0])*verticalCoefficient+spacingVertical + anglepoint,  (i + 1) * spacingHorizontal - anglepoint, hei-(data.datapoints[i+1].y-range[0])*verticalCoefficient+spacingVertical - anglepoint, (i + 1) * spacingHorizontal, hei-(data.datapoints[i+1].y-range[0])*verticalCoefficient+spacingVertical);
         }else{
         var anglepoint = -10;
         ctx.bezierCurveTo(i*spacingHorizontal + anglepoint, hei-(data.datapoints[i].y-range[0])*verticalCoefficient+spacingVertical + anglepoint,  (i + 1) * spacingHorizontal - anglepoint, hei-(data.datapoints[i+1].y-range[0])*verticalCoefficient+spacingVertical - anglepoint, (i + 1) * spacingHorizontal, hei-(data.datapoints[i+1].y-range[0])*verticalCoefficient+spacingVertical);
         }
         }else if(i == data.datapoints.length){
         if(data.datapoints[i].y < data.datapoints[i+1].y ){
         var anglepoint = 10;
         ctx.bezierCurveTo(i*spacingHorizontal + anglepoint, hei-(data.datapoints[i].y-range[0])*verticalCoefficient+spacingVertical + anglepoint,  (i + 1) * spacingHorizontal - anglepoint, hei-(data.datapoints[i+1].y-range[0])*verticalCoefficient+spacingVertical - anglepoint, (i + 1) * spacingHorizontal, hei-(data.datapoints[i+1].y-range[0])*verticalCoefficient+spacingVertical);
         }else{
         var anglepoint = -10;
         ctx.bezierCurveTo(i*spacingHorizontal + anglepoint, hei-(data.datapoints[i].y-range[0])*verticalCoefficient+spacingVertical + anglepoint,  (i + 1) * spacingHorizontal - anglepoint, hei-(data.datapoints[i+1].y-range[0])*verticalCoefficient+spacingVertical - anglepoint, (i + 1) * spacingHorizontal, hei-(data.datapoints[i+1].y-range[0])*verticalCoefficient+spacingVertical);
         }
         }else{
         if(data.datapoints[i].y < data.datapoints[i+1].y ){
         var anglepoint = 10;
         ctx.bezierCurveTo(i*spacingHorizontal + anglepoint, hei-(data.datapoints[i].y-range[0])*verticalCoefficient+spacingVertical + anglepoint,  (i + 1) * spacingHorizontal - anglepoint, hei-(data.datapoints[i+1].y-range[0])*verticalCoefficient+spacingVertical - anglepoint, (i + 1) * spacingHorizontal, hei-(data.datapoints[i+1].y-range[0])*verticalCoefficient+spacingVertical);
         }else{
         var anglepoint = -10;
         ctx.bezierCurveTo(i*spacingHorizontal + anglepoint, hei-(data.datapoints[i].y-range[0])*verticalCoefficient+spacingVertical + anglepoint,  (i + 1) * spacingHorizontal - anglepoint, hei-(data.datapoints[i+1].y-range[0])*verticalCoefficient+spacingVertical - anglepoint, (i + 1) * spacingHorizontal, hei-(data.datapoints[i+1].y-range[0])*verticalCoefficient+spacingVertical);
         }
         }*/
        ctx.bezierCurveTo(i * spacingHorizontal + 10, hei - (data.datapoints[i].y - range[0]) * verticalCoefficient + spacingVertical + 15, (i + 1) * spacingHorizontal - 10, hei - (data.datapoints[i + 1].y - range[0]) * verticalCoefficient + spacingVertical - 15, (i + 1) * spacingHorizontal, hei - (data.datapoints[i + 1].y - range[0]) * verticalCoefficient + spacingVertical);
        //console.log(i*spacingHorizontal, hei-(data.datapoints[i].y-range[0])*verticalCoefficient+spacingVertical + 15,  (i + 1) * spacingHorizontal - 10, hei-(data.datapoints[i+1].y-range[0])*verticalCoefficient+spacingVertical - 15, (i + 1) * spacingHorizontal, hei-(data.datapoints[i+1].y-range[0])*verticalCoefficient+spacingVertical);
        var newobj = {
            x: i * spacingHorizontal
            , y: hei - (data.datapoints[i].y - range[0]) * verticalCoefficient + spacingVertical
            , lable: data.datapoints[i].lable
        };
        //console.log(newobj);
        linecord.push(newobj);
        ctx.fillText(data.datapoints[i].y, i * spacingHorizontal, hei - (data.datapoints[i].y - range[0]) * verticalCoefficient + spacingVertical);
    }
    ctx.stroke();
    for (var i = 0; i < linecord.length; i++) {
        //console.log(linecord[i]);
        ctx.beginPath();
        ctx.arc(i * spacingHorizontal, hei - (data.datapoints[i].y - range[0]) * verticalCoefficient + spacingVertical, 2, 0, 2 * Math.PI);
        ctx.fill();
        ctx.stroke();
    }
    ctx.closePath();
    return linecord;
};

function drawupercanvas(nr, ctx, width, height, linecord, container, charttype) {
    //var canvasid = document.getElementById('canvasupper'+nr);
    console.log("linechart linecors : " + linecord);
    if (charttype == 'linechartcomparision') {
        document.getElementById('canvasupper' + nr).addEventListener('mousemove', function (evt) {
            ctx.clearRect(0, 0, document.getElementById('canvasupper' + nr).width, document.getElementById('canvasupper' + nr).height);
            var mousePos = getMousePos(document.getElementById('canvasupper' + nr), evt);
            //console.log(mousePos);
            var message = 'Mouse position: ' + mousePos.x + ',' + mousePos.y;
            for (var i = 0; i < linecord.length; i++) {
                ctx.beginPath();
                ctx.arc(linecord[i].x, linecord[i].y, 7, 0, 2 * Math.PI);
                if (ctx.isPointInStroke(mousePos.x, mousePos.y) || ctx.isPointInPath(mousePos.x, mousePos.y)) {
                    ctx.lineWidth = 4;
                    ctx.strokeStyle = 'rgba(0,0,0,.7)';
                    ctx.stroke();
                    //ctx.fill();
                    $('#' + container + ' .canvasjs-chart-tooltip').css({
                        'display': 'block'
                        , 'left': linecord[i].x
                        , 'top': linecord[i].y
                    });
                    $('#' + container + ' .canvasjs-chart-tooltip div').html(linecord[i].lable + ' : ' + linecord[i].dataval);
                    break;
                }
                else {
                    ctx.clearRect(0, 0, document.getElementById('canvasupper' + nr).width, document.getElementById('canvasupper' + nr).height);
                    //$('#'+container+' .canvasjs-chart-tooltip').css({'display':'none'});
                }
                ctx.closePath();
            }
        }, false);

        document.getElementById('canvasupper' + nr).addEventListener('mouseout', function (evt) {
            setTimeout(function () {
                $('#' + container + ' .canvasjs-chart-tooltip').css({
                    'display': 'none'
                });
            }, 2000);
        });
    }
    if (charttype == 'barchart') {
        document.getElementById('canvasupper' + nr).addEventListener('mousemove', function (evt) {
            ctx.clearRect(0, 0, document.getElementById('canvasupper' + nr).width, document.getElementById('canvasupper' + nr).height);
            var mousePos = getMousePos(document.getElementById('canvasupper' + nr), evt);
            //console.log(mousePos);
            var message = 'Mouse position: ' + mousePos.x + ',' + mousePos.y;
            //					/console.log(message);
            for (var i = 0; i < linecord.length; i++) {
                ctx.beginPath();
                ctx.rect(linecord[i].x, linecord[i].y, linecord[i].wid, linecord[i].hei);
                if (ctx.isPointInStroke(mousePos.x, mousePos.y) || ctx.isPointInPath(mousePos.x, mousePos.y)) {
                    ctx.lineWidth = .5;
                    ctx.fillStyle = 'rgba(0,0,0,.3)'
                    ctx.fill();
                    ctx.stroke();
                    $('#' + container + ' .canvasjs-chart-tooltip').css({
                        'display': 'block'
                        , 'left': linecord[i].x
                        , 'top': linecord[i].y
                    });
                    $('#' + container + ' .canvasjs-chart-tooltip div').html(linecord[i].lable + ' : ' + linecord[i].dataval);
                    break;
                }
                else {
                    ctx.clearRect(0, 0, document.getElementById('canvasupper' + nr).width, document.getElementById('canvasupper' + nr).height);
                    //$('#'+container+' .canvasjs-chart-tooltip').css({'display':'none'});
                }
            }
        }, false);
        document.getElementById('canvasupper' + nr).addEventListener('mouseout', function (evt) {
            setTimeout(function () {
                $('#' + container + ' .canvasjs-chart-tooltip').css({
                    'display': 'none'
                });
            }, 2000);
        });
    }
    if (charttype == 'piechart') {
        document.getElementById('canvasupper' + nr).addEventListener('mousemove', function (evt) {
            ctx.clearRect(0, 0, document.getElementById('canvasupper' + nr).width, document.getElementById('canvasupper' + nr).height);
            var mousePos = getMousePos(document.getElementById('canvasupper' + nr), evt);
            var message = 'Mouse position: ' + mousePos.x + ',' + mousePos.y;
            //console.log(message);
            for (var i = 0; i < linecord.length; i++) {
                ctx.beginPath();
                ctx.lineTo(linecord[i].wid/2, linecord[i].hei/2);
                ctx.arc(linecord[i].wid/2, linecord[i].hei/2, linecord[i].hei/2, linecord[i].startangle, linecord[i].lastangle, false);
                ctx.lineTo(linecord[i].x, linecord[i].x);
                if (ctx.isPointInStroke(mousePos.x, mousePos.y) || ctx.isPointInPath(mousePos.x, mousePos.y)) {
                    /*ctx.lineWidth=1;
                     ctx.stroke();*/
                    ctx.fillStyle = 'rgba(0,0,0,.3)'
                    ctx.fill();
                    $('#' + container + ' .canvasjs-chart-tooltip').css({
                        'display': 'block'
                        , 'left': mousePos.x
                        , 'top': mousePos.y
                    });
                    $('#' + container + ' .canvasjs-chart-tooltip div').html(linecord[i].lable + ' : ' + linecord[i].y);
                    break;
                }
                else {
                    ctx.clearRect(0, 0, document.getElementById('canvasupper' + nr).width, document.getElementById('canvasupper' + nr).height);
                    //$('#'+container+' .canvasjs-chart-tooltip').css({'display':'none'});
                    /*ctx.fillStyle = 'rgba(255,255,255,0)';
                     ctx.strokeStyle="#FF0000";
                     ctx.lineWidth=0;*/
                }
                //
            }
        }, false);
        document.getElementById('canvasupper' + nr).addEventListener('mouseout', function (evt) {
            setTimeout(function () {
                ctx.clearRect(0, 0, document.getElementById('canvasupper' + nr).width, document.getElementById('canvasupper' + nr).height);
                $('#' + container + ' .canvasjs-chart-tooltip').css({
                    'display': 'none'
                });
            }, 2000);
        });
    }
    if (charttype == 'donutchart') {
        document.getElementById('canvasupper' + nr).addEventListener('mousemove', function (evt) {
            ctx.clearRect(0, 0, document.getElementById('canvasupper' + nr).width, document.getElementById('canvasupper' + nr).height);
            var linewidth = 50;
            var mousePos = getMousePos(document.getElementById('canvasupper' + nr), evt);
            var message = 'Mouse position: ' + mousePos.x + ',' + mousePos.y;
            //console.log(message);
            for (var i = 0; i < linecord.length; i++) {
                var radius = linecord[i].hei / 2 - linewidth;
                ctx.lineWidth = radius/2;
                ctx.beginPath();
                //ctx.lineTo(linecord[i].x, linecord[i].x);
                ctx.arc(linecord[i].wid / 2, linecord[i].hei / 2, radius, linecord[i].startangle, linecord[i].lastangle, false);
                //ctx.lineTo(linecord[i].x, linecord[i].x);
                if (ctx.isPointInStroke(mousePos.x, mousePos.y)) {
                    /*ctx.lineWidth=1;*/
                    ctx.strokeStyle = "rgba(0,0,0,0.2)";
                    ctx.stroke();
                    $('#' + container + ' .canvasjs-chart-tooltip').css({
                        'display': 'block'
                        , 'left': mousePos.x
                        , 'top': mousePos.y + 5
                    });
                    $('#' + container + ' .canvasjs-chart-tooltip div').html(linecord[i].lable + ' : ' + linecord[i].y);
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
                $('#' + container + ' .canvasjs-chart-tooltip').css({
                    'display': 'none'
                });
            }, 2000);
        });
    }
    if (charttype == 'splinechart') {
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
            var message = 'Mouse position: ' + mousePos.x + ',' + mousePos.y;
            for (var i = 0; i < linecord.length; i++) {
                ctx.beginPath();
                ctx.arc(linecord[i].x, linecord[i].y, 5, 0, 2 * Math.PI);
                if (ctx.isPointInStroke(mousePos.x, mousePos.y) || ctx.isPointInPath(mousePos.x, mousePos.y)) {
                    ctx.lineWidth = 4;
                    ctx.strokeStyle = 'rgba(0,0,0,.5)';
                    ctx.stroke();
                    $('#' + container + ' .canvasjs-chart-tooltip').css({
                        'display': 'block'
                        , 'left': linecord[i].x
                        , 'top': linecord[i].y + 5
                    });
                    $('#' + container + ' .canvasjs-chart-tooltip div').html(linecord[i].lable);
                    break;
                }
                if (!(ctx.isPointInStroke(mousePos.x, mousePos.y))) {
                    ctx.clearRect(0, 0, document.getElementById('canvasupper' + nr).width, document.getElementById('canvasupper' + nr).height);
                }
            }
        }, false);
        document.getElementById('canvasupper' + nr).addEventListener('mouseout', function (evt) {
            setTimeout(function () {
                $('#' + container + ' .canvasjs-chart-tooltip').css({
                    'display': 'none'
                });
            }, 2000);
        });
    }
};

 function drawGraphicLinear(canvas, ctx, verticalNr, data, range, stroke, linecord) {
    var canvas = document.getElementById(canvas);
    var hei = canvas.height - 60;
    var wid = canvas.width - +60
    var spacingVertical = hei / verticalNr;
    console.log("spacingVertical:" + spacingVertical);
    var spacingHorizontal = wid / data.datapoints.length;
    console.log("spacingHorizontal:" + spacingHorizontal);

    var totalRange = range[1] - range[0];
    var verticalCoefficient = hei / totalRange;
    var mov;
    ctx.strokeStyle = stroke;
    ctx.beginPath();
    var xcord = 60;
    var ycord = hei - (data.datapoints[0].y - range[0]) * verticalCoefficient;
    for (var i = 0; i < data.datapoints.length; i++) {
        console.log(xcord, ycord);
        ctx.beginPath();
        ctx.moveTo(xcord + 7, ycord);
        ctx.strokeStyle = stroke;
        ctx.lineWidth = .6;
        if (i > 0) {
            xcord = i * spacingHorizontal + 60;
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
            ctx.lineWidth = 2.5;
            //ctx.strokeStyle = "red";
            ctx.arc(xcord, ycord, 7, 0, 2 * Math.PI);
            ctx.fillStyle = "#ffffff";
            ctx.fill();
            ctx.stroke();
            ctx.closePath();
            ctx.lineWidth = 3;
            //ctx.restore();
        })();
        ctx.closePath();
        ctx.lineWidth = 1;

        var newobj = {
            x: i * spacingHorizontal + 60
            , y: hei - (data.datapoints[i].y - range[0]) * verticalCoefficient
            , lable: data.datapoints[i].lable
            , dataval: data.datapoints[i].y
        };
        //console.log(newobj);
        linecord.push(newobj);
    }
    return linecord;
};

var drawBar = function (canvas, ctx, verticalNr, data, range, curx, stroke, linecord, barwidth) {
    var canvas = document.getElementById(canvas);
    var hei = canvas.height - 60;
    var wid = canvas.width - 60;
    var spacingVertical = hei / verticalNr;
    var spacingHorizontal = wid / data.datapoints.length;
    console.log("barChart spacingHorizontal :" + spacingHorizontal);
    console.log("barchart div width :" + wid);
    var totalcompare = data.datapoints.length;
    //var barwidth = 15;
    ctx.beginPath();
    ctx.strokeStyle = stroke;
    //ctx.moveTo(0, hei-(data[0]-range[0])*verticalCoefficient+spacingVertical);
    for (var i = 0; i < data.datapoints.length; i++) {
        ctx.fillStyle = stroke;
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
    console.log(linecord);
    return linecord;
};

var drawPie = function(canvas, ctx, verticalNr, data, range, stroke, linecord) {
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
}

var drawDonut = function(canvas, ctx, verticalNr, data, range, stroke, linecord) {
    var canvas = document.getElementById(canvas);
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    var linewidth = 50;
    var radius = canvas.height / 2 - linewidth;
    ctx.lineWidth = radius/2;
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
            wid : canvas.width
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
    for (i = 0; i < data.datapoints.length; i++) {
        if (data.datapoints[i].y != 0) {
            anglenew = (Math.PI * 2 * (data.datapoints[i].y / myTotal));
            var anglemiddle = anglenew / 3;
            var fx = (canvas.width/2) + radius * Math.cos(angle + anglemiddle);
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
}

function drawMeter(canvas, ctx, verticalNr, data, range, stroke, linecord) {
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
    ctx.font = "14px arial";
    ctx.save();

    /*Text in data format loop*/
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
}
/*function drawmultiBar(canvas, ctx, verticalNr, data, range, stroke, linecord){
 var canvas = document.getElementById('canvas'+nr);
 var spacingVertical = canvas.height/verticalNr;
 var spacingHorizontal = canvas.width/data.datapoints.length;
 var hei = canvas.height-spacingVertical;
 var width = 20;
 var curx = 0;

 ctx.beginPath();
 ctx.strokeStyle = stroke;
 //ctx.moveTo(0, hei-(data[0]-range[0])*verticalCoefficient+spacingVertical);

 for(var i = 0; i<data.datapoints.length;i++){
 var h = (data.datapoints[i].y/range[1])*hei;
 var h1 = ((data1[i]/range[1])*hei)+h;
 var h2 = ((data2[i]/range[1])*hei)+h1;

 ctx.fillStyle = plot1;
 ctx.fillRect(curx, hei - h2 , width, h2);

 ctx.fillStyle = text;
 ctx.fillRect(curx, hei - h1, width, h1);

 ctx.fillStyle = plot;
 ctx.fillRect(curx, hei - h , width, h);

 ctx.fillStyle = '#bbb';
 ctx.fillText(data2[i], curx, hei-h2+10);
 ctx.fillText(data1[i], curx, hei-h1+10);
 ctx.fillText(data[i], curx, hei-h+10);

 curx +=  spacingHorizontal;
 }
 ctx.stroke();
 ctx.closePath();
 }*/
function enumerateIt(nr, hei, spacv, spach) {
    var data = data2;
    ctx.fillStyle = text;
    for (var i = 0; i < data.length; i++) {
        ctx.fillText(i + 1, spach * i + 4, hei + 2 * spacv + 20);
    }
}

function writeMessage(canvas, message) {
    ctx.font = '18pt Calibri';
    ctx.fillStyle = 'black';
    ctx.fillText(message, 10, 25);
}

function getMousePos(canvas, evt) {
    var rect = canvas.getBoundingClientRect();
    return {
        x: (evt.clientX - rect.left) / (rect.right - rect.left) * canvas.width
        , y: (evt.clientY - rect.top) / (rect.bottom - rect.top) * canvas.height
    };
}


var cChartMain = function () {
    var selft = this;
    self.initialize = function () {
        try {

            var chartDefining = $('body').find('kakarChart');
            console.log(chartDefining);
            for (var i = 0; i < chartDefining.length; i++) {
                var chartType = $(chartDefining[0]).attr("data-chart-type");
                var chartID = $(chartDefining[0]).attr("id");
                var dataVal = $(chartDefining[0]).data("value");
                console.log("chartType : " + chartType + ", chartID : " + chartID + ", dataVal : " + dataVal);
                chartCalling(eval(dataVal), chartType, chartID);
            }

            $( window ).resize(function() {
                console.log("resizing window");
                self.initialize();
            });

        } catch (err) {
            console.error("Exception occurred in Home module:  " + err.message);
        }
    };
    self.initialize();
};

(function () {
    console.info("Enter: Chart Designing initialize function");
    new cChartMain();
    console.info("Exit: Chart Designing initialize function");
})();
