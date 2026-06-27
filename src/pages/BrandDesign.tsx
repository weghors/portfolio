import { ArrowLeft, Palette, Type, Layers, Image as ImageIcon, Grid3X3 } from 'lucide-react';
import { Link } from 'react-router-dom';

const BrandDesign = () => {
  const colors = {
    primary: [
      { name: '深海蓝', hex: '#0A2540', rgb: 'RGB 10, 37, 64' },
      { name: '皇家蓝', hex: '#1E40AF', rgb: 'RGB 30, 64, 175' },
      { name: '天际蓝', hex: '#3B82F6', rgb: 'RGB 59, 130, 246' },
    ],
    accent: [
      { name: '尊贵金', hex: '#D4AF37', rgb: 'RGB 212, 175, 55' },
      { name: '香槟金', hex: '#F0E68C', rgb: 'RGB 240, 230, 140' },
      { name: '古铜金', hex: '#B8860B', rgb: 'RGB 184, 134, 11' },
    ],
    neutral: [
      { name: '炭黑', hex: '#1A1A2E', rgb: 'RGB 26, 26, 46' },
      { name: '深灰', hex: '#4A5568', rgb: 'RGB 74, 85, 104' },
      { name: '中灰', hex: '#A0AEC0', rgb: 'RGB 160, 174, 192' },
      { name: '浅灰', hex: '#E2E8F0', rgb: 'RGB 226, 232, 240' },
      { name: '云白', hex: '#F8FAFC', rgb: 'RGB 248, 250, 252' },
    ],
  };

  const typography = {
    headings: [
      { size: '48px', weight: 'Bold', name: 'H1 - 主标题', lineHeight: '1.2' },
      { size: '36px', weight: 'Bold', name: 'H2 - 副标题', lineHeight: '1.3' },
      { size: '28px', weight: 'Semibold', name: 'H3 - 章节标题', lineHeight: '1.4' },
      { size: '22px', weight: 'Semibold', name: 'H4 - 小节标题', lineHeight: '1.4' },
    ],
    body: [
      { size: '18px', weight: 'Regular', name: '正文大号', lineHeight: '1.7' },
      { size: '16px', weight: 'Regular', name: '正文标准', lineHeight: '1.6' },
      { size: '14px', weight: 'Regular', name: '辅助文字', lineHeight: '1.5' },
      { size: '12px', weight: 'Regular', name: '小字说明', lineHeight: '1.5' },
    ],
  };

  const mockups = [
    { name: '名片设计', icon: 'business' },
    { name: '信纸设计', icon: 'letter' },
    { name: '信封设计', icon: 'envelope' },
    { name: '工牌设计', icon: 'badge' },
  ];

  const icons = ['Home', 'User', 'Settings', 'Search', 'Heart', 'Star', 'Bell', 'Mail', 'Camera', 'Music', 'Book', 'Gift'];

  return (
    <div className="min-h-screen bg-slate-50">
      {/* 顶部导航 */}
      <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 text-slate-600 hover:text-slate-900 transition-colors">
            <ArrowLeft size={20} />
            <span className="font-medium">返回作品集</span>
          </Link>
          <h1 className="text-xl font-bold text-slate-900 tracking-tight">品牌设计系统</h1>
          <div className="w-24" />
        </div>
      </nav>

      <main className="max-w-7xl mx-auto px-6 py-12 space-y-16">
        {/* Logo 展示区 */}
        <section className="space-y-8">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-amber-gold/10 rounded-lg">
              <Layers className="text-amber-gold" size={24} />
            </div>
            <h2 className="text-2xl font-bold text-slate-900">Logo 展示</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* 主Logo - 彩色版 */}
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-slate-100 flex flex-col items-center justify-center gap-4">
              <div className="w-32 h-32 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 rounded-2xl flex items-center justify-center shadow-lg">
                <div className="text-center">
                  <div className="text-3xl font-bold text-amber-gold tracking-tight">LUXE</div>
                  <div className="text-[8px] text-white/70 tracking-[0.3em] mt-1">BRAND</div>
                </div>
              </div>
              <div className="text-center">
                <p className="font-semibold text-slate-800">主标志</p>
                <p className="text-sm text-slate-500">彩色版本</p>
              </div>
            </div>

            {/* 黑白版 */}
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-slate-100 flex flex-col items-center justify-center gap-4">
              <div className="w-32 h-32 bg-slate-100 rounded-2xl flex items-center justify-center">
                <div className="text-center">
                  <div className="text-3xl font-bold text-slate-900 tracking-tight">LUXE</div>
                  <div className="text-[8px] text-slate-600 tracking-[0.3em] mt-1">BRAND</div>
                </div>
              </div>
              <div className="text-center">
                <p className="font-semibold text-slate-800">单色版</p>
                <p className="text-sm text-slate-500">黑白版本</p>
              </div>
            </div>

            {/* 反白版 */}
            <div className="bg-slate-900 rounded-2xl p-8 shadow-sm border border-slate-800 flex flex-col items-center justify-center gap-4">
              <div className="w-32 h-32 bg-white/5 rounded-2xl flex items-center justify-center border border-white/10">
                <div className="text-center">
                  <div className="text-3xl font-bold text-white tracking-tight">LUXE</div>
                  <div className="text-[8px] text-white/60 tracking-[0.3em] mt-1">BRAND</div>
                </div>
              </div>
              <div className="text-center">
                <p className="font-semibold text-white">反白版</p>
                <p className="text-sm text-slate-400">深色背景使用</p>
              </div>
            </div>
          </div>
        </section>

        {/* 色彩系统 */}
        <section className="space-y-8">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-blue-500/10 rounded-lg">
              <Palette className="text-blue-600" size={24} />
            </div>
            <h2 className="text-2xl font-bold text-slate-900">色彩系统</h2>
          </div>

          <div className="space-y-8">
            {/* 主色 */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-slate-700">主色调</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {colors.primary.map((color, index) => (
                  <div key={index} className="bg-white rounded-xl overflow-hidden shadow-sm border border-slate-100">
                    <div className="h-28" style={{ backgroundColor: color.hex }} />
                    <div className="p-4">
                      <p className="font-semibold text-slate-800">{color.name}</p>
                      <p className="text-sm font-mono text-slate-500">{color.hex}</p>
                      <p className="text-xs text-slate-400 mt-1">{color.rgb}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* 辅助色 */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-slate-700">辅助色</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {colors.accent.map((color, index) => (
                  <div key={index} className="bg-white rounded-xl overflow-hidden shadow-sm border border-slate-100">
                    <div className="h-28" style={{ backgroundColor: color.hex }} />
                    <div className="p-4">
                      <p className="font-semibold text-slate-800">{color.name}</p>
                      <p className="text-sm font-mono text-slate-500">{color.hex}</p>
                      <p className="text-xs text-slate-400 mt-1">{color.rgb}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* 中性色 */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-slate-700">中性色</h3>
              <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                {colors.neutral.map((color, index) => (
                  <div key={index} className="bg-white rounded-xl overflow-hidden shadow-sm border border-slate-100">
                    <div className="h-24" style={{ backgroundColor: color.hex }} />
                    <div className="p-3">
                      <p className="font-medium text-sm text-slate-800">{color.name}</p>
                      <p className="text-xs font-mono text-slate-500">{color.hex}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* 字体规范 */}
        <section className="space-y-8">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-emerald-500/10 rounded-lg">
              <Type className="text-emerald-600" size={24} />
            </div>
            <h2 className="text-2xl font-bold text-slate-900">字体规范</h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* 标题字体 */}
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-slate-100 space-y-6">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold text-slate-800">标题字体</h3>
                <span className="text-sm text-slate-500 font-mono">Playfair Display</span>
              </div>
              <div className="space-y-5">
                {typography.headings.map((item, index) => (
                  <div key={index} className="flex items-end justify-between pb-4 border-b border-slate-100 last:border-0 last:pb-0">
                    <div>
                      <p className="text-slate-900 font-bold tracking-tight" style={{ fontSize: item.size, lineHeight: item.lineHeight, fontFamily: 'Georgia, serif' }}>
                        设计创造价值
                      </p>
                      <p className="text-xs text-slate-400 mt-2">{item.name}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-sm font-mono text-slate-500">{item.size}</p>
                      <p className="text-xs text-slate-400">{item.weight}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* 正文字体 */}
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-slate-100 space-y-6">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold text-slate-800">正文字体</h3>
                <span className="text-sm text-slate-500 font-mono">DM Sans</span>
              </div>
              <div className="space-y-5">
                {typography.body.map((item, index) => (
                  <div key={index} className="flex items-end justify-between pb-4 border-b border-slate-100 last:border-0 last:pb-0">
                    <div className="flex-1 mr-4">
                      <p className="text-slate-700" style={{ fontSize: item.size, lineHeight: item.lineHeight }}>
                        品牌设计是企业视觉识别的核心，传递品牌价值与理念。
                      </p>
                      <p className="text-xs text-slate-400 mt-2">{item.name}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-sm font-mono text-slate-500">{item.size}</p>
                      <p className="text-xs text-slate-400">{item.weight}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* 应用场景 */}
        <section className="space-y-8">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-rose-500/10 rounded-lg">
              <ImageIcon className="text-rose-600" size={24} />
            </div>
            <h2 className="text-2xl font-bold text-slate-900">应用场景</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {mockups.map((item, index) => (
              <div key={index} className="group bg-white rounded-2xl p-6 shadow-sm border border-slate-100 hover:shadow-md hover:border-slate-200 transition-all">
                <div className="aspect-[4/3] bg-gradient-to-br from-slate-100 to-slate-50 rounded-xl mb-4 flex items-center justify-center overflow-hidden">
                  {item.icon === 'business' && (
                    <div className="w-3/4 bg-white rounded-lg shadow-lg p-4 transform group-hover:scale-105 transition-transform">
                      <div className="flex justify-between items-start">
                        <div className="w-8 h-8 bg-slate-900 rounded flex items-center justify-center">
                          <span className="text-amber-gold text-xs font-bold">L</span>
                        </div>
                        <div className="text-right">
                          <p className="text-[10px] font-bold text-slate-800">张三</p>
                          <p className="text-[8px] text-slate-500">设计总监</p>
                        </div>
                      </div>
                      <div className="mt-4 pt-3 border-t border-slate-100">
                        <p className="text-[7px] text-slate-400">luxe@brand.com</p>
                        <p className="text-[7px] text-slate-400">+86 138 8888 8888</p>
                      </div>
                    </div>
                  )}
                  {item.icon === 'letter' && (
                    <div className="w-3/4 bg-white rounded shadow-lg p-6 transform group-hover:scale-105 transition-transform">
                      <div className="flex items-center gap-2 mb-4">
                        <div className="w-6 h-6 bg-slate-900 rounded flex items-center justify-center">
                          <span className="text-amber-gold text-[8px] font-bold">L</span>
                        </div>
                        <span className="text-[10px] font-bold text-slate-800">LUXE BRAND</span>
                      </div>
                      <div className="space-y-1">
                        <div className="h-1 bg-slate-200 rounded w-full" />
                        <div className="h-1 bg-slate-100 rounded w-5/6" />
                        <div className="h-1 bg-slate-100 rounded w-4/6" />
                      </div>
                    </div>
                  )}
                  {item.icon === 'envelope' && (
                    <div className="w-3/4 bg-white rounded-lg shadow-lg transform group-hover:scale-105 transition-transform overflow-hidden">
                      <div className="h-16 bg-slate-50 relative">
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="w-0 h-0 border-l-[60px] border-r-[60px] border-t-[40px] border-l-transparent border-r-transparent border-t-slate-200" />
                        </div>
                        <div className="absolute top-2 left-1/2 -translate-x-1/2 w-6 h-6 bg-slate-900 rounded flex items-center justify-center">
                          <span className="text-amber-gold text-[8px] font-bold">L</span>
                        </div>
                      </div>
                    </div>
                  )}
                  {item.icon === 'badge' && (
                    <div className="w-1/2 bg-white rounded-xl shadow-lg p-3 transform group-hover:scale-105 transition-transform">
                      <div className="bg-slate-900 rounded-lg p-3 text-center">
                        <div className="w-12 h-12 bg-slate-700 rounded-full mx-auto mb-2 flex items-center justify-center">
                          <span className="text-white text-lg">👤</span>
                        </div>
                        <p className="text-[10px] text-white font-semibold">李 四</p>
                        <p className="text-[8px] text-slate-400">UI Designer</p>
                      </div>
                      <div className="mt-2 text-center">
                        <span className="text-amber-gold text-[8px] font-bold">LUXE</span>
                      </div>
                    </div>
                  )}
                </div>
                <h3 className="font-semibold text-slate-800 text-center">{item.name}</h3>
              </div>
            ))}
          </div>
        </section>

        {/* 图标系统 */}
        <section className="space-y-8">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-violet-500/10 rounded-lg">
              <Grid3X3 className="text-violet-600" size={24} />
            </div>
            <h2 className="text-2xl font-bold text-slate-900">图标系统</h2>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-sm border border-slate-100">
            <div className="grid grid-cols-4 md:grid-cols-6 lg:grid-cols-12 gap-6">
              {icons.map((name, index) => (
                <div key={index} className="flex flex-col items-center gap-3 p-4 rounded-xl hover:bg-slate-50 transition-colors group">
                  <div className="w-12 h-12 rounded-xl bg-slate-100 flex items-center justify-center group-hover:bg-slate-900 transition-colors">
                    <svg className="w-6 h-6 text-slate-600 group-hover:text-amber-gold transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      {name === 'Home' && <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />}
                      {name === 'User' && <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />}
                      {name === 'Settings' && <path strokeLinecap="round" strokeLinejoin="round" d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.431l-1.003.827c-.293.24-.438.613-.431.992a6.759 6.759 0 010 .255c-.007.378.138.75.43.99l1.005.828c.424.35.534.954.26 1.43l-1.298 2.247a1.125 1.125 0 01-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.57 6.57 0 01-.22.128c-.331.183-.581.495-.644.869l-.213 1.28c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.02-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 01-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 01-1.369-.49l-1.297-2.247a1.125 1.125 0 01.26-1.431l1.004-.827c.292-.24.437-.613.43-.992a6.932 6.932 0 010-.255c.007-.378-.138-.75-.43-.99l-1.004-.828a1.125 1.125 0 01-.26-1.43l1.297-2.247a1.125 1.125 0 011.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.087.22-.128.332-.183.582-.495.644-.869l.214-1.281z" />}
                      {name === 'Search' && <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />}
                      {name === 'Heart' && <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />}
                      {name === 'Star' && <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />}
                      {name === 'Bell' && <path strokeLinecap="round" strokeLinejoin="round" d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0" />}
                      {name === 'Mail' && <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />}
                      {name === 'Camera' && <path strokeLinecap="round" strokeLinejoin="round" d="M6.827 6.175A2.31 2.31 0 015.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 00-1.134-.175 2.31 2.31 0 01-1.64-1.055l-.822-1.316a2.192 2.192 0 00-1.736-1.039 48.774 48.774 0 00-5.232 0 2.192 2.192 0 00-1.736 1.039l-.821 1.316z" />}
                      {name === 'Music' && <path strokeLinecap="round" strokeLinejoin="round" d="M9 9l10.5-3m0 6.553v3.75a2.25 2.25 0 01-1.632 2.163l-1.32.377a1.803 1.803 0 11-.99-3.467l2.31-.66a2.25 2.25 0 001.632-2.163zm0 0V2.25L9 5.25v10.303m0 0v3.75a2.25 2.25 0 01-1.632 2.163l-1.32.377a1.803 1.803 0 01-.99-3.467l2.31-.66A2.25 2.25 0 009 15.553z" />}
                      {name === 'Book' && <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />}
                      {name === 'Gift' && <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v13m0-13V6a2.25 2.25 0 112.25 2.25H5.775c-.697 0-1.269.533-1.23 1.227l.692 12.085A2.25 2.25 0 007.487 21.75h9.026a2.25 2.25 0 002.25-2.188l.692-12.085c.04-.694-.533-1.227-1.23-1.227h-5.472z" />}
                    </svg>
                  </div>
                  <span className="text-xs text-slate-500">{name}</span>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      {/* 页脚 */}
      <footer className="border-t border-slate-200 bg-white mt-16">
        <div className="max-w-7xl mx-auto px-6 py-8 text-center">
          <p className="text-sm text-slate-500">© 2024 LUXE Brand Design System. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default BrandDesign;
