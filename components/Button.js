/**
 *
 *
 * @export
 * @param {Object} props
 * @param {("default" | "disabled")} props.appearance - appearance styles
 * @param {String} label - the text that displays this button
 * @returns
 */
export default function Button({ appearance = "default", label }) {
  const styles = {
    default:
      "bg-gradient-to-r from-primaryGradient-start to-primaryGradient-end text-white",
    disabled: "bg-neutral-400 text-white",
  };

  return (
    <button
      className={`${styles[appearance]} font-normal rounded-2xl px-8 py-2`}
    >
      {label}
    </button>
  );
}
