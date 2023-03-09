import React from "react";

const Map = () => {
  return (
    <div className="mt-16 overflow-hidden">
    <iframe className="w-full" style={{height:'500px',borderRadius:'10px',borderColor:'black'}}
     src="https://maps.google.com/maps?q=Jamuna%20Future%20Park,%20Dhaka&t=&z=13&ie=UTF8&iwloc=&output=embed"
      frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe>
    </div>
  );
};

export default Map;
