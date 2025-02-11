import React from "react";
import { useTranslation } from "react-i18next";

const JobOpenings: React.FC = () => {
  const { t } = useTranslation();
  return (
    <div className="py-12 text-center ">
      <h2 className="text-3xl font-semibold uppercase text-white mb-6">
        {t("Current_Openings")}
      </h2>

      <div className="flex justify-center">
        <div className="w-full bg-grey-500 p-6  rounded-md">
          <div className="grid grid-cols-3 space-x-6  md:grid-cols-3 gap-y-3 md:gap-y-0 md:gap-x-2  pb-3   text-center">
            <h4 className="text-sm md:text-xl font-semibold text-white">
            {t("POSITION")}
            </h4>
            <h4 className="text-sm md:text-xl font-semibold text-white">
            {t("LOCATION")}
            </h4>
            <h4 className="text-sm md:text-xl font-semibold text-white">
            {t("POSTING_DATE")}
            </h4>
          </div>

          <div className="grid grid-cols-3 md:grid-cols-3 gap-y-3 md:gap-y-0 py-4 text-center">
            <p className="text-gray-200">-</p>
            <p className="text-gray-100 text-sm md:text-xl italic">
              {t("sorry")}
              {/* "We're not hiring at the moment, but check back soon for
              opportunities!" */}
            </p>
            <p className="text-gray-200">-</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobOpenings;
