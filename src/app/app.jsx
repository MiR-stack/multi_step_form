import { useState } from "react";
import AddOns from "../components/addOns/addOns";
import UserInfo from "../components/form";
import Pricing from "../components/pricing/pricing";
import Sidebar from "../components/sidebar";
import { Box, Container } from "./app.styled";

const App = () => {
  const [step, setStep] = useState(1);
  const [data, setData] = useState({});

  const handleNext = () => {
    if (step < 4) {
      setStep(step + 1);
    }
  };
  const handleBack = () => {
    if (step > 1) {
      setStep(step - 1);
    }
  };

  const handleCustom = (step) => {
    if (data[`step${step}`] || data[`step${step - 1}`]) {
      setStep(step);
    }
  };

  // handle form data

  const handleData = (userData) => {
    setData({ ...data, [`step${step}`]: userData });
  };

  return (
    <Container>
      <Box>
        <Sidebar step={step} handleCustom={handleCustom} />
        {step === 1 && (
          <UserInfo
            step={step}
            storedData={data.step1}
            next={handleNext}
            handleForm={handleData}
          />
        )}
        {step === 2 && (
          <Pricing
            step={step}
            storedData={data.step2}
            handleData={handleData}
            next={handleNext}
            handleBack={handleBack}
          />
        )}
        {step === 3 && (
          <AddOns
            step={step}
            storedData={data.step3}
            period={data.step2.period}
            handleNext={handleNext}
            handleBack={handleBack}
            handleData={handleData}
          />
        )}
      </Box>
    </Container>
  );
};

export default App;
