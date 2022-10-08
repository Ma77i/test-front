const Contact = () => {
  return (
    <div className="container flex justify-center mx-auto my-20">
      <div className="w-full max-w-sm bg-light rounded-lg border border-cristal shadow-xl hover:shadow-2xl">
        <div className="flex flex-col items-center pb-10">
          <img
            className="mb-3 w-60 h-60 rounded-full shadow-lg"
            src="/profile.png"
            alt="Matias image"
          />
          <h2 className="mb-1 font-medium text-gray-900 tracking-wider">
            Matias Silva
          </h2>
          <h5 className="text-xl text-gray-500">Web Developer</h5>
          <div className="flex mt-4 space-x-3 md:mt-6">
            <a
              href="https://linkedin.com/in/mattias-silva"
              target="_blank"
              className="inline-flex items-center py-2 px-10 text-xl font-medium text-center text-white bg-dark rounded-full hover:bg-deep focus:ring-4 focus:outline-none focus:ring-blue-300  hover:shadow-xl"
            >
              LinkedIn
            </a>
            <a
              href="https://github.com/ma77i"
              target="_blank"
              className="inline-flex items-center py-2 px-10 text-xl font-medium text-center text-grey rounded-full border border-grey hover:bg-grey hover:text-light focus:ring-4 focus:outline-none focus:ring-gray-200  hover:shadow-xl"
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
