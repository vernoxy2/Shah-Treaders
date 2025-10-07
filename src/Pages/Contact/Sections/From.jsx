import React from "react";
import PrimaryBtn from "../../../Components/PrimaryBtn";

const From = () => {
  return (
    <div className="bg-white p-7 pb-16 flex-col justify-center rounded-2xl space-y-12">
      <h1 className="text-black text-4xl font-lexend">
        <span className="text-primary">Feel Free to</span> Get in Touch or Visit
        our Location.
      </h1>
      <div>
        <form action="" method="post">
          <div className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
              <input
                type="text"
                name="name"
                id="name"
                required
                placeholder="Full Name*"
                className=""
              />
              <input
                type="text"
                name="name"
                id="name"
                required
                placeholder="Email Address*"
                className=""
              />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
              <input
                type="text"
                name="name"
                id="name"
                required
                placeholder="Phone number*"
                className=""
              />
              <input
                type="text"
                name="name"
                id="name"
                required
                placeholder="Chose a option*"
                className=""
              />
            </div>
            <textarea
              name="message"
              id="message"
              // cols="30"
              rows="5"
              required
              placeholder="Type message*"
            ></textarea>
          </div>
        </form>
      </div>
      <PrimaryBtn className="">Send Message</PrimaryBtn>
    </div>
  );
};

export default From;
