import React, { useState, useRef, useLayoutEffect } from "react";
import BubbleUI from "react-bubble-ui";
import "react-bubble-ui/dist/index.css";
import UserBubble from "./UserBubble";

export default function App({ data }) {
  const getStockBubbles = () => {
    return data?.map((user, i) => {
      return <UserBubble {...user} key={i} />;
    });
  };

  const stockBubbles = getStockBubbles();

  const [options, setOptions] = useState({
    size: 180,
    minSize: 50,
    gutter: 30,
    provideProps: true,
    numCols: 6,
    fringeWidth: 260,
    yRadius: 200,
    xRadius: 100,
    cornerRadius: 100,
    showGuides: false,
    compact: true,
    gravitation: 5,
  });

  const scrollToRef = (ref) => {
    if (ref) {
      const y = ref.current.offsetTop - 50;
      window.scrollTo(0, y);
    } else {
      window.scrollTo(0, 0);
    }
  };

  useLayoutEffect(() => {
    const hash = window.location.hash.split("#/")[1];
    if (hash == "demo") {
      scrollToRef(demoRef);
    } else if (hash == "docs") {
      scrollToRef(docsRef);
    } else if (hash == "code") {
      scrollToRef(codeRef);
    } else if (hash == "layout") {
      scrollToRef(layoutRef);
    } else if (hash == "style") {
      scrollToRef(styleRef);
    }
  }, []);

  const demoRef = useRef(null);
  const docsRef = useRef(null);
  const codeRef = useRef(null);
  const layoutRef = useRef(null);
  const styleRef = useRef(null);

  return (
    <React.Fragment>
      <BubbleUI className="bubbleUI" options={options}>
        {stockBubbles}
      </BubbleUI>
    </React.Fragment>
  );
}
