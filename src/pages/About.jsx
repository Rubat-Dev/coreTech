import React from "react";
import { Award, Users, Globe2, Workflow } from "lucide-react";
import team from "../assets/team.png"
const About = () => {
  const values = [
    {
      icon: Award,
      title: "Industry Recognition",
      description:
        "Winner of multiple awards for innovation and excellence in technology services.",
      color: "blue",
    },
    {
      icon: Users,
      title: "Expert Team",
      description:
        "50+ certified professionals with diverse technical and industry expertise.",
      color: "teal",
    },
    {
      icon: Globe2,
      title: "Global Reach",
      description:
        "Serving clients across North America, Europe, and Asia-Pacific regions.",
      color: "purple",
    },
    {
      icon: Workflow,
      title: "Proven Methodology",
      description:
        "Agile development processes that ensure quality and timely delivery.",
      color: "orange",
    },
  ];

  const colorMap = {
    blue: "from-blue-500 to-blue-600",
    teal: "from-teal-500 to-teal-600",
    purple: "from-purple-500 to-purple-600",
    orange: "from-orange-500 to-orange-600",
  };

  return (
    <section className="relative bg-gray-900 py-30">
      <div className="container mx-auto px-6 lg:px-16">
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-12">
          {/* Left Content */}
          <div className="flex flex-col gap-6">
            <h3 className="text-4xl font-semibold text-white my-4">
              Trusted <span className="text-orange-400">Technology</span>{" "}
              Partner Since 2020
            </h3>
            <p className="text-gray-300 mb-6 leading-relaxed">
              CoreTech <span className="text-blue-600">Innovations</span> was
              founded with a simple goal: to help businesses leverage technology
              to solve complex challenges and achieve their strategic
              objectives.
            </p>

            <ul className="space-y-4">
              <li className="flex items-start">
                <span className="text-blue-600 text-xl mr-3">✔</span>
                <span className="text-gray-300">
                  Tailored software solutions built for your business.
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 text-xl mr-3">✔</span>
                <span className="text-gray-300">
                  Scalable and secure cloud integration.
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 text-xl mr-3">✔</span>
                <span className="text-gray-300">
                  Innovative UI/UX for better customer engagement.
                </span>
              </li>
            </ul>

            <div className="flex mt-8 gap-10">
              <button className="bg-blue-500 font-bold text-white rounded-lg px-6 py-2 hover:bg-white hover:text-blue-700 duration-300 cursor-pointer hover:scale-[1.1]">
                Our Story
              </button>
              <button className="bg-white text-blue-700 font-bold rounded-lg px-6 py-2 hover:bg-blue-700 hover:text-white duration-300 cursor-pointer hover:scale-[1.1]">
                Our Process
              </button>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative">
            <img
              src={team}
              alt="About Us"
              className="rounded-3xl shadow-2xl "
            />
            <div className="absolute -bottom-5 -left-16 bg-orange-400 text-white p-5 max-md:hidden rounded-2xl shadow-xl duration-300 hover:scale-[1.1]">
              <h4 className="text-3xl font-bold">5+</h4>
              <p className="text-sm">Years of Experience</p>
            </div>
          </div>
        </div>

        {/* Core Values */}
        <div className="max-w-7xl mx-auto mt-20">
          <div className="text-center mb-20">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6">
              Our Core <span className="text-orange-400">Values</span>
            </h2>
            <p className="text-gray-300 text-xl max-w-3xl mx-auto leading-relaxed">
              The principles that drive everything we do and guide us in
              delivering exceptional results for our clients.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {values.map((value, idx) => (
              <div
                key={idx}
                className="group relative flex gap-6 p-8 rounded-2xl bg-gray-100 transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 hover:scale-[1.02]"
              >
                <div
                  className={`flex-shrink-0 w-16 h-16 rounded-xl bg-gradient-to-br ${
                    colorMap[value.color]
                  } flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg`}
                >
                  <value.icon className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 transition-colors duration-300 group-hover:text-blue-800">
                    {value.title}
                  </h3>
                  <p className="text-gray-600 text-lg leading-relaxed transition-colors duration-300 group-hover:text-gray-800">
                    {value.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
