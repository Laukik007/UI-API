// ImageUploader.tsx
import React, { useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCloudUploadAlt } from '@fortawesome/free-solid-svg-icons';
import './ImageUploader.css'; // Import the CSS file for styling

interface ImageUploaderProps {
  onFileSelect: (file: File) => void;
}

const ImageUploader: React.FC<ImageUploaderProps> = ({ onFileSelect }) => {
  const fileInputRef = useRef<HTMLInputElement>(null);

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

  return (
    <div className="image-uploader">
      <label
        className="uploader-label"
        onClick={handleIconClick}
      >
        <FontAwesomeIcon icon={faCloudUploadAlt} />
        <span style={{fontWeight:"600"}}>Upload Cover Image</span>
        <span style={{color:"#979797"}}>16:9 ratio is recommended. Max image size 1mb</span>
        <input
          type="file"
          id="file-input"
          accept="image/*"
          onChange={handleFileSelect}
          ref={fileInputRef}
        />
      </label>
    </div>
  );
};

export default ImageUploader;
