import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="w-full py-5 text-center">
      <p className="text-black">
        Copyright © 2024 - All rights reserved by{" "}
        <Link to="https://t.me/ozodbekweb" className="link">
          Ozodbek Mirzaaxmadov
        </Link>
      </p>
    </div>
  );
}

export default Footer;
