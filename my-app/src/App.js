import React from 'react';
import './App.css'
import { Header } from './components/Header/Header.js'
import { NasaImgProvider } from './components/NasaContext'
import { Images } from './components/Images'

const App = () => {

    return (
        <NasaImgProvider>
            <Header />
            <Images />
        </NasaImgProvider>
    );
}

export default App