import Link from "next/link";

const demo = [
  { id: "101", title: "Cozy Caravan" },
  { id: "102", title: "Seaside Pitch" },
];

export default function Listings() {
  return (
    <>
      <h1>Listings</h1>
      <ul>
        {demo.map(x => (
          <li key={x.id}>
            <Link href={/listings/${x.id}}><a>{x.title}</a></Link>
          </li>
        ))}
      </ul>
    </>
  );
}
