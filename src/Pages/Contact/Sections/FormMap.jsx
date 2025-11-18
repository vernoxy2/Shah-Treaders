import React from "react";
import Map from "./Map";
import From from "./From";

const FormMap = () => {
  return (
    <section>
      <div className="container grid grid-cols-1 lg:grid-cols-2  gap-8">
        <div>
          <From />
        </div>
        <div>
          <Map />
        </div>
      </div>
    </section>
  );
};

export default FormMap;
