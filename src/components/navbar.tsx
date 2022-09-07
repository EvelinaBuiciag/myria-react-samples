import { Link } from "react-router-dom";

type Props = {
  items: any,
  title: string,
  buttonTitle: string,
  onButtonClick: any
}

const Navbar = ({ title, items, onButtonClick, buttonTitle }: Props) => {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">{title}</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              {
                items.map((item: any) => (
                  <li className="nav-item" key={item.title}>
                    <Link className="nav-link" to={item.url}>{item.title}</Link>
                  </li>
                ))
              }
            </ul>
            <button className="btn btn-primary" onClick={onButtonClick}>{buttonTitle}</button>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Navbar;