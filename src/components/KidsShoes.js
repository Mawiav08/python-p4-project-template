


import React from 'react';
import './KidsShoes.css';

const products = [
  {  description: 'Roller skates', price: 'Ksh.1,000', img: 'https://i.pinimg.com/originals/bd/56/64/bd56642b128b9e74837602cbb856d9d5.jpg' },
  {  description: 'Dress shoes', price: 'Ksh.700', img: 'https://i.pinimg.com/originals/a9/c8/b4/a9c8b4ff79f6b10f6f4bc882db5a54cb.jpg' },
  {  description: 'Trainer shoes', price: 'Ksh.700', img: 'https://i.pinimg.com/originals/95/41/0c/95410cbf8481ae8429c9b2a3b1f8d9f6.jpg' },
  {  description: 'Nike dunks', price: 'Ksh.900', img: 'https://i.pinimg.com/originals/13/c6/76/13c676df5e2105d5f748fd12f456ff7e.jpg' },
  {  description: 'Dress shoes (white)', price: 'Ksh.1200', img: 'https://i.pinimg.com/originals/9c/d4/7f/9cd47f8a4a8f1742786c1c0cc82e6f9e.jpg' },
  {  description: 'Canvas b&w', price: 'Ksh.1400', img: 'https://i.pinimg.com/originals/79/3a/09/793a09e2baefb981c83963467b7df758.jpg' },
  {  description: 'Toddler girl sandals', price: 'Ksh.300', img: 'https://i.pinimg.com/originals/0a/9d/5d/0a9d5dddb60dfd9b8e963b46df8dc0c5.jpg' },
  {  description: 'Roma Sandals', price: 'Ksh.1250', img: 'https://i.pinimg.com/originals/42/75/1d/42751d8b18347d2fc7a0b24b9bff4458.jpg' },
  {  description: 'Jelly sandals', price: 'Ksh.1500', img: 'https://i.pinimg.com/originals/03/9a/1f/039a1ff15b25b4c4b199b44db4a2d8d1.jpg' },
  {  description: 'Winter boots', price: 'Ksh.1500', img: 'https://i.pinimg.com/originals/70/c0/7a/70c07ab91a94f988c43a7322fd810b49.jpg' },
  {  description: 'White crocs', price: 'Ksh.1500', img: 'https://i.pinimg.com/originals/6e/3a/ab/6e3aab2b8b79d5827cb11b8aa7e3dc6e.jpg' },
  {  description: 'Black crocs', price: 'Ksh.1700', img: 'https://i.pinimg.com/originals/89/3c/22/893c229063f255b4f72aa4c779c5e8c0.jpg' },
  {  description: 'Baby sneakers', price: 'Ksh.1500', img: 'https://i.pinimg.com/originals/75/5a/d4/755ad4edab12a4b737d9df92e19c4c83.jpg' },
  {  description: 'Slip on sandals', price: 'Ksh.1500', img: 'https://i.pinimg.com/originals/fd/7d/84/fd7d84b7de8eb153e3b71d790c84cd56.jpg' },
  {  description: 'Vans old skool', price: 'Ksh.1500', img: 'https://i.pinimg.com/originals/fc/1b/5d/fc1b5d4417039e81b1f316d35c3fae4d.jpg' },
  {  description: 'Old navy flipflops', price: 'Ksh.1500', img: 'https://i.pinimg.com/originals/9f/95/17/9f951759021cd46954eb3c1119738f6e.jpg' },
  {  description: 'Girls’ boots', price: 'Ksh.1500', img: 'https://i.pinimg.com/originals/0b/1e/0c/0b1e0caa138d1cf77a7c63622d18db17.jpg' },
  {  description: 'Baby loafers', price: 'Ksh.1500', img: 'https://i.pinimg.com/originals/19/31/0b/19310b1183f92d97047f3c3aa9ae1c5f.jpg' },
  {  description: 'Play shoes', price: 'Ksh.1500', img: 'https://i.pinimg.com/originals/fd/ed/83/fded83c54625a59dbe2657b97d0d9d24.jpg' },
  {  description: 'Hook & loop sandals', price: 'Ksh.1500', img: 'https://i.pinimg.com/originals/70/0c/b7/700cb7028fa0e0da9d30b4d1233f6e96.jpg' },
  {  description: 'Paw patrol sneakers', price: 'Ksh.1500', img: 'https://i.pinimg.com/originals/0f/0b/26/0f0b2682726d4b53bf6c4d2cdd7035d5.jpg' },
];

const KidsShoes = () => {
  return (
    <div className="collection-container">
      {products.map((product, index) => (
        <div className="card" key={index}>
          <div className="card-img">
            <img src={product.img} alt={product.title} />
          </div>
          <div className="card-info">
            <p className="text-title">{product.title}</p>
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

export default KidsShoes;
