import { useState } from "react";
import shopTF from "@/public/images/shopTF_prev_ui.png";
import shopTB from "@/public/images/shopTB_prev_ui.png";
import shopTFull from "@/public/images/shopTFull_prev_ui.png";
import Image from "next/image";

const Outfits = () => {
  const [activeImage, setActiveImage] = useState(0);

    const imgsData = [
    {
      src: shopTF,
      alt: "front",
      bg: "#F3F1EF",
    },
    {
      src: shopTB,
      alt: "back",
      bg: "#F0EEED",
    },
    {
      src: shopTFull,
      alt: "full",
      bg: "#F4F1F4",
      className: "object-cover",
    },
  ];

  return (
    <div className="lg:hidden">
      <div className="mt-6">
        <div className="bg-[#F0EEED] grid place-items-center h-[290px] mb-3 rounded-[20px]">
          <Image  src={imgsData[activeImage].src}
                  alt={imgsData[activeImage].alt} className="h-[290px]" />
        </div>

        <div className="flex items-center justify-between gap-2 mb-7">
              {imgsData.map((image, index) => (
                  <div
                    key={index}
                    onClick={() => setActiveImage(index)}
                    className={`rounded-[20px] grid place-items-center h-[106px] ${
                      activeImage === index
                        ? "border border-black"
                        : "border border-transparent"
                    }`}
                    style={{ backgroundColor: image.bg }}
                  >
                    {" "}
                    <Image
                      src={image.src}
                      alt={image.alt}
                      className={image.className || ""}
                    />
                  </div>
                ))}
          {/* <div className="bg-[#F3F1EF] border border-black rounded-[20px] grid place-items-center h-[106px]">
            <Image src={shopTF} alt="front" />
          </div>
          <div className="bg-[#F0EEED] rounded-[220px] grid place-items-center h-[106px]">
            <Image src={shopTB} alt="back" />
          </div>
          <div className="bg-[#F4F1F4] rounded-[20px] h-[106px]">
            <Image src={shopTFull} alt="full" className="object-contain" />
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Outfits;
