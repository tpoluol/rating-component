import thankyou from '../assets/illustration-thank-you.svg';
export default function Thank({ rating }) {
  return (
    <article className="flex flex-col items-center w-[400px] h-[360px] bg-DarkBlue rounded-3xl p-6 gap-5">
      <img src={thankyou} alt="thank you icon" />
      <div className="bg-VeryDarkBlue/50 rounded-full p-2 text-Orange">
        <p>you selected {rating} out of 5</p>
      </div>
      <p className="text-white font-bold text-3xl">Thank you!</p>
      <p className="text-center text-LightGrey">
        We appreciate you taking the time to give a rating. If you ever need
        more support, don't hesitate to get in touch!
      </p>
    </article>
  );
}
