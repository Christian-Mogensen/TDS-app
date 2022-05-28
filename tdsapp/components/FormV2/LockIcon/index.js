import { motion } from "framer-motion";
import * as React from "react";

export const LockIcon = (props) => {
  return (
    <svg
      id="Layer_1"
      xmlns="http://www.w3.org/2000/svg"
      x={0}
      y={0}
      viewBox="0 0 20 20"
      className="relative"
      style={{
        enableBackground: "new 0 0 20 20",
      }}
      xmlSpace="preserve"
      {...props}
    >
      <style>{".st0{fill:currentColor}"}</style>

      <path
        className="st0"
        d="M5 9c-1.1 0-2 .9-2 2v5c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2v-5c0-1.1-.9-2-2-2H5z"
      />
    </svg>
  );
};

export const LockArm = (props) => {
  return (
    <svg
      id="Layer_1"
      xmlns="http://www.w3.org/2000/svg"
      x={0}
      y={0}
      viewBox="0 0 20 20"
      className="relative"
      style={{
        enableBackground: "new 0 0 20 20",
      }}
      xmlSpace="preserve"
      {...props}
    >
      <style>{".st0{fill:currentColor}"}</style>
      <motion.path
        className="st0"
        d="M7 11.5V7c0-1.7 1.3-3 3-3 1.4 0 2.6 1 2.9 2.2.1.6.7.9 1.2.8.5-.1.9-.7.7-1.2C14.3 3.6 12.3 2 10 2 7.2 2 5 4.2 5 7v4.5h2z"
      />
    </svg>
  );
};

export function GithubLogoIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      className="fill-current"
    >
      <path d="M10.9 2.1c-4.6.5-8.3 4.2-8.8 8.7-.5 4.7 2.2 8.9 6.3 10.5.3.1.6-.1.6-.5v-1.6s-.4.1-.9.1c-1.4 0-2-1.2-2.1-1.9-.1-.4-.3-.7-.6-1-.3-.1-.4-.1-.4-.2 0-.2.3-.2.4-.2.6 0 1.1.7 1.3 1 .5.8 1.1 1 1.4 1 .4 0 .7-.1.9-.2.1-.7.4-1.4 1-1.8-2.3-.5-4-1.8-4-4 0-1.1.5-2.2 1.2-3-.1-.2-.2-.7-.2-1.4 0-.4 0-1 .3-1.6 0 0 1.4 0 2.8 1.3.5-.2 1.2-.3 1.9-.3s1.4.1 2 .3C15.3 6 16.8 6 16.8 6c.2.6.2 1.2.2 1.6 0 .8-.1 1.2-.2 1.4.7.8 1.2 1.8 1.2 3 0 2.2-1.7 3.5-4 4 .6.5 1 1.4 1 2.3v2.6c0 .3.3.6.7.5 3.7-1.5 6.3-5.1 6.3-9.3 0-6-5.1-10.7-11.1-10z"></path>
    </svg>
  );
}
export function GoogleLogoIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="30"
      height="30"
      viewBox="0 0 30 30"
      className="fill-current"
    >
      <path d="M15.004 3C8.374 3 3 8.373 3 15s5.375 12 12.004 12c10.01 0 12.265-9.293 11.326-14H15v4h7.738c-.89 3.448-4.012 6-7.738 6a8 8 0 010-16c2.009 0 3.84.746 5.244 1.969l2.842-2.84A11.96 11.96 0 0015.004 3z"></path>
    </svg>
  );
}
