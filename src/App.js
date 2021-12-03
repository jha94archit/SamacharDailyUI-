import './App.css';
import Body from './Components/Body/Body';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import Context from './Api/Context'



function App() {
  return (
    <Context>
        <div className="App">
        <Header />
        <Body />
        <Footer />
    </div>
    </Context>
    
  );
}

export default App;