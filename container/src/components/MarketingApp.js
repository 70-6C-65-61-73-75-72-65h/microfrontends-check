import { mount } from "marketing/MarketingApp";
import React, { useRef, useEffect } from "react";
import { useHistory } from "react-router-dom";

export const MarketingApp = () => {
  const ref = useRef(null);
  const history = useHistory();
  const firstRender = useRef(true);

  useEffect(() => {
    if (firstRender.current) {
      const { onParentNavigate } = mount(ref.current, {
        onNavigate: ({ pathname: nextPathname }) => {
          const { pathname } = history.location;
          if (pathname !== nextPathname) history.push(nextPathname);
        }
      });
      if (onParentNavigate) history.listen(onParentNavigate);
      firstRender.current = false;
    }
  }, [history, firstRender.current]);
  return <div ref={ref} />;
};
