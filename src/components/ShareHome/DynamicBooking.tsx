const DynamicBooking = () => {
  return (
    <div className="bg-gray-100 ">
      <div className="container mx-auto px-4 md:px-8 lg:px-16 text-center">
        {/* Heading */}
        <h2 className="text-3xl lg:text-4xl font-bold mb-6">
          Dynamic Booking & Business Management Solution
        </h2>

        {/* Content Section */}
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Text Section */}
          <div className="text-gray-600 mb-8 md:w-1/2 md:pr-6 lg:pr-8">
            <p className="mb-4 text-lg">
              Explore the range of features that make SimplyBook.me the best
              online booking and management system for businesses of any size
              and industry. SimplyBook.me offers over 60 custom features to help
              you attract new clients, nurture your current ones, and manage
              your business like a pro!
            </p>
          </div>

          {/* Image Section */}
          <div className="md:w-1/2 w-full flex-grow">
            <img
              src="https://i.ibb.co/KXMmkk2/pavol-duracka-BPla4-XKMjr-U-unsplash.jpg"
              alt="Dynamic Booking Solution"
              className="w-full h-auto object-cover rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DynamicBooking;
