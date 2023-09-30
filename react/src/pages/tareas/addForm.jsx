import { Grid,TextField,Button,InputLabel,MenuItem,Select,InputAdornment } from "@mui/material";
import React,{useState,useEffect} from "react";
import { useDispatch,useSelector } from "react-redux";
import FormControl from '@mui/material/FormControl';
import HomeWorkIcon from '@mui/icons-material/HomeWork';
import { listEntidades } from '../../store/catalogos/thunk';
import { addTarea,getTarea,addLike } from '../../store/tareas/thunk';
import { useValidate } from '../../configs/hooks/useValidate';
import { schema } from './schema'
import { useNavigate, useParams } from "react-router-dom";
import { openSnackbar, openProgress, closeProgress } from "../../store/general";

const Form = () =>{
    const { id } = useParams();
    const [editMode,setEditMode] = useState(false);
    const navigateTo = useNavigate();
    const catalogosState = useSelector((state) => state.catalogos);
    const tareasState = useSelector((state) => state.tareas);
    const { isValidate, errors } = useValidate()
    const dispatch = useDispatch();
    const [formData,setFormData] = useState({
        titulo:'',
        descripcion:'',
        creador:'',
        idEntidad:1,
        likes: 0
    });

    useEffect(()=>{
        dispatch(listEntidades());
        async function check() {
            const payload = await dispatch(getTarea(id))     
            const data = payload.payload; 
            setEditMode(true);
            setFormData({
                titulo: data.titulo,
                descripcion: data.descripcion,
                creador: data.creador,
                idEntidad: data.estadorepublica_id,
                likes: data.likes
            }) ;
        }
        if(id) check();
            
    },[]);

    const handleValidate = async () => {        
        if (isValidate(formData, schema)){
            dispatch(openProgress());
            if(!editMode){
                handleSave();
            }else{
                handleUpdate();
            }
            dispatch(closeProgress());
        }
        navigateTo("/tareas");
    }

    const handleChange  = (prop) =>  (event) => {
        const { value } = event.target;    
        setFormData({
            ...formData,
            [prop]: value,
        })
    };

    const handleSave = async () =>{
        const res = await dispatch(addTarea(formData));
        const data = res.payload;
        dispatch(openSnackbar({message: data.msg,type: 'success'}));
    }

    const handleUpdate = async () =>{
        const res = await dispatch(addLike({'idTarea':id,'likes':Number(formData.likes)}));
        const data = res.payload;
        dispatch(openSnackbar({message: data.msg,type: 'success'}));
    }
    
    return (
        <>
        <Grid container spacing={3}>
            <Grid item xs={4}>
                <FormControl fullWidth>
                    <TextField 
                    id="titulo" 
                    name="titulo" 
                    placeholder="Titulo de la tarea" 
                    required 
                    autoFocus
                    value={formData.titulo}
                    label="Titulo" 
                    variant="outlined"
                    disabled={tareasState.isLoading || editMode}
                    InputProps={{ 
                        startAdornment: (
                            <InputAdornment position="start">
                            <HomeWorkIcon />
                            </InputAdornment>
                        ),
                    }} 
                    onChange={handleChange('titulo')}
                    error={errors.titulo?.error} 
                    helperText={errors.titulo?.message}
                    />
                </FormControl>
            </Grid>
            <Grid item xs={4}>
                <FormControl fullWidth>
                    <TextField 
                    id="descripcion" 
                    name="descripcion" 
                    value={formData.descripcion}
                    placeholder="Descripción de la tarea" 
                    required 
                    multiline
                    maxRows={2} 
                    disabled={tareasState.isLoading  || editMode}
                    label="Descripcion" 
                    variant="outlined"
                    InputProps={{ 
                        startAdornment: (
                            <InputAdornment position="start">
                            <HomeWorkIcon />
                            </InputAdornment>
                        ),
                    }} 
                    onChange={handleChange('descripcion')}
                    error={errors.descripcion?.error} 
                    helperText={errors.descripcion?.message}
                    />
                </FormControl>
            </Grid>
            <Grid item xs={4}>
                <FormControl fullWidth>
                <TextField 
                    id="creador" 
                    name="creador" 
                    placeholder="Creador de la tarea"
                    disabled={tareasState.isLoading  || editMode}
                    value={formData.creador}
                    required
                    label="Creador" 
                    variant="outlined"
                    InputProps={{ 
                        startAdornment: (
                            <InputAdornment position="start">
                            <HomeWorkIcon />
                            </InputAdornment>
                        ),
                    }} 
                    onChange={handleChange('creador')}
                    error={errors.creador?.error} 
                    helperText={errors.creador?.message}
                    />
                    </FormControl>
            </Grid>
            <Grid item xs={1}></Grid>
            <Grid item xs={4}>
                <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label">Entidad</InputLabel>
                    <Select id="idEntidad" name="idEntidad" disabled={catalogosState.isLoading || tareasState.isLoading  || editMode} label="Entidades" onChange={handleChange('idEntidad')} value={formData.idEntidad} variant="outlined" fullWidth>
                        {
                            catalogosState.entidades.map((row,k)=>(
                                <MenuItem value={row.id} key={k}>{row.estado}</MenuItem>
                            ))
                        }
                    </Select>
                </FormControl>
            </Grid>
            <Grid item xs={2}></Grid>
            <Grid item xs={4}>
                <FormControl fullWidth>
                    <TextField 
                    id="likes" 
                    name="likes" 
                    placeholder="Likes de la tarea" 
                    required
                    label="likes"
                    value={formData.likes}
                    disabled={tareasState.isLoading}
                    variant="outlined"
                    InputProps={{ 
                        startAdornment: (
                            <InputAdornment position="start">
                            <HomeWorkIcon />
                            </InputAdornment>
                        ),
                    }} 
                    onChange={handleChange('likes')}
                    error={errors.likes?.error} 
                    helperText={errors.likes?.message}
                    />
                </FormControl>
            </Grid>
            <Grid item xs={10}></Grid>
            <Grid item xs={2}>
                <Button variant="contained" onClick={handleValidate}>{!editMode ? 'Guardar' : 'Editar'}</Button>
            </Grid>
        </Grid>
        </>
    );
}

export default Form;