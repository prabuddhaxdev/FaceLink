import Link from "next/link";
import { ArrowRight } from "lucide-react";

export const CTA = () => {
  return (
    <section className="py-24 relative overflow-hidden bg-dark-2">
      <div className="absolute inset-0 bg-gradient-to-b from-dark-2 to-dark-1" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[500px] bg-[#0FB563]/10 blur-[120px] rounded-full pointer-events-none" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto relative">
          <div className="absolute inset-0 bg-gradient-to-r from-[#0FB563]/20 to-[#20d67b]/20 rounded-[3rem] blur-xl transform scale-95" />
          
          <div className="relative text-center bg-dark-3/80 backdrop-blur-xl border border-white/10 p-12 md:p-24 rounded-[3rem] shadow-2xl overflow-hidden">
            <div className="absolute top-0 right-0 -mr-20 -mt-20 w-64 h-64 bg-[#0FB563]/20 rounded-full blur-[80px]" />
            <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-64 h-64 bg-[#20d67b]/20 rounded-full blur-[80px]" />
            
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight relative z-10">
              Ready to transform your <br/> virtual meetings?
            </h2>
            <p className="text-gray-400 text-lg md:text-xl mb-12 max-w-2xl mx-auto relative z-10">
              Join thousands of teams who have already made the switch to FaceLink. Get started today for free, no credit card required.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-5 relative z-10">
              <Link href="/sign-up" className="w-full sm:w-auto px-10 py-4 bg-[#0FB563] hover:bg-[#0FB563]/90 text-white rounded-full font-bold text-lg transition-all hover:scale-105 hover:shadow-[0_0_40px_rgba(15,181,99,0.5)] flex items-center justify-center gap-2 group">
                Get Started Now
                <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link href="/sign-in" className="w-full sm:w-auto px-10 py-4 bg-white/5 hover:bg-white/10 text-white rounded-full font-bold text-lg transition-all border border-white/10 flex items-center justify-center gap-2 backdrop-blur-sm">
                Sign In
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
