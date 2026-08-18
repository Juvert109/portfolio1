import React, { useState } from "react";

export function ContactForm() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form Submitted:", formData);
  };

  return (
    <div className="lg:w-7/12">
      <form onSubmit={handleSubmit} className="space-y-5">
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
          <div>
            <label
              htmlFor="firstName"
              className="mb-2 block font-serif text-xs font-semibold text-[#003049]"
            >
              First Name
            </label>
            <input
              id="firstName"
              name="firstName"
              type="text"
              value={formData.firstName}
              onChange={handleChange}
              placeholder="Your first name"
              className="w-full rounded-sm border border-[#FCBF49]/30 bg-white px-4 py-3 font-serif text-xs text-[#003049] placeholder-[#003049]/40 shadow-sm outline-none transition-colors focus:border-[#F77F00] focus:ring-1 focus:ring-[#F77F00]"
            />
          </div>

          <div>
            <label
              htmlFor="lastName"
              className="mb-2 block font-serif text-xs font-semibold text-[#003049]"
            >
              Last Name
            </label>
            <input
              id="lastName"
              name="lastName"
              type="text"
              value={formData.lastName}
              onChange={handleChange}
              placeholder="Your last name"
              className="w-full rounded-sm border border-[#FCBF49]/30 bg-white px-4 py-3 font-serif text-xs text-[#003049] placeholder-[#003049]/40 shadow-sm outline-none transition-colors focus:border-[#F77F00] focus:ring-1 focus:ring-[#F77F00]"
            />
          </div>
        </div>

        <div>
          <label
            htmlFor="email"
            className="mb-2 block font-serif text-xs font-semibold text-[#003049]"
          >
            Email Address
          </label>
          <input
            id="email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Your email address"
            className="w-full rounded-sm border border-[#FCBF49]/30 bg-white px-4 py-3 font-serif text-xs text-[#003049] placeholder-[#003049]/40 shadow-sm outline-none transition-colors focus:border-[#F77F00] focus:ring-1 focus:ring-[#F77F00]"
          />
        </div>

        <div>
          <label
            htmlFor="phone"
            className="mb-2 block font-serif text-xs font-semibold text-[#003049]"
          >
            Phone Number
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            value={formData.phone}
            onChange={handleChange}
            placeholder="Your Phone number"
            className="w-full rounded-sm border border-[#FCBF49]/30 bg-white px-4 py-3 font-serif text-xs text-[#003049] placeholder-[#003049]/40 shadow-sm outline-none transition-colors focus:border-[#F77F00] focus:ring-1 focus:ring-[#F77F00]"
          />
        </div>

        <div>
          <label
            htmlFor="message"
            className="mb-2 block font-serif text-xs font-semibold text-[#003049]"
          >
            Describe You Case
          </label>
          <textarea
            id="message"
            name="message"
            rows={5}
            value={formData.message}
            onChange={handleChange}
            placeholder="Write something..."
            className="w-full resize-none rounded-sm border border-[#FCBF49]/30 bg-white px-4 py-3 font-serif text-xs text-[#003049] placeholder-[#003049]/40 shadow-sm outline-none transition-colors focus:border-[#F77F00] focus:ring-1 focus:ring-[#F77F00]"
          />
        </div>

        <button
          type="submit"
          className="w-full rounded-sm bg-[#003049] py-3.5 font-serif text-xs font-semibold text-[#FCBF49] transition-colors hover:bg-[#D62828] hover:text-white"
        >
          Submit
        </button>
      </form>
    </div>
  );
}