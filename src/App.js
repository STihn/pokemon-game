import React from 'react';
import Header from './components/Header/Header';
import Layout from './components/Layout/Layout';
import Footer from './components/Footer/Footer';
import backgroundPokemon from './assets/background-pokemon.jpeg';

export const App = () => {
  return (
    <React.Fragment>
      <Header 
        // title={title} 
        // descr={description} 
      />
      <Layout 
        title={'this is title'} 
        descr={'this is description'} 
        urlBg={backgroundPokemon} 
      />
      <Layout 
        title={'this is title'} 
        descr={'this is description'}  
        colorBg={'#e2e2e2'}
      />
      <Layout 
        title={'this is title'} 
        descr={'this is description'} 
        urlBg={backgroundPokemon} 
      />
      <Footer />
    </React.Fragment>
  );
};
