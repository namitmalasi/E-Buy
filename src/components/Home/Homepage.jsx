import Herosection from "./Herosection";
import iphone from "../../assets/iphone-14-pro.webp";
import mac from "../../assets/mac-system-cut.jfif";
import FeaturedProducts from "./FeaturedProducts";

const Homepage = () => {
  return (
    <div>
      <Herosection
        title="Buy iphone 15 Pro"
        subtitle="Experience the power of latest iphone 15 pro"
        link="/"
        image={iphone}
      />
      <FeaturedProducts />
      <Herosection
        title="Build the ultimate setup"
        subtitle="You can add studio display and clour-matched magic accessories to your bag after configure your Mac mini"
        link="/"
        image={mac}
      />
    </div>
  );
};

export default Homepage;
