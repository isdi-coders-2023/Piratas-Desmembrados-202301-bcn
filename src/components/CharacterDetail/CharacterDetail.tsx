import { useContext, useEffect } from "react";
import { useReceiveCharactersData } from "../../hooks/useReciveCharactersData/useReceiveCharactersData";
import CharactersContext from "../../store/contexts/characters/CharactersContext";
import CharacterDetailStyle from "./CharacterDetailStyle";

const CharacterDetail = (): JSX.Element => {
  const { getRickApiData } = useReceiveCharactersData();
  useEffect(() => {
    getRickApiData();
  }, [getRickApiData]);

  const {
    characters: {
      results: [
        {
          gender,
          image,
          location: { name: location },
          name,
          origin: { name: origin },
          species,
          status,
        },
      ],
    },
  } = useContext(CharactersContext);
  return (
    <CharacterDetailStyle className="detail">
      <img
        src={`${image}`}
        alt={`A page detail with ${name}`}
        width={300}
        height={300}
      />
      <div className="detail__title name">
        <span>{name}</span>
      </div>
      <div className="detail__title">
        <span>Gender</span>
      </div>
      <div className="detail__info">
        <span>{gender}</span>
      </div>
      <div className="detail__title">
        <span>Species</span>
      </div>
      <div className="detail__info">
        <span>{species}</span>
      </div>
      <div className="detail__title">
        <span>Status</span>
      </div>
      <div className="detail__info">
        <span>{status}</span>
      </div>
      <div className="detail__title">
        <span>Origin</span>
      </div>
      <div className="detail__info">
        <span>{origin}</span>
      </div>
      <div className="detail__title">
        <span>Location</span>
      </div>
      <div className="detail__info">
        <span>{location}</span>
      </div>
    </CharacterDetailStyle>
  );
};

export default CharacterDetail;
