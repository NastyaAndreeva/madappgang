export function PrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        background: '#662d91',
        width: '50px',
        height: '50px',
        left: '-55px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: '50%',
      }}
      onClick={onClick}
    />
  );
}
