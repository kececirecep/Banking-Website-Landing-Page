
import './App.css';
import Brands from './components/Brands/Brands';
import Content from './components/Content/Content';
import Header from './components/Header/Header'
import OurServices from './components/OurServices/OurServices';
import Services from './components/Services/Services';

function App() {
  return (
    <div className="">
      <Header />
      <Services />
      <Brands />
      <Content />
      <OurServices />
    </div>
  );
}

export default App;
