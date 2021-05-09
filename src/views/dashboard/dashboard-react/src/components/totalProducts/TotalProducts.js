import Card from "../Card";

export default function TotalProducts(props) {
  return (
    <>
      <Card>
        <h2 className="product-title"> Total de productos </h2>

        <h3>{props.total} variedades</h3>
      </Card>
    </>
  );
}
