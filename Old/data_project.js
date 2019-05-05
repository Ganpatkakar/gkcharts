var datapoints = [{
    "label": "January",
    "y": 40
  },
  {
    "label": "Feburary",
    "y": 180
  },
  {
    "label": "March",
    "y": 60
  },
  {
    "label": "April",
    "y": 300
  },
  {
    "label": "May",
    "y": 140
  },
  {
    "label": "June",
    "y": 240
  }
];

var datapoints1 = [{
    "label": "January",
    "y": 20
  },
  {
    "label": "Feb",
    "y": 120
  },
  {
    "label": "Mar",
    "y": 210
  },
  {
    "label": "Apr",
    "y": 246
  },
  {
    "label": "May",
    "y": 96
  },
  {
    "label": "Jun",
    "y": 15
  }
];

var chartline = {
  "config": {
    "title": "Line Chart",
    "chartType": "line",
    "printEnable" : true
  },
  "data": [{
    "chartColor": "#00d554",
    "fill": false,
    "dataLabel" : "Data Set 1",
    "datapoints": datapoints
  }]
};

var stepChart = {
  "config": {
    "title": "Step Chart",
    "chartType": "step",
    "printEnable" : true
  },
  "data": [{
    "chartColor": "#00d554",
    "fill": false,
    "dataLabel" : "Data Set 1",
    "datapoints": datapoints
  }]
};

var stepChartFill = {
  "config": {
    "title": "Step Area Chart",
    "chartType": "step",
    "dataLabel" : "Data Set 1",
    "printEnable" : true
  },
  "data": [{
    "chartColor": "#00d554",
    "fill": true,
    "dataLabel" : "Data Set 2",
    "datapoints": datapoints
  }]
};

var stepChartComparision = {
  "config": {
    "title": "Multi Step Comparision Chart",
    "chartType": "step",
    "printEnable" : true
  },
  "data": [{
    "chartColor": "#00d554",
    "fill": false,
    "dataLabel" : "Data Set 1",
    "datapoints": datapoints
  }, {
    "chartColor": "#ff0000",
    "fill": false,
    "dataLabel" : "Data Set 2",
    "datapoints": datapoints1
  }]
};

var stepChartComparisionFill = {
  "config": {
    "title": "Multi Step Area Comparision Chart",
    "chartType": "step",
    "printEnable" : true
  },
  "data": [{
    "chartColor": "#00d554",
    "fill": true,
    "dataLabel" : "Data Set 1",
    "datapoints": datapoints
  }, {
    "chartColor": "#ff0000",
    "fill": true,
    "dataLabel" : "Data Set 2",
    "datapoints": datapoints1
  }]
};

var chartlineFill = {
  "config": {
    "title": "Line Area Chart",
    "chartType": "line",
    "printEnable" : true
  },
  "data": [{
    "chartColor": "#00d554",
    "fill": true,
    "dataLabel" : "Data Set 1",
    "datapoints": datapoints
  }]
};

var chartspline = {
  "config": {
    "title": "Smooth Line Chart",
    "chartType": "spline"
  },
  "data": [{
    "chartColor": "#00d554",
    "fill": false,
    "dataLabel" : "Data Set 1",
    "datapoints": datapoints
  }]
};

var chartsplineFill = {
  "config": {
    "title": "Smooth Line Area Chart",
    "chartType": "spline"
  },
  "data": [{
    "chartColor": "#00d554",
    "fill": true,
    "dataLabel" : "Data Set 1",
    "datapoints": datapoints
  }]
};

var chartlineComparision = {
  "config": {
    "title": "Multi Line Comparision Chart",
    "chartType": "line",
    "printEnable" : true
  },
  "data": [{
      "chartColor": "#00d554",
      "fill": false,
      "dataLabel" : "Data Set 1",
      "datapoints": datapoints
    }, {
      "chartColor": "#ff0000",
      "fill": false,
      "dataLabel" : "Data Set 2",
      "datapoints": datapoints1
    }

  ]
};

var chartlineComparisionFill = {
  "config": {
    "title": "Multi Line Area Comparision Chart",
    "chartType": "line",
    "printEnable" : true
  },
  "data": [{
      "chartColor": "#00d554",
      "fill": true,
      "dataLabel" : "Data Set 1",
      "datapoints": datapoints
    }, {
      "chartColor": "#ff0000",
      "fill": true,
      "dataLabel" : "Data Set 2",
      "datapoints": datapoints1
    }

  ]
};

var multichartspline = {
  "config": {
    "title": "Multi Smooth Line Comparision Chart",
    "chartType": "spline"
  },
  "data": [{
      "chartColor": "#00d554",
      "dataLabel" : "Data Set 1",
      "datapoints": datapoints
    }, {
      "chartColor": "#ff0000",
      "dataLabel" : "Data Set 2",
      "ydataname": "Days",
      "datapoints": datapoints1
    }

  ]
};

var multichartsplineFill = {
  "config": {
    "title": "Multi Smooth Line Area Comparision Chart",
    "chartType": "spline"
  },
  "data": [{
      "chartColor": "#00d554",
      "fill": true,
      "dataLabel" : "Data Set 1",
      "datapoints": datapoints
    }, {
      "chartColor": "#ff0000",
      "fill": true,
      "dataLabel" : "Jan",
      "dataLabel" : "Data Set 2",
      "datapoints": datapoints1
    }

  ]
};

var chartbar = {
  "config": {
    "title": "Bar Chart",
    "chartType": 'bar'
  },
  "data": [{
    "chartColor": "#00d554",
    "dataLabel" : "Data set 1",
    "datapoints": datapoints
  }]
};

var chartColumn = {
  "config": {
    "title": "Multi Bar and Line Comparision Chart",
    "chartType": 'column',
    "printEnable" : true
  },
  "data": [
    {
      "chartColor": "#00d554",
      "type": 'bar',
      "dataLabel" : "Data set 1",
      "datapoints": datapoints1
    },
    {
      "chartColor": "teal",
      "type": 'bar',
      "dataLabel" : "Data set 2",
      "datapoints": datapoints
    },
    {
      "chartColor": "red",
      "type": 'line',
      "dataLabel" : "Data set 3",
      "fill": false,
      "datapoints": [{
        "label": "Jan",
        "y": 40
      }, {
        "label": "Feb",
        "y": 180
      }, {
        "label": "Mar",
        "y": 60
      }, {
        "label": "Apr",
        "y": 300
      }, {
        "label": "May",
        "y": 140
      }, {
        "label": "Jun",
        "y": 200
      }]
    }
  ]
}

var chartColumnFill = {
  "config": {
    "title": "Multi Bar and Line Area Comparision Chart",
    "chartType": 'column',
    "printEnable" : true
  },
  "data": [
    {
      "chartColor": "#00d554",
      "type": 'bar',
      "dataLabel" : "Data set 1",
      "datapoints": datapoints1
    },
    {
      "chartColor": "teal",
      "type": 'bar',
      "dataLabel" : "Data set 2",
      "datapoints": datapoints
    },
    {
      "chartColor": "red",
      "type": 'line',
      "fill": true,
      "dataLabel" : "Data set 3",
      "datapoints": [{
        "label": "Jan",
        "y": 40
      }, {
        "label": "Feb",
        "y": 180
      }, {
        "label": "Mar",
        "y": 60
      }, {
        "label": "Apr",
        "y": 300
      }, {
        "label": "May",
        "y": 140
      }, {
        "label": "Jun",
        "y": 200
      }]
    }
  ]
}

var columnLineBar = {
  "config": {
    "title": "Bar and Line Comparision Chart",
    "chartType": 'column',
    "printEnable" : true
  },
  "data": [{
      "chartColor": "teal",
      "type": 'bar',
      "dataLabel" : "Data set 1",
      "datapoints": datapoints
    },
    {
      "chartColor": "red",
      "type": 'line',
      "fill": true,
      "dataLabel" : "Data set 2",
      "datapoints": datapoints1
    }
  ]
}

var chartColumnSpline = {
  "config": {
    "title": "Multi Bar and Smooth Line Comparision Chart",
    "chartType": 'column',
    "printEnable" : true
  },
  "data": [{
      "chartColor": "#00d554",
      "type": 'bar',
      "dataLabel" : "Data set 1",
      "datapoints": datapoints1
    },
    {
      "chartColor": "teal",
      "type": 'bar',
      "dataLabel" : "Data set 2",
      "datapoints": datapoints
    },
    {
      "chartColor": "red",
      "type": 'spline',
      "fill": false,
      "dataLabel" : "Data set 3",
      "datapoints": [{
        "label": "Jan",
        "y": 40
      }, {
        "label": "Feb",
        "y": 180
      }, {
        "label": "Mar",
        "y": 60
      }, {
        "label": "Apr",
        "y": 300
      }, {
        "label": "May",
        "y": 140
      }, {
        "label": "Jun",
        "y": 200
      }]
    }
  ]
}

var chartColumnSplineFill = {
  "config": {
    "title": "Multi Bar and Line Area Comparision Chart",
    "chartType": 'column',
    "printEnable" : true
  },
  "data": [{
      "chartColor": "#00d554",
      "type": 'bar',
      "dataLabel" : "Data set 1",
      "datapoints": datapoints1
    },
    {
      "chartColor": "teal",
      "type": 'bar',
      "dataLabel" : "Data set 2",
      "datapoints": datapoints
    },
    {
      "chartColor": "yellow",
      "type": 'bar',
      "dataLabel" : "Data set 3",
      "datapoints": [{
        "label": "Jan",
        "y": 40
      }, {
        "label": "Feb",
        "y": 180
      }, {
        "label": "Mar",
        "y": 60
      }, {
        "label": "Apr",
        "y": 300
      }, {
        "label": "May",
        "y": 140
      }, {
        "label": "Jun",
        "y": 200
      }]
    },
    {
      "chartColor": "red",
      "type": 'spline',
      "fill": true,
      "dataLabel" : "Data set 4",
      "datapoints": [
        {
        "label": "Jan",
        "y": 40
      }, {
        "label": "Feb",
        "y": 180
      }, {
        "label": "Mar",
        "y": 60
      }, {
        "label": "Apr",
        "y": 300
      }, {
        "label": "May",
        "y": 140
      }, {
        "label": "Jun",
        "y": 200
      }]
    }
  ]
}

var multilinebar = {
  "config": {
    "title": "Multi Bar Chart Comparision",
    "chartType": 'bar'
  },
  "data": [{
      "chartColor": "#009788",
      "dataLabel" : "Data set 1",
      "datapoints": datapoints
    }, {
      "chartColor": "#00d554",
      "dataLabel" : "Data set 2",
      "datapoints": datapoints1
    }

  ]
};

var piechart = {
  "config": {
    "title": "Pie Chart",
    "chartType": "pie"
  },
  "data": [{
    "datapoints": [{
        "label": "Jan",
        "y": 200,
        "color": "teal"
      }, {
        "label": "Feb",
        "y": 90,
        "color": "#b84335"
      }, {
        "label": "Mar",
        "y": 45,
        "color": "#fbbc05"
      }, {
        "label": "Apr",
        "y": 70,
        "color": "gray"
      }, {
        "label": "May",
        "y": 95,
        "color": "purple"
      }
      // ,{
      //     "label": "Jun"
      //     , "y": 30
      //     , "color": "blue"
      // },{
      //     "label": "July"
      //     , "y": 140
      //     , "color": "violet"
      // },{
      //     "label": "Aug"
      //     , "y": 110
      //     , "color": "magenta"
      // },{
      //     "label": "Sep"
      //     , "y": 170
      //     , "color": "red"
      // }
    ]
  }]
};

var donut = {
  "config": {
    "title": "Doughnut Chart",
    "chartType": "donut"
  },
  "data": [{
    "chartColor": "#ff0000",
    "datapoints": [{
      "label": "Jan",
      "y": 200,
      "color": "teal"
    }, {
      "label": "Feb",
      "y": 90,
      "color": "#b84335"
    }, {
      "label": "Mar",
      "y": 45,
      "color": "#fbbc05"
    }, {
      "label": "Apr",
      "y": 70,
      "color": "gray"
    }, {
      "label": "May",
      "y": 95,
      "color": "purple"
    }]
  }]
};

var meter = {
  "config": {
    "title": "Meter Gauge Chart",
    "chartType": "meter"
  },
  "data": [ /*Give as required data in given formate, syntax error with json will cause of error in charts*/ {
    "chartColor": "#ff0000",
    "datapoints": [{
      "label": "Poor",
      "y": 50,
      "color": "#ff0000"
    }, {
      "label": "Blw Avg",
      "y": 25,
      "color": "#ff0000"
    }, {
      "label": "Average",
      "y": 25,
      "color": "#00ff00"
    }, {
      "label": "Abv Avg",
      "y": 35,
      "color": "#00ff00"
    }, {
      "label": "Exceed",
      "y": 10,
      "color": "#00ff00"
    }],
    dataval: 77
  }]
};

var step = new GKChart({
  id: "stepChart",
  data: stepChart
});

var stepCompare = new GKChart({
  id: "stepChartComparision",
  data: stepChartComparision
});

var stepFill = new GKChart({
  id: "stepChartFill",
  data: stepChartFill
});

var stepCompareFill = new GKChart({
  id: "stepChartComparisionFill",
  data: stepChartComparisionFill
});

var chartLine = new GKChart({
  id: "chartline",
  data: chartline
});

var chartLineCompare = new GKChart({
  id: "chartlineComparision",
  data: chartlineComparision
})

var chartLineFill = new GKChart({id: "chartlineFill", data: chartlineFill});


var chartLineCompareFill = new GKChart({id: "chartlineComparisionFill", data: chartlineComparisionFill});


new GKChart({id: "chartspline", data: chartspline})
new GKChart({id: "multichartspline", data: multichartspline});
new GKChart({id: "chartsplineFill", data: chartsplineFill});
new GKChart({id: "multichartsplineFill", data: multichartsplineFill});

new GKChart({id: "chartbar", data: chartbar});
new GKChart({id: "multilinebar", data: multilinebar});

new GKChart({id: "piechart", data: piechart});
new GKChart({id: "donut", data: donut});
new GKChart({id: "meter", data: meter});

new GKChart({id: "chartColumn", data: chartColumn});
new GKChart({id: "chartColumnFill", data: chartColumnFill});
new GKChart({id: "columnLineBar", data: columnLineBar});
new GKChart({id: "chartColumnSpline", data: chartColumnSpline});
new GKChart({id: "chartColumnSplineFill", data: chartColumnSplineFill});
