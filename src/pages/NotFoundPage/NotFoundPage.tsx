import NotfoundpageStyled from "./NotFoundPageStyled";
import Header from "../../components/Header/Header";

const NotFoundPage = (): JSX.Element => {
  return (
    <>
      <Header />
      <NotfoundpageStyled className="page-not-found">
        <span className="page-not-found__status-code">
          4
          <img
            src="img/portal.webp"
            width="73"
            height="116"
            alt="Anime green portal"
            className="page-not-found__portal-preview"
          ></img>
          4
          <span className="page-not-found__message">
            The page you are trying to search has been moved to another
            universe.
          </span>
        </span>
        <img
          src="img/404.webp"
          width="151"
          height="108"
          alt="Rick opening Morty's eyes"
          className="page-not-found__404"
        />
      </NotfoundpageStyled>
    </>
  );
};

export default NotFoundPage;
