import { useEffect, useState } from 'react';
import star from '../assets/icon-star.svg';
export default function Rating({ setRating, rating, setSubmit }) {
  useEffect(() => {
    console.log(rating);
  }, [rating]);
  return (
    <article className="flex flex-col w-[400px] h-[360px] bg-DarkBlue rounded-3xl p-6 gap-5">
      <div className="rounded-full bg-VeryDarkBlue/50 w-max p-3">
        <img src={star} alt="star icon"></img>
      </div>
      <p className="text-white font-bold text-2xl">How did we do?</p>
      <p className="text-MediumGrey">
        Please let us know how we did with your support request. All feedback is
        appreciated to help us improve our offering!
      </p>
      <div className="flex justify-between">
        {[1, 2, 3, 4, 5].map((num, index) => {
          return (
            <button
              onClick={() => {
                setRating(num);
              }}
              key={index}
              className="w-[50px] h-[50px] rounded-full bg-VeryDarkBlue/50 text-MediumGrey hover:bg-Orange hover:text-white focus:bg-LightGrey focus:text-white"
            >
              {num}
            </button>
          );
        })}
      </div>
      <button
        className="text-white bg-Orange hover:bg-white hover:text-Orange rounded-full h-[40px]"
        onClick={() => {
          setSubmit(true);
        }}
      >
        SUBMIT
      </button>
    </article>
  );
}
