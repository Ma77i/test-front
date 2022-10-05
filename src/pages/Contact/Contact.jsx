import React from "react";

const Contact = () => {
  return (
    <div className="container flex justify-center m-auto">

    <div className="w-full max-w-sm bg-deep rounded-lg border border-cristal shadow-md">
      <div className="flex flex-col items-center pb-10">
        <img
          className="mb-3 w-60 h-60 rounded-full shadow-lg"
          src="/profile.png"
          alt="Matias image"
        />
        <h5 className="mb-1 text-xl font-medium text-gray-900">Matias Silva</h5>
        <span className="text-sm text-gray-500">Web Developer</span>
        <div className="flex mt-4 space-x-3 md:mt-6">
          <a
            href="https://linkedin.com/in/mattias-silva"
            className="inline-flex items-center py-2 px-4 text-sm font-medium text-center text-white bg-dark rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/ma77i"
            target="_blank"
            className="inline-flex items-center py-2 px-4 text-sm font-medium text-center text-light bg-gray-900 rounded-lg border border-gray-300 hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200"
          >
            GitHub
          </a>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Contact;
