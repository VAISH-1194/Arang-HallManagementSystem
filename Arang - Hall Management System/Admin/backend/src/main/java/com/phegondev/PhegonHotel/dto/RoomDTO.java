// package com.phegondev.PhegonHotel.dto;


// import com.fasterxml.jackson.annotation.JsonInclude;
// import lombok.Data;

// import java.math.BigDecimal;
// import java.util.List;

// @Data
// @JsonInclude(JsonInclude.Include.NON_NULL)
// public class RoomDTO {

//     private Long id;
//     private String roomType;
//     private BigDecimal roomPrice;
//     private String roomDescription;
//     private String imageUrl;
//     private List<BookingDTO> bookings;
//     public void setRoomPhotoUrl(String roomPhotoUrl) {
//         // TODO Auto-generated method stub
//         throw new UnsupportedOperationException("Unimplemented method 'setRoomPhotoUrl'");
//     }
// }



package com.phegondev.PhegonHotel.dto;

import com.fasterxml.jackson.annotation.JsonInclude;
import lombok.Data;

import java.math.BigDecimal;
import java.util.List;

@Data
@JsonInclude(JsonInclude.Include.NON_NULL)
public class RoomDTO {

    private Long id;
    private String roomType;
    private BigDecimal roomPrice;
    private String roomDescription;
    private String imageUrl; // The field for the room photo URL
    private List<BookingDTO> bookings;

    // Correct implementation of setRoomPhotoUrl
    public void setRoomPhotoUrl(String roomPhotoUrl) {
        this.imageUrl = roomPhotoUrl; // Set the imageUrl field
    }
}
