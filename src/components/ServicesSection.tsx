export function ServicesSection() {
  return (
    <section id="home" className="py-20 px-4 bg-[#141c2f]">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col md:flex-row items-center justify-between gap-10">
          <div className="md:w-1/2">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              Expert Development Services for Your Business
            </h1>
            <p className="text-xl mb-8 text-gray-300">
              We provide professional development solutions to help your
              business grow. Our team of experts is ready to turn your ideas
              into reality.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#contact"
                className="px-6 py-3 bg-blue-600 text-white rounded-md font-medium text-center hover:bg-blue-700 transition-colors"
              >
                Get Started
              </a>
              <a
                href="#services"
                className="px-6 py-3 border border-white text-white rounded-md font-medium text-center hover:bg-white hover:text-[#141c2f] transition-colors"
              >
                Explore Services
              </a>
            </div>
          </div>
          <div className="md:w-1/2">
            <div className="bg-gradient-to-br from-blue-500 to-purple-600 p-1 rounded-lg">
              <div className="bg-[#1d2842] rounded-lg p-8">
                <img
                  src="https://uploadthingy.s3.us-west-1.amazonaws.com/6QmPDBnUZXQnXf5pFJJxG1/image.png"
                  alt="Development Services"
                  className="w-full h-auto rounded-md"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
