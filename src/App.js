import logo from './logo.svg';
import './App.css';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import Bio from './Components/Bio/Bio';
import Subscriber from './Components/Subscriber/Subscriber';
import SecondFooter from './Components/Second_Footer/SecondFooter';

function App() {
  return (
    <div className="mobile-container">

    <div className="App">
      <div className='background'>

    <Header/>
    <Subscriber/>
    <Bio/>
    <Footer/>
    <SecondFooter/>
      </div>
    </div>
    </div>
  );
}

export default App;
