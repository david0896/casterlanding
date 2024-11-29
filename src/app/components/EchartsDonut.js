import { useState, useEffect } from 'react';
import ReactEcharts from 'echarts-for-react';

const EchartsDonut = ({ data }) => {

  const [totalCalories, setTotalCalories] = useState(0);
  const [totalMinutes, setTotalMinutes] = useState(0);

  useEffect(() => {
    const sumCalories = data.reduce((acc, value) => acc + value.calories, 0)
    const sumMinutes = data.reduce((acc, value) => acc + value.minutes, 0)
    setTotalCalories(sumCalories);
    setTotalMinutes(sumMinutes);
  }, [data])


  const generateOptions = (item) => ({
    series: [
      {
        type: 'pie',
        radius: ['50%', '70%'], // Gráfico tipo anillo
        center: ['50%', '50%'], // Centramos el gráfico
        data: [
          {
            value: item.value,
            name: item.name,
            itemStyle: { color: '#facc15' },
            label: { show: false },
          },
          {
            value: 100 - item.value,
            name: 'Remaining',
            itemStyle: { color: '#e0e0e0' },
            label: { show: false },
          },
        ],
        animationDuration: 1000, // Duración de la animación
      },
    ],
  });

  return (
    <div className="flex gap-4 flex-wrap justify-center items-center mb-10">
      {data.map((item, index) => (
        <div
          key={index}
          className="relative mb-8 lg:mb-0"
          style={{ height: index === 4 ? '150px' : '110px', width: index === 4 ? '150px' : '110px'}}
        >
          {/* Renderiza el gráfico */}
          <ReactEcharts
            option={generateOptions(item)}
            style={{ height: '100%', width: '100%' }}
          />
          {/* Coloca el ícono en el centro del gráfico */}
          <div className="absolute inset-0 flex items-center justify-center text-2xl text-yellow-400">
            {item.icon}
          </div>
          {/* Agrega el valor como texto debajo */}
          <span className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 text-base font-medium text-white">
            {item.name}
          </span>
          <span className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-sm font-normal text-white w-full">
            {item.name == 'Total' ? "Calorias: -" + totalCalories : "Calorias: -" + item.calories}
          </span>
          <span className="absolute -bottom-12 left-1/2 transform -translate-x-1/2 text-xs font-normal text-white w-full">
            {item.name == 'Total' ? "Minutos: " + totalMinutes : "Minutos: " + item.minutes}
          </span>
        </div>
      ))}
    </div>
  );
};

export default EchartsDonut;


