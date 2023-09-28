// App.tsx
import React, { useEffect, useState } from 'react';
import Card from './component/card/card';
import PersonalInformationForm from './component/sections/personalInformation/personalInformation';
import ProfileInfoForm from './component/sections/profile/profile';
import AdditonalQuestion from './component/sections/additionalQuestion/additionalQuestion';
import ImageUploader from './component/imageUploader/imageUploader';
import Stepper from './component/subcomponent/stepper';
import { Layout, } from 'antd';


import Sidebar from './component/sidebar/sidebar';



const App: React.FC = () => {

  const [personalQuestion,setpersonalQuestion]=useState<any>();
  const [profileQuestion,setprofileQuestion]=useState<any>();
  const[addQ,setadditonalQuestion]=useState<any>();

  

  const [finalData, setFinalData] = useState<any>({
    data: {
      id: '',
      type: 'applicationForm',
      attributes: {
        coverImage: '',
        personalInformation: {
          firstName: {}, 
          lastName: {}, 
          emailId:{},
          phoneNumber:{},
          nationality:{},
          currentResidence:{},
          idNumber:{},
          dateofBirth:{},
          gender:{},
          personalQuestions: [],
        },
        profile: {
          education: {
            mandatory: true,
            show: true,
          },
          experience: {
            mandatory: true,
            show: true,
          },
          resume: {
            mandatory: true,
            show: true,
          },
          profileQuestions: [],
        },
        customisedQuestions: [],
      },
    },
  });



  useEffect(()=>{
    setFinalData((prevData: any) => ({
      ...prevData,
      data: {
        ...prevData.data,
        attributes: {
          ...prevData.data.attributes,
          personalInformation:{
            ...prevData.data.attributes.personalInformation,
            
            dateofBirth:personalQuestion?.pI?.dob,
            gender:personalQuestion?.pI?.gender,
            idNumber:personalQuestion?.pI?.id,
            currentResidence:personalQuestion?.pI?.residence,
            nationality:personalQuestion?.pI?.nationality,
            phone:personalQuestion?.pI?.phone,
            personalQuestions:personalQuestion?.updatedContent
          },
        },
      },
    }));
  },[personalQuestion])
  useEffect(()=>{
    setFinalData((prevData: any) => ({
      ...prevData,
      data: {
        ...prevData.data,
        attributes: {
          ...prevData.data.attributes,
          profile:{
            ...prevData.data.attributes.profile,
            education:profileQuestion?.proI?.education,
            experience:profileQuestion?.proI?.experience,
            resume:profileQuestion?.proI?.resume,
            profileQuestions:profileQuestion?.updatedContent
          },
        },
      },
    }));
  },[profileQuestion])

  useEffect(()=>{
    setFinalData((prevData: any) => ({
      ...prevData,
      data: {
        ...prevData.data,
        attributes: {
          ...prevData.data.attributes,
          customisedQuestions:addQ?.updatedContent,
        },
      },
    }));
  },[addQ])

  console.log('final data',finalData);
  const [collapsed, setCollapsed] = useState<boolean>(true);
  
  return (
    
    <Layout style={{ minHeight: "100vh" }}>
    <Sidebar collapsed={collapsed} onCollapse={setCollapsed} />
    <Layout style={{backgroundColor:"white"}}>
    <Stepper/>
      <div>
      <Card headerColor="#D0F7FA" heading='Cover Image' type='personalInfoform'>
      <ImageUploader setFinalData={setFinalData}/> {/* Use the ImageUploader component */}
      </Card>
      <Card headerColor="#D0F7FA" heading='Personal Information' type='personalInfoform'>
      <PersonalInformationForm setpersonalQuestion={setpersonalQuestion} /> {/* Use the ImageUploader component */}
      </Card>
      <Card headerColor="#D0F7FA" heading='Profile' type='profileInfoform'>
      <ProfileInfoForm setpersonalQuestion={setprofileQuestion}/> {/* Use the ImageUploader component */}
      </Card>
      <Card headerColor="#D0F7FA" heading='Additional Question' type='additionalQuestion'>
      <AdditonalQuestion setpersonalQuestion={setadditonalQuestion}/> {/* Use the ImageUploader component */}
      </Card>
      </div>
      </Layout>
    </Layout>
    
  );
};

export default App;
