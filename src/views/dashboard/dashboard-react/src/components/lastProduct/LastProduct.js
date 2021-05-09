import Card from "../Card";

export default function LastProduct({ props }) {
  return (
    <>
      <Card>
        <h2 className="product-title">Ultimo producto</h2>
        <h3>
          {props.name}: ${props && props.price}
        </h3>
      </Card>
    </>
  );
}
