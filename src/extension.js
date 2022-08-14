export function loop(n) {
  let st = ""
  for (let step = 0; step < n; step++) {
    st = st + ' ' + step
  }
  return (
    <>
    {st}
    </>
  );
}