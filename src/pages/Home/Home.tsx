import Banner from "@/components/ShareHome/Banner";
import DynamicBooking from "@/components/ShareHome/DynamicBooking";
import FeaturedServices from "@/components/ShareHome/FeaturedServices";
import ReviewSection from "@/components/ShareHome/ReviewSection";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <FeaturedServices></FeaturedServices>
      <DynamicBooking></DynamicBooking>
      <ReviewSection></ReviewSection>
    </div>
  );
};

export default Home;
