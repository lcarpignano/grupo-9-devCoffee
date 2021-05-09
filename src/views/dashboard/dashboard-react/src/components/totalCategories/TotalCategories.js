import Card from "../Card";

export default function TotalCategories(props) {
  return (
    <>
      <Card>
        <h2 className="product-title"> Total de categorias </h2>
        <h6 className= "reset-margin-padding">Todas las categorias de nuestros <br/> productos</h6>
        <h3>{props.total}</h3>
      </Card>
    </>
  );
}
