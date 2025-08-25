import {Link} from 'react-router-dom'
import Table from 'react-bootstrap/Table';
import productsFromFile from '../../data/products.json'
import { useState } from 'react';

function MaintainProducts() {
    const [products, setProducts] = useState(productsFromFile);
    const [searchText, setSearchText] = useState("");

    function remove(index) {
        productsFromFile.splice(index,1); // mitmendat, mitu tükki.
        setProducts(productsFromFile.slice());
        
    }

    const displayedProducts = products.filter(product =>
      product.title.toLowerCase().includes(searchText.toLowerCase())
    );
    
  return (
    <div>
      <div style={{ marginBottom: "10px" }}>
        <label>Search by Title: </label>
        <input
          type="text"
          value={searchText}
          onChange={e => setSearchText(e.target.value)}
          placeholder="Search by name..."
        />
      </div>
      <Table striped>
          <thead>
            <tr>
              <th>ID</th>
              <th>Title</th>
              <th>Price</th>
              <th>Category</th>
              <th>Image</th>
              <th>Rating / Count</th>
              <th>Edit</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {displayedProducts.map((product, index) => (
              <tr key={product.id}>
                <td>{product.id}.</td>
                <td>{product.title}</td>
                <td>{product.price}</td>
                <td>{product.category}</td>
                <td>
                  <img className="maintain-image" src={product.image} alt="" />
                </td>
                <td>{product.rating?.rate ?? "-"} / {product.rating?.count ?? "-"}</td>
                <td className="edit-button">
                  <Link to={"/admin/edit-product/" + index}>
                    <img src="/edit.svg" alt="" />
                  </Link>
                </td>
                <td><button onClick={() => remove(index)}>x</button></td>
              </tr>
            ))}
          </tbody>
        </Table>
    </div>
  );
}

export default MaintainProducts