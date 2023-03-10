import { useState } from 'react';
import './App.css';
import ProfilePage1 from './ProfilePage1';
import ProfilePage2 from './ProfilePage2';

function App() {
  const [Option, setOption] = useState('Hi');

  return (
    <div className="App">
      <h1>This Is {Option}</h1>
      <select onChange={e => setOption(e.target.value)}>
        <option>Him</option>
        <option>Her</option>
        <option>Hi</option>
      </select>
      <br/>
      <ProfilePage1 user={Option} />
      <ProfilePage2 user={Option} />
    </div>
  );
}

export default App;
