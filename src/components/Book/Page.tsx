export default function Wrapper(props) {
  const { left, right, page, onClick, children } = props;
  const marginLeft = left ? "mr-0 sm:mr-0" : "mr-10 sm:mr-14";
  const marginRight = right ? "ml-0 sm:ml-0" : "ml-10 sm:ml-14";

  return (
    <div
      className={`w-[90%] max-w-[42rem] min-w-[320px] mx-auto my-8 px-10 py-12 sm:px-14 sm:py-16 min-h-[620px] prose prose-lg prose-slate bg-[#f5f0e8] text-slate-800 shadow-[0_2px_8px_rgba(0,0,0,0.08),0_8px_24px_rgba(0,0,0,0.06)] rounded-sm border border-stone-200/80 ${marginLeft} ${marginRight}`}
      style={{ position: "relative" }}
    >
      {children}
      {left && (
        <div
          onClick={onClick}
          style={{
            position: "absolute",
            inset: 0,
            right: "50%",
            cursor: "pointer",
          }}
        />
      )}
      {right && (
        <div
          onClick={onClick}
          style={{
            position: "absolute",
            inset: 0,
            left: "50%",
            cursor: "pointer",
          }}
        />
      )}
      {left && (
        <div style={{ position: "absolute", bottom: 20, left: 30 }}>{page}</div>
      )}
      {right && (
        <div style={{ position: "absolute", bottom: 20, right: 30 }}>
          {page}
        </div>
      )}
    </div>
  );
}
