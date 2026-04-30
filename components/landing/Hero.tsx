import Link from "next/link";
import { Video, Users, ArrowRight, Shield, Zap } from "lucide-react";

export const Hero = () => {
  return (
    <section className="relative pt-24 pb-20 lg:pt-28 lg:pb-32 overflow-hidden min-h-screen flex items-center">
      {/* Background glow effects */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-brand/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-brand/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto text-center">

          <h1 className="text-5xl md:text-6xl lg:text-8xl font-extrabold text-white tracking-tight mb-8 leading-[1.1]">
            Connect Face to Face<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand to-brand-light drop-shadow-sm">
              Anywhere in the World.
            </span>
          </h1>

          <p className="text-lg md:text-xl text-gray-400 mb-12 max-w-2xl mx-auto leading-relaxed">
            Experience crystal-clear video conferencing with FaceLink. Built for modern teams to collaborate effortlessly with zero latency, HD quality, and enterprise-grade security.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/sign-up" className="w-full sm:w-auto px-8 py-4 bg-brand hover:bg-brand/90 text-white rounded-full font-semibold text-lg transition-all hover:scale-105 hover:shadow-[0_0_30px_rgba(0,98,255,0.4)] flex items-center justify-center gap-2 group">
              Start for free
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link href="#features" className="w-full sm:w-auto px-8 py-4 bg-white/5 hover:bg-white/10 text-white rounded-full font-semibold text-lg transition-all border border-white/10 flex items-center justify-center gap-2 backdrop-blur-sm">
              <Video className="w-5 h-5 text-brand" />
              See how it works
            </Link>
          </div>

          {/* Stats / Trust marks */}
          <div className="mt-24 grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-12 border-t border-white/10 pt-12">
            {[
              { label: "Active Users", value: "10K+", icon: Users },
              { label: "Uptime", value: "99.9%", icon: Zap },
              { label: "Secure", value: "E2E", icon: Shield },
              { label: "Countries", value: "150+", icon: Video },
            ].map((stat, i) => (
              <div key={i} className="flex flex-col items-center justify-center space-y-3 group cursor-default">
                <div className="p-3 bg-white/5 rounded-2xl group-hover:bg-brand/10 group-hover:scale-110 transition-all duration-300">
                  <stat.icon className="w-6 h-6 text-brand" />
                </div>
                <span className="text-3xl md:text-4xl font-bold text-white tracking-tight">{stat.value}</span>
                <span className="text-sm text-gray-500 font-medium uppercase tracking-wider">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
