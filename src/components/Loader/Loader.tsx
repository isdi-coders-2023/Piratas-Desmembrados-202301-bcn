import LoaderStyled from "./LoaderStyled";

const Loader = (): JSX.Element => {
  return (
    <LoaderStyled className="loader">
      <img
        className="loader__image"
        alt="Rick and Morty falling through a portal"
        srcSet="img/loader.webp"
      ></img>
      <div className="loader__balls jelly-triangle">
        <div className="jelly-triangle__dot"></div>
        <div className="jelly-triangle__traveler"></div>
      </div>
      <span className="loader__text">Looking for a new destination</span>
    </LoaderStyled>
  );
};

export default Loader;
