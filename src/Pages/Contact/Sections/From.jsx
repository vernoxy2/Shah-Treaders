import React from "react";
import PrimaryBtn from "../../../Components/PrimaryBtn";

const Form = () => {
  return (
    <div className="bg-white p-6 md:p-10 rounded-2xl space-y-8 md:space-y-12 max-w-5xl mx-auto">
      <h1 className="text-black text-2xl md:text-4xl font-lexend text-center md:text-left">
        <span className="text-primary">Feel Free to</span> Get in Touch or Visit
        our Location.
      </h1>

      <form action="" method="post" className="space-y-6 md:space-y-8">
        {/* Row 1 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          <input
            type="text"
            name="name"
            id="name"
            required
            placeholder="Full Name*"
          />
          <input
            type="email"
            name="email"
            id="email"
            required
            placeholder="Email Address*"
          />
        </div>

        {/* Row 2 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          <input
            type="tel"
            name="phone"
            id="phone"
            required
            placeholder="Phone Number*"
          />
          <input
            type="text"
            name="option"
            id="option"
            required
            placeholder="Choose an option*"
          />
        </div>

        {/* Message */}
        <textarea
          name="message"
          id="message"
          rows="5"
          required
          placeholder="Type your message*"
        ></textarea>

        {/* Submit Button */}
        <div className="flex justify-center md:justify-start">
          <PrimaryBtn>Send Message</PrimaryBtn>
        </div>
      </form>
    </div>
  );
};

export default Form;
