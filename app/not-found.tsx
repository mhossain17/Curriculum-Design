import Link from "next/link";

export default function NotFound() {
  return (
    <section className="mx-auto max-w-xl rounded-lg border border-slate-200 bg-white p-8 text-center">
      <h2 className="text-2xl font-bold text-slate-900">Page not found</h2>
      <p className="mt-2 text-sm text-slate-700">The requested curriculum page could not be located.</p>
      <Link className="mt-4 inline-block font-semibold underline" href="/">
        Return Home
      </Link>
    </section>
  );
}
