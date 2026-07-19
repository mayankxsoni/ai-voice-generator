const HeroVideoBackground = () => {
  return (
    <video
      className="lp:h-[960px]! absolute top-0 left-0 h-full w-full object-cover object-center md:h-[650px] lg:h-[700px]"
      autoPlay
      muted
      loop
      playsInline
      aria-label="Decorative background video animation">
      <source src="/video/big-circle.mp4" type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  );
};

export default HeroVideoBackground;
