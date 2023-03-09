import React, { useEffect } from "react";

import { Link } from "react-router-dom";

import { FaFacebookF } from "react-icons/fa";
import { GrGooglePlus } from "react-icons/gr";
import { GrLinkedinOption } from "react-icons/gr";

const ConfirmMail = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="mt-auto ">
      <>
        <div className="w-full px-6 py-8 md:px-8 lg:w-1/3 bg-white shadow-xl ml-auto mr-auto mt-14">
          <img
            className="w-14 h-14 ml-auto mr-auto mb-4"
            src="https://templates.iqonic.design/datum/html/assets/images/logo-dark.png"
            alt=""
          />
          <h2 className="text-4xl font-semibold text-center text-gray-700 dark:text-white">
          Success !
          </h2>

        

        <p className="mt-4">A email has been send to youremail@domain.com. Please check for an email from company and click on the included link to reset your password.</p>

         

        

          
        </div>
        
      </>
    </div>
  );
};

export default ConfirmMail;
