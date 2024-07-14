import React from 'react';
import './WomensShoes.css'

const products = [
  {description: 'Description 1', price: 'Ksh.1,000', img: 'https://i8.amplience.net/s/scvl/154393_335046_SET/1?fmt=auto'},
  {description: 'Description 2', price: 'Ksh.1,000', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQf7BrgQ-HPeNv26zNmfB9v34PaB0g4Y7uuBVnsXx0WVbfPWF7BmgFouDdktSXyy7azEFA&usqp=CAU'},
  {description: 'Description 3', price: 'Ksh.1,000', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRn3S-tgMnt9ItjrwElN35dpTfybIU4oiDWqg&s'},
  {description: 'Description 4', price: 'Ksh.1,000', img: 'https://alicemay.ie/wp-content/uploads/2023/05/lena-2-min.jpg'},
  {description: 'Description 5', price: 'Ksh.1,000', img: 'https://m.media-amazon.com/images/I/61A0SSsnA5L._AC_UY900_.jpg'},
  {description: 'Description 6', price: 'Ksh.1,000', img: 'https://m.media-amazon.com/images/I/61WCQGhSJYL._AC_UY1000_.jpg'},
  {description: 'Description 7', price: 'Ksh.1,000', img: 'https://m.media-amazon.com/images/I/61Eh7TrbSgL._AC_SL1500_.jpg'},
  {description: 'Description 8', price: 'Ksh.1,000', img: 'https://m.media-amazon.com/images/I/611hWif+jBL._AC_UY1000_.jpg'},
  {description: 'Description 9', price: 'Ksh.1,000', img: 'https://www.purebrandsuk.com/images/crocs-jayna-w-black-p3-11851-001-womens-clogs-shoes-p865-1129_image.jpg'},
  {description: 'Description 10', price: 'Ksh.1,000', img: 'https://cdn.shopify.com/s/files/1/0525/4863/2739/products/06808701_38_1024x1024.jpg'},
  {description: 'Description 11', price: 'Ksh.1,000', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3XCQqtv0ftHyZUPP4TYypNu7fTk5LwkZiSA&s'},
  {description: 'Description 12', price: 'Ksh.1,000', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR54YCXU-UkYNJg3wfa_FOm2CdsCK8YIxIURLshMaEbf9qJUQrScyq3wJJU9VegBr7Z-gI&usqp=CAU'},
  {description: 'Description 13', price: 'Ksh.1,000', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTx8VbeU_I8ZZC3P0iDus2GlMSS32hQjW6h6Oacadq2jbW9TUQWW4id2zCuMWigDmEYnw&usqp=CAU'},
  {description: 'Description 14', price: 'Ksh.1,000', img: 'https://i5.walmartimages.com/asr/a755e4b7-d84e-47a7-9515-ae4827397d32.ea73b3e5875f6188d605f6af0786fe07.jpeg'},
  {description: 'Description 15', price: 'Ksh.1,000', img: 'https://m.media-amazon.com/images/I/616kUcpbK8L._AC_UY1000_.jpg'},
  {description: 'Description 16', price: 'Ksh.1,000', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjRpfEiPiXVVaCLN4FvrC1hL0OklvKrmMGfCjRSyle7pZgBHQ_rXzFjCEaKe063cfnHKU&usqp=CAU'},
  {description: 'Description 17', price: 'Ksh.1,000', img: 'https://aldoshoes.co.uk/cdn/shop/t/1/assets/vralg_nudeslider.jpg?v=69125343684895158231676970968'},
  {description: 'Description 18', price: 'Ksh.1,000', img: 'https://www.travelandleisure.com/thmb/9Dzlyqe3ue0Cfdgi0_9R-XgJv6g=/fit-in/1500x1000/filters:no_upscale():max_bytes(150000):strip_icc()/DREAM-PAIRS-Womens-Chunk-Low-Heel-Pump-Sandals-eaaface4df364c6fa29983f644d8e28d.jpg'},
  {description: 'Description 19', price: 'Ksh.1,000', img: 'https://www.stevemadden.ca/cdn/shop/files/STEVEMADDEN_SHOES_AILENE_BLACK-LEATHER.jpg?v=1702327896'},
  {description: 'Description 20', price: 'Ksh.1,000', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTZ0TWwEl3qsEoNrYQzlM2xexhU1PqHi3B0A&s'},
  {description: 'Description 21', price: 'Ksh.1,000', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTndKoQW07g1lHVGS3AGMdYD7QyUYh50mfwb3GRu--ba8RP8dKbHB9cQkl9O6LguZLxiRM&usqp=CAU'}
];

const WomensShoes = () => {
  return (
    <div className="collection-container">
      {products.map((product, index) => (
        <div className="card" key={index}>
          <div className="card-img">
            {product.img ? <img src={product.img} alt={`Product ${index + 1}`} /> : <div>No Image Available</div>}
          </div>
          <div className="card-info">
            <p className="text-title">{`Product ${index + 1}`}</p>
            <p className="text-body">{product.description}</p>
          </div>
          <div className="card-footer">
            <span className="text-title">{product.price}</span>
            <div className="card-button">
              <svg className="svg-icon" viewBox="0 0 20 20">
                <path d="M17.72,5.011H8.026c-0.271,0-0.49,0.219-0.49,0.489c0,0.271,0.219,0.489,0.49,0.489h8.962l-1.979,4.773H6.763L4.935,5.343C4.926,5.316,4.897,5.309,4.884,5.286c-0.011-0.024,0-0.051-0.017-0.074C4.833,5.166,4.025,4.081,2.33,3.908C2.068,3.883,1.822,4.075,1.795,4.344C1.767,4.612,1.962,4.853,2.231,4.88c1.143,0.118,1.703,0.738,1.808,0.866l1.91,5.661c0.066,0.199,0.252,0.333,0.463,0.333h8.924c0.116,0,0.22-0.053,0.308-0.128c0.027-0.023,0.042-0.048,0.063-0.076c0.026-0.034,0.063-0.058,0.08-0.099l2.384-5.75c0.062-0.151,0.046-0.323-0.045-0.458C18.036,5.092,17.883,5.011,17.72,5.011z"></path>
                <path d="M8.251,12.386c-1.023,0-1.856,0.834-1.856,1.856s0.833,1.853,1.856,1.853c1.021,0,1.853-0.83,1.853-1.853S9.273,12.386,8.251,12.386z M8.251,15.116c-0.484,0-0.877-0.393-0.877-0.874c0-0.484,0.394-0.878,0.877-0.878c0.482,0,0.875,0.394,0.875,0.878C9.126,14.724,8.733,15.116,8.251,15.116z"></path>
                <path d="M13.972,12.386c-1.022,0-1.855,0.834-1.855,1.856s0.833,1.853,1.855,1.853s1.854-0.83,1.854-1.853S14.994,12.386,13.972,12.386z M13.972,15.116c-0.484,0-0.878-0.393-0.878-0.874c0-0.484,0.394-0.878,0.878-0.878c0.482,0,0.875,0.394,0.875,0.878C14.847,14.724,14.454,15.116,13.972,15.116z"></path>
              </svg>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default WomensShoes;
