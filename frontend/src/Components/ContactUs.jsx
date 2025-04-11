import { useState } from "react";
import { motion } from "framer-motion";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [statusMessage, setStatusMessage] = useState("");
  const [statusType, setStatusType] = useState("success");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      setStatusMessage("Please fill out all fields.");
      setStatusType("error");
      return;
    }

    setLoading(true);
    setStatusMessage("");

    try {
      const res = await fetch(
        "https://prasad-shaswat-protifilo-fcs8.onrender.com/api/contact",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      const data = await res.json();

      if (res.ok) {
        setStatusMessage("Message sent successfully!");
        setStatusType("success");
        setFormData({ name: "", email: "", message: "" });
      } else {
        setStatusMessage(data.message || "Something went wrong.");
        setStatusType("error");
      }
    } catch (error) {
      setStatusMessage("Failed to send message. Try again later.");
      setStatusType("error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="min-h-screen flex flex-col items-center justify-center p-6 bg-gradient-to-br from-black via-zinc-900 to-black text-white relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute -top-40 -left-40 w-[500px] h-[500px] bg-purple-500 rounded-full opacity-30 blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -right-40 w-[500px] h-[500px] bg-blue-500 rounded-full opacity-30 blur-3xl animate-pulse"></div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="z-10 w-full max-w-xl p-8 bg-zinc-900 rounded-2xl shadow-lg"
      >
        <h2 className="text-3xl font-bold mb-6 text-center">Contact Us</h2>

        {statusMessage && (
          <div
            className={`mb-4 p-3 rounded ${
              statusType === "success" ? "bg-green-600" : "bg-red-600"
            }`}
          >
            {statusMessage}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block mb-1 font-semibold">Name</label>
            <input
              type="text"
              name="name"
              className="w-full p-3 rounded bg-zinc-800 text-white border border-zinc-700 focus:outline-none focus:ring-2 focus:ring-purple-500"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>

          <div>
            <label className="block mb-1 font-semibold">Email</label>
            <input
              type="email"
              name="email"
              className="w-full p-3 rounded bg-zinc-800 text-white border border-zinc-700 focus:outline-none focus:ring-2 focus:ring-purple-500"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div>
            <label className="block mb-1 font-semibold">Message</label>
            <textarea
              name="message"
              rows="5"
              className="w-full p-3 rounded bg-zinc-800 text-white border border-zinc-700 focus:outline-none focus:ring-2 focus:ring-purple-500"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
          </div>

          <motion.button
            type="submit"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            disabled={loading}
            className="w-full py-3 px-6 bg-purple-600 hover:bg-purple-700 rounded-lg text-white font-semibold transition-all duration-200 disabled:opacity-50"
          >
            {loading ? "Sending..." : "Send Message"}
          </motion.button>
        </form>
      </motion.div>
    </section>
  );
};

export default ContactUs;
