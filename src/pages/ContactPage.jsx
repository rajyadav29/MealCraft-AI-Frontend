import { HiMail, HiPhone, HiLocationMarker } from "react-icons/hi";

const ContactPage = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="relative overflow-hidden py-24 bg-slate-950">
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255,255,255,0.08) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.08) 1px, transparent 1px)
            `,
            backgroundSize: "60px 60px",
          }}
        />

        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-teal-500/20 blur-[150px] rounded-full" />

        <div className="relative z-10 max-w-6xl mx-auto px-4 text-center">
          <div className="inline-flex px-4 py-2 rounded-full border border-teal-500/30 bg-teal-500/10 mb-6">
            <span className="text-teal-400 font-medium">
              CONTACT US
            </span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold text-white">
            Let's Start a
            <br />
            <span className="bg-gradient-to-r from-teal-400 to-cyan-400 bg-clip-text text-transparent">
              Conversation
            </span>
          </h1>

          <p className="mt-6 text-slate-400 text-lg max-w-2xl mx-auto">
            Questions, feedback, or partnership opportunities?
            We'd love to hear from you.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="bg-slate-50 dark:bg-slate-950 py-16 px-4">
        <div className="max-w-5xl mx-auto space-y-8">

          {/* Contact Card */}
          <div className="bg-white dark:bg-slate-900 rounded-3xl p-8 border border-slate-200 dark:border-slate-800 hover:border-teal-500/40 hover:shadow-lg hover:shadow-teal-500/10 transition-all duration-300">

            <h2 className="text-3xl font-bold mb-8">
              Reach Us Directly
            </h2>

            <div className="grid md:grid-cols-3 gap-8">

              <div className="flex gap-4">
                <HiPhone className="text-3xl text-teal-500" />
                <div>
                  <p className="text-sm text-slate-500">PHONE</p>
                  <p className="font-semibold">+91 9876512345</p>
                </div>
              </div>

              <div className="flex gap-4">
                <HiMail className="text-3xl text-teal-500" />
                <div>
                  <p className="text-sm text-slate-500">EMAIL</p>
                  <p className="font-semibold">
                    support@mealcraftai.com
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <HiLocationMarker className="text-3xl text-teal-500" />
                <div>
                  <p className="text-sm text-slate-500">ADDRESS</p>
                  <p className="font-semibold">
                    Lucknow, Uttar Pradesh, India
                  </p>
                </div>
              </div>

            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white dark:bg-slate-900 rounded-3xl p-8 border border-slate-200 dark:border-slate-800 hover:border-teal-500/40 hover:shadow-lg hover:shadow-teal-500/10 transition-all duration-300">

            <h2 className="text-4xl font-bold mb-2">
              Send a Message
            </h2>

            <p className="text-slate-500 mb-8">
              Have a question or feedback? We'd love to hear from you.
            </p>

            <form className="space-y-6">

              <div className="grid md:grid-cols-2 gap-6">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full p-4 rounded-xl border border-slate-300 dark:border-slate-700 bg-transparent"
                />

                <input
                  type="email"
                  placeholder="Email Address"
                  className="w-full p-4 rounded-xl border border-slate-300 dark:border-slate-700 bg-transparent"
                />
              </div>

              <input
                type="text"
                placeholder="Subject"
                className="w-full p-4 rounded-xl border border-slate-300 dark:border-slate-700 bg-transparent"
              />

              <textarea
                rows="6"
                placeholder="Write your message..."
                className="w-full p-4 rounded-xl border border-slate-300 dark:border-slate-700 bg-transparent"
              />

              <button
                type="submit"
                className="px-8 py-4 rounded-xl bg-teal-500 hover:bg-teal-600 text-white font-semibold transition"
              >
                Send Message
              </button>

            </form>
          </div>

        </div>
      </section>
    </>
  );
};

export default ContactPage;