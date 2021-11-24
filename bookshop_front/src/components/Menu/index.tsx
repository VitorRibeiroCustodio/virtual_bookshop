import React from 'react';
import styled from 'styled-components';

import { BOOKS_LIST, CART, CHECKOUT } from '../../App';

const MenuWrapper = styled.div`
  width: 100%;
  height: 40px;
  background-color: #696969;
  border-radius: 2px;
  display: flex;
  padding: 20px;
  justify-content: space-evenly;
`;

const ItemWrapper = styled.div`
  color: white;

  &:hover {
    cursor: pointer;
  }
`; 

const Menu: any = ({ setSelectedItem, amountOfBooksOnCart }: any) => {
  return (
    <MenuWrapper>
      <ItemWrapper onClick={() => setSelectedItem(BOOKS_LIST)}>
       Lista de Livros
      </ItemWrapper>
      <ItemWrapper onClick={() => setSelectedItem(CART)}>
        Carrinho - {amountOfBooksOnCart > 0 ? amountOfBooksOnCart : 0}
      </ItemWrapper>
      <ItemWrapper onClick={() => setSelectedItem(CHECKOUT)}>
        Checkout
      </ItemWrapper>
    </MenuWrapper>
  );
}

export default Menu;
