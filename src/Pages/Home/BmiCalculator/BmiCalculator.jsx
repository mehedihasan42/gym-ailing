import React, { useState } from 'react';
import SectionTitle from '../../../Layouts/SectionTitle/SectionTitle';

const BmiCalculator = () => {
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [bmi, setBmi] = useState(null);
  const [result, setResult] = useState('');

  const calculateBmi = () => {
    if (weight && height) {
      const bmiValue = weight / ((height / 100) ** 2);
      setBmi(bmiValue.toFixed(2));

      // Interpretation of BMI value
      if (bmiValue < 18.5) {
        setResult('Underweight');
      } else if (bmiValue >= 18.5 && bmiValue < 25) {
        setResult('Normal weight');
      } else if (bmiValue >= 25 && bmiValue < 30) {
        setResult('Overweight');
      } else {
        setResult('Obese');
      }
    }
  };

  return (
       <div className='bg-black py-6 pt-24'>
        <SectionTitle heading={'BMI Calculator'} subHeading={'CALCULATE YOUR BMI'}></SectionTitle>
    <div className=' text-base-300 pt-12 lg:flex'>
      
      {/* <div> */}
     <div data-aos="fade-up-right" className='card-body lg:mx-36 h-full lg:my-auto bg-gray-900 rounded'>
     {/* {bmi && (
        <div> */}
        <h2 className='text-center text-2xl font-bold'>BMI Calculator</h2>
          <p className='text-center font-bold'>Your BMI: <span className='text-[#DAFF0D]'>{bmi}</span></p>
          <p className='text-center font-bold'>Result: <span className='text-[#DAFF0D]'>{result}</span></p>
        {/* </div>
      )} */}
     <label className="label">
            <span className="label-text text-base-300">Weight:</span>
          </label>
        <input
        className='text-base-300 bg-gray-800 py-4'
        placeholder=' in kg'
          type="number"
          value={weight}
          onChange={(e) => setWeight(e.target.value)}
        />
      {/* </div> */}
      {/* <div> */}
      <label className="label">
            <span className="label-text text-base-300">Height:</span>
          </label>
        <input
        placeholder=' in cm'
          className='text-base-300 bg-gray-800 py-4'
          type="number"
          value={height}
          onChange={(e) => setHeight(e.target.value)}
        />
      {/* </div> */}
      <div className="form-control mt-6">
      <button className='btn bg-[#DAFF0D] w-36' onClick={calculateBmi}>Calculate</button>
      </div>
     </div>
  <div data-aos="fade-up-left" className='lg:mr-24'>
  <img
    src="https://images.unsplash.com/photo-1526506118085-60ce8714f8c5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80" alt="" />
  </div>
    </div>
       </div>
  );
};

export default BmiCalculator;
