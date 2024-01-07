import React, { useState } from "react";

function BookForm({ onSave }) {
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState(0);
  const [rating, setRating] = useState(0);
  const [quantity, setQuantity] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave({title, price, rating, quantity});
    setTitle('');
    setPrice(0);
    setRating(0);
    setQuantity(0);
  };

  return (
    <React.Fragment>
      <form className="form-field">
        <h2>Add new books</h2>

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
                  Add Book
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </form>
    </React.Fragment>
  );
}

export default BookForm;