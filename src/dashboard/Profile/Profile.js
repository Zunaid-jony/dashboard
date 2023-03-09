import React from "react";
import { AiOutlineMail } from "react-icons/ai";
import { BsTelephoneForward } from "react-icons/bs";
import { GoLocation } from "react-icons/go";
import { CiFacebook } from "react-icons/ci";
import { TbCertificate } from "react-icons/tb";
import { FaLaptopCode } from "react-icons/fa";
import { GiSlap } from "react-icons/gi";
import { MdOutlineVerified, MdVerified } from "react-icons/md";
import { Progress } from "@material-tailwind/react";

const Profile = () => {
  return (
    <div>
      <div className="grid grid-cols-3  mt-10 gap-6 p-4">
        <div>
          <div className="bg-white shadow-md p-4">
            <div>
              <div className="bg-[#3378ff]">
                <div className=" mr-auto p-4 ">
                  <img
                    className="w-32 ml-auto  mr-auto"
                    src="https://templates.iqonic.design/datum/html/assets/images/user/1.jpg"
                    alt=""
                  />

                  <p className="text-3xl text-white font-bold mt-6">Jony</p>
                  <p className="text-sm text-white font-bold mt-2 mb-14">
                    Font end Developer
                  </p>
                </div>
              </div>

              <div className="bg-[#faf4f4] shadow-md p-4 ">
                <div className="bg-white shadow-md md:-mt-16 p-4 rounded-md">
                  <p className="flex mt-2">
                    {" "}
                    <span className="py-2 px-2 bg-[#c8cfdd] mr-4 rounded-md text-cyan-500">
                      <AiOutlineMail></AiOutlineMail>{" "}
                    </span>{" "}
                    <span>jony@gamil.com</span>{" "}
                  </p>

                  <p className="flex mt-2">
                    {" "}
                    <span className="py-2 px-2 bg-[#c8cfdd] mr-4 rounded-md text-cyan-500">
                      <BsTelephoneForward></BsTelephoneForward>{" "}
                    </span>{" "}
                    <span>01627392810</span>{" "}
                  </p>

                  <p className="flex mt-2">
                    {" "}
                    <span className="py-2 px-2 bg-[#c8cfdd] mr-4 rounded-md text-cyan-500">
                      <GoLocation></GoLocation>{" "}
                    </span>{" "}
                    <span>Dhaka</span>{" "}
                  </p>

                  <p className="flex  ml-auto mr-auto mt-8">
                    <span className="py-2 px-2 bg-[#dfe3eb] hover:bg-[#bcbfc5] mr-4 rounded-md text-cyan-500">
                      <CiFacebook></CiFacebook>{" "}
                    </span>

                    <span className="py-2 px-2 bg-[#dfe3eb] hover:bg-[#bcbfc5] mr-4 rounded-md text-cyan-500">
                      <GoLocation></GoLocation>{" "}
                    </span>

                    <span className="py-2 px-2 bg-[#dfe3eb] hover:bg-[#bcbfc5] mr-4 rounded-md text-cyan-500">
                      <GoLocation></GoLocation>{" "}
                    </span>

                    <span className="py-2 px-2 bg-[#dfe3eb] hover:bg-[#bcbfc5] mr-4 rounded-md text-cyan-500">
                      <GoLocation></GoLocation>{" "}
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white shadow-md p-4 rounded-md mt-8 ml-auto mr-auto">
            <p className="text-6xl ml-28 mr-auto justify-center">
              <TbCertificate className="text-[#695be9]"></TbCertificate>
            </p>
            <p className="text-4xl text-[#5b4beb] font-bold mt-2">42+</p>

            <p className="text-2xl text-[#2b293d]">Awards</p>
          </div>

          <div className="bg-white shadow-md p-4 rounded-md mt-8 ml-auto mr-auto">
            <p className="text-6xl ml-28 mr-auto justify-center">
              <FaLaptopCode className="text-[#17dd53]"></FaLaptopCode>
            </p>
            <p className="text-4xl text-[#17dd53] font-bold mt-2"> 3+ years</p>

            <p className="text-2xl text-[#2b293d]">Experience</p>
          </div>

          <div className="bg-white shadow-md p-4 rounded-md mt-8 ml-auto mr-auto">
            <p className="text-6xl ml-28 mr-auto justify-center">
              <GiSlap className="text-[#695be9]"></GiSlap>
            </p>
            <p className="text-4xl text-[#5b4beb] font-bold mt-2">42+</p>

            <p className="text-2xl text-[#2b293d]">Awards</p>
          </div>
        </div>

        {/* secent part */}
        <div className="col-span-2 ">
          <div>
            <div className="bg-white shadow-md rounded-md p-3 text-left mb-6 ">
              <p className="text-xl font-semibold">About Me</p>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. It was
                popularised in the 1960s with the release of Letraset sheets
                containing Lorem Ipsum passages, and more recently with desktop
                publishing software like Aldus PageMaker including versions of
                Lorem Ipsum.
              </p>

              <p className=" mt-4 font-semibold">Personal Skills</p>

              <p className="flex mt-2">
                {" "}
                <span className="mr-4 ">
                  {" "}
                  <MdOutlineVerified className="text-[#3378ff] text-xl "></MdOutlineVerified>
                </span>{" "}
                Lorem ipsum dolor sit amet, adipiscing elit.
              </p>
              <p className="flex mt-2">
                {" "}
                <span className="mr-4 ">
                  {" "}
                  <MdOutlineVerified className="text-[#3378ff] text-xl "></MdOutlineVerified>
                </span>{" "}
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
              <p className="flex mt-2">
                {" "}
                <span className="mr-4 ">
                  {" "}
                  <MdOutlineVerified className="text-[#3378ff] text-xl "></MdOutlineVerified>
                </span>{" "}
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
              <p className="flex mt-2">
                {" "}
                <span className="mr-4 ">
                  {" "}
                  <MdOutlineVerified className="text-[#3378ff] text-xl "></MdOutlineVerified>
                </span>{" "}
                Lorem ipsum dolor sit amet, consec.
              </p>
              
              
              

              <p className="flex mt-2">
                {" "}
                <span className="mr-4 ">
                  {" "}
                  <MdVerified className="text-[#3378ff] text-xl"></MdVerified>
                </span>{" "}
                Lorem ipsum dolor sit amet, consectetur .
              </p>

              <p className=" mt-4 font-semibold">Professional Skills</p>
              <Progress value={50} label="Completed" />

              <div
                style={{ width: "45%" }}
                className="mb-1 text-base font-medium text-purple-700 dark:text-purple-500"
              >
                Purple
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                <div className="bg-purple-600 h-2.5 rounded-full dark:bg-purple-500"></div>
              </div>


              <div
                style={{ width: "45%" }}
                className="mb-1 text-base font-medium text-purple-700 dark:text-purple-500"
              >
                Purple
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                <div className="bg-purple-600 h-2.5 rounded-full dark:bg-purple-500"></div>
              </div>


              <div
                style={{ width: "45%" }}
                className="mb-1 text-base font-medium text-purple-700 dark:text-purple-500"
              >
                Purple
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                <div className="bg-purple-600 h-2.5 rounded-full dark:bg-purple-500"></div>
              </div>

              <div
                style={{ width: "45%" }}
                className="mb-1 text-base font-medium text-purple-700 dark:text-purple-500"
              >
                Purple
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                <div className="bg-purple-600 h-2.5 rounded-full dark:bg-purple-500"></div>
              </div>

              <div
                style={{ width: "45%" }}
                className="mb-1 text-base font-medium text-purple-700 dark:text-purple-500"
              >
                Purple
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                <div className="bg-purple-600 h-2.5 rounded-full dark:bg-purple-500"></div>
              </div>



            </div>



























            <div className="bg-white shadow-md rounded-md p-3 text-left mt-10">
              <p className="text-xl font-semibold">Education Traning</p>
              <div className="mt-6 flex ">
                <img className="w-14 h-14  mr-4 text-left" src="https://i.ibb.co/xqGrTNh/educa.png" alt="" />


             
                <p className="mt-3">Daffodil International University</p>

              </div>
              <div className="mt-6 flex ">
                <img className="w-14 h-14  mr-4 text-left" src="https://i.ibb.co/M5Kwm2Q/edu2.png" alt="" />




              


             
                <p className="mt-3">Daffodil International University</p>

              </div>
              <div className="mt-6 flex ">
                <img className="w-14 h-14  mr-4 text-left" src="https://i.ibb.co/xqGrTNh/educa.png" alt="" />


             
                <p className="mt-3">Daffodil International University</p>

              </div>
              <div className="mt-6 flex ">
                <img className="w-14 h-14  mr-4 text-left" src="https://i.ibb.co/M5Kwm2Q/edu2.png" alt="" />


             
                <p className="mt-3">Daffodil International University</p>

              </div>


              
              
              

            

            


              

              



            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
