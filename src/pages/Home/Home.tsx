import { Helmet } from "react-helmet-async";
import DynamicBooking from "@/components/ShareHome/DynamicBooking";
import FeaturedServices from "@/components/ShareHome/FeaturedServices";
import Reviews from "@/components/ShareHome/Reviews";
import Slider from "@/components/ShareHome/Slider";

const Home = () => {
  return (
    <div>
     <Helmet>    <title>Car Service | Home</title>    </Helmet>
      <Slider />
      <FeaturedServices></FeaturedServices>
      <DynamicBooking></DynamicBooking>
      <Reviews></Reviews>
    </div>
  );
};

export default Home;
