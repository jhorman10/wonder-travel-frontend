import './App.css';
import { Footer } from './components';
import { Contact, ReserveInfo, Schedule } from './pages';

function App() {
  return (
    <>
      <ReserveInfo />
      <Schedule />
      <Contact/>
      <Footer/>
    </>
  );
}

export default App;
