import React  from 'react';
import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'
import exporting from 'highcharts/modules/exporting';





exporting(Highcharts);


const CircularPieChart = (props) => {
 
 
 


const options = {
    chart: {
        type: 'pie',
      },
      title: {
        text: ''
      },
      exporting: {
        enabled: false
    },
      credits: {
        enabled: false
    },
      subtitle: {
        text: ``,
        align: "center",
        verticalAlign: "middle",
        style: {
          "fontSize": "18px",
          "textAlign": "center"
        },
        x: 0,
        y: 33,
        useHTML: true
      },
      plotOptions: {
        pie: {
          shadow: false,
          center: ["50%", "50%"],
          dataLabels: {
            enabled: false
          },
          states: {
            hover: {
              enabled: false
            }
          },
          size: "45%",
          innerSize: "95%",
          borderColor: null,
          borderWidth: 8
        }
    
      },
      tooltip: {
        valueSuffix: '%'
      },
      series: [{
        type: 'pie',
        enableMouseTracking: false,
        dataLabels: {
          enabled: false
        },
        data: [{
          y: 10,
          color: '#df4146'
        }, {
          y: 50,
          color: '#8471ca'
        },
        {
          y: 30,
          color: '#c1d5e8'
        },
      ]
      }]
    }



    return ( 
        <HighchartsReact
            highcharts={Highcharts}
            options={options}
            
        />
     );
}
 
export default CircularPieChart;