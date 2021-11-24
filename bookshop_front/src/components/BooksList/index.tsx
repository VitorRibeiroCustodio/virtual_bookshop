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
    imgSrc: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUvzt8tsxuGxlfwc3--istd3ojm5efsY6ymA&usqp=CAU',
    price: 20,
    id: 2,
  },
  {
    imgSrc: 'https://1.bp.blogspot.com/-NtDTRM_jRc4/YBMYw5PqjAI/AAAAAAABRIw/O62YGPOfPCkZPMDIyp04DXabVDulNQ0HgCNcBGAsYHQ/s2000/stephen-king-billy-summers-novo-livro-2021-lan%25C3%25A7amento.jpg',
    price: 25,
    id: 3,
  },
  {
    imgSrc: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOkx5Yyj8K1jnvoIU64q37UXAQpum7liR0eA&usqp=CAU',
    price: 30,
    id: 4,
  },
  {
    imgSrc: 'https://images-na.ssl-images-amazon.com/images/I/81ibfYk4qmL.jpg',
    price: 70,
    id: 5,
  },
  {
    imgSrc: 'https://images-na.ssl-images-amazon.com/images/I/81PHloIwKnL.jpg',
    price: 30,
    id: 6,
  },
  {
    imgSrc: 'https://a-static.mlcdn.com.br/618x463/livro-harry-potter-e-o-prisioneiro-de-azkaban/magazineluiza/084516600/e84db6c1e761606d95c137e88d226474.jpg',
    price: 30,
    id: 7,
  }
]

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
