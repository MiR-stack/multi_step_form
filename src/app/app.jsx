import Sidebar from "../components/sidebar";
import { Box, Container } from "./app.styled";

const App = () => {
  return (
    <Container>
      <Box>
        <Sidebar />
      </Box>
    </Container>
  );
};

export default App;
