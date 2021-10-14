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

export default Product;
