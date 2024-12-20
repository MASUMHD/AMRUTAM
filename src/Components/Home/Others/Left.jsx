import AboutMe from "./AboutMe";
import Concerns from "./Concerns";
import MyWork from "./MyWork";
import Reviews from "./Reviews";
import Specialize from "./Specialize";


const Left = () => {
  return (
    <div>
        <AboutMe/>
        <Specialize/>
        <Concerns/>
        <MyWork/>
        <Reviews/>
    </div>
  );
};

export default Left;
