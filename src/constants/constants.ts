import { Filter } from "../interfaces";

export const filters: Filter[] = [
  {
    id: 0,
    title: "# Almacén",
    value: "no_almacen",
    icon: "inventory",
  },
  {
    id: 1,
    title: "Código producto",
    value: "cod_producto",
    icon: "confirmation_number",
  },
  { id: 2, title: "Descripción", value: "descripcion", icon: "description" },
  { id: 3, title: "Parte primaria", value: "parte_primaria", icon: "build" },
  { id: 4, title: "Fecha", value: "updatedAt", icon: "schedule" },
];
