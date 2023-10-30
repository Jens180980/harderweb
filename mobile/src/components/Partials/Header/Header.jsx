import "./header.css";

export const Header = ({ pageTitle }) => {
  return (
    <div className="header">
      <a href="./" className=".h2">
        harderweb_
      </a>
      <h1 className=".h1">{pageTitle}</h1>
    </div>
  );
};
