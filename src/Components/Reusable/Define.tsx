import React from "react";
import Title from "./Title";
import ResponsiveImage from "./Image";
import { TitleTextImage } from "@/Interfaces/Projects";
interface Props {
  define: TitleTextImage[];
  color: string;
}
const Define = ({ define, color }: Props) => {
  return (
    <section className="my-10 xl:my-20">
      <div className="screen-center">
        <Title text="Define" color={color} />
        {define.map((item, index) => (
          <div className="my-10 flex flex-col gap-10" key={index}>
            <div className="">
              <p className="h4 font-extrabold mb-5">{item.title}</p>
              <p className="p">{item.text}</p>
            </div>
            {item.image &&
              item.image.map((image, index) => (
                <div className="w-[90%] mx-auto" key={index}>
                  <ResponsiveImage
                    src={image}
                    alt={item.title || "Hope Honah Portfolio"}
                  />
                </div>
              ))}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Define;
