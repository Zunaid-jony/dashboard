import React from "react";

const AboutUs = () => {
  return (
   <div className="bg-white">
     <div className="max-w-[1536px]  mt-6 ml-auto mr-auto ">
      <br />
      <p className="text-2xl text-bold">PROVIDING BEST & SUITABLE SOLUTION</p>
      <p className="text-2xl text-bold ">FOR OUR VALUABLE CLIENTS & USERS</p>
     
      <div className="grid md:grid-cols-2 ml-auto mr-auto container gap-2 mt-6">
        
        <div className="text-left p-2">
          <p className="text-3xl font-bold mt-2">
            The Best Choice For Your Successful Business!
          </p>
          <p className="mt-10">
            Donec pulvinar magna id leoersi pellentesque impered dignissim
            rhoncus euismod euismod eros vitae accumsan lacinia. Fusce auctor
            consectur dapibus vestibulum ac ex nec turpis moles et sapien
            lacinia varius odio vel lobortis dui.
          </p>

          <p>
            Molitia modi quae laboriosam nemo minima molestias vitae rerulla eos
            explicabo optio accusan nisi repellend atione ut qui iusto quaerat
            tenetur veniam.
          </p>
          <div className="grid grid-cols-2 gap-4 mt-10">
            <div className="flex">
              <img
                src="http://bizix.premiumthemes.in/wp-content/uploads/2020/02/home1-icon1.png"
                alt=""
              />
              <p className="ml-4 text-bold">
                Website Designing and Development
              </p>
            </div>
            <div className="flex">
              <img
                src="http://bizix.premiumthemes.in/wp-content/uploads/2020/02/home1-icon2.png"
                alt=""
              />
              <p className="ml-4 text-bold">Android and iOs Apps Development</p>
            </div>
          </div>
          <p className="mt-8">
            Molitia modi quae laboriosam nemo minima molestias vitae rerulla eos
            explicabo optio accusan nisi repellend atione ut qui iusto quaerat
            tenetur veniam.
          </p>
          <p className="p-4 w-40 mt-8 border-2 border-[#f04f25]">
            {" "}
            Get Free Quote
          </p>
        </div>



        <div style={{ hight: "20px" }}>
          <img
            className="md:ml-20 ml-0 "
            src="https://www.primeautomation.com.bd/wp-content/uploads/2020/02/Practical-Experience.jpg"
            alt=""
          />
        </div>
      </div>
    </div>
   </div>
  );
};

export default AboutUs;
