
var datapoints = [{
  "lable": "Jan"
  , "y": 40
}, {
  "lable": "Feb"
  , "y": 180
}, {
  "lable": "Mar"
  , "y": 60
}, {
  "lable": "Apr"
  , "y": 300
}, {
  "lable": "May"
  , "y": 140
}, {
  "lable": "Jun"
  , "y": 240
}
];

var datapoints1 = [{
  "lable": "January"
  , "y": 20
}, {
  "lable": "Feb"
  , "y": 120
}, {
  "lable": "Mar"
  , "y": 210
}, {
  "lable": "Apr"
  , "y": 246
}, {
  "lable": "May"
  , "y": 96
}, {
  "lable": "Jun"
  , "y": 15
}
];

var chartline = {
  "container": "linechart"
  , "chartnumber": 2
  , "type": 'linechartcomparision'
  , "title": {
    "text": "line Chart"
  },
  "yaxis" : {
    "min" : 0,
    "max" : 400,
    "difference" : 50,
    "title" : "Hours"
  }
  , "data": [
    {
      "stroke": "#00d554"
      , "datapoints": datapoints
    }

  ]
};
chartCalling(chartline);

var charts = {
  "container": "linechartcomparision"
  , "chartnumber": 1
  , "type": 'linechartcomparision'
  , "title": {
    "text": "line chart Comparision"
  },
  "yaxis" : {
    "min" : 0,
    "max" : 400,
    "difference" : 50,
    "title" : "Days"
  }
  , "data": [
    {
      "stroke": "#00d554"
      , "datapoints": datapoints
    }
    , {
      "stroke": "#ff0000"
      , "ydataname": "Days"
      , "datapoints": datapoints1
    }

  ]
};
chartCalling(charts);
var chartbar = {
  "container": "barchart"
  , "chartnumber": 3
  , "type": 'barchart'
  , "title": {
    "text": "Bar Chart"
  },
  "yaxis" : {
    "min" : 0,
    "max" : 400,
    "difference" : 50,
    "title" : "Hours"
  }
  , "data": [{
    "stroke": "#00d554"
    , "datapoints": datapoints
  }]
};
chartCalling(chartbar);
var multilinebar = {
  "container": "multibarchart"
  , "chartnumber": 5
  , "type": 'barchart'
  , "title": {
    "text": "Multi Line Bar Chart"
  },
  "yaxis" : {
    "min" : 0,
    "max" : 400,
    "difference" : 50,
    "title" : "Hours"
  }
  , "data": [
    {
      "stroke": "#009788"
      , "datapoints": datapoints
    }
    , {
      "stroke": "#00d554"
      , "datapoints": datapoints1
    }

  ]
};
chartCalling(multilinebar);
var piechart = {
  "container": "piechart"
  , "chartnumber": 4
  , "type": 'piechart'
  , "title": {
    "text": "Pie Chart"
  }
  , "data": [{
    "stroke": "#ff0000"
    , "datapoints": [{
      "lable": "Jan"
      , "y": 200
      , "color": "teal"
    }, {
      "lable": "Feb"
      , "y": 90
      , "color": "#b84335"
    }, {
      "lable": "Mar"
      , "y": 45
      , "color": "#fbbc05"
    }]
  }]
};
chartCalling(piechart);
var donut = {
  "container": "donutchart"
  , /*Give exact id of you container div*/ "chartnumber": 6
  , /*Never keep it same with other charts*/ "type": 'donutchart'
  , /*keep same names as instructed - donutchart, linechartcomparision, barchart, piechart*/ "title": {
    "text": "Donut Chart"
  }
  , "data": [{
    "stroke": "#ff0000"
    , "datapoints": [{
      "lable": "Jan"
      , "y": 200
      , "color": "teal"
    }, {
      "lable": "Feb"
      , "y": 90
      , "color": "#b84335"
    }, {
      "lable": "Mar"
      , "y": 45
      , "color": "#fbbc05"
    }]
  }]
};
chartCalling(donut);
var meter = {
  "container": "meterchart"
  , /*Give exact id of you container div*/ "chartnumber": 8
  , /*Never keep it same with other charts*/ "type": 'meterchart'
  , /*keep same names as instructed - donutchart, linechartcomparision, barchart, piechart*/ "title": {
    "text": "Meter Gauge Chart"
  }
  , "data": [ /*Give as required data in given formate, syntax error with json will cause of error in charts*/
    {
      "stroke": "#ff0000"
      , "datapoints": [
      {
        "lable": "Poor"
        , "y": 25
        , "color": "#ff0000"
      }
      , {
        "lable": "Blw Avg"
        , "y": 25
        , "color": "#ff0000"
      }
      , {
        "lable": "Average"
        , "y": 25
        , "color": "#00ff00"
      }
      , {
        "lable": "Abv Avg"
        , "y": 15
        , "color": "#00ff00"
      }
      , {
        "lable": "Exceed"
        , "y": 10
        , "color": "#00ff00"
      }
    ]
      , dataval: 77
    }
  ]
};
chartCalling(meter);

$(window).resize(function(){
  chartCalling(charts);
  chartCalling(chartline);
  chartCalling(multilinebar);
  chartCalling(chartbar);
  chartCalling(meter);
  chartCalling(piechart);
});
