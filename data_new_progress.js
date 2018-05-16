var datapoints = [{
    "lable": "Jan",
    "y": 40
  },
  {
    "lable": "Feb",
    "y": 180
  },
  {
    "lable": "Mar",
    "y": 60
  },
  {
    "lable": "Apr",
    "y": 300
  },
  {
    "lable": "May",
    "y": 140
  },
  {
    "lable": "Jun",
    "y": 240
  }
];

var datapoints1 = [{
    "lable": "January",
    "y": 20
  },
  {
    "lable": "Feb",
    "y": 120
  },
  {
    "lable": "Mar",
    "y": 210
  },
  {
    "lable": "Apr",
    "y": 246
  },
  {
    "lable": "May",
    "y": 96
  },
  {
    "lable": "Jun",
    "y": 15
  }
];

var chartline = {
  "config": {
    "title": "Line Chart",
    "chartType": "line"
  },
  "yaxis": {
    "min": 0,
    "max": 400,
    "difference": 50,
    "title": "Data"
  },
  "data": [{
    "chartColor": "#00d554",
    "fill": false,
    "datapoints": datapoints
  }]
};

var stepChart = {
  "config": {
    "title": "Step Chart",
    "chartType": "step"
  },
  "yaxis": {
    "min": 0,
    "max": 400,
    "difference": 50,
    "title": "Data"
  },
  "data": [{
    "chartColor": "#00d554",
    "fill": false,
    "datapoints": datapoints
  }]
};

var stepChartFill = {
  "config": {
    "title": "Step Area Chart",
    "chartType": "step"
  },
  "yaxis": {
    "min": 0,
    "max": 400,
    "difference": 50,
    "title": "Data"
  },
  "data": [{
    "chartColor": "#00d554",
    "fill": true,
    "datapoints": datapoints
  }]
};

var stepChartComparision = {
  "config": {
    "title": "Multi Step Comparision Chart",
    "chartType": "step"
  },
  "yaxis": {
    "min": 0,
    "max": 400,
    "difference": 50,
    "title": "Data"
  },
  "data": [{
    "chartColor": "#00d554",
    "fill": false,
    "datapoints": datapoints
  }, {
    "chartColor": "#ff0000",
    "fill": false,
    "datapoints": datapoints1
  }]
};

var stepChartComparisionFill = {
  "config": {
    "title": "Multi Step Area Comparision Chart",
    "chartType": "step"
  },
  "yaxis": {
    "min": 0,
    "max": 400,
    "difference": 50,
    "title": "Data"
  },
  "data": [{
    "chartColor": "#00d554",
    "fill": true,
    "datapoints": datapoints
  }, {
    "chartColor": "#ff0000",
    "fill": true,
    "datapoints": datapoints1
  }]
};

var chartlineFill = {
  "config": {
    "title": "Line Area Chart",
    "chartType": "line"
  },
  "yaxis": {
    "min": 0,
    "max": 400,
    "difference": 50,
    "title": "Data"
  },
  "data": [{
    "chartColor": "#00d554",
    "fill": true,
    "datapoints": datapoints
  }]
};

var chartspline = {
  "config": {
    "title": "Smooth Line Chart",
    "chartType": "spline"
  },
  "yaxis": {
    "min": 0,
    "max": 400,
    "difference": 50,
    "title": "Data"
  },
  "data": [{
    "chartColor": "#00d554",
    "fill": false,
    "datapoints": datapoints
  }]
};

var chartsplineFill = {
  "config": {
    "title": "Smooth Line Area Chart",
    "chartType": "spline"
  },
  "yaxis": {
    "min": 0,
    "max": 400,
    "difference": 50,
    "title": "Data"
  },
  "data": [{
    "chartColor": "#00d554",
    "fill": true,
    "datapoints": datapoints
  }]
};

var chartlineComparision = {
  "config": {
    "title": "Multi Line Comparision Chart",
    "chartType": "line"
  },
  "yaxis": {
    "min": 0,
    "max": 400,
    "difference": 50,
    "title": "Days"
  },
  "data": [{
      "chartColor": "#00d554",
      "fill": false,
      "datapoints": datapoints
    }, {
      "chartColor": "#ff0000",
      "fill": false,
      "datapoints": datapoints1
    }

  ]
};

var chartlineComparisionFill = {
  "config": {
    "title": "Multi Line Area Comparision Chart",
    "chartType": "line"
  },
  "yaxis": {
    "min": 0,
    "max": 400,
    "difference": 50,
    "title": "Days"
  },
  "data": [{
      "chartColor": "#00d554",
      "fill": true,
      "datapoints": datapoints
    }, {
      "chartColor": "#ff0000",
      "fill": true,
      "datapoints": datapoints1
    }

  ]
};

var multichartspline = {
  "config": {
    "title": "Multi Smooth Line Comparision Chart",
    "chartType": "spline"
  },
  "yaxis": {
    "min": 0,
    "max": 400,
    "difference": 50,
    "title": "Days"
  },
  "data": [{
      "chartColor": "#00d554",
      "datapoints": datapoints
    }, {
      "chartColor": "#ff0000",
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
  "yaxis": {
    "min": 0,
    "max": 400,
    "difference": 50,
    "title": "Days"
  },
  "data": [{
      "chartColor": "#00d554",
      "fill": true,
      "datapoints": datapoints
    }, {
      "chartColor": "#ff0000",
      "fill": true,
      "datapoints": datapoints1
    }

  ]
};

var chartbar = {
  "config": {
    "title": "Bar Chart",
    "chartType": 'bar'
  },
  "yaxis": {
    "min": 0,
    "max": 400,
    "difference": 50,
    "title": "Hours"
  },
  "data": [{
    "chartColor": "#00d554",
    "datapoints": datapoints
  }]
};

var chartColumn = {
  "config": {
    "title": "Multi Bar and Line Comparision Chart",
    "chartType": 'column'
  },
  "yaxis": {
    "min": 0,
    "max": 400,
    "difference": 50,
    "title": "Hours"
  },
  "data": [{
      "chartColor": "#00d554",
      "type": 'bar',
      "datapoints": datapoints1
    },
    {
      "chartColor": "teal",
      "type": 'bar',
      "datapoints": datapoints
    },
    {
      "chartColor": "red",
      "type": 'line',
      "fill": false,
      "datapoints": [{
        "lable": "Jan",
        "y": 40
      }, {
        "lable": "Feb",
        "y": 180
      }, {
        "lable": "Mar",
        "y": 60
      }, {
        "lable": "Apr",
        "y": 300
      }, {
        "lable": "May",
        "y": 140
      }, {
        "lable": "Jun",
        "y": 200
      }]
    }
  ]
}

var chartColumnFill = {
  "config": {
    "title": "Multi Bar and Line Area Comparision Chart",
    "chartType": 'column'
  },
  "yaxis": {
    "min": 0,
    "max": 400,
    "difference": 50,
    "title": "Hours"
  },
  "data": [{
      "chartColor": "#00d554",
      "type": 'bar',
      "datapoints": datapoints1
    },
    {
      "chartColor": "teal",
      "type": 'bar',
      "datapoints": datapoints
    },
    {
      "chartColor": "red",
      "type": 'line',
      "fill": true,
      "datapoints": [{
        "lable": "Jan",
        "y": 40
      }, {
        "lable": "Feb",
        "y": 180
      }, {
        "lable": "Mar",
        "y": 60
      }, {
        "lable": "Apr",
        "y": 300
      }, {
        "lable": "May",
        "y": 140
      }, {
        "lable": "Jun",
        "y": 200
      }]
    }
  ]
}

var columnLineBar = {
  "config": {
    "title": "Bar and Line Comparision Chart",
    "chartType": 'column'
  },
  "yaxis": {
    "min": 0,
    "max": 400,
    "difference": 50,
    "title": "Hours"
  },
  "data": [{
      "chartColor": "teal",
      "type": 'bar',
      "datapoints": datapoints
    },
    {
      "chartColor": "red",
      "type": 'line',
      "fill": true,
      "datapoints": datapoints1
    }
  ]
}

var chartColumnSpline = {
  "config": {
    "title": "Multi Bar and Smooth Line Comparision Chart",
    "chartType": 'column'
  },
  "yaxis": {
    "min": 0,
    "max": 400,
    "difference": 50,
    "title": "Hours"
  },
  "data": [{
      "chartColor": "#00d554",
      "type": 'bar',
      "datapoints": datapoints1
    },
    {
      "chartColor": "teal",
      "type": 'bar',
      "datapoints": datapoints
    },
    {
      "chartColor": "red",
      "type": 'spline',
      "fill": false,
      "datapoints": [{
        "lable": "Jan",
        "y": 40
      }, {
        "lable": "Feb",
        "y": 180
      }, {
        "lable": "Mar",
        "y": 60
      }, {
        "lable": "Apr",
        "y": 300
      }, {
        "lable": "May",
        "y": 140
      }, {
        "lable": "Jun",
        "y": 200
      }]
    }
  ]
}

var chartColumnSplineFill = {
  "config": {
    "title": "Multi Bar and Line Area Comparision Chart",
    "chartType": 'column'
  },
  "yaxis": {
    "min": 0,
    "max": 400,
    "difference": 50,
    "title": "Hours"
  },
  "data": [{
      "chartColor": "#00d554",
      "type": 'bar',
      "datapoints": datapoints1
    },
    {
      "chartColor": "teal",
      "type": 'bar',
      "datapoints": datapoints
    },
    {
      "chartColor": "red",
      "type": 'spline',
      "fill": true,
      "datapoints": [{
        "lable": "Jan",
        "y": 40
      }, {
        "lable": "Feb",
        "y": 180
      }, {
        "lable": "Mar",
        "y": 60
      }, {
        "lable": "Apr",
        "y": 300
      }, {
        "lable": "May",
        "y": 140
      }, {
        "lable": "Jun",
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
  "yaxis": {
    "min": 0,
    "max": 400,
    "difference": 50,
    "title": "Hours"
  },
  "data": [{
      "chartColor": "#009788",
      "datapoints": datapoints
    }, {
      "chartColor": "#00d554",
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
        "lable": "Jan",
        "y": 200,
        "color": "teal"
      }, {
        "lable": "Feb",
        "y": 90,
        "color": "#b84335"
      }, {
        "lable": "Mar",
        "y": 45,
        "color": "#fbbc05"
      }, {
        "lable": "Apr",
        "y": 70,
        "color": "gray"
      }, {
        "lable": "May",
        "y": 95,
        "color": "purple"
      }
      // ,{
      //     "lable": "Jun"
      //     , "y": 30
      //     , "color": "blue"
      // },{
      //     "lable": "July"
      //     , "y": 140
      //     , "color": "violet"
      // },{
      //     "lable": "Aug"
      //     , "y": 110
      //     , "color": "magenta"
      // },{
      //     "lable": "Sep"
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
      "lable": "Jan",
      "y": 200,
      "color": "teal"
    }, {
      "lable": "Feb",
      "y": 90,
      "color": "#b84335"
    }, {
      "lable": "Mar",
      "y": 45,
      "color": "#fbbc05"
    }, {
      "lable": "Apr",
      "y": 70,
      "color": "gray"
    }, {
      "lable": "May",
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
      "lable": "Poor",
      "y": 50,
      "color": "#ff0000"
    }, {
      "lable": "Blw Avg",
      "y": 25,
      "color": "#ff0000"
    }, {
      "lable": "Average",
      "y": 25,
      "color": "#00ff00"
    }, {
      "lable": "Abv Avg",
      "y": 35,
      "color": "#00ff00"
    }, {
      "lable": "Exceed",
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
step.renderGKChart();

var stepCompare = new GKChart({
  id: "stepChartComparision",
  data: stepChartComparision
});
stepCompare.renderGKChart();

var stepFill = new GKChart({
  id: "stepChartFill",
  data: stepChartFill
});
stepFill.renderGKChart();

var stepCompareFill = new GKChart({
  id: "stepChartComparisionFill",
  data: stepChartComparisionFill
});
stepCompareFill.renderGKChart();

var chartLine = new GKChart({
  id: "chartline",
  data: chartline
});
chartLine.renderGKChart();

var chartLineCompare = new GKChart({
  id: "chartlineComparision",
  data: chartlineComparision
})
chartLineCompare.renderGKChart();

var chartLineFill = new GKChart({id: "chartlineFill", data: chartlineFill});
chartLineFill.renderGKChart();

var chartLineCompareFill = new GKChart({id: "chartlineComparisionFill", data: chartlineComparisionFill});
chartLineCompareFill.renderGKChart();

new GKChart({id: "chartspline", data: chartspline}).renderGKChart();
new GKChart({id: "multichartspline", data: multichartspline}).renderGKChart();
new GKChart({id: "chartsplineFill", data: chartsplineFill}).renderGKChart();
new GKChart({id: "multichartsplineFill", data: multichartsplineFill}).renderGKChart();

new GKChart({id: "chartbar", data: chartbar}).renderGKChart();
new GKChart({id: "multilinebar", data: multilinebar}).renderGKChart();

new GKChart({id: "piechart", data: piechart}).renderGKChart();
new GKChart({id: "donut", data: donut}).renderGKChart();
new GKChart({id: "meter", data: meter}).renderGKChart();

new GKChart({id: "chartColumn", data: chartColumn}).renderGKChart();
new GKChart({id: "chartColumnFill", data: chartColumnFill}).renderGKChart();
new GKChart({id: "columnLineBar", data: columnLineBar}).renderGKChart();
new GKChart({id: "chartColumnSpline", data: chartColumnSpline}).renderGKChart();
new GKChart({id: "chartColumnSplineFill", data: chartColumnSplineFill}).renderGKChart();

setTimeout(function () {
  step.renderGKChart("stepChart", stepChartFill);
}, 3000);