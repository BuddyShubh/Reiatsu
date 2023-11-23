import "../style/sections/Hero.scss";

function Hero() {
  return (
    <div className="hero-container">
      <div className="content">
        <p>
          HORROR,
          <br />
          SCARES
          <br />
          & PARTY
        </p>
      </div>
      <div className="banner">
        <img
          src="https://img.freepik.com/free-psd/halloween-poster-design-template_23-2149062525.jpg?w=740&t=st=1700376779~exp=1700377379~hmac=ebb05733abef700b050125369f55a878af4332f8b467a874eea1defa79a65d5b"
          alt="banner"
        />
      </div>
    </div>
  );
}

export default Hero;
