"use client"
import { variant1 } from "@/components/animations"
import { cn } from "@/lib/utils"
import { motion } from "framer-motion"
import { ReactNode } from "react"

export const MaxWidthWrapper = ({
  className,
  children,
}: {
  className?: string
  children: ReactNode
}) => {
  return (
    <motion.div
      variants={variant1(0.5)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
    >
      <div
        className={cn(
          "",
          className,
        )}
      >
        {children}
      </div>
    </motion.div>
  )
}
