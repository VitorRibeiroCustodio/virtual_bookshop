import React from 'react';
import './style.scss';

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
      <div className="card">
        <img src={book.imgSrc} />
        <div className="card-body">
          <h2>{book.price}</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
          <h5 onClick={() => props.handleAddBoonOnCart(book)}>Adicione ao carrinho</h5>
        </div>
      </div>
    );

  return (
    <div className='cards'>
      {booksList.map(book => cardRender(book))}
    </div>
  );
}

export default BooksList;
