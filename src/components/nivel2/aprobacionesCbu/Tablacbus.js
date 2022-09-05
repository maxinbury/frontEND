import { useState, useEffect } from "react";
import MUIDataTable from "mui-datatables";
import servicioClientes from '../../../services/clientes'
import serviciousuario1 from '../../../services/usuario1'
import servicioaprobaciones from '../../../services/Aprobaciones'
import { useNavigate } from "react-router-dom";
import EditIcon from "@material-ui/icons/Edit";
import ThumbDownAltIcon from '@mui/icons-material/ThumbDownAlt';
import CheckIcon from '@mui/icons-material/Check';
import BotonRechazo from './Rechazocbu'
//import overbookingData from "./overbooking";
import Button from "@mui/material/Button";
//import ModalVer from "./ModalVer"


const TablaAprobaciones = () => {
    //configuracion de Hooks
    const [pendientes, setPendientes] = useState([]);
    const [act, setAct] = useState(false)
    const navigate = useNavigate();


    

    const getPendientes = async () => {

        const pendientes = await servicioClientes.listacbupendientes({

        })
        setPendientes(pendientes)
    }

    const aprobar = async (id) => {
        console.log(id)
    await servicioaprobaciones.aprobacioncbu(id)
    getPendientes()
    } 

    useEffect(() => {
        getPendientes()
    }, [])

    ///

    async function download(index, rowIndex, data) {
        const filename = (pendientes[index].ubicacion)
      
       
       const link = await serviciousuario1.obtenerurl(filename)

        console.log(link.data)            
        window.open(link.data)
  
     
    }


    function downloadFile(index, rowIndex, data) {

        /* const filename = (products[index].key)
        console.log(filename)
        const link = await axios.get(`http://localhost:4000/usuario1/get-object-url/` + filename)
        console.log(link.data)
        setAct(true) */
        return (
            <>
                
                  <Button
                        onClick={() => download(index)}
                    >Descargar</Button> 
    
    
            </>
        );
    }


    function CutomButtonsRenderer(dataIndex, rowIndex, data, onClick) {
     
     return (
          <>
           
            <BotonRechazo 
             id= {pendientes[dataIndex].id} 
            />
            <CheckIcon style={{ cursor: "pointer" }} 
            onClick={() =>  {aprobar(pendientes[dataIndex].id) 
          }  }
            />
          </>
        )
      }
    // definimos las columnas
    const columns = [
        {
            name: "tipo",
            label: "Tipo",

        },
        {
            name: "cuil_cuit",
            label: "Cuil/cuit",
        },
        {
            name: "ubicacion",
            label: "Descripcion",

        },
        {
            name: "estado",
            label: "Estado",
            actions: { onClick: (event, rowData) => alert(rowData) }
        },
        {
            name: "Descarga",
            options: {
                customBodyRenderLite: (dataIndex, rowIndex) =>
                downloadFile(
                        dataIndex,
                        rowIndex,
                       // overbookingData,
                       // handleEditOpen
                    )
            }
        
        },   
        {
            name: "Acciones",
            options: {
                customBodyRenderLite: (dataIndex, rowIndex) =>
                    CutomButtonsRenderer(
                        dataIndex,
                        rowIndex,
                       // overbookingData,
                       // handleEditOpen
                    )
            }
        
        },   
        
 

    ];

const options = {

    /*    rowsPerPage: 10,
       download: false, // hide csv download option
       onTableInit: this.handleTableInit,
       onTableChange: this.handleTableChange, */
};
// renderiza la data table
return (
    <div>
        <MUIDataTable
            title={"Lista de aprobaciones de CBU"}
            data={pendientes}
            columns={columns}
            actions={[
                {
                    icon: 'save',
                    tooltip: 'Save User',
                    onClick: (event, rowData) => alert("You saved " + rowData.name)
                }
            ]}
            options={options}


        />
    </div>
)
}

export default TablaAprobaciones;