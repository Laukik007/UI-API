import React, { useRef, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCloudUploadAlt, faEdit } from '@fortawesome/free-solid-svg-icons'; // Import the edit icon
import './ImageUploader.css'; // Import the CSS file for styling

interface ImageUploaderProps {
 
}

const ImageUploader: React.FC<ImageUploaderProps> = ({  }) => {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const onFileSelect = (file: File) => {
    const reader = new FileReader();

    reader.onload = (e) => {
      const imageDataURL = e.target?.result as string;
      setSelectedImage(imageDataURL);
    };

    reader.readAsDataURL(file);
  };

  const handleIconClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files && e.target.files[0];
    if (selectedFile) {
      onFileSelect(selectedFile);
    }
  };

  const handleEditClick = () => {
    setSelectedImage(null); // Clear the selected image when edit is clicked
    if (fileInputRef.current) {
      fileInputRef.current.value = ''; // Clear the file input value
      handleIconClick(); // Trigger the file input click again
    }
  };

  return (
    <div className="image-uploader">
      {selectedImage ? (
        <>
          <img src={selectedImage} alt="Selected" className="selected-image" />
          <FontAwesomeIcon
            icon={faEdit}
            className="edit-icon"
            onClick={handleEditClick}
          />
        </>
      ) : (
        <label className="uploader-label" onClick={handleIconClick}>
          <FontAwesomeIcon icon={faCloudUploadAlt} />
          <span style={{fontWeight: "600"}}>Upload Cover Image</span>
          <span style={{color: "#979797"}}>
            16:9 ratio is recommended. Max image size 1mb
          </span>
          <input
            type="file"
            id="file-input"
            accept="image/*"
            onChange={handleFileSelect}
            ref={fileInputRef}
          />
        </label>
      )}
    </div>
  );
};

export default ImageUploader;
