import React from 'react'
import axios from 'axios'
import './App.css';

const API_PATH = 'http://localhost:8080/php-react/index.php';

function App() {
  const [name, setName] = React.useState('')
  
  const sendNameHandler = (e) => {
    e.preventDefault();
    axios({
      method: 'post',
      url: `${API_PATH}`,
      headers: { 'content-type': 'application/json' },
      data: name
    })
      .then(result => {
        console.log(result)
      })
      .catch(error => console.log(error));
  };


  return (
    <div className="App">
      <input type="text" id="text" placeholder="Name" onChange={e => setName(e.target.value)} />
      <button type="submit" onClick={sendNameHandler}>Save</button>
    </div>
  );
}

export default App;
