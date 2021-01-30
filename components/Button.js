export default function Button({ appearance = "default", label }) {
  const styles = {
    default:
      "bg-gradient-to-r from-primaryGradient-start to-primaryGradient-end text-white",
  };

  return (
    <button className={`${styles[appearance]} rounded-2xl px-8 py-2`}>
      {label}
    </button>
  );
}
