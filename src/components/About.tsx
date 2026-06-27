import { Palette, Sparkles, Film, Box, PenTool, Zap } from 'lucide-react';

const tags = [
  { icon: Film, label: '视频创作' },
  { icon: Palette, label: '平面设计' },
  { icon: Box, label: '三维建模' },
  { icon: PenTool, label: '插画绘画' },
  { icon: Sparkles, label: 'AI 创意' },
  { icon: Zap, label: '动态图形' },
];

export default function About() {
  return (
    <section id="about" className="section-padding relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-amber-gold font-medium tracking-wider uppercase text-sm">关于我</span>
          <h2 className="text-4xl md:text-5xl font-display font-bold mt-4 text-cream">
            认识一下我
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="relative">
            <div className="aspect-square rounded-2xl overflow-hidden glass-light p-2">
              <div className="w-full h-full rounded-xl bg-gradient-to-br from-amber-gold/20 via-terracotta/20 to-sage/20 flex items-center justify-center">
                <div className="text-center">
                  <Palette size={120} className="text-amber-gold/50 mx-auto mb-4" />
                  <div className="text-amber-gold/60 font-display text-xl">张良</div>
                </div>
              </div>
            </div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-amber-gold/20 rounded-full blur-2xl" />
            <div className="absolute -top-6 -left-6 w-24 h-24 bg-terracotta/20 rounded-full blur-2xl" />
          </div>

          <div>
            <h3 className="text-2xl md:text-3xl font-display font-semibold text-cream mb-6">
              热爱<span className="text-amber-gold">AI 创意</span>的数字媒体艺术学生
            </h3>
            <p className="text-cream/70 leading-relaxed mb-6">
              我是张良，一名数字媒体艺术专业的大三学生。我对人工智能在艺术创作中的应用充满热情，
              热衷于探索 AI 工具如 Sora、Veo、Claude、DeepSeek 等在数字艺术领域的无限可能。
            </p>
            <p className="text-cream/70 leading-relaxed mb-6">
              我相信 AI 不是替代创作者，而是赋能创作者的最佳伙伴。通过 Codex Agent 等工具，
              我能够更高效地将创意转化为现实，创作出融合技术与艺术的独特作品。
            </p>
            <p className="text-cream/70 leading-relaxed mb-8">
              在这个 AI 飞速发展的时代，我致力于成为连接艺术创意与前沿技术的桥梁，
              用数字媒体讲述独特的视觉故事。
            </p>

            <div className="mb-6">
              <h4 className="text-amber-gold font-medium mb-3 text-sm">创作方向</h4>
              <div className="flex flex-wrap gap-2">
                {tags.map((tag) => {
                  const Icon = tag.icon;
                  return (
                    <div
                      key={tag.label}
                      className="glass-light rounded-full px-4 py-2 flex items-center gap-2 text-cream/80 text-sm"
                    >
                      <Icon size={14} className="text-amber-gold" />
                      <span>{tag.label}</span>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
