export default function Card(props) {
  console.log(props);
  return (
    <article className="product-box product-box-dashboard">
      
      <div className="product-box-info">
        <i className="fas fa-file-code"></i>
        {props.children}
      </div>
    </article>
  );
}
