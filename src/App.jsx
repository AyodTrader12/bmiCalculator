import React, { useState } from 'react'
import { FaCalculator } from "react-icons/fa6";
import { FiActivity } from "react-icons/fi";
const App = () => {
  const [height,setHeight] = useState("")
  const [weight,setweight] = useState("")
  const [Bmi, setBmi] = useState("")
  const [category, setCategory] = useState("")

  const calculateBmi = () => {
    const w = parseFloat(weight);
    const h = parseFloat(height)  // Convert cm to meters

    if(!w || !h || h <= 0 || w <= 0) {
      setCategory( "❌ Please enter valid weight and height." );
      return;
    }

    const getBmi = w/h *h
    setBmi(getBmi.toFixed(2));

        if (getBmi < 18.5) setCategory("🔵 Underweight");
    else if (getBmi < 24.9) setCategory("🟢 Normal weight");
    else if (getBmi < 29.9) setCategory("🟠 Overweight");
    else setCategory("🔴 Obese");
  }
  // console.log(calculateBmi);
  
  return (
    <div>
   <div className='bg-white w-full h-screen flex items-center justify-center'>
    <div className='w-[35vw] h-[80vh] bg-white rounded-2xl shadow-2xl max-sm:bg-white max-sm:w-[95vw] p-5 flex-col'>
      <div className='flex justify-center'><FaCalculator className='text-blue-400' size={35}/></div>
    <h1 className='text-blue-400 uppercase font-bold text-center mt-4'>bmi calculator</h1>
    <p className='mt-3 text-[15px] text-gray-600 text-center'>calculate your Body Mass Index</p>

    <div className='flex flex-col mt-7'>
      <label className='mb-1'>Height (cm)</label>
      <input 
      id='height'
      type="number"
      placeholder='Enter your height'
      value={height}
      onChange={(e) => setHeight(e.target.value)}
      className='rounded-lg border border-slate-200 w-full h-[45px] p-2'
      />
    </div>
    
    <div className='flex flex-col mt-7'>
      <label className='mb-1'>weight (kg)</label>
      <input 
      id='weight'
      type="number"
      placeholder='Enter your height'
      value={weight}
      onChange={(e) => setweight(e.target.value)}
      className='rounded-lg border border-slate-200 w-full h-[45px] p-2'
      />
    </div>
     <button 
     onClick={calculateBmi}
    disabled={!height || !weight}
  className='bg-blue-400 rounded-lg w-full h-[45px] text-white mt-7 flex items-center justify-center gap-5 hover:bg-blue-300 cursor-pointer'> <span><FiActivity size={20}/></span><p className='text-white font-semibold'>Calculate BMI</p></button>
    <div className="mt-4 text-center">
          {Bmi && (
            <>
              <p className="text-xl font-semibold">Your BMI is: {Bmi}</p>
              <p className="text-lg mt-2 ">{category}</p>
            </>
          )}
          {!Bmi && category && (
            <p className="text-red-200 font-medium mt-2">{category}</p>
          )}
        </div>
    </div>

    </div> 
    </div>
  )
}

export default App
