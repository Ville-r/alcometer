import './App.css';
import {useState} from 'react'; 
import FillOptions from './FillOptions';

function App() {
  const[weight,setWeight] = useState('');
  const[bottles,setBottles] = useState(1);
  const[time,setTime] = useState(1);
  const[gender,setGender] = useState('male');
  const[result,setResult] = useState(0);

  function handleSubmit(e) {
    e.preventDefault();
    const litres = bottles * 0.33;
    const grams = litres * 8 * 4.5;
    const burning = weight / 10;
    const grams_left = grams - (burning * time)
    let level = 0;
    if (gender === 'male') {
      level = grams_left / (weight * 0.7);
    }
    else {
      level = grams_left / (weight * 0.6);
    }
    if (level < 0) {
      setResult(0);
    }
    else {
    setResult(level);
  }
  }

  return (
    <div id="tyyli">
      <h1>Calculating blood alcohol level</h1>
        <form onSubmit={handleSubmit}>
        <div>
          <label>Weight</label>
          <input type="number" step="1" value={weight} onChange={e => setWeight(e.target.value)}/>
        </div>
        <div>
          <label>Bottles</label>
          <select value={bottles} onChange={e => setBottles(e.target.value)}>
          <FillOptions />
          </select>
        </div>
        <div>
          <label>Time</label>
          <select value={time} onChange={e => setTime(e.target.value)}>
          <FillOptions />
          </select>
        </div>
        <div>
          <label>Gender</label>
          <input type="radio" name="gender" value="male" defaultChecked onChange={e => setGender(e.target.value)}/><label>Male</label>
          <input type="radio" name="gender" value="female" onChange={e => setGender(e.target.value)}/><label>Female</label>
        </div>
        <div>
          <output>{result.toFixed(2)}</output>
        </div>
        <div>
        <button>Calculate</button>
        </div>
      </form>
    </div>
  );
}

export default App;
