import React from "react";
import useFetch from "../../hooks/useFetch";
import BASE_URL from "../../utils/config";
import TourCard from "../../shared/TourCard";

const FeaturedTourList = () => {
  const { apiData: featuredToursData, error, loading } = useFetch(
    `${BASE_URL}/tour/featured`
  );

  return (
    <>
      {loading && (
        <div className="flex justify-center items-center py-8">
          <div className="text-lg text-gray-600">Loading tours...</div>
        </div>
      )}
      
      {error && (
        <div className="text-center py-8">
          <h4 className="text-red-500 text-lg font-medium">{error}</h4>
          <button 
            onClick={() => window.location.reload()} 
            className="mt-2 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          >
            Try Again
          </button>
        </div>
      )}
      
      {!error && !loading && (
        <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-6">
          {featuredToursData && featuredToursData.length > 0 ? (
            featuredToursData.map((tour) => (
              <div className="" key={tour._id}>
                <TourCard tour={tour} />
              </div>
            ))
          ) : (
            <div className="col-span-full text-center py-8">
              <p className="text-gray-600">No featured tours available at the moment.</p>
            </div>
          )}
        </div>
      )}
    </>
  );
};

export default FeaturedTourList;