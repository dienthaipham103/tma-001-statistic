import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
  } from 'chart.js';
import { useSelector } from 'react-redux';
import { Bar } from 'react-chartjs-2';

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);

const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
        labels: {
            usePointStyle: true,
            boxWidth: 10
        }
      },
      title: {
        display: true,
        text: 'Stacked Bar Chart',
      },
    },
    scales: {
        x: {
           grid: {
              display: false
           }
        },
        y: {
           grid: {
              display: true
           }
        }
   }
};
const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
const meta_data = [
    {
        name: 'website',
        label: 'Website',
        backgroundColor: '#125190'
    },
    {
        name: 'app',
        label: 'App',
        backgroundColor: '#4791d9'
    },
    {
        name: 'linux',
        label: 'Linux',
        backgroundColor: '#fdbe5e'
    },
    {
        name: 'window',
        label: 'Window',
        backgroundColor: '#f5697e'
    },

]

function Chart() {

    const chartData = useSelector(state => state.chart);
    console.log(chartData);
    const data = {
        labels,
        datasets: meta_data.map(info => (
            {
                label: info.label,
                data: chartData[info.name],
                backgroundColor: info.backgroundColor,
                borderRadius: 10
            }
        )),
    }

    return (
        <div>
            <Bar options={options} data={data} />
        </div>
    );
}

export default Chart;