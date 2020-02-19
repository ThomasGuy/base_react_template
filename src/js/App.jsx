import React, { useRef } from 'react';
import CandlestickChart from './components/CandlestickChart';


function App() {
  const chartRef = useRef();
  return (
    <>
    <div className="">
      <CandlestickChart chartRef={chartRef} />
    </div>
    </>
  );
}

export default App;
