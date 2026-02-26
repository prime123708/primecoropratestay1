import { useState, useEffect, useRef } from "react";

export function useIntersectionObserver() {
  const [isVisible, setIsVisible] = useState({});
  const observerRefs = useRef([]);
  const observerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible((prev) => ({
              ...prev,
              [entry.target.dataset.section]: true,
            }));
          }
        });
      },
      { threshold: 0.1 },
    );
    observerRef.current = observer;
    observerRefs.current.forEach((ref) => {
      if (ref) observerRef.current.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  const addToRefs = (el) => {
    if (el && !observerRefs.current.includes(el)) {
      observerRefs.current.push(el);
      if (observerRef.current) {
        observerRef.current.observe(el);
      }
    }
  };

  return { isVisible, addToRefs };
}
