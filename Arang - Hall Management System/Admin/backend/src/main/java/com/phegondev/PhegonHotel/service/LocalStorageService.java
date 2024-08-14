package com.phegondev.PhegonHotel.service;

import com.phegondev.PhegonHotel.exception.OurException;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.File;
import java.io.IOException;

@Service
public class LocalStorageService {

    private final String uploadDir = "uploads/"; // Specify your local upload directory

    public String saveImageLocally(MultipartFile photo) {
        String localFilePath = null;

        try {
            // Create the uploads directory if it doesn't exist
            File directory = new File(uploadDir);
            if (!directory.exists()) {
                directory.mkdir(); // Create the directory
            }

            // Set the filename and create the file object
            String fileName = photo.getOriginalFilename();
            File file = new File(uploadDir + fileName);
            
            // Transfer the file to the local directory
            photo.transferTo(file);

            // Return the relative URL for accessing the image
            localFilePath = "/uploads/" + fileName; // Update this line to return a relative URL
            return localFilePath;

        } catch (IOException e) {
            e.printStackTrace();
            throw new OurException("Unable to upload image to local storage: " + e.getMessage());
        }
    }
}
