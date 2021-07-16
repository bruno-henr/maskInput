import { useState } from 'react';
import Mask from './components/maskGlobal/index'

function App() {
  const [value,setValue] = useState('');
  return (
    <div className="App">
      <Mask 
        type="phone"
        onChange={(e)=> setValue(e.target.value) }
        value={value}
      />
    </div>
  );
}

export default App;
