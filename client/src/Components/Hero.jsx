import React, { useContext, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import { Autoplay, FreeMode } from "swiper/modules";
import { assets } from "../assets/assets";
import { AppContext } from "../context/AppContext";

const locationsList = [
    "Mumbai", "Andheri", "Bandra", "Dadar", "Thane", "Navi Mumbai",
    "Pune", "Shivaji Nagar", "Hinjewadi", "Kothrud", "Viman Nagar",
    "Nagpur", "Dharampeth", "Sadar", "Sitabuldi", "Civil Lines",
    "Nashik", "Panchavati", "Gangapur", "Dwarka", "Satpur",
];

const Hero = () => {
    const { setSearchFilter, setIsSearched } = useContext(AppContext);
    const titleRef = useRef(null);
    const locationRef = useRef(null);
    const [locationInput, setLocationInput] = useState("");
    const [filteredLocations, setFilteredLocations] = useState([]);

    const onSearch = () => {
        const searchCriteria = {
            title: titleRef.current?.value || "",
            location: locationRef.current?.value || "",
        };
        setSearchFilter(searchCriteria);
        setIsSearched(true);
        console.log(searchCriteria);
    };

    // Handle location input change
    const handleLocationChange = (e) => {
        const value = e.target.value;
        setLocationInput(value);

        // Filter locations based on input
        if (value.length > 0) {
            const filtered = locationsList.filter((loc) =>
                loc.toLowerCase().includes(value.toLowerCase())
            );
            setFilteredLocations(filtered);
        } else {
            setFilteredLocations([]);
        }
    };

    // Select location from the suggestions
    const selectLocation = (location) => {
        setLocationInput(location);
        setFilteredLocations([]);
    };

    return (
        <div className="relative z-20">
            {/* Hero Section */}
            <div className="bg-gradient-to-r from-purple-800 to-purple-950 text-white py-10 px-4 sm:px-6 text-center mx-2 rounded-xl relative">
                <h2 className="text-lg sm:text-2xl md:text-3xl font-semibold mb-3">
                    Over 1000+ JOBS ARE POSTED
                </h2>
                <p className="mb-5 sm:mb-8 text-xs sm:text-sm font-light px-2">
                    🔍 Explore thousands of job opportunities from top companies.
                </p>

                {/* Search Bar */}
                <div className="relative z-30 flex flex-col sm:flex-row items-center bg-white rounded-lg text-gray-600 px-3 sm:px-4 py-2 sm:py-3 shadow-md max-w-xs sm:max-w-lg mx-auto gap-3 sm:gap-4">
                    {/* Job Search Input */}
                    <div className="flex items-center w-full sm:w-1/2 border-b sm:border-b-0 sm:border-r border-gray-300 pr-2 mb-2 sm:mb-0">
                        <img src={assets.search_icon} alt="Search Icon" className="w-4 sm:w-5 h-4 sm:h-5 mr-2" />
                        <input
                            type="text"
                            placeholder="Search for jobs"
                            className="w-full px-2 py-2 text-xs sm:text-sm outline-none"
                            ref={titleRef}
                        />
                    </div>

                    {/* Location Input */}
                    <div className="relative w-full sm:w-1/2">
                        <div className="flex items-center">
                            <img src={assets.location_icon} alt="Location Icon" className="w-4 sm:w-5 h-4 sm:h-5 mr-2" />
                            <input
                                type="text"
                                placeholder="Location"
                                className="w-full px-2 py-2 text-xs sm:text-sm outline-none"
                                ref={locationRef}
                                value={locationInput}
                                onChange={handleLocationChange}
                            />
                        </div>

                        {/* Location Suggestions Dropdown */}
                        {filteredLocations.length > 0 && (
                            <ul className="absolute top-full left-0 w-full bg-white border border-gray-300 rounded-md shadow-lg z-40 max-h-40 overflow-y-auto">
                                {filteredLocations.map((loc, index) => (
                                    <li
                                        key={index}
                                        className="px-3 py-2 hover:bg-gray-200 cursor-pointer text-sm"
                                        onClick={() => selectLocation(loc)}
                                    >
                                        {loc}
                                    </li>
                                ))}
                            </ul>
                        )}
                    </div>

                    <button
                        onClick={onSearch}
                        className="bg-blue-600 text-white font-medium px-4 py-2 rounded-full hover:bg-blue-700 transition w-full sm:w-auto"
                    >
                        Search
                    </button>
                </div>
            </div>

            {/* Trusted By Section */}
            <div className="border border-gray-300 shadow-md mx-2 mt-5 p-4 sm:p-6 rounded-md flex flex-col items-center bg-white relative z-20">
                <p className="font-bold mb-4">TRUSTED BY</p>

                <Swiper
                    spaceBetween={20}
                    slidesPerView={2}
                    breakpoints={{
                        480: { slidesPerView: 3 },
                        640: { slidesPerView: 4 },
                        768: { slidesPerView: 5 },
                    }}
                    freeMode={true}
                    loop={true}
                    autoplay={{
                        delay: 0,
                        disableOnInteraction: false,
                        pauseOnMouseEnter: false,
                    }}
                    speed={6000}
                    modules={[Autoplay, FreeMode]}
                    className="w-full"
                >
                    <SwiperSlide>
                        <img className="h-5 sm:h-6" src={assets.microsoft_logo} alt="Microsoft" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img className="h-5 sm:h-6" src={assets.walmart_logo} alt="Walmart" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img className="h-5 sm:h-6" src={assets.google_logo} alt="Google" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img className="h-5 sm:h-6" src={assets.accenture_logo} alt="Accenture" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img className="h-5 sm:h-6" src={assets.samsung_logo} alt="Samsung" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img className="h-5 sm:h-6" src={assets.amazon_logo} alt="Amazon" />
                    </SwiperSlide>
                </Swiper>
            </div>
        </div>
    );
};

export default Hero;