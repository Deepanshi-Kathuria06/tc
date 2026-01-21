// components/ModernProcess.jsx
import React, { useState, useEffect } from 'react';
import { 
  MessageSquare,
  Layout,
  Wrench,
  Home,
  Sparkles,
  CheckCircle,
  ArrowRight,
  Calendar,
  Users,
  Target,
  Clock,
  TrendingUp,
  ChevronRight,
  PlayCircle,
  BarChart3
} from 'lucide-react';

const ModernProcess = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    observer.observe(document.querySelector('#process-section'));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(() => {
        setProgress(85); // Simulate project progress
      }, 500);
      return () => clearTimeout(timer);
    }
  }, [isVisible]);

  const processSteps = [
    {
      id: 1,
      title: "DISCOVERY",
      subtitle: "Understanding Your Vision",
      description: "We begin with comprehensive consultations to deeply understand your needs, lifestyle, and aspirations. This phase sets the foundation for your dream space.",
      icon: <MessageSquare className="w-6 h-6" />,
      color: "from-[#c6a46a] to-[#d4b77d]",
      accentColor: "#c6a46a",
      duration: "1-2 Weeks",
      features: [
        "In-depth client interviews & questionnaires",
        "Space analysis & measurements",
        "Budget assessment & planning",
        "Style preference identification"
      ],
      stat: "100% Client Satisfaction"
    },
    {
      id: 2,
      title: "DESIGN",
      subtitle: "Crafting the Blueprint",
      description: "Our design team translates your vision into detailed concepts with 3D visualizations, material selections, and comprehensive space planning.",
      icon: <Layout className="w-6 h-6" />,
      color: "from-[#d4b77d] to-[#e2ca90]",
      accentColor: "#d4b77d",
      duration: "2-4 Weeks",
      features: [
        "3D visualizations & virtual walkthroughs",
        "Material & finish curation",
        "Furniture & decor selection",
        "Lighting design strategy"
      ],
      stat: "Unlimited Design Revisions"
    },
    {
      id: 3,
      title: "EXECUTION",
      subtitle: "Bringing Designs to Life",
      description: "Our expert team manages every detail of construction and installation, ensuring flawless execution of the design with premium craftsmanship.",
      icon: <Wrench className="w-6 h-6" />,
      color: "from-[#e2ca90] to-[#f0dca3]",
      accentColor: "#e2ca90",
      duration: "4-12 Weeks",
      features: [
        "Project management & coordination",
        "Quality control & inspections",
        "Vendor & contractor management",
        "Timeline optimization"
      ],
      stat: "98% On-Time Delivery"
    },
    {
      id: 4,
      title: "REVEAL",
      subtitle: "Your Dream Space Unveiled",
      description: "The moment we hand over your perfectly executed space, complete with final touches, styling, and comprehensive post-project support.",
      icon: <Sparkles className="w-6 h-6" />,
      color: "from-[#f0dca3] to-[#ffefb6]",
      accentColor: "#f0dca3",
      duration: "1 Week",
      features: [
        "Final styling & accessorizing",
        "Comprehensive walkthrough",
        "Maintenance guidance",
        "Post-project support"
      ],
      stat: "300+ Projects Delivered"
    }
  ];

  const metrics = [
    { icon: <Calendar className="w-5 h-5" />, value: "200K+", label: "Square Feet", sublabel: "Completed" },
    { icon: <Users className="w-5 h-5" />, value: "50+", label: "Countries", sublabel: "Global Reach" },
    { icon: <Target className="w-5 h-5" />, value: "300+", label: "Projects", sublabel: "Successfully Delivered" },
    { icon: <CheckCircle className="w-5 h-5" />, value: "100%", label: "Satisfaction", sublabel: "Client Happiness" }
  ];

  const timelineProjects = [
    { id: 1, name: "Urban Loft", area: "2,500 sq ft", status: "Design", progress: 30, color: "bg-blue-500" },
    { id: 2, name: "Tech HQ", area: "15,000 sq ft", status: "Execution", progress: 65, color: "bg-[#c6a46a]" },
    { id: 3, name: "Lakeside Villa", area: "8,000 sq ft", status: "Reveal", progress: 95, color: "bg-green-500" },
    { id: 4, name: "Boutique Hotel", area: "25,000 sq ft", status: "Discovery", progress: 15, color: "bg-purple-500" }
  ];

  return (
    <section id="process-section" className="py-20 md:py-28 bg-gradient-to-b from-white to-[#faf7f2] overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Animated Header */}
        <div className={`text-center max-w-4xl mx-auto mb-16 md:mb-20 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#c6a46a]/10 rounded-full mb-6">
            <div className="w-2 h-2 rounded-full bg-[#c6a46a] animate-pulse"></div>
            <span className="text-sm font-medium text-[#c6a46a] tracking-wider">OUR PROCESS</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-playfair text-gray-900 mb-6 leading-tight">
            <span className="block">Crafting Excellence</span>
            <span className="text-[#c6a46a]">Through Precision</span>
          </h2>
          
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Over <span className="font-semibold text-[#c6a46a]">200,000 sq ft</span> of premium commercial and residential spaces 
            transformed through our meticulous design process. Every detail matters.
          </p>
        </div>

        {/* Modern Stats Banner */}
        <div className={`grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-20 transition-all duration-1000 delay-200 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          {metrics.map((metric, index) => (
            <div 
              key={index}
              className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1 group"
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="p-2 rounded-lg bg-[#c6a46a]/10 group-hover:bg-[#c6a46a]/20 transition-colors">
                  <div className="text-[#c6a46a]">
                    {metric.icon}
                  </div>
                </div>
                <div>
                  <div className="text-2xl md:text-3xl font-playfair text-gray-900 font-bold">{metric.value}</div>
                  <div className="text-sm text-gray-500">{metric.sublabel}</div>
                </div>
              </div>
              <div className="text-sm font-medium text-gray-800">{metric.label}</div>
            </div>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-12 md:gap-20">
          {/* Left Column - Interactive Process Steps */}
          <div className="relative">
            {/* Animated Background Element */}
            <div className="absolute -left-20 top-20 w-40 h-40 bg-gradient-to-r from-[#c6a46a]/5 to-transparent rounded-full blur-3xl"></div>
            
            <div className={`space-y-6 transition-all duration-1000 delay-300 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}>
              {processSteps.map((step, index) => (
                <div
                  key={step.id}
                  className={`relative group cursor-pointer transition-all duration-500 ${
                    activeStep === index 
                      ? 'scale-[1.02]' 
                      : 'hover:scale-[1.01]'
                  }`}
                  onClick={() => setActiveStep(index)}
                >
                  {/* Step Connector Line */}
                  {index < processSteps.length - 1 && (
                    <div className={`absolute left-6 top-full w-0.5 h-6 transition-all duration-500 ${
                      index < activeStep ? 'bg-[#c6a46a]' : 'bg-gray-200'
                    }`}></div>
                  )}

                  {/* Main Step Card */}
                  <div className={`relative bg-white rounded-2xl p-6 border-2 transition-all duration-500 ${
                    activeStep === index 
                      ? 'border-[#c6a46a] shadow-xl' 
                      : 'border-gray-100 hover:border-[#c6a46a]/30 hover:shadow-lg'
                  }`}>
                    <div className="flex items-start gap-5">
                      {/* Animated Step Number */}
                      <div className={`relative flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center transition-all duration-500 ${
                        index <= activeStep 
                          ? `bg-gradient-to-br ${step.color} text-white` 
                          : 'bg-gray-100 text-gray-400'
                      }`}>
                        {step.icon}
                        <div className={`absolute -inset-2 rounded-full border-2 transition-all duration-500 ${
                          index === activeStep 
                            ? 'border-[#c6a46a]/30 animate-ping' 
                            : 'border-transparent'
                        }`}></div>
                      </div>

                      <div className="flex-1">
                        <div className="flex items-start justify-between mb-3">
                          <div>
                            <div className="flex items-center gap-3 mb-1">
                              <h3 className="text-xl font-playfair text-gray-900 font-semibold">
                                {step.title}
                              </h3>
                              <span className={`px-2 py-1 rounded-full text-xs font-medium transition-all duration-300 ${
                                index <= activeStep 
                                  ? 'bg-[#c6a46a]/10 text-[#c6a46a]' 
                                  : 'bg-gray-100 text-gray-500'
                              }`}>
                                {step.duration}
                              </span>
                            </div>
                            <p className="text-sm text-gray-500">{step.subtitle}</p>
                          </div>
                          
                          {/* Animated Check for Completed Steps */}
                          {index < activeStep && (
                            <div className="p-2 rounded-full bg-green-100 text-green-600 animate-bounce">
                              <CheckCircle className="w-5 h-5" />
                            </div>
                          )}
                        </div>

                        <p className="text-gray-600 mb-4">
                          {step.description}
                        </p>

                        {/* Expanded Details with Animation */}
                        {activeStep === index && (
                          <div className="mt-6 pt-6 border-t border-gray-100 animate-fade-in">
                            <div className="mb-4">
                              <div className="flex items-center gap-2 mb-2">
                                <TrendingUp className="w-4 h-4 text-[#c6a46a]" />
                                <span className="text-sm font-medium text-gray-800">
                                  {step.stat}
                                </span>
                              </div>
                              
                              <ul className="space-y-2">
                                {step.features.map((feature, idx) => (
                                  <li 
                                    key={idx} 
                                    className="flex items-center gap-3 text-sm text-gray-600 hover:text-gray-800 transition-colors"
                                    style={{ animationDelay: `${idx * 100}ms` }}
                                  >
                                    <div className="w-1.5 h-1.5 rounded-full bg-[#c6a46a] flex-shrink-0"></div>
                                    {feature}
                                  </li>
                                ))}
                              </ul>
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Process Navigation */}
            <div className={`mt-8 flex items-center justify-between transition-all duration-1000 delay-500 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}>
              <button
                onClick={() => setActiveStep(Math.max(0, activeStep - 1))}
                className="flex items-center gap-2 text-gray-600 hover:text-[#c6a46a] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                disabled={activeStep === 0}
              >
                <ArrowRight className="w-4 h-4 rotate-180" />
                Previous Step
              </button>
              
              <div className="flex items-center gap-2">
                {processSteps.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveStep(index)}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      index === activeStep 
                        ? 'bg-[#c6a46a] w-4' 
                        : index < activeStep 
                        ? 'bg-[#c6a46a]/50' 
                        : 'bg-gray-300'
                    }`}
                  />
                ))}
              </div>
              
              <button
                onClick={() => setActiveStep(Math.min(processSteps.length - 1, activeStep + 1))}
                className="flex items-center gap-2 text-gray-600 hover:text-[#c6a46a] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                disabled={activeStep === processSteps.length - 1}
              >
                Next Step
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Right Column - Visual Timeline & Projects */}
          <div className={`transition-all duration-1000 delay-400 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            {/* Live Projects Timeline */}
            <div className="bg-gradient-to-br from-white to-gray-50 rounded-2xl p-6 md:p-8 border border-gray-100 shadow-sm mb-8">
              <div className="flex items-center justify-between mb-8">
                <div>
                  <h3 className="text-2xl font-playfair text-gray-900 font-semibold mb-2">
                    Live Projects Timeline
                  </h3>
                  <p className="text-gray-500">Real-time progress tracking</p>
                </div>
                <div className="p-3 rounded-xl bg-[#c6a46a]/10">
                  <Clock className="w-6 h-6 text-[#c6a46a]" />
                </div>
              </div>

              <div className="space-y-6">
                {timelineProjects.map((project, index) => (
                  <div key={project.id} className="group">
                    <div className="flex items-center justify-between mb-2">
                      <div>
                        <h4 className="font-medium text-gray-900 group-hover:text-[#c6a46a] transition-colors">
                          {project.name}
                        </h4>
                        <p className="text-sm text-gray-500">{project.area}</p>
                      </div>
                      <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                        project.status === 'Reveal' ? 'bg-green-100 text-green-600' :
                        project.status === 'Execution' ? 'bg-[#c6a46a]/10 text-[#c6a46a]' :
                        project.status === 'Design' ? 'bg-blue-100 text-blue-600' :
                        'bg-purple-100 text-purple-600'
                      }`}>
                        {project.status}
                      </span>
                    </div>
                    
                    {/* Animated Progress Bar */}
                    <div className="relative h-2 bg-gray-200 rounded-full overflow-hidden">
                      <div 
                        className={`absolute top-0 left-0 h-full rounded-full transition-all duration-1000 ease-out ${
                          isVisible ? project.color : 'w-0'
                        }`}
                        style={{ 
                          width: isVisible ? `${project.progress}%` : '0%',
                          transitionDelay: `${index * 200}ms`
                        }}
                      ></div>
                      <div className="absolute top-0 left-0 h-full w-full bg-gradient-to-r from-transparent via-white/20 to-transparent animate-shimmer"></div>
                    </div>
                    
                    <div className="flex items-center justify-between mt-2">
                      <span className="text-xs text-gray-500">{project.progress}% Complete</span>
                      <ChevronRight className="w-4 h-4 text-gray-400 group-hover:text-[#c6a46a] group-hover:translate-x-1 transition-all" />
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8 pt-6 border-t border-gray-100">
                <button className="group w-full flex items-center justify-center gap-2 text-[#c6a46a] hover:text-[#a88548] transition-colors">
                  <span className="text-sm font-medium tracking-wide">View All Projects Dashboard</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>

            {/* Process Efficiency Stats */}
            <div className="grid grid-cols-2 gap-4">
              {[
                { 
                  icon: <Target className="w-5 h-5" />, 
                  value: "98%", 
                  label: "On Budget", 
                  trend: "+2% from last year" 
                },
                { 
                  icon: <Clock className="w-5 h-5" />, 
                  value: "96%", 
                  label: "On Time", 
                  trend: "Best in industry" 
                },
                { 
                  icon: <CheckCircle className="w-5 h-5" />, 
                  value: "100%", 
                  label: "Quality", 
                  trend: "Zero compromises" 
                },
                { 
                  icon: <BarChart3 className="w-5 h-5" />, 
                  value: "4.9/5", 
                  label: "Rating", 
                  trend: "Client reviews" 
                }
              ].map((stat, index) => (
                <div 
                  key={index}
                  className="bg-white p-4 rounded-xl border border-gray-100 hover:border-[#c6a46a]/30 hover:shadow-md transition-all duration-300"
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  <div className="flex items-center gap-3 mb-2">
                    <div className="p-2 rounded-lg bg-[#c6a46a]/10">
                      <div className="text-[#c6a46a]">
                        {stat.icon}
                      </div>
                    </div>
                    <div className="text-2xl font-playfair text-gray-900 font-bold">{stat.value}</div>
                  </div>
                  <div className="text-sm font-medium text-gray-800 mb-1">{stat.label}</div>
                  <div className="text-xs text-gray-500">{stat.trend}</div>
                </div>
              ))}
            </div>

            {/* CTA Video/Process Preview */}
            <div className="mt-8 relative group">
              <div className="bg-gradient-to-br from-[#c6a46a] to-[#d4b77d] rounded-2xl p-6 overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-16 translate-x-16"></div>
                <div className="relative z-10">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="p-3 rounded-xl bg-white/20 backdrop-blur-sm">
                      <PlayCircle className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-white">See Our Process in Action</h4>
                      <p className="text-white/80 text-sm">Behind the scenes of a luxury transformation</p>
                    </div>
                  </div>
                  <button className="group/btn w-full flex items-center justify-center gap-2 bg-white text-[#c6a46a] px-6 py-3 rounded-xl font-medium hover:bg-gray-50 transition-all duration-300">
                    <span>Watch Case Study</span>
                    <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ModernProcess;