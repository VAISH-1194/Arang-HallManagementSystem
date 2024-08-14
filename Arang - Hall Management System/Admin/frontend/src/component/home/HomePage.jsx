// import React, { useState } from "react";
// import RoomResult from "../common/RoomResult";
// import RoomSearch from "../common/RoomSearch";




// const HomePage = () => {

//     const [roomSearchResults, setRoomSearchResults] = useState([]);

//     // Function to handle search results
//     const handleSearchResult = (results) => {
//         setRoomSearchResults(results);
//     };

//     return (
//         <div className="home">
//             {/* HEADER / BANNER ROOM SECTION */}
//             <section>
//                 <header className="header-banner">
//                     <img src="./assets/images/Hall.webp" alt="Arang Hall" className="header-image" />
//                     <div className="overlay"></div>
//                     <div className="animated-texts overlay-content">
//                         <h1>
//                             Welcome to <span className="Arang-color">Arang Hall</span>
//                         </h1><br />
//                         <h3>Step into a haven of comfort and care</h3>
//                     </div>
//                 </header>
//             </section>

//             {/* SEARCH/FIND AVAILABLE ROOM SECTION */}
//             <RoomSearch handleSearchResult={handleSearchResult} />
//             <RoomResult roomSearchResults={roomSearchResults} />

//             <h4><a className="view-rooms-home" href="/rooms">All Rooms</a></h4>

//             <h2 className="home-services">Services at <span className="Arang-color">Arang Hall</span></h2>

//             {/* SERVICES SECTION */}
//             <section className="service-section"><div className="service-card">
//                 <img src="./assets/images/ac.png" alt="Air Conditioning" />
//                 <div className="service-details">
//                     <h3 className="service-title">Air Conditioning</h3>
//                     <p className="service-description">Stay cool and comfortable throughout your stay with our individually controlled in-room air conditioning.</p>
//                 </div>
//             </div>
//                 <div className="service-card">
//                     <img src="./assets/images/mini-bar.png" alt="Mini Bar" />
//                     <div className="service-details">
//                         <h3 className="service-title">Mini Bar</h3>
//                         <p className="service-description">Enjoy a convenient selection of beverages and snacks stocked in your room's mini bar with no additional cost.</p>
//                     </div>
//                 </div>
//                 <div className="service-card">
//                     <img src="./assets/images/parking.png" alt="Parking" />
//                     <div className="service-details">
//                         <h3 className="service-title">Parking</h3>
//                         <p className="service-description">We offer on-site parking for your convenience . Please inquire about valet parking options if available.</p>
//                     </div>
//                 </div>
//                 <div className="service-card">
//                     <img src="./assets/images/wifi.png" alt="WiFi" />
//                     <div className="service-details">
//                         <h3 className="service-title">WiFi</h3>
//                         <p className="service-description">Stay connected throughout your stay with complimentary high-speed Wi-Fi access available in all guest rooms and public areas.</p>
//                     </div>
//                 </div>

//             </section>
//             {/* AVAILABLE ROOMS SECTION */}
//             <section>

//             </section>
//         </div>
//     );
// }

// export default HomePage;





import React, { useState } from "react";
import RoomResult from "../common/RoomResult";
import RoomSearch from "../common/RoomSearch";
import HallCard from "../common/HallCard"; // Import the HallCard component

const HomePage = () => {
  const [roomSearchResults, setRoomSearchResults] = useState([]);

  // Function to handle search results
  const handleSearchResult = (results) => {
    setRoomSearchResults(results);
  };

  return (
    <div className="home">
      {/* HEADER / BANNER ROOM SECTION */}
      <section>
        <header className="header-banner">
          <img src="./assets/images/Hall.webp" alt="Arang Hall" className="header-image" 
          style={{
            width: "100%",
            height: "495px", // Adjust the height as needed
            objectFit: "cover", // Ensures the image covers the container
            overflow: "hidden"
          }}
          />
          <div className="overlay"></div>
          <div className="animated-texts overlay-content">
            <h1>
              Welcome to <span className="Arang-color">Arang Hall</span>
            </h1><br />
            <h3>Step into a haven of comfort and care</h3>
          </div>
        </header>
      </section>

      {/* SEARCH/FIND AVAILABLE ROOM SECTION */}
      <RoomSearch handleSearchResult={handleSearchResult} />
      <RoomResult roomSearchResults={roomSearchResults} />

      <h4><a className="view-rooms-home" href="/rooms">All Rooms</a></h4>

      {/* HALL CARDS SECTION */}
      <section className="hall-cards-section">
        <div className="hall-cards-row">
          <HallCard
            imageUrl="https://5.imimg.com/data5/ANDROID/Default/2023/7/328807145/AS/YE/YH/152519463/product-jpeg.jpg"
            hallName="Conference Hall"
            accommodation="200 people"
            pricing="$500/day"
            occasion="Business Meetings"
            place="Downtown"
          />
          <HallCard
            imageUrl="https://5.imimg.com/data5/ANDROID/Default/2023/7/328807145/AS/YE/YH/152519463/product-jpeg.jpg"
            hallName="Marriage Hall"
            accommodation="500 people"
            pricing="$1500/day"
            occasion="Weddings"
            place="City Center"
          />
          <HallCard
            imageUrl="https://5.imimg.com/data5/ANDROID/Default/2023/7/328807145/AS/YE/YH/152519463/product-jpeg.jpg"
            hallName="Party Hall"
            accommodation="300 people"
            pricing="$700/day"
            occasion="Parties"
            place="Uptown"
          />
        </div>
        <div className="hall-cards-row">
          <HallCard
            imageUrl="https://5.imimg.com/data5/ANDROID/Default/2023/7/328807145/AS/YE/YH/152519463/product-jpeg.jpg"
            hallName="Banquet Hall"
            accommodation="400 people"
            pricing="$1000/day"
            occasion="Receptions"
            place="Suburbs"
          />
          <HallCard
            imageUrl="https://5.imimg.com/data5/ANDROID/Default/2023/7/328807145/AS/YE/YH/152519463/product-jpeg.jpg"
            hallName="Exhibition Hall"
            accommodation="250 people"
            pricing="$800/day"
            occasion="Exhibitions"
            place="Midtown"
          />
          <HallCard
            imageUrl="https://5.imimg.com/data5/ANDROID/Default/2023/7/328807145/AS/YE/YH/152519463/product-jpeg.jpg"
            hallName="Others"
            accommodation="Varies"
            pricing="Custom pricing"
            occasion="Various"
            place="Multiple locations"
          />
        </div>
      </section>

      <h2 className="home-services">Services at <span className="Arang-color">Arang Hall</span></h2>

      {/* SERVICES SECTION */}
      <section className="service-section">
        <div className="service-card">
          <img src="./assets/images/ac.png" alt="Air Conditioning" />
          <div className="service-details">
            <h3 className="service-title">Air Conditioning</h3>
            <p className="service-description">Stay cool and comfortable throughout your stay with our individually controlled in-room air conditioning.</p>
          </div>
        </div>
        <div className="service-card">
          <img src="./assets/images/mini-bar.png" alt="Mini Bar" />
          <div className="service-details">
            <h3 className="service-title">Mini Bar</h3>
            <p className="service-description">Enjoy a convenient selection of beverages and snacks stocked in your room's mini bar with no additional cost.</p>
          </div>
        </div>
        <div className="service-card">
          <img src="./assets/images/parking.png" alt="Parking" />
          <div className="service-details">
            <h3 className="service-title">Parking</h3>
            <p className="service-description">We offer on-site parking for your convenience. Please inquire about valet parking options if available.</p>
          </div>
        </div>
        <div className="service-card">
          <img src="./assets/images/wifi.png" alt="WiFi" />
          <div className="service-details">
            <h3 className="service-title">WiFi</h3>
            <p className="service-description">Stay connected throughout your stay with complimentary high-speed Wi-Fi access available in all guest rooms and public areas.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
