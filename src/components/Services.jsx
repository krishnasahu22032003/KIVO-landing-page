import React from "react";
import { Brain, Bot, Code2, Server, ShieldCheck, Sparkles } from "lucide-react";

const services = [
  {
    title: "Cognitive Automation",
    description: "AI that understands, learns, and adapts to your workflow — not the other way around.",
    icon: <Brain className="w-10 h-10 text-indigo-400" />,
  },
  {
    title: "Autonomous Agents",
    description: "Deploy self-operating agents that intelligently handle complex tasks and interactions.",
    icon: <Bot className="w-10 h-10 text-pink-400" />,
  },
  {
    title: "Secure AI Ops",
    description: "Enterprise-grade privacy & security with encrypted learning and neural sandboxing.",
    icon: <ShieldCheck className="w-10 h-10 text-yellow-400" />,
  },
  {
    title: "Custom AI Pipelines",
    description: "Build fully customizable neural pipelines tailored for your business logic and goals.",
    icon: <Code2 className="w-10 h-10 text-green-400" />,
  },
  {
    title: "Realtime Insights",
    description: "Get instant feedback loops powered by streaming data, predictions, and behavior tracking.",
    icon: <Server className="w-10 h-10 text-teal-400" />,
  },
  {
    title: "Magical UI Integration",
    description: "Bring intelligence directly to your user interface with glowing, interactive neural overlays.",
    icon: <Sparkles className="w-10 h-10 text-fuchsia-400" />,
  },
];

const Services = () => {
  return (
    <section className="relative z-10 w-full px-6 py-28 md:px-20 bg-gradient-to-br from-[#0d0f1c] via-[#0c1124] to-[#090c18] text-white overflow-hidden">
      {/* Glow orbs */}
      <div className="absolute top-[-100px] left-[-120px] w-[300px] h-[300px] bg-pink-500/20 blur-3xl rounded-full animate-pulse -z-10" />
      <div className="absolute bottom-[-100px] right-[-80px] w-[400px] h-[400px] bg-indigo-500/20 blur-3xl rounded-full animate-pulse -z-10" />

      <div className="max-w-7xl mx-auto text-center mb-16">
        <h2 className="text-4xl md:text-6xl font-extrabold bg-gradient-to-r from-indigo-400 via-fuchsia-500 to-pink-500 text-transparent bg-clip-text tracking-tight">
          Our AI Services
        </h2>
        <p className="text-gray-400 mt-4 max-w-2xl mx-auto text-lg">
          Unlock transformative power with a suite of intelligent services designed for the future.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto">
        {services.map((service, idx) => (
          <div
            key={idx}
            className="group p-6 rounded-3xl bg-white/5 border border-white/10 shadow-[0_10px_40px_rgba(0,0,0,0.3)] hover:shadow-[0_20px_60px_rgba(0,0,0,0.4)] hover:bg-white/10 backdrop-blur transition duration-300 hover:-translate-y-2"
          >
            <div className="mb-4">{service.icon}</div>
            <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-indigo-300 transition">
              {service.title}
            </h3>
            <p className="text-gray-400 text-sm">{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
