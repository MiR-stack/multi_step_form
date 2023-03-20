import {
  Box,
  Card,
  Content,
  Input,
  Name,
  Offer,
  Price,
  Slider,
  Switch,
  SwitchBox,
  Text,
  Wraper,
} from "./pricing.styled";

import { data } from "./pricing.data";
import { Container } from "../styles/styles";
import Layout from "../layout";
import FormActions from "../formActions";
import { useEffect, useState } from "react";

function Pricing({step,storedData,handleData,next,handleBack}) {

    console.log(storedData)

    const [period ,setPeriod] = useState(storedData?.period || 'mo')

    const handlePeriod = (period) =>{
        if(period === 'mo'){
            setPeriod('yr')
        }else{
            setPeriod('mo')
        }
    }

    console.log(storedData)

    const [pricing,setPricing] = useState(storedData?.pricing ||data.state[0])

    

    useEffect(()=>{
        handleData({pricing,period})
    },[pricing,period])

   

  return (
    <Container>
      <Layout title={data.title} description={data.description}>
        <Box>
          <Wraper>
            {data.state.map((item) => (
              <Card key={item.name} active={pricing.name === item.name} onClick={()=>{setPricing(item)}}>
                <img src={item.icon} alt="item.name" />
                <Content>
                  <Name>{item.name} </Name>
                  <Price>${item.price[period].value}/{period} </Price>
                  <Offer>{item.price[period].offer} </Offer>
                </Content>
              </Card>
            ))}
          </Wraper>
          <SwitchBox>
            <Text active={period === 'mo'} >monthly </Text>
            <Switch>
                <Input type='checkbox' checked={period === 'yr'}  onChange={()=>{handlePeriod(period)}} />
                <Slider />
            </Switch>
            <Text active={period === 'yr'} >yearly</Text>
          </SwitchBox>
        </Box>
      </Layout>
      <FormActions step={step} handleBack={handleBack} handleNext={next} />
    </Container>
  );
}

export default Pricing;
