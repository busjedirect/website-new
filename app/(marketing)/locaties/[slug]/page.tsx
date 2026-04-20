export default async function LocatiePage(
  props: PageProps<"/locaties/[slug]">
) {
  const { slug } = await props.params;

  return (
    <main className="p-8">
      <h1 className="text-2xl font-semibold">Locatie: {slug}</h1>
      <p className="mt-2 text-gray-500">Details voor deze locatie.</p>
    </main>
  );
}
