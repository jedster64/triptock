import { useRouter } from "next/router";

const demo = [
  { id: "101", title: "Cozy Caravan", description: "A lovely caravan near the beach." },
  { id: "102", title: "Seaside Pitch", description: "A perfect pitch with sea views." },
  { id: "103", title: "Woodland Retreat", description: "A quiet spot in the woods." },
  { id: "104", title: "Mountain View Static", description: "A static home with mountain views." },
];

export default function ListingPage() {
  const router = useRouter();
  const { id } = router.query;
  const item = demo.find((x) => x.id === id);

  if (!item) return <p>Listing not found.</p>;

  return (
    <div style={{ padding: 20 }}>
      <h1>{item.title}</h1>
      <p>{item.description}</p>
      <a href="/listings" style={{ display: "block", marginTop: "20px" }}>
        ← Back to Listings
      </a>
    </div>
  );
}
// test
