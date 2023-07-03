import './App.css';
import Navbar from '../src/components/Navbar'
import Hero from './components/Hero';
import Analytics from './components/Analytics';
import NewsLetter from './components/NewsLetter';

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Hero></Hero>
      <Analytics></Analytics>
      <NewsLetter></NewsLetter>
    </div>
  );
}

export default App;
