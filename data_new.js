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
    "title": {
        "text": "line chart Comparision"
    },
    "width" : 650,
    "height" : 400,
    "yaxis": {
        "min": 0,
        "max": 400,
        "difference": 50,
        "title": "Days"
    }
    , "data": [
        {
            "stroke": "#00d554"
            , "datapoints": datapoints
        }
    ]
};

var chartlineComparision = {
    "title": {
        "text": "line chart Comparision"
    },
    "width" : 650,
    "height" : 400,
    "yaxis": {
        "min": 0,
        "max": 400,
        "difference": 50,
        "title": "Days"
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

var chartbar = {
    "chartnumber": 3
    , "type": 'barchart'
    , "title": {
        "text": "Bar Chart"
    },
    "yaxis": {
        "min": 0,
        "max": 400,
        "difference": 50,
        "title": "Hours"
    }
    , "data": [{
        "stroke": "#00d554"
        , "datapoints": datapoints
    }]
};
/*chartCalling(chartbar);*/
var multilinebar = {
    "type": 'barchart'
    , "title": {
        "text": "Multi Line Bar Chart"
    },
    "yaxis": {
        "min": 0,
        "max": 400,
        "difference": 50,
        "title": "Hours"
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
/*chartCalling(multilinebar);*/
var piechart = {
    "type": 'piechart'
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
/*chartCalling(piechart);*/
var donut = {
    "title": {
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
/*chartCalling(donut);*/
var meter = {"type": 'meterchart',
    "title": {
        "text": "Meter Gauge Chart"
    }
    , "data": [/*Give as required data in given formate, syntax error with json will cause of error in charts*/
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
/*chartCalling(meter);*/
