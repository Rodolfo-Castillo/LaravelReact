import React,{ useEffect,useRef,useState } from 'react';
import { useDispatch,useSelector } from 'react-redux';
import { listTareas,addLike,deleteTarea } from '../../store/tareas/thunk';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import CardActions from "@mui/material/CardActions";
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import AddHomeWorkIcon from '@mui/icons-material/AddHomeWork';
import Typography from '@mui/material/Typography';
import Tooltip from '@mui/material/Tooltip';
import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt';
import DeleteIcon from '@mui/icons-material/Delete';
import { useNavigate } from "react-router-dom";
import { openSnackbar, openProgress, closeProgress } from "../../store/general";
import AlertConfirm from '../../components/AlertConfirm';
import EditIcon from '@mui/icons-material/Edit';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import InputAdornment from "@mui/material/InputAdornment";
import SearchIcon from '@mui/icons-material/Search';

const Tareas = () => {
    const alertRef = useRef();
    const navigateTo = useNavigate();
    const dispatch = useDispatch();
    const tareasState = useSelector((state) => state.tareas);
    const [deleteId, setDeleteId] = useState(0);
    const [search,setSearch] = useState("");

    useEffect(() =>{
        dispatch(listTareas());
    },[]);

    const handleClick = () => {
        navigateTo('/tarea');
    }

    const handleConfirmDelete = async (id) => {
        setDeleteId(id)                
        alertRef.current.handleClickOpen()
    }

    const handleLike = async (idTarea,likes) => {
        dispatch(openProgress());
        const like = Number(likes) + 1;
        const res = await dispatch(addLike({idTarea,'likes':like}));
        const data = res.payload;
        dispatch(openSnackbar({message: data.msg,type: 'success'}));
        dispatch(closeProgress());
    }

    const handleDelete = async () => {
        dispatch(openProgress());
        const res = await dispatch(deleteTarea(deleteId));
        const data = res.payload;
        dispatch(openSnackbar({message: data.msg,type: 'success'}));
        dispatch(closeProgress());
    }

    const actionsStyle = {
        display: "flex",
        justifyContent: "flex-end"
    }

    const cardStyle = {
        marginTop: "10px",
        marginBottom: "20px",
        backgroundColor:"#efefef"
    }

    const randomColor = () => {
        let hex = Math.floor(Math.random() * 0xFFFFFF);
        let color = "#" + hex.toString(16);
        return color;
    }

    return(
        <>
            <Grid container spacing={2} justifyContent="center">
                <Grid item xs={12}>
                    <FormControl fullWidth>
                        <TextField 
                        id="search" 
                        name="search" 
                        value={search}
                        placeholder="Buscar" 
                        label="Buscar" 
                        variant="outlined"
                        InputProps={{ 
                            startAdornment: (
                                <InputAdornment position="start">
                                <SearchIcon />
                                </InputAdornment>
                            ),
                        }} 
                        onChange={(e) => setSearch(e.target.value)}
                        />
                    </FormControl>
                </Grid>
                {
                    tareasState.tareasList.filter((item)=>{
                        if(search == ""){
                            return item;
                        }else if(item.titulo.toLowerCase().includes(search.toLowerCase()) 
                        || item.creador.toLowerCase().includes(search.toLowerCase())
                        || item.descripcion.toLowerCase().includes(search.toLowerCase())
                        || item.creador.toLowerCase().includes(search.toLowerCase())
                        || item.estado.toLowerCase().includes(search.toLowerCase())
                        || item.created_at.toLowerCase().includes(search.toLowerCase())
                        || !isNaN(search) && item.likes == Number(search)){
                            return item;
                        }
                    }).map((item,index)=>{
                        return(<Grid item xs={3} key={item.id != null ? item.id : index}>
                            <Card sx={{ maxWidth: 300 }} style={cardStyle}>
                                <CardHeader
                                avatar={
                                <Avatar sx={{ bgcolor: randomColor() }} aria-label="recipe">
                                    {item.titulo != null ? item.titulo.charAt(0) : ''}
                                </Avatar>
                                }
                                title={item.titulo}
                                subheader={item.descripcion}
                                />
                                 <CardContent>
                                    <Typography paragraph>
                                        {`Creado por: ${item.creador}`}
                                    </Typography>
                                    <Typography paragraph>
                                        {`Estado: ${item.estado}`}
                                    </Typography>
                                    <Typography paragraph>
                                        {`Creado: ${item.created_at}`}
                                    </Typography>
                                    <Typography paragraph>
                                        {`Likes: ${item.likes}`}
                                    </Typography>
                                </CardContent>
                                <CardActions style={actionsStyle}>
                                    <Tooltip title="Editar">
                                        <span>
                                        <IconButton onClick={()=> navigateTo(`/tarea/${item.id}`)} aria-label="Like" disabled={tareasState.isLoading} sx={{ "&:hover": { color: "blue" } }}>
                                            <EditIcon />
                                        </IconButton>
                                        </span>
                                    </Tooltip>
                                    <Tooltip title="Like">
                                        {!item.hasVoted ? 
                                        <span>
                                            <IconButton onClick={() => {handleLike(item.id,item.likes)}} aria-label="Like" disabled={tareasState.isLoading} sx={{ "&:hover": { color: "blue" } }}>
                                                <ThumbUpAltIcon />
                                            </IconButton>
                                        </span>
                                            :
                                            <IconButton aria-label="Like" sx={{ bgcolor: { color: "blue" } }}>
                                                <ThumbUpAltIcon />
                                            </IconButton>
                                        }
                                    </Tooltip>
                                    {item.likes == 0 &&
                                        <Tooltip title="Eliminar">
                                        <IconButton disabled={tareasState.isLoading} onClick={() => {handleConfirmDelete(item.id)}} aria-label="Eliminar" sx={{ "&:hover": { color: "red" } }}>
                                            <DeleteIcon />
                                        </IconButton>
                                    </Tooltip>
                                    }
                                </CardActions>
                            </Card>
                        </Grid>)
                    })
                }
                <Grid container justifyContent="flex-end">
                    <Tooltip title="Agregar Tarea">
                        <IconButton onClick={handleClick} aria-label="Agregar Tarea" size="large" url='/tareas/add'>
                            <AddHomeWorkIcon fontSize="inherit"/>
                        </IconButton>
                    </Tooltip>
                </Grid>
            </Grid>
            <AlertConfirm ref={alertRef} titulo={'Eliminar Tarea'} // contenido={'Los datos son correctos ?'}
            accion={handleDelete} />
        </>
    );
}

export default Tareas;
