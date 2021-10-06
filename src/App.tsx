import React, { useEffect, useState } from "react";
import CssBaseline from "@mui/material/CssBaseline";
import { domain } from "./config";
import "./App.css";
import {
  Container,
  Box,
  Stack,
  TextField,
  InputAdornment,
  Select,
  MenuItem,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

interface Product {
  id: string;
  no_almacen: number;
  cod_producto: string;
  descripcion: string;
  parte_primaria?: string;
  parte_2?: string;
  parte_3?: string;
  published_at: string;
  createdAt: string;
  updateAt: string;
}

const filters = [
  { id: 0, title: "# Almacén", value: "no_almacen" },
  { id: 1, title: "Código producto", value: "cod_producto" },
  { id: 2, title: "Descripción", value: "descripcion" },
];

function App() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await fetch(`${domain}/productos`);
        const data = await response.json();
        setProducts(data);
        setLoading(false);
      } catch (error) {
        console.log("error", error);
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  return (
    <>
      <CssBaseline />
      <Box width="100vw" height="100vh" sx={{ bgcolor: "primary.main" }}>
        <Container>
          <Box display="flex" justifyContent="center" pt="10%">
            <Stack direction="row" spacing={2}>
              <TextField
                label="fullWidth"
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <SearchIcon />
                    </InputAdornment>
                  ),
                }}
              />
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={"no_almacen"}
                label="Filtro"
                // onChange={handleChange}
              >
                {filters.map((filter) => (
                  <MenuItem key={filter.id} value={filter.value}>
                    {filter.title}
                  </MenuItem>
                ))}
              </Select>
            </Stack>
          </Box>

          {loading
            ? "...loading"
            : products.map((product) => (
                <div key={product.id}>{product.cod_producto}</div>
              ))}
        </Container>
      </Box>
    </>
  );
}

export default App;
