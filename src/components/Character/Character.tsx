import { useContext } from "react";
import { CharacterStructure } from "../../data/types";
import CharactersContext from "../../store/contexts/characters/CharactersContext";
import CharacterCard from "./CharacterStyled";

interface CharacterProps {
  character: CharacterStructure;
}

const Character = ({
  character: {
    image,
    name,
    origin: { name: origin },
    species,
  },
}: CharacterProps): JSX.Element => {
  useContext(CharactersContext);

  return (
    <CharacterCard className="card">
      <div className="card__header">
        <span>{name}</span>
      </div>
      <img
        src={`${image}`}
        alt={`A card with ${name}`}
        width={300}
        height={300}
      />
      <div className="card__resumed-info">
        <div className="card__origin">
          <span>Origin</span>
          <span>{origin}</span>
        </div>
        <div className="card__specie">
          <span>Specie</span>
          <span>{species}</span>
        </div>
      </div>
    </CharacterCard>
  );
};

export default Character;
