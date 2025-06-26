import Headder from "@/components/Headder";

import StatCard from "@/components/StatCard";
import { DollarSign, ShoppingCart, TrendingUp, Users } from "lucide-react";
import React from "react";
import {
  Bar,
  BarChart,
  CartesianGrid,
  Cell,
  Line,
  LineChart,
  Pie,
  PieChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

type Props = {};

const dashboard = (props: Props) => {
  // Sample data
  const salesData = [
    { month: "Jan", sales: 4000, revenue: 2400 },
    { month: "Feb", sales: 3000, revenue: 1398 },
    { month: "Mar", sales: 2000, revenue: 9800 },
    { month: "Apr", sales: 2780, revenue: 3908 },
    { month: "May", sales: 1890, revenue: 4800 },
    { month: "Jun", sales: 2390, revenue: 3800 },
  ];

  const pieData = [
    { name: "Desktop", value: 45, color: "#8884d8" },
    { name: "Mobile", value: 35, color: "#82ca9d" },
    { name: "Tablet", value: 20, color: "#ffc658" },
  ];

  const recentOrders = [
    {
      id: "#1234",
      customer: "John Doe",
      amount: "$299.00",
      status: "Completed",
    },
    {
      id: "#1235",
      customer: "Jane Smith",
      amount: "$149.00",
      status: "Pending",
    },
    {
      id: "#1236",
      customer: "Bob Johnson",
      amount: "$89.00",
      status: "Processing",
    },
    {
      id: "#1237",
      customer: "Alice Brown",
      amount: "$199.00",
      status: "Completed",
    },
  ];
  return (
    <div>
      <Headder />
      {/* Card */}
      <div>
        <div className="grid grid-cols-1 caret-transparent sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-6 sm:mb-8">
          <StatCard
            title="Total Revenue"
            value="$45,231"
            Icon={DollarSign}
            change={12.5}
            color="#10b981"
          />
          <StatCard
            title="Total Users"
            value="2,834"
            Icon={Users}
            change={8.2}
            color="#3b82f6"
          />
          <StatCard
            title="Total Orders"
            value="1,423"
            Icon={ShoppingCart}
            change={-2.1}
            color="#f59e0b"
          />
          <StatCard
            title="Growth Rate"
            value="15.3%"
            Icon={TrendingUp}
            change={5.7}
            color="#8b5cf6"
          />
        </div>
      </div>

      {/* Bar Chart */}
      <div className="grid grid-cols-1 xl:grid-cols-2 caret-transparent   gap-4 sm:gap-6 mb-6 sm:mb-8">
        <div className="bg-white rounded-lg shadow-md p-4 sm:p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">
            Sales Overview
          </h3>
          <ResponsiveContainer width="100%" height={250} className="sm:hidden">
            <BarChart data={salesData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" tick={{ fontSize: 12 }} />
              <YAxis tick={{ fontSize: 12 }} />
              <Tooltip />
              <Bar dataKey="sales" fill="#3b82f6" />
              <Bar dataKey="revenue" fill="#10b981" />
            </BarChart>
          </ResponsiveContainer>
          <ResponsiveContainer
            width="100%"
            height={300}
            className="hidden sm:block"
          >
            <BarChart data={salesData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="sales" fill="#3b82f6" />
              <Bar dataKey="revenue" fill="#10b981" />
            </BarChart>
          </ResponsiveContainer>
        </div>
        {/* Line Chart */}
        <div className="bg-white rounded-lg shadow-md p-4 sm:p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">
            Revenue Trend
          </h3>
          <ResponsiveContainer width="100%" height={250} className="sm:hidden">
            <LineChart data={salesData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" tick={{ fontSize: 12 }} />
              <YAxis tick={{ fontSize: 12 }} />
              <Tooltip />
              <Line
                type="monotone"
                dataKey="revenue"
                stroke="#8b5cf6"
                strokeWidth={2}
                dot={{ fill: "#8b5cf6", r: 3 }}
              />
            </LineChart>
          </ResponsiveContainer>
          <ResponsiveContainer
            width="100%"
            height={300}
            className="hidden sm:block"
          >
            <LineChart data={salesData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Line
                type="monotone"
                dataKey="revenue"
                stroke="#8b5cf6"
                strokeWidth={3}
                dot={{ fill: "#8b5cf6" }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Recent Orders */}
      <div className="grid grid-cols-1  gap-4 caret-transparent sm:gap-6">
        <div className="lg:col-span-2 bg-white rounded-lg shadow-md p-4 sm:p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">
            Recent Orders
          </h3>
          <div className="overflow-x-auto">
            <table className="w-full min-w-[500px]">
              <thead>
                <tr className="border-b">
                  <th className="text-left py-2 px-2 sm:px-4 font-medium text-gray-600 text-sm sm:text-base">
                    Order ID
                  </th>
                  <th className="text-left py-2 px-2 sm:px-4 font-medium text-gray-600 text-sm sm:text-base">
                    Customer
                  </th>
                  <th className="text-left py-2 px-2 sm:px-4 font-medium text-gray-600 text-sm sm:text-base">
                    Amount
                  </th>
                  <th className="text-left py-2 px-2 sm:px-4 font-medium text-gray-600 text-sm sm:text-base">
                    Status
                  </th>
                </tr>
              </thead>
              <tbody>
                {recentOrders.map((order) => (
                  <tr key={order.id} className="border-b hover:bg-gray-50">
                    <td className="py-3 px-2 sm:px-4 font-medium text-blue-600 text-sm sm:text-base">
                      {order.id}
                    </td>
                    <td className="py-3 px-2 sm:px-4 text-sm sm:text-base">
                      {order.customer}
                    </td>
                    <td className="py-3 px-2 sm:px-4 font-semibold text-sm sm:text-base">
                      {order.amount}
                    </td>
                    <td className="py-3 px-2 sm:px-4">
                      <span
                        className={`px-2 py-1 rounded-full text-xs font-medium ${
                          order.status === "Completed"
                            ? "bg-green-100 text-green-800"
                            : order.status === "Pending"
                              ? "bg-yellow-100 text-yellow-800"
                              : "bg-blue-100 text-blue-800"
                        }`}
                      >
                        {order.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Traffic Sources */}
      <div className="bg-white rounded-lg caret-transparent shadow-md p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">
          Traffic Sources
        </h3>
        <ResponsiveContainer width="100%" height={200}>
          <PieChart>
            <Pie
              data={pieData}
              cx="50%"
              cy="50%"
              innerRadius={60}
              outerRadius={80}
              paddingAngle={5}
              dataKey="value"
            >
              {pieData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} />
              ))}
            </Pie>
            <Tooltip />
          </PieChart>
        </ResponsiveContainer>
        <div className="mt-4 space-y-2">
          {pieData.map((item) => (
            <div key={item.name} className="flex items-center justify-between">
              <div className="flex items-center">
                <div
                  className="w-3 h-3 rounded-full mr-2"
                  style={{ backgroundColor: item.color }}
                ></div>
                <span className="text-sm text-gray-600">{item.name}</span>
              </div>
              <span className="text-sm font-medium">{item.value}%</span>
            </div>
          ))}
        </div>
      </div>

      {/* Footer */}
      {/* Footer */}
      <footer className="bg-white border-t ">
        <div className="px-4 sm:px-6 py-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-6">
            {/* Company Info */}
            <div className="md:col-span-1">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                Dashboard
              </h3>
              <p className="text-sm text-gray-600 mb-3">
                Modern analytics dashboard for tracking your business metrics
                and performance.
              </p>
              <div className="flex space-x-3">
                <div className="w-8 h-8 bg-blue-500 rounded flex items-center justify-center cursor-pointer hover:bg-blue-600 transition-colors">
                  <span className="text-white text-sm font-bold">f</span>
                </div>
                <div className="w-8 h-8 bg-blue-400 rounded flex items-center justify-center cursor-pointer hover:bg-blue-500 transition-colors">
                  <span className="text-white text-sm font-bold">t</span>
                </div>
                <div className="w-8 h-8 bg-blue-700 rounded flex items-center justify-center cursor-pointer hover:bg-blue-800 transition-colors">
                  <span className="text-white text-sm font-bold">in</span>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-sm font-semibold text-gray-900 mb-3">
                Quick Links
              </h4>
              <ul className="space-y-2">
                <li>
                  <a
                    href="#"
                    className="text-sm text-gray-600 hover:text-blue-600 transition-colors"
                  >
                    Dashboard
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-sm text-gray-600 hover:text-blue-600 transition-colors"
                  >
                    Analytics
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-sm text-gray-600 hover:text-blue-600 transition-colors"
                  >
                    Reports
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-sm text-gray-600 hover:text-blue-600 transition-colors"
                  >
                    Settings
                  </a>
                </li>
              </ul>
            </div>

            {/* Resources */}
            <div>
              <h4 className="text-sm font-semibold text-gray-900 mb-3">
                Resources
              </h4>
              <ul className="space-y-2">
                <li>
                  <a
                    href="#"
                    className="text-sm text-gray-600 hover:text-blue-600 transition-colors"
                  >
                    Documentation
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-sm text-gray-600 hover:text-blue-600 transition-colors"
                  >
                    API Reference
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-sm text-gray-600 hover:text-blue-600 transition-colors"
                  >
                    Support
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-sm text-gray-600 hover:text-blue-600 transition-colors"
                  >
                    Community
                  </a>
                </li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="text-sm font-semibold text-gray-900 mb-3">
                Contact
              </h4>
              <ul className="space-y-2">
                <li className="text-sm text-gray-600">support@dashboard.com</li>
                <li className="text-sm text-gray-600">+1 (555) 123-4567</li>
                <li className="text-sm text-gray-600">
                  123 Business St.
                  <br />
                  Suite 100
                  <br />
                  City, State 12345
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom Footer */}
          <div className="border-t pt-6 flex flex-col sm:flex-row justify-between items-center">
            <div className="text-sm text-gray-600 mb-4 sm:mb-0">
              © 2025 Dashboard Inc. All rights reserved.
            </div>
            <div className="flex flex-wrap gap-4">
              <a
                href="#"
                className="text-sm text-gray-600 hover:text-blue-600 transition-colors"
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className="text-sm text-gray-600 hover:text-blue-600 transition-colors"
              >
                Terms of Service
              </a>
              <a
                href="#"
                className="text-sm text-gray-600 hover:text-blue-600 transition-colors"
              >
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default dashboard;
