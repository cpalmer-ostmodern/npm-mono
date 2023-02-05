import colors from "../data/colors.json";

export default function Color({
  color,
}: {
  color: { name: string; hex: string };
}) {
  return (
    <div className="color-page" style={{ backgroundColor: color.hex }}>
      <h1>{color.name}</h1>
    </div>
  );
}

export async function getServerSideProps({ params }: any) {
  let color = params.color;
  return { props: color };
}
