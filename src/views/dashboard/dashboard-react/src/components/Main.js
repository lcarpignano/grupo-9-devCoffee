import Card from "./Card";

export default function Main(props) {
  return (
    <main>
      <section>
        <div className="intro-products">
          <h2>
            Es hora de tomar un break
            <i className="far fa-smile-wink"></i>
          </h2>
        </div>
      </section>

      {props.name.map((card, index) => (
        <Card key={card + index} name={card} />
      ))}
    </main>
  );
}
