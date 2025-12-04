import { useEffect, useState, useCallback } from "react";

type WindowSizeType = "inner" | "outer";

interface WindowSizes {
    width: number;
    height: number;
}

export default function useWindowSize(windowSizeType: WindowSizeType = "inner") {
    const [sizes, setSizes] = useState<WindowSizes>({
        width: 0,
        height: 0
    });

    const handleResize = useCallback(() => {

        const width = windowSizeType === "inner" ? window.innerWidth : window.outerWidth;
        const height = windowSizeType === "inner" ? window.innerHeight : window.outerHeight;
        
        setSizes({ width, height });
    }, [windowSizeType]); 

    useEffect(() => {

        handleResize();

        window.addEventListener("resize", handleResize);


        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, [handleResize]); 

    return sizes;
}
