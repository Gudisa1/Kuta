// import React from 'react';
// import { Building, Award, LineChart } from 'lucide-react';

// export default function PartnersPage() {
//   return (
//     <div className="flex flex-col">
//       {/* Page Header */}
//       <section className="bg-brand-dark text-white py-24 relative overflow-hidden">
//         <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-tr from-brand-orange/20 to-transparent rounded-full blur-[100px] pointer-events-none"></div>
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 mt-10">
//           <h1 className="text-5xl md:text-6xl font-bold mb-6">Strategic Partnerships</h1>
//           <p className="text-xl text-slate-300 max-w-2xl leading-relaxed">
//             Meaningful transformation requires collaboration. We partner with premier academic institutions and leading corporations to deliver world-class capacity building.
//           </p>
//         </div>
//       </section>

//       <section className="py-24 bg-slate-50">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
//           <div className="mb-16">
//              <h2 className="text-3xl font-bold text-brand-dark mb-4">Our Collaborative Ecosystem</h2>
//              <p className="text-lg text-slate-600 max-w-3xl">
//                By aligning our curriculum with the needs of major organizations and educational bodies, we ensure our graduates and trainees are instantly deployable and highly effective.
//              </p>
//           </div>

//           <div className="space-y-8">
            
//             <div className="bg-white p-8 md:p-12 rounded-3xl border border-slate-200 shadow-sm flex flex-col md:flex-row gap-8 items-center hover:border-brand-orange/50 transition-colors">
//               <div className="w-24 h-24 rounded-2xl bg-orange-50 text-brand-orange flex items-center justify-center shrink-0">
//                 <Building size={48} />
//               </div>
//               <div>
//                 <h3 className="text-2xl font-bold text-brand-dark mb-4">Oromia State University</h3>
//                 <p className="text-slate-600 text-lg leading-relaxed">
//                   We have established a robust collaborative educational framework with Oromia State University. Together, we exchange insights to ensure academic rigor while maintaining the practical, hands-on methodology required by the modern tech industry.
//                 </p>
//               </div>
//             </div>

//             <div className="bg-white p-8 md:p-12 rounded-3xl border border-slate-200 shadow-sm flex flex-col md:flex-row gap-8 items-center hover:border-brand-orange/50 transition-colors">
//               <div className="w-24 h-24 rounded-2xl bg-orange-50 text-brand-orange flex items-center justify-center shrink-0">
//                 <Award size={48} />
//               </div>
//               <div>
//                 <h3 className="text-2xl font-bold text-brand-dark mb-4">BCDA Partnership</h3>
//                 <p className="text-slate-600 text-lg leading-relaxed">
//                   In collaboration with BCDA, Kuta Institute recently concluded an intensive training initiative where we successfully graduated 30+ highly-skilled students. This program focused on bridging immediate talent shortages in critical technical roles.
//                 </p>
//               </div>
//             </div>

//             <div className="bg-white p-8 md:p-12 rounded-3xl border border-slate-200 shadow-sm flex flex-col md:flex-row gap-8 items-center hover:border-brand-orange/50 transition-colors">
//               <div className="w-24 h-24 rounded-2xl bg-orange-50 text-brand-orange flex items-center justify-center shrink-0">
//                 <LineChart size={48} />
//               </div>
//               <div>
//                 <h3 className="text-2xl font-bold text-brand-dark mb-4">Ziway Roses</h3>
//                 <p className="text-slate-600 text-lg leading-relaxed">
//                   We conducted corporate capacity building for the workforce at Ziway Roses. Specifically, we delivered a bespoke AI-driven productivity training course. This allowed the organization to leverage modern generative AI tools to streamline administrative and operational bottlenecks.
//                 </p>
//               </div>
//             </div>

//           </div>
//         </div>
//       </section>

//       {/* Impact Stats */}
//       <section className="py-24 bg-brand-orange text-white overflow-hidden relative">
//         <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-white/10 rounded-full blur-3xl transform -translate-y-1/2"></div>
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
//           <div className="text-center mb-16">
//             <h3 className="text-4xl font-bold">Measurable Impact</h3>
//           </div>
//           <div className="grid grid-cols-2 md:grid-cols-4 gap-8 divide-x divide-white/20">
//             <div className="text-center px-4">
//               <p className="text-5xl font-black mb-2">30+</p>
//               <p className="text-orange-100 font-medium tracking-wide">Schools Supported</p>
//             </div>
//             <div className="text-center px-4">
//               <p className="text-5xl font-black mb-2">30+</p>
//               <p className="text-orange-100 font-medium tracking-wide">BCDA Grads</p>
//             </div>
//             <div className="text-center px-4">
//               <p className="text-5xl font-black mb-2">100%</p>
//               <p className="text-orange-100 font-medium tracking-wide">Commitment</p>
//             </div>
//             <div className="text-center px-4 flex flex-col items-center">
//               <p className="text-5xl font-black mb-2 flex items-center justify-center"><LineChart size={40}/> </p>
//               <p className="text-orange-100 font-medium tracking-wide">Increased Productivity</p>
//             </div>
//           </div>
//         </div>
//       </section>
      
//     </div>
//   );
// }
import React from 'react';
import { motion } from 'framer-motion';
import { 
  Users, 
  Trophy, 
  Handshake, 
  Target,
  Sparkles,
  School,
  Factory,
  Church,
  Heart
} from 'lucide-react';

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-50px" },
  transition: { duration: 0.6, ease: "easeOut" }
};

export default function PartnersPage() {
  const mainPartners = [
    {
      name: "Edify",
      icon: <School className="w-8 h-8" />,
      type: "Educational Development Partner",
      description: "Grace Academy is working with Edify to support 30 schools across the country by strengthening digital literacy and fostering innovation and critical thinking among the upcoming generation.",
      achievement: "19+ schools supported nationwide",
      status: "Ongoing partnership",
      color: "from-orange-50 to-amber-50"
    },
    {
      name: "Beza Community Development Association (BCDA)",
      icon: <Users className="w-8 h-8" />,
      type: "Community Development Partner",
      description: "Collaborative training initiative focused on empowering community members with practical skills and bridging talent shortages in critical technical roles.",
      achievement: "Currently training 25 students",
      status: "Students are now entering their third month of training",
      color: "from-orange-50 to-amber-50"
    }
  ];

  const additionalPartners = [
    {
      name: "Ethiopian Mulu Wongel Amagnoch Church Development Commission",
      icon: <Church className="w-6 h-6" />,
      type: "Faith-Based Organization",
      description: "Partnering to expand digital literacy and technical training opportunities within communities served by the commission."
    },
    {
      name: "Ziway Roses",
      icon: <Factory className="w-6 h-6" />,
      type: "Corporate Partner",
      description: "Conducted seminars for 80+ Employess",
      achievement: "80+ Employess reached"
    },
    {
      name: "Batu Don Bosco Catholic School",
      icon: <School className="w-6 h-6" />,
      type: "Educational Institution",
      description: "Delivered capacity building training for employees in AI-driven productivity, Web Design, Graphic Design.",
      achievement: "Students training completed"
    }
  ];

  const stats = [
    { value: "30+", label: "Schools Supported", icon: School },
    { value: "3000+", label: "Students Trained", icon: Users },
    { value: "6", label: "Active Partners", icon: Handshake },
    { value: "100%", label: "Commitment to Impact", icon: Heart }
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
              <Handshake className="w-3.5 h-3.5 text-orange-400" />
              <span className="text-xs font-medium text-orange-400 uppercase tracking-wide">Our Collaborative Network</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-[1.2] mb-6">
              Partnerships &<br />
              <span className="text-brand-orange">Collaborations</span>
            </h1>
            
            <p className="text-lg md:text-xl text-slate-300 max-w-2xl leading-relaxed">
              Meaningful transformation requires collaboration. We partner with premier academic 
              institutions, community organizations, and leading corporations to deliver world-class 
              capacity building across Ethiopia.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats Overview */}
      <section className="py-12 border-b border-slate-100 bg-white">
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
                <div key={idx} className="text-center">
                  <div className="flex items-center justify-center gap-3 mb-2">
                    <Icon className="w-5 h-5 text-brand-orange" />
                    <span className="text-3xl font-bold text-slate-900">{stat.value}</span>
                  </div>
                  <div className="text-sm text-slate-500">{stat.label}</div>
                </div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* Main Partners */}
      <section className="py-20 md:py-24 bg-slate-50">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <motion.div {...fadeInUp} className="text-center mb-12">
            <span className="text-xs font-semibold text-brand-orange uppercase tracking-wider">Key Collaborations</span>
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mt-2 mb-3">
              Our Strategic Partners
            </h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              We work closely with leading institutions to deliver impactful training programs 
              that create lasting change in communities across Ethiopia.
            </p>
          </motion.div>
          
          <div className="space-y-6">
            {mainPartners.map((partner, idx) => (
              <motion.div
                key={idx}
                {...fadeInUp}
                transition={{ delay: idx * 0.1 }}
                className="bg-white rounded-2xl border border-slate-200 overflow-hidden hover:border-orange-200 hover:shadow-md transition-all duration-200"
              >
                <div className="p-8 md:p-10">
                  <div className="flex flex-col md:flex-row gap-6 md:gap-8">
                    <div className="flex-shrink-0">
                      <div className="w-16 h-16 md:w-20 md:h-20 rounded-xl bg-orange-100 shadow-sm flex items-center justify-center text-brand-orange">
                        {partner.icon}
                      </div>
                    </div>
                    
                    <div className="flex-1">
                      <div className="flex flex-wrap items-start justify-between gap-4 mb-3">
                        <div>
                          <h3 className="text-2xl font-bold text-slate-900 mb-1">{partner.name}</h3>
                          <span className="text-xs font-medium text-brand-orange uppercase tracking-wider">
                            {partner.type}
                          </span>
                        </div>
                        <div className="flex items-center gap-2 px-3 py-1.5 bg-orange-50 rounded-full border border-orange-200">
                          <Sparkles className="w-3.5 h-3.5 text-brand-orange" />
                          <span className="text-xs font-medium text-slate-700">{partner.status}</span>
                        </div>
                      </div>
                      
                      <p className="text-slate-700 leading-relaxed mb-4">
                        {partner.description}
                      </p>
                      
                      <div className="flex items-start gap-3 p-4 bg-orange-50/50 rounded-lg border border-orange-100">
                        <Trophy className="w-5 h-5 text-brand-orange flex-shrink-0 mt-0.5" />
                        <div>
                          <span className="text-sm font-medium text-slate-900">Key Achievement:</span>
                          <span className="text-sm text-slate-700 ml-2">{partner.achievement}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Partners */}
      <section className="py-20 md:py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <motion.div {...fadeInUp} className="text-center mb-12">
            <span className="text-xs font-semibold text-brand-orange uppercase tracking-wider">Extended Network</span>
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mt-2 mb-3">
              Additional Partners
            </h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              We're proud to collaborate with these organizations to expand our reach and impact.
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-3 gap-6">
            {additionalPartners.map((partner, idx) => (
              <motion.div
                key={idx}
                {...fadeInUp}
                transition={{ delay: idx * 0.1 }}
                className="p-6 rounded-xl bg-slate-50 border border-slate-200 hover:border-orange-200 hover:shadow-md transition-all duration-200"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-orange-100 flex items-center justify-center text-brand-orange">
                    {partner.icon}
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900">{partner.name}</h4>
                    <span className="text-xs text-brand-orange">{partner.type}</span>
                  </div>
                </div>
                
                <p className="text-sm text-slate-600 leading-relaxed mb-3">
                  {partner.description}
                </p>
                
                {partner.achievement && (
                  <div className="flex items-center gap-2 text-xs font-medium text-brand-orange">
                    <Target className="w-3.5 h-3.5" />
                    {partner.achievement}
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Partnership CTA */}
      <section className="py-16 md:py-20 bg-gradient-to-r from-slate-900 to-slate-800">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <motion.div {...fadeInUp}>
            <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-orange-500/20 flex items-center justify-center">
              <Handshake className="w-8 h-8 text-brand-orange" />
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Become a Partner
            </h2>
            <p className="text-slate-300 mb-8 max-w-2xl mx-auto">
              Interested in collaborating with Kuta Learning Institute? We're always looking for 
              mission-aligned organizations to expand our impact and reach more learners across Ethiopia.
            </p>
            <a 
              href="/contact"
              className="inline-flex items-center justify-center px-6 py-3 bg-brand-orange text-white text-sm font-medium rounded-lg hover:bg-orange-600 transition-colors"
            >
              Partner With Us
              <Handshake className="w-4 h-4 ml-2" />
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
}