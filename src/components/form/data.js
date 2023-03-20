export const data = {
  title: "Personal info",
  description: "Please provide your name, email address , and phone number.",
  state: [
    {
      name: "name",
      label: "name",
      type: "text",
      placeholder: "e.g jhon doe",
      value: "",
      error: "name error",
      required: true,
    },
    {
      name: "email",
      label: "email address",
      type: "email",
      placeholder: "example@gmail.com",
      value: "",
      error: "",
      required: true,
    },
    {
      name: "number",
      label: "phone number",
      type: "number",
      placeholder: "e.g +1 234 567 890",
      value: "",
      error: "",
    },
  ],
};
