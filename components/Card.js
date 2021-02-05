export default function Card({ children, ...props }) {
  return (
    <div className="bg-white w-full rounded-lg shadow-lg" {...props}>
      {children}
    </div>
  );
}
