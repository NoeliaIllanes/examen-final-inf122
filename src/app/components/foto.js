"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import style from "./foto.module.css";

function Foto() {
  const [pokemon, setPokemon] = useState("/vercel.svg");
  const [nombre, setNombre] = useState("nombre");
  const [type, setType] = useState("type");
  const [height, setHeight] = useState("height");
  const [weight, setWeight] = useState("weight");
  const [abilities, setAbilities] = useState("abilities");
  const [hp, setHp] = useState("hp")
  const [attack, setAttack] = useState("attack")
  const [defense, setDefense] = useState("defense")
  const [speed, setSpeed] = useState("speed")
  const url = "https://pokeapi.co/api/v2/pokemon/275";
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setPokemon(data.sprites.front_default);
        setNombre(data.species.name);
        ("");
        setType(data.types[0].type.name);
        setHeight(data.height);
        setWeight(data.weight);
        setAbilities(data.abilities[0].ability.name);
        setHp(data.weight);
        setAttack(data.attack);
        setDefense(data.defense);
        setSpeed(data.speed);
      });
  }, []);
  return (
    <div className={style.contenedor}>
      <h2>My pokemon</h2>
      <br />
      <h1>{nombre}</h1>
      <br />
      <Image src={pokemon}  width={500} height={500} />
      <br />
      <div className={style.secontenedor}>
        <h3> About</h3>
        <p><strong>Type:</strong> <strong /> {type}</p>
        <p><strong>Height:</strong> {height}</p>
        <p><strong>Weight:</strong> {weight}</p>
        <p><strong>Abilities:</strong> {abilities}</p>
        <h3> Stats</h3>
        <p><strong>HP:</strong> <strong /> {hp}</p>
        <p><strong>Attack:</strong> {attack}</p>
        <p><strong>Defense:</strong> {defense}</p>
        <p><strong>Speed:</strong> {speed}</p>
      </div>
    </div>
  );
}
export default Foto;
