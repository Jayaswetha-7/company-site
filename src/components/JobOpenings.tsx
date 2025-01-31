import React from "react";

const JobOpenings: React.FC = () => {
  return (
   

        <div className="py-12 text-center ">
        
        <h2 className="text-3xl font-semibold uppercase text-white mb-6">Current Openings</h2>

        
        <div className="flex justify-center">
            <div className="w-full bg-grey-500 p-6  rounded-md">
            
            <div className="grid grid-cols-3 space-x-6  md:grid-cols-3 gap-y-3 md:gap-y-0 md:gap-x-2  pb-3   text-center">
                <h4 className="text-sm md:text-xl font-semibold text-white">POSITION</h4>
                <h4 className="text-sm md:text-xl font-semibold text-white">LOCATION</h4>
                <h4 className="text-sm md:text-xl font-semibold text-white">POSTING DATE</h4>
            </div>

            
            <div className="grid grid-cols-3 md:grid-cols-3 gap-y-3 md:gap-y-0 py-4 text-center">
                <p className="text-gray-100 text-sm md:text-xl italic">No position available currently</p>
                <p className="text-gray-200">-</p>
                <p className="text-gray-200">-</p>
            </div>
            </div>
        </div>
        </div>

  );
};

export default JobOpenings;
