import { useState, useEffect, useRef } from "react";
import DialogComponent from './modalver';
import Tooltip from '@mui/material/Tooltip';
import { useNavigate } from "react-router-dom";
import { TransformWrapper, TransformComponent } from 'react-zoom-pan-pinch';
import * as React from 'react';

import MuiAlert from '@mui/material/Alert';
import DialogActions from '@mui/material/DialogActions';
import servicioLotes from '../../services/lotes'
import NativeSelect from '@mui/material/NativeSelect';
import InputLabel from '@mui/material/InputLabel';
import Button from '@mui/material/Button';

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});



const Arg = () => {
  //configuracion de Hooks
  const dialogRef = useRef();
  const [info, setInfo] = React.useState(false);
  const [open, setOpen] = React.useState(false);
  const [lotes, setLotes] = React.useState();
  const [form, setForm] = useState({})
  const navigate = useNavigate();
  const getClients = async () => {

    const lotess = await servicioLotes.lista()

console.log(lotess[0])
    setLotes(lotess[0])

  }


  useEffect(() => {
    getClients()
  }, [])

  const handleOpenDialog = (p) => {
    setInfo(p)
    setForm({ mapa2: p,fraccion:1,manzana:1,lote:1 })
    dialogRef.current.openDialog();


  };
 
  return (
    <>


      <div  >
        <TransformWrapper>
          {({ zoomIn, zoomOut, resetTransform, ...rest }) => (
            <React.Fragment>
        
              <TransformComponent>

                {lotes ? <>

              
<svg width="296.926mm" height="209.973mm" version="1.2" baseProfile="tiny" viewBox="0 0 3507 2480">
 <title>Qt SVG Document</title>
 <desc>Generated with Qt</desc>
 <defs/>
 <g stroke="black" stroke-linejoin="bevel" fill="none" stroke-linecap="square" fill-rule="evenodd" stroke-width="1">
  <g stroke="#000000" stroke-linejoin="bevel" fill="none" stroke-linecap="square" font-family="MS Shell Dlg 2" font-weight="400" stroke-opacity="1" font-size="32.5" transform="matrix(1,0,0,1,0,0)" font-style="normal" stroke-width="1"/>
  <g stroke="#000000" stroke-linejoin="bevel" fill="none" stroke-linecap="square" font-family="MS Shell Dlg 2" font-weight="400" stroke-opacity="1" font-size="32.5" transform="matrix(1,0,0,1,0,0)" font-style="normal" stroke-width="1"/>
  <g stroke="#000000" stroke-linejoin="bevel" fill="none" stroke-linecap="square" font-family="MS Shell Dlg 2" font-weight="400" stroke-opacity="1" font-size="32.5" transform="matrix(11.8081,0,0,11.8081,0,0)" font-style="normal" stroke-width="1"/>
  <g stroke="#000000" stroke-linejoin="bevel" fill="none" stroke-linecap="square" font-family="MS Shell Dlg 2" font-weight="400" stroke-opacity="1" font-size="32.5" transform="matrix(0.999751,0,0,0.999751,0,0)" font-style="normal" stroke-width="1"/>
  <g stroke="none" fill="#ffffff" font-family="MS Shell Dlg 2" font-weight="400" fill-opacity="1" font-size="32.5" transform="matrix(0.999751,0,0,0.999751,0,0)" font-style="normal">

        {[0].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          console.log(objetoEncontrado)
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(0)}  fill-rule="evenodd" d="M-2,-2 L3510,-2 L3510,2483 L-2,2483 L-2,-2" vector-effect="none"/>
                </Tooltip>
                          );
                        })}
            
  </g>

        
     
     
        
  <g stroke="#000000" stroke-linejoin="bevel" fill="none" stroke-linecap="square" font-family="MS Shell Dlg 2" font-weight="400" stroke-opacity="1" font-size="32.5" transform="matrix(11.8081,0,0,11.8081,0,0)" font-style="normal" stroke-width="1"/>
  <g stroke="#000000" stroke-linejoin="bevel" fill="none" stroke-linecap="square" font-family="MS Shell Dlg 2" font-weight="400" stroke-opacity="1" font-size="32.5" transform="matrix(11.8081,0,0,11.8081,0,0)" font-style="normal" stroke-width="1"/>
  <g stroke="#000000" stroke-linejoin="bevel" fill="none" stroke-linecap="square" font-family="MS Shell Dlg 2" font-weight="400" stroke-opacity="1" font-size="32.5" transform="matrix(11.8081,0,0,11.8081,0,0)" font-style="normal" stroke-width="1"/>
  <g stroke="#000000" stroke-linejoin="bevel" fill="none" stroke-linecap="square" font-family="MS Shell Dlg 2" font-weight="400" stroke-opacity="1" font-size="32.5" transform="matrix(11.8081,0,0,11.8081,0,0)" font-style="normal" stroke-width="1"/>
  <g stroke="#000000" stroke-linejoin="bevel" fill="none" stroke-linecap="square" font-family="MS Shell Dlg 2" font-weight="400" stroke-opacity="1" font-size="32.5" transform="matrix(11.8081,0,0,11.8081,0,0)" font-style="normal" stroke-width="1"/>
  <g stroke="none" fill="#ffffff" font-family="MS Shell Dlg 2" font-weight="400" fill-opacity="1" font-size="32.5" transform="matrix(11.8081,0,0,11.8081,0,0)" font-style="normal">

        {[1].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(1)}  fill-rule="evenodd" d="M0,0 L297,0 L297,210 L0,210 L0,0" vector-effect="none"/>
               
                </Tooltip>
                          );
                        })}
  </g>

         
         
          
        
  <g stroke="#000000" stroke-linejoin="bevel" fill="none" stroke-linecap="square" font-family="MS Shell Dlg 2" font-weight="400" stroke-opacity="1" font-size="32.5" transform="matrix(11.8081,0,0,11.8081,0,0)" font-style="normal" stroke-width="1"/>
  <g stroke="none" fill="#000000" font-family="MS Shell Dlg 2" font-weight="400" fill-opacity="0" font-size="32.5" transform="matrix(0.999751,0,0,0.999751,0,0)" font-style="normal">
   <rect width="3508" x="0" height="2480" y="0"/>
  </g>
  <g stroke="#000000" stroke-linejoin="bevel" fill="none" stroke-linecap="square" font-family="MS Shell Dlg 2" font-weight="400" stroke-opacity="1" font-size="32.5" transform="matrix(0.999751,0,0,0.999751,0,0)" font-style="normal" stroke-width="1"/>
  <g stroke="#ff0000" stroke-linejoin="miter" fill="none" stroke-linecap="butt" font-family="MS Shell Dlg 2" font-weight="400" stroke-opacity="1" font-size="32.5" transform="matrix(0.999751,0,0,0.999751,0,0)" font-style="normal" stroke-miterlimit="2" stroke-width="3.07087">

        {[2].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(2)}  fill-rule="evenodd" d="M366.215,648.774 L2301.64,742.048" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[3].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(3)}  fill-rule="evenodd" d="M2301.64,742.048 L2298.48,758.041" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[4].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(4)}  fill-rule="evenodd" d="M3055.02,876.777 L3072.24,967.027" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[5].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(5)}  fill-rule="evenodd" d="M2298.48,758.041 L3055.02,876.777" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[6].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(6)}  fill-rule="evenodd" d="M366.215,648.774 L357.589,682.981" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[7].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(7)}  fill-rule="evenodd" d="M357.589,682.981 L347.87,711.289" vector-effect="none"/>
                </Tooltip>
                          );
                        })}
  </g>
  <g stroke="#a47158" stroke-linejoin="bevel" fill="none" stroke-linecap="square" font-family="MS Shell Dlg 2" font-weight="400" stroke-opacity="1" font-size="32.5" transform="matrix(0.999751,0,0,0.999751,0,0)" font-style="normal" stroke-width="3.07087">

        {[8].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(8)}  fill-rule="evenodd" d="M594.632,-95.0097 L589.531,49.703" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[9].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(9)}  fill-rule="evenodd" d="M589.531,49.703 L572.574,130.477" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[10].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(10)}  fill-rule="evenodd" d="M572.574,130.477 L553.998,192.567" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[11].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(11)}  fill-rule="evenodd" d="M553.998,192.567 L556.572,243.423" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[12].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(12)}  fill-rule="evenodd" d="M556.572,243.423 L544.429,371.886" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[13].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(13)}  fill-rule="evenodd" d="M544.429,371.886 L510.212,468.527" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[14].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(14)}  fill-rule="evenodd" d="M510.212,468.527 L476.284,511.506" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[15].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(15)}  fill-rule="evenodd" d="M476.284,511.506 L455.011,558.559" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[16].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(16)}  fill-rule="evenodd" d="M455.011,558.559 L451.03,601.102" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[17].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(17)}  fill-rule="evenodd" d="M451.03,601.102 L438.135,652.246" vector-effect="none"/>
                </Tooltip>
                          );
                        })}
  </g>
  <g stroke="#ff0000" stroke-linejoin="miter" fill="none" stroke-linecap="butt" font-family="MS Shell Dlg 2" font-weight="400" stroke-opacity="1" font-size="32.5" transform="matrix(0.999751,0,0,0.999751,0,0)" font-style="normal" stroke-miterlimit="2" stroke-width="3.07087">

        {[18].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(18)}  fill-rule="evenodd" d="M438.135,652.246 L2301.64,742.048" vector-effect="none"/>
                </Tooltip>
                          );
                        })}
  </g>
  <g stroke="#a47158" stroke-linejoin="bevel" fill="none" stroke-linecap="square" font-family="MS Shell Dlg 2" font-weight="400" stroke-opacity="1" font-size="32.5" transform="matrix(0.999751,0,0,0.999751,0,0)" font-style="normal" stroke-width="3.07087">

        {[19].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(19)}  fill-rule="evenodd" d="M2301.64,742.048 L2329.13,602.901" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[20].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(20)}  fill-rule="evenodd" d="M2329.13,602.901 L2376.84,610.391" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[21].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(21)}  fill-rule="evenodd" d="M2376.84,610.391 L2404.76,461.77" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[22].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(22)}  fill-rule="evenodd" d="M2404.76,461.77 L2358.28,454.462" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[23].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(23)}  fill-rule="evenodd" d="M2358.28,454.462 L2379.4,347.742" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[24].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(24)}  fill-rule="evenodd" d="M2379.4,347.742 L2459.78,360.383" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[25].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(25)}  fill-rule="evenodd" d="M2424.81,354.884 L2497.25,-30.8313" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[26].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(26)}  fill-rule="evenodd" d="M589.531,49.703 L595.185,-110.703" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[27].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(27)}  fill-rule="evenodd" d="M2459.78,360.383 L2574.03,-248" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[28].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(28)}  fill-rule="evenodd" d="M2329.13,602.901 L3063.08,718.093" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[29].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(29)}  fill-rule="evenodd" d="M2999.27,555.238 L3049.01,627.503" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[30].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(30)}  fill-rule="evenodd" d="M3049.01,627.503 L3076.01,681.681" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[31].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(31)}  fill-rule="evenodd" d="M3063.08,718.093 L3076.38,682.004" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[32].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(32)}  fill-rule="evenodd" d="M2411.82,615.881 L2439.73,467.26" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[33].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(33)}  fill-rule="evenodd" d="M2523.46,-33.7187 L2508.07,54.1849" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[34].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(34)}  fill-rule="evenodd" d="M2508.07,54.1849 L2489.7,158.464" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[35].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(35)}  fill-rule="evenodd" d="M2489.7,158.464 L2472.08,258.948" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[36].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(36)}  fill-rule="evenodd" d="M2478.11,259.002 L2495.51,159.666" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[37].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(37)}  fill-rule="evenodd" d="M2495.51,159.666 L2514.02,54.9609" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[38].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(38)}  fill-rule="evenodd" d="M2514.02,54.9609 L2529.52,-32.7473" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[39].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(39)}  fill-rule="evenodd" d="M2358.28,454.462 L2999.27,555.238" vector-effect="none"/>
                </Tooltip>
                          );
                        })}
  </g>
  <g stroke="#00ffff" stroke-linejoin="miter" fill="none" stroke-linecap="butt" font-family="MS Shell Dlg 2" font-weight="400" stroke-opacity="1" font-size="32.5" transform="matrix(0.999751,0,0,0.999751,0,0)" font-style="normal" stroke-miterlimit="2" stroke-width="3.07087">

        {[40].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(40)}  fill-rule="evenodd" d="M1533.66,736.784 L2357.37,776.429" vector-effect="none"/>
                </Tooltip>
                          );
                        })}
  </g>
  <g stroke="#a47158" stroke-linejoin="bevel" fill="none" stroke-linecap="square" font-family="MS Shell Dlg 2" font-weight="400" stroke-opacity="1" font-size="32.5" transform="matrix(0.999751,0,0,0.999751,0,0)" font-style="normal" stroke-width="3.07087">

        {[41].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(41)}  fill-rule="evenodd" d="M2391.23,787.651 L2365.21,921.149" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[42].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(42)}  fill-rule="evenodd" d="M2357.37,776.429 L2339.24,869.449" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[43].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(43)}  fill-rule="evenodd" d="M2336.81,881.924 L2330.22,915.731" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[44].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(44)}  fill-rule="evenodd" d="M2301.82,876.506 L2292.09,926.406" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[45].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(45)}  fill-rule="evenodd" d="M2239.21,790.879 L2232.14,827.16" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[46].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(46)}  fill-rule="evenodd" d="M2155.95,892.471 L2180.23,767.909" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[47].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(47)}  fill-rule="evenodd" d="M2377.35,939.609 L2426.93,947.285" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[48].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(48)}  fill-rule="evenodd" d="M2373.1,961.44 L2423.63,969.264" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[49].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(49)}  fill-rule="evenodd" d="M2517.83,877.825 L2531.61,807.11" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[50].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(50)}  fill-rule="evenodd" d="M2177.25,931.112 L2176.76,931.044 L2176.27,930.991 L2175.78,930.954 L2175.28,930.932 L2174.79,930.925 L2174.29,930.934 L2173.8,930.958 L2173.3,930.998 L2172.81,931.053 L2172.32,931.123 L2171.83,931.208 L2171.35,931.309 L2170.87,931.424 L2170.4,931.554 L2169.93,931.699 L2169.47,931.859 L2169.01,932.033 L2168.56,932.22 L2168.12,932.422 L2167.69,932.637 L2167.26,932.866 L2166.85,933.107 L2166.44,933.362 L2166.05,933.629 L2165.66,933.908 L2165.29,934.198 L2164.93,934.501 L2164.58,934.814 L2164.24,935.138 L2163.92,935.472 L2163.61,935.816 L2163.31,936.17 L2163.03,936.533 L2162.76,936.904 L2162.5,937.283 L2162.26,937.67 L2162.04,938.065 L2161.83,938.466 L2161.64,938.873 L2161.46,939.286 L2161.3,939.704 L2161.16,940.127 L2161.03,940.554 L2160.92,940.985 L2160.83,941.419 L2160.83,941.419" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[51].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(51)}  fill-rule="evenodd" d="M2177.25,931.112 L2307.55,951.289" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[52].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(52)}  fill-rule="evenodd" d="M2133.12,1009.57 L2146.83,939.252" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[53].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(53)}  fill-rule="evenodd" d="M2171.16,888.4 L2295.74,907.693" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[54].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(54)}  fill-rule="evenodd" d="M2197.15,821.742 L2344.1,844.499" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[55].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(55)}  fill-rule="evenodd" d="M2307.55,951.289 L2307.8,952.371 L2308.09,953.445 L2308.42,954.509 L2308.8,955.562 L2309.21,956.603 L2309.67,957.63 L2310.17,958.642 L2310.7,959.638 L2311.28,960.617 L2311.89,961.578 L2312.54,962.518 L2313.23,963.438 L2313.95,964.336 L2314.71,965.212 L2315.5,966.062 L2316.32,966.888 L2317.18,967.688 L2318.06,968.461 L2318.98,969.205 L2319.68,969.742" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[56].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(56)}  fill-rule="evenodd" d="M2377.35,939.609 L2377.1,938.526 L2376.81,937.453 L2376.48,936.389 L2376.1,935.336 L2375.68,934.295 L2375.23,933.268 L2374.73,932.256 L2374.19,931.259 L2373.62,930.28 L2373.01,929.32 L2372.36,928.379 L2371.67,927.459 L2370.95,926.561 L2370.19,925.686 L2369.4,924.835 L2368.58,924.01 L2367.72,923.21 L2366.84,922.437 L2365.92,921.693 L2365.21,921.149" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[57].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(57)}  fill-rule="evenodd" d="M2330.22,915.731 L2329.06,916.129 L2327.92,916.563 L2326.8,917.033 L2325.7,917.537 L2324.62,918.075 L2323.55,918.647 L2322.52,919.251 L2321.5,919.887 L2320.52,920.554 L2319.55,921.251 L2318.62,921.978 L2317.72,922.734 L2316.84,923.517 L2316,924.327 L2315.19,925.163 L2314.41,926.023 L2313.67,926.907 L2312.96,927.814 L2312.29,928.742 L2311.8,929.458" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[58].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(58)}  fill-rule="evenodd" d="M2354.68,975.167 L2355.84,974.769 L2356.98,974.334 L2358.1,973.865 L2359.2,973.361 L2360.28,972.823 L2361.34,972.251 L2362.38,971.647 L2363.4,971.011 L2364.38,970.344 L2365.35,969.646 L2366.28,968.919 L2367.18,968.164 L2368.06,967.381 L2368.9,966.571 L2369.71,965.735 L2370.49,964.874 L2371.23,963.99 L2371.94,963.084 L2372.61,962.156 L2373.1,961.44" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[59].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(59)}  fill-rule="evenodd" d="M2535.14,983.892 L2410.27,1008.33" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[60].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(60)}  fill-rule="evenodd" d="M2252.55,1031.53 L2311.94,1033.07" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[61].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(61)}  fill-rule="evenodd" d="M2347.47,1033.99 L2414.87,1035.74" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[62].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(62)}  fill-rule="evenodd" d="M2252.55,1031.53 L2311.94,1033.07" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[63].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(63)}  fill-rule="evenodd" d="M2165.68,842.57 L2339.24,869.449" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[64].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(64)}  fill-rule="evenodd" d="M2311.8,929.458 L2181.51,909.28" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[65].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(65)}  fill-rule="evenodd" d="M2169.94,894.638 L2169.87,895.075 L2169.81,895.513 L2169.77,895.954 L2169.74,896.395 L2169.74,896.837 L2169.75,897.279 L2169.77,897.72 L2169.82,898.161 L2169.88,898.599 L2169.96,899.035 L2170.05,899.469 L2170.17,899.899 L2170.3,900.326 L2170.44,900.748 L2170.6,901.166 L2170.78,901.578 L2170.98,901.985 L2171.19,902.385 L2171.41,902.778 L2171.66,903.164 L2171.91,903.542 L2172.18,903.912 L2172.47,904.274 L2172.77,904.626 L2173.08,904.969 L2173.41,905.301 L2173.75,905.624 L2174.1,905.936 L2174.46,906.236 L2174.84,906.525 L2175.22,906.803 L2175.62,907.068 L2176.03,907.32 L2176.44,907.56 L2176.87,907.787 L2177.3,908 L2177.75,908.2 L2178.2,908.386 L2178.65,908.557 L2179.12,908.715 L2179.58,908.857 L2180.06,908.986 L2180.54,909.099 L2181.02,909.197 L2181.51,909.28" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[66].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(66)}  fill-rule="evenodd" d="M2169.94,894.638 L2174.81,869.688" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[67].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(67)}  fill-rule="evenodd" d="M2191.24,859.38 L2190.75,859.312 L2190.25,859.26 L2189.76,859.222 L2189.26,859.2 L2188.77,859.193 L2188.27,859.202 L2187.78,859.227 L2187.28,859.266 L2186.79,859.321 L2186.3,859.391 L2185.82,859.477 L2185.33,859.577 L2184.85,859.693 L2184.38,859.823 L2183.91,859.968 L2183.45,860.127 L2182.99,860.301 L2182.54,860.489 L2182.1,860.69 L2181.67,860.906 L2181.25,861.134 L2180.83,861.376 L2180.43,861.63 L2180.03,861.897 L2179.65,862.176 L2179.27,862.467 L2178.91,862.769 L2178.56,863.083 L2178.22,863.406 L2177.9,863.741 L2177.59,864.085 L2177.29,864.439 L2177.01,864.801 L2176.74,865.173 L2176.48,865.552 L2176.24,865.939 L2176.02,866.333 L2175.81,866.734 L2175.62,867.142 L2175.44,867.555 L2175.28,867.973 L2175.14,868.396 L2175.01,868.823 L2174.9,869.254 L2174.81,869.688 L2174.81,869.688" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[68].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(68)}  fill-rule="evenodd" d="M2191.24,859.38 L2336.81,881.924" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[69].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(69)}  fill-rule="evenodd" d="M2299.39,888.981 L2334.38,894.399" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[70].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(70)}  fill-rule="evenodd" d="M2180.23,767.909 L2165.68,842.57" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[71].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(71)}  fill-rule="evenodd" d="M2165.68,842.57 L2227.28,852.11" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[72].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(72)}  fill-rule="evenodd" d="M2227.28,852.11 L2243.1,770.933" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[73].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(73)}  fill-rule="evenodd" d="M2551.55,1019.57 L2429.82,1043.4" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[74].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(74)}  fill-rule="evenodd" d="M2545.32,1007.83 L2426.77,1031.03" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[75].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(75)}  fill-rule="evenodd" d="M2524.74,985.929 L2530.83,1010.66" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[76].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(76)}  fill-rule="evenodd" d="M2514.33,987.966 L2520.42,1012.7" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[77].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(77)}  fill-rule="evenodd" d="M2503.93,990.002 L2510.02,1014.74" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[78].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(78)}  fill-rule="evenodd" d="M2493.52,992.039 L2499.61,1016.77" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[79].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(79)}  fill-rule="evenodd" d="M2483.11,994.076 L2489.21,1018.81" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[80].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(80)}  fill-rule="evenodd" d="M2472.71,996.112 L2478.8,1020.85" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[81].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(81)}  fill-rule="evenodd" d="M2462.3,998.149 L2468.39,1022.88" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[82].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(82)}  fill-rule="evenodd" d="M2451.89,1000.19 L2457.99,1024.92" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[83].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(83)}  fill-rule="evenodd" d="M2441.49,1002.22 L2447.58,1026.96" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[84].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(84)}  fill-rule="evenodd" d="M2431.08,1004.26 L2437.18,1028.99" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[85].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(85)}  fill-rule="evenodd" d="M2420.68,1006.3 L2426.77,1031.03" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[86].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(86)}  fill-rule="evenodd" d="M2410.27,1008.33 L2418.05,968.401" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[87].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(87)}  fill-rule="evenodd" d="M2514.33,987.966 L2509.83,964.936" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[88].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(88)}  fill-rule="evenodd" d="M2493.52,992.039 L2488.73,967.557" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[89].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(89)}  fill-rule="evenodd" d="M2472.71,996.112 L2469.8,969.908" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[90].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(90)}  fill-rule="evenodd" d="M2451.89,1000.19 L2452.4,970.855" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[91].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(91)}  fill-rule="evenodd" d="M2431.08,1004.26 L2435.82,970.292" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[92].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(92)}  fill-rule="evenodd" d="M2397.65,865.643 L2376.66,862.392" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[93].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(93)}  fill-rule="evenodd" d="M2396.44,871.88 L2375.44,868.629" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[94].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(94)}  fill-rule="evenodd" d="M2392.79,890.593 L2371.8,887.342" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[95].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(95)}  fill-rule="evenodd" d="M2388.72,911.488 L2367.72,908.238" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[96].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(96)}  fill-rule="evenodd" d="M2533.97,795.006 L2517.83,877.825" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[97].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(97)}  fill-rule="evenodd" d="M2517.83,877.825 L2523.68,885.157" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[98].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(98)}  fill-rule="evenodd" d="M2535.14,983.892 L2410.27,1008.33" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[99].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(99)}  fill-rule="evenodd" d="M2328.74,867.823 L2333.61,842.873" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[100].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(100)}  fill-rule="evenodd" d="M2318.25,866.198 L2323.11,841.248" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[101].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(101)}  fill-rule="evenodd" d="M2307.75,864.573 L2312.61,839.622" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[102].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(102)}  fill-rule="evenodd" d="M2297.25,862.947 L2302.12,837.997" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[103].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(103)}  fill-rule="evenodd" d="M2286.76,861.322 L2291.62,836.371" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[104].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(104)}  fill-rule="evenodd" d="M2276.26,859.696 L2281.12,834.746" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[105].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(105)}  fill-rule="evenodd" d="M2265.76,858.071 L2270.63,833.12" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[106].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(106)}  fill-rule="evenodd" d="M2255.27,856.445 L2260.13,831.495" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[107].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(107)}  fill-rule="evenodd" d="M2244.77,854.82 L2249.63,829.869" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[108].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(108)}  fill-rule="evenodd" d="M2391.57,896.83 L2370.58,893.579" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[109].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(109)}  fill-rule="evenodd" d="M2397.65,865.643 L2376.66,862.392" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[110].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(110)}  fill-rule="evenodd" d="M2376.66,862.392 L2365.21,921.149" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[111].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(111)}  fill-rule="evenodd" d="M2163.12,1029.2 L2311.94,1033.07" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[112].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(112)}  fill-rule="evenodd" d="M2160.83,941.419 L2147.12,1011.74" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[113].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(113)}  fill-rule="evenodd" d="M2108.07,1041.69 L2108.36,1042.54 L2108.67,1043.37 L2109.03,1044.2 L2109.41,1045.02 L2109.82,1045.82 L2110.27,1046.61 L2110.75,1047.38 L2111.26,1048.14 L2111.79,1048.89 L2112.36,1049.61 L2112.95,1050.32 L2113.57,1051.01 L2114.22,1051.68 L2114.89,1052.33 L2115.59,1052.96 L2116.31,1053.56 L2117.06,1054.14 L2117.83,1054.7 L2118.62,1055.24 L2119.43,1055.75 L2120.25,1056.23 L2121.1,1056.69 L2121.97,1057.12 L2122.85,1057.53 L2123.75,1057.9 L2124.66,1058.25 L2125.58,1058.57 L2126.52,1058.86 L2127.47,1059.13 L2128.42,1059.36 L2129.39,1059.56 L2130.36,1059.73 L2131.34,1059.88 L2132.32,1059.99 L2133.31,1060.07 L2134.3,1060.12 L2135.29,1060.14 L2136.28,1060.13 L2137.27,1060.08 L2138.26,1060.01 L2139.25,1059.91 L2140.23,1059.77 L2141.2,1059.61 L2142.17,1059.41 L2143.13,1059.19 L2144.08,1058.93 L2145.02,1058.65 L2145.94,1058.33 L2146.86,1057.99 L2147.76,1057.62 L2148.64,1057.22 L2149.51,1056.8 L2150.37,1056.35 L2151.2,1055.87 L2152.01,1055.36 L2152.81,1054.84 L2153.58,1054.28 L2154.33,1053.7 L2155.06,1053.1 L2155.77,1052.48 L2156.44,1051.84 L2157.1,1051.17 L2157.73,1050.49 L2158.33,1049.79 L2158.9,1049.06 L2159.44,1048.32 L2159.96,1047.57 L2160.44,1046.8 L2160.89,1046.01 L2161.32,1045.21 L2161.71,1044.4 L2162.07,1043.58 L2162.4,1042.74 L2162.69,1041.9 L2162.7,1041.86" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[114].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(114)}  fill-rule="evenodd" d="M2163.12,1029.2 L2162.88,1028.34 L2162.61,1027.49 L2162.31,1026.65 L2161.97,1025.82 L2161.6,1025 L2161.2,1024.19 L2160.77,1023.39 L2160.31,1022.61 L2159.81,1021.84 L2159.29,1021.09 L2158.74,1020.36 L2158.16,1019.64 L2157.55,1018.94 L2156.92,1018.26 L2156.26,1017.61 L2155.57,1016.97 L2154.86,1016.35 L2154.12,1015.76 L2153.37,1015.19 L2152.59,1014.64 L2151.79,1014.12 L2150.97,1013.62 L2150.13,1013.15 L2149.27,1012.71 L2148.4,1012.29 L2147.51,1011.9 L2147.12,1011.74" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[115].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(115)}  fill-rule="evenodd" d="M2301.82,876.506 L2292.09,926.406" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[116].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(116)}  fill-rule="evenodd" d="M2287.82,874.338 L2278.1,924.239" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[117].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(117)}  fill-rule="evenodd" d="M2227.28,852.11 L2232.14,827.16" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[118].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(118)}  fill-rule="evenodd" d="M2209.78,849.401 L2214.65,824.451" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[119].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(119)}  fill-rule="evenodd" d="M2192.29,846.692 L2197.15,821.742" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[120].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(120)}  fill-rule="evenodd" d="M2162.7,1041.86 L2311.56,1045.73" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[121].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(121)}  fill-rule="evenodd" d="M2347.06,1046.65 L2403.86,1048.12" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[122].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(122)}  fill-rule="evenodd" d="M2311.56,1045.73 L2308.84,1128.88" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[123].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(123)}  fill-rule="evenodd" d="M2276.06,1044.8 L2273.82,1113.24" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[124].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(124)}  fill-rule="evenodd" d="M1492.05,879.403 L1589.4,884.815" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[125].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(125)}  fill-rule="evenodd" d="M1602.7,898.24 L1602.72,897.799 L1602.72,897.357 L1602.71,896.915 L1602.68,896.474 L1602.63,896.034 L1602.57,895.596 L1602.49,895.16 L1602.39,894.727 L1602.28,894.297 L1602.14,893.871 L1601.99,893.449 L1601.83,893.032 L1601.65,892.621 L1601.45,892.215 L1601.24,891.816 L1601.01,891.424 L1600.77,891.039 L1600.51,890.662 L1600.23,890.293 L1599.95,889.933 L1599.65,889.582 L1599.33,889.241 L1599,888.909 L1598.66,888.588 L1598.31,888.278 L1597.94,887.979 L1597.57,887.692 L1597.18,887.416 L1596.78,887.153 L1596.37,886.902 L1595.95,886.664 L1595.53,886.439 L1595.09,886.228 L1594.65,886.03 L1594.2,885.847 L1593.74,885.677 L1593.28,885.522 L1592.81,885.381 L1592.33,885.255 L1591.85,885.144 L1591.37,885.048 L1590.88,884.967 L1590.39,884.901 L1589.9,884.85 L1589.4,884.815" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[126].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(126)}  fill-rule="evenodd" d="M1943.84,904.512 L1631.94,887.179" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[127].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(127)}  fill-rule="evenodd" d="M1950.07,1019.04 L1957.14,917.937" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[128].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(128)}  fill-rule="evenodd" d="M2135.27,924.609 L2039.98,909.852" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[129].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(129)}  fill-rule="evenodd" d="M1986.37,906.874 L1985.88,906.854 L1985.38,906.85 L1984.89,906.861 L1984.39,906.888 L1983.9,906.929 L1983.41,906.987 L1982.92,907.059 L1982.43,907.147 L1981.95,907.249 L1981.47,907.367 L1981,907.499 L1980.53,907.646 L1980.07,907.808 L1979.62,907.984 L1979.17,908.174 L1978.73,908.377 L1978.3,908.594 L1977.87,908.825 L1977.46,909.068 L1977.05,909.325 L1976.66,909.593 L1976.28,909.874 L1975.91,910.166 L1975.55,910.47 L1975.2,910.785 L1974.86,911.111 L1974.54,911.446 L1974.23,911.792 L1973.94,912.147 L1973.65,912.511 L1973.39,912.883 L1973.14,913.264 L1972.9,913.652 L1972.68,914.047 L1972.47,914.449 L1972.28,914.857 L1972.11,915.271 L1971.95,915.69 L1971.81,916.114 L1971.68,916.542 L1971.57,916.973 L1971.48,917.407 L1971.41,917.844 L1971.35,918.284 L1971.31,918.724 L1971.31,918.724" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[130].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(130)}  fill-rule="evenodd" d="M2354.68,975.167 L2355.84,974.769 L2356.98,974.334 L2358.1,973.865 L2359.2,973.361 L2360.28,972.823 L2361.34,972.251 L2362.38,971.647 L2363.4,971.011 L2364.38,970.344 L2365.35,969.646 L2366.28,968.919 L2367.18,968.164 L2368.06,967.381 L2368.9,966.571 L2369.71,965.735 L2370.49,964.874 L2371.23,963.99 L2371.94,963.084 L2372.61,962.156 L2373.1,961.44" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[131].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(131)}  fill-rule="evenodd" d="M2347.06,1046.65 L2344.36,1129.2" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[132].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(132)}  fill-rule="evenodd" d="M2368.36,1047.2 L2366.19,1113.58" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[133].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(133)}  fill-rule="evenodd" d="M2347.06,1046.65 L2403.86,1048.12" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[134].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(134)}  fill-rule="evenodd" d="M2429.82,1043.4 L2429.33,1043.48 L2428.84,1043.57 L2428.36,1043.68 L2427.88,1043.8 L2427.41,1043.94 L2426.94,1044.09 L2426.48,1044.26 L2426.02,1044.44 L2425.58,1044.63 L2425.14,1044.84 L2424.71,1045.07 L2424.29,1045.3 L2423.87,1045.55 L2423.47,1045.81 L2423.08,1046.09 L2422.7,1046.37 L2422.33,1046.67 L2421.97,1046.98 L2421.63,1047.3 L2421.3,1047.63 L2420.98,1047.97 L2420.67,1048.32 L2420.38,1048.68 L2420.1,1049.05 L2419.84,1049.42 L2419.59,1049.81 L2419.36,1050.2 L2419.14,1050.6 L2418.94,1051.01 L2418.75,1051.42 L2418.58,1051.84 L2418.43,1052.26 L2418.3,1052.68 L2418.18,1053.11 L2418.07,1053.55 L2417.99,1053.99 L2417.92,1054.43 L2417.87,1054.87 L2417.84,1055.31 L2417.82,1055.56" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[135].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(135)}  fill-rule="evenodd" d="M2417.82,1055.56 L2416.94,1082.65" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[136].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(136)}  fill-rule="evenodd" d="M2416.94,1082.65 L2416.93,1083.09 L2416.95,1083.53 L2416.97,1083.97 L2417.02,1084.41 L2417.08,1084.85 L2417.16,1085.29 L2417.26,1085.72 L2417.38,1086.15 L2417.51,1086.57 L2417.65,1087 L2417.82,1087.41 L2418,1087.83 L2418.2,1088.23 L2418.41,1088.63 L2418.63,1089.02 L2418.88,1089.41 L2419.14,1089.79 L2419.41,1090.16 L2419.69,1090.52 L2420,1090.87 L2420.31,1091.21 L2420.64,1091.54 L2420.98,1091.86 L2421.33,1092.17 L2421.69,1092.47 L2422.07,1092.76 L2422.46,1093.04 L2422.86,1093.3 L2423.26,1093.55 L2423.68,1093.79 L2424.11,1094.02 L2424.54,1094.23 L2424.99,1094.43 L2425.44,1094.61 L2425.89,1094.78 L2426.36,1094.94 L2426.83,1095.08 L2427.3,1095.21 L2427.78,1095.32 L2428.27,1095.41 L2428.75,1095.5 L2429.24,1095.56 L2429.74,1095.61 L2430.23,1095.65 L2430.72,1095.67 L2431.22,1095.68 L2431.72,1095.67 L2431.78,1095.66" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[137].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(137)}  fill-rule="evenodd" d="M2402.74,1082.28 L2402.73,1083.16 L2402.75,1084.04 L2402.81,1084.92 L2402.9,1085.8 L2403.02,1086.67 L2403.18,1087.55 L2403.38,1088.41 L2403.6,1089.27 L2403.86,1090.12 L2404.16,1090.96 L2404.48,1091.79 L2404.84,1092.62 L2405.23,1093.43 L2405.66,1094.22 L2406.11,1095.01 L2406.59,1095.78 L2407.11,1096.53 L2407.65,1097.27 L2408.22,1097.99 L2408.82,1098.69 L2409.45,1099.37 L2410.1,1100.04 L2410.78,1100.68 L2411.48,1101.3 L2412.21,1101.9 L2412.96,1102.47 L2413.73,1103.03 L2414.52,1103.55 L2415.34,1104.06 L2416.17,1104.53 L2417.02,1104.98 L2417.89,1105.41 L2418.77,1105.8 L2419.67,1106.17 L2420.58,1106.51 L2421.51,1106.83 L2422.45,1107.11 L2423.39,1107.36 L2424.35,1107.59 L2425.32,1107.78 L2426.29,1107.95 L2427.27,1108.08 L2428.25,1108.18 L2429.24,1108.25 L2430.22,1108.3 L2431.21,1108.31 L2432.2,1108.29 L2433.19,1108.24 L2433.94,1108.18" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[138].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(138)}  fill-rule="evenodd" d="M2403.86,1048.12 L2402.74,1082.28" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[139].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(139)}  fill-rule="evenodd" d="M2417.29,1071.77 L2566.45,1042.58" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[140].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(140)}  fill-rule="evenodd" d="M2533.88,1023.03 L2546.56,1074.52" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[141].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(141)}  fill-rule="evenodd" d="M2544.28,1020.99 L2556.7,1071.41" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[142].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(142)}  fill-rule="evenodd" d="M2560.78,1043.69 L2566.84,1068.29" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[143].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(143)}  fill-rule="evenodd" d="M2523.47,1025.07 L2536.21,1076.77" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[144].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(144)}  fill-rule="evenodd" d="M2513.06,1027.1 L2525.85,1079.01" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[145].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(145)}  fill-rule="evenodd" d="M2502.66,1029.14 L2515.5,1081.25" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[146].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(146)}  fill-rule="evenodd" d="M2492.25,1031.18 L2505.14,1083.49" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[147].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(147)}  fill-rule="evenodd" d="M2481.85,1033.21 L2494.78,1085.74" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[148].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(148)}  fill-rule="evenodd" d="M2471.44,1035.25 L2484.43,1087.98" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[149].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(149)}  fill-rule="evenodd" d="M2461.03,1037.29 L2474.07,1090.22" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[150].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(150)}  fill-rule="evenodd" d="M2450.63,1039.32 L2463.5,1091.58" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[151].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(151)}  fill-rule="evenodd" d="M2440.22,1041.36 L2452.93,1092.94" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[152].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(152)}  fill-rule="evenodd" d="M2429.82,1043.4 L2442.36,1094.3" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[153].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(153)}  fill-rule="evenodd" d="M2425.5,1070.17 L2431.78,1095.66" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[154].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(154)}  fill-rule="evenodd" d="M2310.7,1072.18 L2275.2,1071.26" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[155].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(155)}  fill-rule="evenodd" d="M2310.28,1084.84 L2274.78,1083.91" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[156].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(156)}  fill-rule="evenodd" d="M2309.87,1097.49 L2274.37,1096.57" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[157].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(157)}  fill-rule="evenodd" d="M2311.11,1059.52 L2275.61,1058.6" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[158].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(158)}  fill-rule="evenodd" d="M2346.65,1059.31 L2367.94,1059.86" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[159].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(159)}  fill-rule="evenodd" d="M2346.23,1071.96 L2367.53,1072.51" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[160].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(160)}  fill-rule="evenodd" d="M2345.82,1084.62 L2367.12,1085.17" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[161].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(161)}  fill-rule="evenodd" d="M2345.4,1097.27 L2366.7,1097.83" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[162].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(162)}  fill-rule="evenodd" d="M2345.4,1097.27 L2366.7,1097.83" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[163].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(163)}  fill-rule="evenodd" d="M1953.74,1103.17 L2309.32,1114.36" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[164].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(164)}  fill-rule="evenodd" d="M1955.71,1044.72 L1953.74,1103.17" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[165].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(165)}  fill-rule="evenodd" d="M2146.83,939.252 L2146.91,938.815 L2146.97,938.376 L2147.01,937.936 L2147.03,937.495 L2147.04,937.053 L2147.03,936.611 L2147,936.17 L2146.96,935.729 L2146.9,935.291 L2146.82,934.854 L2146.72,934.421 L2146.61,933.99 L2146.48,933.564 L2146.33,933.142 L2146.17,932.724 L2145.99,932.312 L2145.8,931.905 L2145.59,931.505 L2145.36,931.112 L2145.12,930.726 L2144.86,930.348 L2144.59,929.978 L2144.31,929.616 L2144.01,929.264 L2143.69,928.921 L2143.37,928.588 L2143.03,928.266 L2142.68,927.954 L2142.31,927.654 L2141.94,927.364 L2141.55,927.087 L2141.16,926.822 L2140.75,926.569 L2140.33,926.33 L2139.91,926.103 L2139.47,925.89 L2139.03,925.69 L2138.58,925.504 L2138.12,925.333 L2137.66,925.175 L2137.19,925.032 L2136.72,924.904 L2136.24,924.791 L2135.75,924.693 L2135.27,924.609 L2135.27,924.609" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[166].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(166)}  fill-rule="evenodd" d="M1955.71,1044.72 L2108.07,1041.69" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[167].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(167)}  fill-rule="evenodd" d="M1971.31,918.724 L1964.6,1014.71" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[168].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(168)}  fill-rule="evenodd" d="M1964.6,1014.71 L1964.57,1015.26 L1964.57,1015.82 L1964.58,1016.37 L1964.62,1016.92 L1964.68,1017.47 L1964.76,1018.02 L1964.86,1018.56 L1964.98,1019.1 L1965.13,1019.64 L1965.29,1020.17 L1965.48,1020.7 L1965.69,1021.22 L1965.91,1021.74 L1966.16,1022.24 L1966.42,1022.74 L1966.71,1023.23 L1967.01,1023.71 L1967.34,1024.18 L1967.68,1024.64 L1968.04,1025.09 L1968.42,1025.53 L1968.81,1025.96 L1969.22,1026.37 L1969.65,1026.78 L1970.09,1027.16 L1970.54,1027.54 L1971.01,1027.9 L1971.5,1028.24 L1972,1028.57 L1972.51,1028.88 L1973.03,1029.18 L1973.56,1029.46 L1974.11,1029.73 L1974.66,1029.97 L1975.23,1030.2 L1975.8,1030.41 L1976.38,1030.61 L1976.97,1030.78 L1977.56,1030.94 L1978.16,1031.08 L1978.76,1031.2 L1979.37,1031.3 L1979.99,1031.38 L1980.6,1031.45 L1981.22,1031.49 L1981.84,1031.52 L1982.46,1031.52 L1982.72,1031.52" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[169].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(169)}  fill-rule="evenodd" d="M1982.72,1031.52 L2107.75,1029.03" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[170].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(170)}  fill-rule="evenodd" d="M2133.12,1009.57 L2132.14,1009.66 L2131.15,1009.78 L2130.18,1009.92 L2129.2,1010.1 L2128.24,1010.31 L2127.29,1010.55 L2126.34,1010.82 L2125.41,1011.11 L2124.48,1011.44 L2123.58,1011.79 L2122.68,1012.17 L2121.8,1012.58 L2120.94,1013.02 L2120.1,1013.48 L2119.27,1013.97 L2118.47,1014.49 L2117.68,1015.03 L2116.92,1015.59 L2116.17,1016.18 L2115.46,1016.79 L2114.76,1017.42 L2114.09,1018.07 L2113.45,1018.75 L2112.84,1019.44 L2112.25,1020.15 L2111.69,1020.88 L2111.16,1021.63 L2110.66,1022.39 L2110.18,1023.17 L2109.74,1023.96 L2109.33,1024.76 L2108.96,1025.58 L2108.61,1026.41 L2108.3,1027.25 L2108.02,1028.1 L2107.77,1028.95 L2107.75,1029.03" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[171].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(171)}  fill-rule="evenodd" d="M2133.31,1060.07 L2131.71,1108.77" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[172].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(172)}  fill-rule="evenodd" d="M2029.16,970.277 L2138.63,981.324" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[173].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(173)}  fill-rule="evenodd" d="M2095.75,918.49 L2074.45,1029.69" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[174].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(174)}  fill-rule="evenodd" d="M2029.16,970.277 L2018.96,1030.8" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[175].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(175)}  fill-rule="evenodd" d="M1967.89,967.643 L2029.16,970.277" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[176].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(176)}  fill-rule="evenodd" d="M1492.05,879.403 L1589.4,884.815" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[177].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(177)}  fill-rule="evenodd" d="M1602.7,898.24 L1595.62,999.34" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[178].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(178)}  fill-rule="evenodd" d="M1595.62,999.34 L1595.58,1000.22 L1595.57,1001.11 L1595.59,1001.99 L1595.65,1002.87 L1595.75,1003.75 L1595.87,1004.63 L1596.04,1005.5 L1596.23,1006.37 L1596.46,1007.23 L1596.73,1008.08 L1597.02,1008.92 L1597.35,1009.76 L1597.72,1010.58 L1598.11,1011.39 L1598.54,1012.19 L1598.99,1012.97 L1599.48,1013.74 L1600,1014.5 L1600.54,1015.23 L1601.12,1015.95 L1601.72,1016.66 L1602.35,1017.34 L1603.01,1018 L1603.69,1018.64 L1604.4,1019.26 L1605.13,1019.86 L1605.88,1020.44 L1606.66,1020.99 L1607.45,1021.51 L1608.27,1022.02 L1609.1,1022.49 L1609.96,1022.94 L1610.83,1023.36 L1611.72,1023.76 L1612.62,1024.13 L1613.53,1024.47 L1614.46,1024.78 L1615.4,1025.06 L1616.35,1025.31 L1617.31,1025.53 L1618.28,1025.73 L1619.26,1025.89 L1620.24,1026.02 L1621.22,1026.12 L1622.21,1026.19" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[179].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(179)}  fill-rule="evenodd" d="M1622.21,1026.19 L1955.71,1044.72" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[180].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(180)}  fill-rule="evenodd" d="M1957.14,917.937 L1957.16,917.495 L1957.16,917.053 L1957.15,916.611 L1957.12,916.17 L1957.07,915.73 L1957.01,915.292 L1956.93,914.856 L1956.83,914.423 L1956.71,913.993 L1956.58,913.567 L1956.43,913.145 L1956.27,912.728 L1956.09,912.317 L1955.89,911.911 L1955.68,911.512 L1955.45,911.12 L1955.21,910.735 L1954.95,910.358 L1954.67,909.989 L1954.39,909.629 L1954.09,909.278 L1953.77,908.937 L1953.44,908.605 L1953.1,908.284 L1952.75,907.974 L1952.38,907.675 L1952.01,907.388 L1951.62,907.112 L1951.22,906.849 L1950.81,906.598 L1950.39,906.36 L1949.97,906.136 L1949.53,905.924 L1949.09,905.727 L1948.64,905.543 L1948.18,905.373 L1947.72,905.218 L1947.25,905.077 L1946.77,904.951 L1946.29,904.84 L1945.81,904.744 L1945.32,904.663 L1944.83,904.597 L1944.34,904.547 L1943.84,904.512" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[181].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(181)}  fill-rule="evenodd" d="M1631.94,887.179 L1631.44,887.159 L1630.94,887.155 L1630.45,887.166 L1629.95,887.193 L1629.46,887.234 L1628.97,887.292 L1628.48,887.364 L1627.99,887.452 L1627.51,887.554 L1627.03,887.672 L1626.56,887.804 L1626.09,887.951 L1625.63,888.113 L1625.18,888.288 L1624.73,888.478 L1624.29,888.682 L1623.86,888.899 L1623.43,889.13 L1623.02,889.373 L1622.62,889.629 L1622.22,889.898 L1621.84,890.179 L1621.47,890.471 L1621.11,890.775 L1620.76,891.09 L1620.42,891.415 L1620.1,891.751 L1619.79,892.097 L1619.5,892.452 L1619.21,892.815 L1618.95,893.188 L1618.7,893.568 L1618.46,893.957 L1618.24,894.352 L1618.03,894.754 L1617.84,895.162 L1617.67,895.576 L1617.51,895.995 L1617.37,896.418 L1617.24,896.846 L1617.13,897.277 L1617.04,897.712 L1616.97,898.149 L1616.91,898.588 L1616.87,899.029 L1616.87,899.029" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[182].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(182)}  fill-rule="evenodd" d="M1616.87,899.029 L1609.8,1000.13" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[183].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(183)}  fill-rule="evenodd" d="M1609.8,1000.13 L1609.78,1000.57 L1609.77,1001.01 L1609.79,1001.45 L1609.82,1001.89 L1609.86,1002.33 L1609.93,1002.77 L1610.01,1003.21 L1610.11,1003.64 L1610.22,1004.07 L1610.35,1004.5 L1610.5,1004.92 L1610.67,1005.34 L1610.85,1005.75 L1611.04,1006.15 L1611.26,1006.55 L1611.49,1006.94 L1611.73,1007.33 L1611.99,1007.71 L1612.26,1008.08 L1612.55,1008.44 L1612.85,1008.79 L1613.17,1009.13 L1613.49,1009.46 L1613.83,1009.78 L1614.19,1010.09 L1614.55,1010.39 L1614.93,1010.68 L1615.32,1010.95 L1615.72,1011.22 L1616.12,1011.47 L1616.54,1011.7 L1616.97,1011.93 L1617.4,1012.14 L1617.85,1012.34 L1618.3,1012.52 L1618.76,1012.69 L1619.22,1012.85 L1619.69,1012.99 L1620.17,1013.11 L1620.65,1013.22 L1621.13,1013.32 L1621.62,1013.4 L1622.11,1013.47 L1622.6,1013.52 L1623.09,1013.55" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[184].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(184)}  fill-rule="evenodd" d="M1623.09,1013.55 L1935.01,1030.89" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[185].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(185)}  fill-rule="evenodd" d="M1935.01,1030.89 L1935.5,1030.91 L1936,1030.91 L1936.49,1030.9 L1936.99,1030.87 L1937.48,1030.83 L1937.97,1030.77 L1938.46,1030.7 L1938.95,1030.61 L1939.43,1030.51 L1939.91,1030.39 L1940.38,1030.26 L1940.85,1030.11 L1941.31,1029.95 L1941.77,1029.78 L1942.21,1029.59 L1942.65,1029.38 L1943.08,1029.17 L1943.51,1028.94 L1943.92,1028.69 L1944.33,1028.44 L1944.72,1028.17 L1945.1,1027.89 L1945.47,1027.59 L1945.83,1027.29 L1946.18,1026.97 L1946.52,1026.65 L1946.84,1026.31 L1947.15,1025.97 L1947.44,1025.61 L1947.73,1025.25 L1947.99,1024.88 L1948.24,1024.5 L1948.48,1024.11 L1948.7,1023.71 L1948.91,1023.31 L1949.1,1022.9 L1949.27,1022.49 L1949.43,1022.07 L1949.57,1021.65 L1949.7,1021.22 L1949.81,1020.79 L1949.9,1020.35 L1949.97,1019.92 L1950.03,1019.48 L1950.07,1019.04" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[186].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(186)}  fill-rule="evenodd" d="M1950.07,1019.04 L1957.14,917.937" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[187].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(187)}  fill-rule="evenodd" d="M1891.59,1041.16 L1887.4,1101.08" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[188].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(188)}  fill-rule="evenodd" d="M1866.78,1039.78 L1862.55,1100.29" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[189].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(189)}  fill-rule="evenodd" d="M1841.97,1038.4 L1837.69,1099.51" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[190].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(190)}  fill-rule="evenodd" d="M1817.15,1037.02 L1812.84,1098.73" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[191].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(191)}  fill-rule="evenodd" d="M1792.34,1035.65 L1787.99,1097.94" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[192].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(192)}  fill-rule="evenodd" d="M1767.53,1034.27 L1763.13,1097.16" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[193].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(193)}  fill-rule="evenodd" d="M1742.72,1032.89 L1738.28,1096.38" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[194].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(194)}  fill-rule="evenodd" d="M1717.91,1031.51 L1713.43,1095.59" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[195].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(195)}  fill-rule="evenodd" d="M1693.1,1030.13 L1688.57,1094.81" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[196].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(196)}  fill-rule="evenodd" d="M1668.29,1028.75 L1663.72,1094.03" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[197].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(197)}  fill-rule="evenodd" d="M1622.21,1026.19 L1617.47,1093.95" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[198].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(198)}  fill-rule="evenodd" d="M1638.87,1093.24 L1887.4,1101.08" vector-effect="none"/>
                </Tooltip>
                          );
                        })}
  </g>
  <g stroke="#828282" stroke-linejoin="miter" fill="none" stroke-linecap="butt" font-family="MS Shell Dlg 2" font-weight="400" stroke-opacity="1" font-size="32.5" transform="matrix(0.999751,0,0,0.999751,0,0)" font-style="normal" stroke-miterlimit="2" stroke-width="3.07087">

        {[199].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(199)}  fill-rule="evenodd" d="M2982.89,865.459 L2991.64,923.37" vector-effect="none"/>
                </Tooltip>
                          );
                        })}
  </g>
  <g stroke="#00ffff" stroke-linejoin="miter" fill="none" stroke-linecap="butt" font-family="MS Shell Dlg 2" font-weight="400" stroke-opacity="1" font-size="32.5" transform="matrix(0.999751,0,0,0.999751,0,0)" font-style="normal" stroke-miterlimit="2" stroke-width="3.07087">

        {[200].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(200)}  fill-rule="evenodd" d="M1495.95,734.967 L2357.37,776.429" vector-effect="none"/>
                </Tooltip>
                          );
                        })}
  </g>
  <g stroke="#a47158" stroke-linejoin="bevel" fill="none" stroke-linecap="square" font-family="MS Shell Dlg 2" font-weight="400" stroke-opacity="1" font-size="32.5" transform="matrix(0.999751,0,0,0.999751,0,0)" font-style="normal" stroke-width="3.07087">

        {[201].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(201)}  fill-rule="evenodd" d="M2357.37,776.429 L2243.1,770.933" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[202].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(202)}  fill-rule="evenodd" d="M2344.1,844.499 L2357.37,776.429" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[203].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(203)}  fill-rule="evenodd" d="M2441.34,780.466 L2403.9,778.666" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[204].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(204)}  fill-rule="evenodd" d="M2391.23,787.651 L2376.66,862.392" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[205].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(205)}  fill-rule="evenodd" d="M2367.72,908.238 L2365.21,921.149" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[206].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(206)}  fill-rule="evenodd" d="M2376.66,862.392 L2375.44,868.629" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[207].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(207)}  fill-rule="evenodd" d="M2982.89,865.459 L2993.15,933.389" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[208].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(208)}  fill-rule="evenodd" d="M2299.39,888.981 L2292.09,926.406" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[209].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(209)}  fill-rule="evenodd" d="M2301.82,876.506 L2299.39,888.981" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[210].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(210)}  fill-rule="evenodd" d="M2287.82,874.338 L2278.1,924.239" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[211].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(211)}  fill-rule="evenodd" d="M2273.83,872.171 L2264.1,922.071" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[212].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(212)}  fill-rule="evenodd" d="M2259.83,870.004 L2250.11,919.904" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[213].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(213)}  fill-rule="evenodd" d="M2245.84,867.836 L2236.11,917.737" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[214].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(214)}  fill-rule="evenodd" d="M2231.84,865.669 L2222.12,915.569" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[215].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(215)}  fill-rule="evenodd" d="M2217.85,863.502 L2208.12,913.402" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[216].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(216)}  fill-rule="evenodd" d="M2203.85,861.334 L2194.13,911.234" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[217].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(217)}  fill-rule="evenodd" d="M2467.01,947.884 L2524.42,940.75" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[218].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(218)}  fill-rule="evenodd" d="M2469.8,969.909 L2528.69,962.592" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[219].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(219)}  fill-rule="evenodd" d="M2243.1,770.933 L2180.23,767.909" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[220].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(220)}  fill-rule="evenodd" d="M2441.34,780.466 L2403.9,778.666" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[221].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(221)}  fill-rule="evenodd" d="M2366.98,829.336 L2366.72,829.456" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[222].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(222)}  fill-rule="evenodd" d="M2367.02,829.141 L2366.42,829.412" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[223].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(223)}  fill-rule="evenodd" d="M2367.06,828.946 L2366.13,829.368" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[224].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(224)}  fill-rule="evenodd" d="M2367.1,828.752 L2365.83,829.324" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[225].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(225)}  fill-rule="evenodd" d="M2367.14,828.557 L2365.54,829.28" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[226].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(226)}  fill-rule="evenodd" d="M2367.18,828.362 L2365.24,829.235" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[227].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(227)}  fill-rule="evenodd" d="M2367.21,828.167 L2364.95,829.191" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[228].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(228)}  fill-rule="evenodd" d="M2367.25,827.972 L2364.65,829.147" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[229].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(229)}  fill-rule="evenodd" d="M2367.29,827.777 L2364.36,829.103" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[230].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(230)}  fill-rule="evenodd" d="M2367.33,827.582 L2364.06,829.059" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[231].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(231)}  fill-rule="evenodd" d="M2367.37,827.387 L2363.81,828.995" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[232].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(232)}  fill-rule="evenodd" d="M2367.41,827.192 L2363.47,828.97" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[233].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(233)}  fill-rule="evenodd" d="M2367.45,826.997 L2363.47,828.797" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[234].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(234)}  fill-rule="evenodd" d="M2367.31,826.879 L2363.5,828.603" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[235].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(235)}  fill-rule="evenodd" d="M2367.02,826.833 L2363.54,828.41" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[236].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(236)}  fill-rule="evenodd" d="M2366.73,826.788 L2363.57,828.216" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[237].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(237)}  fill-rule="evenodd" d="M2366.44,826.742 L2363.61,828.023" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[238].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(238)}  fill-rule="evenodd" d="M2366.15,826.696 L2363.64,827.829" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[239].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(239)}  fill-rule="evenodd" d="M2365.86,826.65 L2363.68,827.636" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[240].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(240)}  fill-rule="evenodd" d="M2365.57,826.604 L2363.71,827.442" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[241].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(241)}  fill-rule="evenodd" d="M2365.28,826.558 L2363.75,827.249" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[242].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(242)}  fill-rule="evenodd" d="M2364.99,826.512 L2363.78,827.055" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[243].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(243)}  fill-rule="evenodd" d="M2364.69,826.466 L2363.82,826.862" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[244].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(244)}  fill-rule="evenodd" d="M2364.4,826.42 L2364.33,826.452" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[245].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(245)}  fill-rule="evenodd" d="M2364.14,826.537 L2363.86,826.668" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[246].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(246)}  fill-rule="evenodd" d="M2364.06,826.396 L2363.89,826.475" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[247].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(247)}  fill-rule="evenodd" d="M2365.21,945.253 L2365.08,943.266 L2364.73,941.3 L2364.16,939.373 L2363.39,937.505 L2362.42,935.714 L2361.25,934.017 L2359.9,932.429 L2358.39,930.967 L2356.72,929.645 L2354.91,928.474 L2352.98,927.467 L2350.96,926.634 L2348.85,925.981 L2346.67,925.516 L2344.46,925.243 L2342.23,925.164 L2340,925.281 L2337.79,925.592 L2335.63,926.095 L2333.54,926.783 L2331.53,927.652 L2329.62,928.692 L2327.84,929.893 L2326.2,931.244 L2324.72,932.732 L2323.41,934.342 L2322.28,936.06 L2321.34,937.867 L2320.61,939.748 L2320.09,941.684 L2319.78,943.656 L2319.69,945.645 L2319.82,947.632 L2320.17,949.598 L2320.74,951.525 L2321.51,953.392 L2322.48,955.184 L2323.65,956.881 L2325,958.469 L2326.51,959.931 L2328.18,961.253 L2329.99,962.424 L2331.92,963.431 L2333.94,964.264 L2336.05,964.917 L2338.23,965.382 L2340.44,965.655 L2342.67,965.733 L2344.9,965.617 L2347.1,965.306 L2349.27,964.803 L2351.36,964.114 L2353.37,963.246 L2355.28,962.206 L2357.06,961.005 L2358.7,959.654 L2360.18,958.166 L2361.49,956.556 L2362.62,954.838 L2363.56,953.031 L2364.29,951.15 L2364.81,949.214 L2365.12,947.242 L2365.21,945.253" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[248].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(248)}  fill-rule="evenodd" d="M2366.95,829.491 L2367.47,826.903" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[249].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(249)}  fill-rule="evenodd" d="M2366.95,829.491 L2363.44,828.965" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[250].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(250)}  fill-rule="evenodd" d="M2363.44,828.965 L2363.91,826.343" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[251].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(251)}  fill-rule="evenodd" d="M2363.37,825.545 L2368.37,826.319" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[252].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(252)}  fill-rule="evenodd" d="M2368.37,826.319 L2367.58,830.313" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[253].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(253)}  fill-rule="evenodd" d="M2362.58,829.539 L2367.58,830.313" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[254].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(254)}  fill-rule="evenodd" d="M2363.37,825.545 L2362.58,829.539" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[255].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(255)}  fill-rule="evenodd" d="M2348.94,826.638 L2381.55,831.658" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[256].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(256)}  fill-rule="evenodd" d="M2381.87,830.021 L2349.26,825.014" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[257].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(257)}  fill-rule="evenodd" d="M2523.46,-33.7187 L2508.07,54.1849" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[258].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(258)}  fill-rule="evenodd" d="M2508.07,54.1849 L2489.7,158.464" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[259].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(259)}  fill-rule="evenodd" d="M2478.11,259.002 L2495.51,159.666" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[260].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(260)}  fill-rule="evenodd" d="M2495.51,159.666 L2514.02,54.9609" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[261].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(261)}  fill-rule="evenodd" d="M2514.02,54.9609 L2529.52,-32.7473" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[262].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(262)}  fill-rule="evenodd" d="M2213,1415.94 L2291.2,1414.92" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[263].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(263)}  fill-rule="evenodd" d="M2307.5,1397.84 L2306.42,1398.39 L2305.37,1398.97 L2304.34,1399.59 L2303.34,1400.24 L2302.36,1400.92 L2301.41,1401.62 L2300.48,1402.36 L2299.59,1403.13 L2298.73,1403.92 L2297.9,1404.74 L2297.1,1405.58 L2296.33,1406.45 L2295.6,1407.35 L2294.91,1408.26 L2294.25,1409.2 L2293.62,1410.15 L2293.04,1411.13 L2292.49,1412.12 L2291.99,1413.13 L2291.52,1414.15 L2291.2,1414.92" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[264].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(264)}  fill-rule="evenodd" d="M2307.5,1397.84 L2310.47,1262.7" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[265].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(265)}  fill-rule="evenodd" d="M2346.19,1253.83 L2343.01,1398.46" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[266].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(266)}  fill-rule="evenodd" d="M2360.11,1427.33 L2360.16,1426.23 L2360.16,1425.12 L2360.12,1424.02 L2360.04,1422.92 L2359.92,1421.82 L2359.75,1420.72 L2359.54,1419.63 L2359.28,1418.55 L2358.99,1417.48 L2358.65,1416.42 L2358.27,1415.36 L2357.85,1414.32 L2357.39,1413.3 L2356.89,1412.29 L2356.35,1411.29 L2355.78,1410.31 L2355.16,1409.36 L2354.51,1408.42 L2353.82,1407.5 L2353.09,1406.6 L2352.33,1405.73 L2351.54,1404.88 L2350.71,1404.06 L2349.86,1403.26 L2348.97,1402.49 L2348.05,1401.75 L2347.1,1401.03 L2346.13,1400.35 L2345.13,1399.7 L2344.1,1399.07 L2343.05,1398.49 L2343.01,1398.46" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[267].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(267)}  fill-rule="evenodd" d="M2360.11,1427.33 L2415.53,1449.02" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[268].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(268)}  fill-rule="evenodd" d="M2415.93,1473.37 L2350.12,1447.62" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[269].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(269)}  fill-rule="evenodd" d="M2291.57,1437.07 L2292.04,1438.09 L2292.55,1439.1 L2293.1,1440.09 L2293.69,1441.06 L2294.31,1442.02 L2294.97,1442.95 L2295.67,1443.86 L2296.41,1444.75 L2297.18,1445.62 L2297.98,1446.46 L2298.81,1447.28 L2299.68,1448.07 L2300.58,1448.83 L2301.5,1449.57 L2302.46,1450.27 L2303.44,1450.95 L2304.45,1451.59 L2305.48,1452.2 L2306.53,1452.78 L2307.61,1453.33 L2308.71,1453.84 L2309.82,1454.32 L2310.96,1454.77 L2312.11,1455.18 L2313.28,1455.55 L2314.46,1455.88 L2315.65,1456.18 L2316.86,1456.44 L2318.07,1456.67 L2319.29,1456.85 L2320.52,1457 L2321.76,1457.11 L2322.99,1457.18 L2324.23,1457.21 L2325.47,1457.2 L2326.71,1457.16 L2327.95,1457.08 L2329.18,1456.95 L2330.41,1456.79 L2331.62,1456.6 L2332.84,1456.36 L2334.04,1456.09 L2335.23,1455.78 L2336.4,1455.43 L2337.57,1455.05 L2338.71,1454.63 L2339.84,1454.17 L2340.95,1453.68 L2342.04,1453.16 L2343.11,1452.6 L2344.16,1452.01 L2345.19,1451.38 L2346.18,1450.73 L2347.16,1450.04 L2348.1,1449.33 L2349.02,1448.59 L2349.91,1447.81 L2350.12,1447.62" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[270].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(270)}  fill-rule="evenodd" d="M2347.18,1208.49 L2346.19,1253.83" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[271].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(271)}  fill-rule="evenodd" d="M2310.47,1262.7 L2311.66,1208.71" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[272].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(272)}  fill-rule="evenodd" d="M2311.66,1208.71 L2312.01,1192.88" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[273].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(273)}  fill-rule="evenodd" d="M2347.51,1193.56 L2347.18,1208.49" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[274].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(274)}  fill-rule="evenodd" d="M2426.22,1453.2 L2430.4,1454.76 L2434.63,1456.18 L2438.92,1457.48 L2443.25,1458.63 L2447.63,1459.66 L2452.04,1460.54 L2456.49,1461.29 L2460.96,1461.9 L2465.45,1462.37 L2469.96,1462.7 L2474.48,1462.89 L2479.01,1462.94 L2483.53,1462.85 L2488.05,1462.62 L2492.55,1462.25 L2497.04,1461.73 L2501.51,1461.08 L2505.94,1460.29 L2510.35,1459.36 L2514.71,1458.3 L2519.03,1457.1 L2523.3,1455.77 L2524.47,1455.38" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[275].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(275)}  fill-rule="evenodd" d="M2416.23,1473.49 L2421.21,1475.34 L2426.25,1477.04 L2431.36,1478.58 L2436.52,1479.97 L2441.74,1481.19 L2447,1482.24 L2452.3,1483.13 L2457.63,1483.86 L2462.99,1484.42 L2468.36,1484.82 L2473.75,1485.04 L2479.14,1485.1 L2484.53,1484.99 L2489.91,1484.71 L2495.28,1484.27 L2500.63,1483.66 L2505.95,1482.88 L2511.24,1481.94 L2516.49,1480.84 L2521.69,1479.57 L2526.84,1478.14 L2531.93,1476.55 L2534.59,1475.65" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[276].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(276)}  fill-rule="evenodd" d="M2415.53,1449.02 L2426.22,1453.2" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[277].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(277)}  fill-rule="evenodd" d="M2173.03,1438.62 L2149.06,1718.66" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[278].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(278)}  fill-rule="evenodd" d="M2291.57,1437.07 L2173.03,1438.62" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[279].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(279)}  fill-rule="evenodd" d="M2213,1415.94 L2291.2,1414.92" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[280].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(280)}  fill-rule="evenodd" d="M2307.5,1397.84 L2310.47,1262.7" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[281].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(281)}  fill-rule="evenodd" d="M2360.11,1427.33 L2415.53,1449.02" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[282].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(282)}  fill-rule="evenodd" d="M2347.51,1193.56 L2347.18,1208.49" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[283].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(283)}  fill-rule="evenodd" d="M2415.53,1449.02 L2426.22,1453.2" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[284].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(284)}  fill-rule="evenodd" d="M2416.23,1473.49 L2415.93,1473.37" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[285].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(285)}  fill-rule="evenodd" d="M2814.16,1571.11 L2489.48,1484.74" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[286].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(286)}  fill-rule="evenodd" d="M2213,1415.94 L2213.36,1438.09" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[287].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(287)}  fill-rule="evenodd" d="M3546.87,888.261 L3518.44,886.283 L3489.96,885.19 L3461.45,884.984 L3432.95,885.665 L3404.5,887.232 L3379.14,889.379" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[288].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(288)}  fill-rule="evenodd" d="M3553.63,825.239 L3522.74,823.089 L3491.78,821.901 L3460.79,821.677 L3429.81,822.418 L3398.88,824.121 L3391.87,824.642" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[289].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(289)}  fill-rule="evenodd" d="M1686.26,1114.74 L2261.58,1129.61" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[290].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(290)}  fill-rule="evenodd" d="M2261.58,1129.61 L2271.02,1129.85" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[291].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(291)}  fill-rule="evenodd" d="M2271.02,1129.85 L2275.72,1129.96" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[292].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(292)}  fill-rule="evenodd" d="M2275.72,1129.96 L2283.53,1130.15" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[293].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(293)}  fill-rule="evenodd" d="M2283.53,1130.15 L2289.74,1130.28" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[294].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(294)}  fill-rule="evenodd" d="M2289.74,1130.28 L2297.18,1130.41" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[295].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(295)}  fill-rule="evenodd" d="M2297.18,1130.41 L2303.65,1130.51" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[296].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(296)}  fill-rule="evenodd" d="M2303.65,1130.51 L2310.89,1130.58" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[297].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(297)}  fill-rule="evenodd" d="M2310.89,1130.58 L2317.44,1130.61" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[298].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(298)}  fill-rule="evenodd" d="M2317.44,1130.61 L2324.55,1130.6" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[299].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(299)}  fill-rule="evenodd" d="M2324.55,1130.6 L2331.11,1130.55" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[300].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(300)}  fill-rule="evenodd" d="M2331.11,1130.55 L2359.61,1129.78 L2388.06,1128.13 L2416.43,1125.59 L2444.68,1122.17 L2472.78,1117.88 L2500.7,1112.71 L2528.39,1106.68 L2555.84,1099.79 L2582.99,1092.05 L2609.83,1083.47 L2617.64,1080.79" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[301].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(301)}  fill-rule="evenodd" d="M2617.64,1080.79 L2623.75,1078.65" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[302].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(302)}  fill-rule="evenodd" d="M2623.75,1078.65 L2630.34,1076.28" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[303].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(303)}  fill-rule="evenodd" d="M2630.34,1076.28 L2636.4,1074.06" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[304].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(304)}  fill-rule="evenodd" d="M2636.4,1074.06 L2643.08,1071.57" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[305].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(305)}  fill-rule="evenodd" d="M2643.08,1071.57 L2649.04,1069.31" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[306].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(306)}  fill-rule="evenodd" d="M2649.04,1069.31 L2655.88,1066.7" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[307].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(307)}  fill-rule="evenodd" d="M2655.88,1066.7 L2661.58,1064.5" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[308].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(308)}  fill-rule="evenodd" d="M2661.58,1064.5 L2668.74,1061.72" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[309].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(309)}  fill-rule="evenodd" d="M2668.74,1061.72 L2673.04,1060.04" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[310].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(310)}  fill-rule="evenodd" d="M2673.04,1060.04 L2681.7,1056.66" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[311].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(311)}  fill-rule="evenodd" d="M2681.7,1056.66 L3079.46,900.967" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[312].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(312)}  fill-rule="evenodd" d="M3088.15,897.568 L3079.46,900.967" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[313].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(313)}  fill-rule="evenodd" d="M3092.52,895.861 L3088.15,897.568" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[314].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(314)}  fill-rule="evenodd" d="M3099.83,893.022 L3092.52,895.861" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[315].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(315)}  fill-rule="evenodd" d="M3105.71,890.752 L3099.83,893.022" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[316].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(316)}  fill-rule="evenodd" d="M3112.8,888.041 L3105.71,890.752" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[317].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(317)}  fill-rule="evenodd" d="M3119.05,885.68 L3112.8,888.041" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[318].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(318)}  fill-rule="evenodd" d="M3126.1,883.053 L3119.05,885.68" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[319].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(319)}  fill-rule="evenodd" d="M3132.55,880.686 L3126.1,883.053" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[320].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(320)}  fill-rule="evenodd" d="M3139.62,878.144 L3132.55,880.686" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[321].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(321)}  fill-rule="evenodd" d="M3146.24,875.815 L3139.62,878.144" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[322].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(322)}  fill-rule="evenodd" d="M3270.87,841.616 L3240.79,848.251 L3210.99,855.818 L3181.5,864.308 L3152.36,873.709 L3146.24,875.815" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[323].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(323)}  fill-rule="evenodd" d="M3390.34,956.244 L3385.6,956.731 L3381.55,957.266" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[324].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(324)}  fill-rule="evenodd" d="M3381.55,957.266 L3380.75,957.394 L3379.97,957.547 L3379.19,957.725 L3378.41,957.926 L3377.65,958.151 L3376.89,958.4 L3376.15,958.673 L3375.41,958.968 L3374.69,959.286 L3373.98,959.627 L3373.28,959.989 L3372.6,960.372 L3371.94,960.777 L3371.29,961.202 L3370.66,961.647 L3370.04,962.112 L3369.44,962.595 L3368.87,963.096 L3368.31,963.615 L3367.78,964.152 L3367.37,964.588" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[325].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(325)}  fill-rule="evenodd" d="M3356.77,971.12 L3357.53,970.881 L3358.28,970.618 L3359.02,970.332 L3359.75,970.023 L3360.46,969.692 L3361.16,969.339 L3361.85,968.964 L3362.52,968.568 L3363.18,968.151 L3363.82,967.714 L3364.44,967.258 L3365.04,966.782 L3365.63,966.288 L3366.19,965.776 L3366.74,965.247 L3367.26,964.701 L3367.37,964.588" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[326].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(326)}  fill-rule="evenodd" d="M3356.72,971.142 L3356.52,971.242 L3356.32,971.242 L3356.02,971.342 L3355.82,971.442 L3355.62,971.542 L3355.32,971.742 L3355.12,971.842 L3354.92,971.942 L3354.72,972.042 L3354.52,972.242 L3354.32,972.342 L3354.12,972.542 L3353.92,972.642 L3353.72,972.842 L3353.52,973.042 L3353.42,973.242 L3353.22,973.342 L3353.02,973.542 L3352.92,973.742 L3352.82,973.942 L3352.62,974.142 L3352.52,974.342 L3352.42,974.542 L3352.32,974.742 L3352.22,974.942 L3352.12,975.142" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[327].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(327)}  fill-rule="evenodd" d="M3352.14,975.117 L3350.56,979.132 L3349.14,983.193 L3347.88,987.295 L3347.5,988.635" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[328].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(328)}  fill-rule="evenodd" d="M3333.15,985.523 L3334.2,981.34 L3335.1,977.127 L3335.16,976.76" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[329].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(329)}  fill-rule="evenodd" d="M3335.16,976.76 L3335.26,976.214 L3335.33,975.665 L3335.37,975.114 L3335.4,974.562 L3335.41,974.01 L3335.39,973.457 L3335.35,972.906 L3335.29,972.356 L3335.21,971.808 L3335.11,971.263 L3334.99,970.722 L3334.84,970.185 L3334.68,969.653 L3334.49,969.126 L3334.28,968.605 L3334.06,968.091 L3333.81,967.584 L3333.54,967.086 L3333.26,966.596 L3332.95,966.115 L3332.63,965.644 L3332.28,965.183 L3331.92,964.733 L3331.55,964.295 L3331.15,963.869 L3330.74,963.455 L3330.32,963.054 L3329.87,962.667 L3329.69,962.515" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[330].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(330)}  fill-rule="evenodd" d="M3329.72,962.542 L3329.52,962.442 L3329.42,962.342 L3329.22,962.242 L3329.12,962.142 L3328.92,962.042 L3328.82,961.942 L3328.62,961.842 L3328.42,961.742 L3328.32,961.642 L3328.12,961.642 L3327.92,961.542 L3327.82,961.542 L3327.62,961.442 L3327.42,961.442 L3327.22,961.342 L3327.02,961.342 L3326.92,961.342 L3326.72,961.242 L3326.52,961.242 L3326.32,961.242" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[331].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(331)}  fill-rule="evenodd" d="M3326.32,961.262 L3321.55,961.146 L3316.77,961.179 L3312.01,961.36 L3309.39,961.523" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[332].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(332)}  fill-rule="evenodd" d="M3308.13,947.449 L3312.88,947.039 L3317.61,946.48 L3320.94,945.998" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[333].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(333)}  fill-rule="evenodd" d="M3320.94,945.998 L3324.91,931.065" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[334].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(334)}  fill-rule="evenodd" d="M3324.91,931.065 L3324.76,926.465" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[335].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(335)}  fill-rule="evenodd" d="M3324.76,926.465 L3324.7,925.472 L3324.6,924.482 L3324.46,923.495 L3324.28,922.513 L3324.07,921.537 L3323.82,920.569 L3323.52,919.609 L3323.2,918.659 L3322.83,917.719 L3322.43,916.792 L3321.99,915.878 L3321.51,914.977 L3321.01,914.092 L3320.46,913.224 L3319.89,912.373 L3319.28,911.54 L3318.63,910.727 L3317.96,909.934 L3317.26,909.163 L3316.52,908.414 L3315.76,907.688 L3314.97,906.987 L3314.15,906.311 L3313.31,905.66 L3312.44,905.036 L3311.55,904.44 L3310.63,903.871 L3309.69,903.332 L3308.74,902.822 L3307.76,902.342 L3306.76,901.892 L3305.75,901.474 L3304.72,901.088 L3303.68,900.734 L3302.62,900.412 L3302.23,900.303" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[336].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(336)}  fill-rule="evenodd" d="M3270.87,841.616 L3279.98,836.559" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[337].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(337)}  fill-rule="evenodd" d="M3279.98,836.559 L3281.84,835.453 L3283.65,834.29 L3285.41,833.071 L3287.13,831.797 L3288.79,830.472 L3290.4,829.095 L3291.95,827.669 L3293.45,826.196 L3294.89,824.677 L3296.27,823.114 L3297.59,821.509 L3298.84,819.864 L3300.03,818.181 L3301.16,816.462 L3302.21,814.709 L3303.19,812.925 L3304.11,811.111 L3304.95,809.269 L3305.72,807.403 L3306.42,805.513 L3307.04,803.604 L3307.59,801.675 L3308.06,799.732 L3308.46,797.774 L3308.77,795.806 L3309.01,793.828 L3309.18,791.845 L3309.26,789.858 L3309.27,787.869 L3309.26,787.24" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[338].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(338)}  fill-rule="evenodd" d="M3309.26,787.24 L3309,778.234" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[339].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(339)}  fill-rule="evenodd" d="M3327.89,699.941 L3336.77,712.209" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[340].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(340)}  fill-rule="evenodd" d="M3336.77,712.209 L3337.12,712.668 L3337.48,713.115 L3337.86,713.552 L3338.26,713.976 L3338.67,714.387 L3339.1,714.786 L3339.55,715.17 L3340.01,715.541 L3340.48,715.897 L3340.97,716.239 L3341.47,716.565 L3341.71,716.711" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[341].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(341)}  fill-rule="evenodd" d="M3351.15,752.567 L3351.66,751.731 L3352.13,750.879 L3352.57,750.014 L3352.98,749.135 L3353.35,748.244 L3353.68,747.342 L3353.98,746.43 L3354.25,745.51 L3354.48,744.581 L3354.67,743.647 L3354.82,742.707 L3354.94,741.762 L3355.02,740.815 L3355.06,739.865 L3355.07,738.915 L3355.04,737.965 L3354.97,737.017 L3354.87,736.071 L3354.73,735.13 L3354.55,734.193 L3354.33,733.262 L3354.08,732.339 L3353.79,731.424 L3353.47,730.518 L3353.11,729.623 L3352.72,728.74 L3352.29,727.87 L3351.83,727.013 L3351.33,726.172 L3350.81,725.346 L3350.25,724.537 L3349.66,723.746 L3349.04,722.974 L3348.38,722.221 L3347.7,721.49 L3347,720.78 L3346.26,720.092 L3345.5,719.428 L3344.71,718.788 L3343.9,718.173 L3343.06,717.583 L3342.2,717.02 L3341.71,716.711" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[342].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(342)}  fill-rule="evenodd" d="M3351.15,752.567 L3348.88,761.856" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[343].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(343)}  fill-rule="evenodd" d="M3348.88,761.856 L3349.28,769.139 L3349.96,776.406 L3350.03,776.988" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[344].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(344)}  fill-rule="evenodd" d="M3350.03,776.988 L3350.3,778.962 L3350.65,780.927 L3351.08,782.879 L3351.58,784.817 L3352.15,786.739 L3352.8,788.641 L3353.53,790.522 L3354.33,792.379 L3355.2,794.21 L3356.14,796.013 L3357.15,797.785 L3358.23,799.525 L3359.38,801.23 L3360.6,802.899 L3361.87,804.529 L3363.22,806.118 L3364.62,807.664 L3366.08,809.165 L3367.6,810.621 L3369.18,812.028 L3370.81,813.385 L3372.49,814.69 L3374.23,815.943 L3376.01,817.14 L3377.84,818.282 L3379.71,819.366 L3381.62,820.391 L3383.57,821.356 L3385.56,822.26 L3387.58,823.101 L3389.63,823.879 L3391.71,824.593 L3391.87,824.642" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[345].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(345)}  fill-rule="evenodd" d="M3301.93,720.915 L3301.23,721.629 L3300.55,722.365 L3299.91,723.121 L3299.29,723.897 L3298.71,724.691 L3298.16,725.504 L3297.63,726.333 L3297.15,727.177 L3296.69,728.036 L3296.27,728.909 L3295.88,729.795 L3295.53,730.692 L3295.22,731.599 L3294.93,732.516 L3294.69,733.441 L3294.48,734.373 L3294.31,735.311 L3294.18,736.253 L3294.08,737.199 L3294.02,738.148 L3293.99,739.098 L3294.01,740.048 L3294.06,740.997 L3294.15,741.944 L3294.27,742.888 L3294.43,743.827 L3294.63,744.761 L3294.87,745.688 L3295.14,746.607 L3295.44,747.517 L3295.79,748.416 L3296.16,749.305 L3296.58,750.181 L3297.02,751.045 L3297.5,751.893 L3298.01,752.726 L3298.56,753.543 L3299.14,754.342 L3299.74,755.123 L3300.38,755.885 L3301.05,756.626 L3301.74,757.346 L3302.47,758.044 L3303.22,758.719 L3303.99,759.37 L3304.79,759.997 L3305.62,760.598 L3306.47,761.174 L3306.97,761.497" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[346].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(346)}  fill-rule="evenodd" d="M3375.66,942.768 L3380.43,942.69 L3385.19,942.464 L3388.8,942.193" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[347].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(347)}  fill-rule="evenodd" d="M3375.66,942.768 L3364.77,928.513" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[348].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(348)}  fill-rule="evenodd" d="M3364.77,928.513 L3364.57,917.048" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[349].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(349)}  fill-rule="evenodd" d="M3379.14,889.379 L3378.1,890.157 L3377.08,890.968 L3376.1,891.809 L3375.15,892.68 L3374.23,893.581 L3373.35,894.509 L3372.51,895.465 L3371.7,896.446 L3370.94,897.451 L3370.21,898.479 L3369.52,899.53 L3368.88,900.601 L3368.28,901.692 L3367.72,902.8 L3367.2,903.926 L3366.73,905.067 L3366.31,906.221 L3365.93,907.388 L3365.59,908.567 L3365.31,909.755 L3365.06,910.951 L3364.87,912.154 L3364.72,913.362 L3364.62,914.574 L3364.57,915.789 L3364.57,917.004 L3364.57,917.048" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[350].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(350)}  fill-rule="evenodd" d="M104.047,965.534 L104.889,965.527" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[351].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(351)}  fill-rule="evenodd" d="M113.909,965.452 L122.929,965.376" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[352].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(352)}  fill-rule="evenodd" d="M131.949,965.301 L140.969,965.225" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[353].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(353)}  fill-rule="evenodd" d="M149.989,965.149 L159.009,965.074" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[354].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(354)}  fill-rule="evenodd" d="M168.029,964.998 L177.049,964.923" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[355].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(355)}  fill-rule="evenodd" d="M186.069,964.847 L195.089,964.771" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[356].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(356)}  fill-rule="evenodd" d="M204.109,964.696 L213.129,964.62" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[357].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(357)}  fill-rule="evenodd" d="M222.149,964.545 L231.169,964.469" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[358].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(358)}  fill-rule="evenodd" d="M240.189,964.393 L249.209,964.318" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[359].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(359)}  fill-rule="evenodd" d="M258.229,964.242 L267.249,964.166" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[360].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(360)}  fill-rule="evenodd" d="M276.269,964.091 L285.289,964.015" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[361].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(361)}  fill-rule="evenodd" d="M-3.266,974.473 L5.75399,974.398" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[362].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(362)}  fill-rule="evenodd" d="M14.774,974.322 L23.794,974.247" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[363].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(363)}  fill-rule="evenodd" d="M32.814,974.171 L41.834,974.096" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[364].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(364)}  fill-rule="evenodd" d="M50.854,974.02 L59.874,973.945" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[365].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(365)}  fill-rule="evenodd" d="M68.894,973.869 L77.914,973.794" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[366].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(366)}  fill-rule="evenodd" d="M86.934,973.718 L95.954,973.643" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[367].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(367)}  fill-rule="evenodd" d="M104.974,973.567 L113.994,973.492" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[368].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(368)}  fill-rule="evenodd" d="M123.014,973.416 L132.034,973.341" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[369].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(369)}  fill-rule="evenodd" d="M141.054,973.265 L150.074,973.189" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[370].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(370)}  fill-rule="evenodd" d="M159.094,973.114 L168.114,973.038" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[371].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(371)}  fill-rule="evenodd" d="M177.134,972.963 L186.154,972.887" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[372].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(372)}  fill-rule="evenodd" d="M195.174,972.811 L204.194,972.736" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[373].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(373)}  fill-rule="evenodd" d="M213.214,972.66 L222.234,972.585" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[374].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(374)}  fill-rule="evenodd" d="M231.254,972.509 L240.274,972.433" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[375].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(375)}  fill-rule="evenodd" d="M249.294,972.358 L258.314,972.282" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[376].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(376)}  fill-rule="evenodd" d="M267.334,972.206 L276.354,972.131" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[377].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(377)}  fill-rule="evenodd" d="M5.83863,982.438 L14.8586,982.362" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[378].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(378)}  fill-rule="evenodd" d="M23.8786,982.287 L32.8987,982.211" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[379].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(379)}  fill-rule="evenodd" d="M41.9187,982.136 L50.9387,982.06" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[380].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(380)}  fill-rule="evenodd" d="M59.9587,981.985 L68.9787,981.909" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[381].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(381)}  fill-rule="evenodd" d="M77.9987,981.834 L87.0187,981.758" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[382].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(382)}  fill-rule="evenodd" d="M96.0387,981.683 L105.059,981.607" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[383].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(383)}  fill-rule="evenodd" d="M114.079,981.532 L123.099,981.456" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[384].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(384)}  fill-rule="evenodd" d="M132.119,981.381 L141.139,981.305" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[385].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(385)}  fill-rule="evenodd" d="M150.159,981.229 L159.179,981.154" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[386].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(386)}  fill-rule="evenodd" d="M168.199,981.078 L177.219,981.003" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[387].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(387)}  fill-rule="evenodd" d="M186.239,980.927 L195.259,980.851" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[388].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(388)}  fill-rule="evenodd" d="M204.279,980.776 L213.299,980.7" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[389].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(389)}  fill-rule="evenodd" d="M222.319,980.625 L231.339,980.549" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[390].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(390)}  fill-rule="evenodd" d="M240.359,980.473 L249.379,980.398" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[391].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(391)}  fill-rule="evenodd" d="M258.399,980.322 L267.419,980.246" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[392].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(392)}  fill-rule="evenodd" d="M276.439,980.171 L283.284,980.113" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[393].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(393)}  fill-rule="evenodd" d="M-3.09675,990.553 L5.92327,990.478" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[394].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(394)}  fill-rule="evenodd" d="M14.9433,990.402 L23.9633,990.327" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[395].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(395)}  fill-rule="evenodd" d="M32.9833,990.251 L42.0033,990.176" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[396].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(396)}  fill-rule="evenodd" d="M51.0233,990.1 L60.0434,990.025" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[397].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(397)}  fill-rule="evenodd" d="M69.0634,989.949 L78.0834,989.874" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[398].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(398)}  fill-rule="evenodd" d="M87.1034,989.798 L96.1234,989.723" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[399].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(399)}  fill-rule="evenodd" d="M105.143,989.647 L114.163,989.572" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[400].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(400)}  fill-rule="evenodd" d="M123.183,989.496 L132.203,989.421" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[401].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(401)}  fill-rule="evenodd" d="M141.223,989.345 L150.243,989.27" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[402].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(402)}  fill-rule="evenodd" d="M159.263,989.194 L168.283,989.118" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[403].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(403)}  fill-rule="evenodd" d="M177.303,989.043 L186.324,988.967" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[404].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(404)}  fill-rule="evenodd" d="M195.344,988.892 L204.364,988.816" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[405].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(405)}  fill-rule="evenodd" d="M213.384,988.74 L222.404,988.665" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[406].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(406)}  fill-rule="evenodd" d="M231.424,988.589 L240.444,988.513" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[407].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(407)}  fill-rule="evenodd" d="M249.464,988.438 L258.484,988.362" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[408].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(408)}  fill-rule="evenodd" d="M267.504,988.286 L276.524,988.211" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[409].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(409)}  fill-rule="evenodd" d="M6.0079,998.518 L15.0279,998.442" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[410].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(410)}  fill-rule="evenodd" d="M24.048,998.367 L33.068,998.291" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[411].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(411)}  fill-rule="evenodd" d="M42.088,998.216 L51.108,998.14" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[412].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(412)}  fill-rule="evenodd" d="M60.1281,998.065 L69.1481,997.989" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[413].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(413)}  fill-rule="evenodd" d="M78.1681,997.914 L87.1881,997.838" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[414].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(414)}  fill-rule="evenodd" d="M96.2081,997.763 L105.228,997.687" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[415].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(415)}  fill-rule="evenodd" d="M114.248,997.612 L123.268,997.536" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[416].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(416)}  fill-rule="evenodd" d="M132.288,997.461 L141.308,997.385" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[417].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(417)}  fill-rule="evenodd" d="M150.328,997.31 L159.348,997.234" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[418].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(418)}  fill-rule="evenodd" d="M168.368,997.158 L177.388,997.083" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[419].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(419)}  fill-rule="evenodd" d="M186.408,997.007 L195.428,996.932" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[420].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(420)}  fill-rule="evenodd" d="M204.448,996.856 L213.468,996.78" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[421].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(421)}  fill-rule="evenodd" d="M222.488,996.705 L231.508,996.629" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[422].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(422)}  fill-rule="evenodd" d="M240.528,996.553 L249.548,996.478" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[423].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(423)}  fill-rule="evenodd" d="M258.568,996.402 L267.588,996.326" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[424].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(424)}  fill-rule="evenodd" d="M276.608,996.251 L282.439,996.202" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[425].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(425)}  fill-rule="evenodd" d="M-2.9275,1006.63 L6.09254,1006.56" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[426].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(426)}  fill-rule="evenodd" d="M15.1126,1006.48 L24.1326,1006.41" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[427].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(427)}  fill-rule="evenodd" d="M33.1526,1006.33 L42.1727,1006.26" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[428].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(428)}  fill-rule="evenodd" d="M51.1927,1006.18 L60.2127,1006.1" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[429].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(429)}  fill-rule="evenodd" d="M69.2328,1006.03 L78.2528,1005.95" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[430].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(430)}  fill-rule="evenodd" d="M87.2728,1005.88 L96.2929,1005.8" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[431].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(431)}  fill-rule="evenodd" d="M105.313,1005.73 L114.333,1005.65" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[432].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(432)}  fill-rule="evenodd" d="M123.353,1005.58 L132.373,1005.5" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[433].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(433)}  fill-rule="evenodd" d="M141.393,1005.43 L150.413,1005.35" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[434].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(434)}  fill-rule="evenodd" d="M159.433,1005.27 L168.453,1005.2" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[435].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(435)}  fill-rule="evenodd" d="M177.473,1005.12 L186.493,1005.05" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[436].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(436)}  fill-rule="evenodd" d="M195.513,1004.97 L204.533,1004.9" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[437].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(437)}  fill-rule="evenodd" d="M213.553,1004.82 L222.573,1004.74" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[438].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(438)}  fill-rule="evenodd" d="M231.593,1004.67 L240.613,1004.59" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[439].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(439)}  fill-rule="evenodd" d="M249.633,1004.52 L258.653,1004.44" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[440].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(440)}  fill-rule="evenodd" d="M267.673,1004.37 L276.693,1004.29" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[441].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(441)}  fill-rule="evenodd" d="M6.17718,1014.6 L15.1972,1014.52" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[442].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(442)}  fill-rule="evenodd" d="M24.2173,1014.45 L33.2373,1014.37" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[443].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(443)}  fill-rule="evenodd" d="M42.2574,1014.3 L51.2774,1014.22" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[444].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(444)}  fill-rule="evenodd" d="M60.2974,1014.14 L69.3175,1014.07" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[445].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(445)}  fill-rule="evenodd" d="M78.3375,1013.99 L87.3576,1013.92" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[446].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(446)}  fill-rule="evenodd" d="M96.3776,1013.84 L105.398,1013.77" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[447].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(447)}  fill-rule="evenodd" d="M114.418,1013.69 L123.438,1013.62" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[448].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(448)}  fill-rule="evenodd" d="M132.458,1013.54 L141.478,1013.47" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[449].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(449)}  fill-rule="evenodd" d="M150.498,1013.39 L159.518,1013.31" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[450].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(450)}  fill-rule="evenodd" d="M168.538,1013.24 L177.558,1013.16" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[451].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(451)}  fill-rule="evenodd" d="M186.578,1013.09 L195.598,1013.01" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[452].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(452)}  fill-rule="evenodd" d="M204.618,1012.94 L213.638,1012.86" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[453].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(453)}  fill-rule="evenodd" d="M222.658,1012.78 L231.678,1012.71" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[454].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(454)}  fill-rule="evenodd" d="M240.698,1012.63 L249.718,1012.56" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[455].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(455)}  fill-rule="evenodd" d="M258.738,1012.48 L267.758,1012.41" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[456].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(456)}  fill-rule="evenodd" d="M276.778,1012.33 L282.438,1012.28" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[457].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(457)}  fill-rule="evenodd" d="M-2.75824,1022.71 L6.26182,1022.64" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[458].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(458)}  fill-rule="evenodd" d="M15.2819,1022.56 L24.3019,1022.49" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[459].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(459)}  fill-rule="evenodd" d="M33.322,1022.41 L42.342,1022.34" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[460].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(460)}  fill-rule="evenodd" d="M51.3621,1022.26 L60.3821,1022.18" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[461].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(461)}  fill-rule="evenodd" d="M69.4022,1022.11 L78.4222,1022.03" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[462].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(462)}  fill-rule="evenodd" d="M87.4423,1021.96 L96.4623,1021.88" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[463].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(463)}  fill-rule="evenodd" d="M105.482,1021.81 L114.502,1021.73" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[464].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(464)}  fill-rule="evenodd" d="M123.522,1021.66 L132.543,1021.58" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[465].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(465)}  fill-rule="evenodd" d="M141.563,1021.51 L150.583,1021.43" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[466].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(466)}  fill-rule="evenodd" d="M159.603,1021.35 L168.623,1021.28" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[467].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(467)}  fill-rule="evenodd" d="M177.643,1021.2 L186.663,1021.13" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[468].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(468)}  fill-rule="evenodd" d="M195.683,1021.05 L204.703,1020.98" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[469].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(469)}  fill-rule="evenodd" d="M213.723,1020.9 L222.743,1020.82" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[470].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(470)}  fill-rule="evenodd" d="M231.763,1020.75 L240.783,1020.67" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[471].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(471)}  fill-rule="evenodd" d="M249.803,1020.6 L258.823,1020.52" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[472].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(472)}  fill-rule="evenodd" d="M267.843,1020.45 L276.863,1020.37" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[473].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(473)}  fill-rule="evenodd" d="M6.34646,1030.68 L15.3665,1030.6" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[474].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(474)}  fill-rule="evenodd" d="M24.3866,1030.53 L33.4066,1030.45" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[475].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(475)}  fill-rule="evenodd" d="M42.4267,1030.38 L51.4468,1030.3" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[476].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(476)}  fill-rule="evenodd" d="M60.4668,1030.23 L69.4869,1030.15" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[477].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(477)}  fill-rule="evenodd" d="M78.5069,1030.07 L87.527,1030" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[478].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(478)}  fill-rule="evenodd" d="M96.5471,1029.92 L105.567,1029.85" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[479].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(479)}  fill-rule="evenodd" d="M114.587,1029.77 L123.607,1029.7" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[480].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(480)}  fill-rule="evenodd" d="M132.627,1029.62 L141.647,1029.55" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[481].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(481)}  fill-rule="evenodd" d="M150.667,1029.47 L159.687,1029.39" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[482].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(482)}  fill-rule="evenodd" d="M168.708,1029.32 L177.728,1029.24" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[483].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(483)}  fill-rule="evenodd" d="M186.748,1029.17 L195.768,1029.09" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[484].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(484)}  fill-rule="evenodd" d="M204.788,1029.02 L213.808,1028.94" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[485].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(485)}  fill-rule="evenodd" d="M222.828,1028.86 L231.848,1028.79" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[486].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(486)}  fill-rule="evenodd" d="M240.868,1028.71 L249.888,1028.64" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[487].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(487)}  fill-rule="evenodd" d="M258.908,1028.56 L267.928,1028.49" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[488].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(488)}  fill-rule="evenodd" d="M276.948,1028.41 L282.48,1028.36" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[489].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(489)}  fill-rule="evenodd" d="M-2.58898,1038.79 L6.43109,1038.72" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[490].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(490)}  fill-rule="evenodd" d="M15.4512,1038.64 L24.4712,1038.57" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[491].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(491)}  fill-rule="evenodd" d="M33.4913,1038.49 L42.5114,1038.42" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[492].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(492)}  fill-rule="evenodd" d="M51.5315,1038.34 L60.5515,1038.27" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[493].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(493)}  fill-rule="evenodd" d="M69.5716,1038.19 L78.5917,1038.11" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[494].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(494)}  fill-rule="evenodd" d="M87.6117,1038.04 L96.6318,1037.96" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[495].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(495)}  fill-rule="evenodd" d="M105.652,1037.89 L114.672,1037.81" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[496].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(496)}  fill-rule="evenodd" d="M123.692,1037.74 L132.712,1037.66" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[497].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(497)}  fill-rule="evenodd" d="M141.732,1037.59 L150.752,1037.51" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[498].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(498)}  fill-rule="evenodd" d="M159.772,1037.43 L168.792,1037.36" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[499].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(499)}  fill-rule="evenodd" d="M177.812,1037.28 L186.832,1037.21" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[500].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(500)}  fill-rule="evenodd" d="M195.853,1037.13 L204.873,1037.06" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[501].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(501)}  fill-rule="evenodd" d="M213.893,1036.98 L222.913,1036.9" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[502].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(502)}  fill-rule="evenodd" d="M231.933,1036.83 L240.953,1036.75" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[503].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(503)}  fill-rule="evenodd" d="M249.973,1036.68 L258.993,1036.6" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[504].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(504)}  fill-rule="evenodd" d="M268.013,1036.53 L277.033,1036.45" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[505].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(505)}  fill-rule="evenodd" d="M6.51574,1046.76 L15.5358,1046.68" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[506].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(506)}  fill-rule="evenodd" d="M24.5559,1046.61 L33.576,1046.53" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[507].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(507)}  fill-rule="evenodd" d="M42.5961,1046.46 L51.6161,1046.38" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[508].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(508)}  fill-rule="evenodd" d="M60.6362,1046.31 L69.6563,1046.23" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[509].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(509)}  fill-rule="evenodd" d="M78.6764,1046.15 L87.6965,1046.08" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[510].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(510)}  fill-rule="evenodd" d="M96.7165,1046 L105.737,1045.93" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[511].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(511)}  fill-rule="evenodd" d="M114.757,1045.85 L123.777,1045.78" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[512].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(512)}  fill-rule="evenodd" d="M132.797,1045.7 L141.817,1045.63" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[513].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(513)}  fill-rule="evenodd" d="M150.837,1045.55 L159.857,1045.47" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[514].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(514)}  fill-rule="evenodd" d="M168.877,1045.4 L177.897,1045.32" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[515].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(515)}  fill-rule="evenodd" d="M186.917,1045.25 L195.937,1045.17" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[516].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(516)}  fill-rule="evenodd" d="M204.957,1045.1 L213.977,1045.02" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[517].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(517)}  fill-rule="evenodd" d="M222.998,1044.94 L232.018,1044.87" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[518].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(518)}  fill-rule="evenodd" d="M241.038,1044.79 L250.058,1044.72" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[519].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(519)}  fill-rule="evenodd" d="M259.078,1044.64 L268.098,1044.57" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[520].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(520)}  fill-rule="evenodd" d="M277.118,1044.49 L281.279,1044.46" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[521].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(521)}  fill-rule="evenodd" d="M-2.41972,1054.87 L6.60038,1054.8" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[522].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(522)}  fill-rule="evenodd" d="M15.6205,1054.72 L24.6406,1054.65" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[523].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(523)}  fill-rule="evenodd" d="M33.6606,1054.57 L42.6807,1054.5" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[524].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(524)}  fill-rule="evenodd" d="M51.7008,1054.42 L60.7209,1054.35" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[525].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(525)}  fill-rule="evenodd" d="M69.741,1054.27 L78.7611,1054.19" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[526].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(526)}  fill-rule="evenodd" d="M87.7812,1054.12 L96.8013,1054.04" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[527].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(527)}  fill-rule="evenodd" d="M105.821,1053.97 L114.841,1053.89" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[528].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(528)}  fill-rule="evenodd" d="M123.862,1053.82 L132.882,1053.74" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[529].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(529)}  fill-rule="evenodd" d="M141.902,1053.67 L150.922,1053.59" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[530].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(530)}  fill-rule="evenodd" d="M159.942,1053.51 L168.962,1053.44" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[531].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(531)}  fill-rule="evenodd" d="M177.982,1053.36 L187.002,1053.29" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[532].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(532)}  fill-rule="evenodd" d="M196.022,1053.21 L205.042,1053.14" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[533].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(533)}  fill-rule="evenodd" d="M214.062,1053.06 L223.082,1052.98" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[534].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(534)}  fill-rule="evenodd" d="M232.103,1052.91 L241.123,1052.83" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[535].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(535)}  fill-rule="evenodd" d="M250.143,1052.76 L259.163,1052.68" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[536].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(536)}  fill-rule="evenodd" d="M268.183,1052.61 L277.203,1052.53" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[537].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(537)}  fill-rule="evenodd" d="M6.68502,1062.84 L15.7051,1062.76" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[538].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(538)}  fill-rule="evenodd" d="M24.7252,1062.69 L33.7453,1062.61" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[539].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(539)}  fill-rule="evenodd" d="M42.7654,1062.54 L51.7855,1062.46" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[540].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(540)}  fill-rule="evenodd" d="M60.8056,1062.39 L69.8257,1062.31" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[541].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(541)}  fill-rule="evenodd" d="M78.8458,1062.23 L87.8659,1062.16" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[542].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(542)}  fill-rule="evenodd" d="M96.886,1062.08 L105.906,1062.01" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[543].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(543)}  fill-rule="evenodd" d="M114.926,1061.93 L123.946,1061.86" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[544].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(544)}  fill-rule="evenodd" d="M132.966,1061.78 L141.986,1061.71" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[545].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(545)}  fill-rule="evenodd" d="M151.007,1061.63 L160.027,1061.55" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[546].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(546)}  fill-rule="evenodd" d="M169.047,1061.48 L178.067,1061.4" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[547].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(547)}  fill-rule="evenodd" d="M187.087,1061.33 L196.107,1061.25" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[548].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(548)}  fill-rule="evenodd" d="M205.127,1061.18 L214.147,1061.1" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[549].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(549)}  fill-rule="evenodd" d="M223.167,1061.02 L232.187,1060.95" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[550].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(550)}  fill-rule="evenodd" d="M241.207,1060.87 L250.228,1060.8" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[551].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(551)}  fill-rule="evenodd" d="M259.248,1060.72 L268.268,1060.65" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[552].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(552)}  fill-rule="evenodd" d="M277.288,1060.57 L283.449,1060.52" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[553].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(553)}  fill-rule="evenodd" d="M-2.25046,1070.95 L6.76965,1070.88" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[554].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(554)}  fill-rule="evenodd" d="M15.7898,1070.8 L24.8099,1070.73" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[555].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(555)}  fill-rule="evenodd" d="M33.83,1070.65 L42.8501,1070.58" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[556].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(556)}  fill-rule="evenodd" d="M51.8702,1070.5 L60.8903,1070.43" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[557].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(557)}  fill-rule="evenodd" d="M69.9104,1070.35 L78.9305,1070.27" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[558].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(558)}  fill-rule="evenodd" d="M87.9506,1070.2 L96.9707,1070.12" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[559].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(559)}  fill-rule="evenodd" d="M105.991,1070.05 L115.011,1069.97" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[560].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(560)}  fill-rule="evenodd" d="M124.031,1069.9 L133.051,1069.82" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[561].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(561)}  fill-rule="evenodd" d="M142.071,1069.75 L151.091,1069.67" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[562].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(562)}  fill-rule="evenodd" d="M160.111,1069.59 L169.132,1069.52" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[563].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(563)}  fill-rule="evenodd" d="M178.152,1069.44 L187.172,1069.37" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[564].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(564)}  fill-rule="evenodd" d="M196.192,1069.29 L205.212,1069.22" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[565].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(565)}  fill-rule="evenodd" d="M214.232,1069.14 L223.252,1069.06" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[566].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(566)}  fill-rule="evenodd" d="M232.272,1068.99 L241.292,1068.91" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[567].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(567)}  fill-rule="evenodd" d="M250.312,1068.84 L259.333,1068.76" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[568].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(568)}  fill-rule="evenodd" d="M268.353,1068.69 L277.373,1068.61" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[569].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(569)}  fill-rule="evenodd" d="M6.8543,1078.92 L15.8744,1078.84" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[570].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(570)}  fill-rule="evenodd" d="M24.8945,1078.77 L33.9147,1078.69" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[571].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(571)}  fill-rule="evenodd" d="M42.9348,1078.62 L51.9549,1078.54" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[572].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(572)}  fill-rule="evenodd" d="M60.975,1078.47 L69.9951,1078.39" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[573].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(573)}  fill-rule="evenodd" d="M79.0152,1078.31 L88.0354,1078.24" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[574].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(574)}  fill-rule="evenodd" d="M97.0555,1078.16 L106.076,1078.09" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[575].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(575)}  fill-rule="evenodd" d="M115.096,1078.01 L124.116,1077.94" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[576].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(576)}  fill-rule="evenodd" d="M133.136,1077.86 L142.156,1077.79" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[577].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(577)}  fill-rule="evenodd" d="M151.176,1077.71 L160.196,1077.63" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[578].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(578)}  fill-rule="evenodd" d="M169.216,1077.56 L178.236,1077.48" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[579].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(579)}  fill-rule="evenodd" d="M187.257,1077.41 L196.277,1077.33" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[580].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(580)}  fill-rule="evenodd" d="M205.297,1077.26 L214.317,1077.18" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[581].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(581)}  fill-rule="evenodd" d="M223.337,1077.11 L232.357,1077.03" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[582].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(582)}  fill-rule="evenodd" d="M241.377,1076.95 L250.397,1076.88" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[583].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(583)}  fill-rule="evenodd" d="M259.417,1076.8 L268.438,1076.73" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[584].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(584)}  fill-rule="evenodd" d="M277.458,1076.65 L285.69,1076.58" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[585].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(585)}  fill-rule="evenodd" d="M-2.08119,1087.03 L6.93894,1086.96" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[586].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(586)}  fill-rule="evenodd" d="M15.9591,1086.88 L24.9792,1086.81" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[587].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(587)}  fill-rule="evenodd" d="M33.9993,1086.73 L43.0195,1086.66" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[588].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(588)}  fill-rule="evenodd" d="M52.0396,1086.58 L61.0597,1086.51" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[589].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(589)}  fill-rule="evenodd" d="M70.0798,1086.43 L79.1,1086.35" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[590].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(590)}  fill-rule="evenodd" d="M88.1201,1086.28 L97.1402,1086.2" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[591].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(591)}  fill-rule="evenodd" d="M106.16,1086.13 L115.18,1086.05" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[592].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(592)}  fill-rule="evenodd" d="M124.201,1085.98 L133.221,1085.9" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[593].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(593)}  fill-rule="evenodd" d="M142.241,1085.83 L151.261,1085.75" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[594].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(594)}  fill-rule="evenodd" d="M160.281,1085.67 L169.301,1085.6" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[595].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(595)}  fill-rule="evenodd" d="M178.321,1085.52 L187.341,1085.45" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[596].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(596)}  fill-rule="evenodd" d="M196.362,1085.37 L205.382,1085.3" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[597].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(597)}  fill-rule="evenodd" d="M214.402,1085.22 L223.422,1085.15" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[598].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(598)}  fill-rule="evenodd" d="M232.442,1085.07 L241.462,1084.99" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[599].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(599)}  fill-rule="evenodd" d="M250.482,1084.92 L259.502,1084.84" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[600].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(600)}  fill-rule="evenodd" d="M268.522,1084.77 L277.543,1084.69" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[601].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(601)}  fill-rule="evenodd" d="M286.563,1084.62 L287.576,1084.61" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[602].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(602)}  fill-rule="evenodd" d="M7.02359,1095 L16.0437,1094.92" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[603].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(603)}  fill-rule="evenodd" d="M25.0639,1094.85 L34.084,1094.77" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[604].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(604)}  fill-rule="evenodd" d="M43.1041,1094.7 L52.1243,1094.62" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[605].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(605)}  fill-rule="evenodd" d="M61.1444,1094.55 L70.1645,1094.47" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[606].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(606)}  fill-rule="evenodd" d="M79.1847,1094.39 L88.2048,1094.32" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[607].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(607)}  fill-rule="evenodd" d="M97.2249,1094.24 L106.245,1094.17" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[608].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(608)}  fill-rule="evenodd" d="M115.265,1094.09 L124.285,1094.02" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[609].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(609)}  fill-rule="evenodd" d="M133.305,1093.94 L142.326,1093.87" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[610].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(610)}  fill-rule="evenodd" d="M151.346,1093.79 L160.366,1093.71" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[611].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(611)}  fill-rule="evenodd" d="M169.386,1093.64 L178.406,1093.56" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[612].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(612)}  fill-rule="evenodd" d="M187.426,1093.49 L196.446,1093.41" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[613].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(613)}  fill-rule="evenodd" d="M205.467,1093.34 L214.487,1093.26" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[614].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(614)}  fill-rule="evenodd" d="M223.507,1093.19 L232.527,1093.11" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[615].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(615)}  fill-rule="evenodd" d="M241.547,1093.03 L250.567,1092.96" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[616].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(616)}  fill-rule="evenodd" d="M259.587,1092.88 L268.607,1092.81" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[617].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(617)}  fill-rule="evenodd" d="M277.628,1092.73 L286.648,1092.66" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[618].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(618)}  fill-rule="evenodd" d="M-1.91192,1103.11 L7.10823,1103.04" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[619].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(619)}  fill-rule="evenodd" d="M16.1284,1102.96 L25.1485,1102.89" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[620].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(620)}  fill-rule="evenodd" d="M34.1687,1102.81 L43.1888,1102.74" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[621].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(621)}  fill-rule="evenodd" d="M52.209,1102.66 L61.2291,1102.59" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[622].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(622)}  fill-rule="evenodd" d="M70.2493,1102.51 L79.2694,1102.43" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[623].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(623)}  fill-rule="evenodd" d="M88.2895,1102.36 L97.3097,1102.28" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[624].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(624)}  fill-rule="evenodd" d="M106.33,1102.21 L115.35,1102.13" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[625].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(625)}  fill-rule="evenodd" d="M124.37,1102.06 L133.39,1101.98" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[626].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(626)}  fill-rule="evenodd" d="M142.41,1101.91 L151.431,1101.83" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[627].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(627)}  fill-rule="evenodd" d="M160.451,1101.75 L169.471,1101.68" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[628].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(628)}  fill-rule="evenodd" d="M178.491,1101.6 L187.511,1101.53" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[629].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(629)}  fill-rule="evenodd" d="M196.531,1101.45 L205.551,1101.38" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[630].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(630)}  fill-rule="evenodd" d="M214.571,1101.3 L223.592,1101.23" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[631].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(631)}  fill-rule="evenodd" d="M232.612,1101.15 L241.632,1101.07" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[632].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(632)}  fill-rule="evenodd" d="M250.652,1101 L259.672,1100.92" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[633].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(633)}  fill-rule="evenodd" d="M268.692,1100.85 L277.712,1100.77" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[634].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(634)}  fill-rule="evenodd" d="M286.733,1100.7 L288.391,1100.68" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[635].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(635)}  fill-rule="evenodd" d="M7.19287,1111.08 L16.213,1111" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[636].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(636)}  fill-rule="evenodd" d="M25.2332,1110.93 L34.2533,1110.85" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[637].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(637)}  fill-rule="evenodd" d="M43.2735,1110.78 L52.2937,1110.7" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[638].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(638)}  fill-rule="evenodd" d="M61.3138,1110.63 L70.334,1110.55" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[639].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(639)}  fill-rule="evenodd" d="M79.3541,1110.47 L88.3743,1110.4" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[640].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(640)}  fill-rule="evenodd" d="M97.3944,1110.32 L106.415,1110.25" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[641].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(641)}  fill-rule="evenodd" d="M115.435,1110.17 L124.455,1110.1" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[642].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(642)}  fill-rule="evenodd" d="M133.475,1110.02 L142.495,1109.95" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[643].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(643)}  fill-rule="evenodd" d="M151.515,1109.87 L160.535,1109.79" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[644].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(644)}  fill-rule="evenodd" d="M169.556,1109.72 L178.576,1109.64" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[645].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(645)}  fill-rule="evenodd" d="M187.596,1109.57 L196.616,1109.49" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[646].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(646)}  fill-rule="evenodd" d="M205.636,1109.42 L214.656,1109.34" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[647].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(647)}  fill-rule="evenodd" d="M223.677,1109.27 L232.697,1109.19" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[648].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(648)}  fill-rule="evenodd" d="M241.717,1109.11 L250.737,1109.04" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[649].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(649)}  fill-rule="evenodd" d="M259.757,1108.96 L268.777,1108.89" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[650].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(650)}  fill-rule="evenodd" d="M277.797,1108.81 L286.818,1108.74" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[651].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(651)}  fill-rule="evenodd" d="M-1.74265,1119.19 L7.27752,1119.12" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[652].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(652)}  fill-rule="evenodd" d="M16.2977,1119.04 L25.3178,1118.97" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[653].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(653)}  fill-rule="evenodd" d="M34.338,1118.89 L43.3582,1118.82" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[654].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(654)}  fill-rule="evenodd" d="M52.3783,1118.74 L61.3985,1118.67" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[655].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(655)}  fill-rule="evenodd" d="M70.4187,1118.59 L79.4388,1118.51" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[656].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(656)}  fill-rule="evenodd" d="M88.459,1118.44 L97.4792,1118.36" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[657].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(657)}  fill-rule="evenodd" d="M106.499,1118.29 L115.519,1118.21" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[658].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(658)}  fill-rule="evenodd" d="M124.54,1118.14 L133.56,1118.06" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[659].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(659)}  fill-rule="evenodd" d="M142.58,1117.99 L151.6,1117.91" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[660].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(660)}  fill-rule="evenodd" d="M160.62,1117.83 L169.64,1117.76" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[661].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(661)}  fill-rule="evenodd" d="M178.661,1117.68 L187.681,1117.61" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[662].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(662)}  fill-rule="evenodd" d="M196.701,1117.53 L205.721,1117.46" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[663].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(663)}  fill-rule="evenodd" d="M214.741,1117.38 L223.761,1117.31" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[664].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(664)}  fill-rule="evenodd" d="M232.782,1117.23 L241.802,1117.15" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[665].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(665)}  fill-rule="evenodd" d="M250.822,1117.08 L259.842,1117" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[666].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(666)}  fill-rule="evenodd" d="M268.862,1116.93 L277.882,1116.85" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[667].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(667)}  fill-rule="evenodd" d="M7.36216,1127.16 L16.3823,1127.08" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[668].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(668)}  fill-rule="evenodd" d="M25.4025,1127.01 L34.4227,1126.93" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[669].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(669)}  fill-rule="evenodd" d="M43.4429,1126.86 L52.463,1126.78" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[670].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(670)}  fill-rule="evenodd" d="M61.4832,1126.71 L70.5034,1126.63" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[671].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(671)}  fill-rule="evenodd" d="M79.5236,1126.55 L88.5437,1126.48" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[672].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(672)}  fill-rule="evenodd" d="M97.5639,1126.4 L106.584,1126.33" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[673].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(673)}  fill-rule="evenodd" d="M115.604,1126.25 L124.624,1126.18" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[674].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(674)}  fill-rule="evenodd" d="M133.645,1126.1 L142.665,1126.03" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[675].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(675)}  fill-rule="evenodd" d="M151.685,1125.95 L160.705,1125.87" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[676].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(676)}  fill-rule="evenodd" d="M169.725,1125.8 L178.745,1125.72" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[677].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(677)}  fill-rule="evenodd" d="M187.766,1125.65 L196.786,1125.57" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[678].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(678)}  fill-rule="evenodd" d="M205.806,1125.5 L214.826,1125.42" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[679].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(679)}  fill-rule="evenodd" d="M223.846,1125.35 L232.866,1125.27" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[680].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(680)}  fill-rule="evenodd" d="M241.887,1125.19 L250.907,1125.12" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[681].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(681)}  fill-rule="evenodd" d="M259.927,1125.04 L268.947,1124.97" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[682].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(682)}  fill-rule="evenodd" d="M277.967,1124.89 L285.335,1124.83" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[683].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(683)}  fill-rule="evenodd" d="M-1.57338,1135.27 L7.44681,1135.2" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[684].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(684)}  fill-rule="evenodd" d="M16.467,1135.12 L25.4872,1135.05" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[685].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(685)}  fill-rule="evenodd" d="M34.5074,1134.97 L43.5275,1134.9" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[686].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(686)}  fill-rule="evenodd" d="M52.5477,1134.82 L61.5679,1134.75" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[687].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(687)}  fill-rule="evenodd" d="M70.5881,1134.67 L79.6083,1134.59" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[688].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(688)}  fill-rule="evenodd" d="M88.6285,1134.52 L97.6486,1134.44" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[689].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(689)}  fill-rule="evenodd" d="M106.669,1134.37 L115.689,1134.29" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[690].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(690)}  fill-rule="evenodd" d="M124.709,1134.22 L133.729,1134.14" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[691].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(691)}  fill-rule="evenodd" d="M142.75,1134.07 L151.77,1133.99" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[692].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(692)}  fill-rule="evenodd" d="M160.79,1133.91 L169.81,1133.84" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[693].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(693)}  fill-rule="evenodd" d="M178.83,1133.76 L187.85,1133.69" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[694].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(694)}  fill-rule="evenodd" d="M196.871,1133.61 L205.891,1133.54" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[695].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(695)}  fill-rule="evenodd" d="M214.911,1133.46 L223.931,1133.39" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[696].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(696)}  fill-rule="evenodd" d="M232.951,1133.31 L241.971,1133.23" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[697].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(697)}  fill-rule="evenodd" d="M250.992,1133.16 L260.012,1133.08" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[698].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(698)}  fill-rule="evenodd" d="M269.032,1133.01 L278.052,1132.93" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[699].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(699)}  fill-rule="evenodd" d="M7.53146,1143.24 L16.5516,1143.16" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[700].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(700)}  fill-rule="evenodd" d="M25.5718,1143.09 L34.592,1143.01" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[701].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(701)}  fill-rule="evenodd" d="M43.6122,1142.94 L52.6324,1142.86" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[702].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(702)}  fill-rule="evenodd" d="M61.6526,1142.79 L70.6728,1142.71" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[703].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(703)}  fill-rule="evenodd" d="M79.693,1142.63 L88.7132,1142.56" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[704].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(704)}  fill-rule="evenodd" d="M97.7334,1142.48 L106.754,1142.41" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[705].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(705)}  fill-rule="evenodd" d="M115.774,1142.33 L124.794,1142.26" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[706].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(706)}  fill-rule="evenodd" d="M133.814,1142.18 L142.834,1142.11" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[707].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(707)}  fill-rule="evenodd" d="M151.855,1142.03 L160.875,1141.95" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[708].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(708)}  fill-rule="evenodd" d="M169.895,1141.88 L178.915,1141.8" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[709].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(709)}  fill-rule="evenodd" d="M187.935,1141.73 L196.955,1141.65" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[710].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(710)}  fill-rule="evenodd" d="M205.976,1141.58 L214.996,1141.5" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[711].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(711)}  fill-rule="evenodd" d="M224.016,1141.43 L233.036,1141.35" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[712].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(712)}  fill-rule="evenodd" d="M242.056,1141.27 L251.077,1141.2" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[713].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(713)}  fill-rule="evenodd" d="M260.097,1141.12 L269.117,1141.05" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[714].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(714)}  fill-rule="evenodd" d="M278.137,1140.97 L281.933,1140.94" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[715].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(715)}  fill-rule="evenodd" d="M-1.4041,1151.35 L7.6161,1151.28" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[716].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(716)}  fill-rule="evenodd" d="M16.6363,1151.2 L25.6565,1151.13" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[717].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(717)}  fill-rule="evenodd" d="M34.6767,1151.05 L43.6969,1150.98" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[718].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(718)}  fill-rule="evenodd" d="M52.7171,1150.9 L61.7373,1150.83" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[719].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(719)}  fill-rule="evenodd" d="M70.7575,1150.75 L79.7777,1150.67" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[720].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(720)}  fill-rule="evenodd" d="M88.7979,1150.6 L97.8181,1150.52" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[721].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(721)}  fill-rule="evenodd" d="M106.838,1150.45 L115.859,1150.37" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[722].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(722)}  fill-rule="evenodd" d="M124.879,1150.3 L133.899,1150.22" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[723].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(723)}  fill-rule="evenodd" d="M142.919,1150.15 L151.939,1150.07" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[724].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(724)}  fill-rule="evenodd" d="M160.959,1149.99 L169.98,1149.92" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[725].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(725)}  fill-rule="evenodd" d="M179,1149.84 L188.02,1149.77" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[726].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(726)}  fill-rule="evenodd" d="M197.04,1149.69 L206.06,1149.62" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[727].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(727)}  fill-rule="evenodd" d="M215.081,1149.54 L224.101,1149.47" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[728].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(728)}  fill-rule="evenodd" d="M233.121,1149.39 L242.141,1149.31" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[729].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(729)}  fill-rule="evenodd" d="M251.161,1149.24 L260.182,1149.16" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[730].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(730)}  fill-rule="evenodd" d="M269.202,1149.09 L278.222,1149.01" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[731].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(731)}  fill-rule="evenodd" d="M7.70075,1159.32 L16.721,1159.24" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[732].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(732)}  fill-rule="evenodd" d="M25.7412,1159.17 L34.7614,1159.09" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[733].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(733)}  fill-rule="evenodd" d="M43.7816,1159.02 L52.8018,1158.94" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[734].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(734)}  fill-rule="evenodd" d="M61.822,1158.87 L70.8422,1158.79" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[735].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(735)}  fill-rule="evenodd" d="M79.8624,1158.71 L88.8826,1158.64" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[736].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(736)}  fill-rule="evenodd" d="M97.9029,1158.56 L106.923,1158.49" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[737].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(737)}  fill-rule="evenodd" d="M115.943,1158.41 L124.963,1158.34" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[738].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(738)}  fill-rule="evenodd" d="M133.984,1158.26 L143.004,1158.19" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[739].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(739)}  fill-rule="evenodd" d="M152.024,1158.11 L161.044,1158.03" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[740].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(740)}  fill-rule="evenodd" d="M170.065,1157.96 L179.085,1157.88" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[741].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(741)}  fill-rule="evenodd" d="M188.105,1157.81 L197.125,1157.73" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[742].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(742)}  fill-rule="evenodd" d="M206.145,1157.66 L215.166,1157.58" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[743].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(743)}  fill-rule="evenodd" d="M224.186,1157.51 L233.206,1157.43" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[744].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(744)}  fill-rule="evenodd" d="M242.226,1157.35 L251.246,1157.28" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[745].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(745)}  fill-rule="evenodd" d="M260.267,1157.2 L269.287,1157.13" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[746].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(746)}  fill-rule="evenodd" d="M278.307,1157.05 L287.327,1156.98" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[747].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(747)}  fill-rule="evenodd" d="M-1.23483,1167.43 L7.7854,1167.36" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[748].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(748)}  fill-rule="evenodd" d="M16.8056,1167.28 L25.8258,1167.21" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[749].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(749)}  fill-rule="evenodd" d="M34.8461,1167.13 L43.8663,1167.06" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[750].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(750)}  fill-rule="evenodd" d="M52.8865,1166.98 L61.9067,1166.91" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[751].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(751)}  fill-rule="evenodd" d="M70.9269,1166.83 L79.9472,1166.75" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[752].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(752)}  fill-rule="evenodd" d="M88.9674,1166.68 L97.9876,1166.6" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[753].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(753)}  fill-rule="evenodd" d="M107.008,1166.53 L116.028,1166.45" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[754].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(754)}  fill-rule="evenodd" d="M125.048,1166.38 L134.068,1166.3" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[755].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(755)}  fill-rule="evenodd" d="M143.089,1166.23 L152.109,1166.15" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[756].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(756)}  fill-rule="evenodd" d="M161.129,1166.07 L170.149,1166" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[757].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(757)}  fill-rule="evenodd" d="M179.17,1165.92 L188.19,1165.85" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[758].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(758)}  fill-rule="evenodd" d="M197.21,1165.77 L206.23,1165.7" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[759].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(759)}  fill-rule="evenodd" d="M215.25,1165.62 L224.271,1165.55" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[760].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(760)}  fill-rule="evenodd" d="M233.291,1165.47 L242.311,1165.39" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[761].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(761)}  fill-rule="evenodd" d="M251.331,1165.32 L260.351,1165.24" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[762].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(762)}  fill-rule="evenodd" d="M269.372,1165.17 L278.392,1165.09" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[763].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(763)}  fill-rule="evenodd" d="M287.412,1165.02 L291.888,1164.98" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[764].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(764)}  fill-rule="evenodd" d="M7.87004,1175.4 L16.8903,1175.32" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[765].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(765)}  fill-rule="evenodd" d="M25.9105,1175.25 L34.9307,1175.17" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[766].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(766)}  fill-rule="evenodd" d="M43.951,1175.1 L52.9712,1175.02" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[767].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(767)}  fill-rule="evenodd" d="M61.9914,1174.95 L71.0117,1174.87" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[768].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(768)}  fill-rule="evenodd" d="M80.0319,1174.79 L89.0521,1174.72" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[769].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(769)}  fill-rule="evenodd" d="M98.0723,1174.64 L107.093,1174.57" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[770].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(770)}  fill-rule="evenodd" d="M116.113,1174.49 L125.133,1174.42" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[771].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(771)}  fill-rule="evenodd" d="M134.153,1174.34 L143.173,1174.27" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[772].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(772)}  fill-rule="evenodd" d="M152.194,1174.19 L161.214,1174.11" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[773].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(773)}  fill-rule="evenodd" d="M170.234,1174.04 L179.254,1173.96" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[774].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(774)}  fill-rule="evenodd" d="M188.275,1173.89 L197.295,1173.81" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[775].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(775)}  fill-rule="evenodd" d="M206.315,1173.74 L215.335,1173.66" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[776].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(776)}  fill-rule="evenodd" d="M224.355,1173.59 L233.376,1173.51" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[777].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(777)}  fill-rule="evenodd" d="M242.396,1173.43 L251.416,1173.36" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[778].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(778)}  fill-rule="evenodd" d="M260.436,1173.28 L269.457,1173.21" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[779].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(779)}  fill-rule="evenodd" d="M278.477,1173.13 L287.497,1173.06" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[780].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(780)}  fill-rule="evenodd" d="M-1.06555,1183.51 L7.95469,1183.44" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[781].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(781)}  fill-rule="evenodd" d="M16.9749,1183.36 L25.9952,1183.29" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[782].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(782)}  fill-rule="evenodd" d="M35.0154,1183.21 L44.0357,1183.14" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[783].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(783)}  fill-rule="evenodd" d="M53.0559,1183.06 L62.0761,1182.99" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[784].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(784)}  fill-rule="evenodd" d="M71.0964,1182.91 L80.1166,1182.83" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[785].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(785)}  fill-rule="evenodd" d="M89.1368,1182.76 L98.1571,1182.68" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[786].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(786)}  fill-rule="evenodd" d="M107.177,1182.61 L116.198,1182.53" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[787].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(787)}  fill-rule="evenodd" d="M125.218,1182.46 L134.238,1182.38" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[788].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(788)}  fill-rule="evenodd" d="M143.258,1182.31 L152.278,1182.23" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[789].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(789)}  fill-rule="evenodd" d="M161.299,1182.15 L170.319,1182.08" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[790].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(790)}  fill-rule="evenodd" d="M179.339,1182 L188.359,1181.93" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[791].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(791)}  fill-rule="evenodd" d="M197.38,1181.85 L206.4,1181.78" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[792].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(792)}  fill-rule="evenodd" d="M215.42,1181.7 L224.44,1181.63" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[793].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(793)}  fill-rule="evenodd" d="M233.461,1181.55 L242.481,1181.47" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[794].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(794)}  fill-rule="evenodd" d="M251.501,1181.4 L260.521,1181.32" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[795].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(795)}  fill-rule="evenodd" d="M269.541,1181.25 L278.562,1181.17" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[796].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(796)}  fill-rule="evenodd" d="M287.582,1181.1 L289.327,1181.08" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[797].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(797)}  fill-rule="evenodd" d="M8.03934,1191.48 L17.0596,1191.4" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[798].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(798)}  fill-rule="evenodd" d="M26.0798,1191.33 L35.1001,1191.25" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[799].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(799)}  fill-rule="evenodd" d="M44.1203,1191.18 L53.1406,1191.1" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[800].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(800)}  fill-rule="evenodd" d="M62.1608,1191.03 L71.1811,1190.95" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[801].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(801)}  fill-rule="evenodd" d="M80.2013,1190.87 L89.2216,1190.8" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[802].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(802)}  fill-rule="evenodd" d="M98.2418,1190.72 L107.262,1190.65" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[803].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(803)}  fill-rule="evenodd" d="M116.282,1190.57 L125.303,1190.5" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[804].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(804)}  fill-rule="evenodd" d="M134.323,1190.42 L143.343,1190.35" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[805].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(805)}  fill-rule="evenodd" d="M152.363,1190.27 L161.384,1190.19" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[806].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(806)}  fill-rule="evenodd" d="M170.404,1190.12 L179.424,1190.04" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[807].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(807)}  fill-rule="evenodd" d="M188.444,1189.97 L197.464,1189.89" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[808].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(808)}  fill-rule="evenodd" d="M206.485,1189.82 L215.505,1189.74" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[809].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(809)}  fill-rule="evenodd" d="M224.525,1189.67 L233.545,1189.59" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[810].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(810)}  fill-rule="evenodd" d="M242.566,1189.51 L251.586,1189.44" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[811].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(811)}  fill-rule="evenodd" d="M260.606,1189.36 L269.626,1189.29" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[812].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(812)}  fill-rule="evenodd" d="M278.647,1189.21 L287.667,1189.14" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[813].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(813)}  fill-rule="evenodd" d="M-0.896272,1199.59 L8.12399,1199.52" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[814].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(814)}  fill-rule="evenodd" d="M17.1443,1199.44 L26.1645,1199.37" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[815].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(815)}  fill-rule="evenodd" d="M35.1848,1199.29 L44.205,1199.22" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[816].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(816)}  fill-rule="evenodd" d="M53.2253,1199.14 L62.2455,1199.07" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[817].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(817)}  fill-rule="evenodd" d="M71.2658,1198.99 L80.2861,1198.91" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[818].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(818)}  fill-rule="evenodd" d="M89.3063,1198.84 L98.3266,1198.76" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[819].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(819)}  fill-rule="evenodd" d="M107.347,1198.69 L116.367,1198.61" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[820].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(820)}  fill-rule="evenodd" d="M125.387,1198.54 L134.408,1198.46" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[821].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(821)}  fill-rule="evenodd" d="M143.428,1198.39 L152.448,1198.31" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[822].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(822)}  fill-rule="evenodd" d="M161.468,1198.23 L170.489,1198.16" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[823].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(823)}  fill-rule="evenodd" d="M179.509,1198.08 L188.529,1198.01" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[824].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(824)}  fill-rule="evenodd" d="M197.549,1197.93 L206.57,1197.86" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[825].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(825)}  fill-rule="evenodd" d="M215.59,1197.78 L224.61,1197.71" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[826].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(826)}  fill-rule="evenodd" d="M233.63,1197.63 L242.651,1197.55" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[827].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(827)}  fill-rule="evenodd" d="M251.671,1197.48 L260.691,1197.4" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[828].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(828)}  fill-rule="evenodd" d="M269.711,1197.33 L278.732,1197.25" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[829].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(829)}  fill-rule="evenodd" d="M287.752,1197.18 L292.102,1197.14" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[830].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(830)}  fill-rule="evenodd" d="M8.20864,1207.56 L17.2289,1207.48" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[831].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(831)}  fill-rule="evenodd" d="M26.2492,1207.41 L35.2694,1207.33" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[832].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(832)}  fill-rule="evenodd" d="M44.2897,1207.26 L53.31,1207.18" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[833].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(833)}  fill-rule="evenodd" d="M62.3302,1207.11 L71.3505,1207.03" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[834].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(834)}  fill-rule="evenodd" d="M80.3708,1206.95 L89.391,1206.88" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[835].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(835)}  fill-rule="evenodd" d="M98.4113,1206.8 L107.432,1206.73" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[836].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(836)}  fill-rule="evenodd" d="M116.452,1206.65 L125.472,1206.58" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[837].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(837)}  fill-rule="evenodd" d="M134.492,1206.5 L143.513,1206.43" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[838].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(838)}  fill-rule="evenodd" d="M152.533,1206.35 L161.553,1206.27" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[839].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(839)}  fill-rule="evenodd" d="M170.573,1206.2 L179.594,1206.12" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[840].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(840)}  fill-rule="evenodd" d="M188.614,1206.05 L197.634,1205.97" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[841].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(841)}  fill-rule="evenodd" d="M206.654,1205.9 L215.675,1205.82" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[842].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(842)}  fill-rule="evenodd" d="M224.695,1205.75 L233.715,1205.67" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[843].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(843)}  fill-rule="evenodd" d="M242.735,1205.59 L251.756,1205.52" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[844].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(844)}  fill-rule="evenodd" d="M260.776,1205.44 L269.796,1205.37" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[845].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(845)}  fill-rule="evenodd" d="M278.816,1205.29 L287.837,1205.22" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[846].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(846)}  fill-rule="evenodd" d="M-0.726988,1215.67 L8.29329,1215.6" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[847].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(847)}  fill-rule="evenodd" d="M17.3136,1215.52 L26.3338,1215.45" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[848].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(848)}  fill-rule="evenodd" d="M35.3541,1215.37 L44.3744,1215.3" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[849].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(849)}  fill-rule="evenodd" d="M53.3947,1215.22 L62.415,1215.15" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[850].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(850)}  fill-rule="evenodd" d="M71.4352,1215.07 L80.4555,1214.99" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[851].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(851)}  fill-rule="evenodd" d="M89.4758,1214.92 L98.4961,1214.84" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[852].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(852)}  fill-rule="evenodd" d="M107.516,1214.77 L116.537,1214.69" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[853].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(853)}  fill-rule="evenodd" d="M125.557,1214.62 L134.577,1214.54" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[854].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(854)}  fill-rule="evenodd" d="M143.597,1214.47 L152.618,1214.39" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[855].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(855)}  fill-rule="evenodd" d="M161.638,1214.31 L170.658,1214.24" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[856].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(856)}  fill-rule="evenodd" d="M179.678,1214.16 L188.699,1214.09" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[857].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(857)}  fill-rule="evenodd" d="M197.719,1214.01 L206.739,1213.94" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[858].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(858)}  fill-rule="evenodd" d="M215.76,1213.86 L224.78,1213.79" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[859].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(859)}  fill-rule="evenodd" d="M233.8,1213.71 L242.82,1213.63" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[860].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(860)}  fill-rule="evenodd" d="M251.841,1213.56 L260.861,1213.48" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[861].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(861)}  fill-rule="evenodd" d="M269.881,1213.41 L278.901,1213.33" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[862].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(862)}  fill-rule="evenodd" d="M287.922,1213.26 L296.942,1213.18" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[863].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(863)}  fill-rule="evenodd" d="M8.37794,1223.64 L17.3982,1223.56" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[864].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(864)}  fill-rule="evenodd" d="M26.4185,1223.49 L35.4388,1223.41" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[865].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(865)}  fill-rule="evenodd" d="M44.4591,1223.34 L53.4794,1223.26" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[866].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(866)}  fill-rule="evenodd" d="M62.4997,1223.19 L71.5199,1223.11" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[867].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(867)}  fill-rule="evenodd" d="M80.5402,1223.03 L89.5605,1222.96" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[868].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(868)}  fill-rule="evenodd" d="M98.5808,1222.88 L107.601,1222.81" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[869].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(869)}  fill-rule="evenodd" d="M116.621,1222.73 L125.642,1222.66" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[870].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(870)}  fill-rule="evenodd" d="M134.662,1222.58 L143.682,1222.51" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[871].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(871)}  fill-rule="evenodd" d="M152.702,1222.43 L161.723,1222.35" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[872].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(872)}  fill-rule="evenodd" d="M170.743,1222.28 L179.763,1222.2" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[873].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(873)}  fill-rule="evenodd" d="M188.784,1222.13 L197.804,1222.05" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[874].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(874)}  fill-rule="evenodd" d="M206.824,1221.98 L215.844,1221.9" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[875].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(875)}  fill-rule="evenodd" d="M224.865,1221.83 L233.885,1221.75" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[876].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(876)}  fill-rule="evenodd" d="M242.905,1221.67 L251.926,1221.6" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[877].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(877)}  fill-rule="evenodd" d="M260.946,1221.52 L269.966,1221.45" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[878].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(878)}  fill-rule="evenodd" d="M278.986,1221.37 L288.007,1221.3" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[879].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(879)}  fill-rule="evenodd" d="M297.027,1221.22 L298.992,1221.2" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[880].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(880)}  fill-rule="evenodd" d="M-0.557703,1231.75 L8.46259,1231.68" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[881].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(881)}  fill-rule="evenodd" d="M17.4829,1231.6 L26.5032,1231.53" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[882].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(882)}  fill-rule="evenodd" d="M35.5235,1231.45 L44.5438,1231.38" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[883].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(883)}  fill-rule="evenodd" d="M53.5641,1231.3 L62.5844,1231.23" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[884].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(884)}  fill-rule="evenodd" d="M71.6047,1231.15 L80.625,1231.07" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[885].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(885)}  fill-rule="evenodd" d="M89.6452,1231 L98.6655,1230.92" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[886].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(886)}  fill-rule="evenodd" d="M107.686,1230.85 L116.706,1230.77" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[887].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(887)}  fill-rule="evenodd" d="M125.726,1230.7 L134.747,1230.62" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[888].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(888)}  fill-rule="evenodd" d="M143.767,1230.55 L152.787,1230.47" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[889].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(889)}  fill-rule="evenodd" d="M161.808,1230.39 L170.828,1230.32" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[890].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(890)}  fill-rule="evenodd" d="M179.848,1230.24 L188.868,1230.17" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[891].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(891)}  fill-rule="evenodd" d="M197.889,1230.09 L206.909,1230.02" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[892].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(892)}  fill-rule="evenodd" d="M215.929,1229.94 L224.95,1229.87" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[893].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(893)}  fill-rule="evenodd" d="M233.97,1229.79 L242.99,1229.71" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[894].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(894)}  fill-rule="evenodd" d="M252.01,1229.64 L261.031,1229.56" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[895].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(895)}  fill-rule="evenodd" d="M270.051,1229.49 L279.071,1229.41" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[896].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(896)}  fill-rule="evenodd" d="M288.092,1229.34 L297.112,1229.26" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[897].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(897)}  fill-rule="evenodd" d="M8.54725,1239.72 L17.5675,1239.64" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[898].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(898)}  fill-rule="evenodd" d="M26.5879,1239.57 L35.6082,1239.49" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[899].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(899)}  fill-rule="evenodd" d="M44.6285,1239.42 L53.6488,1239.34" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[900].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(900)}  fill-rule="evenodd" d="M62.6691,1239.27 L71.6894,1239.19" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[901].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(901)}  fill-rule="evenodd" d="M80.7097,1239.11 L89.73,1239.04" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[902].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(902)}  fill-rule="evenodd" d="M98.7503,1238.96 L107.771,1238.89" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[903].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(903)}  fill-rule="evenodd" d="M116.791,1238.81 L125.811,1238.74" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[904].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(904)}  fill-rule="evenodd" d="M134.831,1238.66 L143.852,1238.59" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[905].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(905)}  fill-rule="evenodd" d="M152.872,1238.51 L161.892,1238.43" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[906].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(906)}  fill-rule="evenodd" d="M170.913,1238.36 L179.933,1238.28" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[907].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(907)}  fill-rule="evenodd" d="M188.953,1238.21 L197.974,1238.13" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[908].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(908)}  fill-rule="evenodd" d="M206.994,1238.06 L216.014,1237.98" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[909].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(909)}  fill-rule="evenodd" d="M225.034,1237.91 L234.055,1237.83" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[910].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(910)}  fill-rule="evenodd" d="M243.075,1237.75 L252.095,1237.68" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[911].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(911)}  fill-rule="evenodd" d="M261.116,1237.6 L270.136,1237.53" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[912].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(912)}  fill-rule="evenodd" d="M279.156,1237.45 L288.177,1237.38" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[913].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(913)}  fill-rule="evenodd" d="M297.197,1237.3 L299.174,1237.28" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[914].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(914)}  fill-rule="evenodd" d="M-0.388419,1247.83 L8.6319,1247.76" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[915].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(915)}  fill-rule="evenodd" d="M17.6522,1247.68 L26.6725,1247.61" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[916].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(916)}  fill-rule="evenodd" d="M35.6928,1247.53 L44.7132,1247.46" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[917].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(917)}  fill-rule="evenodd" d="M53.7335,1247.38 L62.7538,1247.31" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[918].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(918)}  fill-rule="evenodd" d="M71.7741,1247.23 L80.7944,1247.16" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[919].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(919)}  fill-rule="evenodd" d="M89.8147,1247.08 L98.835,1247" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[920].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(920)}  fill-rule="evenodd" d="M107.855,1246.93 L116.876,1246.85" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[921].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(921)}  fill-rule="evenodd" d="M125.896,1246.78 L134.916,1246.7" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[922].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(922)}  fill-rule="evenodd" d="M143.937,1246.63 L152.957,1246.55" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[923].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(923)}  fill-rule="evenodd" d="M161.977,1246.48 L170.998,1246.4" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[924].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(924)}  fill-rule="evenodd" d="M180.018,1246.32 L189.038,1246.25" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[925].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(925)}  fill-rule="evenodd" d="M198.058,1246.17 L207.079,1246.1" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[926].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(926)}  fill-rule="evenodd" d="M216.099,1246.02 L225.119,1245.95" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[927].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(927)}  fill-rule="evenodd" d="M234.14,1245.87 L243.16,1245.79" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[928].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(928)}  fill-rule="evenodd" d="M252.18,1245.72 L261.201,1245.64" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[929].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(929)}  fill-rule="evenodd" d="M270.221,1245.57 L279.241,1245.49" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[930].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(930)}  fill-rule="evenodd" d="M288.261,1245.42 L297.282,1245.34" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[931].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(931)}  fill-rule="evenodd" d="M8.71655,1255.8 L17.7369,1255.72" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[932].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(932)}  fill-rule="evenodd" d="M26.7572,1255.65 L35.7775,1255.57" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[933].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(933)}  fill-rule="evenodd" d="M44.7978,1255.5 L53.8182,1255.42" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[934].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(934)}  fill-rule="evenodd" d="M62.8385,1255.35 L71.8588,1255.27" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[935].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(935)}  fill-rule="evenodd" d="M80.8791,1255.2 L89.8995,1255.12" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[936].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(936)}  fill-rule="evenodd" d="M98.9198,1255.04 L107.94,1254.97" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[937].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(937)}  fill-rule="evenodd" d="M116.96,1254.89 L125.981,1254.82" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[938].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(938)}  fill-rule="evenodd" d="M135.001,1254.74 L144.021,1254.67" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[939].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(939)}  fill-rule="evenodd" d="M153.042,1254.59 L162.062,1254.52" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[940].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(940)}  fill-rule="evenodd" d="M171.082,1254.44 L180.103,1254.36" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[941].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(941)}  fill-rule="evenodd" d="M189.123,1254.29 L198.143,1254.21" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[942].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(942)}  fill-rule="evenodd" d="M207.164,1254.14 L216.184,1254.06" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[943].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(943)}  fill-rule="evenodd" d="M225.204,1253.99 L234.225,1253.91" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[944].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(944)}  fill-rule="evenodd" d="M243.245,1253.83 L252.265,1253.76" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[945].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(945)}  fill-rule="evenodd" d="M261.285,1253.68 L270.306,1253.61" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[946].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(946)}  fill-rule="evenodd" d="M279.326,1253.53 L288.346,1253.46" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[947].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(947)}  fill-rule="evenodd" d="M297.367,1253.38 L302.425,1253.34" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[948].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(948)}  fill-rule="evenodd" d="M-0.219134,1263.91 L8.8012,1263.84" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[949].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(949)}  fill-rule="evenodd" d="M17.8215,1263.76 L26.8419,1263.69" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[950].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(950)}  fill-rule="evenodd" d="M35.8622,1263.61 L44.8825,1263.54" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[951].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(951)}  fill-rule="evenodd" d="M53.9029,1263.46 L62.9232,1263.39" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[952].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(952)}  fill-rule="evenodd" d="M71.9435,1263.31 L80.9639,1263.24" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[953].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(953)}  fill-rule="evenodd" d="M89.9842,1263.16 L99.0045,1263.08" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[954].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(954)}  fill-rule="evenodd" d="M108.025,1263.01 L117.045,1262.93" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[955].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(955)}  fill-rule="evenodd" d="M126.066,1262.86 L135.086,1262.78" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[956].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(956)}  fill-rule="evenodd" d="M144.106,1262.71 L153.126,1262.63" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[957].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(957)}  fill-rule="evenodd" d="M162.147,1262.56 L171.167,1262.48" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[958].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(958)}  fill-rule="evenodd" d="M180.187,1262.4 L189.208,1262.33" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[959].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(959)}  fill-rule="evenodd" d="M198.228,1262.25 L207.248,1262.18" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[960].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(960)}  fill-rule="evenodd" d="M216.269,1262.1 L225.289,1262.03" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[961].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(961)}  fill-rule="evenodd" d="M234.309,1261.95 L243.33,1261.87" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[962].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(962)}  fill-rule="evenodd" d="M252.35,1261.8 L261.37,1261.72" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[963].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(963)}  fill-rule="evenodd" d="M270.391,1261.65 L279.411,1261.57" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[964].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(964)}  fill-rule="evenodd" d="M288.431,1261.5 L297.452,1261.42" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[965].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(965)}  fill-rule="evenodd" d="M8.88586,1271.88 L17.9062,1271.8" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[966].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(966)}  fill-rule="evenodd" d="M26.9265,1271.73 L35.9469,1271.65" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[967].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(967)}  fill-rule="evenodd" d="M44.9672,1271.58 L53.9876,1271.5" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[968].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(968)}  fill-rule="evenodd" d="M63.0079,1271.43 L72.0283,1271.35" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[969].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(969)}  fill-rule="evenodd" d="M81.0486,1271.28 L90.0689,1271.2" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[970].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(970)}  fill-rule="evenodd" d="M99.0893,1271.12 L108.11,1271.05" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[971].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(971)}  fill-rule="evenodd" d="M117.13,1270.97 L126.15,1270.9" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[972].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(972)}  fill-rule="evenodd" d="M135.171,1270.82 L144.191,1270.75" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[973].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(973)}  fill-rule="evenodd" d="M153.211,1270.67 L162.232,1270.6" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[974].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(974)}  fill-rule="evenodd" d="M171.252,1270.52 L180.272,1270.44" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[975].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(975)}  fill-rule="evenodd" d="M189.293,1270.37 L198.313,1270.29" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[976].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(976)}  fill-rule="evenodd" d="M207.333,1270.22 L216.354,1270.14" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[977].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(977)}  fill-rule="evenodd" d="M225.374,1270.07 L234.394,1269.99" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[978].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(978)}  fill-rule="evenodd" d="M243.415,1269.91 L252.435,1269.84" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[979].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(979)}  fill-rule="evenodd" d="M261.455,1269.76 L270.476,1269.69" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[980].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(980)}  fill-rule="evenodd" d="M279.496,1269.61 L288.516,1269.54" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[981].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(981)}  fill-rule="evenodd" d="M297.537,1269.46 L302.084,1269.42" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[982].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(982)}  fill-rule="evenodd" d="M-0.0498429,1279.99 L8.97051,1279.92" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[983].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(983)}  fill-rule="evenodd" d="M17.9909,1279.84 L27.0112,1279.77" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[984].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(984)}  fill-rule="evenodd" d="M36.0316,1279.69 L45.0519,1279.62" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[985].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(985)}  fill-rule="evenodd" d="M54.0723,1279.54 L63.0926,1279.47" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[986].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(986)}  fill-rule="evenodd" d="M72.113,1279.39 L81.1333,1279.32" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[987].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(987)}  fill-rule="evenodd" d="M90.1537,1279.24 L99.174,1279.16" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[988].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(988)}  fill-rule="evenodd" d="M108.194,1279.09 L117.215,1279.01" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[989].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(989)}  fill-rule="evenodd" d="M126.235,1278.94 L135.255,1278.86" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[990].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(990)}  fill-rule="evenodd" d="M144.276,1278.79 L153.296,1278.71" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[991].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(991)}  fill-rule="evenodd" d="M162.316,1278.64 L171.337,1278.56" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[992].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(992)}  fill-rule="evenodd" d="M180.357,1278.48 L189.377,1278.41" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[993].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(993)}  fill-rule="evenodd" d="M198.398,1278.33 L207.418,1278.26" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[994].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(994)}  fill-rule="evenodd" d="M216.439,1278.18 L225.459,1278.11" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[995].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(995)}  fill-rule="evenodd" d="M234.479,1278.03 L243.5,1277.95" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[996].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(996)}  fill-rule="evenodd" d="M252.52,1277.88 L261.54,1277.8" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[997].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(997)}  fill-rule="evenodd" d="M270.561,1277.73 L279.581,1277.65" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[998].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(998)}  fill-rule="evenodd" d="M288.601,1277.58 L297.622,1277.5" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[999].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(999)}  fill-rule="evenodd" d="M-8.98556,1288.11 L0.0347993,1288.03" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[1000].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(1000)}  fill-rule="evenodd" d="M9.05516,1287.96 L18.0755,1287.88" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[1001].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(1001)}  fill-rule="evenodd" d="M27.0959,1287.81 L36.1163,1287.73" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[1002].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(1002)}  fill-rule="evenodd" d="M45.1366,1287.66 L54.157,1287.58" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[1003].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(1003)}  fill-rule="evenodd" d="M63.1773,1287.51 L72.1977,1287.43" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[1004].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(1004)}  fill-rule="evenodd" d="M81.2181,1287.36 L90.2384,1287.28" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[1005].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(1005)}  fill-rule="evenodd" d="M99.2588,1287.2 L108.279,1287.13" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[1006].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(1006)}  fill-rule="evenodd" d="M117.299,1287.05 L126.32,1286.98" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[1007].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(1007)}  fill-rule="evenodd" d="M135.34,1286.9 L144.361,1286.83" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[1008].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(1008)}  fill-rule="evenodd" d="M153.381,1286.75 L162.401,1286.68" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[1009].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(1009)}  fill-rule="evenodd" d="M171.422,1286.6 L180.442,1286.52" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[1010].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(1010)}  fill-rule="evenodd" d="M189.462,1286.45 L198.483,1286.37" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[1011].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(1011)}  fill-rule="evenodd" d="M207.503,1286.3 L216.523,1286.22" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[1012].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(1012)}  fill-rule="evenodd" d="M225.544,1286.15 L234.564,1286.07" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[1013].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(1013)}  fill-rule="evenodd" d="M243.584,1285.99 L252.605,1285.92" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[1014].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(1014)}  fill-rule="evenodd" d="M261.625,1285.84 L270.645,1285.77" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[1015].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(1015)}  fill-rule="evenodd" d="M279.666,1285.69 L288.686,1285.62" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[1016].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(1016)}  fill-rule="evenodd" d="M297.707,1285.54 L304.839,1285.48" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[1017].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(1017)}  fill-rule="evenodd" d="M-105.448,1297.06 L307.23,1293.09" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[1018].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(1018)}  fill-rule="evenodd" d="M307.23,1293.09 L305.693,1289.11" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[1019].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(1019)}  fill-rule="evenodd" d="M305.693,1289.11 L304.772,1285.2" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[1020].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(1020)}  fill-rule="evenodd" d="M304.772,1285.2 L304.145,1279.95" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[1021].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(1021)}  fill-rule="evenodd" d="M304.145,1279.95 L303.08,1274.87" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[1022].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(1022)}  fill-rule="evenodd" d="M303.08,1274.87 L301.913,1268.49" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[1023].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(1023)}  fill-rule="evenodd" d="M301.913,1268.49 L301.609,1264.69" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[1024].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(1024)}  fill-rule="evenodd" d="M301.609,1264.69 L302.113,1262.37" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[1025].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(1025)}  fill-rule="evenodd" d="M302.113,1262.37 L302.656,1259.66" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[1026].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(1026)}  fill-rule="evenodd" d="M302.656,1259.66 L302.632,1257.43" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[1027].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(1027)}  fill-rule="evenodd" d="M302.632,1257.43 L302.733,1254.53" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[1028].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(1028)}  fill-rule="evenodd" d="M302.733,1254.53 L301.862,1251.17" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[1029].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(1029)}  fill-rule="evenodd" d="M301.862,1251.17 L300.855,1247.41" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[1030].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(1030)}  fill-rule="evenodd" d="M300.855,1247.41 L299.374,1240.37" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[1031].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(1031)}  fill-rule="evenodd" d="M299.374,1240.37 L298.901,1233.09" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[1032].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(1032)}  fill-rule="evenodd" d="M298.901,1233.09 L299.299,1229.09" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[1033].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(1033)}  fill-rule="evenodd" d="M299.299,1229.09 L299.613,1225.52" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[1034].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(1034)}  fill-rule="evenodd" d="M299.613,1225.52 L299.088,1221.64" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[1035].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(1035)}  fill-rule="evenodd" d="M299.088,1221.64 L297.703,1215.34" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[1036].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(1036)}  fill-rule="evenodd" d="M297.703,1215.34 L296.743,1211.94" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[1037].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(1037)}  fill-rule="evenodd" d="M296.743,1211.94 L296.459,1209.99" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[1038].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(1038)}  fill-rule="evenodd" d="M296.459,1209.99 L296.48,1207.83" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[1039].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(1039)}  fill-rule="evenodd" d="M296.48,1207.83 L296.108,1205.87" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[1040].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(1040)}  fill-rule="evenodd" d="M296.108,1205.87 L295.035,1204.2" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[1041].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(1041)}  fill-rule="evenodd" d="M295.035,1204.2 L292.988,1201.9" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[1042].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(1042)}  fill-rule="evenodd" d="M292.988,1201.9 L292.13,1199.79" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[1043].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(1043)}  fill-rule="evenodd" d="M292.13,1199.79 L292.1,1196.93" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[1044].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(1044)}  fill-rule="evenodd" d="M292.1,1196.93 L291.578,1193.29" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[1045].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(1045)}  fill-rule="evenodd" d="M291.578,1193.29 L290.515,1188.36" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[1046].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(1046)}  fill-rule="evenodd" d="M290.515,1188.36 L289.219,1182.22" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[1047].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(1047)}  fill-rule="evenodd" d="M289.219,1182.22 L289.417,1180.14" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[1048].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(1048)}  fill-rule="evenodd" d="M289.417,1180.14 L290.454,1178.41" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[1049].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(1049)}  fill-rule="evenodd" d="M290.454,1178.41 L291.401,1176.56" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[1050].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(1050)}  fill-rule="evenodd" d="M291.401,1176.56 L291.56,1174.95" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[1051].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(1051)}  fill-rule="evenodd" d="M291.56,1174.95 L291.367,1173.31" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[1052].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(1052)}  fill-rule="evenodd" d="M291.367,1173.31 L290.949,1171.2" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[1053].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(1053)}  fill-rule="evenodd" d="M290.949,1171.2 L291.556,1166.21" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[1054].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(1054)}  fill-rule="evenodd" d="M291.556,1166.21 L292.36,1163.23" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[1055].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(1055)}  fill-rule="evenodd" d="M292.36,1163.23 L293.611,1160.98" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[1056].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(1056)}  fill-rule="evenodd" d="M293.611,1160.98 L294.38,1158.86" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[1057].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(1057)}  fill-rule="evenodd" d="M294.38,1158.86 L294.318,1157.18" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[1058].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(1058)}  fill-rule="evenodd" d="M294.318,1157.18 L293.597,1155.46" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[1059].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(1059)}  fill-rule="evenodd" d="M293.597,1155.46 L291.108,1152.93" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[1060].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(1060)}  fill-rule="evenodd" d="M291.108,1152.93 L288.188,1151.27" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[1061].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(1061)}  fill-rule="evenodd" d="M288.188,1151.27 L284.909,1148.79" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[1062].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(1062)}  fill-rule="evenodd" d="M284.909,1148.79 L282.863,1146.61" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[1063].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(1063)}  fill-rule="evenodd" d="M282.863,1146.61 L281.773,1143.25" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[1064].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(1064)}  fill-rule="evenodd" d="M281.773,1143.25 L282.04,1139.41" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[1065].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(1065)}  fill-rule="evenodd" d="M282.04,1139.41 L283.318,1135.6" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[1066].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(1066)}  fill-rule="evenodd" d="M283.318,1135.6 L284.255,1128.57" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[1067].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(1067)}  fill-rule="evenodd" d="M284.255,1128.57 L285.189,1125.35" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[1068].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(1068)}  fill-rule="evenodd" d="M285.189,1125.35 L286.121,1122.01" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[1069].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(1069)}  fill-rule="evenodd" d="M286.121,1122.01 L286.768,1116.68" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[1070].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(1070)}  fill-rule="evenodd" d="M286.768,1116.68 L287.91,1108.28" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[1071].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(1071)}  fill-rule="evenodd" d="M287.91,1108.28 L288.475,1099.34" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[1072].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(1072)}  fill-rule="evenodd" d="M288.475,1099.34 L288.379,1090.21" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[1073].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(1073)}  fill-rule="evenodd" d="M288.379,1090.21 L287.572,1084.58" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[1074].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(1074)}  fill-rule="evenodd" d="M287.572,1084.58 L286.372,1079.22" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[1075].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(1075)}  fill-rule="evenodd" d="M286.372,1079.22 L283.713,1068.93" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[1076].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(1076)}  fill-rule="evenodd" d="M283.713,1068.93 L283.186,1064.82" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[1077].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(1077)}  fill-rule="evenodd" d="M283.186,1064.82 L283.454,1060.98" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[1078].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(1078)}  fill-rule="evenodd" d="M283.454,1060.98 L283.406,1056.47" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[1079].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(1079)}  fill-rule="evenodd" d="M283.406,1056.47 L283.053,1052.17" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[1080].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(1080)}  fill-rule="evenodd" d="M283.053,1052.17 L281.547,1046.97" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[1081].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(1081)}  fill-rule="evenodd" d="M281.547,1046.97 L281.108,1042.86" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[1082].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(1082)}  fill-rule="evenodd" d="M281.108,1042.86 L281.745,1036.58" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[1083].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(1083)}  fill-rule="evenodd" d="M281.745,1036.58 L282.404,1032.34" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[1084].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(1084)}  fill-rule="evenodd" d="M282.404,1032.34 L282.546,1029.17" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[1085].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(1085)}  fill-rule="evenodd" d="M282.546,1029.17 L282.344,1026.7" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[1086].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(1086)}  fill-rule="evenodd" d="M282.344,1026.7 L282.173,1025.09" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[1087].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(1087)}  fill-rule="evenodd" d="M282.173,1025.09 L281.923,1022.24" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[1088].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(1088)}  fill-rule="evenodd" d="M281.923,1022.24 L281.628,1019.3" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[1089].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(1089)}  fill-rule="evenodd" d="M281.628,1019.3 L282.139,1017.65" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[1090].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(1090)}  fill-rule="evenodd" d="M282.139,1017.65 L282.562,1016.08" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[1091].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(1091)}  fill-rule="evenodd" d="M282.562,1016.08 L282.193,1014.47" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[1092].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(1092)}  fill-rule="evenodd" d="M282.193,1014.47 L282.435,1012.43" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[1093].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(1093)}  fill-rule="evenodd" d="M282.435,1012.43 L282.491,1009.38" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[1094].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(1094)}  fill-rule="evenodd" d="M282.491,1009.38 L282.542,1005.93" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[1095].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(1095)}  fill-rule="evenodd" d="M282.542,1005.93 L282.664,1000.83" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[1096].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(1096)}  fill-rule="evenodd" d="M282.664,1000.83 L282.405,997.073" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[1097].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(1097)}  fill-rule="evenodd" d="M282.405,997.073 L282.543,993.545" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[1098].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(1098)}  fill-rule="evenodd" d="M282.543,993.545 L282.843,988.644" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[1099].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(1099)}  fill-rule="evenodd" d="M282.843,988.644 L282.984,985.351" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[1100].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(1100)}  fill-rule="evenodd" d="M282.984,985.351 L282.956,982.647" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[1101].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(1101)}  fill-rule="evenodd" d="M282.956,982.647 L283.444,978.881" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[1102].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(1102)}  fill-rule="evenodd" d="M283.444,978.881 L284.717,974.52" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[1103].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(1103)}  fill-rule="evenodd" d="M284.717,974.52 L286.354,967.256" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[1104].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(1104)}  fill-rule="evenodd" d="M286.354,967.256 L287.052,962.548" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[1105].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(1105)}  fill-rule="evenodd" d="M287.052,962.548 L-98.1271,968.829" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[1106].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(1106)}  fill-rule="evenodd" d="M2398.87,859.405 L2377.87,856.154" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[1107].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(1107)}  fill-rule="evenodd" d="M2390.06,941.577 L2395.72,912.572" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[1108].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(1108)}  fill-rule="evenodd" d="M2388.72,911.488 L2395.72,912.572" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[1109].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(1109)}  fill-rule="evenodd" d="M2410.27,1008.33 L2407.86,1035.56" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[1110].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(1110)}  fill-rule="evenodd" d="M2350.23,1001.82 L2411.12,1004" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[1111].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(1111)}  fill-rule="evenodd" d="M2347.18,1208.49 L2378.76,1207.31 L2410.28,1205.14 L2418.31,1204.42" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[1112].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(1112)}  fill-rule="evenodd" d="M2345.79,1271.79 L2416.81,1273.03" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[1113].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(1113)}  fill-rule="evenodd" d="M2416.81,1273.03 L2418.31,1204.42" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[1114].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(1114)}  fill-rule="evenodd" d="M2489.56,1195.27 L2520.53,1189.66 L2535.15,1186.66" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[1115].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(1115)}  fill-rule="evenodd" d="M2489.56,1195.27 L2487.82,1274.27" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[1116].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(1116)}  fill-rule="evenodd" d="M2487.82,1274.27 L2527.2,1274.96" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[1117].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(1117)}  fill-rule="evenodd" d="M2527.2,1274.96 L2532.16,1274.97 L2537.12,1274.82 L2542.06,1274.52 L2547,1274.07 L2551.91,1273.47 L2556.79,1272.71 L2558.15,1272.47" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[1118].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(1118)}  fill-rule="evenodd" d="M2558.15,1272.47 L2535.15,1186.66" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[1119].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(1119)}  fill-rule="evenodd" d="M2535.15,1186.66 L2565.76,1179.64 L2586.28,1174.35" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[1120].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(1120)}  fill-rule="evenodd" d="M2558.15,1272.47 L2562.99,1271.52 L2567.79,1270.42 L2572.55,1269.17 L2577.25,1267.77 L2581.9,1266.22 L2586.48,1264.54 L2587.74,1264.04" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[1121].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(1121)}  fill-rule="evenodd" d="M2587.74,1264.04 L2612.08,1254.39" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[1122].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(1122)}  fill-rule="evenodd" d="M2618.67,1239.21 L2618.14,1239.68 L2617.63,1240.16 L2617.13,1240.66 L2616.66,1241.17 L2616.21,1241.69 L2615.77,1242.23 L2615.36,1242.79 L2614.97,1243.35 L2614.61,1243.93 L2614.26,1244.51 L2613.94,1245.11 L2613.65,1245.72 L2613.37,1246.34 L2613.12,1246.96 L2612.9,1247.59 L2612.7,1248.23 L2612.53,1248.88 L2612.38,1249.53 L2612.26,1250.18 L2612.16,1250.84 L2612.09,1251.5 L2612.04,1252.16 L2612.02,1252.82 L2612.03,1253.49 L2612.06,1254.15 L2612.08,1254.39" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[1123].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(1123)}  fill-rule="evenodd" d="M2618.67,1239.21 L2586.28,1174.35" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[1124].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(1124)}  fill-rule="evenodd" d="M2416.53,1285.69 L2345.51,1284.45" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[1125].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(1125)}  fill-rule="evenodd" d="M2344.12,1347.75 L2415.14,1348.99" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[1126].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(1126)}  fill-rule="evenodd" d="M2415.14,1348.99 L2416.53,1285.69" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[1127].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(1127)}  fill-rule="evenodd" d="M2487.54,1286.93 L2416.53,1285.69" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[1128].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(1128)}  fill-rule="evenodd" d="M2415.14,1348.99 L2486.15,1350.23" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[1129].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(1129)}  fill-rule="evenodd" d="M2486.15,1350.23 L2487.54,1286.93" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[1130].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(1130)}  fill-rule="evenodd" d="M2526.92,1287.62 L2532.38,1287.63 L2537.83,1287.47 L2543.27,1287.14 L2548.7,1286.64 L2554.1,1285.98 L2559.47,1285.14 L2561.45,1284.79" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[1131].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(1131)}  fill-rule="evenodd" d="M2526.92,1287.62 L2487.54,1286.93" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[1132].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(1132)}  fill-rule="evenodd" d="M2486.15,1350.23 L2576.42,1351.8" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[1133].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(1133)}  fill-rule="evenodd" d="M2576.42,1351.8 L2561.45,1284.79" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[1134].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(1134)}  fill-rule="evenodd" d="M2617.78,1265.99 L2618.3,1266.46 L2618.83,1266.92 L2619.39,1267.36 L2619.96,1267.79 L2620.55,1268.2 L2621.15,1268.58 L2621.77,1268.95 L2622.4,1269.3 L2623.04,1269.63 L2623.7,1269.94 L2624.37,1270.23 L2625.05,1270.5 L2625.74,1270.75 L2626.44,1270.97 L2627.15,1271.18 L2627.86,1271.36 L2628.59,1271.52 L2629.31,1271.65 L2630.05,1271.77 L2630.78,1271.86 L2631.52,1271.92 L2632.27,1271.97 L2633.01,1271.99 L2633.75,1271.99 L2634.5,1271.96 L2635.24,1271.92 L2635.98,1271.85 L2636.71,1271.75 L2637.45,1271.63 L2638.17,1271.5 L2638.89,1271.33 L2639.61,1271.15 L2640.31,1270.94 L2641.01,1270.71 L2641.7,1270.46 L2642.38,1270.19 L2643.05,1269.9 L2643.7,1269.59 L2644.35,1269.26 L2644.98,1268.9 L2645.59,1268.53 L2646.19,1268.14 L2646.49,1267.93" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[1135].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(1135)}  fill-rule="evenodd" d="M2617.78,1265.99 L2593.52,1275.61" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[1136].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(1136)}  fill-rule="evenodd" d="M2561.45,1284.79 L2566.77,1283.73 L2572.05,1282.5 L2577.28,1281.11 L2582.44,1279.56 L2587.55,1277.85 L2592.58,1275.98 L2593.52,1275.61" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[1137].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(1137)}  fill-rule="evenodd" d="M2576.42,1351.8 L2704.8,1300.87" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[1138].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(1138)}  fill-rule="evenodd" d="M2704.8,1300.87 L2646.49,1267.93" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[1139].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(1139)}  fill-rule="evenodd" d="M2412.96,1448.01 L2415.14,1348.99" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[1140].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(1140)}  fill-rule="evenodd" d="M2412.96,1448.01 L2426.22,1453.2" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[1141].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(1141)}  fill-rule="evenodd" d="M2483.68,1462.85 L2486.15,1350.23" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[1142].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(1142)}  fill-rule="evenodd" d="M2524.47,1455.38 L2611.02,1421.11" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[1143].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(1143)}  fill-rule="evenodd" d="M2611.02,1421.11 L2576.42,1351.8" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[1144].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(1144)}  fill-rule="evenodd" d="M2611.02,1421.11 L2675.18,1395.7" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[1145].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(1145)}  fill-rule="evenodd" d="M2675.18,1395.7 L2640.61,1326.34" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[1146].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(1146)}  fill-rule="evenodd" d="M2675.18,1395.7 L2781.14,1353.75" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[1147].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(1147)}  fill-rule="evenodd" d="M2780.78,1343.79 L2780.63,1344.66 L2780.52,1345.54 L2780.44,1346.42 L2780.4,1347.3 L2780.39,1348.19 L2780.41,1349.07 L2780.48,1349.95 L2780.57,1350.83 L2780.7,1351.71 L2780.86,1352.58 L2781.06,1353.45 L2781.14,1353.75" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[1148].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(1148)}  fill-rule="evenodd" d="M2780.78,1343.79 L2704.8,1300.87" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[1149].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(1149)}  fill-rule="evenodd" d="M2418.31,1204.42 L2449.69,1201.03 L2480.92,1196.65 L2489.56,1195.27" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[1150].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(1150)}  fill-rule="evenodd" d="M2416.81,1273.03 L2487.82,1274.27" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[1151].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(1151)}  fill-rule="evenodd" d="M2797.89,1371.35 L2541.14,1473.21" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[1152].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(1152)}  fill-rule="evenodd" d="M2416.23,1473.49 L2415.93,1473.37" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[1153].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(1153)}  fill-rule="evenodd" d="M1917.45,966.478 L1913.03,1029.67" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[1154].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(1154)}  fill-rule="evenodd" d="M1886.42,901.322 L1877.59,1027.7" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[1155].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(1155)}  fill-rule="evenodd" d="M1850.98,899.352 L1842.14,1025.73" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[1156].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(1156)}  fill-rule="evenodd" d="M1815.53,897.383 L1806.7,1023.76" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[1157].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(1157)}  fill-rule="evenodd" d="M1753.51,893.936 L1744.67,1020.31" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[1158].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(1158)}  fill-rule="evenodd" d="M2039.98,909.852 L1986.37,906.874" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[1159].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(1159)}  fill-rule="evenodd" d="M2045.94,971.971 L2057.32,912.576" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[1160].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(1160)}  fill-rule="evenodd" d="M2011.18,908.252 L2006.91,969.32" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[1161].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(1161)}  fill-rule="evenodd" d="M2034.23,909.532 L2026.42,970.159" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[1162].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(1162)}  fill-rule="evenodd" d="M2030.37,1043.24 L2028.27,1105.51" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[1163].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(1163)}  fill-rule="evenodd" d="M1917.45,966.478 L1882,964.509" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[1164].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(1164)}  fill-rule="evenodd" d="M1811.12,960.57 L1846.56,962.54" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[1165].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(1165)}  fill-rule="evenodd" d="M1846.56,962.54 L1882,964.509" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[1166].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(1166)}  fill-rule="evenodd" d="M1811.12,960.57 L1749.09,957.123" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[1167].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(1167)}  fill-rule="evenodd" d="M2060.22,1042.64 L2058.06,1106.45" vector-effect="none"/>
                </Tooltip>
                          );
                        })}
  </g>
  <g stroke="#00ffff" stroke-linejoin="miter" fill="none" stroke-linecap="butt" font-family="MS Shell Dlg 2" font-weight="400" stroke-opacity="1" font-size="32.5" transform="matrix(0.999751,0,0,0.999751,0,0)" font-style="normal" stroke-miterlimit="2" stroke-width="3.07087">

        {[1168].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(1168)}  fill-rule="evenodd" d="M2403.9,778.666 L2583.88,787.319" vector-effect="none"/>
                </Tooltip>
                          );
                        })}
  </g>
  <g stroke="#a47158" stroke-linejoin="bevel" fill="none" stroke-linecap="square" font-family="MS Shell Dlg 2" font-weight="400" stroke-opacity="1" font-size="32.5" transform="matrix(0.999751,0,0,0.999751,0,0)" font-style="normal" stroke-width="3.07087">

        {[1169].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(1169)}  fill-rule="evenodd" d="M2407.28,628.608 L2388.67,734.81" vector-effect="none"/>
                </Tooltip>
                          );
                        })}
  </g>
  <g stroke="#7eadbd" stroke-linejoin="miter" fill="none" stroke-linecap="butt" font-family="MS Shell Dlg 2" font-weight="400" stroke-opacity="1" font-size="32.5" transform="matrix(0.999751,0,0,0.999751,0,0)" font-style="normal" stroke-miterlimit="2" stroke-width="3.07087">

        {[1170].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(1170)}  fill-rule="evenodd" d="M2391.72,628.812 L2372.98,735.725" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[1171].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(1171)}  fill-rule="evenodd" d="M2385.67,628.891 L2367.08,734.904" vector-effect="none"/>
                </Tooltip>
                          );
                        })}
  </g>
  <g stroke="#ffff00" stroke-linejoin="miter" fill="none" stroke-linecap="butt" font-family="MS Shell Dlg 2" font-weight="400" stroke-opacity="1" font-size="32.5" transform="matrix(0.999751,0,0,0.999751,0,0)" font-style="normal" stroke-miterlimit="2" stroke-width="3.07087">

        {[1172].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(1172)}  fill-rule="evenodd" d="M2381.46,628.946 L2362.47,737.263" vector-effect="none"/>
                </Tooltip>
                          );
                        })}
  </g>
  <g stroke="#a47158" stroke-linejoin="bevel" fill="none" stroke-linecap="square" font-family="MS Shell Dlg 2" font-weight="400" stroke-opacity="1" font-size="32.5" transform="matrix(0.999751,0,0,0.999751,0,0)" font-style="normal" stroke-width="3.07087">

        {[1173].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(1173)}  fill-rule="evenodd" d="M2413.34,628.529 L2394.56,735.631" vector-effect="none"/>
                </Tooltip>
                          );
                        })}
  </g>
  <g stroke="#ffff00" stroke-linejoin="miter" fill="none" stroke-linecap="butt" font-family="MS Shell Dlg 2" font-weight="400" stroke-opacity="1" font-size="32.5" transform="matrix(0.999751,0,0,0.999751,0,0)" font-style="normal" stroke-miterlimit="2" stroke-width="3.07087">

        {[1174].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(1174)}  fill-rule="evenodd" d="M2417.65,628.473 L2398.1,739.965" vector-effect="none"/>
                </Tooltip>
                          );
                        })}
  </g>
  <g stroke="#a47158" stroke-linejoin="bevel" fill="none" stroke-linecap="square" font-family="MS Shell Dlg 2" font-weight="400" stroke-opacity="1" font-size="32.5" transform="matrix(0.999751,0,0,0.999751,0,0)" font-style="normal" stroke-width="3.07087">

        {[1175].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(1175)}  fill-rule="evenodd" d="M2380.18,788.86 L2372.86,826.4" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[1176].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(1176)}  fill-rule="evenodd" d="M2386.47,789.835 L2379.37,826.315" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[1177].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(1177)}  fill-rule="evenodd" d="M2391.23,787.651 L2383.7,826.258" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[1178].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(1178)}  fill-rule="evenodd" d="M2366.19,786.636 L2358.41,826.589" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[1179].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(1179)}  fill-rule="evenodd" d="M2359.89,785.66 L2351.9,826.674" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[1180].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(1180)}  fill-rule="evenodd" d="M2356.25,782.186 L2347.57,826.73" vector-effect="none"/>
                </Tooltip>
                          );
                        })}
  </g>
  <g stroke="#ffff00" stroke-linejoin="miter" fill="none" stroke-linecap="butt" font-family="MS Shell Dlg 2" font-weight="400" stroke-opacity="1" font-size="32.5" transform="matrix(0.999751,0,0,0.999751,0,0)" font-style="normal" stroke-miterlimit="2" stroke-width="3.07087">

        {[1181].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(1181)}  fill-rule="evenodd" d="M2588.13,755.822 L2405.82,747.058" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[1182].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(1182)}  fill-rule="evenodd" d="M2586.43,768.421 L2409.87,759.933" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[1183].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(1183)}  fill-rule="evenodd" d="M2585.58,774.72 L2409.49,766.255" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[1184].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(1184)}  fill-rule="evenodd" d="M2347.58,749.963 L2082.22,737.199" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[1185].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(1185)}  fill-rule="evenodd" d="M2587.37,761.491 L2410.29,752.979" vector-effect="none"/>
                </Tooltip>
                          );
                        })}
  </g>
  <g stroke="#56816b" stroke-linejoin="miter" fill="none" stroke-linecap="butt" font-family="MS Shell Dlg 2" font-weight="400" stroke-opacity="1" font-size="32.5" transform="matrix(0.999751,0,0,0.999751,0,0)" font-style="normal" stroke-miterlimit="2" stroke-width="3.07087">

        {[1186].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(1186)}  fill-rule="evenodd" d="M2347.16,756.917 L2081.28,744.128" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[1187].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(1187)}  fill-rule="evenodd" d="M2346.78,763.239 L2080.43,750.427" vector-effect="none"/>
                </Tooltip>
                          );
                        })}
  </g>
  <g stroke="#ffff00" stroke-linejoin="miter" fill="none" stroke-linecap="butt" font-family="MS Shell Dlg 2" font-weight="400" stroke-opacity="1" font-size="32.5" transform="matrix(0.999751,0,0,0.999751,0,0)" font-style="normal" stroke-miterlimit="2" stroke-width="3.07087">

        {[1188].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(1188)}  fill-rule="evenodd" d="M2346.35,770.193 L2079.5,757.357" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[1189].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(1189)}  fill-rule="evenodd" d="M2584.65,781.649 L2409.07,773.209" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[1190].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(1190)}  fill-rule="evenodd" d="M2399.63,761.403 L2399.51,759.542 L2399.18,757.701 L2398.65,755.897 L2397.93,754.149 L2397.02,752.472 L2395.93,750.882 L2394.66,749.396 L2393.24,748.027 L2391.68,746.789 L2389.99,745.693 L2388.19,744.75 L2386.29,743.97 L2384.31,743.359 L2382.28,742.923 L2380.21,742.668 L2378.12,742.594 L2376.03,742.703 L2373.97,742.995 L2371.94,743.465 L2369.98,744.11 L2368.1,744.923 L2366.32,745.897 L2364.65,747.021 L2363.11,748.286 L2361.72,749.679 L2360.49,751.187 L2359.44,752.795 L2358.56,754.488 L2357.88,756.248 L2357.39,758.061 L2357.1,759.907 L2357.02,761.769 L2357.14,763.63 L2357.47,765.471 L2358,767.275 L2358.72,769.023 L2359.63,770.701 L2360.72,772.29 L2361.98,773.776 L2363.4,775.145 L2364.97,776.383 L2366.66,777.479 L2368.46,778.422 L2370.36,779.203 L2372.34,779.814 L2374.37,780.249 L2376.44,780.505 L2378.53,780.578 L2380.62,780.469 L2382.68,780.177 L2384.71,779.707 L2386.67,779.062 L2388.55,778.249 L2390.33,777.275 L2392,776.151 L2393.54,774.886 L2394.92,773.493 L2396.15,771.985 L2397.21,770.377 L2398.09,768.685 L2398.77,766.924 L2399.26,765.111 L2399.55,763.265 L2399.63,761.403" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[1191].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(1191)}  fill-rule="evenodd" d="M2387.07,738.157 L2386.14,737.9 L2385.21,737.671 L2384.27,737.471 L2383.32,737.301 L2382.37,737.16 L2381.41,737.049 L2380.45,736.968 L2379.48,736.917 L2378.52,736.896 L2377.55,736.905 L2376.58,736.944 L2375.62,737.013 L2374.66,737.112 L2374.12,737.181" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[1192].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(1192)}  fill-rule="evenodd" d="M2362.6,741.257 L2361.82,741.758 L2361.05,742.284 L2360.31,742.833 L2359.58,743.405 L2358.88,743.999 L2358.21,744.614 L2357.55,745.25 L2356.93,745.907 L2356.53,746.343" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[1193].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(1193)}  fill-rule="evenodd" d="M2362.47,737.263 L2361.68,737.613 L2360.9,737.988 L2360.14,738.387 L2359.39,738.809 L2358.66,739.255 L2357.95,739.722 L2357.26,740.212 L2356.58,740.723 L2355.93,741.254 L2355.3,741.806 L2354.69,742.376 L2354.1,742.966 L2353.54,743.573 L2353,744.198 L2352.74,744.506" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[1194].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(1194)}  fill-rule="evenodd" d="M2362.6,741.257 L2362.91,741.064 L2363.2,740.862 L2363.49,740.651 L2363.77,740.431 L2364.04,740.202 L2364.3,739.965 L2364.55,739.721 L2364.79,739.468 L2365.02,739.209 L2365.24,738.942 L2365.45,738.668 L2365.65,738.389 L2365.84,738.103 L2366.01,737.811 L2366.18,737.514 L2366.33,737.213 L2366.48,736.906 L2366.61,736.596 L2366.72,736.281 L2366.83,735.963 L2366.92,735.642 L2367,735.318 L2367.07,734.992 L2367.08,734.904" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[1195].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(1195)}  fill-rule="evenodd" d="M2372.91,736.073 L2372.98,735.725" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[1196].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(1196)}  fill-rule="evenodd" d="M2372.92,736.042 L2372.92,736.142 L2372.92,736.242 L2372.92,736.342 L2372.92,736.442 L2372.92,736.542 L2372.92,736.642 L2373.02,736.642 L2373.02,736.742 L2373.12,736.742 L2373.12,736.842 L2373.22,736.942 L2373.32,736.942 L2373.32,737.042 L2373.42,737.042 L2373.52,737.142 L2373.62,737.142 L2373.72,737.142 L2373.82,737.142 L2373.92,737.142 L2373.92,737.242 L2374.02,737.142 L2374.12,737.142" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[1197].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(1197)}  fill-rule="evenodd" d="M2347.58,749.963 L2347.95,749.975 L2348.32,749.976 L2348.69,749.965 L2349.06,749.942 L2349.43,749.908 L2349.8,749.862 L2350.17,749.805 L2350.53,749.737 L2350.89,749.657 L2351.25,749.566 L2351.61,749.464 L2351.95,749.352 L2352.3,749.228 L2352.64,749.094 L2352.97,748.949 L2353.3,748.794 L2353.63,748.628 L2353.94,748.453 L2354.25,748.268 L2354.55,748.074 L2354.84,747.87 L2355.13,747.657 L2355.41,747.436 L2355.67,747.206 L2355.93,746.968 L2356.18,746.722 L2356.42,746.468 L2356.53,746.343" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[1198].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(1198)}  fill-rule="evenodd" d="M2401.83,748.521 L2401.3,747.798 L2400.75,747.092 L2400.17,746.403 L2399.56,745.733 L2398.93,745.082 L2398.27,744.451 L2397.65,743.9" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[1199].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(1199)}  fill-rule="evenodd" d="M2405.82,747.058 L2405.44,746.483 L2405.05,745.92 L2404.63,745.369 L2404.19,744.832 L2403.73,744.309 L2403.25,743.801 L2402.75,743.308 L2402.23,742.83 L2401.7,742.369 L2401.14,741.925 L2400.57,741.499 L2399.98,741.09 L2399.38,740.701 L2398.76,740.33 L2398.13,739.978 L2398.1,739.965" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[1200].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(1200)}  fill-rule="evenodd" d="M2401.83,748.521 L2402.03,748.799 L2402.24,749.071 L2402.47,749.336 L2402.7,749.594 L2402.94,749.844 L2403.2,750.087 L2403.46,750.321 L2403.73,750.548 L2404.01,750.765 L2404.3,750.974 L2404.6,751.174 L2404.9,751.364 L2405.21,751.545 L2405.53,751.716 L2405.86,751.877 L2406.19,752.028 L2406.53,752.168 L2406.87,752.298 L2407.22,752.417 L2407.57,752.525 L2407.92,752.623 L2408.28,752.709 L2408.64,752.783 L2409.01,752.847 L2409.38,752.899 L2409.74,752.94 L2410.12,752.969 L2410.29,752.979" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[1201].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(1201)}  fill-rule="evenodd" d="M2394.56,735.631 L2394.51,735.96 L2394.47,736.29 L2394.45,736.62 L2394.43,736.952 L2394.43,737.283 L2394.45,737.614 L2394.48,737.945 L2394.51,738.274 L2394.57,738.603 L2394.63,738.929 L2394.71,739.253 L2394.8,739.574 L2394.9,739.893 L2395.02,740.208 L2395.15,740.519 L2395.29,740.826 L2395.44,741.129 L2395.6,741.426 L2395.78,741.719 L2395.97,742.006 L2396.16,742.286 L2396.37,742.561 L2396.59,742.828 L2396.82,743.089 L2397.06,743.343 L2397.31,743.589 L2397.57,743.827 L2397.65,743.9" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[1202].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(1202)}  fill-rule="evenodd" d="M2388.67,734.81 L2388.59,735.323 L2388.53,735.837 L2388.49,736.353 L2388.47,736.87 L2388.47,737.247" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[1203].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(1203)}  fill-rule="evenodd" d="M2387.02,738.142 L2387.12,738.142 L2387.22,738.142 L2387.22,738.242 L2387.32,738.242 L2387.42,738.242 L2387.52,738.242 L2387.62,738.242 L2387.62,738.142 L2387.72,738.142 L2387.82,738.142 L2387.92,738.142 L2387.92,738.042 L2388.02,738.042 L2388.12,737.942 L2388.22,737.942 L2388.22,737.842 L2388.32,737.842 L2388.32,737.742 L2388.32,737.642 L2388.42,737.642 L2388.42,737.542 L2388.42,737.442 L2388.42,737.342 L2388.42,737.242" vector-effect="none"/>
                </Tooltip>
                          );
                        })}
  </g>
  <g stroke="#ff0000" stroke-linejoin="miter" fill="none" stroke-linecap="butt" font-family="MS Shell Dlg 2" font-weight="400" stroke-opacity="1" font-size="32.5" transform="matrix(0.999751,0,0,0.999751,0,0)" font-style="normal" stroke-miterlimit="2" stroke-width="3.07087">

        {[1204].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(1204)}  fill-rule="evenodd" d="M2402.83,761.375 L2402.69,759.235 L2402.31,757.118 L2401.7,755.044 L2400.87,753.033 L2399.82,751.104 L2398.57,749.277 L2397.11,747.567 L2395.48,745.993 L2393.69,744.569 L2391.74,743.309 L2389.67,742.225 L2387.48,741.327 L2385.21,740.625 L2382.87,740.124 L2380.49,739.83 L2378.09,739.745 L2375.69,739.871 L2373.31,740.206 L2370.99,740.747 L2368.73,741.488 L2366.57,742.424 L2364.51,743.543 L2362.6,744.837 L2360.83,746.291 L2359.23,747.893 L2357.82,749.627 L2356.6,751.476 L2355.6,753.423 L2354.81,755.448 L2354.25,757.532 L2353.92,759.655 L2353.82,761.797 L2353.96,763.937 L2354.34,766.054 L2354.95,768.128 L2355.78,770.139 L2356.83,772.068 L2358.08,773.895 L2359.53,775.605 L2361.17,777.179 L2362.96,778.603 L2364.91,779.863 L2366.98,780.947 L2369.17,781.845 L2371.44,782.548 L2373.78,783.048 L2376.16,783.342 L2378.56,783.427 L2380.96,783.301 L2383.34,782.966 L2385.66,782.425 L2387.92,781.684 L2390.08,780.749 L2392.13,779.629 L2394.05,778.335 L2395.82,776.881 L2397.41,775.279 L2398.83,773.545 L2400.04,771.696 L2401.05,769.749 L2401.84,767.724 L2402.4,765.64 L2402.73,763.517 L2402.83,761.375" vector-effect="none"/>
                </Tooltip>
                          );
                        })}
  </g>
  <g stroke="#ffff00" stroke-linejoin="miter" fill="none" stroke-linecap="butt" font-family="MS Shell Dlg 2" font-weight="400" stroke-opacity="1" font-size="32.5" transform="matrix(0.999751,0,0,0.999751,0,0)" font-style="normal" stroke-miterlimit="2" stroke-width="3.07087">

        {[1205].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(1205)}  fill-rule="evenodd" d="M2407.27,759.642 L2407.91,759.744 L2408.55,759.826 L2409.19,759.889 L2409.83,759.931 L2409.87,759.933" vector-effect="none"/>
                </Tooltip>
                          );
                        })}
  </g>
  <g stroke="#56816b" stroke-linejoin="miter" fill="none" stroke-linecap="butt" font-family="MS Shell Dlg 2" font-weight="400" stroke-opacity="1" font-size="32.5" transform="matrix(0.999751,0,0,0.999751,0,0)" font-style="normal" stroke-miterlimit="2" stroke-width="3.07087">

        {[1206].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(1206)}  fill-rule="evenodd" d="M2347.16,756.917 L2347.8,756.938 L2348.45,756.939 L2349.09,756.92 L2349.73,756.881 L2349.78,756.877" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[1207].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(1207)}  fill-rule="evenodd" d="M2350.92,757.963 L2350.8,758.817 L2350.71,759.675 L2350.65,760.535 L2350.63,761.397 L2350.64,762.259 L2350.65,762.561" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[1208].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(1208)}  fill-rule="evenodd" d="M2349.42,763.542 L2349.52,763.542 L2349.62,763.542 L2349.72,763.542 L2349.82,763.542 L2349.92,763.542 L2349.92,763.442 L2350.02,763.442 L2350.12,763.442 L2350.22,763.342 L2350.32,763.342 L2350.32,763.242 L2350.42,763.242 L2350.42,763.142 L2350.52,763.042 L2350.52,762.942 L2350.62,762.942 L2350.62,762.842 L2350.62,762.742 L2350.62,762.642 L2350.62,762.542" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[1209].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(1209)}  fill-rule="evenodd" d="M2350.92,757.942 L2350.92,757.842 L2350.92,757.742 L2350.92,757.642 L2350.92,757.542 L2350.82,757.442 L2350.82,757.342 L2350.72,757.342 L2350.72,757.242 L2350.62,757.242 L2350.62,757.142 L2350.52,757.142 L2350.52,757.042 L2350.42,757.042 L2350.42,756.942 L2350.32,756.942 L2350.22,756.942 L2350.12,756.942 L2350.02,756.842 L2349.92,756.842 L2349.82,756.842" vector-effect="none"/>
                </Tooltip>
                          );
                        })}
  </g>
  <g stroke="#ffff00" stroke-linejoin="miter" fill="none" stroke-linecap="butt" font-family="MS Shell Dlg 2" font-weight="400" stroke-opacity="1" font-size="32.5" transform="matrix(0.999751,0,0,0.999751,0,0)" font-style="normal" stroke-miterlimit="2" stroke-width="3.07087">

        {[1210].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(1210)}  fill-rule="evenodd" d="M2366.19,786.636 L2366.28,786.112 L2366.36,785.585 L2366.39,785.248" vector-effect="none"/>
                </Tooltip>
                          );
                        })}
  </g>
  <g stroke="#56816b" stroke-linejoin="miter" fill="none" stroke-linecap="butt" font-family="MS Shell Dlg 2" font-weight="400" stroke-opacity="1" font-size="32.5" transform="matrix(0.999751,0,0,0.999751,0,0)" font-style="normal" stroke-miterlimit="2" stroke-width="3.07087">

        {[1211].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(1211)}  fill-rule="evenodd" d="M2349.37,763.53 L2348.74,763.428 L2348.1,763.346 L2347.46,763.284 L2346.82,763.241 L2346.77,763.239" vector-effect="none"/>
                </Tooltip>
                          );
                        })}
  </g>
  <g stroke="#ffff00" stroke-linejoin="miter" fill="none" stroke-linecap="butt" font-family="MS Shell Dlg 2" font-weight="400" stroke-opacity="1" font-size="32.5" transform="matrix(0.999751,0,0,0.999751,0,0)" font-style="normal" stroke-miterlimit="2" stroke-width="3.07087">

        {[1212].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(1212)}  fill-rule="evenodd" d="M2367.85,784.445 L2368.76,784.757 L2369.67,785.04 L2370.59,785.295 L2371.53,785.521 L2372.47,785.718 L2373.41,785.886 L2374.37,786.024 L2375.33,786.132 L2376.29,786.21 L2377.26,786.258 L2378.22,786.277 L2379.19,786.265 L2379.46,786.256" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[1213].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(1213)}  fill-rule="evenodd" d="M2380.52,787.442 L2380.52,787.342 L2380.52,787.242 L2380.52,787.142 L2380.52,787.042 L2380.52,786.942 L2380.52,786.842 L2380.42,786.842 L2380.42,786.742 L2380.42,786.642 L2380.32,786.642 L2380.32,786.542 L2380.22,786.542 L2380.22,786.442 L2380.12,786.442 L2380.02,786.442 L2380.02,786.342 L2379.92,786.342 L2379.82,786.342 L2379.82,786.242 L2379.72,786.242 L2379.62,786.242 L2379.52,786.242 L2379.42,786.242" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[1214].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(1214)}  fill-rule="evenodd" d="M2367.82,784.442 L2367.72,784.442 L2367.62,784.342 L2367.52,784.342 L2367.42,784.342 L2367.32,784.342 L2367.22,784.342 L2367.22,784.442 L2367.12,784.442 L2367.02,784.442 L2366.92,784.442 L2366.92,784.542 L2366.82,784.542 L2366.72,784.642 L2366.62,784.642 L2366.62,784.742 L2366.52,784.742 L2366.52,784.842 L2366.52,784.942 L2366.42,784.942 L2366.42,785.042 L2366.42,785.142 L2366.42,785.242" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[1215].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(1215)}  fill-rule="evenodd" d="M2391.79,783.162 L2392.63,782.73 L2393.45,782.272 L2394.25,781.789 L2395.03,781.282 L2395.79,780.75 L2396.53,780.195 L2397.25,779.617 L2397.94,779.018 L2398.61,778.397 L2399.26,777.755 L2399.88,777.094 L2400.12,776.829" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[1216].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(1216)}  fill-rule="evenodd" d="M2409.07,773.209 L2408.7,773.197 L2408.33,773.196 L2407.96,773.207 L2407.58,773.23 L2407.21,773.264 L2406.85,773.31 L2406.48,773.367 L2406.12,773.435 L2405.75,773.515 L2405.4,773.606 L2405.04,773.708 L2404.69,773.82 L2404.35,773.944 L2404.01,774.079 L2403.67,774.223 L2403.35,774.379 L2403.02,774.544 L2402.71,774.719 L2402.4,774.904 L2402.1,775.098 L2401.8,775.302 L2401.52,775.515 L2401.24,775.736 L2400.97,775.966 L2400.72,776.204 L2400.47,776.45 L2400.23,776.704 L2400.12,776.829" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[1217].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(1217)}  fill-rule="evenodd" d="M2409.49,766.255 L2408.85,766.234 L2408.2,766.233 L2407.56,766.252 L2406.91,766.291 L2406.87,766.295" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[1218].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(1218)}  fill-rule="evenodd" d="M2405.72,765.242 L2405.72,765.342 L2405.72,765.442 L2405.72,765.542 L2405.72,765.642 L2405.82,765.642 L2405.82,765.742 L2405.82,765.842 L2405.92,765.842 L2405.92,765.942 L2406.02,765.942 L2406.02,766.042 L2406.12,766.042 L2406.12,766.142 L2406.22,766.142 L2406.32,766.242 L2406.42,766.242 L2406.52,766.242 L2406.62,766.242 L2406.62,766.342 L2406.72,766.342 L2406.82,766.342" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[1219].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(1219)}  fill-rule="evenodd" d="M2391.79,783.162 L2391.47,783.328 L2391.15,783.504 L2390.85,783.69 L2390.55,783.886 L2390.25,784.09 L2389.97,784.303 L2389.69,784.526 L2389.43,784.756 L2389.17,784.995 L2388.92,785.242 L2388.68,785.496 L2388.45,785.758 L2388.23,786.026 L2388.03,786.301 L2387.83,786.583 L2387.64,786.87 L2387.47,787.163 L2387.31,787.461 L2387.16,787.764 L2387.02,788.071 L2386.89,788.383 L2386.78,788.699 L2386.68,789.017 L2386.59,789.339 L2386.51,789.663 L2386.47,789.835" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[1220].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(1220)}  fill-rule="evenodd" d="M2380.53,787.455 L2380.38,787.969 L2380.25,788.488 L2380.18,788.86" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[1221].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(1221)}  fill-rule="evenodd" d="M2405.72,765.209 L2405.85,764.355 L2405.94,763.497 L2406,762.637 L2406.02,761.775 L2406.01,760.913 L2406,760.611" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[1222].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(1222)}  fill-rule="evenodd" d="M2407.32,759.642 L2407.22,759.642 L2407.12,759.642 L2407.02,759.642 L2406.92,759.642 L2406.82,759.642 L2406.72,759.642 L2406.62,759.742 L2406.52,759.742 L2406.42,759.842 L2406.32,759.842 L2406.32,759.942 L2406.22,759.942 L2406.22,760.042 L2406.12,760.042 L2406.12,760.142 L2406.12,760.242 L2406.02,760.242 L2406.02,760.342 L2406.02,760.442 L2406.02,760.542 L2406.02,760.642" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[1223].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(1223)}  fill-rule="evenodd" d="M2350.83,776.114 L2351.42,776.961 L2352.04,777.789 L2352.69,778.597 L2353.37,779.384 L2354.08,780.149 L2354.82,780.892 L2355.59,781.612 L2356.25,782.186" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[1224].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(1224)}  fill-rule="evenodd" d="M2391.23,787.651 L2392.24,787.234 L2393.23,786.786 L2394.21,786.306 L2395.17,785.797 L2396.11,785.258 L2397.02,784.691 L2397.92,784.095 L2398.79,783.472 L2399.63,782.822 L2400.45,782.146 L2401.24,781.445 L2402,780.72 L2402.74,779.972 L2403.44,779.201 L2403.9,778.666" vector-effect="none"/>
                </Tooltip>
                          );
                        })}
  </g>
  <g stroke="#a47158" stroke-linejoin="bevel" fill="none" stroke-linecap="square" font-family="MS Shell Dlg 2" font-weight="400" stroke-opacity="1" font-size="32.5" transform="matrix(0.999751,0,0,0.999751,0,0)" font-style="normal" stroke-width="3.07087">

        {[1225].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(1225)}  fill-rule="evenodd" d="M2215.05,936.966 L2194.7,1030" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[1226].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(1226)}  fill-rule="evenodd" d="M2203.91,987.908 L2153.07,981.219" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[1227].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(1227)}  fill-rule="evenodd" d="M2241.78,1031.25 L2258.93,943.761" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[1228].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(1228)}  fill-rule="evenodd" d="M2206.05,978.129 L2315.87,992.578" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[1229].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(1229)}  fill-rule="evenodd" d="M1915.28,997.44 L1951.44,999.448" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[1230].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(1230)}  fill-rule="evenodd" d="M1953.6,968.486 L1917.45,966.478" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[1231].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(1231)}  fill-rule="evenodd" d="M2382.93,830.203 L2522.89,851.874" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[1232].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(1232)}  fill-rule="evenodd" d="M2380.5,842.678 L2520.46,864.349" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[1233].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(1233)}  fill-rule="evenodd" d="M2443.02,904.797 L2452.94,853.895" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[1234].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(1234)}  fill-rule="evenodd" d="M2391.57,896.83 L2443.02,904.797" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[1235].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(1235)}  fill-rule="evenodd" d="M1492.65,857.235 L2042.89,887.812" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[1236].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(1236)}  fill-rule="evenodd" d="M2042.89,887.812 L2139.52,902.778" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[1237].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(1237)}  fill-rule="evenodd" d="M2423.61,779.614 L2403.9,778.666" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[1238].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(1238)}  fill-rule="evenodd" d="M2412.85,834.835 L2423.61,779.614" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[1239].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(1239)}  fill-rule="evenodd" d="M2500.76,789.794 L2489.67,846.731" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[1240].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(1240)}  fill-rule="evenodd" d="M2217.85,863.502 L2203.85,861.334" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[1241].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(1241)}  fill-rule="evenodd" d="M2203.85,861.334 L2197.77,892.522" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[1242].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(1242)}  fill-rule="evenodd" d="M2211.77,894.689 L2217.85,863.502" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[1243].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(1243)}  fill-rule="evenodd" d="M2281.75,905.526 L2278.1,924.239" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[1244].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(1244)}  fill-rule="evenodd" d="M2292.09,926.406 L2295.74,907.693" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[1245].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(1245)}  fill-rule="evenodd" d="M2194.13,911.234 L2197.77,892.522" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[1246].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(1246)}  fill-rule="evenodd" d="M1495.95,734.967 L2441.34,780.466" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[1247].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(1247)}  fill-rule="evenodd" d="M2625.52,1078.46 L2556.19,1099.78" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[1248].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(1248)}  fill-rule="evenodd" d="M2556.19,1099.78 L2483.81,1115.58" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[1249].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(1249)}  fill-rule="evenodd" d="M2483.81,1115.58 L2412.48,1125.4" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[1250].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(1250)}  fill-rule="evenodd" d="M2412.48,1125.4 L2339.28,1129.49" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[1251].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(1251)}  fill-rule="evenodd" d="M2339.28,1129.49 L1694.35,1116.56" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[1252].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(1252)}  fill-rule="evenodd" d="M1694.35,1116.56 L1669.94,1112.2" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[1253].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(1253)}  fill-rule="evenodd" d="M1669.94,1112.2 L1527.43,1062.64" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[1254].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(1254)}  fill-rule="evenodd" d="M1527.43,1062.64 L1508.61,1037.44" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[1255].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(1255)}  fill-rule="evenodd" d="M1508.61,1037.44 L1510.23,977.327" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[1256].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(1256)}  fill-rule="evenodd" d="M1510.23,977.327 L1489.7,966.523" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[1257].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(1257)}  fill-rule="evenodd" d="M1489.7,966.523 L1495.95,734.967" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[1258].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(1258)}  fill-rule="evenodd" d="M2139.52,902.778 L2140.01,902.846 L2140.5,902.899 L2141,902.936 L2141.49,902.958 L2141.99,902.965 L2142.49,902.956 L2142.98,902.932 L2143.47,902.892 L2143.97,902.837 L2144.46,902.767 L2144.94,902.682 L2145.43,902.581 L2145.9,902.466 L2146.38,902.335 L2146.85,902.19 L2147.31,902.031 L2147.76,901.857 L2148.21,901.67 L2148.65,901.468 L2149.09,901.253 L2149.51,901.024 L2149.93,900.782 L2150.33,900.528 L2150.73,900.261 L2151.11,899.982 L2151.49,899.691 L2151.85,899.389 L2152.2,899.076 L2152.53,898.752 L2152.86,898.418 L2153.17,898.073 L2153.47,897.72 L2153.75,897.357 L2154.02,896.986 L2154.27,896.606 L2154.51,896.219 L2154.74,895.825 L2154.95,895.424 L2155.14,895.017 L2155.31,894.604 L2155.47,894.186 L2155.62,893.763 L2155.75,893.335 L2155.86,892.904 L2155.95,892.47" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[1259].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(1259)}  fill-rule="evenodd" d="M2626.2,1063.43 L2550.56,1086.69" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[1260].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(1260)}  fill-rule="evenodd" d="M2583.36,1063.21 L2546.56,1074.52" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[1261].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(1261)}  fill-rule="evenodd" d="M2546.56,1074.52 L2474.07,1090.22" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[1262].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(1262)}  fill-rule="evenodd" d="M2550.56,1086.69 L2476.77,1102.67" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[1263].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(1263)}  fill-rule="evenodd" d="M2474.07,1090.22 L2431.78,1095.66" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[1264].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(1264)}  fill-rule="evenodd" d="M2476.77,1102.67 L2433.94,1108.18" vector-effect="none"/>
                </Tooltip>
                          );
                        })}
  </g>
  <g stroke="#ff00ff" stroke-linejoin="miter" fill="none" stroke-linecap="butt" font-family="MS Shell Dlg 2" font-weight="400" stroke-opacity="1" font-size="32.5" transform="matrix(0.999751,0,0,0.999751,0,0)" font-style="normal" stroke-miterlimit="2" stroke-width="3.07087">

        {[1265].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(1265)}  fill-rule="evenodd" d="M2626.2,1063.43 L2991.64,923.37" vector-effect="none"/>
                </Tooltip>
                          );
                        })}
  </g>
  <g stroke="#a47158" stroke-linejoin="bevel" fill="none" stroke-linecap="square" font-family="MS Shell Dlg 2" font-weight="400" stroke-opacity="1" font-size="32.5" transform="matrix(0.999751,0,0,0.999751,0,0)" font-style="normal" stroke-width="3.07087">

        {[1266].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(1266)}  fill-rule="evenodd" d="M2583.36,1063.21 L2566.45,1042.58" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[1267].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(1267)}  fill-rule="evenodd" d="M2566.45,1042.58 L2551.55,1019.57" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[1268].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(1268)}  fill-rule="evenodd" d="M2551.55,1019.57 L2545.32,1007.83" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[1269].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(1269)}  fill-rule="evenodd" d="M2545.32,1007.83 L2535.14,983.892" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[1270].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(1270)}  fill-rule="evenodd" d="M2535.14,983.892 L2528.69,962.592" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[1271].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(1271)}  fill-rule="evenodd" d="M2524.42,940.782 L2522.26,912.989" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[1272].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(1272)}  fill-rule="evenodd" d="M2522.26,912.989 L2523.68,885.157" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[1273].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(1273)}  fill-rule="evenodd" d="M2583.36,1063.21 L2593.35,1073.53" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[1274].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(1274)}  fill-rule="evenodd" d="M2426.93,947.285 L2446.94,948.974" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[1275].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(1275)}  fill-rule="evenodd" d="M2423.63,969.264 L2446.37,971.182" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[1276].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(1276)}  fill-rule="evenodd" d="M2446.94,948.974 L2467.01,947.884" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[1277].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(1277)}  fill-rule="evenodd" d="M2446.37,971.182 L2469.8,969.909" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[1278].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(1278)}  fill-rule="evenodd" d="M2388.72,911.488 L2401.49,845.929" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[1279].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(1279)}  fill-rule="evenodd" d="M2354.68,975.167 L2350.23,1001.82" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[1280].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(1280)}  fill-rule="evenodd" d="M2319.68,969.742 L2314.92,998.282" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[1281].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(1281)}  fill-rule="evenodd" d="M2350.23,1001.82 L2347.47,1033.99" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[1282].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(1282)}  fill-rule="evenodd" d="M2314.92,998.282 L2311.94,1033.07" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[1283].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(1283)}  fill-rule="evenodd" d="M2414.87,1035.74 L2420.12,1032.93" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[1284].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(1284)}  fill-rule="evenodd" d="M2420.12,1032.93 L2426.77,1031.03" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[1285].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(1285)}  fill-rule="evenodd" d="M2366.19,1113.65 L2344.89,1113.1" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[1286].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(1286)}  fill-rule="evenodd" d="M2205.07,1042.96 L2202.84,1111.01" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[1287].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(1287)}  fill-rule="evenodd" d="M2240.56,1043.88 L2238.33,1112.13" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[1288].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(1288)}  fill-rule="evenodd" d="M2133.31,1060.07 L2133.31,1060.07" vector-effect="none"/>
                </Tooltip>
                          );
                        })}
  </g>
  <g stroke="#ffff00" stroke-linejoin="miter" fill="none" stroke-linecap="butt" font-family="MS Shell Dlg 2" font-weight="400" stroke-opacity="1" font-size="32.5" transform="matrix(0.999751,0,0,0.999751,0,0)" font-style="normal" stroke-miterlimit="2" stroke-width="3.07087">

        {[1289].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(1289)}  fill-rule="evenodd" d="M1638.87,1093.24 L1618.03,1085.99" vector-effect="none"/>
                </Tooltip>
                          );
                        })}
  </g>
  <g stroke="#a47158" stroke-linejoin="bevel" fill="none" stroke-linecap="square" font-family="MS Shell Dlg 2" font-weight="400" stroke-opacity="1" font-size="32.5" transform="matrix(0.999751,0,0,0.999751,0,0)" font-style="normal" stroke-width="3.07087">

        {[1290].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(1290)}  fill-rule="evenodd" d="M2367.72,908.238 L2367.72,908.238" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[1291].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(1291)}  fill-rule="evenodd" d="M2191.24,859.38 L2190.75,859.312 L2190.25,859.26 L2189.76,859.222 L2189.26,859.2 L2188.77,859.193 L2188.27,859.202 L2187.78,859.227 L2187.28,859.266 L2186.79,859.321 L2186.3,859.391 L2185.82,859.477 L2185.33,859.577 L2184.85,859.693 L2184.38,859.823 L2183.91,859.968 L2183.45,860.127 L2182.99,860.301 L2182.54,860.489 L2182.1,860.69 L2181.67,860.906 L2181.25,861.134 L2180.83,861.376 L2180.43,861.63 L2180.03,861.897 L2179.65,862.176 L2179.27,862.467 L2178.91,862.769 L2178.56,863.083 L2178.22,863.406 L2177.9,863.741 L2177.59,864.085 L2177.29,864.439 L2177.01,864.801 L2176.74,865.173 L2176.48,865.552 L2176.24,865.939 L2176.02,866.333 L2175.81,866.734 L2175.62,867.142 L2175.44,867.555 L2175.28,867.973 L2175.14,868.396 L2175.01,868.823 L2174.9,869.254 L2174.81,869.688 L2174.81,869.688" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[1292].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(1292)}  fill-rule="evenodd" d="M2095.75,918.49 L2095.75,918.49" vector-effect="none"/>
                </Tooltip>
                          );
                        })}
  </g>
  <g stroke="#0000ff" stroke-linejoin="miter" fill="none" stroke-linecap="butt" font-family="MS Shell Dlg 2" font-weight="400" stroke-opacity="1" font-size="32.5" transform="matrix(0.999751,0,0,0.999751,0,0)" font-style="normal" stroke-miterlimit="2" stroke-width="3.07087">

        {[1293].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(1293)}  fill-rule="evenodd" d="M3070.6,972.104 L3062.59,996.071" vector-effect="none"/>
                </Tooltip>
                          );
                        })}
  </g>
  <g stroke="#ff0000" stroke-linejoin="miter" fill="none" stroke-linecap="butt" font-family="MS Shell Dlg 2" font-weight="400" stroke-opacity="1" font-size="32.5" transform="matrix(0.999751,0,0,0.999751,0,0)" font-style="normal" stroke-miterlimit="2" stroke-width="3.07087">

        {[1294].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(1294)}  fill-rule="evenodd" d="M2301.64,742.048 L2298.48,758.041" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[1295].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(1295)}  fill-rule="evenodd" d="M374.906,680.895 L991.586,710.656" vector-effect="none"/>
                </Tooltip>
                          );
                        })}
  </g>
  <g stroke="#a47158" stroke-linejoin="bevel" fill="none" stroke-linecap="square" font-family="MS Shell Dlg 2" font-weight="400" stroke-opacity="1" font-size="32.5" transform="matrix(0.999751,0,0,0.999751,0,0)" font-style="normal" stroke-width="3.07087">

        {[1296].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(1296)}  fill-rule="evenodd" d="M1669.94,1112.2 L1694.35,1116.56" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[1297].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(1297)}  fill-rule="evenodd" d="M2483.81,1115.58 L2556.19,1099.78" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[1298].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(1298)}  fill-rule="evenodd" d="M2441.34,780.466 L1495.95,734.967" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[1299].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(1299)}  fill-rule="evenodd" d="M292.936,1000.3 L323.476,853.302" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[1300].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(1300)}  fill-rule="evenodd" d="M323.476,853.302 L363.374,702.559" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[1301].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(1301)}  fill-rule="evenodd" d="M363.374,702.559 L391.357,649.988" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[1302].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(1302)}  fill-rule="evenodd" d="M374.906,680.895 L2441.34,780.466" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[1303].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(1303)}  fill-rule="evenodd" d="M3070.6,972.104 L3062.59,996.071" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[1304].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(1304)}  fill-rule="evenodd" d="M3062.59,996.071 L3047.79,1009.3" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[1305].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(1305)}  fill-rule="evenodd" d="M3047.79,1009.3 L3044.12,1039.12" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[1306].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(1306)}  fill-rule="evenodd" d="M3044.12,1039.12 L3073.8,1075.7" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[1307].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(1307)}  fill-rule="evenodd" d="M3073.8,1075.7 L3125.07,1108.17" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[1308].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(1308)}  fill-rule="evenodd" d="M3125.07,1108.17 L3171.12,1118.12" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[1309].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(1309)}  fill-rule="evenodd" d="M3171.12,1118.12 L3185.59,1127.1" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[1310].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(1310)}  fill-rule="evenodd" d="M3185.59,1127.1 L3200.86,1148.37" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[1311].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(1311)}  fill-rule="evenodd" d="M3200.86,1148.37 L3204.13,1176.75" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[1312].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(1312)}  fill-rule="evenodd" d="M3204.13,1176.75 L3130.82,1206.68" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[1313].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(1313)}  fill-rule="evenodd" d="M3130.82,1206.68 L3105.02,1227.42" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[1314].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(1314)}  fill-rule="evenodd" d="M3105.02,1227.42 L3095.02,1240.38" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[1315].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(1315)}  fill-rule="evenodd" d="M3095.02,1240.38 L3085.51,1265.08" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[1316].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(1316)}  fill-rule="evenodd" d="M3085.51,1265.08 L3088.4,1299.59" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[1317].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(1317)}  fill-rule="evenodd" d="M3088.4,1299.59 L3106.25,1331.85" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[1318].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(1318)}  fill-rule="evenodd" d="M3106.25,1331.85 L3129.19,1363.15" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[1319].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(1319)}  fill-rule="evenodd" d="M3129.19,1363.15 L3180.22,1410.46" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[1320].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(1320)}  fill-rule="evenodd" d="M3180.22,1410.46 L3171.31,1495.43" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[1321].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(1321)}  fill-rule="evenodd" d="M3171.31,1495.43 L3171.21,1543.38" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[1322].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(1322)}  fill-rule="evenodd" d="M3171.21,1543.38 L3166.94,1566.65" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[1323].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(1323)}  fill-rule="evenodd" d="M3166.94,1566.65 L3169.87,1596.53" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[1324].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(1324)}  fill-rule="evenodd" d="M3169.87,1596.53 L3161.76,1609.63" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[1325].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(1325)}  fill-rule="evenodd" d="M3161.76,1609.63 L3117.28,1603.12" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[1326].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(1326)}  fill-rule="evenodd" d="M3117.28,1603.12 L3068.27,1586.31" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[1327].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(1327)}  fill-rule="evenodd" d="M3068.27,1586.31 L3033.9,1591.75" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[1328].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(1328)}  fill-rule="evenodd" d="M3033.9,1591.75 L2896.08,1659.63" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[1329].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(1329)}  fill-rule="evenodd" d="M2896.08,1659.63 L2866.44,1663.56" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[1330].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(1330)}  fill-rule="evenodd" d="M2866.44,1663.56 L2752.46,1713.27" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[1331].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(1331)}  fill-rule="evenodd" d="M2752.46,1713.27 L2687.14,1797.26" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[1332].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(1332)}  fill-rule="evenodd" d="M2687.14,1797.26 L2644.94,1816.4" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[1333].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(1333)}  fill-rule="evenodd" d="M2644.94,1816.4 L2579.48,1826.56" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[1334].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(1334)}  fill-rule="evenodd" d="M2579.48,1826.56 L2515.53,1821.95" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[1335].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(1335)}  fill-rule="evenodd" d="M2515.53,1821.95 L2355.71,1852.48" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[1336].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(1336)}  fill-rule="evenodd" d="M2355.71,1852.48 L2169.31,1905.25" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[1337].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(1337)}  fill-rule="evenodd" d="M2169.31,1905.25 L2121.15,1936.02" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[1338].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(1338)}  fill-rule="evenodd" d="M2121.15,1936.02 L1694.52,2046.13" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[1339].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(1339)}  fill-rule="evenodd" d="M1694.52,2046.13 L1547.45,1960.61" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[1340].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(1340)}  fill-rule="evenodd" d="M1547.45,1960.61 L1302.06,1897.86" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[1341].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(1341)}  fill-rule="evenodd" d="M1302.06,1897.86 L1123.09,1886.05" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[1342].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(1342)}  fill-rule="evenodd" d="M1123.09,1886.05 L1045.65,1937.91" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[1343].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(1343)}  fill-rule="evenodd" d="M1045.65,1937.91 L955.257,2098.44" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[1344].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(1344)}  fill-rule="evenodd" d="M955.257,2098.44 L862.458,1984.3" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[1345].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(1345)}  fill-rule="evenodd" d="M862.458,1984.3 L819.755,1967.89" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[1346].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(1346)}  fill-rule="evenodd" d="M819.755,1967.89 L776.139,1937.31" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[1347].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(1347)}  fill-rule="evenodd" d="M776.139,1937.31 L679.497,1853.23" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[1348].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(1348)}  fill-rule="evenodd" d="M679.497,1853.23 L593.722,1799.66" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[1349].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(1349)}  fill-rule="evenodd" d="M593.722,1799.66 L495.371,1669.78" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[1350].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(1350)}  fill-rule="evenodd" d="M495.371,1669.78 L413.897,1553.13" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[1351].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(1351)}  fill-rule="evenodd" d="M413.897,1553.13 L380.023,1433.07" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[1352].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(1352)}  fill-rule="evenodd" d="M380.023,1433.07 L373.125,1355.63" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[1353].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(1353)}  fill-rule="evenodd" d="M373.125,1355.63 L359.357,1289.16" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[1354].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(1354)}  fill-rule="evenodd" d="M359.357,1289.16 L325.787,1268.01" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[1355].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(1355)}  fill-rule="evenodd" d="M325.787,1268.01 L324.814,1176.88" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[1356].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(1356)}  fill-rule="evenodd" d="M324.814,1176.88 L302.752,1147.21" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[1357].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(1357)}  fill-rule="evenodd" d="M302.752,1147.21 L315.064,1113.23" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[1358].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(1358)}  fill-rule="evenodd" d="M315.064,1113.23 L292.936,1000.3" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[1359].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(1359)}  fill-rule="evenodd" d="M306.789,1136.07 L602.891,1131.42" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[1360].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(1360)}  fill-rule="evenodd" d="M958.632,1132.45 L661.133,1130.69 L602.891,1131.42" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[1361].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(1361)}  fill-rule="evenodd" d="M958.632,1132.45 L2268.89,1160.5" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[1362].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(1362)}  fill-rule="evenodd" d="M2268.89,1160.5 L2271.18,1160.55" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[1363].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(1363)}  fill-rule="evenodd" d="M2271.18,1160.55 L2273.47,1160.6" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[1364].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(1364)}  fill-rule="evenodd" d="M2273.47,1160.6 L2275.76,1160.65" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[1365].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(1365)}  fill-rule="evenodd" d="M2275.76,1160.65 L2278.05,1160.7" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[1366].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(1366)}  fill-rule="evenodd" d="M2278.05,1160.7 L2280.34,1160.74" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[1367].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(1367)}  fill-rule="evenodd" d="M2280.34,1160.74 L2282.63,1160.79" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[1368].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(1368)}  fill-rule="evenodd" d="M2282.63,1160.79 L2284.92,1160.84" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[1369].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(1369)}  fill-rule="evenodd" d="M2284.92,1160.84 L2287.21,1160.88" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[1370].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(1370)}  fill-rule="evenodd" d="M2287.21,1160.88 L2289.5,1160.92" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[1371].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(1371)}  fill-rule="evenodd" d="M2289.5,1160.92 L2291.79,1160.96" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[1372].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(1372)}  fill-rule="evenodd" d="M2291.79,1160.96 L2294.08,1161" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[1373].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          console.log(objetoEncontrado)
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(1373)}  fill-rule="evenodd" d="M2294.08,1161 L2296.37,1161.04" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[1374].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(1374)}  fill-rule="evenodd" d="M2296.37,1161.04 L2298.67,1161.07" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[1375].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(1375)}  fill-rule="evenodd" d="M2298.67,1161.07 L2300.96,1161.11" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[1376].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(1376)}  fill-rule="evenodd" d="M2300.96,1161.11 L2303.25,1161.14" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[1377].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(1377)}  fill-rule="evenodd" d="M2303.25,1161.14 L2305.54,1161.16" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[1378].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(1378)}  fill-rule="evenodd" d="M2305.54,1161.16 L2307.83,1161.19" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[1379].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(1379)}  fill-rule="evenodd" d="M2307.83,1161.19 L2310.12,1161.21" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[1380].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(1380)}  fill-rule="evenodd" d="M2310.12,1161.21 L2312.41,1161.23" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[1381].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(1381)}  fill-rule="evenodd" d="M2312.41,1161.23 L2314.7,1161.24" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[1382].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(1382)}  fill-rule="evenodd" d="M2314.7,1161.24 L2316.99,1161.26" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[1383].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(1383)}  fill-rule="evenodd" d="M2316.99,1161.26 L2319.29,1161.26" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[1384].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(1384)}  fill-rule="evenodd" d="M2319.29,1161.26 L2321.58,1161.27" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[1385].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(1385)}  fill-rule="evenodd" d="M2321.58,1161.27 L2323.87,1161.27" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[1386].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(1386)}  fill-rule="evenodd" d="M2323.87,1161.27 L2326.16,1161.26" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[1387].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(1387)}  fill-rule="evenodd" d="M2326.16,1161.26 L2328.45,1161.26" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[1388].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(1388)}  fill-rule="evenodd" d="M2328.45,1161.26 L2330.74,1161.24" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[1389].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(1389)}  fill-rule="evenodd" d="M2330.74,1161.24 L2333.03,1161.22" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[1390].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(1390)}  fill-rule="evenodd" d="M2333.03,1161.22 L2335.32,1161.2" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[1391].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(1391)}  fill-rule="evenodd" d="M2335.32,1161.2 L2337.61,1161.17" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[1392].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(1392)}  fill-rule="evenodd" d="M2337.61,1161.17 L2339.91,1161.14" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[1393].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(1393)}  fill-rule="evenodd" d="M2339.91,1161.14 L2369.64,1160.21 L2399.31,1158.35 L2428.9,1155.57 L2458.36,1151.87 L2487.66,1147.26 L2516.76,1141.74 L2545.62,1135.31 L2574.22,1128 L2602.51,1119.79 L2630.46,1110.72 L2638.6,1107.89" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[1394].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(1394)}  fill-rule="evenodd" d="M2638.6,1107.89 L2640.73,1107.13" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[1395].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(1395)}  fill-rule="evenodd" d="M2640.73,1107.13 L2642.86,1106.37" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[1396].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(1396)}  fill-rule="evenodd" d="M2642.86,1106.37 L2644.98,1105.61" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[1397].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(1397)}  fill-rule="evenodd" d="M2644.98,1105.61 L2647.1,1104.84" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[1398].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(1398)}  fill-rule="evenodd" d="M2647.1,1104.84 L2649.23,1104.07" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[1399].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(1399)}  fill-rule="evenodd" d="M2649.23,1104.07 L2651.34,1103.29" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[1400].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(1400)}  fill-rule="evenodd" d="M2651.34,1103.29 L2653.46,1102.51" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[1401].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(1401)}  fill-rule="evenodd" d="M2653.46,1102.51 L2655.58,1101.72" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[1402].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(1402)}  fill-rule="evenodd" d="M2655.58,1101.72 L2657.69,1100.93" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[1403].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(1403)}  fill-rule="evenodd" d="M2657.69,1100.93 L2659.8,1100.14" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[1404].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(1404)}  fill-rule="evenodd" d="M2659.8,1100.14 L2661.91,1099.34" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[1405].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(1405)}  fill-rule="evenodd" d="M2661.91,1099.34 L2664.02,1098.54" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[1406].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(1406)}  fill-rule="evenodd" d="M2664.02,1098.54 L2666.13,1097.74" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[1407].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(1407)}  fill-rule="evenodd" d="M2666.13,1097.74 L2668.23,1096.94" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[1408].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(1408)}  fill-rule="evenodd" d="M2668.23,1096.94 L2670.33,1096.13" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[1409].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(1409)}  fill-rule="evenodd" d="M2670.33,1096.13 L2672.44,1095.32" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[1410].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(1410)}  fill-rule="evenodd" d="M2672.44,1095.32 L2674.54,1094.5" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[1411].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(1411)}  fill-rule="evenodd" d="M2674.54,1094.5 L2676.64,1093.69" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[1412].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(1412)}  fill-rule="evenodd" d="M2676.64,1093.69 L2678.74,1092.87" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[1413].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(1413)}  fill-rule="evenodd" d="M2678.74,1092.87 L2680.84,1092.05" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[1414].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(1414)}  fill-rule="evenodd" d="M2680.84,1092.05 L2682.94,1091.23" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[1415].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(1415)}  fill-rule="evenodd" d="M2682.94,1091.23 L2685.03,1090.41" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[1416].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(1416)}  fill-rule="evenodd" d="M2685.03,1090.41 L2687.13,1089.58" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[1417].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(1417)}  fill-rule="evenodd" d="M2687.13,1089.58 L2689.22,1088.75" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[1418].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(1418)}  fill-rule="evenodd" d="M2689.22,1088.75 L2691.32,1087.93" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[1419].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(1419)}  fill-rule="evenodd" d="M2691.32,1087.93 L2693.41,1087.1" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[1420].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(1420)}  fill-rule="evenodd" d="M2693.41,1087.1 L2695.51,1086.27" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[1421].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(1421)}  fill-rule="evenodd" d="M2695.51,1086.27 L2697.6,1085.44" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[1422].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(1422)}  fill-rule="evenodd" d="M2697.6,1085.44 L2699.69,1084.61" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[1423].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(1423)}  fill-rule="evenodd" d="M2699.69,1084.61 L2701.79,1083.78" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[1424].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(1424)}  fill-rule="evenodd" d="M2701.79,1083.78 L2703.88,1082.95" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[1425].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(1425)}  fill-rule="evenodd" d="M2703.88,1082.95 L3100.76,925.487" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[1426].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(1426)}  fill-rule="evenodd" d="M3100.76,925.487 L3102.85,924.657" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[1427].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(1427)}  fill-rule="evenodd" d="M3102.85,924.657 L3104.95,923.826" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[1428].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(1428)}  fill-rule="evenodd" d="M3104.95,923.826 L3107.04,922.996" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[1429].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(1429)}  fill-rule="evenodd" d="M3107.04,922.996 L3109.14,922.167" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[1430].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(1430)}  fill-rule="evenodd" d="M3109.14,922.167 L3111.23,921.338" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[1431].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(1431)}  fill-rule="evenodd" d="M3111.23,921.338 L3113.32,920.51" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[1432].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(1432)}  fill-rule="evenodd" d="M3113.32,920.51 L3115.42,919.683" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[1433].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(1433)}  fill-rule="evenodd" d="M3115.42,919.683 L3117.51,918.857" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[1434].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(1434)}  fill-rule="evenodd" d="M3117.51,918.857 L3119.61,918.032" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[1435].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(1435)}  fill-rule="evenodd" d="M3119.61,918.032 L3121.71,917.209" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[1436].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(1436)}  fill-rule="evenodd" d="M3121.71,917.209 L3123.8,916.387" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[1437].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(1437)}  fill-rule="evenodd" d="M3123.8,916.387 L3125.9,915.567" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[1438].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(1438)}  fill-rule="evenodd" d="M3125.9,915.567 L3128,914.75" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[1439].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(1439)}  fill-rule="evenodd" d="M3128,914.75 L3130.1,913.934" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[1440].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(1440)}  fill-rule="evenodd" d="M3130.1,913.934 L3132.2,913.12" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[1441].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(1441)}  fill-rule="evenodd" d="M3132.2,913.12 L3134.31,912.309" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[1442].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(1442)}  fill-rule="evenodd" d="M3134.31,912.309 L3136.41,911.501" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[1443].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(1443)}  fill-rule="evenodd" d="M3136.41,911.501 L3138.52,910.695" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[1444].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(1444)}  fill-rule="evenodd" d="M3138.52,910.695 L3140.62,909.892" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[1445].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(1445)}  fill-rule="evenodd" d="M3140.62,909.892 L3142.73,909.093" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[1446].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(1446)}  fill-rule="evenodd" d="M3142.73,909.093 L3144.84,908.296" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[1447].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(1447)}  fill-rule="evenodd" d="M3144.84,908.296 L3146.95,907.503" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[1448].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(1448)}  fill-rule="evenodd" d="M3146.95,907.503 L3149.06,906.714" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[1449].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(1449)}  fill-rule="evenodd" d="M3149.06,906.714 L3151.18,905.928" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[1450].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(1450)}  fill-rule="evenodd" d="M3151.18,905.928 L3153.3,905.147" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[1451].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(1451)}  fill-rule="evenodd" d="M3153.3,905.147 L3155.42,904.369" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[1452].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(1452)}  fill-rule="evenodd" d="M3155.42,904.369 L3157.54,903.596" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[1453].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(1453)}  fill-rule="evenodd" d="M3157.54,903.596 L3159.66,902.827" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[1454].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(1454)}  fill-rule="evenodd" d="M3159.66,902.827 L3161.78,902.063" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[1455].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(1455)}  fill-rule="evenodd" d="M3161.78,902.063 L3163.91,901.303" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[1456].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(1456)}  fill-rule="evenodd" d="M3163.91,901.303 L3166.04,900.548" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[1457].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(1457)}  fill-rule="evenodd" d="M3556.86,850.25 L3527.19,848.318 L3497.46,847.311 L3467.71,847.228 L3437.98,848.072 L3408.29,849.839 L3378.7,852.529 L3349.22,856.138 L3319.91,860.661 L3290.79,866.094 L3261.91,872.428 L3233.28,879.658 L3204.96,887.773 L3176.97,896.765 L3166.04,900.548" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[1458].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(1458)}  fill-rule="evenodd" d="M2089.17,1724.16 L2387.74,1696.75" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[1459].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(1459)}  fill-rule="evenodd" d="M2387.74,1696.75 L2507.35,1697.53" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[1460].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(1460)}  fill-rule="evenodd" d="M2507.35,1697.53 L2587.78,1682.63" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[1461].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(1461)}  fill-rule="evenodd" d="M2587.78,1682.63 L2691.89,1628.33" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[1462].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(1462)}  fill-rule="evenodd" d="M2691.89,1628.33 L2808.61,1577.94" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[1463].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(1463)}  fill-rule="evenodd" d="M2808.61,1577.94 L2984.12,1361.92" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[1464].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(1464)}  fill-rule="evenodd" d="M2984.12,1361.92 L3039.5,1262.31" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[1465].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(1465)}  fill-rule="evenodd" d="M3039.5,1262.31 L3069.68,1216.91" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[1466].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(1466)}  fill-rule="evenodd" d="M3069.68,1216.91 L3110.13,1171.37" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[1467].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(1467)}  fill-rule="evenodd" d="M3110.13,1171.37 L3106.54,1135.16" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[1468].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(1468)}  fill-rule="evenodd" d="M3106.54,1135.16 L3048.45,1098.48" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[1469].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(1469)}  fill-rule="evenodd" d="M3048.45,1098.48 L3007.33,1047.79" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[1470].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(1470)}  fill-rule="evenodd" d="M3007.33,1047.79 L3013.87,994.574" vector-effect="none"/>
                </Tooltip>
                          );
                        })}
  </g>
  <g stroke="#00ff00" stroke-linejoin="miter" fill="none" stroke-linecap="butt" font-family="MS Shell Dlg 2" font-weight="400" stroke-opacity="1" font-size="32.5" transform="matrix(0.999751,0,0,0.999751,0,0)" font-style="normal" stroke-miterlimit="2" stroke-width="3.07087">

        {[1471].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(1471)}  fill-rule="evenodd" d="M1688.58,1554.42 L1695.06,1426.01" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[1472].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(1472)}  fill-rule="evenodd" d="M1695.06,1426.01 L1803.15,1435.29" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[1473].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(1473)}  fill-rule="evenodd" d="M1803.15,1435.29 L1810.47,1554.34" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[1474].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(1474)}  fill-rule="evenodd" d="M1810.47,1554.34 L1934.85,1590.92" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[1475].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(1475)}  fill-rule="evenodd" d="M1934.85,1590.92 L2089.17,1724.16" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[1476].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(1476)}  fill-rule="evenodd" d="M2089.17,1724.16 L2387.74,1696.75" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[1477].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(1477)}  fill-rule="evenodd" d="M2387.74,1696.75 L2507.35,1697.53" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[1478].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(1478)}  fill-rule="evenodd" d="M2507.35,1697.53 L2587.78,1682.63" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[1479].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(1479)}  fill-rule="evenodd" d="M2587.78,1682.63 L2691.89,1628.33" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[1480].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(1480)}  fill-rule="evenodd" d="M2691.89,1628.33 L2808.61,1577.94" vector-effect="none"/>
                </Tooltip>
                          );
                        })}
  </g>
  <g stroke="#a47158" stroke-linejoin="bevel" fill="none" stroke-linecap="square" font-family="MS Shell Dlg 2" font-weight="400" stroke-opacity="1" font-size="32.5" transform="matrix(0.999751,0,0,0.999751,0,0)" font-style="normal" stroke-width="3.07087">

        {[1481].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(1481)}  fill-rule="evenodd" d="M3013.87,994.574 L2651.68,1137.32" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[1482].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(1482)}  fill-rule="evenodd" d="M2651.68,1137.32 L2498.91,1177.54" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[1483].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(1483)}  fill-rule="evenodd" d="M2498.91,1177.54 L2340.53,1192.79" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[1484].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(1484)}  fill-rule="evenodd" d="M2340.53,1192.79 L2268.04,1192.15" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[1485].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(1485)}  fill-rule="evenodd" d="M2268.04,1192.15 L1692.64,1179.85" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[1486].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(1486)}  fill-rule="evenodd" d="M1692.64,1179.85 L1668.03,1183.17" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[1487].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(1487)}  fill-rule="evenodd" d="M1668.03,1183.17 L1523.01,1226.57" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[1488].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(1488)}  fill-rule="evenodd" d="M1523.01,1226.57 L1502.85,1250.93" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[1489].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(1489)}  fill-rule="evenodd" d="M1502.85,1250.93 L1501.23,1311.04" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[1490].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(1490)}  fill-rule="evenodd" d="M1501.23,1311.04 L1480.15,1320.96" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[1491].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(1491)}  fill-rule="evenodd" d="M1480.15,1320.96 L1473.98,1549.83" vector-effect="none"/>
                </Tooltip>
                          );
                        })}
  </g>
  <g stroke="#00ff00" stroke-linejoin="miter" fill="none" stroke-linecap="butt" font-family="MS Shell Dlg 2" font-weight="400" stroke-opacity="1" font-size="32.5" transform="matrix(0.999751,0,0,0.999751,0,0)" font-style="normal" stroke-miterlimit="2" stroke-width="3.07087">

        {[1492].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(1492)}  fill-rule="evenodd" d="M1473.98,1549.83 L1688.58,1554.42" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[1493].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(1493)}  fill-rule="evenodd" d="M317.881,1167.55 L603.516,1163.07" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[1494].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(1494)}  fill-rule="evenodd" d="M603.516,1163.07 L957.777,1164.1" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[1495].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(1495)}  fill-rule="evenodd" d="M957.777,1164.1 L1240,1170.15" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[1496].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(1496)}  fill-rule="evenodd" d="M1240,1170.15 L1264.4,1174.52" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[1497].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(1497)}  fill-rule="evenodd" d="M1264.4,1174.52 L1406.92,1224.08" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[1498].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(1498)}  fill-rule="evenodd" d="M1406.92,1224.08 L1425.74,1249.28" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[1499].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(1499)}  fill-rule="evenodd" d="M1425.74,1249.28 L1424.12,1309.39" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[1500].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(1500)}  fill-rule="evenodd" d="M1424.12,1309.39 L1444.64,1320.2" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[1501].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(1501)}  fill-rule="evenodd" d="M1444.64,1320.2 L1438.47,1549.07" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[1502].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(1502)}  fill-rule="evenodd" d="M1438.47,1549.07 L1688.58,1554.42" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[1503].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(1503)}  fill-rule="evenodd" d="M1688.58,1554.42 L1695.06,1426.01" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[1504].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(1504)}  fill-rule="evenodd" d="M1695.06,1426.01 L1803.15,1435.29" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[1505].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(1505)}  fill-rule="evenodd" d="M1803.15,1435.29 L1810.47,1554.34" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[1506].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(1506)}  fill-rule="evenodd" d="M1810.47,1554.34 L1934.85,1590.92" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[1507].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(1507)}  fill-rule="evenodd" d="M1934.85,1590.92 L2089.17,1724.16" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[1508].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(1508)}  fill-rule="evenodd" d="M2089.17,1724.16 L2387.74,1696.75" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[1509].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(1509)}  fill-rule="evenodd" d="M2387.74,1696.75 L2507.35,1697.53" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[1510].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(1510)}  fill-rule="evenodd" d="M2507.35,1697.53 L2587.78,1682.63" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[1511].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(1511)}  fill-rule="evenodd" d="M2587.78,1682.63 L2691.89,1628.33" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[1512].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(1512)}  fill-rule="evenodd" d="M2691.89,1628.33 L2808.61,1577.94" vector-effect="none"/>
                </Tooltip>
                          );
                        })}
  </g>
  <g stroke="#a47158" stroke-linejoin="bevel" fill="none" stroke-linecap="square" font-family="MS Shell Dlg 2" font-weight="400" stroke-opacity="1" font-size="32.5" transform="matrix(0.999751,0,0,0.999751,0,0)" font-style="normal" stroke-width="3.07087">

        {[1513].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(1513)}  fill-rule="evenodd" d="M3013.87,994.574 L3070.6,972.104" vector-effect="none"/>
                </Tooltip>
                          );
                        })}
  </g>
  <g stroke="#ff0000" stroke-linejoin="miter" fill="none" stroke-linecap="butt" font-family="MS Shell Dlg 2" font-weight="400" stroke-opacity="1" font-size="32.5" transform="matrix(0.999751,0,0,0.999751,0,0)" font-style="normal" stroke-miterlimit="2" stroke-width="3.07087">

        {[1514].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(1514)}  fill-rule="evenodd" d="M2982.63,865.418 L2997.74,964.376" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[1515].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(1515)}  fill-rule="evenodd" d="M2997.74,964.376 L2979.89,980.321" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[1516].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(1516)}  fill-rule="evenodd" d="M2979.89,980.321 L2970.54,1056.46" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[1517].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(1517)}  fill-rule="evenodd" d="M2970.54,1056.46 L3023.11,1121.25" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[1518].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(1518)}  fill-rule="evenodd" d="M3023.11,1121.25 L3083.47,1159.49" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[1519].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(1519)}  fill-rule="evenodd" d="M3083.47,1159.49 L3051.24,1185.4" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[1520].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(1520)}  fill-rule="evenodd" d="M3051.24,1185.4 L3030.99,1211.63" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[1521].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(1521)}  fill-rule="evenodd" d="M3030.99,1211.63 L3013.59,1256.82" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[1522].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(1522)}  fill-rule="evenodd" d="M3013.59,1256.82 L3018.59,1316.56" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[1523].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(1523)}  fill-rule="evenodd" d="M3018.59,1316.56 L3044.44,1363.28" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[1524].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(1524)}  fill-rule="evenodd" d="M3044.44,1363.28 L3073.37,1402.75" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[1525].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(1525)}  fill-rule="evenodd" d="M3073.37,1402.75 L3106.47,1433.44" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[1526].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(1526)}  fill-rule="evenodd" d="M3106.47,1433.44 L3100.29,1492.42" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[1527].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(1527)}  fill-rule="evenodd" d="M3100.29,1492.42 L3100.21,1529.43" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[1528].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(1528)}  fill-rule="evenodd" d="M3100.21,1529.43 L3075.33,1520.89" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[1529].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(1529)}  fill-rule="evenodd" d="M3075.33,1520.89 L3009.87,1531.25" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[1530].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(1530)}  fill-rule="evenodd" d="M3009.87,1531.25 L2872.95,1598.69" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[1531].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(1531)}  fill-rule="evenodd" d="M2872.95,1598.69 L2845.1,1602.39" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[1532].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(1532)}  fill-rule="evenodd" d="M2845.1,1602.39 L2704.63,1663.65" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[1533].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(1533)}  fill-rule="evenodd" d="M2704.63,1663.65 L2638.96,1748.08" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[1534].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(1534)}  fill-rule="evenodd" d="M2638.96,1748.08 L2622.24,1755.66" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[1535].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(1535)}  fill-rule="evenodd" d="M2622.24,1755.66 L2576.2,1762.81" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[1536].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(1536)}  fill-rule="evenodd" d="M2576.2,1762.81 L2510.85,1758.09" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[1537].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(1537)}  fill-rule="evenodd" d="M2510.85,1758.09 L2337.48,1791.22" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[1538].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(1538)}  fill-rule="evenodd" d="M2337.48,1791.22 L2137.07,1847.95" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[1539].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(1539)}  fill-rule="evenodd" d="M2137.07,1847.95 L2089.67,1878.23" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[1540].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(1540)}  fill-rule="evenodd" d="M2089.67,1878.23 L1706.05,1977.24" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[1541].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(1541)}  fill-rule="evenodd" d="M1706.05,1977.24 L1577.32,1902.38" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[1542].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(1542)}  fill-rule="evenodd" d="M1577.32,1902.38 L1314.61,1835.2" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[1543].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(1543)}  fill-rule="evenodd" d="M1314.61,1835.2 L1101.74,1821.16" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[1544].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(1544)}  fill-rule="evenodd" d="M1101.74,1821.16 L989.646,1896.23" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[1545].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(1545)}  fill-rule="evenodd" d="M989.646,1896.23 L944.198,1976.94" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[1546].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(1546)}  fill-rule="evenodd" d="M944.198,1976.94 L908.516,1933.05" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[1547].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(1547)}  fill-rule="evenodd" d="M908.516,1933.05 L856.392,1913.03" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[1548].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(1548)}  fill-rule="evenodd" d="M856.392,1913.03 L823.045,1889.64" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[1549].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(1549)}  fill-rule="evenodd" d="M823.045,1889.64 L724.986,1804.34" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[1550].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(1550)}  fill-rule="evenodd" d="M724.986,1804.34 L645.248,1754.53" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[1551].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(1551)}  fill-rule="evenodd" d="M645.248,1754.53 L554.982,1635.33" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[1552].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(1552)}  fill-rule="evenodd" d="M554.982,1635.33 L480.073,1528.08" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[1553].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(1553)}  fill-rule="evenodd" d="M480.073,1528.08 L450.36,1422.77" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[1554].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(1554)}  fill-rule="evenodd" d="M450.36,1422.77 L443.641,1347.35" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[1555].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(1555)}  fill-rule="evenodd" d="M443.641,1347.35 L423.959,1252.34" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[1556].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(1556)}  fill-rule="evenodd" d="M423.959,1252.34 L396.467,1235.01" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[1557].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(1557)}  fill-rule="evenodd" d="M396.467,1235.01 L395.639,1157.53" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[1558].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(1558)}  fill-rule="evenodd" d="M395.639,1157.53 L380.857,1137.65" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[1559].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(1559)}  fill-rule="evenodd" d="M380.857,1137.65 L388.058,1117.78" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[1560].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(1560)}  fill-rule="evenodd" d="M388.058,1117.78 L383.284,1093.41" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[1561].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(1561)}  fill-rule="evenodd" d="M383.284,1093.41 L365.102,1000.63" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[1562].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(1562)}  fill-rule="evenodd" d="M365.102,1000.63 L393,866.342" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[1563].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(1563)}  fill-rule="evenodd" d="M393,866.342 L430.771,723.632" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[1564].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(1564)}  fill-rule="evenodd" d="M430.771,723.632 L468,653.689" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[1565].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(1565)}  fill-rule="evenodd" d="M991.586,710.656 L923.519,1100.7" vector-effect="none"/>
                </Tooltip>
                          );
                        })}
  </g>
  <g stroke="#a47158" stroke-linejoin="bevel" fill="none" stroke-linecap="square" font-family="MS Shell Dlg 2" font-weight="400" stroke-opacity="1" font-size="32.5" transform="matrix(0.999751,0,0,0.999751,0,0)" font-style="normal" stroke-width="3.07087">

        {[1566].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(1566)}  fill-rule="evenodd" d="M1460.47,733.258 L1454.2,965.763" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[1567].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(1567)}  fill-rule="evenodd" d="M1454.2,965.763 L1433.12,975.675" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[1568].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(1568)}  fill-rule="evenodd" d="M1433.12,975.675 L1431.5,1035.79" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[1569].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(1569)}  fill-rule="evenodd" d="M1431.5,1035.79 L1411.34,1060.15" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[1570].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(1570)}  fill-rule="evenodd" d="M1411.34,1060.15 L1266.32,1103.55" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[1571].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(1571)}  fill-rule="evenodd" d="M1266.32,1103.55 L1241.71,1106.86" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[1572].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(1572)}  fill-rule="evenodd" d="M1241.71,1106.86 L923.519,1100.7" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[1573].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(1573)}  fill-rule="evenodd" d="M923.519,1100.7 L991.586,710.656" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[1574].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(1574)}  fill-rule="evenodd" d="M891.52,705.829 L844.408,1026.95" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[1575].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(1575)}  fill-rule="evenodd" d="M844.408,1026.95 L301.039,961.3" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[1576].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(1576)}  fill-rule="evenodd" d="M301.039,961.3 L292.936,1000.3" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[1577].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(1577)}  fill-rule="evenodd" d="M292.936,1000.3 L313.315,1104.3" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[1578].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(1578)}  fill-rule="evenodd" d="M313.315,1104.3 L602.266,1099.77" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[1579].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(1579)}  fill-rule="evenodd" d="M602.266,1099.77 L923.519,1100.7" vector-effect="none"/>
                </Tooltip>
                          );
                        })}
  </g>
  <g stroke="#00ff00" stroke-linejoin="miter" fill="none" stroke-linecap="butt" font-family="MS Shell Dlg 2" font-weight="400" stroke-opacity="1" font-size="32.5" transform="matrix(0.999751,0,0,0.999751,0,0)" font-style="normal" stroke-miterlimit="2" stroke-width="3.07087">

        {[1580].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(1580)}  fill-rule="evenodd" d="M2624.45,963.697 L2831.07,984.915" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[1581].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(1581)}  fill-rule="evenodd" d="M2628.51,932.25 L2896.64,959.783" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[1582].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(1582)}  fill-rule="evenodd" d="M2628.51,932.25 L2624.45,963.697" vector-effect="none"/>
                </Tooltip>
                          );
                        })}
  </g>
  <g stroke="#a47158" stroke-linejoin="bevel" fill="none" stroke-linecap="square" font-family="MS Shell Dlg 2" font-weight="400" stroke-opacity="1" font-size="32.5" transform="matrix(0.999751,0,0,0.999751,0,0)" font-style="normal" stroke-width="3.07087">

        {[1583].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(1583)}  fill-rule="evenodd" d="M2524.42,940.782 L2528.69,962.592" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[1584].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(1584)}  fill-rule="evenodd" d="M2443.02,904.797 L2452.94,853.895" vector-effect="none"/>
                </Tooltip>
                          );
                        })}
  </g>
  <g stroke="#ff0000" stroke-linejoin="miter" fill="none" stroke-linecap="butt" font-family="MS Shell Dlg 2" font-weight="400" stroke-opacity="1" font-size="32.5" transform="matrix(0.999751,0,0,0.999751,0,0)" font-style="normal" stroke-miterlimit="2" stroke-width="3.07087">

        {[1585].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(1585)}  fill-rule="evenodd" d="M1192.58,-248 L1018.09,680.233" vector-effect="none"/>
                </Tooltip>
                          );
                        })}
  </g>
  <g stroke="#bebebe" stroke-linejoin="miter" fill="none" stroke-linecap="butt" font-family="MS Shell Dlg 2" font-weight="400" stroke-opacity="1" font-size="32.5" transform="matrix(0.999751,0,0,0.999751,0,0)" font-style="normal" stroke-miterlimit="2" stroke-width="3.07087">

        {[1586].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(1586)}  fill-rule="evenodd" d="M1188.36,-248 L1013.92,680.032" vector-effect="none"/>
                </Tooltip>
                          );
                        })}
  </g>
  <g stroke="#00ff00" stroke-linejoin="miter" fill="none" stroke-linecap="butt" font-family="MS Shell Dlg 2" font-weight="400" stroke-opacity="1" font-size="32.5" transform="matrix(0.999751,0,0,0.999751,0,0)" font-style="normal" stroke-miterlimit="2" stroke-width="3.07087">

        {[1587].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(1587)}  fill-rule="evenodd" d="M1179.22,-248 L1004.85,679.594" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[1588].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(1588)}  fill-rule="evenodd" d="M1169.93,-248 L995.649,679.15" vector-effect="none"/>
                </Tooltip>
                          );
                        })}
  </g>
  <g stroke="#bebebe" stroke-linejoin="miter" fill="none" stroke-linecap="butt" font-family="MS Shell Dlg 2" font-weight="400" stroke-opacity="1" font-size="32.5" transform="matrix(0.999751,0,0,0.999751,0,0)" font-style="normal" stroke-miterlimit="2" stroke-width="3.07087">

        {[1589].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(1589)}  fill-rule="evenodd" d="M1160.79,-248 L986.585,678.713" vector-effect="none"/>
                </Tooltip>
                          );
                        })}
  </g>
  <g stroke="#ff0000" stroke-linejoin="miter" fill="none" stroke-linecap="butt" font-family="MS Shell Dlg 2" font-weight="400" stroke-opacity="1" font-size="32.5" transform="matrix(0.999751,0,0,0.999751,0,0)" font-style="normal" stroke-miterlimit="2" stroke-width="3.07087">

        {[1590].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(1590)}  fill-rule="evenodd" d="M1156.57,-248 L982.41,678.512" vector-effect="none"/>
                </Tooltip>
                          );
                        })}
  </g>
  <g stroke="#ffff00" stroke-linejoin="miter" fill="none" stroke-linecap="butt" font-family="MS Shell Dlg 2" font-weight="400" stroke-opacity="1" font-size="32.5" transform="matrix(0.999751,0,0,0.999751,0,0)" font-style="normal" stroke-miterlimit="2" stroke-width="3.07087">

        {[1591].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(1591)}  fill-rule="evenodd" d="M553.348,-113.544 L569.664,46.2803" vector-effect="none"/>
                </Tooltip>
                          );
                        })}
  </g>

     
                    
          
        
  <g stroke="#232323" stroke-linejoin="bevel" fill="#ffffff" stroke-linecap="square" font-family="MS Shell Dlg 2" font-weight="400" fill-opacity="0" stroke-opacity="0.372" font-size="32.5" transform="matrix(0.999751,0,0,0.999751,0,0)" font-style="normal" stroke-width="3.07087">

        {[1592].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(1592)}  fill-rule="evenodd" d="M1668.31,1028.59 L1693.03,1030.2 L1688.57,1094.74 L1663.71,1094.07 L1668.31,1028.59" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[1593].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(1593)}  fill-rule="evenodd" d="M1693.08,1030.11 L1717.9,1031.49 L1713.43,1095.57 L1688.57,1094.81 L1693.08,1030.11" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[1594].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(1594)}  fill-rule="evenodd" d="M1717.85,1031.52 L1742.71,1032.9 L1738.28,1096.37 L1713.43,1095.59 L1717.85,1031.52" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[1595].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(1595)}  fill-rule="evenodd" d="M1742.72,1032.89 L1767.53,1034.27 L1763.13,1097.16 L1738.28,1096.38 L1742.72,1032.89" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[1596].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(1596)}  fill-rule="evenodd" d="M1806.59,1023.5 L1744.28,1020.11 L1748.92,957.085 L1811.23,960.478 L1806.59,1023.5" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[1597].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(1597)}  fill-rule="evenodd" d="M1753.29,893.612 L1815.43,897.362 L1810.96,960.567 L1748.83,957.175 L1753.29,893.612" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[1598].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(1598)}  fill-rule="evenodd" d="M1767.53,1034.27 L1792.34,1035.64 L1787.99,1097.94 L1763.13,1097.16 L1767.53,1034.27" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[1599].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(1599)}  fill-rule="evenodd" d="M1792.34,1035.64 L1817.15,1037.02 L1812.84,1098.73 L1787.99,1097.94 L1792.34,1035.64" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[1600].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(1600)}  fill-rule="evenodd" d="M1842.3,1025.65 L1806.59,1023.86 L1811.23,960.478 L1846.41,962.977 L1842.3,1025.65" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[1601].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(1601)}  fill-rule="evenodd" d="M1815.43,897.362 L1850.96,899.147 L1846.67,962.888 L1810.79,960.745 L1815.43,897.362" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[1602].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(1602)}  fill-rule="evenodd" d="M1881.58,964.763 L1877.65,1027.79 L1842.12,1025.83 L1846.58,962.442 L1881.58,964.763" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[1603].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(1603)}  fill-rule="evenodd" d="M1850.96,899.147 L1886.49,901.468 L1881.67,964.852 L1846.67,962.709 L1850.96,899.147" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[1604].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(1604)}  fill-rule="evenodd" d="M1913,1029.4 L1877.47,1027.79 L1881.94,964.049 L1917.29,966.905 L1913,1029.4" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[1605].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(1605)}  fill-rule="evenodd" d="M1886.49,901.468 L1945.59,904.682 L1949.52,905.932 L1953.8,908.431 L1956.48,912.538 L1957.01,917.537 L1953.44,968.244 L1881.85,964.674 L1886.49,901.468" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[1606].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(1606)}  fill-rule="evenodd" d="M1951.48,999.49 L1949.96,1019.93 L1949.07,1022.97 L1947.64,1025.38 L1945.23,1028.06 L1942.37,1029.58 L1939.16,1030.74 L1936.93,1030.91 L1913.09,1029.58 L1915.32,997.437 L1951.48,999.49" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[1607].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(1607)}  fill-rule="evenodd" d="M1953.62,968.244 L1951.3,999.49 L1915.24,997.347 L1917.2,966.638 L1953.62,968.244" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[1608].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(1608)}  fill-rule="evenodd" d="M1971.7,916.555 L1972.01,915.618 L1972.5,914.19 L1973.62,912.359 L1975.9,910.083 L1976.74,909.592 L1978.62,908.298 L1979.69,907.94 L1981.92,907.226 L1982.59,907.092 L1984.15,906.869 L1984.73,906.869 L2011.18,908.252 L2006.91,969.32 L1967.89,967.643 L1971.7,916.555" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[1609].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(1609)}  fill-rule="evenodd" d="M2011.15,908.219 L2034.19,909.513 L2026.37,970.085 L2006.91,969.282 L2011.15,908.219" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[1610].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(1610)}  fill-rule="evenodd" d="M2034.21,909.536 L2039.97,909.859 L2057.31,912.582 L2045.94,971.96 L2029.16,970.286 L2026.34,970.13 L2034.21,909.536" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[1611].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(1611)}  fill-rule="evenodd" d="M1817.16,1037.02 L1841.97,1038.4 L1837.69,1099.51 L1812.84,1098.73 L1817.16,1037.02" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[1612].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(1612)}  fill-rule="evenodd" d="M1841.96,1038.38 L1866.78,1039.78 L1862.55,1100.29 L1837.69,1099.51 L1841.96,1038.38" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[1613].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(1613)}  fill-rule="evenodd" d="M1967.89,967.643 L1964.57,1015.28 L1964.58,1016.34 L1964.61,1016.93 L1964.69,1017.47 L1964.74,1018.01 L1964.93,1018.85 L1965.07,1019.42 L1965.2,1019.84 L1965.56,1020.93 L1965.89,1021.68 L1966.13,1022.2 L1966.62,1023.09 L1966.94,1023.58 L1968.09,1025.16 L1968.25,1025.33 L1968.81,1025.96 L1970.1,1027.24 L1972.09,1028.69 L1975.06,1030.16 L1978.12,1031.1 L1981.04,1031.48 L1981.54,1031.5 L1982.14,1031.52 L2018.96,1030.8 L2029.16,970.277 L1967.89,967.643" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[1614].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(1614)}  fill-rule="evenodd" d="M1866.77,1039.78 L1891.59,1041.16 L1887.41,1101.07 L1862.54,1100.29 L1866.77,1039.78" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[1615].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(1615)}  fill-rule="evenodd" d="M1955.71,1044.72 L2030.37,1043.23 L2028.27,1105.51 L1953.76,1103.13 L1955.71,1044.72" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[1616].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(1616)}  fill-rule="evenodd" d="M1616.88,897.897 L1618.67,893.076 L1623.67,888.97 L1627.6,887.542 L1631.17,886.827 L1753.47,893.791 L1744.37,1020.38 L1620.99,1013.6 L1615.63,1011.63 L1613.13,1009.31 L1609.92,1004.31 L1610.28,1002.17 L1616.88,897.897" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[1617].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(1617)}  fill-rule="evenodd" d="M1494.04,877.275 L1592.67,884.384 L1599.74,890.13 L1602.67,895.81 L1596.95,1005.79 L1597.24,1011.54 L1607.24,1021.18 L1621.88,1027.25 L1617.78,1094.03 L1528.39,1062.93 L1509.4,1036.45 L1509.82,977.228 L1489.82,968.657 L1494.11,880.098 L1494.04,877.275" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[1618].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(1618)}  fill-rule="evenodd" d="M1495.84,734.98 L1492.63,857.195 L2042.8,887.815 L2139.03,902.791 L2141.98,902.969 L2144.66,902.746 L2146.29,902.367 L2147.14,902.093 L2148.2,901.681 L2149.33,901.123 L2150.11,900.676 L2151.44,899.739 L2152.59,898.723 L2153.31,897.909 L2153.78,897.351 L2154.46,896.307 L2154.94,895.443 L2155.45,894.299 L2155.66,893.646 L2155.83,893.021 L2156.12,891.632 L2180.23,767.9 L1495.84,734.98" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[1619].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(1619)}  fill-rule="evenodd" d="M2030.37,1043.23 L2060.22,1042.64 L2058.06,1106.45 L2028.27,1105.51 L2030.37,1043.23" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[1620].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(1620)}  fill-rule="evenodd" d="M2057.32,912.571 L2095.75,918.489 L2084.76,975.888 L2045.94,971.949 L2057.32,912.571" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[1621].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(1621)}  fill-rule="evenodd" d="M1460.48,733.224 L1454.1,965.787 L1433.12,975.702 L1431.5,1035.76 L1411.34,1060.14 L1266.25,1103.64 L1241.08,1107.07 L923.621,1100.59 L991.629,710.63 L1460.48,733.224" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[1622].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(1622)}  fill-rule="evenodd" d="M891.53,705.816 L844.34,1026.9 L301.041,961.402 L321.442,862.161 L333.645,817.164 L363.007,702.384 L374.828,680.648 L891.53,705.816" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[1623].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(1623)}  fill-rule="evenodd" d="M-100.474,969.584 L289.471,965.298 L306.611,1296.68 L-97.6173,1299.54 L-100.474,969.584" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[1624].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(1624)}  fill-rule="evenodd" d="M2377.87,856.154 L2376.66,862.392 L2397.65,865.642 L2398.87,859.405 L2377.87,856.154" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[1625].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(1625)}  fill-rule="evenodd" d="M2376.66,862.391 L2375.44,868.629 L2375.44,868.629 L2396.44,871.88 L2397.65,865.642 L2376.66,862.391" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[1626].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(1626)}  fill-rule="evenodd" d="M2371.79,887.342 L2392.79,890.593 L2391.57,896.83 L2370.58,893.58 L2371.79,887.342" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[1627].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(1627)}  fill-rule="evenodd" d="M2249.62,829.865 L2260.13,831.494 L2255.27,856.445 L2244.77,854.82 L2249.62,829.865" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[1628].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(1628)}  fill-rule="evenodd" d="M2333.61,842.873 L2344.1,844.496 L2339.24,869.447 L2328.74,867.823 L2333.61,842.873" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[1629].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(1629)}  fill-rule="evenodd" d="M2291.62,836.37 L2302.12,837.997 L2297.25,862.947 L2286.76,861.321 L2291.62,836.37" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[1630].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(1630)}  fill-rule="evenodd" d="M2302.12,837.995 L2312.61,839.622 L2307.75,864.572 L2297.25,862.946 L2302.12,837.995" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[1631].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(1631)}  fill-rule="evenodd" d="M2281.12,834.746 L2291.62,836.367 L2286.76,861.321 L2276.26,859.696 L2281.12,834.746" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[1632].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(1632)}  fill-rule="evenodd" d="M2312.6,839.628 L2323.11,841.248 L2318.25,866.198 L2307.75,864.572 L2312.6,839.628" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[1633].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(1633)}  fill-rule="evenodd" d="M2323.11,841.248 L2333.61,842.873 L2328.74,867.822 L2318.25,866.198 L2323.11,841.248" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[1634].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(1634)}  fill-rule="evenodd" d="M2260.13,831.493 L2270.63,833.12 L2265.76,858.07 L2255.27,856.445 L2260.13,831.493" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[1635].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(1635)}  fill-rule="evenodd" d="M2270.63,833.12 L2281.12,834.746 L2276.26,859.696 L2265.76,858.07 L2270.63,833.12" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[1636].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(1636)}  fill-rule="evenodd" d="M2472.71,996.112 L2483.11,994.076 L2489.21,1018.8 L2478.8,1020.85 L2472.71,996.112" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[1637].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(1637)}  fill-rule="evenodd" d="M2462.3,998.149 L2472.71,996.112 L2478.8,1020.85 L2468.35,1022.85 L2462.3,998.149" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[1638].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(1638)}  fill-rule="evenodd" d="M2483.11,994.076 L2493.52,992.038 L2499.61,1016.77 L2489.21,1018.82 L2483.11,994.076" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[1639].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(1639)}  fill-rule="evenodd" d="M2503.92,990.003 L2514.3,987.934 L2520.42,1012.7 L2510.02,1014.72 L2503.92,990.003" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[1640].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(1640)}  fill-rule="evenodd" d="M2493.52,992.038 L2503.93,990.004 L2510.02,1014.74 L2499.61,1016.77 L2493.52,992.038" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[1641].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(1641)}  fill-rule="evenodd" d="M2380.5,842.674 L2401.49,845.928 L2398.87,859.405 L2377.87,856.154 L2380.5,842.674" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[1642].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(1642)}  fill-rule="evenodd" d="M2370.58,893.58 L2391.57,896.83 L2388.72,911.49 L2367.72,908.244 L2370.58,893.58" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[1643].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(1643)}  fill-rule="evenodd" d="M2232.13,827.175 L2249.63,829.862 L2244.77,854.819 L2227.27,852.108 L2232.13,827.175" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[1644].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(1644)}  fill-rule="evenodd" d="M2197.15,821.739 L2214.64,824.451 L2209.78,849.405 L2192.28,846.693 L2197.15,821.739" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[1645].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(1645)}  fill-rule="evenodd" d="M2375.44,868.628 L2396.43,871.877 L2392.79,890.593 L2371.8,887.341 L2375.44,868.628" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[1646].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(1646)}  fill-rule="evenodd" d="M2452.44,970.907 L2452.51,970.907 L2469.8,969.906 L2472.71,996.112 L2451.91,1000.18 L2452.31,972.941 L2452.44,970.907" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[1647].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(1647)}  fill-rule="evenodd" d="M2203.85,861.334 L2217.85,863.502 L2211.77,894.689 L2197.77,892.522 L2203.85,861.334" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[1648].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(1648)}  fill-rule="evenodd" d="M2273.83,872.163 L2287.82,874.338 L2281.75,905.526 L2267.75,903.359 L2273.83,872.163" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[1649].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(1649)}  fill-rule="evenodd" d="M2217.85,863.502 L2231.84,865.669 L2225.76,896.856 L2211.77,894.688 L2217.85,863.502" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[1650].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(1650)}  fill-rule="evenodd" d="M2259.83,870.004 L2273.83,872.171 L2267.75,903.359 L2253.75,901.191 L2259.83,870.004" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[1651].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(1651)}  fill-rule="evenodd" d="M2287.82,874.339 L2301.82,876.506 L2295.74,907.693 L2295.74,907.693 L2281.75,905.526 L2287.82,874.339" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[1652].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(1652)}  fill-rule="evenodd" d="M2214.64,824.454 L2232.13,827.177 L2227.28,852.11 L2209.78,849.4 L2214.64,824.454" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[1653].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(1653)}  fill-rule="evenodd" d="M2231.84,865.669 L2245.84,867.836 L2239.76,899.024 L2225.76,896.857 L2231.84,865.669" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[1654].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(1654)}  fill-rule="evenodd" d="M2245.84,867.836 L2259.83,870.004 L2253.75,901.192 L2239.76,899.034 L2245.84,867.836" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[1655].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(1655)}  fill-rule="evenodd" d="M2469.81,969.915 L2488.73,967.557 L2493.52,992.038 L2472.71,996.112 L2469.81,969.915" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[1656].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(1656)}  fill-rule="evenodd" d="M2509.82,964.927 L2528.68,962.599 L2535.15,983.89 L2514.31,987.965 L2509.82,964.927" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[1657].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(1657)}  fill-rule="evenodd" d="M2436.49,970.335 L2446.09,971.162 L2446.36,971.162 L2452.39,970.844 L2451.9,1000.17 L2431.12,1004.34 L2433.92,982.856 L2435.82,970.272 L2436.49,970.335" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[1658].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(1658)}  fill-rule="evenodd" d="M2488.73,967.559 L2509.82,964.937 L2514.32,987.972 L2493.52,992.039 L2488.73,967.559" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[1659].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(1659)}  fill-rule="evenodd" d="M2411.11,1004 L2410.55,1006.86 L2410.27,1008.31 L2410.27,1008.33 L2431.08,1004.26 L2435.81,970.293 L2423.48,969.251 L2418.05,968.401 L2411.11,1004" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[1660].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(1660)}  fill-rule="evenodd" d="M2301.82,876.506 L2336.81,881.924 L2334.38,894.399 L2299.39,888.98 L2301.82,876.506" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[1661].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(1661)}  fill-rule="evenodd" d="M2367.72,908.244 L2395.71,912.576 L2390.06,941.578 L2377.35,939.608 L2377.34,939.571 L2377.11,938.525 L2376.88,937.704 L2376.4,936.152 L2376.07,935.231 L2375.41,933.674 L2375.25,933.319 L2374.21,931.285 L2373.75,930.507 L2373.26,929.728 L2372.68,928.828 L2372.48,928.552 L2371.83,927.678 L2370.9,926.492 L2370.25,925.761 L2369.74,925.21 L2368.98,924.4 L2368.6,924.029 L2367.43,922.938 L2366.19,921.906 L2365.6,921.455 L2365.32,921.238 L2365.2,921.153 L2367.72,908.244" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[1662].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(1662)}  fill-rule="evenodd" d="M2171.16,888.4 L2174.94,868.937 L2175.89,866.326 L2177.55,864.041 L2178.75,862.861 L2180.06,861.832 L2181.61,860.903 L2183.9,859.923 L2186.16,859.396 L2187.24,859.296 L2188.65,859.145 L2190.03,859.22 L2191.78,859.471 L2192.76,859.647 L2194.27,859.848 L2203.85,861.334 L2197.77,892.522 L2171.16,888.4" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[1663].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(1663)}  fill-rule="evenodd" d="M2299.39,888.98 L2334.38,894.399 L2330.22,915.731 L2330.15,915.756 L2330.04,915.793 L2329.8,915.875 L2329.55,915.96 L2329.45,915.997 L2329.35,916.029 L2329.25,916.065 L2329.08,916.123 L2328.93,916.178 L2328.77,916.243 L2328.62,916.3 L2328.43,916.369 L2328.28,916.428 L2328.13,916.485 L2327.98,916.541 L2327.77,916.629 L2327.61,916.695 L2327.49,916.745 L2327.37,916.796 L2327.16,916.883 L2326.99,916.955 L2326.88,917.001 L2326.79,917.039 L2326.65,917.102 L2326.57,917.137 L2326.47,917.186 L2326.31,917.257 L2326.17,917.321 L2326,917.4 L2325.81,917.485 L2325.48,917.636 L2324.79,917.992 L2324.14,918.328 L2323.18,918.857 L2322.62,919.175 L2320.89,920.284 L2319.33,921.442 L2318.41,922.099 L2316.5,923.793 L2315.33,924.994 L2314.66,925.728 L2313.27,927.423 L2312.14,928.948 L2311.8,929.456 L2311.8,929.458 L2292.09,926.406 L2299.39,888.98" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[1664].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(1664)}  fill-rule="evenodd" d="M2354.68,975.167 L2354.89,975.098 L2355.47,974.9 L2355.91,974.741 L2356.65,974.46 L2357,974.328 L2357.59,974.076 L2358.16,973.838 L2358.77,973.56 L2359.5,973.21 L2360.23,972.853 L2361.31,972.27 L2362.19,971.759 L2362.77,971.404 L2363.82,970.734 L2364.24,970.438 L2364.41,970.326 L2364.75,970.083 L2365.2,969.754 L2365.2,969.754 L2365.4,969.609 L2365.72,969.355 L2366.7,968.565 L2367.04,968.29 L2367.45,967.922 L2368.06,967.379 L2368.78,966.68 L2369.12,966.341 L2369.55,965.907 L2369.95,965.467 L2370.44,964.924 L2371.01,964.26 L2371.27,963.944 L2371.92,963.113 L2372.72,962.011 L2373.1,961.442 L2373.1,961.44 L2418.05,968.401 L2411.12,1004 L2350.23,1001.82 L2354.68,975.167" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[1665].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(1665)}  fill-rule="evenodd" d="M2401.5,845.931 L2452.96,853.875 L2443.02,904.804 L2391.57,896.838 L2401.5,845.931" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[1666].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(1666)}  fill-rule="evenodd" d="M2258.93,943.76 L2307.55,951.289 L2307.55,951.296 L2307.55,951.301 L2307.55,951.307 L2307.55,951.315 L2307.55,951.321 L2307.56,951.33 L2307.56,951.356 L2307.57,951.385 L2307.57,951.405 L2307.58,951.432 L2307.59,951.458 L2307.61,951.563 L2307.62,951.624 L2307.65,951.732 L2307.67,951.818 L2307.69,951.897 L2307.71,951.981 L2307.72,952.055 L2307.8,952.368 L2307.92,952.816 L2308.02,953.191 L2308.27,954.034 L2308.51,954.741 L2308.71,955.314 L2309.14,956.394 L2309.55,957.335 L2309.79,957.871 L2310.38,959.076 L2311,960.131 L2311.47,960.922 L2311.98,961.717 L2312.78,962.822 L2314.53,965.077 L2316.47,966.952 L2317.88,968.324 L2318.85,969.161 L2319.32,969.473 L2319.68,969.741 L2315.87,992.578 L2251.03,984.048 L2258.93,943.76" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[1667].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(1667)}  fill-rule="evenodd" d="M2165.68,842.568 L2192.27,846.686 L2197.15,821.741 L2232.14,827.162 L2243.1,770.933 L2180.22,767.906 L2165.68,842.568" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[1668].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(1668)}  fill-rule="evenodd" d="M2232.14,827.159 L2344.1,844.497 L2357.37,776.419 L2243.1,770.921 L2232.14,827.159" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[1669].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(1669)}  fill-rule="evenodd" d="M2391.56,896.828 L2442.95,904.783 L2452.95,853.891 L2520.41,864.357 L2517.79,877.745 L2523.63,885.16 L2522.74,902.023 L2522.07,913.718 L2522.91,923.547 L2523.76,932.699 L2524.43,940.771 L2467.52,947.868 L2461.16,948.207 L2446.59,949.054 L2427.86,947.444 L2390.06,941.576 L2395.67,912.544 L2388.59,911.477 L2391.56,896.828" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[1670].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(1670)}  fill-rule="evenodd" d="M2514.34,987.973 L2524.73,985.932 L2530.81,1010.65 L2520.42,1012.7 L2514.34,987.973" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[1671].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(1671)}  fill-rule="evenodd" d="M2382.93,830.202 L2391.18,787.705 L2394,786.418 L2397.57,784.463 L2400.96,781.699 L2402.55,780.221 L2403.91,778.672 L2423.61,779.613 L2412.84,834.837 L2382.93,830.202" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[1672].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(1672)}  fill-rule="evenodd" d="M2412.84,834.831 L2489.63,846.747 L2500.74,789.786 L2441.35,780.456 L2423.55,779.598 L2412.84,834.831" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[1673].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(1673)}  fill-rule="evenodd" d="M2500.76,789.789 L2533.97,795.001 L2522.83,851.888 L2489.61,846.74 L2500.76,789.789" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[1674].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(1674)}  fill-rule="evenodd" d="M2323.93,933.517 L2324.73,932.714 L2326.34,931.196 L2327.23,930.303 L2329.04,929.031 L2330.53,928.183 L2332.61,927.179 L2334.64,926.398 L2336.36,925.929 L2339.37,925.371 L2341.72,925.148 L2344.75,925.237 L2347.58,925.706 L2350.89,926.599 L2353.74,927.826 L2355.73,929.031 L2358.28,930.817 L2360.13,932.691 L2362.65,935.995 L2363.92,938.606 L2364.93,942.087 L2365.28,945.971 L2364.98,948.091 L2364.61,949.988 L2363.78,952.477 L2362.52,955.021 L2361.01,957.163 L2360.15,958.201 L2358.73,959.574 L2357.05,961.013 L2355.3,962.218 L2353.4,963.245 L2351.46,964.093 L2349.2,964.83 L2347.03,965.332 L2344.05,965.678 L2342.21,965.734 L2340.31,965.644 L2338.13,965.354 L2335.97,964.908 L2333.64,964.238 L2331.15,963.044 L2329.06,961.85 L2326.44,959.875 L2325.13,958.569 L2323.59,956.907 L2322.29,954.865 L2321.31,952.901 L2320.74,951.483 L2320.18,949.598 L2319.82,947.667 L2319.66,945.625 L2319.74,943.661 L2320.09,941.596 L2320.52,939.856 L2321.31,937.925 L2323.93,933.517" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[1675].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(1675)}  fill-rule="evenodd" d="M2350.24,1001.81 L2347.47,1033.99 L2407.86,1035.56 L2410.27,1008.33 L2411.12,1004 L2350.24,1001.81" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[1676].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(1676)}  fill-rule="evenodd" d="M2407.87,1035.55 L2414.86,1035.74 L2420.12,1032.93 L2426.77,1031.03 L2420.69,1006.3 L2410.26,1008.33 L2407.87,1035.55" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[1677].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(1677)}  fill-rule="evenodd" d="M2420.69,1006.29 L2431.09,1004.24 L2437.18,1028.99 L2426.73,1030.99 L2420.69,1006.29" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[1678].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(1678)}  fill-rule="evenodd" d="M2431.09,1004.27 L2441.48,1002.23 L2447.59,1026.96 L2437.18,1028.99 L2431.09,1004.27" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[1679].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(1679)}  fill-rule="evenodd" d="M2441.51,1002.27 L2451.9,1000.17 L2457.99,1024.92 L2447.57,1026.94 L2441.51,1002.27" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[1680].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(1680)}  fill-rule="evenodd" d="M2451.91,1000.18 L2462.3,998.15 L2468.39,1022.88 L2457.98,1024.92 L2451.91,1000.18" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[1681].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(1681)}  fill-rule="evenodd" d="M2347.06,1046.65 L2368.36,1047.2 L2367.94,1059.86 L2346.64,1059.34 L2347.06,1046.65" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[1682].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(1682)}  fill-rule="evenodd" d="M2346.64,1059.33 L2346.23,1071.96 L2367.53,1072.51 L2367.94,1059.85 L2346.64,1059.33" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[1683].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(1683)}  fill-rule="evenodd" d="M2346.23,1071.96 L2345.82,1084.62 L2367.12,1085.17 L2367.53,1072.51 L2346.23,1071.96" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[1684].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(1684)}  fill-rule="evenodd" d="M2345.82,1084.62 L2345.4,1097.27 L2366.7,1097.83 L2367.12,1085.17 L2345.82,1084.62" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[1685].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(1685)}  fill-rule="evenodd" d="M2345.4,1097.27 L2344.88,1113.09 L2366.22,1113.64 L2366.68,1097.83 L2345.4,1097.27" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[1686].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(1686)}  fill-rule="evenodd" d="M2417.29,1071.77 L2417.83,1055.25 L2417.89,1054.68 L2418.01,1053.85 L2418.08,1053.49 L2418.2,1053.05 L2418.4,1052.33 L2418.78,1051.38 L2419.01,1050.86 L2419.23,1050.42 L2419.66,1049.71 L2420.04,1049.13 L2420.36,1048.7 L2420.81,1048.15 L2421.45,1047.46 L2421.98,1046.96 L2422.68,1046.36 L2423.31,1045.93 L2424.03,1045.45 L2424.6,1045.12 L2425.2,1044.8 L2425.95,1044.48 L2426.39,1044.3 L2426.94,1044.08 L2427.25,1043.99 L2427.62,1043.87 L2428.07,1043.75 L2428.79,1043.57 L2429.4,1043.47 L2429.83,1043.4 L2435.91,1068.13 L2417.29,1071.77" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[1687].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(1687)}  fill-rule="evenodd" d="M2417.29,1071.77 L2416.95,1082.28 L2416.93,1082.92 L2416.94,1083.54 L2416.97,1083.9 L2417.01,1084.39 L2417.08,1084.88 L2417.24,1085.63 L2417.47,1086.46 L2417.72,1087.17 L2417.9,1087.6 L2418.32,1088.48 L2418.65,1089.05 L2419.09,1089.72 L2419.64,1090.45 L2420.17,1091.05 L2420.17,1091.05 L2420.35,1091.26 L2420.75,1091.65 L2421.12,1091.99 L2421.45,1092.27 L2421.82,1092.57 L2422.21,1092.86 L2422.57,1093.11 L2423.06,1093.43 L2423.56,1093.73 L2424.02,1093.97 L2424.67,1094.29 L2425.39,1094.59 L2426.02,1094.82 L2426.68,1095.04 L2427.34,1095.21 L2428,1095.36 L2428.29,1095.42 L2428.76,1095.5 L2429.28,1095.57 L2429.5,1095.59 L2429.81,1095.62 L2430.19,1095.65 L2430.75,1095.67 L2431.27,1095.68 L2431.79,1095.66 L2425.5,1070.17 L2417.29,1071.77" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[1688].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(1688)}  fill-rule="evenodd" d="M2425.5,1070.17 L2435.91,1068.13 L2442.36,1094.3 L2431.78,1095.66 L2425.5,1070.17" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[1689].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(1689)}  fill-rule="evenodd" d="M2429.82,1043.39 L2440.22,1041.36 L2446.32,1066.09 L2435.91,1068.13 L2429.82,1043.39" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[1690].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(1690)}  fill-rule="evenodd" d="M2435.91,1068.13 L2446.31,1066.09 L2452.93,1092.94 L2442.36,1094.29 L2435.91,1068.13" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[1691].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(1691)}  fill-rule="evenodd" d="M2440.23,1041.37 L2450.63,1039.32 L2456.72,1064.06 L2446.32,1066.1 L2440.23,1041.37" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[1692].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(1692)}  fill-rule="evenodd" d="M2446.53,1066.09 L2456.72,1064.06 L2463.5,1091.58 L2452.93,1092.94 L2446.53,1066.09" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[1693].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(1693)}  fill-rule="evenodd" d="M2450.71,1039.31 L2461.05,1037.27 L2467.13,1062.04 L2456.71,1064.07 L2450.71,1039.31" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[1694].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(1694)}  fill-rule="evenodd" d="M2456.73,1064.05 L2467.13,1062.02 L2474.07,1090.22 L2463.5,1091.58 L2456.73,1064.05" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[1695].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(1695)}  fill-rule="evenodd" d="M2461.05,1037.28 L2471.44,1035.25 L2477.53,1059.99 L2467.12,1062.01 L2461.05,1037.28" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[1696].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(1696)}  fill-rule="evenodd" d="M2467.14,1062.01 L2477.53,1059.98 L2484.42,1087.98 L2474.06,1090.22 L2467.14,1062.01" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[1697].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(1697)}  fill-rule="evenodd" d="M2471.44,1035.25 L2481.85,1033.21 L2487.94,1057.95 L2477.47,1059.96 L2471.44,1035.25" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[1698].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(1698)}  fill-rule="evenodd" d="M2347.18,1208.49 L2345.79,1271.77 L2416.81,1273.03 L2418.3,1204.46 L2407.67,1205.27 L2378.88,1207.32 L2347.18,1208.49" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[1699].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(1699)}  fill-rule="evenodd" d="M2345.51,1284.44 L2416.53,1285.7 L2415.14,1348.98 L2344.15,1347.8 L2345.51,1284.44" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[1700].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(1700)}  fill-rule="evenodd" d="M2416.53,1285.69 L2487.54,1286.93 L2486.15,1350.23 L2415.13,1348.99 L2416.53,1285.69" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[1701].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(1701)}  fill-rule="evenodd" d="M2060.2,1042.64 L2108.07,1041.68 L2108.12,1041.84 L2108.16,1041.98 L2108.28,1042.29 L2108.35,1042.54 L2108.56,1043.04 L2108.9,1043.93 L2109.35,1044.89 L2109.76,1045.73 L2110.31,1046.67 L2110.67,1047.27 L2111.93,1049.03 L2113.5,1051.04 L2115.48,1052.95 L2117.89,1054.82 L2121.94,1057.1 L2124.28,1058.14 L2127.46,1059.18 L2130.68,1059.84 L2132.45,1060.08 L2133.31,1060.07 L2131.73,1108.77 L2058.02,1106.43 L2060.2,1042.64" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[1702].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(1702)}  fill-rule="evenodd" d="M2309.87,1097.49 L2309.31,1114.36 L2273.82,1113.24 L2274.37,1096.57 L2309.87,1097.49" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[1703].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(1703)}  fill-rule="evenodd" d="M1622.15,1026.18 L1668.31,1028.77 L1663.75,1094.03 L1638.8,1093.23 L1618.22,1086.08 L1622.15,1026.18" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[1704].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(1704)}  fill-rule="evenodd" d="M2029.16,970.277 L2084.76,975.886 L2074.45,1029.64 L2018.92,1030.71 L2029.16,970.277" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[1705].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(1705)}  fill-rule="evenodd" d="M2251.03,984.049 L2315.87,992.578 L2311.94,1033.07 L2241.78,1031.25 L2251.03,984.049" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[1706].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(1706)}  fill-rule="evenodd" d="M2524.73,985.932 L2535.14,983.89 L2545.27,1007.8 L2530.75,1010.66 L2524.73,985.932" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[1707].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(1707)}  fill-rule="evenodd" d="M2477.52,1059.91 L2487.93,1057.93 L2494.79,1085.74 L2484.42,1088.03 L2477.52,1059.91" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[1708].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(1708)}  fill-rule="evenodd" d="M2481.85,1033.21 L2492.25,1031.18 L2498.35,1055.91 L2487.94,1057.93 L2481.85,1033.21" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[1709].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(1709)}  fill-rule="evenodd" d="M2487.94,1057.93 L2498.33,1055.89 L2505.13,1083.5 L2494.8,1085.74 L2487.94,1057.93" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[1710].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(1710)}  fill-rule="evenodd" d="M2492.25,1031.16 L2502.66,1029.14 L2508.75,1053.9 L2498.35,1055.9 L2492.25,1031.16" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[1711].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(1711)}  fill-rule="evenodd" d="M2498.35,1055.91 L2508.75,1053.89 L2515.5,1081.25 L2505.15,1083.46 L2498.35,1055.91" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[1712].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(1712)}  fill-rule="evenodd" d="M2502.66,1029.14 L2513.06,1027.1 L2519.16,1051.84 L2508.74,1053.89 L2502.66,1029.14" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[1713].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(1713)}  fill-rule="evenodd" d="M2508.75,1053.89 L2519.16,1051.84 L2525.85,1079.01 L2515.48,1081.26 L2508.75,1053.89" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[1714].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(1714)}  fill-rule="evenodd" d="M2513.06,1027.1 L2523.47,1025.07 L2529.56,1049.8 L2519.14,1051.83 L2513.06,1027.1" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[1715].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(1715)}  fill-rule="evenodd" d="M2519.17,1051.82 L2529.56,1049.8 L2536.21,1076.72 L2525.85,1078.99 L2519.17,1051.82" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[1716].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(1716)}  fill-rule="evenodd" d="M2523.47,1025.07 L2533.88,1023.03 L2539.97,1047.76 L2529.57,1049.8 L2523.47,1025.07" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[1717].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(1717)}  fill-rule="evenodd" d="M2529.56,1049.8 L2539.97,1047.76 L2546.57,1074.51 L2536.2,1076.75 L2529.56,1049.8" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[1718].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(1718)}  fill-rule="evenodd" d="M2533.86,1023.05 L2544.3,1020.98 L2550.38,1045.74 L2539.97,1047.76 L2533.86,1023.05" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[1719].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(1719)}  fill-rule="evenodd" d="M2539.97,1047.76 L2550.38,1045.74 L2556.65,1071.38 L2546.54,1074.55 L2539.97,1047.76" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[1720].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(1720)}  fill-rule="evenodd" d="M2544.26,1020.92 L2551.55,1019.59 L2566.44,1042.61 L2550.39,1045.74 L2544.26,1020.92" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[1721].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(1721)}  fill-rule="evenodd" d="M2550.37,1045.72 L2560.8,1043.71 L2566.84,1068.29 L2556.63,1071.43 L2550.37,1045.72" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[1722].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(1722)}  fill-rule="evenodd" d="M2560.8,1043.71 L2566.47,1042.61 L2583.35,1063.2 L2566.86,1068.26 L2560.8,1043.71" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[1723].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(1723)}  fill-rule="evenodd" d="M2418.47,1204.43 L2439.25,1202.19 L2446.69,1201.38 L2450.05,1200.98 L2452.57,1200.63 L2456.47,1200.06 L2460.76,1199.49 L2471.93,1197.96 L2480.51,1196.72 L2489.52,1195.29 L2487.82,1274.3 L2416.81,1273.03 L2418.47,1204.43" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[1724].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(1724)}  fill-rule="evenodd" d="M2489.66,1195.28 L2520.5,1189.65 L2535.15,1186.65 L2558.11,1272.45 L2555.9,1272.83 L2552.08,1273.43 L2550.11,1273.64 L2546.58,1274.1 L2542.22,1274.52 L2539.86,1274.64 L2536.54,1274.86 L2532.64,1274.95 L2527.54,1274.95 L2487.82,1274.29 L2489.66,1195.28" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[1725].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(1725)}  fill-rule="evenodd" d="M2535.15,1186.66 L2554.92,1182.1 L2565.98,1179.57 L2571.6,1178.15 L2579.61,1176.05 L2586.29,1174.38 L2618.7,1239.25 L2617.36,1240.35 L2615.55,1242.45 L2614.12,1244.78 L2613.65,1245.72 L2613.07,1247.03 L2612.62,1248.43 L2612.43,1249.39 L2612.19,1250.49 L2612.12,1251.4 L2612.03,1252.49 L2612.03,1253.59 L2612.05,1254.35 L2612.06,1254.4 L2597.32,1260.26 L2592.72,1262.07 L2589.2,1263.46 L2586.79,1264.43 L2582.12,1266.12 L2578.83,1267.23 L2574.71,1268.54 L2567.68,1270.45 L2564.23,1271.23 L2563.01,1271.49 L2558.08,1272.47 L2535.15,1186.66" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[1726].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(1726)}  fill-rule="evenodd" d="M2344.15,1347.75 L2342.99,1398.44 L2344.29,1399.18 L2345.19,1399.74 L2346.94,1400.9 L2347.98,1401.67 L2349.66,1403.04 L2350.81,1404.15 L2352.78,1406.22 L2354.24,1408.03 L2355.84,1410.38 L2357.32,1413.13 L2358.39,1415.68 L2359.33,1418.65 L2359.86,1421.24 L2360.08,1423.47 L2360.15,1426.61 L2360.12,1427.34 L2412.96,1448.01 L2415.13,1348.98 L2344.15,1347.75" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[1727].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(1727)}  fill-rule="evenodd" d="M2415.13,1348.98 L2486.18,1350.23 L2483.67,1462.85 L2479.7,1462.93 L2474.46,1462.89 L2469.95,1462.69 L2468.89,1462.64 L2465.41,1462.37 L2460.85,1461.9 L2456.45,1461.29 L2455.03,1461.04 L2451.91,1460.53 L2447.59,1459.67 L2443.36,1458.67 L2441.53,1458.19 L2439.54,1457.63 L2434.56,1456.15 L2430.42,1454.76 L2427.63,1453.72 L2425.97,1453.11 L2421.74,1451.46 L2412.95,1448 L2415.13,1348.98" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[1728].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(1728)}  fill-rule="evenodd" d="M2487.54,1286.93 L2532.56,1287.66 L2539.81,1287.42 L2548.44,1286.66 L2561.5,1284.8 L2576.42,1351.8 L2486.18,1350.13 L2487.54,1286.93" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[1729].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(1729)}  fill-rule="evenodd" d="M2486.18,1350.13 L2576.37,1351.75 L2611.07,1421.05 L2530.75,1452.9 L2524.32,1455.42 L2519.93,1456.8 L2514.16,1458.47 L2509.83,1459.47 L2502.44,1460.9 L2498.1,1461.52 L2496.67,1461.76 L2494.48,1462.05 L2492.76,1462.19 L2489.76,1462.43 L2487.28,1462.65 L2486.54,1462.69 L2483.67,1462.85 L2486.18,1350.13" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[1730].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(1730)}  fill-rule="evenodd" d="M2561.5,1284.72 L2569.5,1283.15 L2574.37,1281.96 L2581.61,1279.81 L2588.19,1277.67 L2601.96,1272.28 L2617.79,1265.99 L2620.46,1268.18 L2622.75,1269.51 L2625.23,1270.56 L2627.23,1271.23 L2631.09,1271.9 L2633.42,1271.99 L2635.24,1271.9 L2638.14,1271.52 L2640.67,1270.85 L2642.67,1270.09 L2643.82,1269.51 L2645.58,1268.61 L2646.48,1267.99 L2704.8,1300.87 L2576.41,1351.82 L2561.5,1284.72" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[1731].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(1731)}  fill-rule="evenodd" d="M2576.41,1351.8 L2640.63,1326.32 L2674.82,1395.71 L2611.04,1421.09 L2576.41,1351.8" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[1732].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(1732)}  fill-rule="evenodd" d="M1473.73,1549.84 L1688.03,1554.8 L1694.9,1425.53 L1802.81,1435.06 L1810.82,1554.8 L1935.13,1590.64 L2089.38,1724.3 L2149.25,1718.58 L2173.02,1438.61 L2213.25,1437.88 L2212.99,1415.91 L2291.2,1414.92 L2291.52,1414.15 L2292,1413.08 L2292.58,1411.94 L2293.17,1410.9 L2293.93,1409.69 L2295.17,1407.93 L2297.08,1405.55 L2300.22,1402.54 L2303.08,1400.4 L2305.39,1398.92 L2307.49,1397.83 L2312.02,1192.53 L1692.57,1179.81 L1668.07,1183.14 L1523.02,1226.52 L1502.86,1250.88 L1501.23,1311.03 L1480.14,1320.96 L1473.73,1549.84" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[1733].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(1733)}  fill-rule="evenodd" d="M2149.34,1718.44 L2172.99,1438.44 L2172.99,1438.44 L2291.58,1437.01 L2292.44,1439.02 L2293.96,1441.4 L2295.77,1444.07 L2297.97,1446.64 L2301.49,1449.6 L2304.16,1451.51 L2308.07,1453.51 L2311.89,1455.13 L2313.89,1455.8 L2317.61,1456.75 L2321.42,1457.13 L2323.9,1457.13 L2326.38,1457.23 L2332.1,1456.65 L2336.96,1455.51 L2340.87,1453.98 L2344.68,1451.89 L2349.07,1448.74 L2350.16,1447.57 L2403.41,1468.38 L2412.18,1471.91 L2421.04,1475.34 L2431.72,1478.77 L2441.63,1481.15 L2448.12,1482.58 L2456.6,1483.92 L2466.04,1484.59 L2472.81,1485.06 L2482.15,1485.06 L2489.68,1484.87 L2814.1,1571.05 L2808.38,1578.01 L2689.31,1629.87 L2587.11,1682.88 L2507.41,1697.37 L2387.39,1696.7 L2149.34,1718.44" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[1734].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(1734)}  fill-rule="evenodd" d="M2674.97,1395.4 L2781.22,1353.62 L2780.82,1352.49 L2780.62,1351.22 L2780.45,1349.42 L2780.38,1348.56 L2780.4,1347.66 L2780.46,1346.04 L2780.6,1344.92 L2780.67,1344.39 L2780.76,1343.79 L2704.8,1300.84 L2640.64,1326.34 L2674.97,1395.4" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[1735].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(1735)}  fill-rule="evenodd" d="M2095.75,918.489 L2136.18,924.759 L2138.1,925.273 L2140.04,926.165 L2141.61,927.103 L2142.7,927.951 L2143.57,928.754 L2144.31,929.669 L2145.11,930.674 L2145.62,931.678 L2146.18,932.615 L2146.58,933.843 L2146.87,934.892 L2147.01,936.521 L2146.96,938.507 L2146.38,941.654 L2138.64,981.325 L2084.76,975.891 L2095.75,918.489" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[1736].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(1736)}  fill-rule="evenodd" d="M2084.72,975.706 L2138.65,981.286 L2133.13,1009.58 L2132.67,1009.61 L2131.58,1009.73 L2130.16,1009.93 L2128.09,1010.33 L2127.27,1010.55 L2125.84,1010.97 L2124.31,1011.5 L2122.74,1012.15 L2121.37,1012.8 L2120.29,1013.38 L2119.04,1014.12 L2117.83,1014.92 L2116.54,1015.89 L2115.3,1016.92 L2114.16,1018.01 L2113.18,1019.03 L2111.85,1020.67 L2111.13,1021.66 L2110.35,1022.87 L2110.13,1023.27 L2109.78,1023.88 L2109.49,1024.45 L2109.33,1024.76 L2109.08,1025.32 L2108.77,1026.01 L2108.59,1026.45 L2108.34,1027.14 L2108.19,1027.57 L2107.96,1028.29 L2107.87,1028.58 L2107.79,1028.9 L2107.76,1028.99 L2107.75,1029.03 L2074.42,1029.7 L2084.72,975.706" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[1737].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(1737)}  fill-rule="evenodd" d="M2133.31,1060.06 L2134.26,1060.13 L2135.36,1060.14 L2136.62,1060.13 L2137.48,1060.07 L2138.33,1060.03 L2139.97,1059.81 L2141.32,1059.59 L2142.87,1059.24 L2144.32,1058.87 L2145.87,1058.36 L2147.4,1057.78 L2149.44,1056.84 L2150.56,1056.23 L2152.1,1055.33 L2153.72,1054.19 L2155.25,1052.93 L2156.62,1051.67 L2157.9,1050.29 L2159.16,1048.72 L2160.2,1047.2 L2161.01,1045.82 L2162.16,1043.36 L2162.5,1042.52 L2162.57,1042.25 L2162.67,1041.94 L2162.7,1041.86 L2205.07,1042.96 L2202.84,1111.01 L2131.71,1108.76 L2133.31,1060.06" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[1738].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(1738)}  fill-rule="evenodd" d="M2153.07,981.217 L2147.12,1011.74 L2147.13,1011.75 L2147.15,1011.75 L2147.15,1011.75 L2147.15,1011.75 L2147.16,1011.76 L2147.17,1011.76 L2147.17,1011.76 L2147.18,1011.76 L2147.18,1011.77 L2147.19,1011.77 L2147.19,1011.77 L2147.21,1011.78 L2147.23,1011.78 L2147.24,1011.79 L2147.28,1011.81 L2147.32,1011.82 L2147.34,1011.83 L2147.35,1011.83 L2147.36,1011.84 L2147.37,1011.84 L2147.37,1011.84 L2147.38,1011.85 L2147.38,1011.85 L2147.38,1011.85 L2147.39,1011.85 L2147.4,1011.85 L2147.41,1011.86 L2147.42,1011.86 L2147.42,1011.86 L2147.43,1011.87 L2147.44,1011.87 L2147.44,1011.87 L2147.45,1011.88 L2147.46,1011.88 L2147.48,1011.89 L2147.49,1011.89 L2147.51,1011.9 L2147.53,1011.91 L2148.09,1012.15 L2149.23,1012.69 L2150.05,1013.11 L2150.76,1013.51 L2151.67,1014.04 L2152.63,1014.67 L2153.23,1015.09 L2154.59,1016.13 L2155.6,1016.99 L2156.98,1018.32 L2158.43,1019.97 L2159.28,1021.08 L2159.93,1022.02 L2161.16,1024.1 L2161.83,1025.37 L2162.77,1027.91 L2163.09,1029.11 L2163.12,1029.2 L2194.69,1030.02 L2203.91,987.908 L2153.07,981.217" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[1739].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(1739)}  fill-rule="evenodd" d="M2153.07,981.217 L2160.92,940.889 L2161.31,939.584 L2161.73,938.696 L2162.3,937.625 L2162.93,936.638 L2163.85,935.533 L2164.64,934.746 L2165.66,933.926 L2166.87,933.089 L2168.19,932.386 L2169.66,931.783 L2171.02,931.348 L2172.96,931.013 L2174.75,930.913 L2176.19,930.997 L2177.18,931.08 L2215.05,936.966 L2203.91,987.907 L2153.07,981.217" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[1740].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(1740)}  fill-rule="evenodd" d="M2215.05,936.965 L2258.92,943.763 L2251.03,984.048 L2206.05,978.128 L2215.05,936.965" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[1741].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(1741)}  fill-rule="evenodd" d="M2206.05,978.127 L2251.03,984.048 L2241.78,1031.24 L2194.69,1030.02 L2206.05,978.127" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[1742].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(1742)}  fill-rule="evenodd" d="M2205.07,1042.96 L2240.56,1043.88 L2238.33,1112.13 L2202.84,1111.01 L2205.07,1042.96" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[1743].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(1743)}  fill-rule="evenodd" d="M2240.57,1043.88 L2276.06,1044.8 L2273.82,1113.24 L2238.33,1112.13 L2240.57,1043.88" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[1744].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(1744)}  fill-rule="evenodd" d="M2276.06,1044.8 L2311.56,1045.73 L2311.11,1059.52 L2275.61,1058.6 L2276.06,1044.8" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[1745].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(1745)}  fill-rule="evenodd" d="M2311.11,1059.52 L2310.7,1072.18 L2275.2,1071.26 L2275.61,1058.6 L2311.11,1059.52" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[1746].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(1746)}  fill-rule="evenodd" d="M2310.7,1072.18 L2310.28,1084.84 L2274.78,1083.91 L2275.2,1071.26 L2310.7,1072.18" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[1747].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(1747)}  fill-rule="evenodd" d="M2310.28,1084.84 L2309.87,1097.49 L2274.37,1096.57 L2274.78,1083.91 L2310.28,1084.84" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[1748].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(1748)}  fill-rule="evenodd" d="M2171.16,888.4 L2170.18,893.407 L2169.97,894.512 L2169.85,895.19 L2169.78,895.881 L2169.74,896.646 L2169.75,897.111 L2169.78,897.801 L2169.88,898.649 L2170.01,899.239 L2170.2,900.005 L2170.35,900.507 L2170.53,900.978 L2170.85,901.731 L2171.21,902.465 L2171.44,902.823 L2171.7,903.225 L2172.15,903.884 L2172.66,904.499 L2173.06,904.963 L2173.6,905.497 L2174.07,905.911 L2174.6,906.357 L2174.96,906.614 L2175.71,907.123 L2176.35,907.518 L2177.03,907.87 L2177.67,908.171 L2178.36,908.447 L2178.98,908.673 L2179.78,908.912 L2180.72,909.138 L2181.41,909.263 L2182.9,909.489 L2194.13,911.234 L2197.77,892.522 L2171.16,888.4" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[1749].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(1749)}  fill-rule="evenodd" d="M2197.77,892.522 L2211.77,894.69 L2208.12,913.402 L2194.13,911.235 L2197.77,892.522" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[1750].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(1750)}  fill-rule="evenodd" d="M2211.77,894.689 L2225.76,896.853 L2222.12,915.568 L2208.12,913.402 L2211.77,894.689" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[1751].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(1751)}  fill-rule="evenodd" d="M2225.76,896.857 L2239.76,899.024 L2236.11,917.734 L2222.12,915.569 L2225.76,896.857" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[1752].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(1752)}  fill-rule="evenodd" d="M2239.76,899.034 L2253.75,901.192 L2250.11,919.904 L2236.11,917.737 L2239.76,899.034" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[1753].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(1753)}  fill-rule="evenodd" d="M2253.75,901.191 L2267.75,903.359 L2264.1,922.071 L2250.1,919.907 L2253.75,901.191" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[1754].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(1754)}  fill-rule="evenodd" d="M2267.75,903.359 L2281.74,905.526 L2278.1,924.237 L2264.1,922.07 L2267.75,903.359" vector-effect="none"/>
                </Tooltip>
                          );
                        })}

        {[1755].map((tooltipValue) => {
          const objetoEncontrado = lotes.find(item => item.mapa2 == tooltipValue);
          return (
            <Tooltip title={objetoEncontrado ? "Manzana "+objetoEncontrado.manzana+" Parcela "+objetoEncontrado.parcela : 'Sin datos'}>
            <path onClick={() => handleOpenDialog(1755)}  fill-rule="evenodd" d="M2281.75,905.526 L2295.74,907.693 L2292.09,926.406 L2278.09,924.24 L2281.75,905.526" vector-effect="none"/>
                </Tooltip>
                          );
                        })}
  </g>

    
          
        
  <g stroke="#000000" stroke-linejoin="bevel" fill="none" stroke-linecap="square" font-family="MS Shell Dlg 2" font-weight="400" stroke-opacity="1" font-size="32.5" transform="matrix(11.8081,0,0,11.8081,0,0)" font-style="normal" stroke-width="1"/>
  <g stroke="#000000" stroke-linejoin="bevel" fill="none" stroke-linecap="square" font-family="MS Shell Dlg 2" font-weight="400" stroke-opacity="1" font-size="32.5" transform="matrix(11.8081,0,0,11.8081,0,0)" font-style="normal" stroke-width="1"/>
  <g stroke="#000000" stroke-linejoin="bevel" fill="none" stroke-linecap="square" font-family="MS Shell Dlg 2" font-weight="400" stroke-opacity="1" font-size="32.5" transform="matrix(11.8081,0,0,11.8081,0,0)" font-style="normal" stroke-width="1"/>
  <g stroke="#000000" stroke-linejoin="bevel" fill="none" stroke-linecap="square" font-family="MS Shell Dlg 2" font-weight="400" stroke-opacity="1" font-size="32.5" transform="matrix(1,0,0,1,0,0)" font-style="normal" stroke-width="1"/>
  <g stroke="#000000" stroke-linejoin="bevel" fill="none" stroke-linecap="square" font-family="MS Shell Dlg 2" font-weight="400" stroke-opacity="1" font-size="32.5" transform="matrix(11.8081,0,0,11.8081,0,0)" font-style="normal" stroke-width="1"/>
  <g stroke="#000000" stroke-linejoin="bevel" fill="none" stroke-linecap="square" font-family="MS Shell Dlg 2" font-weight="400" stroke-opacity="1" font-size="32.5" transform="matrix(11.8081,0,0,11.8081,0,0)" font-style="normal" stroke-width="1"/>
  <g stroke="#000000" stroke-linejoin="bevel" fill="none" stroke-linecap="square" font-family="MS Shell Dlg 2" font-weight="400" stroke-opacity="1" font-size="32.5" transform="matrix(11.8081,0,0,11.8081,0,0)" font-style="normal" stroke-width="1"/>
  <g stroke="#000000" stroke-linejoin="bevel" fill="none" stroke-linecap="square" font-family="MS Shell Dlg 2" font-weight="400" stroke-opacity="1" font-size="32.5" transform="matrix(11.8081,0,0,11.8081,0,0)" font-style="normal" stroke-width="1"/>
  <g stroke="#000000" stroke-linejoin="bevel" fill="none" stroke-linecap="square" font-family="MS Shell Dlg 2" font-weight="400" stroke-opacity="1" font-size="32.5" transform="matrix(1,0,0,1,0,0)" font-style="normal" stroke-width="1"/>
 </g>
</svg>


                </> : <></>}




              </TransformComponent>
            </React.Fragment>
          )}
        </TransformWrapper>


      </div>
      <DialogComponent ref={dialogRef} title="Modificar Lote"
      info={info}
      mapa={'PIT'}
       getClients = {async () => {

    const lotess = await servicioLotes.lista()
    console.log(lotess[0])

    setLotes(lotess[0])

  }}>
      
      </DialogComponent>
    </>


  )
}

export default Arg;