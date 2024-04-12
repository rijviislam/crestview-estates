import PropTypes from "prop-types";
import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";

export default function PrivateRoutes({ children }) {
  const { user, loading } = useContext(AuthContext);
  if (loading) {
    return (
      <div className="w-full h-full flex items-center justify-center">
        <span className="loading loading-spinner text-info loading-lg"></span>
      </div>
    );
  }
  if (user) {
    return children;
  }
  return <Navigate to="/login"></Navigate>;
}

PrivateRoutes.propTypes = {
  children: PropTypes.node,
};
