export default function Space(props: { number?: number }) {
  return <div className={`h-${props.number ?? 1 * 2}`} />;
}
