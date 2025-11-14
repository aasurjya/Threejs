import {
  Box,
  Code,
  Github,
  Home,
  Linkedin,
  NotebookText,
  Phone,
  Twitter,
  User,
} from "lucide-react";
import Link from "next/link";
import React from "react";
import ResponsiveComponent from "../ResponsiveComponent";
import clsx from "clsx";
import { motion } from "framer-motion";

const getIcon = (icon) => {
  switch (icon) {
    case "home":
      return <Home className="w-full h-auto" strokeWidth={1.5} />;
    case "about":
      return <User className="w-full h-auto" strokeWidth={1.5} />;
    case "projects":
      return <Box className="w-full h-auto" strokeWidth={1.5} />;
    case "code":
      return <Code className="w-full h-auto" strokeWidth={1.5} />;
    case "contact":
      return <Phone className="w-full h-auto" strokeWidth={1.5} />;
    case "github":
      return <Github className="w-full h-auto" strokeWidth={1.5} />;
    case "linkedin":
      return <Linkedin className="w-full h-auto" strokeWidth={1.5} />;
    case "twitter":
      return <Twitter className="w-full h-auto" strokeWidth={1.5} />;
    case "resume":
      return <NotebookText className="w-full h-auto" strokeWidth={1.5} />;

    default:
      return <Home className="w-full h-auto" strokeWidth={1.5} />;
  }
};

const item = {
  hidden: { scale: 0 },
  show: { scale: 1 },
};

const connectorVariants = {
  rest: { scaleY: 1 },
  hover: {
    scaleY: 1.1,
    transition: { type: "spring", stiffness: 280, damping: 14, mass: 0.4 },
  },
};

const labelVariants = {
  rest: { y: 0 },
  hover: {
    y: -4,
    transition: { type: "spring", stiffness: 260, damping: 12, mass: 0.35 },
  },
};

const NavLink = motion(Link);

const NavButton = ({
  x,
  y,
  label,
  link,
  icon,
  newTab,
  labelDirection = "right",
}) => {
  return (
    <ResponsiveComponent>
      {({ size }) => {
        return size && size >= 480 ? (
          <div
            className="absolute cursor-pointer z-50"
            style={{ transform: `translate(${x}, ${y})` }}
          >
            <NavLink
              variants={item}
              href={link}
              target={newTab ? "_blank" : "_self"}
              className="group text-foreground flex flex-col items-center gap-2"
              aria-label={label}
              name={label}
              prefetch={false}
              scroll={false}
              initial="rest"
              animate="rest"
              whileHover="hover"
            >
              <span className="relative flex items-center justify-center w-14 h-14 p-4 custom-bg rounded-full animate-spin-slow-reverse group-hover:pause hover:text-accent ripple">
                {getIcon(icon)}

                <span className="peer bg-transparent absolute top-0 left-0 w-full h-full" />

                <span className="absolute hidden peer-hover:block px-2 py-1 left-full mx-2 top-1/2 -translate-y-1/2 bg-background text-foreground text-sm rounded-md shadow-lg whitespace-nowrap">
                  {label}
                </span>
              </span>
              <motion.span className="flex flex-col items-center gap-[2px] mt-1">
                <motion.span
                  variants={connectorVariants}
                  className="spring-line h-[20px] w-[2px] origin-top animate-spin-slow-reverse group-hover:pause"
                  aria-hidden="true"
                />
                <motion.span
                  variants={labelVariants}
                  className="relative inline-flex items-center justify-center text-[10px] font-medium uppercase tracking-wide text-foreground/80 text-center animate-spin-slow-reverse group-hover:pause ripple"
                >
                  {label}
                </motion.span>
              </motion.span>
            </NavLink>
          </div>
        ) : (
          <div className="w-fit cursor-pointer z-50">
            <NavLink
              variants={item}
              href={link}
              target={newTab ? "_blank" : "_self"}
              className={clsx(
                "group text-foreground flex flex-col items-center gap-1",
                labelDirection === "left" ? "items-end" : "items-center"
              )}
              aria-label={label}
              name={label}
              prefetch={false}
              scroll={false}
              initial="rest"
              animate="rest"
              whileHover="hover"
            >
              <span className="relative flex items-center justify-center w-10 h-10 xs:w-14 xs:h-14 p-2.5 xs:p-4 custom-bg rounded-full hover:text-accent animate-spin-slow-reverse ripple">
                {getIcon(icon)}

                <span className="peer bg-transparent absolute top-0 left-0 w-full h-full" />

                <span
                  className={clsx(
                    "absolute hidden peer-hover:block px-2 py-1 left-full mx-2 top-1/2 -translate-y-1/2 bg-background text-foreground text-sm rounded-md shadow-lg whitespace-nowrap",
                    labelDirection === "left" ? "right-full left-auto" : ""
                  )}
                >
                  {label}
                </span>
              </span>
              <motion.span className="flex flex-col items-center gap-[2px] mt-1">
                <motion.span
                  variants={connectorVariants}
                  className="spring-line h-[18px] w-[2px] origin-top animate-spin-slow-reverse group-hover:pause"
                  aria-hidden="true"
                />
                <motion.span
                  variants={labelVariants}
                  className={clsx(
                    "relative inline-flex items-center justify-center text-[9px] xs:text-[10px] font-medium uppercase tracking-wide text-foreground/80 animate-spin-slow-reverse group-hover:pause ripple",
                    labelDirection === "left" ? "text-right" : "text-center"
                  )}
                >
                  {label}
                </motion.span>
              </motion.span>
            </NavLink>
          </div>
        );
      }}
    </ResponsiveComponent>
  );
};

export default NavButton;
