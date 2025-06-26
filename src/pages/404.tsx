import React from "react";

type Props = {};

const pagenotfound = (props: Props) => {
  return (
    <div>
      <h1 className="text-3xl font-bold underline">404 - Page Not Found</h1>
      <p className="mt-4">The page you are looking for does not exist.</p>
      <a href="/" className="text-blue-500 hover:underline mt-4 inline-block">
        Go back to Home
      </a>
    </div>
  );
};

export default pagenotfound;
