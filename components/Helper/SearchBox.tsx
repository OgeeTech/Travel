import React from 'react';
import { FaCalendarWeek, FaMap } from 'react-icons/fa';
import { FaUserGroup } from 'react-icons/fa6';

const SearchBox = () => {
  return (
    <div className="bg-white rounded-lg p-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 items-center gap-6 mt-6 w-[95%] sm:w-[80%] mx-auto shadow-md">
      {/* First search input */}
      <div className="flex items-center space-x-4">
        <FaMap className="w-6 h-6 text-blue-600" />
        <div>
          <p className="text-sm text-gray-700 font-medium mb-1">Location</p>
          <input
            type="text"
            placeholder="Where are you going?"
            className="outline-none border-none placeholder:text-gray-500 text-gray-900 w-full"
          />
        </div>
      </div>

      {/* Second search input */}
      <div className="flex items-center space-x-4">
        <FaCalendarWeek className="w-6 h-6 text-blue-600" />
        <div>
          <p className="text-sm text-gray-700 font-medium mb-1">Start Date</p>
          <input
            type="date"
            className="outline-none border-none text-gray-900 w-full"
          />
        </div>
      </div>

      {/* Third search input */}
      <div className="flex items-center space-x-4">
        <FaCalendarWeek className="w-6 h-6 text-blue-600" />
        <div>
          <p className="text-sm text-gray-700 font-medium mb-1">End Date</p>
          <input
            type="date"
            className="outline-none border-none text-gray-900 w-full"
          />
        </div>
      </div>

      {/* Fourth search input */}
      <div className="flex items-center space-x-4">
        <FaUserGroup className="w-6 h-6 text-blue-600" />
        <div>
          <p className="text-sm text-gray-700 font-medium mb-1">Guest</p>
          <p className="text-base text-gray-900 font-normal">1 Guest 1 Room</p>
        </div>
      </div>
    </div>
  );
};

export default SearchBox;
