import React from "react";
import "./App.css";

const Poke = ({ name, moves, sprites, id, types, stats }) => {
  return (
    <div className="content">
      <div>
        {name && <p className="name-poke">{name}</p>}
        {id && <p>N°{id}</p>}
        {types && <p className="type-pokemon">Pokemon Type : {types}</p>}
        {sprites && <img className="img-poke" src={sprites.front_default} />}
      </div>
      <div>
        {moves && (
          <li className="list-mov">
            <ul>Movements</ul>
            <ul>N°1 : {moves.move1}</ul>
            <ul>N°2 : {moves.move2}</ul>
            <ul>N°3 : {moves.move3}</ul>
            <ul>N°4 : {moves.move4}</ul>
          </li>
        )}
      </div>
      <div>
        {stats && (
          <li className="list-mov">
            <ul>Stats</ul>
            <ul>
              {stats.stat1} : {stats.stat1b}
            </ul>
            <ul>
              {stats.stat2} : {stats.stat2b}
            </ul>
            <ul>
              {stats.stat3} : {stats.stat3b}
            </ul>
            <ul>
              {stats.stat4} : {stats.stat4b}
            </ul>
            <ul>
              {stats.stat5} : {stats.stat5b}
            </ul>
            <ul>
              {stats.stat6} : {stats.stat6b}
            </ul>
          </li>
        )}
      </div>
    </div>
  );
};

export default Poke;
