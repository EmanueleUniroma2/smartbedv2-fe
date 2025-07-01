// components/NavGuard.tsx
import React from "react";
import { Navigate } from "react-router-dom";
import { ROUTES } from "../routes";

interface NavGuardProps {
  component: React.FC;
  navGuardItems?: string[];
}

const NavGuard: React.FC<NavGuardProps> = ({
  component: Component,
  navGuardItems,
}) => {
  const allSatisfied =
    !navGuardItems ||
    navGuardItems.every((key) => localStorage.getItem(key) !== null);

  return allSatisfied ? (
    <Component />
  ) : (
    <Navigate to={ROUTES.NOT_FOUND} replace />
  );
};

export default NavGuard;
