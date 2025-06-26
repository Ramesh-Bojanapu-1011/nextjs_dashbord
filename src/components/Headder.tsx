import { Bell, Menu, Search, Settings } from "lucide-react";
import React from "react";

type Props = {};

const Headder = (props: Props) => {
  return (
    <div>
      <header className="bg-white  shadow-sm border-b">
        <div className="flex items-center justify-between px-4 sm:px-6 py-4">
          <div className="flex items-center space-x-2 sm:space-x-4">
            {/* <Menu className="w-6 h-6 text-gray-600 cursor-pointer" /> */}
            <h1 className="text-xl caret-transparent sm:text-2xl font-bold text-gray-900">
              Dashboard
            </h1>
          </div>
          <div className="flex items-center space-x-2 sm:space-x-4">
            <div className="relative hidden sm:block">
              <Search className="w-5 h-5 absolute left-3 top-3 text-gray-400" />
              <input
                type="text"
                placeholder="Search..."
                className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <Search className="w-6 h-6 text-gray-600 cursor-pointer sm:hidden" />
            <Bell className="w-6 h-6 text-gray-600 cursor-pointer" />
            <Settings className="w-6 h-6 text-gray-600 cursor-pointer hidden sm:block" />
            <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white font-semibold">
              A
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Headder;
