import { Link } from "react-router-dom";

export default function Button({
  to,
  children,
  className = "",
}: {
  to: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <Link to={to} className={`btn ${className}`}>
      {children}
    </Link>
  );
}
