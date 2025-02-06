import React, { useState } from "react";
import { ScrollArea } from "../ui/scroll-area";
import Navbar from "../Navbar";

// TypeScript: Define prop types for the SectionWithOptions component
interface SectionWithOptionsProps {
  title: string;
  subtitle?: string;
  options?: string[]; // Made this optional since you will no longer need options here
  extraClasses?: string;
}

// TypeScript: Define prop types for the ContactInfoCard component
interface ContactInfoCardProps {
  title: string;
  description: string;
  email: string;
  showCredentials?: boolean;
}

const ContactPage: React.FC = () => {
  // Define options that are used multiple times
  const services = [
    "Web Development",
    "App Development",
    "API Integration",
    "Figma Design",
    "Other",
  ];

  const projectTypes = [
    "Developing from Scratch",
    "Improve Existing Development",
    "Innovate New Solutions",
    "Other",
  ];

  return (
    <div>
      <Navbar />
      <div className="flex flex-col lg:flex-row py-32 justify-between bg-white min-h-screen sm:max-h-screen ">
        {/* Left Section - Contact Form */}
        <ScrollArea className="w-[92%] sm:w-[96%]  lg:w-[66%] h-[77vh] mx-auto shadow-lg rounded-3xl bg-gray-900 ml-4 lg:mr-25 mb-10 lg:mb-0 mt-0">
          <div className="w-full text-white mx-auto p-4 bg-gray-900 shadow-lg rounded-3xl">
            <SectionWithOptions
              title="How Can We Help?"
              subtitle="You can book multiple services"
              options={services}
              extraClasses="pb-10"
            />
            <SectionWithOptions
              title="Tell us about your project"
              options={projectTypes}
              extraClasses="pb-10"
            />
            <SectionWithOptions
              title="Contact Us"
              extraClasses="bg-opacity-50 pb-10"
            />
          </div>
        </ScrollArea>

        <div className="lg:w-[33%] flex flex-col xl:space-y-10 lg:space-y-4 sm:space-y-6 px-4 space-y-10">
          <ContactInfoCard
            title="Ready to start something new?"
            description="Have a unique project in mind? Feel free to reach out!"
            email="contact@taphubs.org"
          />
          <ContactInfoCard
            title="Need Development?"
            description="Got a creative idea or need assistance? Don’t hesitate to get in touch with us!"
            email="contact@taphubs.org"
            showCredentials={true}
          />
        </div>
      </div>
    </div>
  );
};

// Reusable component for sections with options
const SectionWithOptions: React.FC<SectionWithOptionsProps> = ({
  title,
  subtitle,
  options,
  extraClasses = "",
}) => {
  // State to track the selected option
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });

  const handleOptionClick = (option: string) => {
    setSelectedOption(option);
  };

  // Handle input change for the form
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  // Handle text change for the message
  const handleTextAreaChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  return (
    <div
      className={`flex flex-col lg:flex-row lg:mb-1 border-b-2 border-gray-800 pt-10 ${extraClasses}`}
    >
      <div className="mb-4 lg:mb-0 lg:w-1/2">
        <h1 className="text-4xl lg:text-5xl font-bold text-white text-left">
          {title}
        </h1>
        {subtitle && (
          <p className="text-left text-sm lg:text-base xl:text-lg">
            {subtitle}
          </p>
        )}
      </div>

      {/* Conditionally render the form for the last section */}
      {title === "Contact Us" ? (
        <div className="lg:w-1/2 flex flex-col justify-start space-y-4">
          <div className="space-y-8">
            <div className="flex flex-col">
              <label htmlFor="name" className="text-white font-semibold">
                Name
              </label>
              <div className="border-b-2 border-gray-700 py-1 hover:border-white">
                <input
                  type="text"
                  name="name"
                  id="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="bg-transparent text-white placeholder-transparent focus:outline-none w-full"
                />
              </div>
            </div>

            <div className="flex flex-col">
              <label htmlFor="email" className="text-white font-semibold">
                Email
              </label>
              <div className="border-b-2 border-gray-700 py-1 hover:border-white">
                <input
                  type="email"
                  name="email"
                  id="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="bg-transparent text-white placeholder-transparent focus:outline-none w-full"
                />
              </div>
            </div>

            <div className="flex flex-col">
              <label htmlFor="company" className="text-white font-semibold">
                Company
              </label>
              <div className="border-b-2 border-gray-700 py-1 hover:border-white">
                <input
                  type="text"
                  name="company"
                  id="company"
                  value={formData.company}
                  onChange={handleInputChange}
                  className="bg-transparent text-white placeholder-transparent focus:outline-none w-full"
                />
              </div>
            </div>

            <div className="flex flex-col">
              <label htmlFor="message" className="text-white font-semibold">
                Message
              </label>
              <div className="border-b-2 border-gray-700 py-1 hover:border-white space-y-6">
                <textarea
                  name="message"
                  id="message"
                  value={formData.message}
                  onChange={handleTextAreaChange}
                  className="bg-transparent text-white placeholder-transparent focus:outline-none w-full h-25"
                />
              </div>
            </div>

            <button
              type="submit"
              className="px-6 mb-10 py-6 border-2 border-gray-500 w-full text-white font-semibold rounded-full transition duration-300 hover:border-2 hover:border-white hover:text-white hover:bg-orange-500"
            >
              Send
            </button>
          </div>
        </div>
      ) : (
        <div className="lg:w-[50%] flex flex-col justify-start space-y-4">
          {options?.map((option) => (
            <button
              key={option}
              onClick={() => handleOptionClick(option)}
              className={`px-6 py-6 border text-gray-400 font-semibold rounded-full transition duration-300 ${
                selectedOption === option
                  ? "bg-orange-500 text-white border-orange-500"
                  : "border-gray-400 hover:border-orange-500 hover:border-2 hover:text-white"
              }`}
            >
              {option}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

// Reusable component for the right section (contact details)
const ContactInfoCard: React.FC<ContactInfoCardProps> = ({
  title,
  description,
}) => (
  <div className=" bg-gray-900 rounded-3xl max-w-5xl mx-0  lg:h-[65%] xl:h-[95%] p-10 xl:p-10 lg:p-5">
    {/* Conditionally render the content for "Need Development?" section */}
    {title === "Need Development?" && (
      <div className="flex items-center  xl:mb-6 lg:mb-2 mb-6">
        <h1 className=" font-semibold text-white  text-4xl  xl:text-4xl lg:text-2xl ">
          {title}{" "}
        </h1>
      </div>
    )}

    {/* Conditionally render the content for "Ready to start something new?" section */}
    {title === "Ready to start something new?" && (
      <div className="flex items-center space-x-4  mb-6 xl:mb-6 lg:mb-2">
        <h1 className=" font-semibold text-white  xl:text-4xl lg:text-2xl text-4xl">
          {title}
        </h1>
      </div>
    )}

    {/* Render just the title for other sections */}
    {title !== "Need Development?" &&
      title !== "Ready to start something new?" && (
        <h1 className="text-4xl font-semibold text-white mb-4 text-left">
          {title}
        </h1>
      )}

    <p className="text-gray-500 xl:mb-10 lg:mb-1 text-left mb-10 lg:text-[71%] xl:text-lg text-lg">
      {description}
    </p>

    <div className="border-b-2 border-gray-500 xl:mb-6 lg:mb-2 mb-6"></div>

    {/* Email Section */}
    {title === "Ready to start something new?" ? (
      <div className="mb-4">
        <p className="text-gray-500 xl:font-semibold lg:font-sans  font-semibold mb-2">
          Email:
        </p>
        <a
          href="mailto:contact@taphubs.org"
          className="text-gray-500 hover:underline lg:text-[95%] xl:text-lg text-lg"
        >
          contact@taphubs.org
        </a>
      </div>
    ) : title === "Need Development?" ? (
      <div className="mb-4">
        <p className="text-gray-500 font-semibold mb-2">Our Address:</p>
        <p className="text-gray-400 lg:text-[71%] xl:text-lg text-lg">
          Taphubs Global ,Karyavattam jn,Trivandrum 685504
        </p>
      </div>
    ) : null}
  </div>
);

export default ContactPage;
