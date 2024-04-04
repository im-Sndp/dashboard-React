import { Chart as ChatJS } from "chart.js/auto";
import { Bar, Doughnut, Line } from "react-chartjs-2"; 

export const LineChat = () => {
    return(
        <div>
            <Line data={{
                labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
                datasets: [
                  {
                    label: 'Sales',
                    backgroundColor: [
                      'rgba(255, 0, 0, 0.5)',   // Red with 50% opacity
                      'rgba(0, 0, 255, 0.5)',   // Blue with 50% opacity
                      'rgba(255, 255, 0, 0.5)', // Yellow with 50% opacity
                      'rgba(0, 255, 0, 0.5)',   // Green with 50% opacity
                      'rgba(128, 0, 128, 0.5)', // Purple with 50% opacity
                      'rgba(255, 165, 0, 0.5)', // Orange with 50% opacity
                    ],
                    borderColor: [
                        'rgba(255, 0, 0, 0.5)',   // Red with 50% opacity
                        'rgba(0, 0, 255, 0.5)',   // Blue with 50% opacity
                        'rgba(255, 255, 0, 0.5)', // Yellow with 50% opacity
                        'rgba(0, 255, 0, 0.5)',   // Green with 50% opacity
                        'rgba(128, 0, 128, 0.5)', // Purple with 50% opacity
                        'rgba(255, 165, 0, 0.5)', // Orange with 50% opacity
                      ],
                    borderWidth: 1,
                    data: [65, 59, 80, 81, 56, 55, 40],
                  },
                ],
            }} />
        </div>
    )
}