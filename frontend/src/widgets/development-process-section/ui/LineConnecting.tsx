import { useEffect, useRef, useState } from "react";

type LineConnectingProps = {
  isVisible: boolean;
  stageIndex: number;
};

const LineConnecting = ({ isVisible, stageIndex }: LineConnectingProps) => {
  const [lineHeight, setLineHeight] = useState(60);
  const svgRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    const calculateHeight = () => {
      if (svgRef.current) {
        const currentCircle = svgRef.current.parentElement; // поточний кружечок
        const nextStageContainer = document.querySelector(
          `[data-stage="${stageIndex + 2}"]`
        );
        const nextCircle = nextStageContainer?.querySelector(
          '[data-circle="true"]'
        );

        if (currentCircle && nextCircle) {
          const currentRect = currentCircle.getBoundingClientRect();
          const nextRect = nextCircle.getBoundingClientRect();
          const height = nextRect.top - currentRect.bottom;
          setLineHeight(Math.max(height, 20));
        }
      }
    };

    calculateHeight();

    const timer = setTimeout(calculateHeight, 100); // затримка для завантаження

    window.addEventListener("resize", calculateHeight);

    return () => {
      clearTimeout(timer);
      window.removeEventListener("resize", calculateHeight);
    };
  }, [stageIndex]);

  return (
    <svg
      ref={svgRef}
      className="absolute top-full left-1/2 z-10 -translate-x-1/2"
      width="6"
      height={lineHeight}
      viewBox={`0 0 6 ${lineHeight}`}
      xmlns="http://www.w3.org/2000/svg"
    >
      <line
        x1="3"
        y1="0"
        x2="3"
        y2={lineHeight}
        stroke="#8a8a8a"
        strokeWidth="4"
        strokeDasharray={lineHeight}
        strokeDashoffset={isVisible ? "0" : lineHeight}
        className="transition-all duration-1000 ease-out"
        style={{
          strokeLinecap: "round",
        }}
      />
    </svg>
  );
};

export default LineConnecting;
