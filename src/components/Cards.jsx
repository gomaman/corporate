import React from "react";
import Card from "./Card";
import Single from '../assets/single.png'
import Double from '../assets/double.png'
import Triple from '../assets/triple.png'

const Cards = () => {
  return (
    <div className="w-full py-[10rem] px-4 bg-white">
      <div className="max-w=[1240px] mx-auto grid md:grid-cols-3 gap-8">
        <Card
        picture={Single}
        title="Single User"
        price="$149"
        desc1="500 GB Storage"
        desc2="1 Granted User"
        desc3="Send up to 2GB"
        ></Card>

        <Card
        picture={Double}
        title="Double Users"
        price="$149"
        desc1="500 GB Storage"
        desc2="1 Granted User"
        desc3="Send up to 2GB"
        ></Card>

        <Card
        picture={Triple}
        title="Three Users"
        price="$149"
        desc1="500 GB Storage"
        desc2="1 Granted User"
        desc3="Send up to 2GB"
        ></Card>
      </div>
    </div>
  );
};

export default Cards;
