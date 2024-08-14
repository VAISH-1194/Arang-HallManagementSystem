// import React from 'react';
// import { useNavigate } from 'react-router-dom'; // Import useNavigate
// import ApiService from '../../service/ApiService';
// import "./roomresult.css";

// const RoomResult = ({ roomSearchResults }) => {
//     const navigate = useNavigate(); // Initialize useNavigate hook
//     const isAdmin = ApiService.isAdmin();

//     const defaultRooms = [
//         { id: 1, roomType: 'Default Room 1', roomPrice: 100, roomDescription: 'This is a default room description.', roomPhotoUrl: 'https://via.placeholder.com/150' },
//         { id: 2, roomType: 'Default Room 2', roomPrice: 150, roomDescription: 'This is a default room description.', roomPhotoUrl: 'https://via.placeholder.com/150' },
//         { id: 3, roomType: 'Default Room 3', roomPrice: 200, roomDescription: 'This is a default room description.', roomPhotoUrl: 'https://via.placeholder.com/150' },
//         { id: 4, roomType: 'Default Room 4', roomPrice: 250, roomDescription: 'This is a default room description.', roomPhotoUrl: 'https://via.placeholder.com/150' },
//         { id: 5, roomType: 'Default Room 5', roomPrice: 300, roomDescription: 'This is a default room description.', roomPhotoUrl: 'https://via.placeholder.com/150' },
//     ];


//     return (
//         <section className="room-results">
//             {roomSearchResults && roomSearchResults.length > 0 && (
//                 <div className="room-list">
//                     {roomSearchResults.map(room => (
//                         <div key={room.id} className="room-list-item">
//                             <img className='room-list-item-image' src={room.roomPhotoUrl} alt={room.roomType} />
//                             <div className="room-details">
//                                 <h3>{room.roomType}</h3>
//                                 <p>Price: ${room.roomPrice} / night</p>
//                                 <p>Description: {room.roomDescription}</p>
//                             </div>

//                             <div className='book-now-div'>
//                                 {isAdmin ? (
//                                     <button
//                                         className="edit-room-button"
//                                         onClick={() => navigate(`/admin/edit-room/${room.id}`)} // Navigate to edit room with room ID
//                                     >
//                                         Edit Room
//                                     </button>
//                                 ) : (
//                                     <button
//                                         className="book-now-button"
//                                         onClick={() => navigate(`/room-details-book/${room.id}`)} // Navigate to book room with room ID
//                                     >
//                                         View/Book Now
//                                     </button>
//                                 )}
//                             </div>

//                         </div>
//                     ))}
//                 </div>
//             )}
//         </section>
//     );
// }

// export default RoomResult;





















import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import ApiService from '../../service/ApiService';
import "./roomresult.css";

const RoomResult = ({ roomSearchResults }) => {
    const navigate = useNavigate(); // Initialize useNavigate hook
    const isAdmin = ApiService.isAdmin();
    const defaultImage1 = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTp__Qz7zTpwDfc7QnaeK6svhvV0o4UYAOmxw&s";
    const defaultImage2 = "https://media-cdn.tripadvisor.com/media/photo-s/0e/d7/84/f1/banquet-hall.jpg";
    const defaultImage3 = "https://imagewedz.oyoroomscdn.com/medium/photologue/images/le-meridien-le-meridien-grand-koval-ballroom-3.jpg";
    const defaultImage4 = "https://www.geethahotels.com/img/demos/hotel/best-marriage-halls-coimbatore.jpg";
    const defaultImage5 = "https://lh3.googleusercontent.com/SNIcomE3YWdv2dLFFNiQ6wDWOrrZR07df-TI2B9N0H2asDIXzeZ-wiybU_r4nsaawtJKvD8Vnmq1HnHVIaHJUTiH=w1134-h641-l80-e31";

    const defaultRooms = [
        { id: 'default1', roomType: 'Conference Hall', roomPrice: 100, roomDescription: 'A cozy standard room with basic amenities.', roomPhotoUrl: defaultImage1 },
        { id: 'default2', roomType: 'Party Hall', roomPrice: 150, roomDescription: 'A spacious room with deluxe amenities.', roomPhotoUrl: defaultImage2 },
        { id: 'default3', roomType: 'Marriage Hall', roomPrice: 200, roomDescription: 'An elegant suite with luxurious features.', roomPhotoUrl: defaultImage3 },
        { id: 'default4', roomType: 'Mini Hall', roomPrice: 180, roomDescription: 'A large room perfect for families.', roomPhotoUrl: defaultImage4 },
        { id: 'default5', roomType: 'Bantique Hall', roomPrice: 80, roomDescription: 'A comfortable room for solo travelers.', roomPhotoUrl: defaultImage5 }
    ];

    return (
        <section className="room-results">
            <div className="room-list">
                {defaultRooms.map(room => (
                    <div key={room.id} className="room-list-item">
                        <img className='room-list-item-image' src={room.roomPhotoUrl} alt={room.roomType} />
                        <div className="room-details">
                            <h3>{room.roomType}</h3>
                            <p>Price: ${room.roomPrice} / night</p>
                            <p>Description: {room.roomDescription}</p>
                        </div>

                        <div className='book-now-div'>
                            {isAdmin ? (
                                <button
                                    className="edit-room-button"
                                    onClick={() => navigate(`/admin/edit-room/${room.id}`)} // Navigate to edit room with room ID
                                >
                                    Edit Room
                                </button>
                            ) : (
                                <button
                                    className="book-now-button"
                                    onClick={() => navigate(`/room-details-book/${room.id}`)} // Navigate to book room with room ID
                                >
                                    View/Book Now
                                </button>
                            )}
                        </div>

                    </div>
                ))}
            </div>

            {roomSearchResults && roomSearchResults.length > 0 && (
                <div className="room-list">
                    {roomSearchResults.map(room => (
                        <div key={room.id} className="room-list-item">
                            <img className='room-list-item-image' src={room.roomPhotoUrl} alt={room.roomType} />
                            <div className="room-details">
                                <h3>{room.roomType}</h3>
                                <p>Price: ${room.roomPrice} / night</p>
                                <p>Description: {room.roomDescription}</p>
                            </div>

                            <div className='book-now-div'>
                                {isAdmin ? (
                                    <button
                                        className="edit-room-button"
                                        onClick={() => navigate(`/admin/edit-room/${room.id}`)} // Navigate to edit room with room ID
                                    >
                                        Edit Room
                                    </button>
                                ) : (
                                    <button
                                        className="book-now-button"
                                        onClick={() => navigate(`/room-details-book/${room.id}`)} // Navigate to book room with room ID
                                    >
                                        View/Book Now
                                    </button>
                                )}
                            </div>

                        </div>
                    ))}
                </div>
            )}
        </section>
    );
}

export default RoomResult;
