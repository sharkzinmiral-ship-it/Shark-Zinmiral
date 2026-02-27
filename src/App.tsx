import { motion } from 'motion/react';
import { Phone, MessageCircle, MapPin, Clock, ShieldCheck, Leaf, Star, CheckCircle2, Utensils, Heart, ArrowRight } from 'lucide-react';

const WHATSAPP_NUMBER = "919876543210"; // Placeholder
const PHONE_NUMBER = "+91 98765 43210";

export default function App() {
  const openWhatsApp = (message: string) => {
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`, '_blank');
  };

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  return (
    <div className="min-h-screen font-sans text-stone-800 bg-brand-50/30 overflow-x-hidden">
      {/* Navbar */}
      <nav className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-md z-50 border-b border-stone-200/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-brand-500 flex items-center justify-center text-white">
              <Utensils size={18} />
            </div>
            <span className="font-display font-bold text-xl tracking-tight text-stone-900">Ghar Ka Tiffin</span>
          </div>
          <button 
            onClick={() => openWhatsApp("Hi, I want to know more about Ghar Ka Tiffin!")}
            className="hidden sm:flex items-center gap-2 bg-brand-500 hover:bg-brand-600 text-white px-4 py-2 rounded-full font-medium transition-colors text-sm"
          >
            <MessageCircle size={16} />
            Order Now
          </button>
        </div>
      </nav>

      <main className="pt-16">
        {/* 1. Hero Section */}
        <section className="relative pt-12 pb-20 lg:pt-24 lg:pb-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div 
              initial="hidden"
              animate="visible"
              variants={staggerContainer}
              className="max-w-2xl"
            >
              <motion.div variants={fadeInUp} className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-100 text-brand-700 font-medium text-sm mb-6">
                <MapPin size={14} />
                Serving Mithapur & Nearby Areas
              </motion.div>
              <motion.h1 variants={fadeInUp} className="font-display text-5xl lg:text-6xl font-extrabold leading-[1.1] tracking-tight text-stone-900 mb-6">
                Ghar Jaisa Swad, <br/>
                <span className="text-brand-500">Roz Fresh Tiffin</span>
              </motion.h1>
              <motion.p variants={fadeInUp} className="text-lg text-stone-600 mb-8 flex items-center gap-3 font-medium">
                <span>Healthy</span> • <span>Hygienic</span> • <span>Affordable</span>
              </motion.p>
              <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-4">
                <button 
                  onClick={() => openWhatsApp("Hi! I'd like to order a tiffin.")}
                  className="flex items-center justify-center gap-2 bg-brand-500 hover:bg-brand-600 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all shadow-lg shadow-brand-500/30 hover:shadow-brand-500/40 hover:-translate-y-0.5"
                >
                  <MessageCircle size={20} />
                  Order on WhatsApp
                </button>
                <a 
                  href={`tel:${PHONE_NUMBER.replace(/\s/g, '')}`}
                  className="flex items-center justify-center gap-2 bg-white border-2 border-stone-200 hover:border-brand-500 hover:text-brand-600 text-stone-700 px-8 py-4 rounded-full font-semibold text-lg transition-all"
                >
                  <Phone size={20} />
                  Call Now
                </a>
              </motion.div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="absolute inset-0 bg-brand-500 rounded-[3rem] rotate-3 opacity-10"></div>
              <img 
                src="https://images.unsplash.com/photo-1546833999-b9f581a1996d?q=80&w=2070&auto=format&fit=crop" 
                alt="Delicious Indian Thali" 
                className="relative rounded-[3rem] shadow-2xl object-cover h-[400px] lg:h-[500px] w-full"
                referrerPolicy="no-referrer"
              />
              <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-2xl shadow-xl flex items-center gap-4">
                <div className="bg-green-100 p-3 rounded-full text-green-600">
                  <Leaf size={24} />
                </div>
                <div>
                  <p className="font-bold text-stone-900">100% Pure Veg</p>
                  <p className="text-sm text-stone-500">Freshly cooked daily</p>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* 2. About Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={staggerContainer}
              className="grid md:grid-cols-2 gap-12 items-center"
            >
              <motion.div variants={fadeInUp} className="order-2 md:order-1 relative">
                <img 
                  src="https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?q=80&w=2068&auto=format&fit=crop" 
                  alt="Cooking with care" 
                  className="rounded-3xl shadow-lg w-full h-[400px] object-cover"
                  referrerPolicy="no-referrer"
                />
              </motion.div>
              <motion.div variants={fadeInUp} className="order-1 md:order-2">
                <h2 className="font-display text-3xl md:text-4xl font-bold text-stone-900 mb-6">
                  Missing Mom's Food? <br/>We've got you covered.
                </h2>
                <p className="text-stone-600 text-lg mb-8 leading-relaxed">
                  We understand how hard it is to stay away from home and crave that simple, comforting home-cooked meal. At Ghar Ka Tiffin, we bring that exact warmth and taste to your doorstep every single day.
                </p>
                <div className="grid sm:grid-cols-2 gap-4">
                  {[
                    { icon: Leaf, text: "Fresh ingredients daily" },
                    { icon: ShieldCheck, text: "No preservatives" },
                    { icon: Heart, text: "Made with care" },
                    { icon: CheckCircle2, text: "Hygienic kitchen" }
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <div className="text-brand-500 bg-brand-50 p-2 rounded-full">
                        <item.icon size={20} />
                      </div>
                      <span className="font-medium text-stone-800">{item.text}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* 3. Today's Menu Section */}
        <section className="py-20 bg-brand-50/50">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              <h2 className="font-display text-3xl md:text-4xl font-bold text-stone-900 mb-4">Today's Special Menu</h2>
              <p className="text-stone-600 mb-10">Our menu changes daily so you never get bored!</p>
              
              <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-stone-100 relative">
                <div className="absolute top-0 right-0 bg-brand-500 text-white text-xs font-bold px-4 py-1.5 rounded-bl-xl uppercase tracking-wider">
                  Most Popular
                </div>
                <div className="p-8 md:p-10">
                  <div className="flex justify-center mb-6">
                    <img 
                      src="https://images.unsplash.com/photo-1631452180519-c014fe946bc0?q=80&w=1974&auto=format&fit=crop" 
                      alt="Thali" 
                      className="w-32 h-32 rounded-full object-cover shadow-md border-4 border-white"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  <ul className="space-y-4 text-lg font-medium text-stone-700 max-w-xs mx-auto text-left">
                    <li className="flex items-center gap-3 border-b border-stone-100 pb-3">
                      <CheckCircle2 className="text-brand-500 shrink-0" size={20} /> 4 Soft Phulka Roti
                    </li>
                    <li className="flex items-center gap-3 border-b border-stone-100 pb-3">
                      <CheckCircle2 className="text-brand-500 shrink-0" size={20} /> 1 Seasonal Sabzi (Aloo Gobi)
                    </li>
                    <li className="flex items-center gap-3 border-b border-stone-100 pb-3">
                      <CheckCircle2 className="text-brand-500 shrink-0" size={20} /> Yellow Dal Tadka
                    </li>
                    <li className="flex items-center gap-3 border-b border-stone-100 pb-3">
                      <CheckCircle2 className="text-brand-500 shrink-0" size={20} /> Steamed Jeera Rice
                    </li>
                    <li className="flex items-center gap-3">
                      <CheckCircle2 className="text-brand-500 shrink-0" size={20} /> Fresh Green Salad & Pickle
                    </li>
                  </ul>
                  <div className="mt-8 pt-6 border-t border-stone-100">
                    <button 
                      onClick={() => openWhatsApp("Hi, I want to order today's special menu.")}
                      className="bg-stone-900 hover:bg-stone-800 text-white px-8 py-3 rounded-full font-medium transition-colors inline-flex items-center gap-2"
                    >
                      Order Today's Meal <ArrowRight size={18} />
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* 4. Pricing Section */}
        <section className="py-20 bg-white" id="pricing">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <h2 className="font-display text-3xl md:text-4xl font-bold text-stone-900 mb-4">Simple, Affordable Plans</h2>
              <p className="text-stone-600">Choose a plan that fits your appetite. No hidden charges, free delivery in Mithapur.</p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {/* Basic Plan */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-stone-50 rounded-3xl p-8 border border-stone-200 hover:border-brand-300 transition-colors flex flex-col"
              >
                <h3 className="font-display text-xl font-bold text-stone-900 mb-2">Basic Plan</h3>
                <div className="flex items-baseline gap-1 mb-6">
                  <span className="text-4xl font-bold text-stone-900">₹80</span>
                  <span className="text-stone-500">/meal</span>
                </div>
                <ul className="space-y-4 mb-8 flex-1">
                  <li className="flex items-start gap-3 text-stone-700">
                    <CheckCircle2 className="text-brand-500 shrink-0 mt-0.5" size={18} />
                    4 Roti
                  </li>
                  <li className="flex items-start gap-3 text-stone-700">
                    <CheckCircle2 className="text-brand-500 shrink-0 mt-0.5" size={18} />
                    1 Seasonal Sabzi
                  </li>
                  <li className="flex items-start gap-3 text-stone-700">
                    <CheckCircle2 className="text-brand-500 shrink-0 mt-0.5" size={18} />
                    Dal
                  </li>
                  <li className="flex items-start gap-3 text-stone-700">
                    <CheckCircle2 className="text-brand-500 shrink-0 mt-0.5" size={18} />
                    Salad & Pickle
                  </li>
                </ul>
                <button 
                  onClick={() => openWhatsApp("Hi, I want to subscribe to the Basic Plan (₹80/meal).")}
                  className="w-full py-3 rounded-xl font-semibold text-brand-600 bg-brand-100 hover:bg-brand-200 transition-colors"
                >
                  Choose Plan
                </button>
              </motion.div>

              {/* Standard Plan */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="bg-white rounded-3xl p-8 border-2 border-brand-500 shadow-xl shadow-brand-500/10 relative flex flex-col transform md:-translate-y-4"
              >
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-brand-500 text-white px-4 py-1 rounded-full text-sm font-bold tracking-wide">
                  MOST POPULAR
                </div>
                <h3 className="font-display text-xl font-bold text-stone-900 mb-2 mt-2">Standard Plan</h3>
                <div className="flex items-baseline gap-1 mb-6">
                  <span className="text-4xl font-bold text-stone-900">₹100</span>
                  <span className="text-stone-500">/meal</span>
                </div>
                <ul className="space-y-4 mb-8 flex-1">
                  <li className="flex items-start gap-3 text-stone-700">
                    <CheckCircle2 className="text-brand-500 shrink-0 mt-0.5" size={18} />
                    4 Roti
                  </li>
                  <li className="flex items-start gap-3 text-stone-700">
                    <CheckCircle2 className="text-brand-500 shrink-0 mt-0.5" size={18} />
                    1 Seasonal Sabzi
                  </li>
                  <li className="flex items-start gap-3 text-stone-700">
                    <CheckCircle2 className="text-brand-500 shrink-0 mt-0.5" size={18} />
                    Dal
                  </li>
                  <li className="flex items-start gap-3 text-stone-700 font-medium">
                    <CheckCircle2 className="text-brand-500 shrink-0 mt-0.5" size={18} />
                    Rice
                  </li>
                  <li className="flex items-start gap-3 text-stone-700">
                    <CheckCircle2 className="text-brand-500 shrink-0 mt-0.5" size={18} />
                    Salad & Pickle
                  </li>
                </ul>
                <button 
                  onClick={() => openWhatsApp("Hi, I want to subscribe to the Standard Plan (₹100/meal).")}
                  className="w-full py-3 rounded-xl font-semibold text-white bg-brand-500 hover:bg-brand-600 transition-colors shadow-md shadow-brand-500/20"
                >
                  Choose Plan
                </button>
              </motion.div>

              {/* Protein Plan */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="bg-stone-900 rounded-3xl p-8 border border-stone-800 text-white flex flex-col"
              >
                <h3 className="font-display text-xl font-bold text-white mb-2">Protein Plan</h3>
                <div className="flex items-baseline gap-1 mb-6">
                  <span className="text-4xl font-bold text-white">₹130</span>
                  <span className="text-stone-400">/meal</span>
                </div>
                <ul className="space-y-4 mb-8 flex-1">
                  <li className="flex items-start gap-3 text-stone-300">
                    <CheckCircle2 className="text-brand-500 shrink-0 mt-0.5" size={18} />
                    4 Roti + Rice
                  </li>
                  <li className="flex items-start gap-3 text-stone-300 font-medium text-white">
                    <CheckCircle2 className="text-brand-500 shrink-0 mt-0.5" size={18} />
                    Paneer / High Protein Sabzi
                  </li>
                  <li className="flex items-start gap-3 text-stone-300 font-medium text-white">
                    <CheckCircle2 className="text-brand-500 shrink-0 mt-0.5" size={18} />
                    Extra Thick Dal
                  </li>
                  <li className="flex items-start gap-3 text-stone-300">
                    <CheckCircle2 className="text-brand-500 shrink-0 mt-0.5" size={18} />
                    Salad & Pickle
                  </li>
                  <li className="text-sm text-brand-400 italic mt-4">
                    * Best for gym & working professionals
                  </li>
                </ul>
                <button 
                  onClick={() => openWhatsApp("Hi, I want to subscribe to the Protein Plan (₹130/meal).")}
                  className="w-full py-3 rounded-xl font-semibold text-stone-900 bg-white hover:bg-stone-200 transition-colors"
                >
                  Choose Plan
                </button>
              </motion.div>
            </div>
          </div>
        </section>

        {/* 5. Why Choose Us Section */}
        <section className="py-20 bg-brand-50/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="font-display text-3xl md:text-4xl font-bold text-stone-900 mb-4">Why Ghar Ka Tiffin?</h2>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { icon: Leaf, title: "Freshly Cooked", desc: "Meals prepared daily with fresh, locally sourced ingredients." },
                { icon: ShieldCheck, title: "Hygienic Kitchen", desc: "Strict hygiene protocols followed in our cooking space." },
                { icon: Clock, title: "On-Time Delivery", desc: "Hot food delivered right to your desk or home on time." },
                { icon: Heart, title: "Affordable Pricing", desc: "Premium quality home-style food that doesn't break the bank." }
              ].map((feature, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="bg-white p-6 rounded-2xl shadow-sm border border-stone-100 text-center"
                >
                  <div className="w-14 h-14 mx-auto bg-brand-100 text-brand-600 rounded-2xl flex items-center justify-center mb-4 rotate-3">
                    <feature.icon size={28} />
                  </div>
                  <h3 className="font-bold text-lg text-stone-900 mb-2">{feature.title}</h3>
                  <p className="text-stone-600 text-sm">{feature.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* 7. How It Works Section */}
        <section className="py-20 bg-stone-900 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">How It Works</h2>
              <p className="text-stone-400">Get your daily meals sorted in 3 simple steps</p>
            </div>
            <div className="grid md:grid-cols-3 gap-8 relative">
              <div className="hidden md:block absolute top-1/2 left-[15%] right-[15%] h-0.5 bg-stone-700 -translate-y-1/2 z-0"></div>
              {[
                { step: "01", title: "Choose Plan", desc: "Select from our Basic, Standard, or Protein plans." },
                { step: "02", title: "Confirm on WhatsApp", desc: "Send us a message with your location and plan choice." },
                { step: "03", title: "Get Daily Delivery", desc: "Enjoy hot, fresh, home-style meals delivered daily." }
              ].map((item, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.2 }}
                  className="relative z-10 flex flex-col items-center text-center"
                >
                  <div className="w-16 h-16 rounded-full bg-brand-500 flex items-center justify-center text-2xl font-display font-bold mb-6 shadow-lg shadow-brand-500/20 border-4 border-stone-900">
                    {item.step}
                  </div>
                  <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                  <p className="text-stone-400 max-w-xs">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* 6. Customer Reviews Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="font-display text-3xl md:text-4xl font-bold text-stone-900 mb-4">Loved by Customers</h2>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                { name: "Rahul S.", role: "Software Engineer", text: "Finally found a tiffin service that doesn't use excess oil. The food tastes exactly like what my mom makes. Highly recommended!" },
                { name: "Priya M.", role: "Student", text: "The Standard plan is perfect for me. The delivery is always on time and the variety in sabzis keeps it interesting every day." },
                { name: "Amit K.", role: "Bank Employee", text: "Switched to their Protein plan 2 months ago. The quality of paneer and dal is excellent. Very hygienic packaging too." }
              ].map((review, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="bg-stone-50 p-8 rounded-3xl border border-stone-100"
                >
                  <div className="flex gap-1 text-amber-400 mb-4">
                    {[1,2,3,4,5].map(star => <Star key={star} size={18} fill="currentColor" />)}
                  </div>
                  <p className="text-stone-700 italic mb-6">"{review.text}"</p>
                  <div>
                    <p className="font-bold text-stone-900">{review.name}</p>
                    <p className="text-sm text-stone-500">{review.role}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* 8. Contact Section */}
        <section className="py-20 bg-brand-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-white rounded-[2.5rem] p-8 md:p-12 shadow-xl border border-stone-100 text-center">
              <h2 className="font-display text-3xl font-bold text-stone-900 mb-2">Ready to order?</h2>
              <p className="text-stone-600 mb-8">Drop us a message on WhatsApp or call us directly.</p>
              
              <div className="flex flex-col sm:flex-row justify-center gap-4 mb-10">
                <button 
                  onClick={() => openWhatsApp("Hi, I want to start my tiffin service.")}
                  className="flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20bd5a] text-white px-8 py-4 rounded-full font-semibold text-lg transition-colors shadow-lg shadow-green-500/20"
                >
                  <MessageCircle size={24} />
                  WhatsApp Us
                </button>
                <a 
                  href={`tel:${PHONE_NUMBER.replace(/\s/g, '')}`}
                  className="flex items-center justify-center gap-2 bg-stone-900 hover:bg-stone-800 text-white px-8 py-4 rounded-full font-semibold text-lg transition-colors"
                >
                  <Phone size={20} />
                  {PHONE_NUMBER}
                </a>
              </div>

              <div className="grid sm:grid-cols-2 gap-6 text-left border-t border-stone-100 pt-8">
                <div className="flex items-start gap-3">
                  <MapPin className="text-brand-500 shrink-0 mt-1" size={24} />
                  <div>
                    <h4 className="font-bold text-stone-900">Delivery Area</h4>
                    <p className="text-stone-600 text-sm mt-1">Mithapur, Kadamkuan, Fraser Road, and 3km radius.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Clock className="text-brand-500 shrink-0 mt-1" size={24} />
                  <div>
                    <h4 className="font-bold text-stone-900">Delivery Timings</h4>
                    <p className="text-stone-600 text-sm mt-1">Lunch: 12:30 PM - 2:00 PM<br/>Dinner: 7:30 PM - 9:00 PM</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-stone-950 text-stone-400 py-8 text-center">
        <div className="max-w-7xl mx-auto px-4 flex flex-col items-center">
          <div className="flex items-center gap-2 mb-4 text-white">
            <Utensils size={20} className="text-brand-500" />
            <span className="font-display font-bold text-xl tracking-tight">Ghar Ka Tiffin</span>
          </div>
          <p className="text-sm">© {new Date().getFullYear()} Ghar Ka Tiffin. All rights reserved.</p>
        </div>
      </footer>

      {/* Sticky WhatsApp Button */}
      <motion.button
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 1, type: "spring" }}
        onClick={() => openWhatsApp("Hi, I need a tiffin!")}
        className="fixed bottom-6 right-6 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-xl shadow-green-500/30 hover:scale-110 transition-transform flex items-center justify-center group"
        aria-label="Order on WhatsApp"
      >
        <MessageCircle size={28} />
        <span className="absolute right-full mr-4 bg-stone-900 text-white text-sm px-3 py-1.5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
          Order Now
        </span>
      </motion.button>
    </div>
  );
}
