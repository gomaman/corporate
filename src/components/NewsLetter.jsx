import React from "react";

const NewsLetter = () => {
  return (
    <div className="w-full py-16 text-white">
      <div className="max-w-[1240px] mx-auto grid lg:grid-cols-3 px-4">
        <div className="lg:col-span-2 md:pt-6">
            <h1 className="md:text-4xl sm:text-3xl text-2xl py-2 font-bold">Want tips & tricks to optimize your flow?</h1>
            <p>Sign up to our newsletter and stay up to date.</p>
        </div>
        <div className="my-4">
            <div className="flex flex-col sm:flex-row items-center justify-between w-full">
                <input className="p-3 flex w-full rounded-md text-black" type="email" placeholder='Enter Email' name="" id="" />
                <button className="bg-[#00df9a] w-[200px] rounded-md font-medium my-6 md:ml-4 sm:ml-4 mx-auto py-3 px-6 text-black">Notify Me</button>
            </div>
                <p>We care about the protection of your data. Read our <span className="text-[#00df9a]">Privacy Policy.</span></p>
        </div>
      </div>
    </div>
  );
};

export default NewsLetter;
