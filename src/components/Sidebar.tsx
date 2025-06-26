import React from "react";

type Props = {
  // Define any props you need here
};

const Sidebar = (props: Props) => {
  return (
    <div className="w-64 h-screen bg-gray-800 text-white p-4">
      <h2 className="text-2xl font-bold mb-4">Sidebar</h2>
      <ul className="space-y-2">
        <li>
          <a href="/dashboard" className="text-gray-300 hover:text-white">
            Dashboard
          </a>
        </li>
        <li>
          <a href="/settings" className="text-gray-300 hover:text-white">
            Settings
          </a>
        </li>
        <li>
          <a href="/profile" className="text-gray-300 hover:text-white">
            Profile
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
