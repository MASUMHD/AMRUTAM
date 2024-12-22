import Left from "./Left";
import Right from "./Right";

const Others = () => {
  return (
    <div>
      <div className="flex-row lg:flex gap-10 mt-16 mb-20">
        <div className="flex-1 ">
          <Left />
        </div>
        <div className="flex-1 ">
          <Right />
        </div>
      </div>
    </div>
  );
};

export default Others;
