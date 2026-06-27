import { useState, useRef, useEffect } from 'react';
import { Play, X, Image, Video, Box, Palette } from 'lucide-react';
import { cn } from '@/lib/utils';

interface Work {
  id: number;
  title: string;
  category: string;
  type: 'video' | 'image' | 'placeholder';
  src?: string;
  size: 'large' | 'medium' | 'small';
}

const worksByCategory: { [key: string]: Work[] } = {
  video: [
    {
      id: 1,
      title: '复活黄家驹',
      category: 'video',
      type: 'video',
      src: '/works/resurrection-wong-ka-kui.mp4',
      size: 'large',
    },
    {
      id: 2,
      title: '动画',
      category: 'video',
      type: 'video',
      src: '/works/a-liang.mp4',
      size: 'small',
    },
    {
      id: 3,
      title: '视觉科技',
      category: 'video',
      type: 'video',
      src: '/works/film特效作业.mp4',
      size: 'small',
    },
    {
      id: 4,
      title: '艺术鉴赏',
      category: 'video',
      type: 'video',
      src: '/works/剪辑作业.mp4',
      size: 'medium',
    },
    {
      id: 5,
      title: '栏目宣传片',
      category: 'video',
      type: 'video',
      src: '/works/栏目宣传片.mp4',
      size: 'medium',
    },
  ],
  image: [
    {
      id: 1,
      title: '踏虎凿花',
      category: 'image',
      type: 'image',
      src: '/works/graphic/tahu-zaohua-main.png',
      size: 'large',
    },
    {
      id: 2,
      title: '频道LOGO',
      category: 'image',
      type: 'image',
      src: '/works/graphic/tv-logo.png',
      size: 'small',
    },
    {
      id: 3,
      title: '踏虎凿花',
      category: 'image',
      type: 'image',
      src: '/works/graphic/tahu-zaohua.jpg',
      size: 'small',
    },
    {
      id: 4,
      title: '广告创意',
      category: 'image',
      type: 'image',
      src: '/works/graphic/ad-design.png',
      size: 'medium',
    },
    {
      id: 5,
      title: '光影配色',
      category: 'image',
      type: 'image',
      src: '/works/graphic/light-shadow-color.jpg',
      size: 'medium',
    },
  ],
  '3d': [
    {
      id: 1,
      title: '三维雕塑',
      category: '3d',
      type: 'image',
      src: '/works/3d/sculpture-4.png',
      size: 'large',
    },
    {
      id: 2,
      title: '三维作品',
      category: '3d',
      type: 'image',
      src: '/works/3d/sculpture-2.png',
      size: 'small',
    },
    {
      id: 3,
      title: '三维设计',
      category: '3d',
      type: 'image',
      src: '/works/3d/sculpture-6.png',
      size: 'small',
    },
    {
      id: 4,
      title: '雕塑作品',
      category: '3d',
      type: 'image',
      src: '/works/3d/sculpture-123.png',
      size: 'medium',
    },
    {
      id: 5,
      title: '三维建模',
      category: '3d',
      type: 'image',
      src: '/works/3d/sculpture-33.png',
      size: 'medium',
    },
  ],
  illustration: [
    {
      id: 1,
      title: 'CG风景插画',
      category: 'illustration',
      type: 'image',
      src: '/works/illustration/cg-1.jpg',
      size: 'large',
    },
    {
      id: 2,
      title: 'CG插画二',
      category: 'illustration',
      type: 'image',
      src: '/works/illustration/cg-2.jpg',
      size: 'small',
    },
    {
      id: 3,
      title: 'CG插画三',
      category: 'illustration',
      type: 'image',
      src: '/works/illustration/cg-3.jpg',
      size: 'small',
    },
    {
      id: 4,
      title: '动画场景设定',
      category: 'illustration',
      type: 'image',
      src: '/works/illustration/scene-design.png',
      size: 'medium',
    },
    {
      id: 5,
      title: '风景手绘',
      category: 'illustration',
      type: 'image',
      src: '/works/illustration/landscape.png',
      size: 'medium',
    },
  ],
};

const categories = [
  { key: 'video', label: '视频创作', icon: Video },
  { key: 'image', label: '平面设计', icon: Image },
  { key: '3d', label: '三维作品', icon: Box },
  { key: 'illustration', label: '插画绘画', icon: Palette },
];

export default function Portfolio() {
  const [activeCategory, setActiveCategory] = useState('video');
  const [lightboxWork, setLightboxWork] = useState<Work | null>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  const displayWorks = worksByCategory[activeCategory] || [];

  const openLightbox = (work: Work) => {
    if (work.type === 'placeholder') return;
    setLightboxWork(work);
  };

  const closeLightbox = () => {
    setLightboxWork(null);
  };

  useEffect(() => {
    if (lightboxWork && lightboxWork.type === 'video' && videoRef.current) {
      videoRef.current.play().catch(() => {});
    }
  }, [lightboxWork]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeLightbox();
    };
    if (lightboxWork) {
      document.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [lightboxWork]);

  return (
    <section id="portfolio" className="py-16 md:py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-10">
          <span className="text-amber-gold font-medium tracking-wider uppercase text-sm">作品集</span>
          <h2 className="text-3xl md:text-4xl font-display font-bold mt-2 text-cream">
            我的作品
          </h2>
          <p className="text-cream/50 mt-3 text-sm">
            数字媒体艺术创作 · 持续更新中
          </p>
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

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 max-w-5xl mx-auto">
          {displayWorks.map((work) => (
            <div
              key={`${work.category}-${work.id}`}
              className={cn(
                'group relative rounded-xl overflow-hidden transition-all duration-300',
                work.size === 'large' && 'md:col-span-2 md:row-span-2',
                work.size === 'medium' && 'md:col-span-1 md:row-span-1',
                work.type === 'placeholder'
                  ? 'glass-light border border-dashed border-cream/10 hover:border-amber-gold/30 cursor-pointer'
                  : 'cursor-pointer hover:-translate-y-1 hover:shadow-xl hover:shadow-amber-gold/20'
              )}
              style={{ minHeight: work.size === 'large' ? '320px' : work.size === 'medium' ? '200px' : '150px' }}
              onClick={() => openLightbox(work)}
            >
              {work.type === 'video' && work.src && (
                <>
                  <video
                    src={work.src}
                    className="w-full h-full object-cover"
                    muted
                    playsInline
                    preload="metadata"
                  />
                  <div className="absolute inset-0 bg-charcoal/30 flex items-center justify-center">
                    <div className="w-16 h-16 rounded-full bg-amber-gold/90 flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Play size={28} className="text-charcoal ml-1" />
                    </div>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-charcoal/80 to-transparent">
                    <h4 className="text-cream font-medium text-sm">{work.title}</h4>
                  </div>
                </>
              )}

              {work.type === 'image' && work.src && (
                <>
                  <img src={work.src} alt={work.title} className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all">
                    <h4 className="text-cream font-medium text-sm">{work.title}</h4>
                  </div>
                </>
              )}

              {work.type === 'placeholder' && (
                <div className="absolute inset-0 flex flex-col items-center justify-center text-cream/30 group-hover:text-amber-gold/50 transition-colors">
                  <div className="w-10 h-10 rounded-full bg-cream/5 flex items-center justify-center mb-2 group-hover:bg-amber-gold/10 transition-colors">
                    <span className="text-lg">+</span>
                  </div>
                  <p className="text-xs">添加作品</p>
                </div>
              )}
            </div>
          ))}
        </div>


      </div>

      {lightboxWork && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-charcoal/90 backdrop-blur-md p-4 animate-fade-in"
          onClick={closeLightbox}
        >
          <button
            onClick={closeLightbox}
            className="absolute top-6 right-6 p-3 rounded-full bg-cream/10 text-cream hover:bg-amber-gold hover:text-charcoal transition-colors"
          >
            <X size={24} />
          </button>

          <div
            className="relative w-full max-w-4xl animate-zoom-in"
            onClick={(e) => e.stopPropagation()}
          >
            {lightboxWork.type === 'video' && lightboxWork.src && (
              <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-amber-gold/10">
                <video
                  ref={videoRef}
                  src={lightboxWork.src}
                  className="w-full aspect-video bg-charcoal-dark"
                  controls
                  playsInline
                />
              </div>
            )}

            {lightboxWork.type === 'image' && lightboxWork.src && (
              <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-amber-gold/10">
                <img
                  src={lightboxWork.src}
                  alt={lightboxWork.title}
                  className="w-full h-auto max-h-[80vh] object-contain bg-charcoal-dark"
                />
              </div>
            )}

            <div className="mt-4 text-center">
              <h3 className="text-xl font-display font-semibold text-cream">
                {lightboxWork.title}
              </h3>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
