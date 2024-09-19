import {Button} from '@mui/material'
import {useState} from "react";
function PizzeriaIndex() {
    const [estadoBoton,setEstadoBoton]=useState(false)
const handleClickButton=()=>{
  setEstadoBoton(!estadoBoton)
}
return (
    <div
        style={{
            backgroundImage: 'url(/magui.jpg)',
            backgroundSize: 'cover',
            backgroundPosition: 'center', // Centra la imagen
            backgroundRepeat: 'no-repeat', // Evita que la imagen se repita
            width: '100vw', // Ancho completo de la ventana
            height: '100vh' // Alto completo de la ventana
        }}
    >
        <Button variant="contained" color="secondary" sx={{marginTop:'300px'}} onClick={handleClickButton}>NASHE</Button>
        {estadoBoton && (
            <h1>PUTOOccc</h1>
        )}
    </div>

)
}

export default PizzeriaIndex;
