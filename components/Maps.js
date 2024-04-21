import React from "react";

const Maps = () => {
  return (
    <>
      <div className="sections-contact">
        <div className="maps">
          {/* <iframe
            src="https://snazzymaps.com/embed/152029"
            className="map-iframe"
          /> */}
          <iframe
            id="gmap_canvas"
            src="https://maps.google.com/maps?width=520&height=400&hl=en&q=Express%20Car%20Detailing,%20Laxmi%20Nagar%20Market%20Start,%20Shop%20No.1%20Snatan%20Dharam%20Mandir%20East,%20Delhi,%20110092%20Delhi+(Express%20Car%20Detailing)&t=&z=12&ie=UTF8&iwloc=B&output=embed"
          ></iframe>
        </div>
      </div>
    </>
  );
};

export default Maps;
