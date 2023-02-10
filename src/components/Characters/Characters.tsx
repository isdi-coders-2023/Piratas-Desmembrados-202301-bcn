import { useContext } from "react";
import { CharactersStructure } from "../../data/types";
import CharactersContext from "../../store/contexts/characters/CharactersContext";
import Character from "../Character/Character";
import CharactersList from "./CharactersStyled";

interface CharactersProps {
  characters: CharactersStructure;
}
const Characters = ({ characters }: CharactersProps): JSX.Element => {
  useContext(CharactersContext);

  return (
    <CharactersList>
      {characters.map((character) => (
        <Character key={character.id} character={character} />
      ))}
    </CharactersList>
  );
};

export default Characters;
