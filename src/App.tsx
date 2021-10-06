import React, { useEffect, useState } from "react";
import { domain } from "./config";
import "./App.css";

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
    <div>
      {loading
        ? "...loading"
        : products.map((product) => (
            <div key={product.id}>{product.cod_producto}</div>
          ))}
    </div>
  );
}

export default App;
