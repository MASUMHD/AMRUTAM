import Banner from "../Components/Home/Banner";
import Others from "../Components/Home/Others/Others";

const Home = () => {
  return (
    <div className="mt-20">
      <div className="mt-32">
      <Banner/>
      </div>
      <div>
        <Others/>
      </div>
    </div>
  );
};

export default Home;
