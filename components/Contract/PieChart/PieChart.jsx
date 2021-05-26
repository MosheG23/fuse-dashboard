import React from "react";
import { Pie } from 'react-chartjs-2';

const PieChart = ({ values, labels }) => {
    const data = {
        labels: labels,
        datasets: [
            {
                data: values,
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                  ],
                  borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                  ],
                  borderWidth: 1,
            }
        ]
    }
    return (
        <div>
            <Pie data={data} />
        </div>
    )
}

export default PieChart
