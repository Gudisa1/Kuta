// import React from 'react';
// import { ArrowRight, CheckCircle2 } from 'lucide-react';
// import { Link } from 'react-router-dom';

// export default function HomePage() {
//   return (
//     <div className="flex flex-col">
//       {/* Hero Section */}
//       <section className="relative min-h-[90vh] flex items-center pb-20 pt-10 overflow-hidden bg-[#fafafa]">
//         <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-gradient-to-tr from-brand-orange/10 to-orange-400/5 rounded-full blur-[100px] transform translate-x-1/3 -translate-y-1/4 pointer-events-none"></div>
        
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
//           <div className="grid lg:grid-cols-2 gap-16 lg:gap-8 items-center">
            
//             <div className="space-y-8 max-w-2xl">
//               <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-slate-200 shadow-sm animate-fade-in">
//                 <span className="w-2 h-2 rounded-full bg-brand-orange animate-pulse"></span>
//                 <span className="text-brand-dark text-sm font-semibold tracking-wide uppercase">Empowering The Digital Economy</span>
//               </div>
              
//               <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-[1.1] text-brand-dark tracking-tight">
//                 Inspiring the <br className="hidden md:block"/>
//                 <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-orange to-orange-400">Future</span> of Learning
//               </h1>
              
//               <p className="text-lg sm:text-xl text-slate-600 max-w-xl leading-relaxed font-light">
//                 Kuta Learning Institute is a premier technology-driven Training and Development Center. We equip individuals and enterprise teams with the critical digital skills required to succeed in tomorrow's economy.
//               </p>
              
//               <div className="flex flex-wrap items-center gap-5 pt-4">
//                 <Link to="/services" className="px-8 py-4 rounded-full bg-brand-orange text-white font-medium text-lg hover:bg-orange-600 hover:-translate-y-1 transition-all duration-300 shadow-xl shadow-orange-500/25 flex items-center gap-2 group">
//                   Explore Programs 
//                   <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
//                 </Link>
//                 <Link to="/about" className="px-8 py-4 rounded-full bg-white text-brand-dark font-medium text-lg border border-slate-200 hover:bg-slate-50 hover:-translate-y-1 transition-all duration-300 shadow-sm">
//                   Our Mission
//                 </Link>
//               </div>
//             </div>
            
//             <div className="relative w-full h-[500px] lg:h-[650px] flex items-center justify-center">
//               <div className="absolute top-10 right-4 w-[75%] h-[75%] clip-rounded-rect overflow-hidden shadow-2xl z-20 group">
//                  <div className="absolute inset-0 bg-brand-dark/20 group-hover:bg-transparent transition-colors duration-500 z-10"></div>
//                  <img src="https://images.unsplash.com/photo-1515162816999-a0c47dc192f7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Enterprise Training" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
//               </div>
//               <div className="absolute bottom-4 left-0 w-[55%] h-[55%] clip-circle overflow-hidden shadow-2xl z-30 border-8 border-[#fafafa] group">
//                  <div className="absolute inset-0 bg-brand-orange/20 group-hover:bg-transparent transition-colors duration-500 z-10"></div>
//                  <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" alt="Tech training" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
//               </div>
//             </div>
            
//           </div>
//         </div>
//       </section>

//       {/* Quick Overview Section */}
//       <section className="py-24 bg-white">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="grid md:grid-cols-2 gap-16 items-center">
//              <div>
//                <h2 className="text-sm font-bold text-brand-orange uppercase tracking-wider mb-2">Why Kuta?</h2>
//                <h3 className="text-3xl md:text-4xl font-bold text-brand-dark mb-6">Bridging the Gap Between Talent and Opportunity</h3>
//                <p className="text-slate-600 text-lg leading-relaxed mb-8">
//                  Formerly Grace Academy, we have rebranded and scaled our operations to support a broader vision. Our comprehensive ecosystem supports institutional educators, enterprise workforces, and ambitious individuals looking to upgrade their technical capabilities.
//                </p>
//                <ul className="space-y-4 mb-8">
//                  {[
//                    "Curriculum Design & Instructor Training",
//                    "Corporate Capacity Building",
//                    "AI-driven Productivity Courses"
//                  ].map((item, i) => (
//                    <li key={i} className="flex items-center gap-3 text-slate-700 font-medium">
//                      <CheckCircle2 className="text-brand-orange" size={20} />
//                      {item}
//                    </li>
//                  ))}
//                </ul>
//                <Link to="/services" className="inline-flex items-center gap-2 text-brand-orange font-bold hover:text-orange-600 transition-colors">
//                  View all services <ArrowRight size={16} />
//                </Link>
//              </div>
//              <div className="bg-slate-50 p-8 rounded-3xl border border-slate-100 flex flex-col justify-center gap-8">
//                <div className="flex gap-6 items-center p-6 bg-white rounded-2xl shadow-sm border border-slate-50">
//                  <h4 className="text-4xl font-black text-brand-dark">30+</h4>
//                  <p className="text-sm text-slate-500 font-medium uppercase tracking-widest border-l-2 border-brand-orange pl-4">Schools Supported Nationwide</p>
//                </div>
//                <div className="flex gap-6 items-center p-6 bg-white rounded-2xl shadow-sm border border-slate-50">
//                  <h4 className="text-4xl font-black text-brand-dark">Top</h4>
//                  <p className="text-sm text-slate-500 font-medium uppercase tracking-widest border-l-2 border-brand-orange pl-4">Strategic Corporate Partners</p>
//                </div>
//              </div>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// }

import React from 'react';
import { motion } from 'framer-motion';
import { 
  ArrowRight, 
  CheckCircle2, 
  Users, 
  Building2, 
  Trophy,
  BookOpen,
  Sparkles,
  ChevronRight,
  Star,
  Target,
  Eye,
  Heart,
  Lightbulb,
  GraduationCap,
  Handshake,
  MapPin,
  Phone,
  Globe,
  Calendar,
  TrendingUp
} from 'lucide-react';
import { Link } from 'react-router-dom';

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-50px" },
  transition: { duration: 0.6, ease: "easeOut" }
};

export default function HomePage() {
  const coreValues = [
    { 
      icon: <Target className="w-5 h-5" />, 
      title: "Excellence in Digital Learning", 
      desc: "Delivering high-quality, relevant, and impactful digital education" 
    },
    { 
      icon: <Users className="w-5 h-5" />, 
      title: "Inclusive Access & Equal Opportunity", 
      desc: "Expanding opportunities for women, youth, and underserved communities" 
    },
    { 
      icon: <Lightbulb className="w-5 h-5" />, 
      title: "Innovation & Adaptability", 
      desc: "Embracing emerging technologies and evolving educational approaches" 
    }
  ];

  const services = [
    { title: "Curriculum Design & Delivery", icon: BookOpen },
    { title: "Instructor Training (ToT)", icon: Users },
    { title: "Technical Support for Learning Platforms", icon: Building2 },
    { title: "Video Lectures & E-learning Materials", icon: GraduationCap },
    { title: "Hands-on Projects & Practical Exercises", icon: Target },
    { title: "Life Skills Training", icon: Heart },
    { title: "Capacity Building Trainings", icon: TrendingUp }
  ];

  const curriculumModules = [
    "Leadership & Organizational Development",
    "Project Management & Agile Practices",
    "Digital Strategy & Transformation",
    "Emerging Technologies for Impact",
    "Cybersecurity & Data Privacy",
    "Customized Organizational Solutions"
  ];

  const partners = [
    { 
      name: "Ethiopian Full Gospel Believers Church Development Association", 
      desc: "Currently training 25 students.",
      achievement: "30 students graduated from the programm"
    },
    { 
      name: "Edify", 
      desc: "Supporting 30 schools across Ethiopia by strengthening digital literacy and fostering innovation.",
      achievement: "19+  schools addressed "
    },
    { 
      name: "Beza Community Development Association", 
      desc: "Currently training 25 students who are entering their third month of training.",
      achievement: "30 students graduated from the programm"
    }
  ];

  const stats = [
    { value: "30+", label: "Schools Addressed", icon: Building2 },
    { value: "3000+", label: "Students Trained", icon: Users },
    { value: "6", label: "Major Partners", icon: Handshake },
    { value: "7", label: "Core Services", icon: BookOpen }
  ];

  return (
    <div className="flex flex-col bg-white">
      {/* Hero Section */}
      <section className="relative pt-28 pb-16 md:pt-36 md:pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-orange-50 via-white to-amber-50/20"></div>
        
        <div className="relative z-10 max-w-6xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            
            {/* Left Content */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
            >
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-orange-50 border border-orange-100 mb-6">
                <Sparkles className="w-3.5 h-3.5 text-brand-orange" />
                <span className="text-xs font-medium text-orange-600 uppercase tracking-wide">Established July 2023</span>
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 leading-[1.15] tracking-tight mb-6">
                Inspiring and equipping learners for the{' '}
                <span className="text-brand-orange">digital</span>
                <br />
                economy
              </h1>
              
              <p className="text-base md:text-lg text-slate-600 leading-relaxed max-w-lg mb-8">
              Kuta Learning institute is a technology-driven
                Training and Development Center that equips
                individuals and organizations with skills to succeed
                in the digital economy.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-3 mb-10">
                <Link 
                  to="/services" 
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-brand-orange text-white text-sm font-medium rounded-lg hover:bg-orange-600 transition-colors"
                >
                  Explore Our Programs 
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link 
                  to="/contact" 
                  className="inline-flex items-center justify-center px-6 py-3 bg-white text-slate-700 text-sm font-medium rounded-lg border border-slate-200 hover:border-orange-300 hover:text-brand-orange transition-colors"
                >
                  Partner With Us
                </Link>
              </div>
              
              {/* Contact Info */}
              <div className="flex flex-wrap items-center gap-6 pt-6 border-t border-slate-100">
                <div className="flex items-center gap-2 text-sm text-slate-500">
                  <MapPin className="w-4 h-4 text-brand-orange" />
                  Batu, Oromia
                </div>
                <div className="flex items-center gap-2 text-sm text-slate-500">
                  <Phone className="w-4 h-4 text-brand-orange" />
                  +251 968 331 095
                </div>
                <div className="flex items-center gap-2 text-sm text-slate-500">
                  <Globe className="w-4 h-4 text-brand-orange" />
                  www.kutalearninghub.com
                </div>
              </div>
            </motion.div>
            
            {/* Right Image */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
              className="relative"
            >
              <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-xl">
                <img 
                  src='./hero.jpg'
                  alt="Kuta Learning Institute Training Session" 
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Floating card */}
              <div className="absolute -bottom-4 -left-4 bg-white p-4 rounded-xl shadow-lg border border-slate-100">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-orange-100 flex items-center justify-center">
                    <Calendar className="w-5 h-5 text-brand-orange" />
                  </div>
                  <div>
                    <div className="text-xl font-bold text-slate-900">July 2023</div>
                    <div className="text-xs text-slate-500">Established</div>
                  </div>
                </div>
              </div>
            </motion.div>
            
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="py-12 border-y border-slate-100 bg-white">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8"
          >
            {stats.map((stat, idx) => {
              const Icon = stat.icon;
              return (
                <div key={idx} className="text-center md:text-left">
                  <div className="flex items-center justify-center md:justify-start gap-3">
                    <Icon className="w-5 h-5 text-brand-orange" />
                    <span className="text-3xl font-bold text-slate-900">{stat.value}</span>
                  </div>
                  <div className="text-sm text-slate-500 mt-2 md:ml-8">{stat.label}</div>
                </div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-20 md:py-24 bg-slate-50">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <motion.div {...fadeInUp} className="text-center mb-12">
            <span className="text-xs font-semibold text-brand-orange uppercase tracking-wider">What We Believe</span>
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mt-2 mb-3">
              Our Vision & Mission
            </h2>
          </motion.div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <motion.div {...fadeInUp} transition={{ delay: 0.1 }}>
              <div className="h-full p-8 rounded-2xl bg-white border border-slate-200">
                <div className="w-12 h-12 rounded-xl bg-orange-100 flex items-center justify-center mb-5">
                  <Eye className="w-6 h-6 text-brand-orange" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">Our Vision</h3>
                <p className="text-slate-600 leading-relaxed">
                  To create an inclusive future where individuals are equipped with the skills to succeed in the digital economy.
                </p>
              </div>
            </motion.div>
            
            <motion.div {...fadeInUp} transition={{ delay: 0.2 }}>
              <div className="h-full p-8 rounded-2xl bg-white border border-slate-200">
                <div className="w-12 h-12 rounded-xl bg-orange-100 flex items-center justify-center mb-5">
                  <Target className="w-6 h-6 text-brand-orange" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">Our Mission</h3>
                <p className="text-slate-600 leading-relaxed">
                  To inspire and equip learners with the digital skills needed to create opportunities and thrive in a technology-driven world.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 md:py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <motion.div {...fadeInUp} className="text-center mb-12">
            <span className="text-xs font-semibold text-brand-orange uppercase tracking-wider">Our Foundation</span>
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mt-2 mb-3">
              Core Values
            </h2>
          </motion.div>
          
          <div className="grid md:grid-cols-3 gap-6">
            {coreValues.map((value, idx) => (
              <motion.div
                key={idx}
                {...fadeInUp}
                transition={{ delay: idx * 0.1 }}
                className="p-6 rounded-xl bg-slate-50 border border-slate-200 text-center"
              >
                <div className="w-12 h-12 mx-auto rounded-xl bg-orange-100 flex items-center justify-center mb-4">
                  {value.icon}
                </div>
                <h3 className="font-bold text-slate-900 mb-2">{value.title}</h3>
                <p className="text-sm text-slate-500 leading-relaxed">{value.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 md:py-24 bg-slate-50">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <motion.div {...fadeInUp} className="text-center mb-12">
            <span className="text-xs font-semibold text-brand-orange uppercase tracking-wider">What We Offer</span>
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mt-2 mb-3">
              Services We Provide
            </h2>
          </motion.div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {services.map((service, idx) => {
              const Icon = service.icon;
              return (
                <motion.div
                  key={idx}
                  {...fadeInUp}
                  transition={{ delay: idx * 0.05 }}
                  className="flex items-center gap-3 p-4 bg-white rounded-lg border border-slate-200"
                >
                  <div className="w-8 h-8 rounded-lg bg-orange-50 flex items-center justify-center flex-shrink-0">
                    <Icon className="w-4 h-4 text-brand-orange" />
                  </div>
                  <span className="text-sm font-medium text-slate-700">{service.title}</span>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Core Curriculum */}
      <section className="py-20 md:py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <motion.div {...fadeInUp} className="text-center mb-12">
            <span className="text-xs font-semibold text-brand-orange uppercase tracking-wider">What We Teach</span>
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mt-2 mb-3">
              Core Curriculum Modules
            </h2>
          </motion.div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {curriculumModules.map((module, idx) => (
              <motion.div
                key={idx}
                {...fadeInUp}
                transition={{ delay: idx * 0.05 }}
                className="flex items-start gap-3 p-4 bg-slate-50 rounded-lg border border-slate-200"
              >
                <CheckCircle2 className="w-5 h-5 text-brand-orange flex-shrink-0 mt-0.5" />
                <span className="text-sm text-slate-700">{module}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Partners */}
      <section className="py-20 md:py-24 bg-slate-50">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <motion.div {...fadeInUp} className="text-center mb-12">
            <span className="text-xs font-semibold text-brand-orange uppercase tracking-wider">Our Network</span>
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mt-2 mb-3">
              Partnerships & Collaborations
            </h2>
          </motion.div>
          
          <div className="grid md:grid-cols-3 gap-6">
            {partners.map((partner, idx) => (
              <motion.div
                key={idx}
                {...fadeInUp}
                transition={{ delay: idx * 0.1 }}
                className="bg-white p-6 rounded-xl border border-slate-200"
              >
                <div className="w-10 h-10 rounded-lg bg-orange-50 flex items-center justify-center mb-4">
                  <Handshake className="w-5 h-5 text-brand-orange" />
                </div>
                <h4 className="font-bold text-slate-900 mb-2">{partner.name}</h4>
                <p className="text-sm text-slate-500 mb-3">{partner.desc}</p>
                <div className="flex items-center gap-2 text-xs font-medium text-brand-orange">
                  <Trophy className="w-3.5 h-3.5" />
                  {partner.achievement}
                </div>
              </motion.div>
            ))}
          </div>
          
          <div className="mt-10 p-6 bg-white rounded-xl border border-slate-200">
            <h4 className="font-semibold text-slate-900 mb-4 text-center">Additional Partners</h4>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 text-center">
              {[
                "Ethiopian Mulu Wongel Amagnoch Church",
                "Ziway Roses",
                "Batu Don Bosco Catholic School"
              ].map((partner, idx) => (
                <div key={idx} className="text-sm text-slate-600">{partner}</div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-20 bg-slate-900">
        <div className="max-w-3xl mx-auto px-6 lg:px-8 text-center">
          <motion.div {...fadeInUp}>
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">
              Ready to transform your future?
            </h2>
            <p className="text-slate-400 mb-8 text-sm md:text-base max-w-xl mx-auto">
              Partner with Kuta Learning Institute to develop the digital skills needed for tomorrow's economy.
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
                to="/services"
                className="inline-flex items-center justify-center px-6 py-3 bg-transparent text-white text-sm font-medium rounded-lg border border-slate-700 hover:border-slate-500 transition-colors"
              >
                View Programs
              </Link>
            </div>
            
            <div className="flex flex-wrap items-center justify-center gap-6 mt-8 text-xs text-slate-500">
              <span className="flex items-center gap-1">
                <MapPin className="w-3.5 h-3.5" /> Batu, Oromia
              </span>
              <span className="flex items-center gap-1">
                <Phone className="w-3.5 h-3.5" /> +251 968 331 095
              </span>
              <span className="flex items-center gap-1">
                <Globe className="w-3.5 h-3.5" /> www.kutalearninghub.com
              </span>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}