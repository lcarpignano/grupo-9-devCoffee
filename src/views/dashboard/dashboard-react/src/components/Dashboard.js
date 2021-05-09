import Header from "./Header";
import Card from "./Card";
import Footer from "./Footer";

export default function Dashboard() {
  const titles = [
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

      <main>
        <section>
          <div className="intro-products">
            <h2>
              Es hora de tomar un break
              <i className="far fa-smile-wink"></i>
            </h2>
          </div>
        </section>

        {titles.map((card, index) => (
          <Card key={card + index} name={card} />
        ))}
      </main>

      <Footer />
    </body>
  );
}
