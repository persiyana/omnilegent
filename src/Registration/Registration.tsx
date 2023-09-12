
import {  
  Paper,
  TextField,
  Button,
  Avatar,
  Stack,
  Checkbox,
  FormControlLabel,
  Typography,
  Grid
} from "@mui/material";
import LockOutlinedIcon  from '@mui/icons-material/LockOutlined';
import { green } from '@mui/material/colors';
import { Wrapper } from "./Registration.styles";

const Registration: React.FC = () => {
  return (

    <Paper elevation={3}  sx={{p:4, width: '30%' }}>
      <Stack direction="column" spacing={1.5} alignItems="center">
        <Avatar sx={{ width: 56, height: 56, bgcolor: green[800] }}>
          <LockOutlinedIcon sx={{ width: 40, height: 40 }} />
        </Avatar>
        <Typography variant="h4" gutterBottom>Sign up</Typography>
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <TextField  color="success" label="First Name" type="text" variant="outlined" />
          </Grid>
          <Grid item xs={6}>
            <TextField  color="success" label="Last Name" type="text" variant="outlined" />
          </Grid>
          <Grid item xs={6}>
            <TextField  color="success" label="Email Address" type="text" variant="outlined" />
          </Grid>
          <Grid item xs={6}>
            <TextField  color="success" label="Username" type="text" variant="outlined" />
          </Grid>
          <Grid item xs={6}>
            <TextField  color="success" label="Password" type="password" variant="outlined" />
          </Grid>
          <Grid item xs={6}>
            <TextField  color="success" label="Confirm Password" type="password" variant="outlined" />
          </Grid>
        </Grid>
        <FormControlLabel
            control={<Checkbox value="remember" color="success" />}
            label="I accept the terms and conditions"
            
          />
        <Button color="success" variant="contained">Sign up</Button>

        <Wrapper>
          <p>Already have an account?  <a href="#">Sign in</a>
          </p>
          
        </Wrapper>

      </Stack>
    </Paper>
    );
}

export default Registration;