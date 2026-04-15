// import React from 'react';
// import { BookOpen, Users, Cpu, Briefcase, GraduationCap, Code, HeadphonesIcon, Compass, BarChart, Shield, LayoutGrid } from 'lucide-react';

// const services = [
//   { id: '01', title: 'Curriculum Design', icon: <BookOpen />, desc: 'End-to-end development of custom training programs combining academic rigor and industry demand.' },
//   { id: '02', title: 'Instructor Training', icon: <Users />, desc: 'Deep-dive pedagogy and technical enablement for educational professionals and faculty.' },
//   { id: '03', title: 'Technical Support', icon: <HeadphonesIcon />, desc: 'Comprehensive digital infrastructure management and ongoing troubleshooting.' },
//   { id: '04', title: 'Corporate Training', icon: <Briefcase />, desc: 'Specialized upskilling modules tailored to bridge capability gaps within enterprise teams.' },
//   { id: '05', title: 'AI Productivity', icon: <Cpu />, desc: 'Practical workflows demonstrating how to leverage artificial intelligence to multiply output.' },
//   { id: '06', title: 'Student Programs', icon: <GraduationCap />, desc: 'Foundational digital literacy and technical awareness initiatives for youth.' },
//   { id: '07', title: 'Dev Bootcamps', icon: <Code />, desc: 'Intensive, fully-immersive software development tracks designed to forge junior engineers.' },
// ];

// const modules = [
//   { title: "Leadership", icon: <Compass />, color: "bg-blue-50 text-blue-600", desc: "Equips managers with frameworks to lead high-performing technical teams." },
//   { title: "Project Management (Agile)", icon: <LayoutGrid />, color: "bg-brand-orange/10 text-brand-orange", desc: "Mastery of Scrum, Kanban, and iterative delivery methodologies." },
//   { title: "Digital Strategy", icon: <BarChart />, color: "bg-green-50 text-green-600", desc: "Guiding executives to navigate and lead digital transformations." },
//   { title: "Cybersecurity", icon: <Shield />, color: "bg-red-50 text-red-600", desc: "Securing modern cloud infrastructure and understanding threat vectors." },
// ];

// export default function ServicesPage() {
//   return (
//     <div className="flex flex-col bg-slate-50 min-h-screen">
      
//       {/* Page Header */}
//       <section className="bg-brand-dark text-white py-24 relative overflow-hidden">
//         <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-brand-orange/20 rounded-full blur-[100px] pointer-events-none"></div>
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 mt-10">
//           <h1 className="text-5xl md:text-6xl font-bold mb-6">Our Services & Curriculum</h1>
//           <p className="text-xl text-slate-300 max-w-2xl leading-relaxed">
//             Comprehensive learning solutions deliberately designed to elevate human capital in an increasingly automated world.
//           </p>
//         </div>
//       </section>

//       {/* Services Grid */}
//       <section className="py-24 relative overflow-hidden">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
//           <div className="mb-16">
//             <h2 className="text-sm font-bold text-brand-orange uppercase tracking-wider mb-2">Capabilities</h2>
//             <h3 className="text-3xl md:text-4xl font-bold text-brand-dark tracking-tight">Solutions We Offer</h3>
//           </div>

//           <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
//             {services.map((service, index) => (
//               <div key={index} className="bg-white p-8 rounded-2xl border border-slate-100 hover:border-brand-orange/50 hover:shadow-xl transition-all duration-300 group cursor-pointer">
//                 <div className="flex justify-between items-start mb-6">
//                   <div className="w-14 h-14 rounded-xl bg-orange-50 text-brand-orange flex flex-col items-center justify-center group-hover:scale-110 group-hover:bg-brand-orange group-hover:text-white transition-all duration-300">
//                     {React.cloneElement(service.icon, { size: 28, strokeWidth: 1.5 })}
//                   </div>
//                   <span className="text-sm font-bold text-slate-200 group-hover:text-orange-200 text-right">{service.id}</span>
//                 </div>
//                 <h4 className="text-xl font-bold text-brand-dark mb-3 group-hover:text-brand-orange transition-colors">{service.title}</h4>
//                 <p className="text-slate-500 text-sm leading-relaxed">{service.desc}</p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Curriculum Section */}
//       <section className="py-24 bg-white relative border-t border-slate-100">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="text-center max-w-3xl mx-auto mb-16">
//             <h2 className="text-sm font-bold text-brand-orange uppercase tracking-wider mb-2">Core Competencies</h2>
//             <h3 className="text-3xl md:text-5xl font-bold text-brand-dark">Curriculum Modules</h3>
//             <p className="text-slate-600 mt-6 text-lg">
//               Our flagship training modules are meticulously updated to reflect real-world industry requirements. 
//             </p>
//           </div>
          
//           <div className="grid md:grid-cols-2 gap-8">
//             {modules.map((mod, idx) => (
//               <div key={idx} className="group p-8 rounded-3xl border border-slate-100 hover:border-brand-orange/50 hover:shadow-2xl hover:shadow-orange-500/10 transition-all duration-300 bg-slate-50 relative overflow-hidden flex items-start gap-6">
//                 <div className={`w-20 h-20 rounded-2xl flex items-center justify-center shrink-0 relative z-10 transition-transform group-hover:scale-110 group-hover:-rotate-3 shadow-sm ${mod.color}`}>
//                   {React.cloneElement(mod.icon, { size: 36 })}
//                 </div>
//                 <div>
//                   <h4 className="text-2xl font-bold text-brand-dark mb-3 relative z-10">{mod.title}</h4>
//                   <p className="text-slate-600 relative z-10 leading-relaxed">{mod.desc}</p>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// }

import React from 'react';
import { motion } from 'framer-motion';
import { 
  BookOpen, 
  Users, 
  Building2, 
  GraduationCap, 
  Target, 
  Heart, 
  TrendingUp,
  CheckCircle2,
  Laptop,
  Presentation,
  Briefcase,
  ArrowRight,
  Clock,
  Award,
  Sparkles
} from 'lucide-react';
import { Link } from 'react-router-dom';

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-50px" },
  transition: { duration: 0.6, ease: "easeOut" }
};

export default function ProgramsPage() {
  const services = [
    {
      icon: <BookOpen className="w-5 h-5" />,
      title: "Curriculum Design & Delivery",
      desc: "Customized curriculum development aligned with industry standards and organizational goals."
    },
    {
      icon: <Users className="w-5 h-5" />,
      title: "Instructor Training (ToT)",
      desc: "Train-the-trainer programs empowering educators with modern teaching methodologies."
    },
    {
      icon: <Building2 className="w-5 h-5" />,
      title: "Technical Support for Learning Platforms",
      desc: "Comprehensive support for LMS implementation, maintenance, and optimization."
    },
    {
      icon: <Laptop className="w-5 h-5" />,
      title: "Video Lectures & E-learning Materials",
      desc: "High-quality digital content creation for flexible, self-paced learning experiences."
    },
    {
      icon: <Target className="w-5 h-5" />,
      title: "Hands-on Projects & Practical Exercises",
      desc: "Real-world projects that build practical skills and portfolio-ready work samples."
    },
    {
      icon: <Heart className="w-5 h-5" />,
      title: "Life Skills Training",
      desc: "Essential soft skills development for personal and professional growth."
    },
    {
      icon: <TrendingUp className="w-5 h-5" />,
      title: "Capacity Building Trainings",
      desc: "Organizational development programs to strengthen institutional capabilities."
    }
  ];

  const curriculumModules = [
    {
      title: "Leadership & Organizational Development",
      desc: "Equips managers with frameworks to lead high-performing technical teams and drive organizational change.",
      category: "Management"
    },
    {
      title: "Project Management & Agile Practices",
      desc: "Mastery of Scrum, Kanban, and iterative delivery methodologies for successful project execution.",
      category: "Management"
    },
    {
      title: "Digital Strategy & Transformation",
      desc: "Guiding executives and organizations to navigate and lead successful digital transformations.",
      category: "Strategy"
    },
    {
      title: "Cybersecurity & Data Privacy",
      desc: "Securing modern cloud infrastructure, understanding threat vectors, and ensuring data protection.",
      category: "Technical"
    },
    // {
    //   title: "Emerging Technologies for Impact",
    //   desc: "Exploring AI, blockchain, IoT, and other emerging technologies for business and social impact.",
    //   category: "Technical"
    // },
    {
      title: "Customized Organizational Solutions",
      desc: "Tailored training programs designed to address specific organizational challenges and goals.",
      category: "Custom"
    },
    {
      title: "Entrepreneurship & Business Development",
      desc: "From ideation to launch - learn business planning, fundraising, marketing, and scaling your venture.",
      category: "Business"
    },
    {
      title: "Financial Literacy & Accounting",
      desc: "Essential financial skills including budgeting, bookkeeping, financial analysis, and investment basics.",
      category: "Business"
    },
    {
      title: "Communication & Public Speaking",
      desc: "Develop confidence in presenting ideas, leading meetings, and communicating effectively in professional settings.",
      category: "Soft Skills"
    },
    {
      title: "Customer Service Excellence",
      desc: "Build strong customer relationships through effective communication and problem-solving techniques.",
      category: "Soft Skills"
    }
  ];

  const trainingFormats = [
    {
      icon: <Presentation className="w-6 h-6" />,
      title: "Seminars & Workshops",
      desc: "Interactive sessions designed for knowledge sharing and skill development."
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: "Practical Assignments & Projects",
      desc: "Hands-on exercises that reinforce learning through real-world application."
    },
    {
      icon: <Laptop className="w-6 h-6" />,
      title: "Video Lectures & Tutorials",
      desc: "Self-paced digital content accessible anytime, anywhere."
    },
    {
      icon: <BookOpen className="w-6 h-6" />,
      title: "Technical Guides & Resources",
      desc: "Comprehensive documentation and reference materials for continued learning."
    }
  ];

  return (
    <div className="flex flex-col bg-white">
      {/* Page Header */}
      <section className="relative pt-32 pb-16 md:pt-40 md:pb-20 overflow-hidden bg-slate-900">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-brand-orange/10 rounded-full blur-[120px] pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-orange-500/5 rounded-full blur-[100px] pointer-events-none"></div>
        
        <div className="relative z-10 max-w-6xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-orange-500/10 border border-orange-500/20 mb-6">
              <Sparkles className="w-3.5 h-3.5 text-orange-400" />
              <span className="text-xs font-medium text-orange-400 uppercase tracking-wide">What We Offer</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-[1.2] mb-6">
              Training Programs &<br />
              <span className="text-brand-orange">Services</span>
            </h1>
            
            <p className="text-lg md:text-xl text-slate-300 max-w-2xl leading-relaxed">
              Comprehensive training solutions designed to equip individuals and organizations 
              with the skills needed to thrive in the digital economy.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services We Provide */}
      <section className="py-20 md:py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <motion.div {...fadeInUp} className="text-center mb-12">
            <span className="text-xs font-semibold text-brand-orange uppercase tracking-wider">Our Services</span>
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mt-2 mb-3">
              Services We Provide
            </h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              End-to-end training and development solutions tailored to your needs.
            </p>
          </motion.div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {services.map((service, idx) => (
              <motion.div
                key={idx}
                {...fadeInUp}
                transition={{ delay: idx * 0.05 }}
                className="group p-6 rounded-xl bg-slate-50 border border-slate-200 hover:border-orange-200 hover:shadow-md transition-all duration-200"
              >
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-orange-100 flex items-center justify-center flex-shrink-0 group-hover:bg-brand-orange group-hover:text-white transition-colors">
                    {service.icon}
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900 mb-2">{service.title}</h4>
                    <p className="text-sm text-slate-600 leading-relaxed">{service.desc}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Curriculum Modules */}
      <section className="py-20 md:py-24 bg-slate-50">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <motion.div {...fadeInUp} className="text-center mb-12">
            <span className="text-xs font-semibold text-brand-orange uppercase tracking-wider">What We Teach</span>
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mt-2 mb-3">
              Core Curriculum Modules
            </h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              Our flagship training modules are meticulously updated to reflect real-world industry requirements.
            </p>
          </motion.div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {curriculumModules.map((module, idx) => (
              <motion.div
                key={idx}
                {...fadeInUp}
                transition={{ delay: idx * 0.03 }}
                className="group p-6 rounded-xl bg-white border border-slate-200 hover:border-orange-200 hover:shadow-md transition-all duration-200"
              >
                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded bg-orange-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <CheckCircle2 className="w-3 h-3 text-brand-orange" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="font-semibold text-slate-900">{module.title}</h4>
                      <span className="text-[10px] font-medium px-2 py-0.5 rounded-full bg-orange-100 text-brand-orange">
                        {module.category}
                      </span>
                    </div>
                    <p className="text-sm text-slate-600 leading-relaxed">{module.desc}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          
          {/* Category Legend */}
          <div className="flex flex-wrap items-center justify-center gap-4 mt-10 pt-6 border-t border-slate-200">
            <span className="text-xs text-slate-500">Categories:</span>
            {["Technical", "Management", "Strategy", "Business", "Custom", "Soft Skills"].map((cat, i) => (
              <span key={i} className="text-xs px-3 py-1 bg-white rounded-full text-slate-600 border border-slate-200">
                {cat}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Training Components & Learning Formats */}
      <section className="py-20 md:py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <motion.div {...fadeInUp} className="text-center mb-12">
            <span className="text-xs font-semibold text-brand-orange uppercase tracking-wider">How We Deliver</span>
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mt-2 mb-3">
              Training Components & Learning Formats
            </h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              Flexible delivery methods designed to accommodate diverse learning styles and schedules.
            </p>
          </motion.div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {trainingFormats.map((format, idx) => (
              <motion.div
                key={idx}
                {...fadeInUp}
                transition={{ delay: idx * 0.1 }}
                className="text-center p-6 rounded-xl bg-slate-50 border border-slate-200 hover:border-orange-200 transition-colors"
              >
                <div className="w-14 h-14 mx-auto rounded-xl bg-orange-100 flex items-center justify-center text-brand-orange mb-4">
                  {format.icon}
                </div>
                <h4 className="font-semibold text-slate-900 mb-2">{format.title}</h4>
                <p className="text-sm text-slate-600 leading-relaxed">{format.desc}</p>
              </motion.div>
            ))}
          </div>
          
          <div className="mt-8 p-6 bg-gradient-to-r from-orange-50 to-amber-50 rounded-xl border border-orange-100">
            <div className="flex items-center gap-3 mb-3">
              <BookOpen className="w-5 h-5 text-brand-orange" />
              <h4 className="font-semibold text-slate-900">Curriculum & Learning Documents</h4>
            </div>
            <p className="text-sm text-slate-600">
              All programs include comprehensive curriculum guides, learning materials, and assessment tools 
              to ensure consistent, high-quality training delivery.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-20 bg-slate-900">
        <div className="max-w-3xl mx-auto px-6 lg:px-8 text-center">
          <motion.div {...fadeInUp}>
            <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-orange-500/20 flex items-center justify-center">
              <GraduationCap className="w-8 h-8 text-brand-orange" />
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">
              Ready to develop your skills?
            </h2>
            <p className="text-slate-400 mb-8 text-sm md:text-base max-w-xl mx-auto">
              Contact us today to discuss your training needs or enroll in one of our programs.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link 
                to="/contact"
                className="inline-flex items-center justify-center px-6 py-3 bg-brand-orange text-white text-sm font-medium rounded-lg hover:bg-orange-600 transition-colors"
              >
                Get In Touch
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
              <Link 
                to="/partners"
                className="inline-flex items-center justify-center px-6 py-3 bg-transparent text-white text-sm font-medium rounded-lg border border-slate-700 hover:border-slate-500 transition-colors"
              >
                View Our Partners
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}