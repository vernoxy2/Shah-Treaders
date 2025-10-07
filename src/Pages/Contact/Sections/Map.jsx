import React from 'react';

const Map = () => {
  return (
    <div className="w-full h-full">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6274.639989369056!2d72.92570117684602!3d20.36688501215976!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be0ce4b63b8e543%3A0x6b5576316e553a77!2sSHAH%20TRADERS!5e1!3m2!1sen!2sin!4v1759826272435!5m2!1sen!2sin"
        className="w-full h-full rounded-2xl"
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
};

export default Map;
