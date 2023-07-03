import './App.css';
import Navbar from '../src/components/Navbar'
import Hero from './components/Hero';
import Analytics from './components/Analytics';
import NewsLetter from './components/NewsLetter';
import Cards from './components/Cards';

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Hero></Hero>
      <Analytics></Analytics>
      <NewsLetter></NewsLetter>
      <Cards></Cards>
    </div>
  );
}

export default App;
