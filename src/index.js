import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay';
import Spinner from './Spinner';
import userLocation from './useLocation';

const App = () => {
  const [lat, errorMessage] = userLocation();
  let content;
  if (errorMessage) {
    content = <div>Error: {errorMessage}</div>;
  } else if (lat) {
    content = <SeasonDisplay lat={lat} />;
  } else {
    content = <Spinner message="Please accept location request" />;
  }
  return <div className="border red">{content}</div>;
};

ReactDOM.render(<App />, document.querySelector('#root'));
