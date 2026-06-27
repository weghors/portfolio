import { useState, useEffect, useRef } from 'react';
import { Sparkles, Brain, Wand2, Code, Palette, Zap } from 'lucide-react';
import { cn } from '@/lib/utils';

const aiSkills = [
  { 
    name: 'Sora', 
    level: 90, 
    category: 'video',
    description: 'AI 视频生成'
  },
  { 
    name: 'Veo', 
    level: 88, 
    category: 'video',
    description: 'Google AI 视频'
  },
  { 
    name: 'Claude', 
    level: 95, 
    category: 'assistant',
    description: 'AI 创意助手'
  },
  { 
    name: 'DeepSeek V4 Pro', 
    level: 92, 
    category: 'assistant',
    description: '深度推理'
  },
  { 
    name: 'Codex Agent', 
    level: 85, 
    category: 'coding',
    description: 'AI 编程'
  },
  { 
    name: 'Midjourney', 
    level: 88, 
    category: 'image',
    description: 'AI 图像创作'
  },
  { 
    name: 'Figma', 
    level: 82, 
    category: 'design',
    description: 'UI/UX 设计'
  },
  { 
    name: 'After Effects', 
    level: 78, 
    category: 'design',
    description: '动效设计'
  },
];

const categories = [
  { key: 'all', label: '全部', icon: Zap },
  { key: 'video', label: '视频生成', icon: Sparkles },
  { key: 'assistant', label: 'AI助手', icon: Brain },
  { key: 'coding', label: '编程辅助', icon: Code },
  { key: 'image', label: '图像创作', icon: Palette },
  { key: 'design', label: '设计工具', icon: Wand2 },
];

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const filteredSkills = activeCategory === 'all' 
    ? aiSkills 
    : aiSkills.filter((skill) => skill.category === activeCategory);

  return (
    <section ref={sectionRef} id="skills" className="py-16 md:py-20 bg-charcoal-dark/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-10">
          <span className="text-amber-gold font-medium tracking-wider uppercase text-sm">我的技能</span>
          <h2 className="text-3xl md:text-4xl font-display font-bold mt-2 text-cream">
            AI 工具 & 专业技能
          </h2>
        </div>

        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {categories.map((category) => {
            const Icon = category.icon;
            return (
              <button
                key={category.key}
                onClick={() => setActiveCategory(category.key)}
                className={cn(
                  'flex items-center gap-1.5 px-4 py-2 rounded-full transition-all duration-300 text-xs',
                  activeCategory === category.key
                    ? 'bg-gradient-gold text-charcoal font-semibold shadow-lg shadow-amber-gold/30'
                    : 'glass-light text-cream/80 hover:text-amber-gold hover:border-amber-gold/50'
                )}
              >
                <Icon size={14} />
                <span>{category.label}</span>
              </button>
            );
          })}
        </div>

        <div className="grid md:grid-cols-2 gap-4 max-w-4xl mx-auto">
          {filteredSkills.map((skill, index) => (
            <div key={skill.name} className="glass-light rounded-xl p-4">
              <div className="flex justify-between items-center mb-2">
                <div>
                  <span className="text-cream font-medium">{skill.name}</span>
                  <span className="text-cream/50 text-xs ml-2">{skill.description}</span>
                </div>
                <span className="text-amber-gold font-semibold text-sm">{skill.level}%</span>
              </div>
              <div className="h-1.5 bg-charcoal rounded-full overflow-hidden">
                <div
                  className={cn(
                    'h-full bg-gradient-gold rounded-full skill-bar-fill',
                    isVisible && 'active'
                  )}
                  style={{
                    '--skill-level': `${skill.level}%`,
                    transitionDelay: `${index * 0.08}s`,
                  } as React.CSSProperties}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
