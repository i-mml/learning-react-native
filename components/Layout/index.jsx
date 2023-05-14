import React, { useMemo } from "react";
import ShopNavigator from "../../navigation/ShopNavigator";
import { useSelector } from "react-redux";

const Layout = () => {
  const isAuth = useSelector((state) => state?.auth?.isAuth);

  return <ShopNavigator isAuth={isAuth} />;
};

export default Layout;
