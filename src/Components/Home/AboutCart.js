import React from "react";
const AboutCart = () => {
  return (
    <div className="max-w-[1536px]  bg-slate-100 mr-auto ml-auto">
      <br />
      <div className="grid md:grid-cols-3 gap-8 container ml-auto mr-auto mt-4 mb-4">
        <div className="bg-white shadow-xl hover:bg-[#f04f25] hover:text-white p-4">
          <img
            className="ml-auto mr-auto mb-4 mt-4"
            src="https://www.primeautomation.com.bd/wp-content/uploads/2020/02/Who-We-Are.png"
            alt=""
          />
          <p className="font-bold">WHO WE ARE</p>

          <p className="mt-2">
            Prime Automation Engineering provides one stop automated solution
            for your trade and industry. Depending on the size and field of your
            organization, Read More
          </p>
        </div>
        <div className="bg-white shadow-xl hover:bg-[#f04f25] hover:text-white p-4">
          <img
            className="ml-auto mr-auto mb-4 mt-4"
            src="https://www.primeautomation.com.bd/wp-content/uploads/2020/02/Mission.png"
            alt=""
          />
          <p className="font-bold">OUR MISSION</p>

          <p className="mt-2">
            Our Mission is to achieve the reputation of a quality, high standard
            & reliable solution & service Provider Company in the automated
            industry in Bangladesh. Read More
          </p>
        </div>
        <div className="bg-white shadow-xl hover:bg-[#f04f25] hover:text-white p-4">
          <img
            className="ml-auto mr-auto mb-4 mt-4"
            src="https://www.primeautomation.com.bd/wp-content/uploads/2020/02/Vision.png"
            alt=""
          />
          <p className="font-bold">OUR VISION</p>

          <p className="mt-2">
            Our Vision is to achieve 100% customer satisfaction by delivering
            quality products and services at an affordable cost. Our forward
            vision is to strive to Read More
          </p>
        </div>
      </div>
      <br />
    </div>
  );
};

export default AboutCart;
