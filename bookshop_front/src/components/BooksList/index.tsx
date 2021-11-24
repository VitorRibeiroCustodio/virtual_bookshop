import React from 'react';
import styled from 'styled-components';

const ListWrapper = styled.div`
  display: flex;
  padding: 20px;
`;

const CardWrapper = styled.div`
  width: 250px;
  height: 350px;
  border: 1px solid black;
  border-radius: 10px;
  padding: 10px
`;

const ImgWrapper = styled.div`
  border-bottom: 1px solid black;
`;

const InfoWrapper = styled.div`
  height: 130px;
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

const BookButton = styled.button`
 
`;

const imgSrc = 'https://images-na.ssl-images-amazon.com/images/I/71IYhitXqUL.jpg';

function BooksList() {
  const cardRender = () => {
    return (
      <CardWrapper>
        <ImgWrapper>
         <img style={{ objectFit: 'contain', width: '250px', height: '270px' }} src={imgSrc} />
        </ImgWrapper>
      <InfoWrapper>
        <span>R$ 40,00</span>
        <BookButton onClick={() => console.log('clicked me')}>Adicione ao carriho</BookButton>
      </InfoWrapper>
      </CardWrapper>
    );
  }
  return (
    <ListWrapper>
      {cardRender()}
    </ListWrapper>
  );
}

export default BooksList;
