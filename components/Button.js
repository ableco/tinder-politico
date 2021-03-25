/**
 *
 *
 * @export
 * @param {Object} props
 * @param {("default" | "disabled" | "white" | "black")} props.appearance - appearance styles
 * @param {String} label - the text that displays this button
 * @returns
 */
export default function Button({ appearance = "default", label, ...props }) {
  const styles = {
    default:
      "bg-gradient-to-r from-primaryGradient-start to-primaryGradient-end cursor-pointer text-white",
    disabled: "bg-neutral-400 cursor-not-allowed text-white",
    white: "bg-white cursor-pointer text-black",
    black: "bg-black cursor-pointer text-white",
  };

  return (
    <button
      className={`${styles[appearance]} font-extrabold text-xl rounded-xl px-7 py-3 shadow-button focus:outline-none`}
      {...props}
    >
      {label}
    </button>
  );
}
