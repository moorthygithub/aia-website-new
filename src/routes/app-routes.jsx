
import Map from "@/components/auth/Map";
import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";



const Login = lazy(() => import("@/app/auth/login"));

const NotFound = lazy(() => import("@/app/errors/not-found"));

const AuthRoute = lazy(() => import("./auth-route"));
const ProtectedRoute = lazy(() => import("./protected-route"));

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<AuthRoute />}>
        <Route path="/" element={<Login />} />
        <Route path="/map" element={<Map />} />
        
      </Route>

      <Route path="/" element={<ProtectedRoute />}>
       
      </Route>

      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default AppRoutes;
