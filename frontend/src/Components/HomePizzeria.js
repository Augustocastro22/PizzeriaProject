import{React,useEffect, useState } from 'react';
import axios from 'axios';

import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Typography,
  CircularProgress,
  Alert
} from '@mui/material';
function HomePizzeria(){
    const [pizzas, setPizzas] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
const fetchPizzas = async () => {
  try {
    const response = await axios.get('http://localhost:8000/Pizzeria/api/pizzas/');
    console.log("Response", response)
    setPizzas(response.data);
    console.log(response.data)
    setLoading(false);
  } catch (err) {
    console.error('Error al obtener las pizzas:', err);
    setError(true);
    setLoading(false);
  }
};

  useEffect(() => {
    fetchPizzas();
  }, []);

  if (loading) {
    return (
      <div style={{ textAlign: 'center', marginTop: '2rem' }}>
        <CircularProgress />
        <Typography>Cargando pizzas...</Typography>
      </div>
    );
  }

  if (error) {
    return (
      <Alert severity="error">Hubo un error al cargar las pizzas.</Alert>
    );
  }

  return (
    <TableContainer component={Paper}>
      <Typography variant="h6" gutterBottom component="div" style={{ padding: '1rem' }}>
        Lista de Pizzas
      </Typography>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell><strong>Nombre</strong></TableCell>
            <TableCell><strong>Precio</strong></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {pizzas.map((pizza) => (
            <TableRow key={pizza.id}>
              <TableCell>{pizza.tipo}</TableCell>
              <TableCell>{pizza.precio}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
        )
}
export default HomePizzeria;