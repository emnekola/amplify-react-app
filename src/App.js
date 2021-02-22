import React
  , {useState
  , useEffect}
  from 'react';
import { API } from 'aws-amplify';
import logo from './logo.svg';
import './App.css';

const App = () => {
  // Create coins variable and set to empty array
  const [coins, updateCoins] = useState([]);

  // Define function to all API
  const fetchCoins = async () => {
    const data = await API.get('apic8facde1', '/coins')
    updateCoins(data.coins);
  };

  // Call fetchCoins function when component loads
  useEffect(
    () => {
    fetchCoins()
  }
    , []
  );

  return (
    <div className="App">
      {
        coins.map(
          (coin, index) => (
            <div
              key={index}
            >
              <h2>
                {coin.name} - {coin.symbol}
              </h2>
              <h5>
                ${coin.price_usd}
              </h5>
            </div>
        ))
      }
    </div>
  );
}

export default App;
