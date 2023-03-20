import { useState } from "react";
import Layout from "../layout";
import { Box, Input, Label, Error, Wraper, Form } from "./index.styled";
import { data as rootData } from "./data";
import FormActions from "../formActions";
import { Container } from "../styles/styles";

function UserInfo({ step, handleForm, next }) {
  // handle error
  const defaultError = arrToObject(rootData.state, "error");
  const initError = arrToObject(rootData.state, "initError");
  const [errors, setError] = useState(initError);

  function errorhandle(value, name) {
    if (!value && defaultError[name].required) {
      setError({
        ...errors,
        [name]: defaultError[name].error || "this is required field",
      });
    } else {
      setError({ ...errors, [name]: "" });
    }
  }

  //   handle Data
  const initData = arrToObject(rootData.state, "initData");
  const [data, setData] = useState(initData);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setData((prev) => {
      if (prev[name].touced) {
        errorhandle(value, name);
      }

      return {
        ...prev,
        [name]: { ...prev[name], value: value },
      };
    });
  };

  const handleBlur = (e) => {
    const { name } = e.target;
    setData((prev) => {
      errorhandle(prev[name].value, name);
      return {
        ...prev,
        [name]: { ...prev[name], touced: true },
      };
    });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    let isValidate = true;

    for (let key in data) {
      if (data[key].error) {
        isValidate = false;
      }
    }

    if(isValidate){
        handleForm(data)
        next()
    }

    console.log(isValidate);
  };

  return (
    <Container>
      <Form onSubmit={onSubmit}>
        <Layout title={rootData.title} description={rootData.description}>
          {rootData.state.map((item) => (
            <Box key={item.name}>
              <Wraper>
                <Label htmlFor={item.name}>{item.label} </Label>
                <Error>{errors[item.name]} </Error>
              </Wraper>
              <Input
                error={errors[item.name]}
                name={item.name}
                value={data[item.name].value}
                id={item.name}
                placeholder={item.placeholder}
                type={item.type}
                onChange={handleChange}
                onBlur={handleBlur}
                required={defaultError[item.name].required}
              />
            </Box>
          ))}
        </Layout>
        <FormActions step={step} type={"submit"} />
      </Form>
    </Container>
  );
}

export default UserInfo;

// utils

const arrToObject = (arr, type) => {
  return arr.reduce((acc, cur) => {
    switch (type) {
      case "initData":
        acc[cur.name] = {
          value: cur.value,
          touced: false,
        };
        break;
      case "error":
        acc[cur.name] = {
          error: cur.error,
          required: cur.required || false,
        };
        break;
      case "initError":
        acc[cur.name] = "";
    }

    return acc;
  }, {});
};

// conditions
