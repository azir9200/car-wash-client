
import DynamicBooking from "@/components/ShareHome/DynamicBooking";
import FeaturedServices from "@/components/ShareHome/FeaturedServices";
import Reviews from "@/components/ShareHome/Reviews";
import Slider from "@/components/ShareHome/Slider";

const Home = () => {
  return (
    <div>
    
      <Slider />
      <FeaturedServices></FeaturedServices>
      <DynamicBooking></DynamicBooking>
      <Reviews></Reviews>
    </div>
  );
};

export default Home;
