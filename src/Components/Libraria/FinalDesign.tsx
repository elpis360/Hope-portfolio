import { final_design } from "@/utils/data/libraria";
import React from "react";
import HeaderTextImageGroup from "../Reusable/HeaderTextImageGroup";

const FinalDesign = () => {
  return (
    <section className="my-5 xl:my-10">
      <div className="screen-center">
        <div className="">
          <p className="h4 font-extrabold mb-5">Hi-Fi UI Design</p>
          <p className="p">
            I developed the UI design based on all of the insights from the user
            study. The early exploration is shown below. I wanted to emphasise
            tradition, inventiveness, and simplicity in the design. I also
            created the product&#39;s mobile app.
          </p>
        </div>
        <div className="my-5 lg:my-10 flex flex-col gap-5 lg:gap-10 ">
          {final_design.map((item, index) => (
            <HeaderTextImageGroup item={item} key={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FinalDesign;
