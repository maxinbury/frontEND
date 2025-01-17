import * as React from 'react';
import  { useEffect, useState } from "react";

import { useNavigate } from "react-router-dom";
import servicioUsuario from '../../../services/usuarios'

import  Clientes from '../../../components/Administracion/Clientes/Clientes'
import  TablaUsuarios from '../../../components/nivel3/agregarUsuario/TodosUsuarios'
import  useUser from '../../../hooks/useUser'
import BarraLAteral from '../../../components/Administracion/MenuizqAdmin'


import { ThemeProvider, createTheme } from '@mui/material/styles';


const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});


const drawerWidth = 240;

export default function MenuUsuario2() {
  const navigate = useNavigate();

  const [logueado, setLogueado] = useState(false) 


useEffect(() => {
  const loggedUserJSON = window.localStorage.getItem('loggedNoteAppUser')
  
  if (loggedUserJSON) {
    const user = JSON.parse(loggedUserJSON)
    if (user.nivel != 10){
      window.localStorage.removeItem('loggedNoteAppUser')
   navigate('/login')

    }else{

      setLogueado(true)
    }
  
    //servicioUsuario.setToken(user.token)  
   
    
  }
 
}, [])
  


  return (
   
<div> 
  { logueado ? <div> 
    <ThemeProvider theme={darkTheme}>
    <BarraLAteral>
    < Clientes />

   
 </BarraLAteral> 
 </ThemeProvider>
 </div>   :<div></div> } </div>
  );
}