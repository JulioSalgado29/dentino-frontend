import React from 'react';

const Paginacion = ({ postsPerPage, totalPosts, paginate }) => {
    const pageNumbers = [];
  
    for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
      pageNumbers.push(i);
    }
    return (
        <nav>
          <ul className='pagination'>
            {pageNumbers.map(number => (
              <li key={number} className='page-item'>
                {/* eslint-disable */}
                <a onClick={() => paginate(number)} className='page-link' style={{cursor:"pointer"}}>
                  {number}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      );
    };
export default Paginacion;