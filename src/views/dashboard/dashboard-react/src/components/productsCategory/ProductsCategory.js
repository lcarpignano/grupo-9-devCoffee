import Card from "../Card";

export default function ProductsCategory({ props }) {
  return (
    <>
      <Card>
          <h2 className="product-title"> Total de productos por categoria</h2>
          {props.map((element, index) => (
            <>
              <h3 key={`${element.name}${index}`}>
                {element.name} : {element.total}
              </h3>
            </>
          ))}
       </Card>
    </>
  );
}
