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
    "config": {
        "title": "Line chart",
        "chartType": "line"
    },
    "yaxis": {
        "min": 0,
        "max": 400,
        "difference": 50,
        "title": "Data"
    }
    , "data": [
        {
            "chartColor": "#00d554"
            , "datapoints": datapoints
        }
    ]
};

var chartspline = {
    "config": {
        "title": "SpLine chart",
        "chartType": "spline"
    },
    "yaxis": {
        "min": 0,
        "max": 400,
        "difference": 50,
        "title": "Data"
    }
    , "data": [
        {
            "chartColor": "#00d554"
            , "datapoints": datapoints
        }
    ]
};

var chartlineComparision = {
    "config": {
        "title": "Line chart Comparision",
        "chartType": "line"
    },
    "yaxis": {
        "min": 0,
        "max": 400,
        "difference": 50,
        "title": "Days"
    }
    , "data": [
        {
            "chartColor": "#00d554"
            , "datapoints": datapoints
        }
        , {
            "chartColor": "#ff0000"
            , "ydataname": "Days"
            , "datapoints": datapoints1
        }

    ]
};

var multichartspline = {
    "config": {
        "title": "SpLine chart Comparision",
        "chartType": "spline"
    },
    "yaxis": {
        "min": 0,
        "max": 400,
        "difference": 50,
        "title": "Days"
    }
    , "data": [
        {
            "chartColor": "#00d554"
            , "datapoints": datapoints
        }
        , {
            "chartColor": "#ff0000"
            , "ydataname": "Days"
            , "datapoints": datapoints1
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
    }
    , "data": [{
        "chartColor": "#00d554"
        , "datapoints": datapoints
    }]
};

var chartColumn = {
    "config": {
        "title": "Column chart",
        "chartType": 'column'
    },
    "yaxis": {
        "min": 0,
        "max": 400,
        "difference": 50,
        "title": "Hours"
    }
    , "data": [{
        "chartColor": "#00d554",
        "type": 'bar'
        , "datapoints": datapoints1
    },
        {
            "chartColor": "teal",
            "type": 'bar'
            , "datapoints": datapoints
        },
        {
            "chartColor": "red",
            "type": 'line'
            , "datapoints": [{
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
                , "y": 200
            }]
        }]
}

var multilinebar = {
    "config": {
        "title": "Multi Line Bar Chart",
        "chartType": 'bar'
    },
    "yaxis": {
        "min": 0,
        "max": 400,
        "difference": 50,
        "title": "Hours"
    }
    , "data": [
        {
            "chartColor": "#009788"
            , "datapoints": datapoints
        }
        , {
            "chartColor": "#00d554"
            , "datapoints": datapoints1
        }

    ]
};

var piechart = {
    "config": {
        "title": "Pie Chart",
        "chartType": "pie"
    }
    , "data": [{
        "chartColor": "#ff0000"
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

var donut = {
    "config": {
        "title": "Donut Chart",
        "chartType": "donut"
    }
    , "data": [{
        "chartColor": "#ff0000"
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


var meter = {
    "config": {
        "title": "Meter Gauge Chart",
        "chartType": "meter"
    }
    , "data": [/*Give as required data in given formate, syntax error with json will cause of error in charts*/
        {
            "chartColor": "#ff0000"
            , "datapoints": [
                {
                    "lable": "Poor"
                    , "y": 50
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
                    , "y": 35
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
