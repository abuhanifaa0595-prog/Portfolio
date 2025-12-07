import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, CheckCircle2 } from 'lucide-react';

const Contact: React.FC = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSent, setIsSent] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formState.name || !formState.email || !formState.message) return;

    setIsSubmitting(true);
    // Simulate network request
    await new Promise(resolve => setTimeout(resolve, 1500));
    setIsSubmitting(false);
    setIsSent(true);
    setFormState({ name: '', email: '', message: '' });
    
    // Reset success message after 5 seconds
    setTimeout(() => setIsSent(false), 5000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section className="py-24 px-4 md:px-12 w-full max-w-7xl mx-auto min-h-screen flex flex-col justify-center">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
        
        {/* Contact Info Side */}
        <motion.div
           initial={{ opacity: 0, x: -50 }}
           whileInView={{ opacity: 1, x: 0 }}
           viewport={{ once: true }}
        >
          <h2 className="font-display text-5xl md:text-7xl font-bold mb-8">Let's work together.</h2>
          <p className="text-xl text-zinc-400 mb-12 max-w-lg">
            I'm currently available for new projects and freelance opportunities. 
            Have a project in mind? Reach out.
          </p>

          <div className="space-y-6">
            <a href="mailto:hello@hanifa.dev" className="block text-2xl hover:text-zinc-400 transition-colors">hello@hanifa.dev</a>
            <div className="flex gap-6">
              <a href="#" className="text-zinc-500 hover:text-white transition-colors uppercase tracking-widest text-sm">LinkedIn</a>
              <a href="#" className="text-zinc-500 hover:text-white transition-colors uppercase tracking-widest text-sm">Twitter</a>
              <a href="#" className="text-zinc-500 hover:text-white transition-colors uppercase tracking-widest text-sm">Instagram</a>
            </div>
          </div>

          <div className="mt-16 p-6 border border-white/10 rounded-2xl bg-zinc-900/30">
             <h3 className="text-lg font-bold mb-2 flex items-center gap-2">
               <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"/>
               Status
             </h3>
             <p className="text-zinc-400">Open to select opportunities for Q4 2024.</p>
          </div>
        </motion.div>

        {/* Contact Form Side */}
        <motion.div
           initial={{ opacity: 0, x: 50 }}
           whileInView={{ opacity: 1, x: 0 }}
           viewport={{ once: true }}
           className="relative"
        >
          <div className="w-full bg-zinc-900/50 backdrop-blur-sm border border-white/10 rounded-3xl p-8 md:p-10 shadow-2xl">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <label htmlFor="name" className="text-sm font-medium text-zinc-400 ml-1">Name</label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  value={formState.name}
                  onChange={handleChange}
                  className="w-full bg-zinc-950/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-white/30 focus:bg-zinc-900 transition-all duration-300"
                  placeholder="John Doe"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium text-zinc-400 ml-1">Email</label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  value={formState.email}
                  onChange={handleChange}
                  className="w-full bg-zinc-950/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-white/30 focus:bg-zinc-900 transition-all duration-300"
                  placeholder="john@example.com"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium text-zinc-400 ml-1">Message</label>
                <textarea
                  name="message"
                  id="message"
                  rows={4}
                  value={formState.message}
                  onChange={handleChange}
                  className="w-full bg-zinc-950/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-white/30 focus:bg-zinc-900 transition-all duration-300 resize-none"
                  placeholder="Tell me about your project..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting || isSent}
                className={`w-full py-4 rounded-xl font-medium text-black transition-all duration-300 flex items-center justify-center gap-2 ${
                  isSent ? 'bg-green-500 hover:bg-green-400' : 'bg-white hover:bg-zinc-200'
                }`}
              >
                {isSubmitting ? (
                  <div className="w-5 h-5 border-2 border-black/30 border-t-black rounded-full animate-spin" />
                ) : isSent ? (
                  <>
                    <CheckCircle2 size={20} />
                    Message Sent
                  </>
                ) : (
                  <>
                    Send Message
                    <Send size={18} />
                  </>
                )}
              </button>
            </form>
          </div>
          
          {/* Decorative Blob */}
          <div className="absolute -top-10 -right-10 w-64 h-64 bg-zinc-800/20 blur-[80px] rounded-full pointer-events-none -z-10" />
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;