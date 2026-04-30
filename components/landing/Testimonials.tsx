export const Testimonials = () => {
  const testimonials = [
    {
      quote: "FaceLink has completely transformed how our remote team operates. The video quality is unmatched and we never experience lag.",
      author: "Sarah Jenkins",
      role: "CTO at TechFlow",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&auto=format&fit=crop&q=80"
    },
    {
      quote: "The security features are exactly what we needed for our healthcare consultations. E2E encryption gives us absolute peace of mind.",
      author: "Dr. Michael Chen",
      role: "Director, HealthPlus",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&auto=format&fit=crop&q=80"
    },
    {
      quote: "We switched from our previous provider to FaceLink last month and the difference is night and day. The interface is clean and intuitive.",
      author: "Emily Rodriguez",
      role: "Product Manager",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&auto=format&fit=crop&q=80"
    }
  ];

  return (
    <section className="py-24 bg-dark-1 relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-block px-4 py-1.5 rounded-full bg-white/5 border border-white/10 mb-6">
            <span className="text-brand font-semibold text-sm tracking-wider uppercase">Testimonials</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Loved by teams <span className="text-brand">worldwide</span>
          </h2>
          <p className="text-gray-400 text-lg">
            Don't just take our word for it. Here's what our users have to say about their experience with FaceLink.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, idx) => (
            <div key={idx} className="p-8 rounded-3xl bg-dark-2 border border-white/5 relative group hover:-translate-y-2 transition-transform duration-300 hover:shadow-[0_10px_40px_rgba(0,0,0,0.5)]">
              <div className="text-brand text-6xl font-serif absolute top-4 right-6 opacity-20 group-hover:opacity-40 transition-opacity">"</div>
              <p className="text-gray-300 mb-8 relative z-10 text-lg leading-relaxed italic">
                "{t.quote}"
              </p>
              <div className="flex items-center gap-4">
                <div className="relative">
                  <div className="absolute inset-0 rounded-full bg-brand blur-sm opacity-50 group-hover:opacity-100 transition-opacity" />
                  <img src={t.image} alt={t.author} className="w-14 h-14 rounded-full object-cover border-2 border-dark-2 relative z-10" />
                </div>
                <div>
                  <h4 className="text-white font-bold">{t.author}</h4>
                  <p className="text-sm text-brand font-medium">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
