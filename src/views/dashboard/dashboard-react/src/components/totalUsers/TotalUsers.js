import Card from "../Card";

export default function TotalUsers(props) {
  return (
    <>
      <Card>
        <h2 className="product-title"> Total de usuarios </h2>
        <h6 className= "reset-margin-padding">Todos nuestros usuarios <br/> registrados</h6>
        <h3>{props.total}</h3>
      </Card>
    </>
  );
}
