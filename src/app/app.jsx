import { useState } from "react";
import FormActions from "../components/formActions";
import Layout from "../components/layout";
import Sidebar from "../components/sidebar";
import { Box, Container, Main } from "./app.styled";

const data = [
  {
    title: "Personal info",
    description: "Please provide your name, email address , and phone number.",
  },
  {
    title: "Select your plan",
    description: "You have the option of monthly or yearly billing.",
  },
  {
    title: "Pick add-ons",
    description: "Add-ons help enhance your gaming experience",
  },
  {
    title: "Finising up",
    description: "Double-check everything looks OK before confirming",
  },
];

const App = () => {

    const [step,setStep] = useState(1)

    const handleNext=()=>{
        if(step <5){
            setStep(step +1)
        }
    }
    const handleBack = () =>{
        if(step > 1){
            setStep(step-1)
        }
    }

    const handleCustom = (step) =>{
        setStep(step)
    }

  return (
    <Container>
      <Box>
        <Sidebar step={step} handleCustom={handleCustom}/>
        <Main>
          <Layout {...data[step -1]}></Layout>
          <FormActions step={step} handleNext={handleNext} handleBack={handleBack} />
        </Main>
      </Box>
    </Container>
  );
};

export default App;
