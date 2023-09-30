import React,{useState} from 'react';
import {Grid,Avatar,Paper,TextField,Button,Box, Typography,Link} from '@mui/material';
import LockIcon from '@mui/icons-material/Lock';
import Logo from '../../components/Logo';
import {login} from '../../store/login/thunk';
import {useDispatch,useSelector} from 'react-redux';

const Login = () =>{
    
    const dispatch = useDispatch();
    const loginState = useSelector((state) => state.login);
    const [formData,setFormData] = useState({
        'email':'',
        'password':''
    });

    const handleSubmit = async (e) =>{
        e.preventDefault();
        await dispatch(login(formData));
    }

    const changeHandle = (event) => {
        const { name, value } = event.target;    
        setFormData({
            ...formData,
            [name]: value,
        })
    }

    const paperStyle = {
        padding:20,
        height:"70vh",
        width:280,
        margin:"20px auto"
    }

    const avatarStyle = {
        backgroundColor: "#db13cb"
    }

    const btnStyle = {
        margin:'8px 0'
    }

    return(
        <Grid>
            <Paper elevation={10} style={paperStyle}>
                <Grid align="center">
                    <Avatar style={avatarStyle}>
                        <LockIcon/>
                    </Avatar>
                    <h2>Acceder al sistema</h2>
                </Grid>
                <Box
                component="form"
                onSubmit={handleSubmit}
                sx={{
                    '& .MuiTextField-root': { m: 1, width: '100%' },
                    '& button': { m: 1, width: '100%' },
                }}
                noValidate
                autoComplete="off">
                    
                        <TextField id='email' name='email' variant="standard" label="E-mail" placeholder='Escriba su e-mail' onChange={changeHandle} fullWidth required autoFocus/>
                        <TextField id='password' name='password' variant="standard" label="Password" placeholder='Escriba su contraseña' onChange={changeHandle} type="password" fullWidth required/>
                        <Button style={btnStyle} type="submit" color="primary" variant="contained" fullWidth>Acceder</Button>
                    
                    <Typography>
                        <Link href="#">
                            ¿Olvidaste tu contraseña?
                        </Link>
                    </Typography>
                    <Logo style={{ alignSelf: 'center' }}/>
                    <h6>* Campo requerido</h6>
                </Box>
            </Paper>
        </Grid>
    );
}

export default Login;