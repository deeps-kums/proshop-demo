import { Container } from 'react-bootstrap';
import { Outlet } from 'react-router-dom';
import Footer from './components/Footer';
import Header from './components/Header';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import HomeScreen from './screens/HomeScreen';

const App = () => {
  console.log('App component rendered');
  return (
    <>
    <Header />
      <main className='py-3'>
        <Container>
          <Outlet />
        </Container>
      </main>
    <Footer />
    <ToastContainer />
    </>
  );
};

export default App;
