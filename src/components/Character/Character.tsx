import CharacterCard from "./CharacterStyled";

const Character = (): JSX.Element => {
  return (
    <CharacterCard className="card">
      <div className="card__header">
        <span>Rick Sanchez</span>
        <img src="img/favourite-empty.png" alt="Empty add to my characters" />
      </div>
      <img src="img/rick-sample.png" alt="A card with Rick Sanchez" />
      <div className="card__resumed-info">
        <div className="card__origin">
          <span>Origin</span>
          <span>C-137</span>
        </div>
        <div className="card__specie">
          <span>Specie</span>
          <span>Human</span>
        </div>
      </div>
    </CharacterCard>
  );
};

export default Character;
