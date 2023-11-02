import React, { useState } from 'react';
import styled from 'styled-components';

import product1Image from './images/bluatlas.jpg';
import product2Image from './images/oscar.jpg';
import product3Image from './images/engage.jpg';
import product4Image from './images/beardo.jpg';
import product5Image from './images/parkavenue.jpg';
import product6Image from './images/lavishmusk.jpg';
import product7Image from './images/secret.jpg';
import product8Image from './images/oasis.jpg';
import product9Image from './images/poison.jpg';
import product10Image from './images/enchanteur.jpg';
import product11Image from './images/wildstone.jpg';
import product12Image from './images/bella.jpg';
import product13Image from './images/armaf.jpg';
import product14Image from './images/parkavenue.jpg';
import product15Image from './images/oasis.jpg';
import product16Image from './images/carolina.jpg';
import product17Image from './images/tantrum.jpg';
import product18Image from './images/calvin.jpg';


const productsData = [
  // Sample product data (add more products as needed)
  {
    id: 1,
	category:'Men',
    title: 'Blu Atlas Atlantis',
    description: 'A wearable version of Bali jungle, Atlantis is ripe with adventure and passion.',
    flavor: 'Lemon',
    price: 516,
    image: product1Image,
  },
  {
    id: 2,
	category:'Men/Women',
    title: 'Oscar Forever Paris',
    description: 'Top notes of sichuan pepper & Calabrian bergamot.',
    flavor: 'Aqua',
    price: 135,
    image: product2Image,
  },
  {
    id: 3,
	category:'Men',
    title: 'Engage Moments Luxury',
    description: 'A modern, long lasting and luxury fragrance of contrasts that tries to capture the true essence of masculinity in a bottle-authenticity. ',
    flavor: 'Sandal Wood',
    price: 300,
    image: product3Image,
  },
  {
    id: 4,
	category:'Men',
    title: 'Beardo Whisky Smoke',
    description: 'This artisanal perfume features a unique blend of fragrance from Whiskey along with exotic Oud wood, Tobacco, Cinnamon and indulgent Vanilla.',
    flavor: 'Wood,Whisky',
    price: 420,
    image: product4Image,
  },
  {
    id: 5,
	category:'Men',
    title: 'Park Avenue Voyage',
    description: 'This Park Avenue Signature Collection Voyage Perfume Spray is a luxurious and sophisticated scent for the modern woman. It is a unique blend of musky and woody notes that make it ideal for any occasion.',
    flavor: 'Citrus',
    price: 157,
    image: product5Image,
  },
  {
    id: 6,
	category:'Women',
    title: 'Lavish Musk',
    description: 'The Scent Is Highly Long-Lasting, Ensuring That You Can Stay On The Go All Day Long, While Also Boosting Your Confidence And Leaving A Lasting Impression On Those Around You.',
    flavor: 'Floral',
    price: 599,
    image: product6Image,
  },
  {
    id: 7,
	category:'Women',
    title: 'Secret Temptation',
    description: 'Indulge in a pocket-sized burst of happiness with this collection of perfume roll-ons, each one ready to sprinkle a little cheer and charm into your day.',
    flavor: 'Lavendar',
    price: 219,
    image: product7Image,
  },
  
  {
    id: 8,
	category:'Men/Women',
    title: 'Oasis Unisex Perfume',
    description: 'Oasis is a fresh and floral unisex perfume that is perfect for anyone looking for a light and airy scent.',
    flavor: 'Raspberry Bloom ',
    price: 900,
    image: product8Image,
  },
  {
    id: 9,
	category:'Women',
    title: 'Christian Dior Poison',
    description: 'Poison is a sultry elixir. Some fragrances are born legendary. Provocative and mysterious since its inception, Poison is the ultimate fragrant weapon by Dior for heightened seduction.',
    flavor: 'Rose',
    price: 550,
    image: product9Image,
  },
  {
    id: 10,
	category:'Women',
    title: 'Enchanteur Alluring Pocket Perfume',
    description: 'The perfume features a sensual and sweet scent that comes from the Passionfruit flowers, which are blended with other floral fragrances.',
    flavor: 'Lavendar',
    price: 240,
    image: product10Image,
  },
  {
    id: 11,
	category:'Men',
    title: 'Wild Stone',
    description: 'Wild Stone offers grooming essentials to cater to the different needs of a modern Indian man.',
    flavor: 'Basil',
    price: 269,
    image: product11Image,
  },
  {
    id: 12,
	category:'Men',
    title: 'Bella Vita Luxury CEO',
    description: 'Refreshingly daring yet long-lasting with top hints of lemon and sugar, lavender at its heart and vetiver and moss at its base. This perfume honours your debonair and charismatic personality, allowing you to be true to yourself, with the CEO touch added to it.',
    flavor: 'Agarwood',
    price: 449,
    image: product12Image,
  },
  {
    id: 13,
	category:'Men',
    title: 'Armaf Club De Nuit Intense',
    description: 'Club de Nuit Intense by Armaf is a Woody Spicy fragrance for men. Top notes are lemon, black currant and apple; middle notes are rose, jasmine and birch; base notes are vanilla, ambergris, musk and patchouli.',
    flavor: 'Orange',
    price: 3325,
    image: product13Image,
  },
  {
    id: 14,
	category:'Men',
    title: 'Park Avenue Voyage',
    description: 'This Park Avenue Signature Collection Voyage Perfume Spray is a luxurious and sophisticated scent for the modern woman. It is a unique blend of musky and woody notes that make it ideal for any occasion.',
    flavor: 'Basil',
    price: 157,
    image: product14Image,
  },
  {
    id: 15,
	category:'Men/Women',
    title: 'Oasis Unisex Perfume',
    description: 'Oasis is a fresh and floral unisex perfume that is perfect for anyone looking for a light and airy scent.',
    flavor: 'Turkey Red Rose ',
    price: 900,
    image: product15Image,
  },
  {
    id: 16,
	category:'Women',
    title: 'Carolina Herrera',
    description: 'Carolina Herrera is a luxury fashion and beauty brand renowned for its fashion-forward collections and world-class couture atelier.',
    flavor: 'Grape',
    price: 6200,
    image: product16Image,
  },
  {
    id: 17,
	category:'Men/Women',
    title: 'Tantrum Smells',
    description: ' Fall and winter scents then give way to crisp bergamot and mint notes. Spritz some on before work, a date, or any time you’re a human out in the world. It’s… pretty versatile.',
    flavor: 'floral and woody',
    price: 700,
    image: product17Image,
  },
  {
    id: 18,
	category:'Men/Women',
    title: 'Calvin Klein CV One',
    description: 'CK One made its debut in the mid-’90s and has been gracing the world’s collective nose with its genderless glory ever since. ',
    flavor: 'Black Tea',
    price: 500,
    image: product18Image,
  },
];
const Product = styled.div`
  border: 1px solid #ccc;
  padding: 10px;
  margin: 10px;
  width: 30%;
  box-sizing: border-box;
  text-align: center;
  transition: transform 0.2s ease;

  &:hover {
    transform: scale(1.05);
    transition: transform 0.2s ease;
  }
  `;
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;



function App() {
  const [products, setProducts] = useState(productsData);
  const [categoryFilter, setCategoryFilter] = useState('');
  const [titleFilter, setTitleFilter] = useState('');
  const [flavorFilter, setFlavorFilter] = useState('');
  const [sortType, setSortType] = useState('option1');
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 9; // Display all products on one page


  const filteredProducts = products.filter((product) => {
    const categoryMatch = product.category.toLowerCase().includes(categoryFilter.toLowerCase());
    const titleMatch = product.title.toLowerCase().includes(titleFilter.toLowerCase());
    const flavorMatch = product.flavor.toLowerCase().includes(flavorFilter.toLowerCase());

    return categoryMatch && titleMatch && flavorMatch;
  });


  const sortedProducts = [...filteredProducts].sort((a, b) => {
    if (sortType === 'price') {
      return a.price - b.price;
    } else if (sortType === 'flavor') {
      return a.flavor.localeCompare(b.flavor);
    }
    // Add more sorting options if needed
    return 0;
  });

  const currentProducts = sortedProducts.slice(
    (currentPage - 1) * productsPerPage,
    currentPage * productsPerPage
  );

  const totalPages = Math.ceil(filteredProducts.length / productsPerPage);
	const handleCategoryFilterChange = (e) => {
    setCategoryFilter(e.target.value);
    setCurrentPage(1);
  };

  const handleTitleFilterChange = (e) => {
    setTitleFilter(e.target.value);
    setCurrentPage(1);
  };

  const handleFlavorFilterChange = (e) => {
    setFlavorFilter(e.target.value);
    setCurrentPage(1);
  };
  

  const handleSortChange = (e) => {
    setSortType(e.target.value);
  };

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <Container>
      <h1>Perfumes</h1>
      <div>
        <input
          type="text"
          placeholder="Filter by category"
          value={categoryFilter}
          onChange={handleCategoryFilterChange}
        />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
		<input
          type="text"
          placeholder="Filter by title"
          value={titleFilter}
          onChange={handleTitleFilterChange}
        />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <input
          type="text"
          placeholder="Filter by flavor"
          value={flavorFilter}
          onChange={handleFlavorFilterChange}
        />
      </div><br></br>
      <select value={sortType} onChange={handleSortChange}>
	  <option value="option1">Sort</option>
        <option value="price">Sort by Price</option>
        
      </select>
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        {currentProducts.map((product) => (
          <Product key={product.id} className="animate__animated animate__fadeIn">
            <img
              src={product.image}
              alt={product.title}
              width="100"
              height="100"
            />
            <h3>{product.title}</h3>
            <p>{product.description}</p>
            <p>${product.price}</p>
           <p>Category: {product.category}</p>
            <p>Flavor: {product.flavor}</p>
          </Product>
        ))}
      </div>
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
      />
    </Container>
  );
}

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const pageNumbers = [];

  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }

  return (
    <div>
      {pageNumbers.map((number) => (
        <button
          key={number}
          onClick={() => onPageChange(number)}
          style={{ fontWeight: currentPage === number ? 'bold' : 'normal' }}
        >
          {number}
        </button>
      ))}
    </div>
  );
}

export default App;