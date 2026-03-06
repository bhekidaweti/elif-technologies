"use client";

import { useForm } from "react-hook-form";
import { useState } from "react";

export default function Contact() {

  const { register, handleSubmit, reset } = useForm();
  const [status, setStatus] = useState("");

  const onSubmit = async (data:any) => {

    setStatus("Sending...");

    const res = await fetch("/api/contact", {
      method: "POST",
      body: JSON.stringify(data),
    });

    if (res.ok) {
      setStatus("Message sent successfully!");
      reset();
    } else {
      setStatus("Something went wrong.");
    }
  };

  return (
    <section className="max-w-xl mx-auto py-20">

      <h1 className="text-4xl font-bold mb-8">Contact Us</h1>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="space-y-6"
      >

        <input
          {...register("name")}
          placeholder="Your Name"
          className="w-full p-3 rounded bg-white/5 border border-white/10"
        />

        <input
          {...register("email")}
          placeholder="Email"
          className="w-full p-3 rounded bg-white/5 border border-white/10"
        />

        <textarea
          {...register("message")}
          placeholder="How can we help?"
          className="w-full p-3 rounded bg-white/5 border border-white/10"
        />

        <button
          type="submit"
          className="bg-gradient-to-r from-indigo-500 to-purple-500 px-6 py-3 rounded-xl"
        >
          Send Message
        </button>

      </form>

      <p className="mt-4 text-sm text-gray-400">{status}</p>

    </section>
  );
}