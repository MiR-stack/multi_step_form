import React, { useEffect, useState } from "react";
import FormActions from "../formActions";
import Layout from "../layout";
import { Container } from "../styles/styles";
import { data } from "./addOns.data";
import {
  Card,
  Content,
  Feature,
  Input,
  Name,
  Price,
  Wraper,
} from "./addOns.styled";

function AddOns({ step,handleData, storedData, period, handleNext, handleBack }) {
  const [addons, setAddons] = useState(storedData || data.state);

  const handleChange = (e) => {
    const name = e.target.name;

    const newAddOns = addons.map((addon) => {
      if (addon.name === name) {
        addon.value = !addon.value;
      }

      return addon;
    });

    setAddons(newAddOns);
  };

  useEffect(()=>{
    handleData(addons)
  },[addons])

  return (
    <Container>
      <Layout title={data.title} description={data.description}>
        <Wraper>
          {addons.map((addon) => (
            <Card key={addon.name} active={addon.value}>
              <Content>
                <Input
                  type="checkbox"
                  name={addon.name}
                  checked={addon.value}
                  onChange={handleChange}
                />
                <div>
                  <Name>{addon.label} </Name>
                  <Feature>{addon.feature} </Feature>
                </div>
              </Content>
              <Price>
                ${addon.price[period]}/{period}{" "}
              </Price>
            </Card>
          ))}
        </Wraper>
      </Layout>
      <FormActions
        step={step}
        handleNext={handleNext}
        handleBack={handleBack}
      />
    </Container>
  );
}

export default AddOns;
