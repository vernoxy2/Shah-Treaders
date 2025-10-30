import React, { useState } from "react";
import PrimaryBtn from "../../../Components/PrimaryBtn";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";

const Form = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    option: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: "" })); // clear error on change
  };

  // Validate inputs
  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Full name is required.";
    if (!formData.email) {
      newErrors.email = "Email is required.";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Enter a valid email address.";
    }
    if (!formData.phone.trim()) newErrors.phone = "Phone number is required.";
    if (!formData.option.trim()) newErrors.option = "Please choose an option.";
    if (!formData.message.trim())
      newErrors.message = "Message cannot be empty.";
    return newErrors;
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    // Simulate API submission
    console.log("Form submitted:", formData);
    setSubmitted(true);
    setFormData({
      name: "",
      email: "",
      phone: "",
      option: "",
      message: "",
    });
  };

  return (
    <div className="bg-white p-6 md:p-10 rounded-2xl space-y-8 md:space-y-12 max-w-5xl mx-auto">
      <h1 className="text-black text-2xl md:text-4xl font-lexend text-center md:text-left tracking-tight">
        <span className="text-primary">Feel Free to</span> Get in Touch or Visit
        our Location.
      </h1>

      <form onSubmit={handleSubmit} className="space-y-6 md:space-y-8">
        {/* Row 1 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          <div>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Full Name*"
              className={`w-full border p-3 rounded-xl ${
                errors.name ? "border-red-500" : "border-gray-300"
              }`}
            />
            {errors.name && (
              <p className="text-red-500 text-sm">{errors.name}</p>
            )}
          </div>

          <div>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email Address*"
              className={`w-full border p-3 rounded-xl ${
                errors.email ? "border-red-500" : "border-gray-300"
              }`}
            />
            {errors.email && (
              <p className="text-red-500 text-sm">{errors.email}</p>
            )}
          </div>
        </div>

        {/* Row 2 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          <div>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Phone Number*"
              className={`w-full border p-3 rounded-xl ${
                errors.phone ? "border-red-500" : "border-gray-300"
              }`}
            />
            {errors.phone && (
              <p className="text-red-500 text-sm">{errors.phone}</p>
            )}
          </div>
          <div className="relative">
            <select
              name="option"
              value={formData.option}
              onChange={handleChange}
              className={`w-full border p-3 rounded-xl bg-white appearance-none pr-10 cursor-pointer ${
                errors.option ? "border-red-500" : "border-gray-300"
              }`}
            >
              <option value="" disabled>
                Choose an option*
              </option>
              <option value="one">One</option>
              <option value="two">Two</option>
            </select>

            {/* Custom dropdown arrow */}
            <MdOutlineKeyboardArrowDown
              className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 pointer-events-none"
              size={24}
            />

            {errors.option && (
              <p className="text-red-500 text-sm mt-1">{errors.option}</p>
            )}
          </div>
        </div>

        {/* Message */}
        <div>
          <textarea
            name="message"
            rows="5"
            value={formData.message}
            onChange={handleChange}
            placeholder="Type your message*"
            className={`w-full border p-3 rounded-xl ${
              errors.message ? "border-red-500" : "border-gray-300"
            }`}
          ></textarea>
          {errors.message && (
            <p className="text-red-500 text-sm">{errors.message}</p>
          )}
        </div>

        {/* Submit Button */}
        <div className="flex justify-center md:justify-start">
          <PrimaryBtn
            type="submit"
            className="lg:bg-white bg-primary lg:text-primary text-white lg:hover:bg-primary lg:hover:text-white"
          >
            Send Message
          </PrimaryBtn>
        </div>

        {/* Success Message */}
        {submitted && (
          <p className="text-primary text-center md:text-left">
            ✅ Your message has been sent successfully!
          </p>
        )}
      </form>
    </div>
  );
};

export default Form;
