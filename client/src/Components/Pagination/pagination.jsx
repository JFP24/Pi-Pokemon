// import React, { useState } from "react";

// export const Pagination = ({ pokemonsPerPage, allPokemons, paginado }) => {
//   // const cards = 12;
//   // const [currentPag, setCurrentPag] = useState(0);
//   const pageNumbers = [];
//   for (let i = 1; i <= Math.ceil(allPokemons / pokemonsPerPage); i++) {
//     //math.ceil redondea todos las recetas sobre todas las recetas que tengo por  pagina
//     pageNumbers.push(i);
//   }
//   // const next = () => {
//   //   const totalPoke = allPokemons.length; //20
//   //   const next = currentPag + 1; //1
//   //   const index = next * cards; //12
//   //   if (index > totalPoke) return;
//   //   setPokeCurrent([...allPokemons].splice(index, cards));
//   //   setCurrentPag(next);
//   // };

//   // const prev = () => {
//   //   const prev = currentPag - 1;
//   //   if (prev < 0) return;
//   //   const index = prev * cards;
//   //   setPokeCurrent([...allPokemons].splice(index, cards));
//   //   setCurrentPag(prev);
//   // };

//   // if (Math.ceil(allPokemons / cardPerPage) < currentPage) {
//   //   paginate(1);
//   // }
//   // const pages = [];
//   // for (let i = 1; i <= Math.ceil(allPokemons / cardPerPage); i++) {
//   //   pages.push(i);
//   // }
//   //console.log(pages, " este es el pages");
//   // return (
//   //   <div>
//   //     <ul>
//   //       {pages.length > 1 &&
//   //         pages.map((p, i) =>
//   //           p === currentPage ? (
//   //             <li key={i}>
//   //               <button onClick={() => paginate(p)}>{p}</button>
//   //             </li>
//   //           ) : (
//   //             <li key={i}>
//   //               <button onClick={() => paginate(p)}>{p}</button>
//   //             </li>
//   //           )
//   //         )}
//   //     </ul>
//   //   </div>
//   // );

//   return (
//     // <div>
//     //   <div className="prev-next">
//     //     <button onClick={() => prev()}>Prev</button>
//     //     <label> {currentPag + 1} </label>
//     //     <button onClick={() => next()}>Next</button>
//     //   </div>
//     // </div>
//     <div>
//       <nav>
//         <ul>
//           {/* <button onClick={prev}>Prev</button> */}
//           {pageNumbers &&
//             pageNumbers.map((number) => (
//               <li key={number}>
//                 <a onClick={() => paginado(number)}>{number}</a>
//               </li>
//             ))}
//           {/* <button onClick={next}> Next</button> */}
//         </ul>
//       </nav>
//     </div>
//   );
// };

import React from "react";

export const Pagination = ({
  cardPerPage,
  allPokemons,
  paginate,
  currentPage,
}) => {
  //console.log(paginate);
  //console.log(totalCards, "este es el total cards");
  if (Math.ceil(allPokemons / cardPerPage) < currentPage) {
    paginate(1);
  }
  const pages = [];
  for (let i = 1; i <= Math.ceil(allPokemons / cardPerPage); i++) {
    pages.push(i);
  }
  //console.log(pages, " este es el pages");
  return (
    <div>
      <ul>
        {pages.length > 1 &&
          pages.map((p, i) =>
            p === currentPage ? (
              <li key={i}>
                <button onClick={() => paginate(p)}>{p}</button>
              </li>
            ) : (
              <li key={i}>
                <button onClick={() => paginate(p)}>{p}</button>
              </li>
            )
          )}
      </ul>
    </div>
  );
};
