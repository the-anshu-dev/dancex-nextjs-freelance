"use client";
import React, { useState, useContext, useEffect, createContext } from "react";
import SplashScreen from "@/components/SplashScreen";
import { useRouter, usePathname } from "next/navigation";

export const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [userToken, setUserToken] = useState(null);
  const [userInfo, setUserInfo] = useState(null);

  const router = useRouter();
  const pathname = usePathname();

  // Store last visited path
  const setLastPath = (path) => {
    localStorage.setItem("lastPath", path);
  };

  const getLastPath = (who) => {
    return localStorage.getItem("lastPath") || `/${who}`;
  };

  const login = async (apiRes) => {
    try {
      setIsLoading(true);
      console.log("Auth Token:", apiRes.accessToken);

      // Store token and user info in localStorage
      localStorage.setItem("token", apiRes.accessToken);
      localStorage.setItem("userInfo", JSON.stringify(apiRes));

      danceXApi.setToken(apiRes.accessToken);
      setUserToken(apiRes.accessToken);
      setUserInfo(apiRes);

      toast("Login Successful!");
    } catch (error) {
      console.error("Login Error:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const isLoggedIn = async () => {
    const authToken = localStorage.getItem("token");
    const storedUserInfo = localStorage.getItem("userInfo");

    if (authToken && storedUserInfo) {
      setUserToken(authToken);
      danceXApi.setToken(authToken);
      const parsedUser = JSON.parse(storedUserInfo);

      console.log("IS LOGGED ==>", parsedUser);
    }
  };

  const logout = () => {
    try {
      setIsLoading(true);
      setUserToken(null);
      setUserInfo(null);

      localStorage.removeItem("token");
      localStorage.removeItem("userInfo");
      localStorage.removeItem("lastPath");

      router.push("/");
    } catch (error) {
      console.error("Logout Error:", error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    isLoggedIn();
    setIsLoading(false);
  }, []);

  if (isLoading) return <SplashScreen />;

  return (
    <AuthContext.Provider
      value={{
        login,
        logout,
        userInfo,
        userToken,
        setUserInfo,
        isLoading,
        setIsLoading,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
