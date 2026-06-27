import { useState } from 'react';
import { ShoppingCart, Star, Plus, Minus, X, ArrowLeft, Search, Heart, Trash2, Check } from 'lucide-react';
import { products, categories, Product } from '@/data/ecommerceProducts';
import { cn } from '@/lib/utils';

interface CartItem extends Product {
  quantity: number;
}

export default function Ecommerce() {
  const [activeCategory, setActiveCategory] = useState('全部');
  const [cart, setCart] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [showCheckoutSuccess, setShowCheckoutSuccess] = useState(false);

  const filteredProducts = products.filter((product) => {
    const matchesCategory = activeCategory === '全部' || product.category === activeCategory;
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const addToCart = (product: Product) => {
    setCart((prev) => {
      const existing = prev.find((item) => item.id === product.id);
      if (existing) {
        return prev.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prev, { ...product, quantity: 1 }];
    });
    setIsCartOpen(true);
  };

  const removeFromCart = (productId: number) => {
    setCart((prev) => prev.filter((item) => item.id !== productId));
  };

  const updateQuantity = (productId: number, delta: number) => {
    setCart((prev) =>
      prev
        .map((item) =>
          item.id === productId ? { ...item, quantity: Math.max(0, item.quantity + delta) } : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  const totalPrice = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);

  const handleCheckout = () => {
    setShowCheckoutSuccess(true);
    setTimeout(() => {
      setShowCheckoutSuccess(false);
      setCart([]);
      setIsCartOpen(false);
    }, 3000);
  };

  return (
    <div className="min-h-screen bg-cream-light font-body">
      {/* 导航栏 */}
      <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-charcoal/5">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-6">
              <a
                href="/"
                className="flex items-center gap-2 text-charcoal hover:text-amber-gold transition-colors"
              >
                <ArrowLeft size={20} />
                <span className="font-medium">返回作品集</span>
              </a>
              <div className="hidden md:block">
                <h1 className="text-2xl font-display font-bold text-charcoal">
                  <span className="text-amber-gold">优选</span>商城
                </h1>
              </div>
            </div>

            <div className="hidden md:flex flex-1 max-w-md mx-8">
              <div className="relative w-full">
                <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-charcoal/40" />
                <input
                  type="text"
                  placeholder="搜索商品..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-11 pr-4 py-2.5 rounded-full bg-cream border border-charcoal/10 text-charcoal placeholder-charcoal/40 focus:outline-none focus:border-amber-gold/50 transition-colors"
                />
              </div>
            </div>

            <button
              onClick={() => setIsCartOpen(true)}
              className="relative p-2.5 rounded-full bg-cream hover:bg-amber-gold/10 transition-colors group"
            >
              <ShoppingCart size={22} className="text-charcoal group-hover:text-amber-gold transition-colors" />
              {totalItems > 0 && (
                <span className="absolute -top-1 -right-1 w-5 h-5 bg-amber-gold text-charcoal text-xs font-bold rounded-full flex items-center justify-center">
                  {totalItems}
                </span>
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* 移动端标题和搜索 */}
      <div className="md:hidden px-6 pt-4 pb-2">
        <h1 className="text-2xl font-display font-bold text-charcoal mb-4">
          <span className="text-amber-gold">优选</span>商城
        </h1>
        <div className="relative">
          <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-charcoal/40" />
          <input
            type="text"
            placeholder="搜索商品..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-11 pr-4 py-3 rounded-full bg-white border border-charcoal/10 text-charcoal placeholder-charcoal/40 focus:outline-none focus:border-amber-gold/50 transition-colors"
          />
        </div>
      </div>

      {/* Hero 横幅 */}
      <div className="bg-gradient-to-r from-amber-gold/20 via-terracotta/10 to-sage/10 py-12 md:py-16">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-5xl font-display font-bold text-charcoal mb-4">
            精选好物，品质生活
          </h2>
          <p className="text-charcoal/60 text-lg max-w-xl mx-auto">
            探索我们精心挑选的商品，为您的生活增添质感与温度
          </p>
        </div>
      </div>

      {/* 分类筛选 */}
      <div className="container mx-auto px-6 py-8">
        <div className="flex flex-wrap gap-3 mb-8">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={cn(
                'px-6 py-2.5 rounded-full font-medium transition-all duration-300',
                activeCategory === category
                  ? 'bg-gradient-gold text-charcoal shadow-lg shadow-amber-gold/30'
                  : 'bg-white text-charcoal/70 border border-charcoal/10 hover:border-amber-gold/50 hover:text-amber-gold'
              )}
            >
              {category}
            </button>
          ))}
        </div>

        {/* 商品网格 */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <div className="relative aspect-square overflow-hidden bg-cream">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <button className="absolute top-3 right-3 p-2 rounded-full bg-white/80 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity hover:bg-white">
                  <Heart size={18} className="text-charcoal/60 hover:text-terracotta" />
                </button>
                {product.originalPrice && (
                  <span className="absolute top-3 left-3 px-3 py-1 bg-terracotta text-white text-xs font-semibold rounded-full">
                    特惠
                  </span>
                )}
              </div>

              <div className="p-4">
                <h3 className="font-medium text-charcoal mb-1 truncate">{product.name}</h3>
                <div className="flex items-center gap-1 mb-2">
                  <Star size={14} className="text-amber-gold fill-amber-gold" />
                  <span className="text-sm text-charcoal/60">
                    {product.rating} ({product.reviews})
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-baseline gap-2">
                    <span className="text-xl font-bold text-amber-gold">¥{product.price}</span>
                    {product.originalPrice && (
                      <span className="text-sm text-charcoal/40 line-through">
                        ¥{product.originalPrice}
                      </span>
                    )}
                  </div>
                  <button
                    onClick={() => addToCart(product)}
                    className="p-2 rounded-full bg-amber-gold/10 text-amber-gold hover:bg-amber-gold hover:text-white transition-all duration-300 hover:scale-110"
                  >
                    <Plus size={18} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredProducts.length === 0 && (
          <div className="text-center py-20">
            <p className="text-charcoal/50 text-lg">没有找到相关商品</p>
          </div>
        )}
      </div>

      {/* 购物车侧边栏 */}
      <div
        className={cn(
          'fixed inset-0 z-50 transition-opacity duration-300',
          isCartOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        )}
      >
        <div
          className="absolute inset-0 bg-charcoal/50 backdrop-blur-sm"
          onClick={() => setIsCartOpen(false)}
        />
        <div
          className={cn(
            'absolute right-0 top-0 h-full w-full max-w-md bg-white shadow-2xl transition-transform duration-300 flex flex-col',
            isCartOpen ? 'translate-x-0' : 'translate-x-full'
          )}
        >
          {/* 购物车头部 */}
          <div className="flex items-center justify-between p-6 border-b border-charcoal/5">
            <h3 className="text-xl font-display font-semibold text-charcoal">
              购物车 ({totalItems})
            </h3>
            <button
              onClick={() => setIsCartOpen(false)}
              className="p-2 rounded-full hover:bg-charcoal/5 transition-colors"
            >
              <X size={20} className="text-charcoal/60" />
            </button>
          </div>

          {/* 购物车内容 */}
          <div className="flex-1 overflow-y-auto p-6">
            {cart.length === 0 ? (
              <div className="text-center py-16">
                <ShoppingCart size={48} className="mx-auto text-charcoal/20 mb-4" />
                <p className="text-charcoal/50">购物车是空的</p>
                <p className="text-charcoal/40 text-sm mt-1">快去挑选心仪的商品吧~</p>
              </div>
            ) : (
              <div className="space-y-4">
                {cart.map((item) => (
                  <div key={item.id} className="flex gap-4 p-4 bg-cream rounded-xl">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-20 h-20 rounded-lg object-cover"
                    />
                    <div className="flex-1 min-w-0">
                      <h4 className="font-medium text-charcoal truncate">{item.name}</h4>
                      <p className="text-amber-gold font-semibold mt-1">¥{item.price}</p>
                      <div className="flex items-center justify-between mt-2">
                        <div className="flex items-center gap-2">
                          <button
                            onClick={() => updateQuantity(item.id, -1)}
                            className="w-7 h-7 rounded-full bg-white border border-charcoal/10 flex items-center justify-center hover:border-amber-gold hover:text-amber-gold transition-colors"
                          >
                            <Minus size={14} />
                          </button>
                          <span className="w-8 text-center font-medium text-charcoal">
                            {item.quantity}
                          </span>
                          <button
                            onClick={() => updateQuantity(item.id, 1)}
                            className="w-7 h-7 rounded-full bg-white border border-charcoal/10 flex items-center justify-center hover:border-amber-gold hover:text-amber-gold transition-colors"
                          >
                            <Plus size={14} />
                          </button>
                        </div>
                        <button
                          onClick={() => removeFromCart(item.id)}
                          className="p-1.5 text-charcoal/40 hover:text-terracotta transition-colors"
                        >
                          <Trash2 size={16} />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* 购物车底部 */}
          {cart.length > 0 && (
            <div className="border-t border-charcoal/5 p-6 space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-charcoal/70">商品合计</span>
                <span className="text-charcoal font-medium">¥{totalPrice}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-charcoal/70">运费</span>
                <span className="text-sage font-medium">免运费</span>
              </div>
              <div className="flex items-center justify-between pt-4 border-t border-charcoal/5">
                <span className="text-lg font-semibold text-charcoal">总计</span>
                <span className="text-2xl font-bold text-amber-gold">¥{totalPrice}</span>
              </div>
              <button
                onClick={handleCheckout}
                className="w-full py-4 rounded-full bg-gradient-gold text-charcoal font-semibold text-lg hover:shadow-lg hover:shadow-amber-gold/30 transition-all duration-300"
              >
                立即结算
              </button>
            </div>
          )}
        </div>
      </div>

      {/* 支付成功提示 */}
      {showCheckoutSuccess && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center bg-charcoal/50 backdrop-blur-sm">
          <div className="bg-white rounded-2xl p-8 text-center max-w-sm mx-4 animate-fade-in-up">
            <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-sage/20 flex items-center justify-center">
              <Check size={32} className="text-sage" />
            </div>
            <h3 className="text-2xl font-display font-semibold text-charcoal mb-2">
              支付成功！
            </h3>
            <p className="text-charcoal/60">
              感谢您的购买，订单正在处理中
            </p>
          </div>
        </div>
      )}

      {/* 页脚 */}
      <footer className="bg-charcoal text-cream/60 py-12 mt-12">
        <div className="container mx-auto px-6 text-center">
          <p className="font-display text-xl text-cream mb-4">
            <span className="text-amber-gold">优选</span>商城
          </p>
          <p className="text-sm">© 2024 张良的电商演示项目 · 全栈开发作品集</p>
        </div>
      </footer>
    </div>
  );
}
