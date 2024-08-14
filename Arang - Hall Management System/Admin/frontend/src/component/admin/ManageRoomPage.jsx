import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import ApiService from '../../service/ApiService';
import Pagination from '../common/Pagination';
import RoomResult from '../common/RoomResult';
import "./manageroompage.css";

const ManageRoomPage = () => {
  const [rooms, setRooms] = useState([]);
  const [filteredRooms, setFilteredRooms] = useState([]);
  const [roomTypes, setRoomTypes] = useState([]);
  const [selectedRoomType, setSelectedRoomType] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [roomsPerPage] = useState(5);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchRooms = async () => {
      try {
        const response = await ApiService.getAllRooms();
        const allRooms = response.roomList;
        setRooms(allRooms);
        setFilteredRooms(allRooms);
      } catch (error) {
        console.error('Error fetching rooms:', error.message);
      }
    };

    const fetchRoomTypes = async () => {
      try {
        const types = await ApiService.getRoomTypes();
        setRoomTypes(types);
      } catch (error) {
        console.error('Error fetching room types:', error.message);
      }
    };

    fetchRooms();
    fetchRoomTypes();
  }, []);

  const handleRoomTypeChange = (e) => {
    setSelectedRoomType(e.target.value);
    filterRooms(e.target.value);
  };

  const filterRooms = (type) => {
    if (type === '') {
      setFilteredRooms(rooms);
    } else {
      const filtered = rooms.filter((room) => room.roomType === type);
      setFilteredRooms(filtered);
    }
    setCurrentPage(1); // Reset to first page after filtering
  };

  // Pagination
  const indexOfLastRoom = currentPage * roomsPerPage;
  const indexOfFirstRoom = indexOfLastRoom - roomsPerPage;
  const currentRooms = filteredRooms.slice(indexOfFirstRoom, indexOfLastRoom);

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

//   return (
//     <div className='all-rooms'>
//       <h2>All Rooms</h2>
//       <div className='all-room-filter-div' style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
//         <div className='filter-select-div'>
//           <label>Filter by Room Type:</label>
//           <select value={selectedRoomType} onChange={handleRoomTypeChange}>
//             <option value="">All</option>
//             {roomTypes.map((type) => (
//               <option key={type} value={type}>
//                 {type}
//               </option>
//             ))}
//           </select>
//           <button className='add-room-button' onClick={() => navigate('/admin/add-room')}>
//             Add Room
//           </button>
//         </div>
//       </div>

//       <RoomResult roomSearchResults={currentRooms} />

//       <Pagination
//         roomsPerPage={roomsPerPage}
//         totalRooms={filteredRooms.length}
//         currentPage={currentPage}
//         paginate={paginate}
//       />
//     </div>
//   );
// };

// export default ManageRoomPage;




return (
  <div className='manage-rooms'>
    <h2 className='heading'>All Halls</h2>
    <div className='filter-container'>
      <div className='filter-select'>
        <label>Filter by Hall Type:</label>
        <select value={selectedRoomType} onChange={handleRoomTypeChange}>
          <option value="">All</option>
          {roomTypes.map((type) => (
            <option key={type} value={type}>
              {type}
            </option>
          ))}
        </select>
        <button className='add-room-button' onClick={() => navigate('/admin/add-room')}>
          Add Hall
        </button>
      </div>
    </div>

    <div className='room-cards'>
      {currentRooms.map((room) => (
        <div key={room.id} className='room-card'>
          <h3>{room.name}</h3>
          <p>Type: {room.roomType}</p>
          <p>Price: ${room.price}</p>
          <p>Capacity: {room.capacity}</p>
          <p>Description: {room.description}</p>
          <button className='details-button' onClick={() => navigate(`/admin/room/${room.id}`)}>
            View Details
          </button>
        </div>
      ))}
    </div>

    <Pagination
      roomsPerPage={roomsPerPage}
      totalRooms={filteredRooms.length}
      currentPage={currentPage}
      paginate={paginate}
    />
  </div>
);
};

export default ManageRoomPage;