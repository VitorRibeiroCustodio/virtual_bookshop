import React from 'react';
import styled from 'styled-components';

const ListWrapper = styled.div`
  display: flex;
  padding: 20px;
  flex-wrap: wrap;
`;

const CardWrapper = styled.div`
  width: 250px;
  height: 350px;
  border: 1px solid black;
  border-radius: 10px;
  padding: 10px;
  margin: 10px;
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

const booksList = [
  {
    imgSrc: 'https://images-na.ssl-images-amazon.com/images/I/71IYhitXqUL.jpg',
    price: 40,
    id: 1,
  },
  {
    imgSrc: 'https://images-na.ssl-images-amazon.com/images/I/71IYhitXqUL.jpg',
    price: 20,
    id: 2,
  },
  {
    imgSrc: 'https://images-na.ssl-images-amazon.com/images/I/71IYhitXqUL.jpg',
    price: 25,
    id: 3,
  },
  {
    imgSrc: 'https://images-na.ssl-images-amazon.com/images/I/71IYhitXqUL.jpg',
    price: 30,
    id: 4,
  },
  {
    imgSrc: 'https://images-na.ssl-images-amazon.com/images/I/71IYhitXqUL.jpg',
    price: 70,
    id: 5,
  }
]

const imgSrc = 'https://images-na.ssl-images-amazon.com/images/I/71IYhitXqUL.jpg';

const BooksList: any = (props: any) => {
  const cardRender = (book: any) =>
    (
      <CardWrapper key={book.id}>
        <ImgWrapper>
         <img style={{ objectFit: 'contain', width: '250px', height: '270px' }} src={book.imgSrc} />
        </ImgWrapper>
      <InfoWrapper>
        <span>R$ {book.price}</span>
        <BookButton onClick={() => props.handleAddBoonOnCart(book)}>Adicione ao carriho</BookButton>
      </InfoWrapper>
      </CardWrapper>
    );

  return (
    <ListWrapper>
      {booksList.map(book => cardRender(book))}
    </ListWrapper>
  );
}

export default BooksList;
