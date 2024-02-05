
import './App.css';
import AboutPart from './components/AboutPart';
import ArticalPart from './components/ArticalPart';
import FooterPart from './components/Footer';
import HeaderPart from './components/HeaderPart';
import ArticalData from './components/ArticalData';


function App() {
  return (
    <div>
        <HeaderPart />
        <AboutPart />
        <ArticalPart detail={ArticalData}/>
        <FooterPart />
    </div>

    
  );
}

export default App;
