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
    <div className="flex gap-2 lg:gap-4 flex-wrap justify-center items-center mb-6 lg:mb-10">
  {data.map((item, index) => (
    <div
      key={index}
      className={`relative flex items-center justify-center mb-6 lg:mb-0 ${
        index === 4
          ? 'h-[100px] w-[100px] lg:h-[150px] lg:w-[150px]'
          : 'h-[80px] w-[80px] lg:h-[110px] lg:w-[110px]'
      }`}
    >
      {/* Contenedor del gráfico */}
      <div className="relative flex items-center justify-center w-full h-full">
        <ReactEcharts
          option={generateOptions(item)}
          className="w-full"
        />
        {/* Icono centrado */}
        <div className="absolute inset-0 flex items-center justify-center text-xl lg:text-2xl text-yellow-400">
          {item.icon}
        </div>
      </div>
      {/* Textos inferiores */}
      <span className="absolute bottom-[-15px] left-1/2 transform -translate-x-1/2 text-xs lg:text-base font-medium text-white">
        {item.name}
      </span>
      <span className="absolute bottom-[-30px] left-1/2 transform -translate-x-1/2 text-[10px] lg:text-sm font-normal text-white w-full">
        {item.name === 'Total'
          ? `Calorías: -${totalCalories}`
          : `Calorías: -${item.calories}`}
      </span>
      <span className="absolute bottom-[-45px] left-1/2 transform -translate-x-1/2 text-[9px] lg:text-xs font-normal text-white w-full">
        {item.name === 'Total'
          ? `Minutos: ${totalMinutes}`
          : `Minutos: ${item.minutes}`}
      </span>
    </div>
  ))}
</div>


  );
};

export default EchartsDonut;


