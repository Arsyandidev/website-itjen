const Hero = (props) => {
  const { children, style } = props;
  return (
    <>
      <div className="hero1" style={style}>
        {children}
      </div>
    </>
  );
};

export default Hero;
