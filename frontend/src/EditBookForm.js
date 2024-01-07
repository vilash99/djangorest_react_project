import React, {useState} from "react";

function EditBookForm({book, onSave}) {
  const [title, setTitle] = useState(book.title);
  const [price, setPrice] = useState(book.price);
  const [rating, setRating] = useState(book.rating);
  const [quantity, setQuantity] = useState(book.quantity);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await onSave(book.id, {title, price, rating, quantity});
    } catch (error) {
      console.log(error.response.data);
    }
  };

  return (
    <React.Fragment>
      <form className="form-field">
        <h2>Edit books</h2>

        <table>
          <tbody>
            <tr>
              <td className="label-column">
                <label htmlFor="title">Title</label>
              </td>
              <td>
                <input type="text" name="title" id="title" value={title} onChange={(e) => setTitle(e.target.value)}/>
              </td>
            </tr>

            <tr>
              <td>
                <label htmlFor="price">Price</label>
              </td>
              <td>
                <input type="text" name="price" id="price" value={price} onChange={(e) => setPrice(e.target.value)}/>
              </td>
            </tr>

            <tr>
              <td>
                <label htmlFor="rating">Rating</label>
              </td>
              <td>
                <input type="text" name="rating" id="rating" value={rating} onChange={(e) => setRating(e.target.value)}/>
              </td>
            </tr>

            <tr>
              <td>
                <label htmlFor="quantity">Quantity</label>
              </td>
              <td>
                <input type="text" name="quantity" id="quantity" value={quantity} onChange={(e) => setQuantity(e.target.value)}/>
              </td>
            </tr>

            <tr>
              <td></td>
              <td>
                <button type="submit" onClick={handleSubmit} className="btn btn-primary">
                  Edit Book
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </form>
    </React.Fragment>
  );
}

export default EditBookForm;