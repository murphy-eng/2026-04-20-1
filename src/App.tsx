/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Menu, X, ChevronRight, ChevronLeft, Calendar, 
  Smile, Heart, Shield, Sparkles, MapPin, 
  Phone, Mail, Facebook, Instagram, Send,
  CheckCircle2, Info
} from 'lucide-react';

// --- Types ---
interface Clinic {
  name: string;
  times: string[];
}

// --- Components ---

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  
  const navItems = [
    { name: '關於醫師', href: '#doctor' },
    { name: '隱形矯正', href: '#invisalign' },
    { name: '兒童矯正', href: '#children' },
    { name: '案例分享', href: '#cases' },
    { name: '矯正專欄', href: '#blog' },
    { name: '門診資訊', href: '#appointment' },
  ];

  return (
    <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-brand-accent/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          <div className="flex-shrink-0 flex items-center gap-3">
            <div className="text-xl font-bold tracking-tight text-brand-text">
              <span className="text-brand-accent">Dr. lulu</span> 微笑矯正
              <div className="text-[10px] uppercase tracking-widest font-normal opacity-60">
                Orthodontics | Invisalign | Smile Aesthetics
              </div>
            </div>
          </div>
          
          <div className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <a 
                key={item.name} 
                href={item.href}
                className="text-sm font-medium text-brand-text hover:text-brand-accent transition-colors"
              >
                {item.name}
              </a>
            ))}
          </div>

          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="p-2">
              {isOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-b border-brand-accent/10"
          >
            <div className="px-4 py-6 space-y-4">
              {navItems.map((item) => (
                <a 
                  key={item.name} 
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="block text-base font-medium text-brand-text hover:text-brand-accent"
                >
                  {item.name}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = () => {
  return (
    <section className="relative pt-32 pb-20 overflow-hidden bg-brand-primary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-block px-4 py-1.5 mb-6 rounded-full bg-brand-accent/20 text-brand-text text-sm font-medium">
              SMILE AESTHETICS
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 leading-tight mb-6">
              呂靖雯 <span className="text-brand-accent font-normal italic">醫師</span>
            </h1>
            <p className="text-xl text-brand-text/80 mb-8 max-w-lg leading-relaxed">
              隱適美認證鑽石級診斷，為您客製專屬的「數位美學」矯正計畫。我們結合精密設備與細膩美學，讓笑容成為您最自信的語彙。
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="#appointment" className="px-8 py-4 bg-brand-accent text-white rounded-full font-medium hover:shadow-lg transition-all">
                預約諮詢
              </a>
              <a href="#invisalign" className="px-8 py-4 bg-white border border-brand-accent/30 text-brand-text rounded-full font-medium hover:bg-brand-accent/5 transition-all">
                療程內容
              </a>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="aspect-square rounded-[60%_40%_70%_30%/50%_60%_40%_50%] bg-brand-accent/10 absolute -inset-4 animate-pulse" />
            <img 
              src="https://lh3.googleusercontent.com/d/1kyZn4EeONNoi7FM0KC2WCdy7CDalRg9b" 
              alt="Dr. Lulu" 
              className="relative z-10 w-full rounded-[60%_40%_30%_70%/60%_30%_70%_40%] object-cover shadow-2xl transition-all duration-700"
              referrerPolicy="no-referrer"
            />
            {/* Visual Accents */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-white/50 backdrop-blur rounded-full border border-white flex items-center justify-center p-4 shadow-lg animate-bounce duration-[3000ms]">
               <div className="text-center">
                 <div className="text-brand-accent font-bold">Diamond</div>
                 <div className="text-[10px] uppercase">Provider</div>
               </div>
            </div>
          </motion.div>
        </div>

        {/* Feature Icons */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-24">
          {[
            { icon: <Heart className="w-6 h-6" />, label: '兒童矯正', sub: '齒顎發展引導' },
            { icon: <Sparkles className="w-6 h-6" />, label: '客製美學', sub: '專屬臉型評估' },
            { icon: <Shield className="w-6 h-6" />, label: '多種選擇', sub: '齒顎矯正專家' },
            { icon: <Smile className="w-6 h-6" />, label: '數位精準', sub: '隱適美鑽石級' },
          ].map((item, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              className="bg-white p-6 rounded-3xl shadow-sm border border-brand-accent/5 flex flex-col items-center text-center hover:shadow-md transition-shadow"
            >
              <div className="w-12 h-12 bg-brand-primary rounded-2xl flex items-center justify-center text-brand-accent mb-4">
                {item.icon}
              </div>
              <div className="font-bold text-gray-900">{item.label}</div>
              <div className="text-xs text-brand-text/60 mt-1">{item.sub}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const ProblemSection = () => {
  const problems = [
    { name: '深咬、暴牙', img: 'https://picsum.photos/seed/dental1/400/300' },
    { name: '開咬', img: 'https://picsum.photos/seed/dental2/400/300' },
    { name: '錯咬', img: 'https://picsum.photos/seed/dental3/400/300' },
    { name: '明顯牙縫', img: 'https://picsum.photos/seed/dental4/400/300' },
    { name: '反咬、戽斗', img: 'https://picsum.photos/seed/dental5/400/300' },
    { name: '擁擠不整齊', img: 'https://picsum.photos/seed/dental6/400/300' },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">您有這些牙齒困擾嗎？</h2>
          <div className="w-20 h-1 bg-brand-accent mx-auto rounded-full" />
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {problems.map((p, i) => (
            <motion.div 
              key={i}
              whileHover={{ y: -5 }}
              className="text-center group"
            >
              <div className="aspect-square rounded-2xl overflow-hidden mb-4 bg-gray-100 border border-brand-accent/10">
                <img src={p.img} alt={p.name} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all" referrerPolicy="no-referrer" />
              </div>
              <p className="text-sm font-medium text-brand-text">{p.name}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const InvisalignSection = () => {
  return (
    <section id="invisalign" className="py-24 bg-brand-primary overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <h2 className="text-4xl font-bold text-gray-900">隱適美矯正 <br/><span className="text-brand-accent">打造自信笑容</span></h2>
            <div className="space-y-6 text-brand-text/90 leading-relaxed">
              <div className="flex gap-4">
                <CheckCircle2 className="w-6 h-6 text-brand-accent flex-shrink-0" />
                <p>依照個人齒型客製透明牙套，透過定期更換，溫和地將牙齒推移至理想位置。</p>
              </div>
              <div className="flex gap-4">
                <CheckCircle2 className="w-6 h-6 text-brand-accent flex-shrink-0" />
                <p>美觀、可自行摘戴、舒適度高，在各年齡層皆有其適合的矯正設計。</p>
              </div>
            </div>
            <div className="aspect-video bg-white rounded-3xl shadow-inner border border-brand-accent/10 flex items-center justify-center p-8 relative">
               <div className="text-center group cursor-pointer">
                 <div className="w-16 h-16 bg-brand-accent rounded-full flex items-center justify-center mx-auto mb-4 text-white group-hover:scale-110 transition-transform">
                   <ChevronRight />
                 </div>
                 <p className="text-sm text-brand-text opacity-60">觀看隱適美動畫影片</p>
               </div>
            </div>
          </div>
          
          <div className="grid grid-cols-1 gap-8">
             <h3 className="text-2xl font-bold text-center lg:text-left mb-4">隱形矯正流程</h3>
             <div className="space-y-4">
                {[
                  '1. 櫃台掛號，填寫諮詢單',
                  '2. 診間諮詢看診',
                  '3. 拍攝X光蒐集口腔資料',
                  '4. 使用數位全彩掃描口腔',
                  '5. 醫師講解牙齒狀況',
                  '6. 擬定矯正計畫，製作矯正器',
                  '7. 齒顎矯正衛教說明',
                  '8. 開始進行矯正治療',
                  '9. 預約回診，定期追蹤'
                ].map((step, i) => (
                  <motion.div 
                    key={i}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05 }}
                    className="flex items-center gap-4 bg-white p-4 rounded-2xl shadow-sm border border-brand-accent/5"
                  >
                    <div className="w-8 h-8 rounded-full bg-brand-accent/10 flex items-center justify-center text-xs font-bold text-brand-accent">
                      {i + 1}
                    </div>
                    <span className="text-sm font-medium">{step.substring(3)}</span>
                  </motion.div>
                ))}
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const ChildrenSection = () => {
  return (
    <section id="children" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">兒童、青少年矯正黃金期</h2>
          <div className="w-20 h-1 bg-brand-accent mx-auto rounded-full" />
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {[
            { period: '乳牙期', age: '6歲前', desc: '引導良好口腔習慣，改善口呼吸、吮指等，矯正肌肉功能。' },
            { period: '混合齒列期', age: '約 6-12 歲', desc: '乳牙與恆牙並存，配合生長潛力，矯正速度快。' },
            { period: '完全矯正期', age: '12-18 歲', desc: '恆牙換完，孩子配合度高，易建立齒顎完整觀念。' }
          ].map((item, i) => (
            <div key={i} className="bg-brand-primary p-8 rounded-[40px] text-center border border-brand-accent/5">
              <div className="text-brand-accent font-bold mb-2">{item.period}</div>
              <div className="text-2xl font-bold mb-4">{item.age}</div>
              <p className="text-sm text-brand-text/80 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center bg-brand-primary p-12 rounded-[60px]">
           <div>
              <div className="inline-block px-4 py-1 bg-brand-accent text-white text-xs rounded-full mb-4 uppercase">Invisalign First</div>
              <h3 className="text-3xl font-bold mb-6">兒童隱適美</h3>
              <p className="text-brand-text/90 mb-6 leading-relaxed">
                在 6-12 歲發育關鍵期，透過早期評估與適當引導擴大牙弓，引導恆牙與顎骨正向發展。通常 1 年半左右即可結束療程，不僅能避免拔牙，也有助於改善咬合、發音。
              </p>
              <img src="https://picsum.photos/seed/kids-dental/600/400" className="rounded-3xl shadow-lg border border-white" referrerPolicy="no-referrer" />
           </div>
           <div className="space-y-8">
              <div className="bg-white p-8 rounded-[40px] shadow-sm border border-brand-accent/5">
                <h4 className="text-xl font-bold mb-4">肌功能矯正 (MRC)</h4>
                <p className="text-sm text-brand-text/80 leading-relaxed">
                  適用於 5-12 歲。從「口腔功能」角度改善咬合與發育。調整舌頭、嘴唇位置，改善口呼吸等不良習慣，有助臉面正常發展。
                </p>
              </div>
              <img src="https://picsum.photos/seed/kids-ortho/600/400" className="rounded-3xl shadow-lg border border-white" referrerPolicy="no-referrer" />
           </div>
        </div>
      </div>
    </section>
  );
};

const DoctorSection = () => {
  return (
    <section id="doctor" className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="relative"
          >
             <div className="aspect-[4/5] rounded-[20%] bg-brand-accent/10 absolute -bottom-8 -left-8 w-full h-full" />
             <img src="https://lh3.googleusercontent.com/d/1kyZn4EeONNoi7FM0KC2WCdy7CDalRg9b" className="relative z-10 rounded-[20%] shadow-2xl" referrerPolicy="no-referrer" />
             <div className="absolute -bottom-4 right-4 z-20 bg-white p-6 rounded-2xl shadow-xl max-w-xs border border-brand-accent/10">
               <p className="italic text-2xl font-handwriting text-brand-accent">「當牙齒找到對的位置，笑容也找回自己！」</p>
               <p className="text-sm text-right mt-2 text-brand-text/60">— 呂靖雯醫師</p>
             </div>
          </motion.div>

          <div>
            <div className="inline-block px-4 py-1 bg-brand-accent text-white text-xs rounded-full mb-4 uppercase">Diamond Level Expert</div>
            <h2 className="text-4xl font-bold mb-6">呂靖雯 <span className="text-brand-accent">醫師</span></h2>
            <p className="text-lg text-brand-text mb-8 leading-relaxed">
              專精隱適美矯正、自鎖式矯正及傳統矯正。我們重視每位患者的齒列分布與美學需求，打造最自然、健康的完美比例。
            </p>
            
            <div className="space-y-4 mb-10">
              <h4 className="font-bold flex items-center gap-2">
                <Info className="w-5 h-5 text-brand-accent" /> 學經歷介紹
              </h4>
              <ul className="grid sm:grid-cols-2 gap-3 text-sm text-brand-text/80">
                {[
                  '部定齒顎矯正科 專科醫師',
                  '中華民國齒顎矯正學會 會員',
                  '中華民國隱形矯正學會 會員',
                  '世界齒顎矯正學會 會員',
                  '隱適美數位矯正系統 認證醫師',
                  '隱適美專屬講師 / 鑽石級醫師',
                  '肌功能矯正MRC課程 結訓醫師',
                  '高雄醫學大學 牙醫學碩士',
                ].map((item, i) => (
                  <li key={i} className="flex gap-2 items-start">
                    <span className="text-brand-accent mt-0.5">•</span> {item}
                  </li>
                ))}
              </ul>
            </div>
            
            <a href="#appointment" className="inline-flex items-center gap-2 px-8 py-4 bg-brand-accent text-white rounded-full font-medium hover:shadow-lg transition-all">
              立即諮詢報名 <ChevronRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

const CaseSharing = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const cases = [
    { title: '齒列擁擠矯正', before: 'https://picsum.photos/seed/case1b/800/600', after: 'https://picsum.photos/seed/case1a/800/600', desc: '透過隱適美精準排齊，改善咬合與臉型。' },
    { title: '深咬案例改善', before: 'https://picsum.photos/seed/case2b/800/600', after: 'https://picsum.photos/seed/case2a/800/600', desc: '調整齒軸角度，找回完美下顎線條。' },
    { title: '兒童早期引導', before: 'https://picsum.photos/seed/case3b/800/600', after: 'https://picsum.photos/seed/case3a/800/600', desc: '利用發育黃金期，引導齒顎健康成長。' },
  ];

  const next = () => setCurrentIndex((currentIndex + 1) % cases.length);
  const prev = () => setCurrentIndex((currentIndex - 1 + cases.length) % cases.length);

  return (
    <section id="cases" className="py-24 bg-brand-primary">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-end mb-12">
          <div>
            <h2 className="text-3xl font-bold mb-2">案例分享</h2>
            <p className="text-brand-text/60">見證微笑的蛻變過程</p>
          </div>
          <div className="flex gap-2">
            <button onClick={prev} className="w-12 h-12 rounded-full border border-brand-accent/20 flex items-center justify-center hover:bg-white transition-all"><ChevronLeft /></button>
            <button onClick={next} className="w-12 h-12 rounded-full border border-brand-accent/20 flex items-center justify-center hover:bg-white transition-all"><ChevronRight /></button>
          </div>
        </div>

        <div className="relative overflow-hidden group">
          <AnimatePresence mode="wait">
            <motion.div 
              key={currentIndex}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="grid lg:grid-cols-2 gap-8 items-center"
            >
              <div className="grid grid-cols-2 gap-4">
                 <div className="space-y-4">
                   <div className="text-xs uppercase tracking-widest opacity-40">Before</div>
                   <img src={cases[currentIndex].before} className="rounded-2xl shadow-md border border-white" referrerPolicy="no-referrer" />
                 </div>
                 <div className="space-y-4">
                    <div className="text-xs uppercase tracking-widest text-brand-accent font-bold">After</div>
                    <img src={cases[currentIndex].after} className="rounded-2xl shadow-md border-brand-accent/20" referrerPolicy="no-referrer" />
                 </div>
              </div>
              <div className="bg-white p-12 rounded-[50px] shadow-sm">
                 <h3 className="text-2xl font-bold mb-4">{cases[currentIndex].title}</h3>
                 <p className="text-brand-text/80 mb-8 leading-relaxed">{cases[currentIndex].desc}</p>
                 <button className="text-brand-accent font-bold text-sm flex items-center gap-2 hover:underline">
                   查看完整案例詳情 <ChevronRight className="w-4 h-4" />
                 </button>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

const BlogSection = () => {
  const posts = [
    { title: '隱適美 vs 傳統矯正：該如何選擇？', date: '2026.03.15', img: 'https://picsum.photos/seed/post1/600/400' },
    { title: '小孩幾歲該開始看矯正科？關鍵時間點。', date: '2026.03.10', img: 'https://picsum.photos/seed/post2/600/400' },
    { title: '矯正後的維持器，為什麼一定要戴好？', date: '2026.03.02', img: 'https://picsum.photos/seed/post3/600/400' },
  ];

  return (
    <section id="blog" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">矯正專欄</h2>
          <p className="text-brand-text/60">專業醫師為您解答牙科大小事</p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {posts.map((post, i) => (
            <motion.div key={i} whileHover={{ y: -10 }} className="group">
              <div className="aspect-[3/2] rounded-3xl overflow-hidden mb-6 relative">
                 <img src={post.img} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" referrerPolicy="no-referrer" />
                 <div className="absolute top-4 left-4 bg-white/90 px-3 py-1 rounded-full text-[10px] font-bold text-brand-accent">{post.date}</div>
              </div>
              <h3 className="text-xl font-bold mb-4 group-hover:text-brand-accent transition-colors">{post.title}</h3>
              <button className="text-sm font-medium text-brand-text/40 group-hover:text-brand-accent flex items-center gap-2">
                MORE <ChevronRight className="w-3 h-3" />
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const AppointmentSection = () => {
  const clinics: Clinic[] = [
    { name: '永馨牙醫診所', times: ['9:30-12:00', '14:30-17:30', '18:30-21:30'] },
    { name: '欣樂牙醫診所', times: ['9:30-12:00', '14:30-17:30', '18:30-21:30'] },
    { name: '豐樺牙醫診所', times: ['9:30-12:00', '14:30-17:30', '18:30-21:30'] },
  ];

  return (
    <section id="appointment" className="py-24 bg-brand-primary">
      <div className="max-w-5xl mx-auto px-4">
        <div className="bg-white rounded-[60px] p-8 md:p-16 shadow-2xl border border-brand-accent/10">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">與我們聯繫</h2>
            <p className="text-brand-text/60">預約初步評估，踏上微笑之旅</p>
          </div>

          <form className="space-y-8">
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-2">
                <label className="text-sm font-bold ml-1">姓名 *</label>
                <input type="text" className="w-full bg-brand-primary/50 border border-brand-accent/10 rounded-2xl p-4 focus:ring-2 ring-brand-accent outline-none" required />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold ml-1">聯絡電話 *</label>
                <input type="tel" className="w-full bg-brand-primary/50 border border-brand-accent/10 rounded-2xl p-4 focus:ring-2 ring-brand-accent outline-none" required />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-bold ml-1">E-Mail</label>
              <input type="email" className="w-full bg-brand-primary/50 border border-brand-accent/10 rounded-2xl p-4 focus:ring-2 ring-brand-accent outline-none" />
            </div>

            <div className="space-y-4">
              <label className="text-sm font-bold ml-1">您要諮詢的牙醫診所 *</label>
              <div className="grid sm:grid-cols-3 gap-3">
                {clinics.map(c => (
                  <label key={c.name} className="relative group cursor-pointer">
                    <input type="radio" name="clinic" className="peer sr-only" required />
                    <div className="p-4 rounded-2xl border-2 border-transparent bg-brand-primary/50 peer-checked:border-brand-accent peer-checked:bg-white transition-all text-center text-sm">
                      {c.name}
                    </div>
                  </label>
                ))}
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-bold ml-1">備註 (若有任何問題，歡迎填寫)</label>
              <textarea className="w-full bg-brand-primary/50 border border-brand-accent/10 rounded-2xl p-4 h-32 focus:ring-2 ring-brand-accent outline-none" />
            </div>

            <button type="submit" className="w-full py-5 bg-brand-accent text-white rounded-2xl font-bold text-lg hover:shadow-xl hover:-translate-y-1 transition-all flex items-center justify-center gap-3">
              <Send className="w-5 h-5" /> 送出預約申請
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-20">
      <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-4 gap-12">
        <div className="md:col-span-2">
          <div className="text-2xl font-bold mb-6">Dr. Lulu <span className="text-brand-accent text-sm font-normal">呂靖雯醫師</span></div>
          <p className="text-gray-400 text-sm max-w-md leading-relaxed mb-8">
            結合數位掃描科技與細膩臨床經驗，為每一位患者量身打造健康與美感兼具的齒顎計畫。
          </p>
          <div className="flex gap-4">
            <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-brand-accent transition-all text-white"><Facebook className="w-5 h-5" /></a>
            <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-brand-accent transition-all text-white"><Instagram className="w-5 h-5" /></a>
          </div>
        </div>
        
        <div>
          <h4 className="font-bold mb-6">快速連結</h4>
          <ul className="space-y-4 text-sm text-gray-400">
            <li><a href="#doctor" className="hover:text-brand-accent">關於醫師</a></li>
            <li><a href="#invisalign" className="hover:text-brand-accent">隱適美技術</a></li>
            <li><a href="#children" className="hover:text-brand-accent">兒童/青少年矯正</a></li>
            <li><a href="#cases" className="hover:text-brand-accent">矯正案例</a></li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold mb-6">聯絡資訊</h4>
          <ul className="space-y-4 text-sm text-gray-400">
            <li className="flex gap-2 items-center"><Phone className="w-4 h-4 text-brand-accent" /> 07-XXXX-XXXX</li>
            <li className="flex gap-2 items-center"><Mail className="w-4 h-4 text-brand-accent" /> dr.lulu@smileortho.com</li>
            <li className="flex gap-2 items-start"><MapPin className="w-4 h-4 text-brand-accent mt-1" /> 高雄市XX區XXXX路XXX號</li>
          </ul>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 mt-20 pt-8 border-t border-white/10 text-center text-xs text-gray-500">
        © 2026 Dr. Lulu Orthodontics. All rights reserved. 
      </div>
    </footer>
  );
};

export default function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <ProblemSection />
      <InvisalignSection />
      <ChildrenSection />
      <DoctorSection />
      <CaseSharing />
      <BlogSection />
      <AppointmentSection />
      <Footer />
    </div>
  );
}
