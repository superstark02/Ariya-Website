import React, { Component } from 'react'
import Chart from "react-apexcharts";

export class PayingChart extends Component {

    state = {
        series: [{
            data: [5, 4, 3, 2, 1]
        }],
        options: {
            chart: {
                type: 'bar',
                height: 350,
            },
            plotOptions: {
                bar: {
                    horizontal: true,
                }
            },
            dataLabels: {
                enabled: false
            },
            grid:{
                show:false
            },
            xaxis: {
                lines: {
                    show:false
                },
                labels:{
                    show:false
                },
                categories: ['Python', 'Java', 'Javascript', 'C#', 'C/C++'],
            },
            colors:["#46b39d","#0c3a44","#f0ca4d","#e37b40","#72b5ca"]
        },
    }

    render() {
        return (
            <div className="desktop" >
                <Chart
                    options={this.state.options}
                    series={this.state.series}
                    type="bar"
                    width="500"
                />
                <div style={{textAlign:"center"}} >
                    Ranking Of Trending Languages
                </div>
            </div>
        )
    }
}

export default PayingChart
