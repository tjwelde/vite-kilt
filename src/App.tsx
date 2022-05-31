import { useState, useEffect } from 'react'
import logo from './logo.svg'
import './App.css'

import * as Kilt from '@kiltprotocol/sdk-js';

function App() {
  useEffect(() => {
    const initKilt = async () => {
      await Kilt.init({ address: "wss://peregrine.kilt.io/parachain-public-ws" });
    };
    initKilt();
  });   
  
  const [w3n, setW3n] = useState('john_doe');
  const [did, setDid] = useState('');
  
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Hello Vite + Kilt!</p>
        <p>
          <input type="text" defaultValue={'john_doe'} onInput={(e) => setW3n(e.currentTarget.value) }/>
          <button type="button" onClick={async () => {
            const did = await Kilt.Did.Web3Names.queryDidForWeb3Name(w3n);
            setDid(did || 'not found');
          }}>
            Resolve Web3 Name
          </button>
        </p>
        <p>
          DID: {did}
        </p>
        <p>
        <a
            className="App-link"
            href="https://docs.kilt.io"
            target="_blank"
            rel="noopener noreferrer"
          >
            KILT Docs
          </a>
          {' | '}
          <a
            className="App-link"
            href="https://vitejs.dev/guide/features.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            Vite Docs
          </a>
        </p>
      </header>
    </div>
  )
}

export default App
