import React, { useRef, useState } from 'react';
import './ImageUploader.css';
import editIcon from '/delete_reupload.svg'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCloudUploadAlt, } from '@fortawesome/free-solid-svg-icons';

interface ImageUploaderProps {
  setFinalData: (content: any) => void;
}

const ImageUploader: React.FC<ImageUploaderProps> = ({setFinalData}) => {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const onFileSelect = (file: File) => {
    const reader = new FileReader();

    reader.onload = (e) => {
      const imageDataURL = e.target?.result as string;
      setSelectedImage(imageDataURL);
    };

    reader.readAsDataURL(file);
    setFinalData((prevData: any) => ({
      ...prevData,
      data: {
        ...prevData.data,
        attributes: {
          ...prevData.data.attributes,
          coverImage:file
        },
      },
    }));
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
    setSelectedImage(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
      handleIconClick();
    }
  };

  return (
    <div className="image-uploader">
      {selectedImage ? (
        <>
          <img
            src={selectedImage}
            alt="Selected"
            className="selected-image"
            style={{ maxWidth: '100%', maxHeight: '100%', borderRadius: '2rem' }}
          />
         
          <img
            src={editIcon}
            alt="Edit"
            className="edit-icon"
            onClick={handleEditClick}
            style={{marginTop: '1rem',marginRight: '18rem'}}
          />
        </>
      ) : (
        <label className="uploader-label" >
          <FontAwesomeIcon icon={faCloudUploadAlt} />
          <span style={{ fontWeight: '600' }}>Upload Cover Image</span>
          <span style={{ color: '#979797' }}>
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
