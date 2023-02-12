import { Link } from "react-router-dom";
import { CharactersStructure } from "../../data/types";
import Character from "../Character/Character";
import CharactersList from "./CharactersStyled";

interface CharactersProps {
  results: CharactersStructure;
}

const Characters = ({ results }: CharactersProps): JSX.Element => {
  return (
    <CharactersList>
      {results.map((character) => (
        <li key={character.id}>
          <Link to={`${character.id}`}>
            <Character character={character} />
          </Link>
        </li>
      ))}
    </CharactersList>
  );
};

export default Characters;
