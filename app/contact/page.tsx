export default function Contact() {
  return (
    <section className="max-w-xl mx-auto py-20">
      <h1 className="text-4xl font-bold mb-6">Contact Us</h1>

      <form className="space-y-4">
        <input className="border w-full p-2" placeholder="Name" />
        <input className="border w-full p-2" placeholder="Email" />
        <textarea className="border w-full p-2" placeholder="Message" />
        <button className="bg-black text-white px-6 py-2">Send</button>
      </form>
    </section>
  );
}