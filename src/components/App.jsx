import image from '../img/precision-factory-iron-parts-teamwork.jpg'


export const App = () => {
  return (
    <div
      style={{
        fontFamily: 'Cinzel Decorative',
        backgroundImage:`url(${image})`,
        backgroundRepeat:"no-repeat",
        backgroundSize:"cover",
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 65,
        color: '#fff'
      }}
    >
      World of steampunk
    </div>
  );
};
