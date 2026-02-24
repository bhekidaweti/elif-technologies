import Link from "next/link";

export default function CTA() {
  return (
    <div className="flex justify-center">
      <Link
        href="/contact"
        className="bg-black text-white px-8 py-3 rounded-lg font-semibold hover:opacity-80 transition"
      >
        Get a Free Consultation
      </Link>
    </div>
  );
}