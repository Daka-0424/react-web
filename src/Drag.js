import React, { useState } from 'react';

export default function Drag({ children }) {
  const [dragPosition, setDragPosition] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);

  const handleDragStart = (event) => {
    setIsDragging(true);
    const { clientX, clientY } = event.type ==="touchstart" ? event.touches[0] : event;
    setDragPosition({ x: clientX, y: clientY });
  };

  const handleDragMove = (event) => {
    event.preventDefault();
    if (!isDragging) return;

    const { clientX, clientY } = event.type === "touchmove" ? event.touches[0] : event;
    setDragPosition({ x: clientX, y: clientY });
  }

  const handleDragEnd = () => {
    setIsDragging(false);
  };

  return (
    <div
      onDragOver={handleDragMove}
      onTouchMove={handleDragMove}
      onTouchEnd={handleDragEnd}
      style={{
        width: "100vw",
        height: "100vh",
        position: "relative",
        backgroundColor: "#f0f0f0",
        overflow: "hidden",
      }}
    >
      <div
        draggable
        onDragStart={handleDragStart}
        onDragEnd={handleDragEnd}
        onTouchStart={handleDragStart}
        style={{
          width: "fit-content",
          height: "fit-content",
          cursor: "move",
        }}
      >
      {children}
      </div>
      {isDragging && (
        <div
          style={{
            position: "absolute",
            top: dragPosition.y,
            left: dragPosition.x,
            width: "50px",
            height: "50px",
            backgroundColor: "red",
            borderRadius: "50%",
            transform: "translate(-50%, -50%)",
            pointerEvents: "none", // ドラッグ中の要素を無視する
          }}
        />
      )}
    </div>
  )
}