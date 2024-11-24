import { useIonRouter } from "@ionic/react";
import React, { useEffect, useState } from "react";
import { useAuth } from "../context/middleware";
import { motion } from "framer-motion";
import "./LoadingScreen.css";

const LoadingScreen: React.FC = () => {
  const router = useIonRouter();
  const { state } = useAuth();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (!state.loading) {
        if (state.isAuthenticated) {
          router.push("/home");
        } else {
          router.push("/auth");
        }
        setIsLoading(false);
      }
    }, 2000);

    return () => clearTimeout(timer);
  }, [state, router]);

  useEffect(() => {
    if (!state.loading && !isLoading) {
      if (state.isAuthenticated) {
        router.push("/home");
      } else {
        router.push("/auth");
      }
    }
  }, [state, isLoading, router]);

  return (
    <div className="relative h-screen w-full bg-black overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('/fundo-hardware.jpg')",
          filter: "brightness(50%)",
        }}
      />
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-white">
        <motion.div
          className="p-5 mb-2"
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1 }}

        >
      <img className="w-24 h-28" src="/hardware-svgrepo-com.svg"/>
        </motion.div>
        <motion.h1
          className="text-4xl font-bold mb-4"
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          Tecniloz
        </motion.h1>
      </div>
    </div>
  );
};

export default LoadingScreen;
