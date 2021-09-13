import  { useState } from 'react';
import './App.css';
import TopBar from './components/TopBar';
import Footer from './components/Footer';
import MainView from './components/MainView';



const Example = (props) => {
  
  return (
    <div>
      <TopBar />
      <MainView />
      <Footer />
    </div>
  );
}

export default Example;