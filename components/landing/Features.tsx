import { MonitorPlay, Shield, Zap, Globe, MessageSquare, MonitorUp } from "lucide-react";

export const Features = () => {
  const features = [
    {
      title: "Crystal Clear Video",
      description: "Experience ultra-HD video quality with adaptive resolution that works perfectly even on low-bandwidth connections.",
      icon: MonitorPlay,
    },
    {
      title: "Zero Latency",
      description: "Our globally distributed network ensures real-time communication without the annoying delays and stutters.",
      icon: Zap,
    },
    {
      title: "End-to-End Encryption",
      description: "Your meetings are secured with military-grade encryption. What happens in the meeting, stays in the meeting.",
      icon: Shield,
    },
    {
      title: "Global Reach",
      description: "Connect with anyone, anywhere in the world. Optimized routing guarantees the best possible connection.",
      icon: Globe,
    },
    {
      title: "Interactive Chat",
      description: "Built-in rich text chat, file sharing, and real-time reactions to keep the conversation engaging.",
      icon: MessageSquare,
    },
    {
      title: "Screen Sharing",
      description: "Share your entire screen, specific windows, or browser tabs with high frame rates and just one click.",
      icon: MonitorUp,
    },
  ];

  return (
    <section id="features" className="py-24 relative z-10 bg-dark-2">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-block px-4 py-1.5 rounded-full bg-white/5 border border-white/10 mb-6">
            <span className="text-[#0FB563] font-semibold text-sm tracking-wider uppercase">Powerful Features</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Everything you need for <br/>
            <span className="text-[#0FB563]">perfect meetings</span>
          </h2>
          <p className="text-gray-400 text-lg">
            Powerful features designed to make your virtual meetings feel just as natural and productive as being in the same room.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, idx) => (
            <div
              key={idx}
              className="p-8 rounded-3xl bg-dark-1 border border-white/5 hover:border-[#0FB563]/30 transition-all duration-300 hover:-translate-y-2 group hover:shadow-[0_10px_40px_rgba(15,181,99,0.1)] relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#0FB563]/5 rounded-full blur-[50px] group-hover:bg-[#0FB563]/10 transition-colors" />

              <div className="relative z-10">
                <div className="w-14 h-14 rounded-2xl bg-dark-3 border border-white/10 flex items-center justify-center mb-6 group-hover:bg-[#0FB563] group-hover:border-[#0FB563] transition-all duration-300">
                  <feature.icon className="w-7 h-7 text-[#0FB563] group-hover:text-white transition-colors duration-300" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">{feature.title}</h3>
                <p className="text-gray-400 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
