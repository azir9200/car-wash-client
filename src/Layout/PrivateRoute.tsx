import { selectCurrentUser } from "@/redux/features/userSlice";
import { useAppSelector } from "@/redux/hooks";
import { ReactNode } from "react";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }: { children: ReactNode }) => {
  const user = useAppSelector(selectCurrentUser);
  console.log(" user protected", user);

  if (user?.email) {
    return children;
  }
  return <Navigate to="/login" replace={true} />;
};

export default ProtectedRoute;
