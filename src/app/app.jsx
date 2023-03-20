import { useState } from "react";
import UserInfo from "../components/form";
import Sidebar from "../components/sidebar";
import { Box, Container } from "./app.styled";

const App = () => {
  const [step, setStep] = useState(1);
  const [data,setData] = useState({})


  const handleNext = () => {
    if(step <4){
      setStep(step + 1)
    }

  };
  const handleBack = () => {
    if (step > 1) {
      setStep(step - 1);
    }
  };

  const handleCustom = (step) => {
    if(data[`step${step}` ] || data[`step${step - 1}`]){
      setStep(step);
    }
  };


  // handle form data


  const handleForm = (userData)=>{
   setData({...data,[`step${step}`]:userData})
  }

  // console.log(data)

  return (
    <Container>
      <Box>
        <Sidebar step={step} handleCustom={handleCustom} />
        <UserInfo step={step} next={handleNext} handleForm={handleForm} />
      </Box>
    </Container>
  );
};

export default App;
