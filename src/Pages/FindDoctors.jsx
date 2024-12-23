import Banner from "../Components/FindDoctors/Banner";
import DoctorCard from "../Components/FindDoctors/DoctorCard";
import Options from "../Components/FindDoctors/Options";

const FindDoctors = () => {
    return (
        <div className="mt-[75px]">
            <Banner />
            <Options/>
            <div className="container mx-auto max-w-[84rem]">
                <DoctorCard />
            </div>
        </div>
    );
};

export default FindDoctors;