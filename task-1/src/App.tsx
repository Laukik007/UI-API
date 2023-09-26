// App.tsx
import React, { useState } from 'react';
import Card from './component/card/card';
import PersonalInformationForm from './component/sections/personalInformation/personalInformation';
import ProfileInfoForm from './component/sections/profile/profile';
import AdditonalQuestion from './component/sections/additionalQuestion/additionalQuestion';
import ImageUploader from './component/imageUploader/imageUploader';


const App: React.FC = () => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  const handleFileSelect = (file: File) => {
    setSelectedFile(file);
    // You can perform any additional actions with the selected file here.
  };
  const handleFormSubmit = (data: FormData) => {
    console.log('Form data submitted:', data);
    // You can perform further actions with the form data here
  };
  return (
    <div className="App">
      <Card headerColor="#D0F7FA" heading='Personal Information' type='personalInfoform'>
      <ImageUploader/> {/* Use the ImageUploader component */}
      </Card>
      <Card headerColor="#D0F7FA" heading='Personal Information' type='personalInfoform'>
      <PersonalInformationForm  onFormSubmit={handleFormSubmit}/> {/* Use the ImageUploader component */}
      </Card>
      <Card headerColor="#D0F7FA" heading='Profile' type='profileInfoform'>
      <ProfileInfoForm  onFormSubmit={handleFormSubmit}/> {/* Use the ImageUploader component */}
      </Card>
      <Card headerColor="#D0F7FA" heading='Additional Question' type='additionalQuestion'>
      <AdditonalQuestion/> {/* Use the ImageUploader component */}
      </Card>
    </div>
  );
};

export default App;
