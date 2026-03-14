export default function Title(props) {
  return (
    <h1 className="text-3xl font-bold text-slate-800 mb-8 text-center border-b-2 border-slate-200 pb-4">
      {props.children}
    </h1>
  );
}
