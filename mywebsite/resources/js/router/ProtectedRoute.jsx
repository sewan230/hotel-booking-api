import { Navigate } from "react-router-dom";

import { useAuth } from "../context/AuthContext";

export default function ProtectedRoute({
  allowedRoles,
  children,
}) {

  const {
    user,
    token,
    loading,
    isAuthenticated,
  } = useAuth();

  // wait auth hydration
  if (loading) {
    return <p>Loading...</p>;
  }

  // not authenticated
  if (!isAuthenticated || !user || !token) {

    return <Navigate to="/login" replace />;
  }

  // unauthorized
  if (
    allowedRoles &&
    !allowedRoles.includes(user.role)
  ) {

    return <Navigate to="/" replace />;
  }

  return children;
}