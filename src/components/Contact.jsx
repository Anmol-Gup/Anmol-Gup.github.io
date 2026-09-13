import { useState } from "react";
import { CONTENT } from "../data/content";
import { MailIcon, PhoneIcon } from "../icons/Icons";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import SocialLinks from "./SocialLinks";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const phone = CONTENT.meta.phone.replace(/\s/g, "");

  function handleChange(e) {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    const subject = encodeURIComponent(`Portfolio contact from ${form.name}`);
    const body = encodeURIComponent(`${form.message}\n\n— ${form.name} (${form.email})`);
    window.location.href = `mailto:${CONTENT.contactFormEmail}?subject=${subject}&body=${body}`;
  }

  return (
    <section id="contact" className="py-[110px]">
      <div className="mx-auto max-w-[1080px] px-6">
        <SectionHeading num="06.">Get In Touch</SectionHeading>
        <Reveal as="p" className="mb-12 max-w-[560px] text-text-dim">
          Have an integration to build, an API to design, or an automation to untangle? I'd like to hear about it.
        </Reveal>

        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1fr_1.2fr]">
          <Reveal>
            <div className="mb-4 flex items-center gap-3 font-mono text-text-dim">
              <MailIcon className="h-5 w-5 flex-shrink-0" />
              <a href={`mailto:${CONTENT.meta.email}`} className="hover:text-accent">
                {CONTENT.meta.email}
              </a>
            </div>
            <div className="mb-4 flex items-center gap-3 font-mono text-text-dim">
              <PhoneIcon className="h-5 w-5 flex-shrink-0" />
              <a href={`tel:${phone}`} className="hover:text-accent">
                {CONTENT.meta.phone}
              </a>
            </div>
            <SocialLinks className="mt-4" />
          </Reveal>

          <Reveal as="form" onSubmit={handleSubmit} className="rounded-xl border border-border bg-surface p-7">
            <div className="mb-[18px]">
              <label htmlFor="cf-name" className="mb-2 block font-mono text-[0.8rem] text-text-dim">
                Name
              </label>
              <input
                id="cf-name"
                name="name"
                type="text"
                required
                autoComplete="name"
                value={form.name}
                onChange={handleChange}
                className="w-full rounded-md border border-border bg-bg px-3.5 py-[11px] text-[0.95rem] text-text focus:border-accent focus:outline-none"
              />
            </div>
            <div className="mb-[18px]">
              <label htmlFor="cf-email" className="mb-2 block font-mono text-[0.8rem] text-text-dim">
                Email
              </label>
              <input
                id="cf-email"
                name="email"
                type="email"
                required
                autoComplete="email"
                value={form.email}
                onChange={handleChange}
                className="w-full rounded-md border border-border bg-bg px-3.5 py-[11px] text-[0.95rem] text-text focus:border-accent focus:outline-none"
              />
            </div>
            <div className="mb-[18px]">
              <label htmlFor="cf-message" className="mb-2 block font-mono text-[0.8rem] text-text-dim">
                Message
              </label>
              <textarea
                id="cf-message"
                name="message"
                rows={5}
                required
                value={form.message}
                onChange={handleChange}
                className="w-full resize-y rounded-md border border-border bg-bg px-3.5 py-[11px] text-[0.95rem] text-text focus:border-accent focus:outline-none"
              />
            </div>
            <button
              type="submit"
              className="w-full rounded-md bg-accent px-[26px] py-[13px] font-mono text-[0.9rem] font-medium text-[#05130d] transition-all hover:-translate-y-px hover:bg-[#4fe0ac] hover:shadow-glow"
            >
              Send Message
            </button>
            <p className="mt-3 text-center text-[0.78rem] text-text-faint">
              Opens your email client, addressed to me — nothing is sent silently.
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
