import HomeClient from "./home-client";

// Enable Incremental Static Regeneration (ISR): Cache and revalidate this page every 1 hour (3600 seconds)
export const revalidate = 3600;

async function getPrograms() {
  try {
    const backendUrl = process.env.NEXT_PUBLIC_API_URL || "http://localhost:5002";
    const res = await fetch(`${backendUrl}/api/programs/public`, {
      next: { revalidate: 3600 }
    });

    if (!res.ok) {
      console.error("Failed to fetch programs from backend during SSR/ISR. Status:", res.status);
      return [];
    }

    const data = await res.json();
    return data.programs || [];
  } catch (error) {
    console.error("Failed to retrieve programs in homepage server component:", error);
    return [];
  }
}

export default async function Page() {
  const programs = await getPrograms();
  return <HomeClient programs={programs} />;
}
