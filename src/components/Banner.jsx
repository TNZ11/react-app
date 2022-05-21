import './../App.css';

const Banner = ({ glasses }) => {
  const bannerString =
    glasses <= 5 ? 'Not enough water, Noorie!' : 'Almost there, Noorie!';

  const colour = glasses <= 5 ? '#F8D7DA' : '#FFBF00';

  const className = glasses <= 5 ? 'alert alert-danger red-pulse' : 'alert alert-danger amber-pulse'

  const render =
    glasses < 8 ? (
      <div
        className={className}
        role="alert"
        style={{
          fontSize: '33px',
          fontWeight: 'bold',
          color: 'black',
          backgroundColor: colour,
          marginRight: '50px',
          marginLeft: '-350px',
          marginBottom: '100px',
          transform: 'scale(1)',
          boxShadow: '0 0 0 0 rgba(199, 0, 57, 1)',
          animation: 'pulse 2s infinite'
        }}
      >
        {bannerString}
      </div>
    ) : (
      <h1 className="banner">You did it, Noorie!</h1>
    );

  return <>{render}</>;
};

export default Banner;
