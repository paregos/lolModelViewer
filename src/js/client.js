import React from 'react';
import ReactDOM from 'react-dom';

//Components
import MainPage from "../components/MainPage"


const title = '???';

const App = () => (
    <MainPage />
);

ReactDOM.render(
  <App />,
  document.getElementById('app')
);