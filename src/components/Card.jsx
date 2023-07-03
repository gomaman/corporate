import React from "react";
const Card = ({
  picture,
  title,
  price,
  desc1,
  desc2,
  desc3,
  buttonBG,
  buttonTC,
}) => {

  return (
    <div className="w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300">
      <img className="w-20 mx-auto mt-[-3rem]" src={picture} alt="" />
      <h2 className="text-2xl font-bold text-center py-8">{title}</h2>
      <p className="text-center text-4xl font-bold">{price}</p>
      <div className="text-center font-medium">
        <p className="py-2 border-b mx-8 mt-8">{desc1}</p>
        <p className="py-2 border-b mx-8">{desc2}</p>
        <p className="py-2 border-b mx-8">{desc3}</p>
      </div>
      <button
        className={`${buttonBG} w-[200px] rounded-md font-medium my-6 mx-auto py-3 ${buttonTC}`}
      >
        Get Started
      </button>
    </div>
  );
};

export default Card;


