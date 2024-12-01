const About = () => {
  return (
    <div className="container mx-auto bg-slate-200 p-8">
      <h1 className="text-4xl font-bold text-center mb-8">About Us</h1>
      <p className="text-lg text-center mb-6">
        Welcome to our Car Wash Booking System! We are dedicated to providing
        you with a seamless car wash experience that is convenient, efficient,
        and tailored to your needs.
      </p>
      <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
      <p className="text-lg mb-6">
        Our mission is to simplify the car wash process for our customers. We
        believe that keeping your vehicle clean should be easy and accessible
        for everyone. Our platform allows you to book your car wash service at
        the click of a button.
      </p>
      <h2 className="text-2xl font-semibold mb-4">Our Values</h2>
      <ul className="list-disc list-inside mb-6">
        <li className="mb-2">
          ✨ Customer Satisfaction: We prioritize your needs and aim to exceed
          your expectations.
        </li>
        <li className="mb-2">
          🛠️ Quality Service: Our services are designed to deliver the highest
          quality results.
        </li>
        <li className="mb-2">
          🌍 Sustainability: We are committed to using eco-friendly products and
          practices.
        </li>
      </ul>
      <h2 className="text-2xl font-semibold mb-4">Meet Our Team</h2>
      <p className="text-lg mb-6">
        Our team is made up of passionate professionals who are dedicated to
        ensuring your car wash experience is nothing short of excellent. We are
        here to assist you with any questions or concerns you may have.
      </p>
      <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
      <p className="text-lg mb-6">
        If you have any inquiries or need assistance, feel free to reach out to
        us at{" "}
        <a href="mailto:info@carwashbooking.com" className="text-blue-600">
          info@carwashbooking.com
        </a>
        .
      </p>
      <div className="flex justify-center">
        <a
          href="/"
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Back to Home
        </a>
      </div>
    </div>
  );
};

export default About;
