/**
 *
 *
 * @export
 * @param {Object} props
 * @param {("default" | "disabled")} props.appearance - appearance styles
 * @param {String} label - the text that displays this button
 * @returns
 */
export default function Button({ appearance = "default", label, ...props }) {
  const styles = {
    default:
      "bg-gradient-to-r from-primaryGradient-start to-primaryGradient-end cursor-pointer text-white",
    disabled: "bg-neutral-400 cursor-not-allowed text-white",
  };

  return (
    <button
      className={`${styles[appearance]} font-medium text-xl rounded-2xl px-8 py-2 shadow-button focus:outline-none`}
      {...props}
    >
      {label}
    </button>
  );
}
