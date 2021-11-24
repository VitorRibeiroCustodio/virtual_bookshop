import { useState } from 'react';
import styled from 'styled-components';
import Menu from './components/Menu';
import BooksList from './components/BooksList';
import BooksCart from './components/BooksCart';
import PaymentForm from './components/PaymentForm';

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
`;

export const BOOKS_LIST = 'BOOKS_LIST';
export const CART = 'CART';
export const CHECKOUT = 'CHECKOUT';

function App() {
  const [selectedItem, setSelectedItem] = useState(BOOKS_LIST);
  const [booksOnCart, setBooksOnCart] = useState<any>([]);

  const handleAddBoonOnCart = (book: any) => setBooksOnCart([...booksOnCart, book]);

  return (
    <Wrapper>
      <Menu setSelectedItem={setSelectedItem} />
      { selectedItem === BOOKS_LIST && <BooksList handleAddBoonOnCart={handleAddBoonOnCart} /> }
      { selectedItem === CART && <BooksCart booksOnCart={booksOnCart} setBooksOnCart={setBooksOnCart} /> }
      { selectedItem === CHECKOUT && <PaymentForm setBooksOnCart={setBooksOnCart} /> }
    </Wrapper>
  );
}

export default App;
