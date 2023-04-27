import React from "react";

const FadeInSection = (props:any) => {
    const [isVisible, setVisible] = React.useState(true);
    const domRef:any = React.useRef();
    React.useEffect(() => {
      const node = domRef.current;
      const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => setVisible(entry.isIntersecting));
      });
      observer.observe(node);
      return () => observer.unobserve(node);
    }, []);
    return (
      <div
        className={`fade-in-section ${isVisible ? 'is-visible' : ''}`}
        ref={domRef}
      >
        {props.children}
      </div>
    );
  };

  export default FadeInSection;
  