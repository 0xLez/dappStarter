
import './App.css';

import { ConnectButton } from '@rainbow-me/rainbowkit';


function App() {
  return (
    <div className="py-4 px-4">
      <h1 className="text-2xl font-bold underline text-red-600">
        Simple React Typescript Tailwind Sample
      </h1>
      <div className="pt-4">
        <ConnectButton />
      </div>
    </div>
  );
}

export default App;
