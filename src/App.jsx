import { useState } from 'react';
import Rating from './components/Rating.jsx';
import Thank from './components/Thank.jsx';

function App() {
  let [rating, setRating] = useState(0);
  let [submit, setSubmit] = useState(false);
  console.log(submit);

  return (
    <main className="App flex flex-col justify-center items-center w-screen min-h-screen bg-VeryDarkBlue font-Overpass">
      {submit ? (
        <Thank rating={rating} />
      ) : (
        <Rating setRating={setRating} rating={rating} setSubmit={setSubmit} />
      )}
    </main>
  );
}

export default App;
