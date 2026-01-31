import React from "react";

const MailingList = () => {
  return (
    <div className="w-full flex flex-col items-center justify-center mb-10 px-4">
      <h4 className="text-xs font-normal text-gray-500 mb-6 tracking-[0.2em] text-center">
        JOIN OUR MAILING LIST
      </h4>

      <div className="flex flex-col sm:flex-row gap-4 w-full max-w-lg justify-center">
        <input
          type="email"
          placeholder="Email"
          className="flex-1 px-10 py-3 text-sm border border-gray-300 focus:border-[#9c7c3d] focus:outline-none bg-transparent placeholder-gray-400"
        />
        <button className="px-8 py-3 text-xs font-medium tracking-wider text-gray-700 border border-gray-300 hover:border-[#9c7c3d] hover:text-[#9c7c3d] transition-all duration-300 whitespace-nowrap">
          Subscribe
        </button>
      </div>
    </div>
  );
};

export default MailingList;