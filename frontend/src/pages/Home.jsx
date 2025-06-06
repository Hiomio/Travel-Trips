import React from "react";
import "tailwindcss/tailwind.css";
import card01 from "../assets/images/gallery-01.jpg";
import card02 from "../assets/images/gallery-02.jpg";
import card03 from "../assets/images/gallery-03.jpg";
import SearchBar from "../shared/searchBar/SearchBar";
import ServicesList from "../components/services/ServicesList";
import FeaturedTourList from "../components/featruredTour/FeaturedTourList";
import FaqList from "../components/Faq/FaqList";
import Testimonials from "../components/Testimonials/Testimonials";
import faqImg from "../assets/images/experience.png";
import ImagesGallery from "../components/Gallery/Gallery";

const Home = () => {
  return (
    <>
      {/* Hero Section */}
      <div className="min-h-screen bg-cover md:pt-4 px-6 md:px-12 bg-center">
        <div className="grid md:grid-cols-2 gap-8">
          <div className="my-8">
            <h1 className="text-[33px] md:text-[40px] font-cursiveFont text-center md:text-start font-bold mb-4">
              Discover Your Perfect Getaway with
              <span className="text-BaseColor text-[40px] font-cursiveFont ml-2">
                TripsTravel
              </span>
            </h1>
            <p className="text-lg leading-8 text-gray-800 hidden md:block">
              Plan your escape with TripsTravel – where dreams meet destinations.
              Explore vibrant cities, tranquil beaches, and scenic escapes, all
              curated for your perfect adventure. Join a community of explorers
              and make every journey unforgettable.
            </p>
            <p className="mobpara md:hidden">
              Discover unique destinations and unforgettable adventures with
              TripsTravel – your partner in planning the perfect trip.
            </p>
          </div>

          <div className="gap-4 grid grid-cols-3 min-h-[200px]">
            <div className="rounded-lg my-8 overflow-hidden">
              <img src={card01} className="object-cover h-full" alt="Scenic Destination 1" />
            </div>
            <div className="rounded-lg overflow-hidden">
              <img src={card02} className="object-cover h-full" alt="Scenic Destination 2" />
            </div>
            <div className="rounded-lg my-8 overflow-hidden">
              <img src={card03} className="object-cover h-full" alt="Scenic Destination 3" />
            </div>
          </div>
        </div>
        <SearchBar />
      </div>

      {/* Services Section */}
      <section className="pb-12 px-6 md:px-12">
        <div className="container mx-auto mt-8 flex-col flex md:flex-row">
          <div className="mb-6 flex-shrink-0 mx-4 flex-1 min-w-[30%]">
            <h2 className="text-[33px] md:text-[40px] font-cursiveFont font-bold mb-4 text-center">
              Exceptional
              <span className="text-BaseColor text-[43px] ml-2 font-cursiveFont">
                Services
              </span>
            </h2>
            <p className="para md:text-lg md:leading-8 md:text-start md:text-gray-800">
              Elevate your travel experience with our premium services – designed
              to make every journey smooth, comfortable, and unforgettable.
            </p>
          </div>
          <ServicesList className="flex-grow" />
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-8 text-center px-6 md:px-12">
        <h1 className="text-[33px] md:text-[40px] font-cursiveFont font-bold mb-4">
          Explore Our
          <span className="text-BaseColor text-[40px] ml-2 font-cursiveFont">
            Gallery
          </span>
        </h1>
        <p className="text-lg leading-8 mb-8 text-gray-800">
          Take a visual journey through breathtaking moments captured on our trips.
          Every photo tells a story from the heart of a TripsTravel adventure.
        </p>
        <ImagesGallery />
      </section>

      {/* Featured Tours Section */}
      <section className="min-h-screen py-8 px-6 md:px-12">
        <h1 className="text-[40px] font-cursiveFont font-bold mb-4 text-center text-BaseColor">
          Featured Tours
        </h1>
        <p className="para md:text-lg md:leading-8 text-center md:text-gray-800">
          Discover handpicked tours curated for unforgettable experiences.
          From thrilling escapades to serene getaways – we have it all.
        </p>
        <FeaturedTourList />
      </section>

      {/* Testimonials Section */}
      <section className="py-8 px-6 md:px-12 bg-gray-50">
        <div className="mx-auto text-center xl:w-[470px]">
          <h1 className="text-[33px] md:text-[40px] font-cursiveFont font-bold mb-4">
            What Our
            <span className="text-BaseColor ml-2 font-cursiveFont">Travelers Say</span>
          </h1>
          <p className="text-lg font-paraFont font-bold leading-8 mb-8 text-gray-800">
            Hear real stories from those who’ve journeyed with us.
            Honest reviews that inspire your next adventure.
          </p>
        </div>
        <Testimonials />
      </section>

      {/* FAQ Section */}
      <section className="px-6 md:px-12 py-6">
        <div className="flex flex-col md:flex-row justify-between gap-10 items-center">
          <div className="w-full md:w-1/2 hidden md:block">
            <img src={faqImg} alt="FAQ illustration" />
          </div>

          <div className="w-full md:w-1/2">
            <h2 className="text-3xl text-BaseColor font-cursiveFont font-bold text-center mb-4">
              Frequently Asked Questions
            </h2>
            <FaqList />
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;