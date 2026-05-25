function Card({ name, info }) {
  return (
    <div className="card" style={{
      border: '1px solid #ccc',
      borderRadius: 8,
      padding: 12,
      marginBottom: 12
    }}>
      <h2 style={{ margin: 0, fontSize: 18 }}>{name}</h2>
      <p style={{ margin: '6px 0 0', color: '#444' }}>{info}</p>
    </div>
  );
}

export default Card;

