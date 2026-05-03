import Layout from './components/Layout';
import { Route, Routes } from 'react-router-dom';
import HomePage from './components/HomePage';
import WhatsAppFloat from './components/WhatsAppFloat';
import About from './components/About';
import Contact from './components/Contact';
import Recrutement from './components/Recrutement';
import CvCandidat from './components/CvCandidat';

const App = () => {
  return (
    <Layout>
      <WhatsAppFloat />
      <Routes>
  <Route path='/' element={<HomePage />} />
  <Route path='/a-propos' element={<About />} />
  <Route path='/espace-candidat' element={<CvCandidat />} />
  <Route path='/espace-recruteur' element={<Recrutement />} />
  <Route path='/contact' element={<Contact />} />
</Routes>
    </Layout>
  );
};

export default App;