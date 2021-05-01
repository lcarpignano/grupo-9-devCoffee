import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";

export default function Dashboard() {
  const cards = [
    "Total Productos",
    "Total Usuarios",
    "Total Categorias",
    "Ultimo Producto",
    "Productos por categoria",
    "Listado de Productos",
  ];

  return (
    <body>
      <Header />
      <Main name={cards}/>
      <Footer />
    </body>
  );
}
