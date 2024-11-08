import { Link } from "react-router-dom";

const Button = (props) => {
  const { style, to, children } = props;
  return (
    <div className="button">
      <Link to={to} className={`theme-btn${style}`}>
        {children}
      </Link>
    </div>
  );
};

export default Button;
