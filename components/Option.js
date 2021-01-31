/**
 *
 *
 * @export
 * @param {Object} props
 * @param {("default" | "disabled" | "active")} props.appearance - appearance styles
 * @param {String} label - the text that displays this button
 * @returns
 */
export default function Option({ appearance = "default", label, ...props }) {
  const styles = {
    default: "bg-white text-neutral-700",
    disabled: "bg-white text-neutral-400",
    active:
      "bg-gradient-to-r from-successGradient-start to-successGradient-end text-white",
  };

  return (
    <button
      className={`${styles[appearance]} font-normal rounded-2xl px-8 py-2 shadow-button focus:outline-none w-full`}
      {...props}
    >
      {label}
    </button>
  );
}
