import Layout from "../layout";
import { Container } from "../styles/styles";
import {
  Divider,
  Header,
  Link,
  List,
  ListItem,
  Text,
  TotalPrice,
  Wraper,
} from "./summary.styled";
import { data } from "./summary.data";
import FormActions from "../formActions";

function Summary({step, summary,handleCustom,handleBack,handleConfirm }) {

    let sum = summary.addons?.reduce((acc,cur)=>{

        acc = acc + cur.price[summary.pricing.period]
        return acc
    },0)

    sum += summary.pricing.price.value


    const confirm = () =>{

        summary.total = sum
        handleConfirm(summary)

    }

  return (
    <Container>
      <Layout title={data.title} description={data.description}>
        <div>
          <List>
            <ListItem>
              <div>
                <Header>
                  {summary.pricing.name} (
                  {summary.pricing.period === "mo" ? "monthly" : "yearly"}){" "}
                </Header>
                <Link onClick={()=>{handleCustom(2)}} >Change </Link>
              </div>
              <Header>
                ${summary.pricing.price.value}/{summary.pricing.period}{" "}
              </Header>
            </ListItem>
            <Divider />
            {summary.addons?.map((addon) => (
              <ListItem key={addon.name}>
                <Text>{addon.label} </Text>
                <Text>
                  +${addon.price[summary.pricing.period]}/
                  {summary.pricing.period}{" "}
                </Text>
              </ListItem>
            ))}
          </List>
          <Wraper>
            <Text>
              Total(per {summary.pricing.period === "mo" ? "month" : "year"}){" "}
            </Text>
            <TotalPrice>+${sum}/{summary.pricing.period} </TotalPrice>
          </Wraper>
        </div>
      </Layout>
      <FormActions step={step} handleBack={handleBack} handleConfirm={confirm} />
    </Container>
  );
}

export default Summary;
