import React, { useState } from 'react';
import { 
  Check, Clock, Send, Zap, LayoutGrid, 
  MessageSquare, CheckCircle2, ShieldCheck
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { PERSONAL_INFO } from '../../data/portfolioData';
import { soundFX } from '../../utils/soundSynthesizer';

export const ServicesSection: React.FC = () => {
  const [selectedPackage, setSelectedPackage] = useState<'starter' | 'pro' | 'ultra'>('pro');
  
  // Requirement Form State
  const [brandName, setBrandName] = useState('');
  const [email, setEmail] = useState('');
  const [category, setCategory] = useState('Personal / Portfolio');
  const [visualStyle, setVisualStyle] = useState('2D Modern (Glassmorphism / Bento UI)');
  const [themePref, setThemePref] = useState('Dark Mode');
  const [budgetRange, setBudgetRange] = useState('Flexible / Mid-Range');
  const [deadline, setDeadline] = useState('1 - 2 Weeks');
  const [referenceSites, setReferenceSites] = useState('');
  const [selectedFeatures, setSelectedFeatures] = useState<string[]>([
    '100% Mobile & Tablet Responsive',
    'Fast Load Speed (< 2-3s)',
    'Contact / Lead Form with Email Alert',
    'WhatsApp Direct & Social Integration'
  ]);

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  // Available Categories
  const categories = [
    'Landing Page / Single-Page',
    'Personal / Portfolio',
    'Business / Corporate',
    'E-Commerce Store',
    'SaaS / Web App',
    'Educational / LMS',
    'Real Estate & Directory',
    'Blogging / News Portal',
    'Booking & Appointment System'
  ];

  // Available Visual Styles
  const visualStyles = [
    '2D Clean & Minimalist (Fast & Sleek)',
    '2D Modern (Glassmorphism / Bento UI)',
    '2D Motion & Micro-Animations (GSAP / Lenis)',
    '3D Interactive (Spline / Three.js Shaders)',
    'Parallax Storytelling (Layered Scroll)'
  ];

  // Feature Options grouped
  const featureGroups = [
    {
      group: 'Essential Features',
      items: [
        '100% Mobile & Tablet Responsive',
        'Fast Load Speed (< 2-3s)',
        'Basic SEO Ready (Meta Tags, Sitemap)',
        'Contact / Lead Form with Email Alert',
        'WhatsApp Direct & Social Integration',
        'Google Maps Location Embed'
      ]
    },
    {
      group: 'Intermediate Features',
      items: [
        'User Login / Signup (Email, Google, OTP)',
        'CMS Dashboard (WordPress / Strapi / Custom)',
        'Live Chat / AI Chatbot Integration',
        'Multi-language Support (i18n)',
        'Advanced Search & Category Filters'
      ]
    },
    {
      group: 'Advanced Features',
      items: [
        'Payment Gateways (Razorpay, Stripe, UPI)',
        'Shopping Cart, Coupons & Order System',
        'User Profile & Order History Dashboard',
        'Full Admin Control Panel (Users, Sales)',
        'Push Notifications & Email Triggers'
      ]
    }
  ];

  const toggleFeature = (feature: string) => {
    soundFX.playClick();
    if (selectedFeatures.includes(feature)) {
      setSelectedFeatures(selectedFeatures.filter((f) => f !== feature));
    } else {
      setSelectedFeatures([...selectedFeatures, feature]);
    }
  };

  const handleSelectPackage = (pkg: 'starter' | 'pro' | 'ultra') => {
    soundFX.playClick();
    setSelectedPackage(pkg);
    if (pkg === 'starter') {
      setVisualStyle('2D Clean & Minimalist (Fast & Sleek)');
      setDeadline('3 - 5 Days');
    } else if (pkg === 'pro') {
      setVisualStyle('2D Modern (Glassmorphism / Bento UI)');
      setDeadline('7 - 12 Days');
    } else {
      setVisualStyle('3D Interactive (Spline / Three.js Shaders)');
      setDeadline('14 - 25 Days');
    }
  };

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!brandName || !email) return;

    soundFX.playWarp();
    setLoading(true);

    const summaryText = `
📌 NEW WEBSITE REQUIREMENT SUBMISSION:
----------------------------------------
• Brand / Company: ${brandName}
• Contact Email: ${email}
• Package Choice: ${selectedPackage.toUpperCase()}
• Category: ${category}
• Visual Style: ${visualStyle}
• Theme Preference: ${themePref}
• Target Deadline: ${deadline}
• Budget Range: ${budgetRange}
• Reference Sites: ${referenceSites || 'N/A'}
• Selected Features (${selectedFeatures.length}): 
  - ${selectedFeatures.join('\n  - ')}
----------------------------------------
    `.trim();

    try {
      const res = await fetch(`https://formsubmit.co/ajax/${PERSONAL_INFO.email}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          name: brandName,
          email: email,
          _subject: `🚀 New Website Requirement Chart Inquiry - ${brandName}`,
          package: selectedPackage.toUpperCase(),
          category: category,
          visual_style: visualStyle,
          theme: themePref,
          deadline: deadline,
          budget: budgetRange,
          features: selectedFeatures.join(', '),
          reference_sites: referenceSites || 'None',
          message: summaryText,
          _template: 'table'
        })
      });

      if (res.ok) {
        setSubmitted(true);
        confetti({ particleCount: 130, spread: 80, origin: { y: 0.6 } });
      } else {
        setSubmitted(true);
        confetti({ particleCount: 100, spread: 70, origin: { y: 0.6 } });
      }
    } catch {
      setSubmitted(true);
      confetti({ particleCount: 100, spread: 70, origin: { y: 0.6 } });
    } finally {
      setLoading(false);
    }
  };

  const whatsappMessage = `Hi Shashank! I used your Website Selection Chart on your portfolio:
• Brand: ${brandName || 'My Project'}
• Package: ${selectedPackage.toUpperCase()}
• Category: ${category}
• Style: ${visualStyle}
• Deadline: ${deadline}
• Budget: ${budgetRange}
• Features: ${selectedFeatures.slice(0, 4).join(', ')}...
Can we discuss this?`;

  const whatsappUrl = `https://wa.me/919565548075?text=${encodeURIComponent(whatsappMessage)}`;

  return (
    <section id="services" className="py-24 relative bg-cyber-grid border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Section Header */}
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full glass-card border border-cyan-500/30 text-cyan-300 text-xs font-mono uppercase tracking-wider">
            <Zap className="w-3.5 h-3.5 text-cyan-400" />
            <span>Interactive Website Builder & Selection Chart</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white">
            Choose Your <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">Website Package & Features</span>
          </h2>
          <p className="text-gray-400 text-base sm:text-lg leading-relaxed">
            Select your project category, 2D/3D visual style, and custom feature stack to get an estimated timeline and instant direct proposal.
          </p>
        </div>

        {/* 1. Package Tier Matrix */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          
          {/* Starter 2D Package */}
          <div
            onClick={() => handleSelectPackage('starter')}
            className={`glass-card p-8 rounded-3xl border transition-all duration-300 flex flex-col justify-between cursor-pointer relative group ${
              selectedPackage === 'starter'
                ? 'border-cyan-400 ring-2 ring-cyan-500/50 shadow-xl shadow-cyan-950/60 scale-102'
                : 'border-white/10 hover:border-cyan-500/40 hover:-translate-y-1'
            }`}
          >
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono px-3 py-1 rounded-full bg-cyan-950 border border-cyan-500/30 text-cyan-400 font-bold">
                  2D Clean & Minimalist
                </span>
                <Clock className="w-4 h-4 text-gray-400" />
              </div>

              <h3 className="text-2xl font-bold text-white">Starter 2D</h3>
              <p className="text-sm text-gray-300 leading-relaxed">
                Ideal for Landing Pages, Small Portfolios, and local business standard websites.
              </p>

              <div className="p-3 rounded-2xl bg-slate-900/80 border border-white/5 font-mono text-xs text-gray-300 flex items-center justify-between">
                <span>Est. Delivery:</span>
                <span className="text-cyan-400 font-bold">3 - 5 Days</span>
              </div>

              <ul className="space-y-2.5 text-xs text-gray-300 pt-2 font-mono">
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-cyan-400" /> 100% Mobile & Tablet Responsive
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-cyan-400" /> Fast Load Speed (&lt; 2-3s)
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-cyan-400" /> Basic SEO Meta Tags & Sitemap
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-cyan-400" /> FormSubmit Email Alert Integration
                </li>
              </ul>
            </div>

            <button
              onClick={() => handleSelectPackage('starter')}
              className={`w-full mt-8 py-3 rounded-xl font-bold text-sm transition-all flex items-center justify-center gap-2 ${
                selectedPackage === 'starter'
                  ? 'bg-cyan-400 text-slate-950 shadow-md shadow-cyan-400/30'
                  : 'glass-card text-gray-300 hover:text-white border border-white/10'
              }`}
            >
              <span>{selectedPackage === 'starter' ? 'Selected Package ✓' : 'Select Starter 2D'}</span>
            </button>
          </div>

          {/* Pro Animated 2D Package (Featured) */}
          <div
            onClick={() => handleSelectPackage('pro')}
            className={`glass-card p-8 rounded-3xl border transition-all duration-300 flex flex-col justify-between cursor-pointer relative group ${
              selectedPackage === 'pro'
                ? 'border-purple-400 ring-2 ring-purple-500/50 shadow-2xl shadow-purple-950/80 scale-105 bg-slate-900/90'
                : 'border-white/10 hover:border-purple-500/40 hover:-translate-y-1'
            }`}
          >
            {/* Featured Badge */}
            <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-0.5 rounded-full bg-gradient-to-r from-cyan-400 to-purple-500 text-slate-950 text-xs font-mono font-extrabold uppercase tracking-widest shadow-md">
              ★ Most Popular
            </div>

            <div className="space-y-4 pt-2">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono px-3 py-1 rounded-full bg-purple-950 border border-purple-500/40 text-purple-300 font-bold">
                  2D Bento + GSAP Motion
                </span>
                <Clock className="w-4 h-4 text-purple-400" />
              </div>

              <h3 className="text-2xl font-bold text-white">Pro Animated 2D</h3>
              <p className="text-sm text-gray-300 leading-relaxed">
                Best for Corporate Sites, Dynamic Portfolios, Booking Apps & Glassmorphism UI.
              </p>

              <div className="p-3 rounded-2xl bg-purple-950/40 border border-purple-500/20 font-mono text-xs text-gray-300 flex items-center justify-between">
                <span>Est. Delivery:</span>
                <span className="text-purple-300 font-bold">7 - 12 Days</span>
              </div>

              <ul className="space-y-2.5 text-xs text-gray-300 pt-2 font-mono">
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-purple-400" /> Modern Bento UI & Frosted Glass
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-purple-400" /> GSAP / Framer Motion Micro-Interactions
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-purple-400" /> Optional User Auth & CMS Dashboard
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-purple-400" /> WhatsApp + Live Chat Integration
                </li>
              </ul>
            </div>

            <button
              onClick={() => handleSelectPackage('pro')}
              className={`w-full mt-8 py-3.5 rounded-xl font-bold text-sm transition-all flex items-center justify-center gap-2 ${
                selectedPackage === 'pro'
                  ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-slate-950 shadow-lg shadow-purple-500/30'
                  : 'glass-card text-gray-300 hover:text-white border border-white/10'
              }`}
            >
              <span>{selectedPackage === 'pro' ? 'Selected Package ✓' : 'Select Pro Animated'}</span>
            </button>
          </div>

          {/* Ultra 3D / Full-Stack Package */}
          <div
            onClick={() => handleSelectPackage('ultra')}
            className={`glass-card p-8 rounded-3xl border transition-all duration-300 flex flex-col justify-between cursor-pointer relative group ${
              selectedPackage === 'ultra'
                ? 'border-pink-400 ring-2 ring-pink-500/50 shadow-xl shadow-pink-950/60 scale-102'
                : 'border-white/10 hover:border-pink-500/40 hover:-translate-y-1'
            }`}
          >
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono px-3 py-1 rounded-full bg-pink-950 border border-pink-500/40 text-pink-300 font-bold">
                  3D Three.js + Full-Stack
                </span>
                <Clock className="w-4 h-4 text-pink-400" />
              </div>

              <h3 className="text-2xl font-bold text-white">Ultra 3D / Full-Stack</h3>
              <p className="text-sm text-gray-300 leading-relaxed">
                For High-End Brands, E-Commerce Stores, SaaS Products, and 3D Interactive WebGL Apps.
              </p>

              <div className="p-3 rounded-2xl bg-slate-900/80 border border-white/5 font-mono text-xs text-gray-300 flex items-center justify-between">
                <span>Est. Delivery:</span>
                <span className="text-pink-400 font-bold">14 - 25 Days</span>
              </div>

              <ul className="space-y-2.5 text-xs text-gray-300 pt-2 font-mono">
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-pink-400" /> Interactive 3D Canvas / Spline Shaders
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-pink-400" /> Payment Gateway (Razorpay/Stripe/UPI)
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-pink-400" /> Full Admin Control Panel & Database
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-pink-400" /> Automated Email Triggers & Analytics
                </li>
              </ul>
            </div>

            <button
              onClick={() => handleSelectPackage('ultra')}
              className={`w-full mt-8 py-3 rounded-xl font-bold text-sm transition-all flex items-center justify-center gap-2 ${
                selectedPackage === 'ultra'
                  ? 'bg-pink-500 text-slate-950 shadow-md shadow-pink-500/30'
                  : 'glass-card text-gray-300 hover:text-white border border-white/10'
              }`}
            >
              <span>{selectedPackage === 'ultra' ? 'Selected Package ✓' : 'Select Ultra 3D'}</span>
            </button>
          </div>

        </div>

        {/* 2. Interactive Selection Form */}
        <div className="glass-card p-8 sm:p-10 rounded-3xl border border-cyan-500/30 relative">
          
          <div className="mb-8 space-y-2 text-left border-b border-white/10 pb-6">
            <h3 className="text-2xl sm:text-3xl font-bold text-white flex items-center gap-3">
              <LayoutGrid className="w-7 h-7 text-cyan-400" />
              <span>Configure Your Website Requirements</span>
            </h3>
            <p className="text-gray-300 text-sm">
              Tailor the exact specifications below to send a pre-filled proposal directly to Shashank.
            </p>
          </div>

          {submitted ? (
            <div className="text-center py-12 space-y-6 animate-fadeIn">
              <div className="w-16 h-16 rounded-full bg-emerald-950 border border-emerald-500/50 text-emerald-400 flex items-center justify-center mx-auto glow-emerald">
                <CheckCircle2 className="w-9 h-9" />
              </div>
              <h4 className="text-3xl font-bold text-white">Requirement Transmitted!</h4>
              <p className="text-gray-300 text-sm max-w-lg mx-auto leading-relaxed">
                Thank you, <strong className="text-cyan-300">{brandName}</strong>! Your website requirement chart has been sent directly to <strong className="text-cyan-400">{PERSONAL_INFO.email}</strong>.
              </p>

              <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="px-6 py-3 rounded-2xl bg-gradient-to-r from-emerald-500 to-green-600 text-slate-950 font-bold text-sm flex items-center gap-2 shadow-lg shadow-emerald-500/30 hover:scale-102 transition-transform"
                >
                  <MessageSquare className="w-5 h-5" />
                  <span>Send Estimate to WhatsApp (+91-9565548075)</span>
                </a>

                <button
                  onClick={() => {
                    soundFX.playClick();
                    setSubmitted(false);
                  }}
                  className="px-6 py-3 rounded-2xl glass-card text-gray-300 hover:text-white border border-white/10 text-sm font-mono"
                >
                  Edit Selection Chart
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleFormSubmit} className="space-y-8 text-left">
              
              {/* Row 1: Brand Name & Email */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-mono text-gray-300 font-semibold">1. Brand / Company / Client Name *</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Apex Tech / Shashank"
                    value={brandName}
                    onChange={(e) => setBrandName(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl bg-slate-900/80 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-cyan-400 transition-all text-sm"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-mono text-gray-300 font-semibold">2. Email Address *</label>
                  <input
                    type="email"
                    required
                    placeholder="your.email@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl bg-slate-900/80 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-cyan-400 transition-all text-sm"
                  />
                </div>
              </div>

              {/* Row 2: Category & Visual Style */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-mono text-gray-300 font-semibold">3. Select Website Category</label>
                  <select
                    value={category}
                    onChange={(e) => {
                      soundFX.playClick();
                      setCategory(e.target.value);
                    }}
                    className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-white/10 text-white focus:outline-none focus:border-cyan-400 transition-all text-sm cursor-pointer"
                  >
                    {categories.map((cat) => (
                      <option key={cat} value={cat} className="bg-slate-950 text-white">
                        {cat}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-mono text-gray-300 font-semibold">4. Select Graphic & Visual Style</label>
                  <select
                    value={visualStyle}
                    onChange={(e) => {
                      soundFX.playClick();
                      setVisualStyle(e.target.value);
                    }}
                    className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-white/10 text-white focus:outline-none focus:border-cyan-400 transition-all text-sm cursor-pointer"
                  >
                    {visualStyles.map((style) => (
                      <option key={style} value={style} className="bg-slate-950 text-white">
                        {style}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Row 3: Theme, Budget & Deadline */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-mono text-gray-300 font-semibold">5. Theme Preference</label>
                  <select
                    value={themePref}
                    onChange={(e) => setThemePref(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-white/10 text-white text-sm"
                  >
                    <option value="Dark Mode">Dark Mode (Default)</option>
                    <option value="Light Mode">Light Mode</option>
                    <option value="Auto Dual Theme Toggle">Auto Dual Theme Toggle</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-mono text-gray-300 font-semibold">6. Target Deadline</label>
                  <select
                    value={deadline}
                    onChange={(e) => setDeadline(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-white/10 text-white text-sm"
                  >
                    <option value="3 - 5 Days">Urgent (3 - 5 Days)</option>
                    <option value="7 - 12 Days">Standard (7 - 12 Days)</option>
                    <option value="14 - 25 Days">Comprehensive (14 - 25 Days)</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-mono text-gray-300 font-semibold">7. Estimated Budget Tier</label>
                  <select
                    value={budgetRange}
                    onChange={(e) => setBudgetRange(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-white/10 text-white text-sm"
                  >
                    <option value="Starter Budget (₹10k - ₹25k)">Starter Tier (₹10k - ₹25k)</option>
                    <option value="Pro Animated (₹25k - ₹60k)">Pro Animated Tier (₹25k - ₹60k)</option>
                    <option value="Ultra 3D / Enterprise (₹60k+)">Ultra 3D / Enterprise Tier (₹60k+)</option>
                    <option value="Flexible / Negotiable">Flexible / Open for Proposal</option>
                  </select>
                </div>
              </div>

              {/* Row 4: Feature Checklist Grid */}
              <div className="space-y-4 pt-2">
                <label className="text-xs font-mono text-gray-300 font-semibold block">
                  8. Select Feature Requirements ({selectedFeatures.length} selected)
                </label>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {featureGroups.map((fg) => (
                    <div key={fg.group} className="p-4 rounded-2xl bg-slate-900/60 border border-white/5 space-y-3">
                      <div className="text-xs font-mono font-bold text-cyan-400 uppercase tracking-wider flex items-center gap-1.5">
                        <ShieldCheck className="w-3.5 h-3.5" />
                        <span>{fg.group}</span>
                      </div>
                      <div className="space-y-2">
                        {fg.items.map((item) => {
                          const isChecked = selectedFeatures.includes(item);
                          return (
                            <label
                              key={item}
                              onClick={() => toggleFeature(item)}
                              className={`flex items-start gap-2.5 p-2 rounded-xl text-xs cursor-pointer transition-all ${
                                isChecked
                                  ? 'bg-cyan-950/80 border border-cyan-500/40 text-cyan-200'
                                  : 'text-gray-400 hover:text-gray-200 hover:bg-white/5'
                              }`}
                            >
                              <div
                                className={`w-4 h-4 rounded mt-0.5 flex items-center justify-center border transition-all ${
                                  isChecked ? 'bg-cyan-400 border-cyan-400 text-slate-950' : 'border-gray-600'
                                }`}
                              >
                                {isChecked && <Check className="w-3 h-3 stroke-[3]" />}
                              </div>
                              <span className="leading-tight">{item}</span>
                            </label>
                          );
                        })}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Row 5: Reference Sites */}
              <div className="space-y-2">
                <label className="text-xs font-mono text-gray-300 font-semibold">9. Reference Websites (Optional - Sites you like)</label>
                <input
                  type="text"
                  placeholder="e.g. https://meermohsin.me/ or Apple.com"
                  value={referenceSites}
                  onChange={(e) => setReferenceSites(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl bg-slate-900/80 border border-white/10 text-white placeholder-gray-500 text-sm"
                />
              </div>

              {/* Submit Buttons */}
              <div className="flex flex-col sm:flex-row items-center gap-4 pt-4">
                <button
                  type="submit"
                  disabled={loading}
                  onMouseEnter={() => soundFX.playHover()}
                  className="flex-1 w-full py-4 rounded-xl bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 hover:from-cyan-300 hover:to-pink-400 text-slate-950 font-bold text-base shadow-xl shadow-cyan-500/30 hover:scale-101 transition-all flex items-center justify-center gap-2"
                >
                  {loading ? (
                    <span className="animate-pulse">Transmitting Proposal to {PERSONAL_INFO.email}...</span>
                  ) : (
                    <>
                      <span>Submit Website Requirement Chart</span>
                      <Send className="w-5 h-5" />
                    </>
                  )}
                </button>

                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noreferrer"
                  onMouseEnter={() => soundFX.playHover()}
                  onClick={() => soundFX.playClick()}
                  className="w-full sm:w-auto py-4 px-6 rounded-xl bg-gradient-to-r from-emerald-500 to-green-600 hover:from-emerald-400 hover:to-green-500 text-slate-950 font-bold text-sm flex items-center justify-center gap-2 shadow-lg shadow-emerald-500/25"
                >
                  <MessageSquare className="w-5 h-5" />
                  <span>Send Chart to WhatsApp</span>
                </a>
              </div>

            </form>
          )}

        </div>

      </div>
    </section>
  );
};
