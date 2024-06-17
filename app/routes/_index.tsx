import { useState, useEffect} from 'react';
import Calculator from './calculator';

export default function Home() {
  // State to hold slider values
  const [sliderValue1, setSliderValue1] = useState(25);
  const [sliderValue2, setSliderValue2] = useState(25);
  const [sliderValue3, setSliderValue3] = useState(25);
  const [sliderValue4, setSliderValue4] = useState(25);
  const [sliderValue5, setSliderValue5] = useState(25);
  const [sliderValue6, setSliderValue6] = useState(25);


  return (
    <>
      <section className="bg-gradient-to-b from-white to-blue-50 py-12 sm:py-16 lg:py-20 xl:py-24">
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-xl mx-auto text-center lg:max-w-4xl">

            <p className="font-display text-4xl font-bold tracking-tight text-gray-900 mt-5 sm:text-5xl lg:text-6xl">
              Chatbot cost calculator
            </p>
            <p className="max-w-2xl text-base font-normal text-gray-700 mx-auto mt-5 sm:text-lg lg:text-2xl">
              Are you looking to adopt a chatbot but are unsure what it will cost?
              Dont't worry you are at the right place
            </p>

          </div>
          <div className="flex flex-col lg:flex-row h-auto w-full mt-12">
            <div className="flex-1 bg-gradient-to-b from-gray-100 to-white p-4 rounded-lg">
              <div className="flex justify-between">
                <div className='grow'>
                  <label htmlFor="slider1" className="block text-sm font-normal text-gray-700 sm:text-lg lg:text-xl ">Number of Customer Service Agents:</label>
                  <input
                    type="range"
                    id="slider1"
                    name="slider1"
                    min="0"
                    max="100"
                    value={sliderValue1}
                    onChange={(e) => setSliderValue1(parseInt(e.target.value))}
                    className="block w-full h-3 mt-5 bg-gray-200 rounded-md overflow-hidden appearance-none"
                  />


                  <div className="flex justify-between mt-2">
                    <span>0</span>
                    <span>50</span>
                    <span>100</span>
                  </div>
                </div>

                <div className=" mt-11 mx-5">
                  <span className="px-3 py-1 bg-white rounded-md border border-blue-600">{sliderValue1}</span>
                </div>
              </div>


              <div className="flex justify-between">
                <div className='grow'>
                  <label htmlFor="slider1" className="block text-sm font-normal text-gray-700 sm:text-lg lg:text-xl ">Monthly working hours (per agent):</label>
                  <input
                    type="range"
                    id="slider2"
                    name="slider2"
                    min="0"
                    max="100"
                    value={sliderValue2}
                    onChange={(e) => setSliderValue2(parseInt(e.target.value))}
                    className="block w-full h-3 mt-5 bg-gray-200 rounded-md overflow-hidden appearance-none"
                  />


                  <div className="flex justify-between mt-2">
                    <span>0</span>
                    <span>50</span>
                    <span>100</span>
                  </div>
                </div>

                <div className=" mt-11 mx-5">
                  <span className="px-3 py-1 bg-white rounded-md border border-blue-600">{sliderValue2}</span>
                </div>
              </div>


              <div className="flex justify-between">
                <div className='grow'>
                  <label htmlFor="slider1" className="block text-sm font-normal text-gray-700 sm:text-lg lg:text-xl ">Salary per hour (in $ per agent):</label>
                  <input
                    type="range"
                    id="slider3"
                    name="slider3"
                    min="0"
                    max="100"
                    value={sliderValue3}
                    onChange={(e) => setSliderValue3(parseInt(e.target.value))}
                    className="block w-full h-3 mt-5 bg-gray-200 rounded-md overflow-hidden appearance-none"
                  />


                  <div className="flex justify-between mt-2">
                    <span>0</span>
                    <span>50</span>
                    <span>100</span>
                  </div>
                </div>

                <div className=" mt-11 mx-5">
                  <span className="px-3 py-1 bg-white rounded-md border border-blue-600">{sliderValue3}</span>
                </div>
              </div>

              <div className="flex justify-between">
                <div className='grow'>
                  <label htmlFor="slider1" className="block text-sm font-normal text-gray-700 sm:text-lg lg:text-xl ">How many Tickets do you get each month:</label>
                  <input
                    type="range"
                    id="slider4"
                    name="slider4"
                    min="0"
                    max="100"
                    value={sliderValue4}
                    onChange={(e) => setSliderValue4(parseInt(e.target.value))}
                    className="block w-full h-3 mt-5 bg-gray-200 rounded-md overflow-hidden appearance-none"
                  />


                  <div className="flex justify-between mt-2">
                    <span>0</span>
                    <span>50</span>
                    <span>100</span>
                  </div>
                </div>

                <div className=" mt-11 mx-5">
                  <span className="px-3 py-1 bg-white rounded-md border border-blue-600">{sliderValue4}</span>
                </div>
              </div>

              <div className="flex justify-between">
                <div className='grow'>
                  <label htmlFor="slider1" className="block text-sm font-normal text-gray-700 sm:text-lg lg:text-xl ">Time it takes to resolve each Ticket (in mins):</label>
                  <input
                    type="range"
                    id="slider5"
                    name="slider5"
                    min="0"
                    max="100"
                    value={sliderValue5}
                    onChange={(e) => setSliderValue5(parseInt(e.target.value))}
                    className="block w-full h-3 mt-5 bg-gray-200 rounded-md overflow-hidden appearance-none"
                  />


                  <div className="flex justify-between mt-2">
                    <span>0</span>
                    <span>50</span>
                    <span>100</span>
                  </div>
                </div>

                <div className=" mt-11 mx-5">
                  <span className="px-3 py-1 bg-white rounded-md border border-blue-600">{sliderValue5}</span>
                </div>
              </div>

              <div className="flex justify-between">
                <div className='grow'>
                  <label htmlFor="slider1" className="block text-sm font-normal text-gray-700 sm:text-lg lg:text-xl ">Percentage of Tickets resolved by AI:</label>
                  <input
                    type="range"
                    id="slider6"
                    name="slider6"
                    min="0"
                    max="100"
                    value={sliderValue6}
                    onChange={(e) => setSliderValue6(parseInt(e.target.value))}
                    className="block w-full h-3 mt-5 bg-gray-200 rounded-md overflow-hidden appearance-none"
                  />


                  <div className="flex justify-between mt-2">
                    <span>0</span>
                    <span>50</span>
                    <span>100</span>
                  </div>
                </div>

                <div className=" mt-11 mx-5">
                  <span className="px-3 py-1 bg-white rounded-md border border-blue-600">{sliderValue6}</span>
                </div>
              </div>

            </div>

            <div className="flex-1 bg-white">
              <Calculator
              agents={sliderValue1}
              hours={sliderValue2}
              costPerHour={sliderValue3}
              tickets={sliderValue4}
              autoResolved={sliderValue5}
              resolutionTime={sliderValue6}
            /> 
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
