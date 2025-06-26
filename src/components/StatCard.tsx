import React from "react";

type Props = {
  title: string;
  value: string | number;
  change: number;
  color: string;
  Icon: any;
};

const StatCard = (props: Props) => {
  return (
    <div
      className="bg-white rounded-lg shadow-md border p-4 sm:p-6 border-l-4"
      style={{ borderLeftColor: props.color }}
    >
      <div className="flex items-center justify-between">
        <div className="flex-1 min-w-0">
          <p className="text-xs sm:text-sm font-medium text-gray-600 truncate">
            {props.title}
          </p>
          <p className="text-xl sm:text-2xl font-bold text-gray-900">
            {props.value}
          </p>
          <p
            className={`text-xs sm:text-sm ${
              props.change >= 0 ? "text-green-600" : "text-red-600"
            }`}
          >
            {props.change >= 0 ? "+" : ""}
            {props.change}% from last month
          </p>
        </div>
        <div
          className="p-2 sm:p-3 rounded-full ml-2"
          style={{ backgroundColor: props.color + "20" }}
        >
          <props.Icon
            className="w-5 h-5 sm:w-6 sm:h-6"
            style={{ color: props.color }}
          />
        </div>
      </div>
    </div>
  );
};

export default StatCard;
