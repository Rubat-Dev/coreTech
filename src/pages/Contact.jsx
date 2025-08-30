import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import toast from "react-hot-toast";

const Contact = () => {
  // Validation Schema
  const validationSchema = Yup.object({
    name: Yup.string()
      .matches(/^[a-zA-Z\s]+$/, "Only alphebets are allowed")
      .required("Full Name is required"),
    email: Yup.string()
    .matches(
      /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
      "Please enter a valid email"
    )
    .required("Email is required"),
    subject: Yup.string()
    .max(50, "Subject must be under 50 characters")
    .required("Subject is required"),
    message: Yup.string()
    .min(10, "Message must be at least 10 characters")
    .max(500, "Message must not exceed 500 characters")
    .required("Message is required")
  });
  // Form Submit Handler
  const handleSubmit = (values, {resetForm}) => {
    console.log("Form Data: ", values);
    toast.success("✅ Data Submit Successfully!", {
      style: {
        borderRadius: "10px",
        background:"#1f2937",
        color:"#fff",
      },
      icon: "🚀",
    });
    resetForm();
  }

  return (
    <section className="relative py-24 bg-gradient-to-r from-blue-900 via-slate-900 to-blue-900 text-white">
      <div className="max-w-4xl mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 mt-10">
            Get in <span className="text-orange-400">Touch</span>
          </h2>
          <p className="text-gray-300 text-lg">
            We'd love to hear from you! Fill out the form below and we’ll get
            back to you shortly.
          </p>
        </div>

        {/* Form */}
        <div className="backdrop-blur-lg bg-white/10 p-10 rounded-2xl shadow-2xl border border-white/20">
          <Formik
            initialValues={{ name: "", email: "", subject: "", message: "" }}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
          >
            {({isSubmitting}) => (
              <Form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Name */}
                  <div>
                    <label className="block"> Full Name</label>
                    <Field
                      type="text"
                      name="name"
                      placeholder="Enter Your Name"
                      className="w-full p-4 rounded-xl bg-white/20 text-white placeholder-gray-300 focus-outline-none focus-ring-2 focus-ring-orange-400 transition"
                    />
                    <ErrorMessage
                      name="name"
                      component="div"
                      className="text-red-400 text-sm mt-1"
                    />
                  </div>
                  {/* Email */}
                  <div>
                    <label className="block text-sm font-semibold mb-2">
                      Email Address
                    </label>
                    <Field
                      type="email"
                      name="email"
                      placeholder="Enter your email"
                      className="w-full p-4 rounded-xl bg-white/20 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-400 transition"
                    />
                    <ErrorMessage
                      name="email"
                      component="div"
                      className="text-red-400 text-sm mt-1"
                    />
                  </div>
                </div>
                {/* Subject */}
                <div>
                  <label className="block text-sm font-semibold mb-2">
                    Subject
                  </label>
                  <Field
                    type="text"
                    name="subject"
                    placeholder="Enter subject"
                    className="w-full p-4 rounded-xl bg-white/20 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-400 transition"
                  />
                  <ErrorMessage
                    name="subject"
                    component="div"
                    className="text-red-400 text-sm mt-1"
                  />
                </div>
                {/* Message */}
                <div>
                  <label className="block text-sm font-semibold mb-2">
                    Message
                  </label>
                  <Field
                    as="textarea"
                    name="message"
                    rows={5}
                    placeholder="Write your message here..."
                    className="w-full p-4 rounded-xl bg-white/20 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-400 transition"
                  />
                  <ErrorMessage
                    name="message"
                    component="div"
                    className="text-red-400 text-sm mt-1"
                  />
                </div>
                {/* Button */}
                <div className="text-center">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="bg-gradient-to-r from-orange-500 to-pink-500 hover:from-pink-500 hover:to-orange-500 text-white font-bold py-4 px-10 rounded-xl shadow-lg transition-transform transform hover:-translate-y-1 hover:shadow-2xl disabled:opacity-50"
                  >
                    {isSubmitting ? "sending..." : "Send Message 🚀"}
                  </button>
                </div>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </section>
    
  );
};

export default Contact;
