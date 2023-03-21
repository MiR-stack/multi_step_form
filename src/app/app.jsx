import { useState } from "react";
import AddOns from "../components/addOns/addOns";
import Confirmation from "../components/confirmation/confirmation";
import UserInfo from "../components/form";
import Pricing from "../components/pricing/pricing";
import Sidebar from "../components/sidebar";
import Summary from "../components/summary/summary";
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
    } else if (step === 1 && data.total) {
      setStep(step);
      setData({})
    }
  };

  // handle data

  const handleData = (userData) => {
    setData({ ...data, [`step${step}`]: userData });
  };

  let summary = {
    pricing: {
      name: data.step2?.pricing.name,
      period: data.step2?.period,
      price: data.step2?.pricing.price[data.step2?.period],
    },
    addons: data.step3?.filter((item) => item.value),
  };

  const handleConfirm = (data) => {
    setData(data);
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
        {step === 4 && data.step1 && (
          <Summary
            step={step}
            summary={summary}
            handleBack={handleBack}
            handleCustom={handleCustom}
            handleConfirm={handleConfirm}
          />
        )}

        {step === 4 && data.total && <Confirmation />}
      </Box>
    </Container>
  );
};

export default App;
