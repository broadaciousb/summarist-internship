export default function Navbar() {
  return (
    <nav className="h-80px">
      <div className="flex justify-between items-center max-w-[1070px]">
        <figure className="nav__img--mask">
          <img className="nav__img" src="" alt="logo" />
        </figure>
        <ul className="nav__list--wrapper">
          <li className="nav__list nav__list--login">Login</li>
          <li className="nav__list nav__list--mobile">About</li>
          <li className="nav__list nav__list--mobile">Contact</li>
          <li className="nav__list nav__list--mobile">Help</li>
        </ul>
      </div>
    </nav>
  );
}
