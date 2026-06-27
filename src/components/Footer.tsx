import { useState, useEffect } from 'react';
import {
  Github,
  Play,
  BookOpen,
  Music,
  Mail,
  ChevronUp,
  Heart,
} from 'lucide-react';

const quickLinks = [
  { name: '首页', href: '#home' },
  { name: '关于', href: '#about' },
  { name: '技能', href: '#skills' },
  { name: '项目', href: '#projects' },
  { name: '联系', href: '#contact' },
];

const socialLinks = [
  { icon: Github, href: 'https://github.com/weghors/weghors.github.io', label: 'GitHub' },
  { icon: Play, href: 'https://space.bilibili.com/352177295?spm_id_from=333.1007.0.0', label: 'Bilibili' },
  { icon: BookOpen, href: 'https://www.zhihu.com/people/xiao-ke-nai-ao', label: '知乎' },
  { icon: Music, href: 'https://www.douyin.com/user/MS4wLjABAAAAngXAqvWgU7mIpuuVFWBmQNsXHEGZeN-plCkQBwXPdhw?from_tab_name=main', label: '抖音' },
  { icon: Mail, href: 'mailto:2049132480@qq.com', label: 'Email' },
];

export default function Footer() {
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 500);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNavClick = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-charcoal-dark border-t border-cream/10 relative">
      <div className="container mx-auto px-6 py-16">
        <div className="grid md:grid-cols-3 gap-12">
          <div>
            <a
              href="#home"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick('#home');
              }}
              className="text-3xl font-display font-bold text-gradient-gold inline-block mb-4"
            >
              Portfolio
            </a>
            <p className="text-cream/60 leading-relaxed mb-6">
              专注于创建优雅、高性能的数字体验。
              将设计与技术完美融合，打造令人难忘的作品。
            </p>
            <div className="flex gap-3">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    onClick={(e) => {
                      if (social.href.startsWith('#')) {
                        e.preventDefault();
                        handleNavClick(social.href);
                      }
                    }}
                    target={social.href.startsWith('#') ? '_self' : '_blank'}
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className="w-10 h-10 rounded-full glass-light flex items-center justify-center text-cream/70 hover:text-amber-gold hover:border-amber-gold/50 transition-all duration-300"
                  >
                    <Icon size={18} />
                  </a>
                );
              })}
            </div>
          </div>

          <div>
            <h3 className="text-lg font-display font-semibold text-cream mb-6">
              快速导航
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavClick(link.href);
                    }}
                    className="text-cream/60 hover:text-amber-gold transition-colors duration-300"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-display font-semibold text-cream mb-6">
              联系信息
            </h3>
            <ul className="space-y-3 text-cream/60">
              <li>2049132480@qq.com</li>
              <li>19071422673</li>
              <li>长江大学</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-cream/10 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-cream/50 text-sm">
            © {new Date().getFullYear()} Portfolio. 保留所有权利。
          </p>
          <p className="text-cream/50 text-sm flex items-center gap-2">
            用 <Heart size={14} className="text-amber-gold fill-amber-gold" /> 精心打造
          </p>
        </div>
      </div>

      <button
        onClick={scrollToTop}
        className={`fixed bottom-8 right-8 w-12 h-12 rounded-full bg-gradient-gold text-charcoal shadow-lg shadow-amber-gold/30 flex items-center justify-center transition-all duration-300 hover:scale-110 z-40 ${
          showBackToTop
            ? 'opacity-100 translate-y-0'
            : 'opacity-0 translate-y-10 pointer-events-none'
        }`}
        aria-label="回到顶部"
      >
        <ChevronUp size={24} />
      </button>
    </footer>
  );
}
