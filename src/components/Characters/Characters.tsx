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
        <Character key={character.id} character={character} />
      ))}
    </CharactersList>
  );
};

export default Characters;
