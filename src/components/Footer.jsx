import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer">
      <div className="container">
        <div className="box-container">
          <div className="box box-1">
            <Link className="link">Shop All</Link>
            <Link className="link">About</Link>
            <Link className="link">Contact</Link>
          </div>

          <div className="box box-2">
            <Link className="link">FAQ</Link>
            <Link className="link">Shipping & Returns</Link>
            <Link className="link">Store Policy</Link>
            <Link className="link">Payment Methods</Link>
          </div>

          <div className="box box-3">
            <Link className="link">Instagram</Link>
            <Link className="link">Pinterest</Link>
            <Link className="link">Facebook</Link>
            <Link className="link">Twitter</Link>
          </div>

          <div className="box box-4">
            <span className="lead">Join our mailing list</span>
            <span>and get 10% off</span>
            <input type="email" placeholder="Enter your email here*" />
            <button>Subscribe Now</button>
          </div>
        </div>
      </div>
      <p
        style={{
          textAlign: "center",
          width: "100%",
          fontSize: ".9em",
          opacity: "0.6",
        }}
      >
        Developed by Clinton Orbaña, 2023
      </p>
    </div>
  );
};

export default Footer;
