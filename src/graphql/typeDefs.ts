const { gql } = require("apollo-server");

const typeDefs = gql`
  type Producto {
    id: ID!
    _id: ID!
    createdAt: DateTime!
    updatedAt: DateTime!
    descripcion: String
    parte_2: String
    parte_3: String
    imagen: UploadFile
    no_almacen: Int
    parte_primaria: String
    cod_producto: String
    published_at: DateTime
    ficha(sort: String, limit: Int, start: Int, where: JSON): [UploadFile]
  }

  type ProductosResult {
    productos: [Producto]
    currentPage: Int
    totalPages: Int
  }

  type Query {
    getUsers(search: String, page: Int, limit: Int): UsersResult
  }
`;

export default typeDefs;
