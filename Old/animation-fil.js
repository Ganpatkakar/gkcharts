class CanvasFunctions {
    constructor() {
        //this.drawLine.bind(this);
        this.getVertices.bind(this);
        this.calcWaypoints.bind(this);
        this.animate.bind(this);
        this.t = 1;
    }

    animate(ctx, points) {
        if (this.t < points.length - 1) {
            requestAnimationFrame(this.animate.bind(this, ctx, points));
        }
        let p = points.slice(0, this.t);
        this.fillArea(ctx, p);
        // draw a line segment from the last waypoint
        // to the current waypoint
        ctx.beginPath();
        ctx.moveTo(points[this.t - 1].x, points[this.t - 1].y);
        ctx.lineTo(points[this.t].x, points[this.t].y);
        ctx.stroke();
        // increment "t" to get the next waypoint
        this.t = this.t+1;
    }
    // drawLine(ctx) {
    //     console.log("Start: drawLine");
    //     ctx.moveTo(0, 0);
    //     ctx.lineTo(200, 100);
    //     ctx.stroke();
    //     console.log("END: drawLine");
    // }
    fillArea(ctx, vertices){
        console.log(vertices);
        vertices.push({x:vertices[vertices.length-1].x, y: 300})
        ctx.moveTo(10, 300)
        for(let points = 1; points < vertices.length; points++){
            ctx.lineTo(vertices[points].x, vertices[points].y);
        }
        ctx.strokeWidth = 1;
        ctx.stroke();
        //ctx.clearRect(0,0,500,300);
        //ctx.closePath();
        ctx.fillStyle = "rgba(0,255,0,.1)";
        //ctx.strokeStyle = "rgb(0,255,0)";
        
        ctx.fill()
    }
    getVertices() {
        let vertices = [ {
            x: 10, y: 100
        }, {
            x: 100, y: 30
        },{
            x: 200, y: 150
        }, {
            x: 300, y: 100
        }, {
            x: 400, y: 190
        }]
        return vertices;
    }
    calcWaypoints(vertices) {
        var waypoints = [];
        for (var i = 1; i < vertices.length; i++) {
            var pt0 = vertices[i - 1];
            var pt1 = vertices[i];
            var dx = pt1.x - pt0.x;
            var dy = pt1.y - pt0.y;
            for (var j = 0; j < 100; j = j+2) {
                var x = pt0.x + dx * j / 100;
                var y = pt0.y + dy * j / 100;
                waypoints.push({
                    x: x,
                    y: y
                });
            }
        }
        return (waypoints);
    }
}
class CanvasAnimation extends CanvasFunctions {
    constructor() {
        super();
        this.initialize();
    }
    initialize() {
        console.log("Start: Initialize");
        var c = document.getElementById("canvas");
        var ctx = c.getContext("2d");
        let vertices = this.getVertices();
        let points = this.calcWaypoints(vertices);
        this.animate(ctx, points);
        //this.fillArea(ctx, vertices);
        //this.drawLine(ctx, vertices);
        console.log("END: Initialize");
    }
}
(function () {
    new CanvasAnimation()
})()
