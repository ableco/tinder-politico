/**
 *
 *
 * @export
 * @param {Object} props
 * @param {("default" | "disabled" | "active")} props.appearance - appearance styles
 * @param {String} label - the text that displays this button
 * @returns
 */
export default function Option({
  appearance = "default",
  label,
  letter,
  ...props
}) {
  const styles = {
    default: "bg-white text-neutral-700 shadow-button ",
    gray: "bg-gray-lighter text-black text-left",
    black: "bg-black text-white text-left",
    disabled: "bg-white text-neutral-400 shadow-button ",
    active:
      "bg-gradient-to-r from-successGradient-start to-successGradient-end text-white shadow-button",
  };

  return (
    <button
      className={`${styles[appearance]} font-medium text-xl rounded-2xl px-8 py-2 focus:outline-none w-full`}
      {...props}
    >
      {letter}. {label}
    </button>
  );
}
