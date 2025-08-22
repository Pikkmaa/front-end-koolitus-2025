import {Link} from 'react-router-dom'
import Table from 'react-bootstrap/Table';
import productsFromFile from '../../data/products.json'
import { useState } from 'react';

function MaintainProducts() {
    const [products, setProducts] = useState(productsFromFile);

    function remove(index) {
        productsFromFile.splice(index,1); // mitmendat, mitu tükki.
        setProducts(productsFromFile.slice());
        
    }
  return (
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
            {products.map((product, index) =>
            <tr key={product.id}>
                <td>{product.id}.</td>
                <td>{product.title}</td>
                <td>{product.price}</td>
                <td>{product.category}</td>
                <td><img className="maintain-image" src={product.image} alt="" /></td>
                <td>{product.rating.rate} / {product.rating.count}</td>
                <td className="edit-button">
                    <Link to={"/admin/edit-product/" + index}>
                    <img src="/edit.svg" alt="" />
                    </Link>
                </td>
                <td><button onClick={() => remove(index)}>x</button></td>
            </tr>)}
        </tbody>
    </Table>
  );
}

export default MaintainProducts