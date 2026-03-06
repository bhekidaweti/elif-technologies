import Link from "next/link";

export default function CTA() {
  return (
    <div className="flex justify-center">
      <Link
        href="/book"
        className="bg-gradient-to-r from-indigo-500 to-purple-500 px-8 py-4 rounded-xl font-medium hover:opacity-90 transition"
        >
        Get a Free Consultation
      </Link>
    </div>
  );
}