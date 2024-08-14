package com.phegondev.PhegonHotel.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.phegondev.PhegonHotel.dto.RoomDTO;
import com.phegondev.PhegonHotel.entity.Room;
import com.phegondev.PhegonHotel.repo.RoomRepository;

@RestController
public class AddHall {

    @Autowired
    private RoomRepository roomRepository;

    @PostMapping("/admin/add/halls")
    @PreAuthorize("hasAuthority('ADMIN')")
    public boolean addHalls(@RequestBody RoomDto room){

        Room rooms = new Room();
        rooms.setRoomDescription(room.getRoomDescription());
        rooms.setRoomPrice(room.getRoomPrice());
        rooms.setRoomType(room.getRoomType());

        roomRepository.save(rooms);

        return true;
    }
    
}
