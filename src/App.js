
import './App.css';
import Brands from './components/Brands/Brands';
import Content from './components/Content/Content';
import Counter from './components/Counter/Counter';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header'
import Hero from './components/Hero/Hero';
import Newsletter from './components/Newsletter/Newsletter';
import OurServices from './components/OurServices/OurServices';
import Services from './components/Services/Services';

function App() {
  return (
    <div className="">
      <Header />
      <Hero />
      <Services />
      <Brands />
      <Content />
      <OurServices />
      <Counter />
      <Newsletter />
      <Footer />
    </div>
  );
}

export default App;
