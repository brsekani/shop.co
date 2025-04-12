import React, { useState } from "react";
import Reviews from "./reviews";
import Modal from "./modal";

const Tabs = () => {
  const [activeTab, setActiveTab] = useState("Product Details");
  const tabs = ["Product Details", "Rating & Reviews", "FAQs"];
  const [showModal, setShowModal] = useState(false);

  const handleModal = () => {
    setShowModal(true);
  };

  return (
    <div>
      <div className="flex items-center lg:justify-evenly justify-between border-gray-300">
        {tabs.map((tab) => (
          <h4
            key={tab}
            className={`text-[16px] lg:text-[20px] leading-[22px] font-medium cursor-pointer transition-colors pb-4 duration-300 ${
              activeTab === tab
                ? "text-black font-semibold border-b-2 border-black"
                : "text-[#00000099] font-normal"
            }`}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </h4>
        ))}
      </div>

      {/* border */}
      <div className="border border-[#0000001A]"></div>

      <div>
        {activeTab === "Product Details" && (
          <div className="mt-4">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Perspiciatis natus assumenda cum dolorem nobis autem, aliquid
              illum debitis eius? Porro provident temporibus adipisci nam eos
              quos tempora, necessitatibus facere iste dignissimos fugiat
              officia? Eius nisi ad minus suscipit unde similique vero officia
              modi nihil aut quisquam dolorem quasi magni quas distinctio
              aliquid, eligendi molestiae. Voluptatum assumenda ut et dolorem,
              placeat quos architecto omnis sunt atque autem saepe animi harum
              dignissimos beatae. Ex voluptatibus necessitatibus quae hic a
              ullam aut iste atque. Alias atque ipsa molestiae placeat
              consequuntur quaerat. Amet voluptatibus quia illum laborum natus
              eaque enim alias inventore excepturi quos?
            </p>
          </div>
        )}

        {activeTab === "Rating & Reviews" && (
          <>
            <div className="flex justify-between my-3 mb-6">
              <div className="flex items-center">
                <h2 className="font-bold leading-[27px] text-[20px] h-[27px] text-[#000000]">
                  All Reviews
                  <span className="text-[#00000099] font-normal text-[14px]">
                    (451)
                  </span>
                </h2>
              </div>

              <div className="flex justify-between gap-x-2 lg:gap-[10px]">
                <div>
                  <select
                    name="products"
                    id="products"
                    className="lg:w-[160px] px-4 hidden lg:flex items-center justify-between rounded-[62px] bg-[#F0F0F0] py-[16px]"
                  >
                    <option value="Latest">Latest</option>
                    <option value="Brand New">Brand New</option>
                    <option value="Fairly used">Fairly Used</option>
                  </select>
                </div>

                <div>
                  <button
                    className="h-[40px] w-[113px] lg:w-[166px] text-[#FFFFFF] bg-[#000000] rounded-[62px] text-[12px] lg:text-[16px] font-medium leading-[16.2px] py-[12px] lg:h-[48px] px-[16px]"
                    onClick={handleModal}
                  >
                    Write a Review
                  </button>
                </div>
              </div>
            </div>
            <Reviews />
          </>
        )}
      </div>

      {showModal && <Modal setShowModal={setShowModal} />}
    </div>
  );
};

export default Tabs;
