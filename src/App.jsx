import { useState } from 'react';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import CovidInfo from './components/CovidInfo/CovidInfo';
import Deals from './components/Deals/Deals';
import DealImages from './components/DealImages/DealImages'
import Certificates from './components/Certificates/Certificates';
import Services from './components/Services/Services';
import ChooseUs from './components/ChooseUs/ChooseUs';
import Rules from './components/Rules/Rules';
import Countries from './components/Countries/Countries';
import EastAsia from './components/EastAsia/EastAsia';
import Footer from './components/Footer/Footer';
import './App.css';

function App() {

  return (
    <>
      <Header />
      <Main />
      <CovidInfo />
      <Deals />
      <DealImages />
      <Certificates />
      <Services />
      <ChooseUs />
      <Rules />
      <Countries />
      <EastAsia />
      <Footer />
    </>
  )
}

export default App
