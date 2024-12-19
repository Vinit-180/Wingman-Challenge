"use client";
import { useEffect, useRef } from 'react';
import * as echarts from 'echarts';

const ChartComponent = () => {
  const chartDom = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (chartDom.current) {
      const myChart = echarts.init(chartDom.current);
      const option = {
        title: {
            text: 'Consultation',
            left: 'left',
            top: 10,
            textStyle: {
              fontSize: 16,
              fontWeight: 'bold'
            }
          },
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'cross',
            crossStyle: {
              color: '#999'
            }
          }
        },
        toolbox: {
          feature: {
            dataView: { show: true, readOnly: false },
            magicType: { show: true, type: ['line', 'bar'] },
            restore: { show: true },
            saveAsImage: { show: true }
          }
        },
        legend: {
            data: ['Incoming', 'Answered', 'Experts Online'],
            bottom:0
          },
          xAxis: [
            {
              type: 'category',
              data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
              axisPointer: {
                type: 'shadow'
              }
            }
          ],
          yAxis: [
            {
              type: 'value',
              name: 'Consultations',
              nameLocation: "middle",
              nameGap:30,
              min: 0,
              max: 60,
              interval: 10,
              axisLabel: {
                formatter: '{value}'
              },
         
            },
            {
              type: 'value',
              name: 'Experts Online',
              nameLocation: "middle",
              nameGap: 30,
              min: 0,
              max: 20,
              interval: 5,
              axisLabel: {
                formatter: '{value}'
              }
            }
          ],
          series: [
            {
              name: 'Incoming',
              type: 'line',
              tooltip: {
                valueFormatter: function (value:number) {
                  return value;
                }
              },
              lineStyle: {
                type: 'dotted' // Dotted line style
              },
              data: [35, 38, 31, 60, 40, 42, 45]
            },
            {
              name: 'Answered',
              type: 'line',
              tooltip: {
                valueFormatter: function (value:number) {
                  return value;
                }
              },
              data: [24, 20, 25, 48, 35, 36, 43]
            },
            {
              name: 'Experts Online',
              type: 'bar',
              yAxisIndex: 1,
              tooltip: {
                valueFormatter: function (value:number) {
                  return value;
                }
              },
              data: [10, 12, 11, 20, 13, 12, 14]
            }
          ]
      };

      // Set the chart option
      myChart.setOption(option);

      // Cleanup on unmount
      return () => {
        myChart.dispose();
      };
    }
  }, []);

  return (
    <div className="w-full h-96 bg-white p-4 rounded-lg shadow-lg">
      <div ref={chartDom} style={{ width: '100%', height: '100%' }} />
    </div>
  );
};

export default ChartComponent;
