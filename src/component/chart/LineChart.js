import React, { useState } from 'react';
import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'



const LineChart = () => {
const condition = Boolean(Math.round(Math.random()))
const options = {
    chart: {
        type: 'spline',
    },
    title: {
        text: '',
        align: 'center'
    },
    exporting: {
        enabled: false
    },
    xAxis: {
        type: 'datetime',
    dateTimeLabelFormats: {
    	day: condition ? "%A, %b %e, %Y" : "%A, %b %e, %Y",
    	// month: condition ? "%b-%y" : '%b \'%y'
    
  },
        labels: {
            overflow: 'justify'
        }
    },
    yAxis: {
        title: {
            text: '',
        },
        min: 0,
        max: 100,
        minorGridLineWidth: 0,
        gridLineWidth: 0,
        alternateGridColor: null,
    },
    
    credits: {
        enabled: false
    },
    tooltip: {
        valueSuffix: ''
    },
    plotOptions: {
        spline: {
            lineWidth: 4,
            states: {
                hover: {
                    lineWidth: 5
                }
            },
            marker: {
                enabled: false
            },
        }
    },
    series: [{
        name: 'Current',
        data: [
            [Date.UTC(2022, 1), 0],
            [Date.UTC(2022, 2), 50],
            [Date.UTC(2022, 2), 10],
            [Date.UTC(2022, 2), 20],
            [Date.UTC(2022, 3), 72],
            [Date.UTC(2022, 4), 12],
        ]

    }, {
        name: 'Previous',
        data: [
            [Date.UTC(2022, 1), 60],
            [Date.UTC(2022, 2), 50],
            [Date.UTC(2022, 2), 50],
            [Date.UTC(2022, 3), 42],
            [Date.UTC(2022, 3), 22],
            [Date.UTC(2022, 4), 52],
        ]
    },
],
    navigation: {
        menuItemStyle: {
            fontSize: '10px'
        }
    }
}

    return ( 
        <HighchartsReact
            highcharts={Highcharts}
            options={options} />
     );
}
 
export default LineChart;