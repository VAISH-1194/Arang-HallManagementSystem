package com.phegondev.PhegonHotel.controller;

import java.math.BigDecimal;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class RoomDto {
    private String roomType;
    private BigDecimal roomPrice;
    // @JsonIgnore
    // public String roomPhotoUrl;
    private String roomDescription;
    
}
