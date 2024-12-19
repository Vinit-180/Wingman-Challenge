"use client";
import { useEffect, useRef } from 'react';
import * as echarts from 'echarts';

const VsPastPeriodChart = () => {
  const chartDom = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (chartDom.current) {
      const myChart = echarts.init(chartDom.current);
      const option = {
        title: {
            text: 'VS Past Period',
            left: 'left',
            top: 10,
            textStyle: {
              fontSize: 16,
              fontWeight: 'bold'
            }
          },
        tooltip: {
          trigger: 'axis',
          axisPointer: { type: 'shadow' },
        },
        legend: {
          data: ['Consultations', 'Orders Closed'],
          bottom:0
        },
        xAxis: {
          type: 'category',
          data: ['This Week', 'Last Week'],
        },
        yAxis: {
          type: 'value',
        },
        series: [
          {
            name: 'Consultations',
            type: 'bar',
            barWidth: '20%',
            data: [20, 14], 
            itemStyle: {
              color: '#B6E3DC',
              borderRadius: [10, 10, 0, 0] // Added this line - [topLeft, topRight, bottomRight, bottomLeft]

            },
          },
          {
            name: 'Orders Closed',
            type: 'bar',
            barWidth: '20%',
            data: [16, 13], 
            itemStyle: {
              color: '#234A42', 
              borderRadius: [10, 10, 0, 0] 

            },
          },
        ],
      };

      myChart.setOption(option);

      return () => {
        myChart.dispose();
      };
    }
  }, []);

  return (
    <div className="w-full h-96 bg-white p-2 rounded-lg shadow-md">
      <div ref={chartDom} style={{ width: '100%', height: '100%' }} />
    </div>
  );
};

export default VsPastPeriodChart;
