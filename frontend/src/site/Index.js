import React, { useEffect, useRef } from "react";
import HeroSlider from "../components/HeroSlider";

const Index = () => {
    const canvasRef = useRef(null);
    function draw() {
        // const canvasRef = document.getElementById("canvas");
        if (canvasRef.getContext) {
          const ctx = canvasRef.getContext("2d");
      
          ctx.beginPath();
          ctx.moveTo(75, 50);
          ctx.lineTo(100, 75);
          ctx.lineTo(100, 25);
          ctx.fill();
        }
      }
  useEffect(() => {
    // draw(https://m2.material.io/design/guidelines-overview)

  }, [draw]);

 
  
  return (
    <>
      <HeroSlider />
      <div style={{height:500}}>
        <div>
          <canvas ref={canvasRef} style={{ border: '1px solid black' }} />
        </div>
      </div>
    </>
  );
};

export default Index;
