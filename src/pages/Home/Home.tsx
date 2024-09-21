import Banner from "@/components/ShareHome/Banner";
import DynamicBooking from "@/components/ShareHome/DynamicBooking";
import FeaturedServices from "@/components/ShareHome/FeaturedServices";
import Reviews from "@/components/ShareHome/Reviews";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <FeaturedServices></FeaturedServices>
      <DynamicBooking></DynamicBooking>
      <Reviews></Reviews>
    </div>
  );
};

export default Home;
