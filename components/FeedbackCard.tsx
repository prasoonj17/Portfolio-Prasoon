import React from "react";
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";
import { FeedbackType } from "../types/sections";

const FeedbackCard = ({ name, role, feedback }: FeedbackType) => {
  return (
    <div className="bg-gradient-to-br from-blue-600 to-blue-200 p-2 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
      <div className="flex items-start gap-6">
        <div>
          <h4 className="text-lg font-semibold text-sky-800">{name}</h4>
          <h6 className="text-xs text-gray-700">{role}</h6>
        </div>
      </div>
	ns
      <p className="mt-2 text-gray-900 text-sm italic">{feedback}</p>
    </div>
  );
};

export default FeedbackCard;