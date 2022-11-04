// import React, { Fragment, useState } from 'react';
import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'


const BarChart = () => {

    var options = {
        data: {
            table: 'datatable'
        },
        chart: {
            type: 'column'
        },
        exporting: {
            enabled: false
        },
        credits: {
            enabled: false
        },
        title: {
            text: ''
        },
        xAxis: {
            type: 'category'
        },
        yAxis: {
            allowDecimals: false,
            title: {
                text: ''
            }
        },
        tooltip: {
            formatter: function () {
                return '<b>' + this.series.name + '</b><br/>' +
                    this.point.y + ' ' + this.point.name.toLowerCase();
            }
        },
        series: [{
            name: '',
            data: [5, 3, 4, 7, 2]
        }, {
            name: '',
            data: [2, 2, 3, 2, 1]
        }, {
            name: '',
            data: [3, 4, 4, 2, 5]
        }]

    }
    
    return (
                    <HighchartsReact
                        highcharts={Highcharts}
                        options={options}
                    />
    );
}

export default BarChart;