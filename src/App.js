
import {Routes,Route} from 'react-router-dom'
import Home from './Components/Home'
// import Show from './Components/Show'

function App() {
  return (
    <>
      <Routes>
        {/* <Route path='/' element={<Home/>}/>
        <Route path='/show' element={<Show/>}/> */}
        <Route path='/' element={<Home/>}/>
      </Routes>
    </>
  );
}

export default App;
