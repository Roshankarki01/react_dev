import React, { useState } from "react";
import "./table.css";

const List = (pops) => {
    const [value,setvalue] = useState(0);
    const handleIncrement = () => {
        setValue(value + 1);
    };

    const handleDecrement = () => {
        setValue(value - 1);
    };

    const zero = () => {
        setValue(0);
    };

  const products = [
    { id: 1, name: "Laptop", price: 50000, rating: 5 },
    { id: 2, name: "Mobile", price: 30000, rating: 9 },
    { id: 3, name: "Tablet", price: 20000, rating: 6 },
    { id: 4, name: "Smartwatch", price: 15000, rating: 8 },
    { id: 5, name: "Headphones", price: 5000, rating: 7 },
    { id: 6, name: "Camera", price: 45000, rating: 8 },
    { id: 7, name: "Printer", price: 10000, rating: 6 },
    { id: 8, name: "Monitor", price: 20000, rating: 7 },
    { id: 9, name: "Keyboard", price: 2000, rating: 5 },
    { id: 10, name: "Mouse", price: 1500, rating: 6 },
    { id: 11, name: "Speaker", price: 3000, rating: 7 },
    { id: 12, name: "Router", price: 2500, rating: 6 },
    { id: 13, name: "External Hard Drive", price: 8000, rating: 8 },
    { id: 14, name: "USB Flash Drive", price: 1000, rating: 5 },
    { id: 15, name: "Webcam", price: 3500, rating: 7 },
    { id: 16, name: "Microphone", price: 4000, rating: 6 },
    { id: 17, name: "Graphics Card", price: 60000, rating: 9 },
    { id: 18, name: "Motherboard", price: 15000, rating: 8 },
    { id: 19, name: "Power Supply", price: 5000, rating: 7 },
    { id: 20, name: "RAM", price: 8000, rating: 8 },
  ];

  const filteredProducts = products.filter(product => product.rating > 7);

  return (
    <div className="table">
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
            <th>Rating</th>
          </tr>
        </thead>
        <tbody>
          {filteredProducts.map((product) => (
            <tr key={product.id}>
              <td>{product.name}</td>
              <td>{product.price}</td>
              <td>{product.rating}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="thisnasd">
        <h1>{value}</h1>
        <button onClick={handleIncrement}>Increment</button>
            <button onClick={handleDecrement}>Decrement</button>
        <button onClick={zero}>Zero</button>
    <h2>{props.name}</h2>
    <p>{props.age}</p>
</div>
    </div>
    
  );
};

export default List;





// const ProductTable = () => {
//   const [products, setProducts] = useState([
//     { id: 1, name: "Laptop", price: 50000 },
//     { id: 2, name: "Mobile", price: 30000 },
//     { id: 3, name: "Tablet", price: 20000 },
//   ]);
//   const [filter, setFilter] = useState("");
//   const [newProductName, setNewProductName] = useState("");
//   const [newProductPrice, setNewProductPrice] = useState("");

//   const addProduct = () => {
//     const newProduct = { 
//       id: products.length + 1, 
//       name: newProductName, 
//       price: parseFloat(newProductPrice) 
//     };
//     setProducts([...products, newProduct]);
//     setNewProductName("");
//     setNewProductPrice("");
//   };

//   const deleteProduct = (id) => {
//     setProducts(products.filter(product => product.id !== id));
//   };

//   const filteredProducts = products.filter(product => 
//     product.name.toLowerCase().includes(filter.toLowerCase())
//   );

//   return (
//     <div>
//       <input 
//         type="text" 
//         placeholder="Filter products" 
//         value={filter} 
//         onChange={(e) => setFilter(e.target.value)} 
//       />
//       <input 
//         type="text" 
//         placeholder="Product Name" 
//         value={newProductName} 
//         onChange={(e) => setNewProductName(e.target.value)} 
//       />
//       <input 
//         type="number" 
//         placeholder="Product Price" 
//         value={newProductPrice} 
//         onChange={(e) => setNewProductPrice(e.target.value)} 
//       />
//       <button onClick={addProduct}>Add Product</button>
//       <table>
//         <thead>
//           <tr>
//             <th>Name</th>
//             <th>Price</th>
//             <th>Actions</th>
//           </tr>
//         </thead>
//         <tbody>
//           {filteredProducts.map(product => (
//             <tr key={product.id}>
//               <td>{product.name}</td>
//               <td>{product.price}</td>
//               <td>
//                 <button onClick={() => deleteProduct(product.id)}>Delete</button>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default ProductTable;

