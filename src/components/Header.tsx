import "@/styles/Header.scss";
import Link from "next/link";

const Header = () => {
  return (
    <div className="header-container">
      <ul>
        <div className="header-left">
          <Link href="/">
            <strong>Arkhio</strong>
          </Link>
        </div>
        <div className="header-links">
          <li>
            <Link href="/add">Add a Website</Link>
            <Link href="#">Find Source</Link>
            <Link href="#">About Us</Link>
          </li>
        </div>
      </ul>
    </div>
  );
};

export default Header;
