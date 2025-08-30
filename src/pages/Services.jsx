import React from "react";
import { TrendingUp, Smartphone, Palette, Cloud, Megaphone, Briefcase } from "lucide-react";

const stats = [
  {
    icon: TrendingUp,
    label: "Web Development",
    description: "Custom websites and web applications built with modern technologies for optimal performance.",
    list: ["Responsive Design", " CMS Integration", "E-commerce Solutions"],
  },
  {
    icon: Smartphone,
    label: "Mobile App Development",
    description: "Native and cross-platform mobile applications for iOS and And",
    list: ["iOS & Android", "React Native", " API Integration"],
  },
  {
    icon: Palette,
    label: "UI/UX Design",
    description: "Beautiful, intuitive interfaces that enhance user experience and drive engagement. ",
    list: ["User Research", "Wireframing", "Prototyping"],
  },
  {
    icon: Cloud,
    label: "Cloud Solutions",
    description: "Scalable cloud infrastructure and services to power your business applications. ",
    list: ["AWS & Azure", "Cloud Migration", "DevOps Services"]
  },
  {
    icon: Megaphone,
    label: "Digital Marketing",
    description: "Data-driven marketing strategies to increase your online visibility and conversions. ",
    list: ["SEO Optimization", "Social Media", "PPC Campaigns"]
  },
  {
    icon: Briefcase,
    label: "IT Consulting",
    description: "Expert advice to align your technology strategy with business objectives. ",
    list: ["Technology Audit", "Digital Transformation", "Security Assessment"],

  },
];

const StatsSection = () => {
  return (
    <section className="py-30 px-6 bg-gradient-to-r from-blue-900 via-slate-900 to-blue-900 text-white relative overflow-hidden">
      <div className="relative max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Solutions That Drive{" "}
            <span className="text-orange-400">Success</span>
          </h2>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            We offer comprehensive digital solutions tailored to your business
            needs, helping you stay ahead in the competitive market.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="group text-center p-8 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-all duration-500 hover:scale-105"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-blue-500 to-teal-500 mb-6 group-hover:scale-110 transition-transform duration-300">
                <stat.icon className="w-8 h-8 text-white" />
              </div>

              <div className="text-xl font-semibold text-blue-200 mb-3">
                {stat.label}
              </div>

              <p className="text-blue-100/80 leading-relaxed">
                {stat.description}
              </p>
              <ul className="text-sm mt-6 flex flex-col space-y-2">
              <li className="">
                <span className="text-blue-600 text-sm mr-2">✔</span>
                <span className="text-gray-300">
                  {stat.list[0]}
                </span>
              </li>
              <li>
                <span className="text-blue-600 text-sm mr-2">✔</span>
                <span className="text-gray-300">
                {stat.list[1]}
                </span>
              </li>
              <li>
                <span className="text-blue-600 text-sm mr-2">✔</span>
                <span className="text-gray-300">
                {stat.list[2]}
                </span>
              </li>
            </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
