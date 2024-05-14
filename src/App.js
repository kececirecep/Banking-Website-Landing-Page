
import './App.css';
import Brands from './components/Brands/Brands';
import Content from './components/Content/Content';
import Counter from './components/Counter/Counter';
import Header from './components/Header/Header'
import Newsletter from './components/Newsletter/Newsletter';
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
      <Counter />
      <Newsletter />
    </div>
  );
}

export default App;
