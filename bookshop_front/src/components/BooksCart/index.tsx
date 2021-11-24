import React from 'react';
import styled from 'styled-components';

const CartWrapper = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ItemWrapper = styled.div`
  width: 500px;
  border-bottom: 1px solid;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: space-around;
`; 

const BookButton = styled.button`
`;

const BooksCart: any = ({ booksOnCart, setBooksOnCart }: any) => {
  if (booksOnCart.length === 0) return <CartWrapper>Sem itens no carrinho</CartWrapper>
  const totalAmount = booksOnCart.reduce((acc: any, book: any) => acc + book.price, 0);

  return (
    <CartWrapper>
      {booksOnCart.map((book: any) => (
        <ItemWrapper key={book.id}>
          <img style={{ objectFit: 'contain', width: '100px', height: '100px' }} src={book.imgSrc} />
          <span>R$ {book.price}</span>
          <BookButton onClick={() => setBooksOnCart(
            booksOnCart.filter((bookToFilter: any) => bookToFilter.id !== book.id)
          )}>Remover livro</BookButton>
        </ItemWrapper>
      ))}
      <span style={{ marginTop: '10px' }}>Total: R$ {totalAmount}</span>
    </CartWrapper>
  );
}

export default BooksCart;
