import Card from "../Card";

export default function ProductsList({ props }) {
  console.log("Product List PROPS", props);
  return (
    <>
      <Card>
        <h2 className="product-title"> Todos nuestros productos </h2>
        <ul>
          {props &&
            props.map((product, index) => (
              <li key={`${product.name + index}`}>
                {" "}
                <p className="reset-margin-padding"> {product.name} </p>{" "}
              </li>
            ))}
        </ul>
      </Card>
    </>
  );
}
