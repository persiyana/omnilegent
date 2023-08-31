
import {  
  Paper,
  TextField,
  Button,
  Avatar,
  Stack,
  Checkbox,
  FormControlLabel,
  Link
} from "@mui/material";
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import { green } from '@mui/material/colors';


const Login: React.FC = () => {
  return (

    <Paper elevation={3}  sx={{p:4}}>
      <Stack direction="column" spacing={1.5} alignItems="center">
        <Avatar sx={{ width: 56, height: 56, bgcolor: green[800] }}>
          <PersonOutlineIcon sx={{ width: 40, height: 40 }} />
        </Avatar>
        <h1>Login</h1>
        <TextField  sx={{width: 300}} color="success" label="Username" type="text" variant="outlined" />
        <TextField sx={{width: 300}} color="success"  label="Password" type="password" variant="outlined" />
        <FormControlLabel
            control={<Checkbox value="remember" color="success" />}
            label="Remember me"
          />
        <Button color="success" variant="contained">Login</Button>
        <Link href="#" variant="body2">
          Forgot password?
        </Link>
        <Link href="#" variant="body2">
          Don't have an account? Sign Up
        </Link>
      </Stack>
    </Paper>
    );
}

export default Login;