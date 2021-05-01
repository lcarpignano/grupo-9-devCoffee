export default function Card(props) {
  console.log(props)
  return (
    <section>
      <div className="product-products container">
        {/* <% products.forEach(coffee => { %> */}
        <article className="product-box">
          <div className="product-box-image">
            <img src="" alt="" />
          </div>
          <div className="product-box-info">
            <i className="fab fa-css3-alt"></i>
            <h2 className="product-title"> {props.name} </h2>
            <p>{/* <%= coffee.description %> */}</p>
            <h3>{/* $<%= Number(coffee.price).toFixed(2) %> */}</h3>
           
          </div>
        </article>
        {/* <% }); %> */}
      </div>
    </section>
  );
}
