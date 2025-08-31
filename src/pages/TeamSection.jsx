import React, { useState } from 'react';
import { Github, Linkedin, Mail, ArrowRight, Sparkles } from 'lucide-react';

const teamMembers = [
  {
    name: 'Sufyan Arain',
    role: 'CEO & Founder',
    image: 'https://coretechio.com/images/suffii.png',
    social: { github: '#', linkedin: '#', email: 'https://founder.coretechio.com/' },
    bio: 'Visionary leader with 10+ years in tech.'
  },
  {
    name: 'Shahzaib Shykh',
    role: 'CEO & Co-Founder',
    image: 'https://coretechio.com/images/shaha.png',
    social: { github: '#', linkedin: '#', email: '#' },
    bio: 'Strategic thinker specializing in business development.'
  },
  {
    name: 'Jawwad Kamboh',
    role: 'CTO',
    image: 'https://coretechio.com/images/jaw.jpg',
    social: { github: '#', linkedin: '#', email: '#' },
    bio: 'Technical architect with expertise in scalable systems.'
  },
  {
    name: 'Dua Mirani',
    role: 'Developer Lead',
    image: 'https://coretechio.com/images/dua.jpg',
    social: { github: '#', linkedin: '#', email: '#' },
    bio: 'Creative problem-solver leading high-performance development.'
  }
];

const TeamSection = () => {
  const [hoveredCard, setHoveredCard] = useState(null);

  return (
    <section className="relative py-24 px-6 bg-gradient-to-r from-blue-900 via-slate-900 to-blue-900 overflow-hidden">
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 bg-blue-900/30 backdrop-blur-sm px-4 py-2 rounded-full mb-6 border border-blue-700/30">
            <Sparkles className="w-4 h-4 text-blue-300" />
            <span className="text-blue-200 text-sm font-medium">EXCEPTIONAL TEAM</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-blue-200">
            Meet Our <span className="text-orange-400">Team</span>
          </h2>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed font-light">
            A passionate group of innovators, developers, and strategists dedicated to bringing your vision to life.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="group relative bg-white rounded-2xl p-5 shadow-2xl hover:shadow-blue-500/10 transition-all duration-500 hover:-translate-y-2 border border-white/10 overflow-hidden"
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              {/* Profile Image */}
              <div className="relative mb-6 rounded-xl overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent z-10 rounded-xl"></div>
                <div className="h-64 overflow-hidden rounded-xl">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-700 ease-out"
                  />
                </div>
                
                {/* Role badge */}
                <div className="absolute bottom-4 left-4 bg-blue-600/90 backdrop-blur-sm text-white py-1 px-3 rounded-full text-sm font-medium z-20">
                  {member.role}
                </div>
              </div>
              
              {/* Member Info */}
              <div className="relative z-10 text-center">
                <h3 className="text-xl font-bold text-blue-800 mb-2 transition-colors duration-300">
                  {member.name}
                </h3>
                 {/* Social Links */}
                 <div className="flex justify-center gap-3 mt-4">
                  <a
                    href={member.social.github}
                    className="w-10 h-10 hover:bg-blue-700 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 group/icon border border-blue-700"
                  >
                    <Github className="w-5 h-5 text-blue-700 group-hover/icon:text-white transition-colors duration-300" />
                  </a>
                  <a
                    href={member.social.linkedin}
                    className="w-10 h-10 bg-blue-700 hover:bg-blue-700 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 group/icon border border-blue-700"
                  >
                    <Linkedin className="w-5 h-5 text-white group-hover/icon:text-white transition-colors duration-300" />
                  </a>
                  <a
                    href={member.social.email}
                    className="w-10 h-10 hover:bg-blue-700 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 group/icon border border-blue-700"
                  >
                    <Mail className="w-5 h-5 text-blue-700 group-hover/icon:text-white transition-colors duration-300" />
                  </a>
                </div>
                {/* Bio appears on hover */}
                <div className={`overflow-hidden transition-all duration-500 ${hoveredCard === index ? 'max-h-20 opacity-100' : 'max-h-0 opacity-0'}`}>
                  <p className="text-gray-700 text-sm mt-2 font-semibold">{member.bio}</p>
                </div>
                
               
              </div>
            </div>
          ))}
        </div>
        
        {/* CTA */}
        <div className="text-center mt-16">
          <div className="inline-flex flex-col sm:flex-row gap-6">
            <button className="relative group bg-gradient-to-r from-blue-600 to-indigo-700 hover:from-blue-700 hover:to-indigo-800 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl overflow-hidden">
              <span className="relative z-10 flex items-center justify-center gap-2">
                Join Our Team <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-700 to-indigo-900 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>
            <button className="relative group border border-white/20 bg-white/5 hover:border-white/30 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 hover:scale-105 hover:shadow-lg backdrop-blur-sm">
              <span className="relative z-10">Work With Us</span>
              <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>
          </div>
        </div>
      </div>

    </section>
  );
};

export default TeamSection;