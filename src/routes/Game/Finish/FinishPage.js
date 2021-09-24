import { useContext } from "react";
import PokemonCard from "../../../components/PokemonCard";
import { PokemonContext } from "../../../data/pokemonContext";
import s from './finish.module.css'

const FinishPage = () => {
    const {pokemons, pokemons2} = useContext(PokemonContext)
    return(
        <>
            <div className={s.flex}>
            {Object.values(pokemons).map(item => {
                return <PokemonCard
                key={item.key}
                className={s.card}
                id={item.id}
                name={item.name}
                img={item.img}
                type={item.type}
                values={item.values}
                isActive
                minimize
                 />
            })}
            </div>
            <button>End Game</button>
            <div className={s.flex}>
            {Object.values(pokemons2).map(item => {
                return <PokemonCard
                key={item.key}
                className={s.card}
                id={item.id}
                name={item.name}
                img={item.img}
                type={item.type}
                values={item.values}
                isActive={item.true} />
            })}
            </div>
        </>
    )
}

export default FinishPage;