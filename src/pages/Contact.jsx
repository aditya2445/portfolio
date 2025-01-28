import React, { useState } from "react";
import { IoIosCall } from "react-icons/io";
import { FaLocationDot } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";

const ContactUs = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const [loading, setLoading] = useState(false);

  const onSubmit = async (data) => {
    setLoading(true);
    const toastId = toast.loading("Please wait...");
    try {
      const response = await fetch("http://localhost:5000/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        toast.success("Form Submission Successful");
        reset();
      } else {
        toast.error("Failed to submit the form. Please try again later.");
      }
    } catch (error) {
      toast.error("An error occurred. Please try again later.");
      console.error(error);
    } finally {
      setLoading(false);
      toast.dismiss(toastId);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center gap-12 px-6 mt-2 mb-2 lg:gap-12">
      <div>
        <h1 className="text-3xl font-bold">
          Fill The Details and Recieve Mail
        </h1>
      </div>
      <div className="w-full max-w-6xl flex flex-col-reverse lg:flex-row gap-8 lg:gap-16 mt-2 lg:mt-8 mb-4">
        {/* Contact Details */}
        <div className="bg-teal-500 text-white p-6 lg:p-8 rounded-md flex flex-col gap-y-6 lg:h-[500px] lg:w-96">
          <h1 className="text-3xl font-bold">Contact With Me</h1>
          <p className="text-lg">
            <i>"We can connect and grow and excel together.”</i>
          </p>
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <IoIosCall className="text-2xl" />
              <div>
                <p className="font-semibold">Phone</p>
                <p className="text-sm">+91-8688079352</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <FaLocationDot className="text-2xl" />
              <div>
                <p className="font-semibold">Location</p>
                <p className="text-sm">Ghatikia, Kalinga Nagar Bhubaneswar</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <MdEmail className="text-2xl" />
              <div>
                <p className="font-semibold">Email</p>
                <p className="text-sm">adityamohaty123@gmail.com</p>
              </div>
            </div>
          </div>
        </div>

        {/* Form Section */}
        <div className="w-full border p-6 lg:p-10 rounded-md shadow-md">
          <h1 className="text-3xl font-bold mb-4">Let's Talk</h1>
          <p className="text-lg mb-6">Feel free to drop us a line below</p>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            {/* First Name and Last Name */}
            <div className="lg:flex gap-6">
              <div className="w-full lg:w-1/2">
                <label htmlFor="firstName" className="font-bold">
                  First Name
                </label>
                <input
                  type="text"
                  id="firstName"
                  placeholder="Enter Your First Name"
                  {...register("firstName", { required: true })}
                  className="border rounded-md w-full p-2"
                />
                {errors.firstName && (
                  <span className="text-red-500 text-sm">First Name is required</span>
                )}
              </div>
              <div className="w-full lg:w-1/2">
                <label htmlFor="lastName" className="font-bold">
                  Last Name
                </label>
                <input
                  type="text"
                  id="lastName"
                  placeholder="Enter Your Last Name"
                  {...register("lastName", { required: true })}
                  className="border rounded-md w-full p-2"
                />
                {errors.lastName && (
                  <span className="text-red-500 text-sm">Last Name is required</span>
                )}
              </div>
            </div>

            {/* Email */}
            <div>
              <label htmlFor="email" className="font-bold">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                placeholder="Enter Your Email"
                {...register("email", { required: true })}
                className="border rounded-md w-full p-2"
              />
              {errors.email && (
                <span className="text-red-500 text-sm">Email Address is required</span>
              )}
            </div>

            {/* Contact No */}
            <div>
              <label htmlFor="contact" className="font-bold">
                Contact No
              </label>
              <input
                type="text"
                id="contact"
                placeholder="Enter Your Contact Number"
                {...register("contact")}
                className="border rounded-md w-full p-2"
              />
            </div>

            {/* Message */}
            <div>
              <label htmlFor="message" className="font-bold">
                Message
              </label>
              <textarea
                id="message"
                {...register("message", { required: true })}
                className="border rounded-md w-full p-2 min-h-[80px]"
              />
              {errors.message && (
                <span className="text-red-500 text-sm">Message is required</span>
              )}
            </div>

            {/* Submit Button */}
            <div className="flex justify-end">
              <button
                type="submit"
                disabled={loading}
                className={`bg-teal-500 text-white font-bold p-3 rounded-md ${
                  loading && "opacity-50 cursor-not-allowed"
                }`}
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
