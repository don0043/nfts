import './App.css';
import {Routes, Route} from 'react-router-dom'
import Main from "./components/Main";
import SingleNft from "./components/SingleNft";





function App() {

  return (
    <div className="App">

        <Routes>

            <Route path="/" element={<Main/>}/>
            <Route path="nfts/:address/:id" element={<SingleNft/>}/>
        </Routes>

    </div>
  );
}

export default App;
