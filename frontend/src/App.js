import './App.css';
import dummyData from './dummyData';
import Body from './components/Body/Body';
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import { Route, Routes } from 'react-router-dom'

function App() {

  const data = dummyData

  console.log(dummyData)

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path='/' exact element={() => <Body data={data}/>} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
