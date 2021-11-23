import React from 'react';
import styled from 'styled-components';

const MenuWrapper = styled.div`
  width: 100%;
  height: 40px;
  background-color: #696969;
  border-radius: 2px;
  display: flex;
  padding: 20px;
  justify-content: space-evenly;
`;

function Menu() {
  return (
    <MenuWrapper>
      <div>
       Lista de Livros
      </div>
      <div>
        Carrinho
      </div>
      <div>
        Checkout
      </div>
    </MenuWrapper>
  );
}

export default Menu;
