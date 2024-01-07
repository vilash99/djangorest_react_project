const Book = ({book, onDelete, onEditBook}) => {
  const {id, title, price, rating, quantity} = book;

  return (
    <div className="book">
      <h3>{title}</h3>
      <p>
        Price: ${price}
        <br />
        Rating: {rating}/5
        <br />
        Quantity: {quantity}
      </p>
      <button onClick={() => onDelete(id)} className="btn btn-danger">
        Delete
      </button>
      &nbsp;
      <button onClick={() => onEditBook(book)} className="btn btn-danger">
        Edit
      </button>
    </div>
  );
};

export default Book;