export default function Score({ label, score }) {
  return (
    <div className="score">
      <h2>{label}</h2>
      <p>{score}</p>
    </div>
  );
}
