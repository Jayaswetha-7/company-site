import React, { useState } from "react";
import { ScrollArea } from "../ui/scroll-area";
import Navbar from "../Navbar";
import { db } from "../../firebaseconfig";
import { useTranslation } from "react-i18next";
import { doc, serverTimestamp, setDoc } from "firebase/firestore";

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
  const { t } = useTranslation();
  // Define options that are used multiple times
  const services = [
    t("service.digital_transformation"),
    t("service.intelligent_business_solutions"),
    t("service.digital_connectivity_infrastructure"),
    t("service.cybersecurity_resilience_solutions"),
    t("contact.services.other"),
  ];

  const projectTypes = [
    t("contact.projectTypes.scratch"), //"Developing from Scratch",
    t("contact.projectTypes.improve"), //"Improve Existing Development",
    t("contact.projectTypes.innovate"), //"Innovate New Solutions",
    t("contact.projectTypes.other"), //"Other",
  ];

  return (
    <div dir="ltr">
      <Navbar />
      <div className="flex flex-col lg:flex-row py-32 justify-between bg-white min-h-screen sm:max-h-screen ">
        {/* Left Section - Contact Form */}
        <ScrollArea className="w-[92%] sm:w-[96%]  lg:w-[66%] h-[77vh] mx-auto shadow-lg rounded-3xl bg-gray-900 ml-4 lg:mr-25 mb-10 lg:mb-0 mt-0">
          <div className="w-full text-white mx-auto p-4 bg-gray-900 shadow-lg rounded-3xl">
            <SectionWithOptions
              title={t("contact.howCanWeHelp")} //"How Can We Help?"
              subtitle={t("contact.subtitle")} //"You can book multiple services"
              options={services}
              extraClasses="pb-10"
            />
            <SectionWithOptions
              title={t("contact.projectTitle")} //"Tell us about your project"
              options={projectTypes}
              extraClasses="pb-10"
            />
            <SectionWithOptions
              title={t("contact.contactUs")} //"Contact Us"
              extraClasses="bg-opacity-50 pb-10"
            />
          </div>
        </ScrollArea>

        <div className="lg:w-[33%] flex flex-col xl:space-y-10 lg:space-y-4 sm:space-y-6 px-4 space-y-10">
          <ContactInfoCard
            title={t("contact.info.readyToStart")} //"Ready to start something new?"
            description={t("contact.info.readyToStartDescription")} //"Have a unique project in mind? Feel free to reach out!"
            email="contact@taphubs.org"
          />
          <ContactInfoCard
            title={t("contact.info.needDevelopment")} //"Need Development?"
            description={t("contact.info.needDevelopmentDescription")} //"Got a creative idea or need assistance? Don’t hesitate to get in touch with us!"
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
  const { t } = useTranslation();
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

  const handleSubmit = async (e) => {
    e.preventDefault();
    const dataToSend = {
      ...formData,

      timestamp: serverTimestamp(), // Store timestamp in ISO format
    };

    console.log("Form Data as JSON:", JSON.stringify(dataToSend, null, 2));

    try {
      await setDoc(doc(db, "contact", dataToSend.email), dataToSend);
    } catch (e) {
      console.error("Error adding document: ", e);
    } finally {
      setFormData({
        name: "",
        email: "",
        company: "",
        message: "",
      });
    }
  };

  return (
    <div
      dir="ltr"
      className={`flex flex-col lg:flex-row lg:mb-1 border-b-2 border-gray-800 pt-10 ${extraClasses}`}
    >
      <div className="mb-4 lg:mb-0 lg:w-1/2">
        <h1 className="text-4xl lg:text-5xl font-bold text-white text-left">
          {t(title)}
        </h1>
        {subtitle && (
          <p className="text-left text-sm lg:text-base xl:text-lg">
            {t(subtitle)}
          </p>
        )}
      </div>

      {/* Conditionally render the form for the last section */}
      {t(title) === t("contact.contactUs") ? (
        <div className="lg:w-1/2 flex flex-col justify-start space-y-4">
          <div className="space-y-8">
            <div className="flex flex-col">
              <label htmlFor="name" className="text-white font-semibold">
                {t("contact.form.name")}
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
                {t("contact.form.email")}
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
                {t("contact.form.company")}
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
                {t("contact.form.message")}
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
              onClick={handleSubmit}
              className="px-6 mb-10 py-6 border-2 border-gray-500 w-full text-white font-semibold rounded-full transition duration-300 hover:border-2 hover:border-white hover:text-white hover:bg-orange-500"
            >
              {t("contact.form.send")}
            </button>
          </div>
        </div>
      ) : (
        <div
          className="lg:w-[50%] flex flex-col justify-start space-y-4"
          dir="ltr"
        >
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
              {t(option)}
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
}) => {
  const { t } = useTranslation();
  return (
    <div
      dir="ltr"
      className=" bg-gray-900 rounded-3xl max-w-5xl mx-0  lg:h-[65%] xl:h-[95%] p-10 xl:p-10 lg:p-5"
    >
      {/* Conditionally render the content for "Need Development?" section */}
      {title === "contact.info.needDevelopment?" && (
        <div className="flex items-center  xl:mb-6 lg:mb-2 mb-6">
          <h1 className=" font-semibold text-white  text-4xl  xl:text-4xl lg:text-2xl ">
            {t(title)}{" "}
          </h1>
        </div>
      )}

      {/* Conditionally render the content for "Ready to start something new?" section */}
      {title === "contact.info.readyToStart" && (
        <div className="flex items-center space-x-4  mb-6 xl:mb-6 lg:mb-2">
          <h1 className=" font-semibold text-white  xl:text-4xl lg:text-2xl text-4xl">
            {t(title)}
          </h1>
        </div>
      )}

      {/* Render just the title for other sections */}
      {title !== "contact.info.needDevelopment?" &&
        title !== "contact.info.readyToStart" && (
          <h1 className="text-4xl font-semibold text-white mb-4 text-left">
            {t(title)}
          </h1>
        )}

      <p className="text-gray-500 xl:mb-10 lg:mb-1 text-left mb-10 lg:text-[71%] xl:text-lg text-lg">
        {t(description)}
      </p>

      <div className="border-b-2 border-gray-500 xl:mb-6 lg:mb-2 mb-6"></div>

      {/* Email Section */}

      {/* {title=="Ready to start something new?" ?  ( */}
      {title === "Ready to start something new?" ||
      title === "هل أنت مستعد لبدء شيء جديد؟" ? (
        <div className="mb-4">
          <p className="text-gray-500 xl:font-semibold lg:font-sans  font-semibold mb-2">
            {t("contact.emailLabel")}
          </p>
          <a
            href="mailto:contact@taphubs.org"
            className="text-gray-500 hover:underline lg:text-[95%] xl:text-lg text-lg"
          >
            contact@taphubs.org
          </a>
        </div>
      ) : title === "Need Development?" || title === "هل تحتاج إلى تطوير؟" ? (
        <div className="mb-4">
          <p className="text-gray-500 font-semibold mb-2">
            {t("contact.addressLabel")}
          </p>
          <p className="text-gray-400 lg:text-[71%] xl:text-lg text-lg">
            {t("contact.address")}
          </p>
        </div>
      ) : null}
    </div>
  );
};

export default ContactPage;
