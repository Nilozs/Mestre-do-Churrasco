import { IonIcon, useIonRouter } from "@ionic/react";
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
          backgroundImage: "url('/grill.jpg')",
          filter: "brightness(50%)",
        }}
      />
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-white">
        <motion.div
          className="bg-orange-600 rounded-full p-6 mb-8"
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1 }}
        >
          <motion.svg
            className="h-12 w-12"
            fill="none"
            height="24"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            width="24"
            xmlns="http://www.w3.org/2000/svg"
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1 }}
          >
            <path d="M15.5 12H4" />
            <path d="M8.5 8.5V4" />
            <path d="M11.5 8.5V4" />
            <path d="M18.5 10a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z" />
            <path d="M20 14v-3.5A6.5 6.5 0 0 0 13.5 4h-7A6.5 6.5 0 0 0 0 10.5v7A6.5 6.5 0 0 0 6.5 24h7a6.5 6.5 0 0 0 6.5-6.5V14" />
          </motion.svg>
        </motion.div>
        <motion.h1
          className="text-4xl font-bold mb-4"
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          Grilreal
        </motion.h1>
      </div>
    </div>
  );
};

export default LoadingScreen;
