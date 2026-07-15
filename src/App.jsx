import {useState, useMemo} from "react";
import "./App.css";
function App(){

  

const [amount, setAmount] = useState(1);
const [startCurrency, setStartCurrency]= useState("USD");
const [targetCurrency, setTargetCurrency]= useState("EUR");

const exchangeRates = {
  USD: 1,
  EUR: 0.92,
  GBP: 0.78,
  JPY: 156.7,
};
const convertedFromAmount = useMemo(() => {
  return amount / exchangeRates[startCurrency];
}, [amount, startCurrency]);

const convertedAmount =
  convertedFromAmount * exchangeRates[targetCurrency];
  return(
    <div className="container">
      <h1>Currency Converter</h1>
      <div>
      <input type = "number" value ={amount} onChange={(event)=>setAmount(event.target.value)}/>
      </div>
      <div>
    <select
    value ={startCurrency}
    onChange={(event)=>setStartCurrency(event.target.value)}>
      <option value ="USD">USD</option>
      <option value ="EUR">EUR</option>
      <option value ="GBP">GBP</option>
      <option value ="JPY">JPY</option>

    </select>
    </div>
    <div>
    <select
    value={targetCurrency}
    onChange={(event)=>setTargetCurrency(event.target.value)}>
      <option value ="USD">USD</option>
      <option value ="EUR">EUR</option>
      <option value ="GBP">GBP</option>
      <option value ="JPY">JPY</option>

    </select>
    </div>
    <div className="result">
    <h2>{amount} {startCurrency} = </h2>
    <p>{convertedAmount.toFixed(2)} {targetCurrency}</p>
    </div>
    </div>
  );
}

export default App;