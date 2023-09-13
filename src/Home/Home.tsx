import { 
    Box, 

 } from "@mui/material";
import Footer from "../Footer/Footer";
import NavBar from "../NavBar/NavBar";
import { Content } from "../Content/Content";

const Home: React.FC = () => {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <NavBar/>
            <Content/>
            <Footer/>
        </Box>
    );
}

export default Home;