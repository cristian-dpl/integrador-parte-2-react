import { Counter } from "./Counter"
export const Card = ({
  id,
  name,
  brand,
  img,
  category,
  shortDesc,
  delivery,
  stock
}) => {
  return (
    <div className="card__container">
      <img src={img} alt="" />
      <div className="cart__data-wrapper">
        <h2>{name} <span>( {brand})</span> </h2>
        <p>{category}</p>
        <p>{shortDesc}</p>
        {delivery}
        <p>{stock}</p>

      </div>
      <div className="card__counter-container">
        <Counter 
          id={id}
          movieData={{
            name,
            brand,
            img,
            category,
          }}
          />
      </div>
    </div>
  )
}
