import React from "react";

const topSallingProductPrice = [
  {
    imgUrl: "./shirt1.png",
    title: " T-Shirt for men",
    price: "$50",
  },
  {
    imgUrl: "./pant1.png",
    title: " Pant For Men",
    price: "$40",
  },
  {
    imgUrl: "./cap1.png",
    title: " Bucket hat  ",
    price: "$60",
  },
  {
    imgUrl: "./sadal1.png",
    title: " Bucket hat  green",
    price: "$70",
  },
  {
    imgUrl: "./shoses1.png",
    title: " Adidas  84",
    price: "$50",
  },
  {
    imgUrl: "./shirt1.png",
    title: " Adidas Forum 84",
    price: "$60",
  },
];

function TopSellingProduct() {
  return (
    <div className=" sm:w-[25%]  h-full px-10 py-5  bg-white rounded-[20px]">
      <p className="text-[16px] text-[#1F4173] font-bold"> Purchase Order</p>
      <div className=" h-full w-full mt-3 grid grid-cols-2 ">
        {topSallingProductPrice.map((i) => {
          return (
            <div className=" h-[120px]  flex flex-col  items-center ">
              <div className="h-[80px] w-[80px] ">
                {" "}
                <img src={i.imgUrl} width="100%" height="100%" />
              </div>
              <p className="text-[14px] text-[#1F4173]">{i.title}</p>
              <p className="text-[#1F4173] font-bold">$50</p>
            </div>
          );
        })}

      </div>
    </div>
  );
}

export default TopSellingProduct;
