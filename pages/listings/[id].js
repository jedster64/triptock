import { useRouter } from "next/router";
import Link from "next/link";

const demo = [
  { id: "101", title: "Cozy Caravan", description: "A lovely caravan near the beach." },
  { id: "102", title: "Seaside Pitch", description: "Perfect spot with sea views." },
  { id: "103", title: "Woodland Retreat Caravan", description: "A quiet escape in the woods." },
  { id: "104", title: "Mountain View Static Home", description: "A static home with mountain views." },
];

export default function ListingDetail() {
  const router = useRouter();
  const { id } = router.query;

  if (!router.isReady) return null;

  const item = demo.find(x => String(x.id) === String(id));

  if (!item) {
    return <div style={{ padding: 20 }}><p>Listing not found.</p></div>;
  }

  return (
    <div style={{ padding: 20, fontFamily: "system-ui, Arial, sans-serif" }}>
      <h1>{item.title}</h1>
      <p>{item.description}</p>

      <Link href="/listings">
        <a style={{ display: "block", marginTop: 20 }}>⬅ Back to Listings</a>
      </Link>
    </div>
  );
}
