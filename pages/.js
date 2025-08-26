import { useRouter } from "next/router";

const demo = [
  { id: "101", title: "Cozy Caravan", description: "A lovely small caravan near the beach." },
  { id: "102", title: "Seaside Pitch", description: "A great spot with sea views." },
  { id: "103", title: "Woodland Retreat", description: "Quiet caravan in the woods." },
  { id: "104", title: "Mountain View", description: "Static home with mountain views." },
];

export default function ListingDetail() {
  const router = useRouter();
  const { id } = router.query;

  const item = demo.find((x) => x.id === id);

  if (!item) return <h1>Listing not found</h1>;

  return (
    <div style={{ padding: 20 }}>
      <h1>{item.title}</h1>
      <p>{item.description}</p>
    </div>
  );
}
