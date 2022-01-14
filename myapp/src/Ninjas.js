import React from 'react';
import './Ninjas.css'

const Ninjas = ({ninjas, deleteNinja}) => {
  const ninjaList = ninjas.map(ninja => {
    return (
      <div className="ninja" key={ninja.id}>
        <div>Name: { ninja.name }</div>
        <div>Age: { ninja.age }</div>
        <div>Favorite: { ninja.favorite }</div>
        <button onClick={() => {deleteNinja(ninja.id)}}>Delete ninja</button>
      </div>
    )
  })
  return(
    <div className="ninja-list">
      { ninjaList }
    </div>
  );
}
//this is child element

export default Ninjas;