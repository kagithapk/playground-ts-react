import { useEffect } from 'react';
import './App.scss';
import Header from './components/layouts/Header';
import Main from './components/Main';

function App() {
  return (
    <div className="App">
      <Header />
      <Main>
        <p>This is main</p>
      </Main>
    </div>
  );
}

export default App;
