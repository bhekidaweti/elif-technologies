import { Globe, Mail, Phone, ShieldCheck } from "lucide-react";

export default function Footer() {
  return (
    <footer className="mt-24 border-t border-white/10 backdrop-blur-xl bg-white/5 text-gray-400">
      <div className="max-w-6xl mx-auto px-6 py-12 grid md:grid-cols-3 gap-10">

        {/* Company */}
        <div>
          <h3 className="text-white font-semibold mb-4">Elif Technologies</h3>
          <p className="text-sm leading-relaxed">
            Scalable digital solutions for businesses that need reliable
            infrastructure, visibility, and long-term technical support.
          </p>
        </div>

        {/* Services */}
        <div>
          <h4 className="text-white font-semibold mb-4">Core Services</h4>
          <ul className="space-y-2 text-sm">
            <li className="flex items-center gap-2">
              <Globe size={16} /> Web Development
            </li>
            <li className="flex items-center gap-2">
              <ShieldCheck size={16} /> Hosting & Security
            </li>
            <li className="flex items-center gap-2">
              <Mail size={16} /> Ongoing Support Plans
            </li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="text-white font-semibold mb-4">Contact</h4>
          <ul className="space-y-2 text-sm">
            <li>Email: info@eliftech.co.za</li>
            <li>Strategy Calls Available</li>
            <li>Remote & South Africa Based</li>
          </ul>
        </div>
      </div>

      <div className="text-center py-6 border-t border-white/10 text-xs text-gray-500">
        © {new Date().getFullYear()} Elif Technologies (Pty) Ltd. All rights reserved.
      </div>
    </footer>
  );
}