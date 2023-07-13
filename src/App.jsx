import './App.css';
import { Footer } from './components';
import { Contact, ReserveInfo, Schedule } from './pages';

function App() {
  return (
    <section id='wonder--app'>
      <ReserveInfo />
      <Schedule />
      <Contact/>
      <Footer/>
    </section>
  );
}

export default App;
