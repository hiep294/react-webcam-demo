import React from "react";
import Webcam from "react-webcam";

export default function App() {
  return (
    <div>
      <Webcam minScreenshotHeight={200} minScreenshotWidth={200} />
    </div>
  );
}
