// import React from 'react';
// import { Target, Eye, ShieldCheck, Heart, Sparkles, RefreshCcw } from 'lucide-react';

// export default function AboutPage() {
//   return (
//     <div className="flex flex-col bg-white">
//       {/* Page Header */}
//       <section className="bg-brand-dark text-white py-24 relative overflow-hidden">
//         <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-orange/20 rounded-full blur-[100px] pointer-events-none"></div>
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 mt-10">
//           <h1 className="text-5xl md:text-6xl font-bold mb-6">About Kuta Institute</h1>
//           <p className="text-xl text-slate-300 max-w-2xl leading-relaxed">
//             From our origins as Grace Academy to our current standing as a nationwide technology training leader, we are driven by one purpose: inclusive digital success.
//           </p>
//         </div>
//       </section>

//       {/* Vision & Mission */}
//       <section className="py-24">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="grid md:grid-cols-2 gap-12">
//             <div className="group p-12 bg-slate-50 rounded-3xl border border-slate-100 hover:shadow-2xl transition-all duration-300 relative overflow-hidden">
//               <div className="absolute top-0 right-0 w-32 h-32 bg-orange-100 rounded-bl-[100px] -mr-16 -mt-16 transition-transform group-hover:scale-110"></div>
//               <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center shadow-sm text-brand-orange mb-8 relative z-10">
//                 <Eye size={32} />
//               </div>
//               <h4 className="text-2xl font-bold text-brand-dark mb-4">Our Vision</h4>
//               <p className="text-slate-600 text-lg leading-relaxed">
//                 To inspire and equip learners with digital skills to thrive in a technology-driven world. We foresee an Africa where technological literacy is a fundamental right, not a privilege.
//               </p>
//             </div>

//             <div className="group p-12 bg-slate-50 rounded-3xl border border-slate-100 hover:shadow-2xl transition-all duration-300 relative overflow-hidden">
//               <div className="absolute top-0 right-0 w-32 h-32 bg-slate-200 rounded-bl-[100px] -mr-16 -mt-16 transition-transform group-hover:scale-110"></div>
//               <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center shadow-sm text-slate-700 mb-8 relative z-10">
//                 <Target size={32} />
//               </div>
//               <h4 className="text-2xl font-bold text-brand-dark mb-4">Our Mission</h4>
//               <p className="text-slate-600 text-lg leading-relaxed">
//                 To create an inclusive future where individuals succeed in the digital economy. We execute this by dismantling barriers to world-class technical education.
//               </p>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Educational Scope */}
//       <section className="py-24 bg-slate-50">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center gap-16">
//           <div className="md:w-1/2 relative">
//             <div className="clip-rounded-rect overflow-hidden shadow-2xl">
//               <img src="https://images.unsplash.com/photo-1542626991-cbc4e32524cc?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Students in classroom" className="w-full h-auto" />
//             </div>
//           </div>
//           <div className="md:w-1/2">
//             <h2 className="text-sm font-bold text-brand-orange uppercase tracking-wider mb-2">Our Roots & Reach</h2>
//             <h3 className="text-4xl font-bold text-brand-dark mb-6">Empowering 30+ Schools Nationwide</h3>
//             <p className="text-slate-600 text-lg leading-relaxed mb-6">
//               Formerly operating under the name <strong>Grace Academy</strong>, Kuta Learning Institute has radically scaled its educational scope. Through our strategic support leveraging <strong>Edify</strong>, we currently empower over 30 schools across the nation.
//             </p>
//             <p className="text-slate-600 text-lg leading-relaxed">
//               Our interventions bridge pressing curriculum gaps, providing expert instructor training and robust technical support that directly translates into higher digital literacy rates for thousands of students.
//             </p>
//           </div>
//         </div>
//       </section>

//       {/* Core Values */}
//       <section className="py-24">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="text-center max-w-3xl mx-auto mb-16">
//             <h3 className="text-3xl md:text-5xl font-bold text-brand-dark">Our Core Values</h3>
//           </div>
//           <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
//             {[
//               { label: 'Excellence', desc: 'We deliver the highest quality education and technical frameworks without compromise.', icon: <ShieldCheck /> },
//               { label: 'Inclusive Access', desc: 'We actively dismantle geographical and financial barriers to premium training.', icon: <Heart /> },
//               { label: 'Innovation', desc: 'We deploy cutting-edge technologies like AI in our own workflows and our curriculum.', icon: <Sparkles /> },
//               { label: 'Adaptability', desc: 'We constantly evolve our syllabus to match the rapidly shifting digital landscape.', icon: <RefreshCcw /> }
//             ].map((value, i) => (
//               <div key={i} className="text-center p-8 rounded-3xl border border-slate-100 hover:border-brand-orange/30 transition-colors">
//                 <div className="w-16 h-16 mx-auto rounded-2xl bg-orange-50 flex items-center justify-center text-brand-orange mb-6">
//                   {value.icon}
//                 </div>
//                 <h5 className="text-xl font-bold text-brand-dark mb-3">{value.label}</h5>
//                 <p className="text-slate-600 leading-relaxed">{value.desc}</p>
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
import { Target, Eye, Heart, Lightbulb, Users, Building2, MapPin, Phone, Globe, Award, Sparkles } from 'lucide-react';

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-50px" },
  transition: { duration: 0.6, ease: "easeOut" }
};

export default function AboutPage() {
  const coreValues = [
    { 
      icon: <Award className="w-6 h-6" />, 
      title: "Excellence in Digital Learning", 
      desc: "Delivering high-quality, relevant, and impactful digital education."
    },
    { 
      icon: <Users className="w-6 h-6" />, 
      title: "Inclusive Access & Equal Opportunity", 
      desc: "Expanding opportunities for women, youth, and underserved communities."
    },
    { 
      icon: <Sparkles className="w-6 h-6" />, 
      title: "Innovation & Adaptability", 
      desc: "Embracing emerging technologies and evolving educational approaches."
    }
  ];

  const partners = [
    // { 
    //   name: "Oromia State University", 
    //   detail: "30 students trained for 3 months", 
    //   status: "Graduated - Next round soon" 
    // },
    { 
      name: "Edify", 
      detail: "30 schools nationwide", 
      status: "Ongoing partnership" 
    },
    { 
      name: "Beza Community Development Association (BCDA)", 
      detail: "55 students", 
      status: "Currently in 3rd month" 
    },
    { 
      name: "Ethiopian Full Gospel Believers Church Development Association", 
      detail: "Development Commission", 
      status: "Active partner" 
    },
    { 
      name: "Ziway Roses", 
      detail: "80 Employees ", 
      status: "Capacity Building Training conducted" 
    },
    { 
      name: "Batu Don Bosco Catholic School", 
      detail: "Student training", 
      status: "AI, Web Design, Graphic Design" 
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
              <span className="text-xs font-medium text-orange-400 uppercase tracking-wide">Established March 2026</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-[1.2] mb-6">
              About Kuta Learning<br />
              <span className="text-brand-orange">Institute</span>
            </h1>
            
            <p className="text-lg md:text-xl text-slate-300 max-w-2xl leading-relaxed">
              Formerly Grace Academy, we are a technology-driven Training and Development Center 
              equipping individuals and organizations with skills to succeed in the digital economy.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Vision & Mission - CORRECTED ORDER */}
      <section className="py-20 md:py-24">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <motion.div {...fadeInUp} className="text-center mb-12">
            <span className="text-xs font-semibold text-brand-orange uppercase tracking-wider">What We Believe</span>
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mt-2">
              Our Vision & Mission
            </h2>
          </motion.div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {/* Vision - CORRECTED */}
            <motion.div {...fadeInUp} transition={{ delay: 0.1 }}>
              <div className="h-full p-8 md:p-10 rounded-2xl bg-gradient-to-br from-orange-50 to-amber-50 border border-orange-100">
                <div className="w-14 h-14 rounded-xl bg-white shadow-sm flex items-center justify-center mb-6">
                  <Eye className="w-7 h-7 text-brand-orange" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4">Our Vision</h3>
                <p className="text-slate-700 leading-relaxed">
                  To inspire and equip learners with the digital skills needed to create 
                  opportunities and thrive in a technology-driven world.
                </p>
              </div>
            </motion.div>
            
            {/* Mission - CORRECTED */}
            <motion.div {...fadeInUp} transition={{ delay: 0.2 }}>
              <div className="h-full p-8 md:p-10 rounded-2xl bg-gradient-to-br from-slate-50 to-slate-100 border border-slate-200">
                <div className="w-14 h-14 rounded-xl bg-white shadow-sm flex items-center justify-center mb-6">
                  <Target className="w-7 h-7 text-brand-orange" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4">Our Mission</h3>
                <p className="text-slate-700 leading-relaxed">
                  To create an inclusive future where individuals are equipped with the skills 
                  to succeed in the digital economy.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Story / Background */}
      <section className="py-20 md:py-24 bg-slate-50">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-center">
            <motion.div {...fadeInUp}>
              <span className="text-xs font-semibold text-brand-orange uppercase tracking-wider">Our Roots & Reach</span>
              <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mt-2 mb-4">
                From Grace Academy to Nationwide Impact
              </h2>
              <p className="text-slate-600 leading-relaxed mb-4">
                Formerly operating under the name <strong>Grace Academy</strong>, Kuta Learning Institute 
                has evolved into a comprehensive technology-driven Training and Development Center.
              </p>
              <p className="text-slate-600 leading-relaxed mb-6">
                Through our strategic partnership with <strong>Edify</strong>, we currently support 
                30 schools across Ethiopia, strengthening digital literacy and fostering innovation 
                and critical thinking among the upcoming generation.
              </p>
              
              <div className="flex items-center gap-6 p-4 bg-white rounded-lg border border-slate-200">
                <div className="w-12 h-12 rounded-lg bg-orange-100 flex items-center justify-center">
                  <Building2 className="w-6 h-6 text-brand-orange" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-slate-900">19+</div>
                  <div className="text-sm text-slate-500">Schools Supported Nationwide</div>
                </div>
              </div>
            </motion.div>
            
            <motion.div {...fadeInUp} transition={{ delay: 0.1 }}>
              <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-lg">
                <img 
                  src="https://images.unsplash.com/photo-1542626991-cbc4e32524cc?auto=format&fit=crop&w=800&q=80" 
                  alt="Students in classroom at Kuta Learning Institute" 
                  className="w-full h-full object-cover"
                />
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
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mt-2">
              Core Values
            </h2>
          </motion.div>
          
          <div className="grid md:grid-cols-3 gap-6">
            {coreValues.map((value, idx) => (
              <motion.div
                key={idx}
                {...fadeInUp}
                transition={{ delay: idx * 0.1 }}
                className="p-8 rounded-2xl bg-slate-50 border border-slate-200 hover:border-orange-200 hover:shadow-md transition-all duration-200 text-center"
              >
                <div className="w-14 h-14 mx-auto rounded-xl bg-orange-100 flex items-center justify-center mb-6">
                  <div className="text-brand-orange">
                    {value.icon}
                  </div>
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-3">{value.title}</h3>
                <p className="text-slate-600 leading-relaxed text-sm">{value.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Partnerships */}
      <section className="py-20 md:py-24 bg-slate-50">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <motion.div {...fadeInUp} className="text-center mb-12">
            <span className="text-xs font-semibold text-brand-orange uppercase tracking-wider">Our Network</span>
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mt-2 mb-3">
              Partnerships & Collaborations
            </h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              We work with leading institutions and organizations to expand digital literacy 
              and create meaningful opportunities across Ethiopia.
            </p>
          </motion.div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {partners.map((partner, idx) => (
              <motion.div
                key={idx}
                {...fadeInUp}
                transition={{ delay: idx * 0.05 }}
                className="p-5 bg-white rounded-lg border border-slate-200 hover:border-orange-200 transition-colors"
              >
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-orange-50 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <HandshakeIcon className="w-4 h-4 text-brand-orange" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900">{partner.name}</h4>
                    <p className="text-xs text-slate-500 mt-1">{partner.detail}</p>
                    <p className="text-xs text-brand-orange mt-0.5">{partner.status}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Info Bar */}
      <section className="py-12 bg-slate-900">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12">
            <div className="flex items-center gap-3 text-slate-300">
              <MapPin className="w-5 h-5 text-brand-orange" />
              <span>Batu, Oromia, Ethiopia</span>
            </div>
            <div className="flex items-center gap-3 text-slate-300">
              <Phone className="w-5 h-5 text-brand-orange" />
              <span>+251 968 331 095</span>
            </div>
            <div className="flex items-center gap-3 text-slate-300">
              <Globe className="w-5 h-5 text-brand-orange" />
              <span>www.kutalearninghub.com</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

// Custom Handshake Icon component
const HandshakeIcon = ({ className }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width="24" 
    height="24" 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={className}
  >
    <path d="M20.42 4.58a5.4 5.4 0 0 0-7.65 0l-.77.78-.77-.78a5.4 5.4 0 0 0-7.65 0C1.46 6.7 1.33 10.28 4 13l8 8 8-8c2.67-2.72 2.54-6.3.42-8.42z"/>
    <path d="M12 5.36 8.87 8.5a2.13 2.13 0 0 0 0 3h0a2.13 2.13 0 0 0 3 0l2.26-2.26a.75.75 0 0 1 1.06 0l2.26 2.26a2.13 2.13 0 0 0 3 0h0a2.13 2.13 0 0 0 0-3L17 5.36"/>
  </svg>
);