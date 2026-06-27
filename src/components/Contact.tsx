import { useState } from 'react';
import { Mail, MapPin, Phone, Send, MessageSquare, MessageCircle } from 'lucide-react';

const contactInfo = [
  { icon: Phone, label: '电话', value: '19071422673' },
  { icon: Mail, label: '邮箱', value: '2049132480@qq.com' },
  { icon: MapPin, label: '学校', value: '长江大学' },
];

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setFormData({ name: '', email: '', message: '' });
      alert('消息已发送！感谢您的联系。');
    }, 1500);
  };

  return (
    <section id="contact" className="section-padding bg-charcoal-dark/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-amber-gold font-medium tracking-wider uppercase text-sm">联系我</span>
          <h2 className="text-4xl md:text-5xl font-display font-bold mt-4 text-cream">
            开启合作
          </h2>
          <p className="text-cream/70 mt-4 max-w-2xl mx-auto">
            对 AI 艺术创作感兴趣？有项目合作意向？随时联系我！
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          <div className="space-y-8">
            <div className="glass-light rounded-2xl p-8">
              <h3 className="text-2xl font-display font-semibold text-cream mb-6 flex items-center gap-3">
                <MessageSquare className="text-amber-gold" size={28} />
                联系方式
              </h3>
              <div className="space-y-6">
                {contactInfo.map((item) => (
                  <div key={item.label} className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-amber-gold/10 flex items-center justify-center flex-shrink-0">
                      <item.icon size={22} className="text-amber-gold" />
                    </div>
                    <div>
                      <div className="text-cream/60 text-sm">{item.label}</div>
                      <div className="text-cream font-medium">{item.value}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="glass-light rounded-2xl p-8">
              <h3 className="text-xl font-display font-semibold text-cream mb-4 flex items-center gap-2">
                <MessageCircle className="text-amber-gold" size={20} />
                社交媒体
              </h3>
              <div className="grid grid-cols-2 gap-3">
                {[
                  { name: 'GitHub', href: 'https://github.com/weghors/weghors.github.io' },
                  { name: 'Bilibili', href: 'https://space.bilibili.com/352177295?spm_id_from=333.1007.0.0' },
                  { name: '知乎', href: 'https://www.zhihu.com/people/xiao-ke-nai-ao' },
                  { name: '抖音', href: 'https://www.douyin.com/user/MS4wLjABAAAAngXAqvWgU7mIpuuVFWBmQNsXHEGZeN-plCkQBwXPdhw?from_tab_name=main' },
                ].map((platform) => (
                  <a
                    key={platform.name}
                    href={platform.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-3 rounded-lg bg-charcoal/50 text-cream/70 hover:text-amber-gold hover:bg-amber-gold/10 transition-all duration-300 text-center block"
                  >
                    {platform.name}
                  </a>
                ))}
              </div>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="glass-light rounded-2xl p-8 space-y-6">
            <div>
              <label htmlFor="name" className="block text-cream font-medium mb-2">
                姓名
              </label>
              <input
                type="text"
                id="name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                required
                className="w-full px-4 py-3 rounded-xl bg-charcoal border border-cream/10 text-cream placeholder-cream/40 focus:outline-none focus:border-amber-gold/50 transition-colors"
                placeholder="请输入您的姓名"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-cream font-medium mb-2">
                邮箱
              </label>
              <input
                type="email"
                id="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                required
                className="w-full px-4 py-3 rounded-xl bg-charcoal border border-cream/10 text-cream placeholder-cream/40 focus:outline-none focus:border-amber-gold/50 transition-colors"
                placeholder="请输入您的邮箱"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-cream font-medium mb-2">
                留言
              </label>
              <textarea
                id="message"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                required
                rows={5}
                className="w-full px-4 py-3 rounded-xl bg-charcoal border border-cream/10 text-cream placeholder-cream/40 focus:outline-none focus:border-amber-gold/50 transition-colors resize-none"
                placeholder="请输入您想说的话..."
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full btn-primary flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? (
                '发送中...'
              ) : (
                <>
                  <Send size={18} />
                  发送消息
                </>
              )}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
