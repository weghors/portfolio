import { ArrowDown, Sparkles } from 'lucide-react';
import { useTypewriter } from '@/hooks/useTypewriter';

export default function Hero() {
  const scrollToPortfolio = () => {
    const element = document.querySelector('#portfolio');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const typewriterWords = [
    'AI 创作者',
    '数字媒体艺术家',
    'Sora 探索者',
    'Claude 助手',
    'DeepSeek 研究者',
    '创意工程师',
    'Codex 开发者',
  ];

  const typewriterText = useTypewriter(typewriterWords, 100, 50, 2000);

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden noise-overlay"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-charcoal-dark/50 via-charcoal to-charcoal" />
      
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-amber-gold/10 rounded-full blur-3xl animate-pulse-slow" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-terracotta/10 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '2s' }} />

      <div className="container mx-auto px-6 relative z-10 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-light mb-8 animate-fade-in">
          <Sparkles size={16} className="text-amber-gold" />
          <span className="text-cream/80 text-sm">数字媒体艺术 · AI 创意探索</span>
        </div>

        <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-bold mb-6 animate-fade-in-up">
          <span className="text-cream">你好，我是</span>
          <br />
          <span className="text-gradient-gold">张良</span>
        </h1>

        <p className="text-xl md:text-2xl text-cream/70 max-w-2xl mx-auto mb-4 font-light animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
          <span className="text-amber-gold">{typewriterText}</span>
          <span className="animate-pulse">|</span>
        </p>

        <p className="text-lg text-cream/60 max-w-2xl mx-auto mb-12 font-light animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
          探索 AI 时代的创意边界，用数字艺术讲述独特的故事
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
          <a
            href="#portfolio"
            onClick={(e) => {
              e.preventDefault();
              document.querySelector('#portfolio')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="btn-primary"
          >
            查看作品
          </a>
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="btn-secondary"
          >
            联系我
          </a>
        </div>
      </div>

      <button
        onClick={scrollToPortfolio}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-cream/50 hover:text-amber-gold transition-colors animate-bounce"
        aria-label="向下滚动"
      >
        <ArrowDown size={32} />
      </button>
    </section>
  );
}
