import { useState } from "react";
import "./App.css";

// IMPORTS de MUI
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper
} from "@mui/material";

function App() {

  // ✅ Arreglo con más de 5 elementos (2 menores de edad)
  const personas = [
    { nombre: "Juan", apellido: "Pérez", edad: 25 },
    { nombre: "Ana", apellido: "García", edad: 16 },   // menor
    { nombre: "Luis", apellido: "Martínez", edad: 30 },
    { nombre: "Sofía", apellido: "López", edad: 17 },   // menor
    { nombre: "Carlos", apellido: "Hernández", edad: 22 },
    { nombre: "María", apellido: "Ramírez", edad: 28 }
  ];

  return (
    <div style={{ padding: "20px" }}>
      <h2>Tabla de Personas</h2>

      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Nombre</TableCell>
              <TableCell>Apellido</TableCell>
              <TableCell>Edad</TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {/* ✅ Uso de map dentro del JSX */}
            {personas.map((persona, index) => (
              <TableRow key={index}>
                <TableCell>{persona.nombre}</TableCell>
                <TableCell>{persona.apellido}</TableCell>
                <TableCell>{persona.edad}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}

export default App;
