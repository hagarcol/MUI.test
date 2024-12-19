import React from "react";
import { Box } from "@mui/material";
import { keyframes } from "@emotion/react";

// Keyframe animation for seamless infinite scroll
const scrollAnimation = keyframes`
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-50%);
  }
`;

export const ImageCarousel = ({ images }) => {
  return (
    <Box
      sx={{
        position: "relative",
        overflow: "hidden",
        display: "flex",
        alignItems: "center",
        height: "100px",
      }}
      >
      {/* Left Gradient */}
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "50px",
          height: "100%",
          zIndex: 2,
          background: "linear-gradient(to left, rgba(0, 0, 0, 0.1), transparent)",
          backdropFilter: "blur(8px)",
          pointerEvents: "none",
        }}
        />

      {/* Right Gradient */}
      <Box
        sx={{
          position: "absolute",
          top: 0,
          right: 0,
          width: "50px",
          height: "100%",
          zIndex: 2,
          background: "linear-gradient(to right, rgba(0, 0, 0, 0.1), transparent)",
          backdropFilter: "blur(8px)",
          pointerEvents: "none",
        }}
        />

      {/* Image Container */}
      <Box
        sx={{
          display: "flex",
          animation: `${scrollAnimation} 2s linear infinite`,
          "&:hover": {
            animationPlayState: "paused", 
          },
        }}
        >

        {[...images, ...images, ...images, ...images].map((image, index) => (
          <Box
            key={index}
            component="img"
            src={image}
            alt={`carousel-${index}`}
            sx={{
              height: "80px",
              width: "auto",
              flexShrink: 0,
              objectFit: "cover",
              marginRight: "24px",
            }}
            />
        ))}
      </Box>
    </Box>
  );
};
