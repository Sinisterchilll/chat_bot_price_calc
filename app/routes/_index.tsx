import { useState } from 'react';
import Calculator from './calculator';

export default function Home() {
  const [sliderValue1, setSliderValue1] = useState(25);
  const [sliderValue2, setSliderValue2] = useState(25);
  const [sliderValue3, setSliderValue3] = useState(25);
  const [sliderValue4, setSliderValue4] = useState(25);
  const [sliderValue5, setSliderValue5] = useState(25);
  const [sliderValue6, setSliderValue6] = useState(25);

  const handleInputChange = (e: any, setSliderValue: any) => {
    const value = parseInt(e.target.value);
    if (!isNaN(value) || e.target.value === '') {
      setSliderValue(value);
    }
  };

  const gradientBackground = (sliderValue: number) => ({
    background: `linear-gradient(to right, #145dee 0%, #145dee ${sliderValue}%, #e5e7eb ${sliderValue}%, #e5e7eb 100%)`,
  });

  return (
    <>
      <section className="py-12 bg-gradient-to-b from-white to-blue-50 sm:py-16 lg:py-20 xl:py-24">
        <div className="max-w-screen-xl px-4 mx-auto sm:px-6 lg:px-8">
          <div className="max-w-xl mx-auto text-center lg:max-w-4xl">
            <h1 className="text-base font-bold tracking-widest text-blue-600 uppercase">
              TOOLS
            </h1>
            <p className="mt-5 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl font-display">
              Chatbot cost calculator
            </p>
            <p className="max-w-3xl mx-auto mt-5 text-base font-normal text-gray-700 sm:text-lg lg:text-xl">
              Are you looking to adopt a chatbot but are unsure what it will cost? Don’t worry you are at the right place
            </p>
          </div>

          <div className="max-w-6xl mx-auto mt-16 lg:mt-20 flex flex-col lg:flex-row border rounded-3xl border-gray-300 overflow-hidden">
            {/* TOOL CONFIGURATIONS */}
            <div className="p-8 bg-gray-50 w-full flex flex-col gap-8">
              <div className="flex justify-between gap-6 w-full items-center">
                <div className="w-full">
                  <label className="block mb-2 text-sm font-medium text-gray-700">How many agents do you have?</label>
                  <input
                    type="range"
                    id="slider1"
                    name="slider1"
                    min="0"
                    max="100"
                    value={sliderValue1}
                    onChange={(e) => setSliderValue1(parseInt(e.target.value))}
                    style={gradientBackground(sliderValue1)}
                    className="w-full range-slider h-2 bg-gray-200 rounded-lg accent-blue-600 cursor-pointer appearance-none"
                  />
                  <div className="w-full flex justify-between mt-2">
                    <span className="text-sm text-gray-400 font-medium">50</span>
                    <span className="text-sm text-gray-400 font-medium">100</span>
                    <span className="text-sm text-gray-400 font-medium">150</span>
                    <span className="text-sm text-gray-400 font-medium">200</span>
                  </div>
                </div>
                <input
                  type="number"
                  value={sliderValue1}
                  onChange={(e) => handleInputChange(e, setSliderValue1)}
                  className="no-spinner w-16 h-9 rounded-lg border border-blue-600 text-center"
                />
              </div>

              <div className="flex justify-between gap-6 w-full items-center">
                <div className="w-full">
                  <label className="block mb-2 text-sm font-medium text-gray-700">How many hours do they work per month/week/day?</label>
                  <input
                    type="range"
                    id="slider2"
                    name="slider2"
                    min="0"
                    max="100"
                    value={sliderValue2}
                    onChange={(e) => setSliderValue2(parseInt(e.target.value))}
                    style={gradientBackground(sliderValue2)}
                    className="w-full range-slider h-2 bg-gray-200 rounded-lg accent-blue-600 cursor-pointer"
                  />
                  <div className="w-full flex justify-between mt-2">
                    <span className="text-sm text-gray-400 font-medium">50</span>
                    <span className="text-sm text-gray-400 font-medium">100</span>
                    <span className="text-sm text-gray-400 font-medium">150</span>
                    <span className="text-sm text-gray-400 font-medium">200</span>
                  </div>
                </div>
                <input
                  type="number"
                  value={sliderValue2}
                  onChange={(e) => handleInputChange(e, setSliderValue2)}
                  className="no-spinner w-16 h-9 rounded-lg border border-blue-600 text-center"
                />
              </div>

              <div className="flex justify-between gap-6 w-full items-center">
                <div className="w-full">
                  <label className="block mb-2 text-sm font-medium text-gray-700">What is the cost per hour per agent?</label>
                  <input
                    type="range"
                    id="slider3"
                    name="slider3"
                    min="0"
                    max="100"
                    value={sliderValue3}
                    onChange={(e) => setSliderValue3(parseInt(e.target.value))}
                    style={gradientBackground(sliderValue3)}
                    className="w-full range-slider h-2 bg-gray-200 rounded-lg accent-blue-600 cursor-pointer"
                  />
                  <div className="w-full flex justify-between mt-2">
                    <span className="text-sm text-gray-400 font-medium">50</span>
                    <span className="text-sm text-gray-400 font-medium">100</span>
                    <span className="text-sm text-gray-400 font-medium">150</span>
                    <span className="text-sm text-gray-400 font-medium">200</span>
                  </div>
                </div>
                <input
                  type="number"
                  value={sliderValue3}
                  onChange={(e) => handleInputChange(e, setSliderValue3)}
                  className="no-spinner w-16 h-9 rounded-lg border border-blue-600 text-center"
                />
              </div>

              <div className="flex justify-between gap-6 w-full items-center">
                <div className="w-full">
                  <label className="block mb-2 text-sm font-medium text-gray-700">How many tickets do you get each month?</label>
                  <input
                    type="range"
                    id="slider4"
                    name="slider4"
                    min="0"
                    max="100"
                    value={sliderValue4}
                    onChange={(e) => setSliderValue4(parseInt(e.target.value))}
                    style={gradientBackground(sliderValue4)}
                    className="w-full range-slider h-2 bg-gray-200 rounded-lg accent-blue-600 cursor-pointer"
                  />
                  <div className="w-full flex justify-between mt-2">
                    <span className="text-sm text-gray-400 font-medium">50</span>
                    <span className="text-sm text-gray-400 font-medium">100</span>
                    <span className="text-sm text-gray-400 font-medium">150</span>
                    <span className="text-sm text-gray-400 font-medium">200</span>
                  </div>
                </div>
                <input
                  type="number"
                  value={sliderValue4}
                  onChange={(e) => handleInputChange(e, setSliderValue4)}
                  className="no-spinner w-16 h-9 rounded-lg border border-blue-600 text-center"
                />
              </div>

              <div className="flex justify-between gap-6 w-full items-center">
                <div className="w-full">
                  <label className="block mb-2 text-sm font-medium text-gray-700">Time it takes to resolve each ticket (in mins)</label>
                  <input
                    type="range"
                    id="slider5"
                    name="slider5"
                    min="0"
                    max="100"
                    value={sliderValue5}
                    onChange={(e) => setSliderValue5(parseInt(e.target.value))}
                    style={gradientBackground(sliderValue5)}
                    className="w-full range-slider h-2 bg-gray-200 rounded-lg accent-blue-600 cursor-pointer"
                  />
                  <div className="w-full flex justify-between mt-2">
                    <span className="text-sm text-gray-400 font-medium">50</span>
                    <span className="text-sm text-gray-400 font-medium">100</span>
                    <span className="text-sm text-gray-400 font-medium">150</span>
                    <span className="text-sm text-gray-400 font-medium">200</span>
                  </div>
                </div>
                <input
                  type="number"
                  value={sliderValue5}
                  onChange={(e) => handleInputChange(e, setSliderValue5)}
                  className="no-spinner w-16 h-9 rounded-lg border border-blue-600 text-center"
                />
              </div>

              <div className="flex justify-between gap-6 w-full items-center">
                <div className="w-full">
                  <label className="block mb-2 text-sm font-medium text-gray-700">% of tickets you want AI to resolve automatically</label>
                  <input
                    type="range"
                    id="slider6"
                    name="slider6"
                    min="0"
                    max="100"
                    value={sliderValue6}
                    onChange={(e) => setSliderValue6(parseInt(e.target.value))}
                    style={gradientBackground(sliderValue6)}
                    className="w-full range-slider h-2 bg-gray-200 rounded-lg accent-blue-600 cursor-pointer"
                  />
                  <div className="w-full flex justify-between mt-2">
                    <span className="text-sm text-gray-400 font-medium">50</span>
                    <span className="text-sm text-gray-400 font-medium">100</span>
                    <span className="text-sm text-gray-400 font-medium">150</span>
                    <span className="text-sm text-gray-400 font-medium">200</span>
                  </div>
                </div>
                <input
                  type="number"
                  value={sliderValue6}
                  onChange={(e) => handleInputChange(e, setSliderValue6)}
                  className="no-spinner w-16 h-9 rounded-lg border border-blue-600 text-center"
                />
              </div>
            </div>

            <div className="p-8 bg-white w-full order-2 lg:order-none">
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
  );
}
