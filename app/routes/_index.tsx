import { ChangeEvent, useState } from 'react';
import Calculator from './calculator';

export default function Home() {
  const [sliderValue1, setSliderValue1] = useState(10);
  const [sliderValue2, setSliderValue2] = useState(100);
  const [sliderValue3, setSliderValue3] = useState(20);
  const [sliderValue4, setSliderValue4] = useState(1000);
  const [sliderValue5, setSliderValue5] = useState(60);
  const [sliderValue6, setSliderValue6] = useState(40);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>, setSliderValue: React.Dispatch<React.SetStateAction<number>>, minValue: number, maxValue: number) => {
    let value = parseInt(e.target.value);
    
    if (isNaN(value)) {
      value = minValue; // Reset to min value if input is not a number
    } else {
      value = Math.min(Math.max(value, minValue), maxValue); // Clamp value within range
    }
    setSliderValue(value);
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
                    min="1"
                    max="200"
                    value={sliderValue1}
                    onChange={(e) => setSliderValue1(parseInt(e.target.value))}
                    style={{
                      background: `linear-gradient(to right, #145DEE 0%, #145DEE ${sliderValue1/2}%, #CBD5E0 ${sliderValue1/2}%, #CBD5E0 100%)`
                    }}
                    className="w-full range-slider h-2 bg-gray-100 rounded-lg accent-blue-600 cursor-pointer appearance-none"
                  />
                  <div className="w-full flex justify-between mt-2">
                    <span className="text-sm text-gray-400 font-medium ml-2">1</span>
                    <span className="text-sm text-gray-400 font-medium ml-2">50</span>
                    <span className="text-sm text-gray-400 font-medium">100</span>
                    <span className="text-sm text-gray-400 font-medium">150</span>
                    <span className="text-sm text-gray-400 font-medium">200</span>
                  </div>
                </div>
                <input
                  type="number"
                  value={sliderValue1}
                  onChange={(e) => handleInputChange(e, setSliderValue1, 1, 200)}
                  className="no-spinner w-16 h-9 rounded-lg border border-blue-600 text-center"
                />
              </div>

              <div className="flex justify-between gap-6 w-full items-center">
                <div className="w-full">
                  <label className="block mb-2 text-sm font-medium text-gray-700">How many hours do they work per month?</label>
                  <input
                    type="range"
                    id="slider2"
                    name="slider2"
                    min="1"
                    max="200"
                    value={sliderValue2}
                    onChange={(e) => setSliderValue2(parseInt(e.target.value))}
                    style={{
                      background: `linear-gradient(to right, #145DEE 0%, #145DEE ${sliderValue2/2}%, #CBD5E0 ${sliderValue2/2}%, #CBD5E0 100%)`
                    }}
                    className="w-full range-slider h-2 bg-gray-200 rounded-lg accent-blue-600 cursor-pointer"
                  />
                  <div className="w-full flex justify-between mt-2">
                  <span className="text-sm text-gray-400 font-medium ml-2">1</span>
                    <span className="text-sm text-gray-400 font-medium ml-2">50</span>
                    <span className="text-sm text-gray-400 font-medium">100</span>
                    <span className="text-sm text-gray-400 font-medium">150</span>
                    <span className="text-sm text-gray-400 font-medium">200</span>
                  </div>
                </div>
                <input
                  type="number"
                  value={sliderValue2}
                  onChange={(e) => handleInputChange(e, setSliderValue2, 1, 200)}
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
                    min="1"
                    max="200"
                    value={sliderValue3}
                    onChange={(e) => setSliderValue3(parseInt(e.target.value))}
                    style={{
                      background: `linear-gradient(to right, #145DEE 0%, #145DEE ${sliderValue3/2}%, #CBD5E0 ${sliderValue3/2}%, #CBD5E0 100%)`
                    }}
                    className="w-full range-slider h-2 bg-gray-200 rounded-lg accent-blue-600 cursor-pointer"
                  />
                  <div className="w-full flex justify-between mt-2">
                  <span className="text-sm text-gray-400 font-medium ml-2">1</span>
                    <span className="text-sm text-gray-400 font-medium ml-2">50</span>
                    <span className="text-sm text-gray-400 font-medium">100</span>
                    <span className="text-sm text-gray-400 font-medium">150</span>
                    <span className="text-sm text-gray-400 font-medium">200</span>
                  </div>
                </div>
                <input
                  type="number"
                  value={sliderValue3}
                  onChange={(e) => handleInputChange(e, setSliderValue3, 1, 200)}
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
                    min="1"
                    max="2000"
                    value={sliderValue4}
                    onChange={(e) => setSliderValue4(parseInt(e.target.value))}
                    style={{
                      background: `linear-gradient(to right, #145DEE 0%, #145DEE ${sliderValue4/20}%, #CBD5E0 ${sliderValue4/20}%, #CBD5E0 100%)`
                    }}
                    className="w-full range-slider h-2 bg-gray-200 rounded-lg accent-blue-600 cursor-pointer"
                  />
                  <div className="w-full flex justify-between mt-2">
                  <span className="text-sm text-gray-400 font-medium ml-2">1</span>
                    <span className="text-sm text-gray-400 font-medium ml-3">500</span>
                    <span className="text-sm text-gray-400 font-medium ml-2">1000</span>
                    <span className="text-sm text-gray-400 font-medium">1500</span>
                    <span className="text-sm text-gray-400 font-medium">2000</span>
                  </div>
                </div>
                <input
                  type="number"
                  value={sliderValue4}
                  onChange={(e) => handleInputChange(e, setSliderValue4, 1, 2000)}
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
                    min="1"
                    max="200"
                    value={sliderValue5}
                    onChange={(e) => setSliderValue5(parseInt(e.target.value))}
                    style={{
                      background: `linear-gradient(to right, #145DEE 0%, #145DEE ${sliderValue5/2}%, #CBD5E0 ${sliderValue5/2}%, #CBD5E0 100%)`
                    }}
                    className="w-full range-slider h-2 bg-gray-200 rounded-lg accent-blue-600 cursor-pointer"
                  />
                  <div className="w-full flex justify-between mt-2">
                  <span className="text-sm text-gray-400 font-medium ml-2">1</span>
                    <span className="text-sm text-gray-400 font-medium ml-2">50</span>
                    <span className="text-sm text-gray-400 font-medium">100</span>
                    <span className="text-sm text-gray-400 font-medium">150</span>
                    <span className="text-sm text-gray-400 font-medium">200</span>
                  </div>
                </div>
                <input
                  type="number"
                  value={sliderValue5}
                  onChange={(e) => handleInputChange(e, setSliderValue5, 1, 200)}
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
                    min="1"
                    max="100"
                    value={sliderValue6}
                    onChange={(e) => setSliderValue6(parseInt(e.target.value))}
                    style={gradientBackground(sliderValue6)}
                    className="w-full range-slider h-2 bg-gray-200 rounded-lg accent-blue-600 cursor-pointer"
                  />
                  <div className="w-full flex justify-between mt-2">
                  <span className="text-sm text-gray-400 font-medium ml-2">1</span>
                    <span className="text-sm text-gray-400 font-medium ml-2">25</span>
                    <span className="text-sm text-gray-400 font-medium">50</span>
                    <span className="text-sm text-gray-400 font-medium">75</span>
                    <span className="text-sm text-gray-400 font-medium">100</span>
                  </div>
                </div>
                <input
                  type="number"
                  value={sliderValue6}
                  onChange={(e) => handleInputChange(e, setSliderValue6, 1, 100)}
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
                autoResolved={sliderValue6}
                resolutionTime={sliderValue5}
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
