import { useState } from 'react'
import { InputBox } from './components'
import useCurrencyInfo from './hooks/useCurrencyinfo'
import './App.css'

function App() {
  const BackgroundImage='./Gemini.jpg'
  const [amount, setAmount] = useState(0)
  const [from, selectFrom]=useState("usd")
  const [to, selectTo]=useState("npr")
  const [convertedAmount, setConvertedAmount]=useState(0)
  const currencyInfo =useCurrencyInfo(from)
  const options =Object.keys(currencyInfo)
  const swap=()=>{
    const temp = from;
    selectFrom(to);
    selectTo(temp);

    const tempAmount = amount;
    setAmount(convertedAmount);
    setConvertedAmount(tempAmount);
  }
 const conversion=()=> {setConvertedAmount(amount*currencyInfo[to])}
      return (
          <div
              className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
            
          >
              <div className="w-full">
                  <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
                      <form
                          onSubmit={(e) => {
                              e.preventDefault();
                              conversion();
                             
                          }}
                      >
                          <div className=" w-full mb-1">
                              <InputBox
                                  label="From"
                                  amount={amount}
                                  selectCurrency={from}
                                  onAmountChange={(amount)=>setAmount(amount)}
                                  currencyOption={options}
                                  onCurrencyChange={(currency) => selectFrom(currency)}
                              />
                          </div>
                          <div className="relative w-full h-0.5">
                              <button
                                  type="button"
                                  className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
                                  onClick={swap}
                              >
                                  swap
                              </button>
                          </div>
                          <div className="w-full mt-1 mb-4">
                              <InputBox
                                  label="To"
                                  amount={convertedAmount}
                                  currencyOption={options}
                                  onCurrencyChange={(currency) => selectTo(currency)}
                                  selectCurrency={to}
                                  disabled={false}/>
                          </div>
                          <button  type="submit" className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg">
                              Convert {from.toLocaleUpperCase()} to {to.toLocaleUpperCase()} 
                          </button>
                      </form>
                  </div>
              </div>
          </div>
      );
  
}

export default App
