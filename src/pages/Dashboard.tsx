import {
  LayoutDashboard,
  BarChart3,
  Users,
  Settings,
  Search,
  Bell,
  ArrowUpRight,
  ArrowDownRight,
  User,
  ShoppingCart,
  DollarSign,
  TrendingUp,
  MoreHorizontal,
  ArrowLeft,
} from 'lucide-react';
import { Link } from 'react-router-dom';

const Dashboard = () => {
  const stats = [
    { title: '总用户数', value: '24,586', change: '+12.5%', trend: 'up', icon: Users, color: 'from-cyan-500 to-blue-500' },
    { title: '总销售额', value: '¥168,420', change: '+23.1%', trend: 'up', icon: DollarSign, color: 'from-emerald-500 to-teal-500' },
    { title: '订单量', value: '3,842', change: '+8.3%', trend: 'up', icon: ShoppingCart, color: 'from-violet-500 to-purple-500' },
    { title: '转化率', value: '4.82%', change: '-2.1%', trend: 'down', icon: TrendingUp, color: 'from-amber-500 to-orange-500' },
  ];

  const lineChartData = [65, 72, 68, 85, 78, 92, 88, 95, 102, 98, 110, 105, 118, 112, 125, 130, 122, 138, 145, 140, 152, 148, 160, 155, 168, 175, 170, 182, 190, 185];

  const barChartData = [
    { label: '数码电子', value: 85, color: 'bg-cyan-500' },
    { label: '服装配饰', value: 68, color: 'bg-emerald-500' },
    { label: '家居生活', value: 92, color: 'bg-violet-500' },
    { label: '美妆护肤', value: 75, color: 'bg-amber-500' },
    { label: '食品饮料', value: 58, color: 'bg-rose-500' },
    { label: '运动户外', value: 70, color: 'bg-blue-500' },
  ];

  const pieData = [
    { label: '直接访问', value: 35, color: '#06b6d4' },
    { label: '搜索引擎', value: 28, color: '#10b981' },
    { label: '社交媒体', value: 22, color: '#8b5cf6' },
    { label: '邮件营销', value: 15, color: '#f59e0b' },
  ];

  const recentOrders = [
    { id: 'ORD-2024-001', customer: '张三', amount: '¥1,299', status: '已完成', date: '2024-01-15' },
    { id: 'ORD-2024-002', customer: '李四', amount: '¥599', status: '处理中', date: '2024-01-15' },
    { id: 'ORD-2024-003', customer: '王五', amount: '¥2,499', status: '已发货', date: '2024-01-14' },
    { id: 'ORD-2024-004', customer: '赵六', amount: '¥899', status: '已完成', date: '2024-01-14' },
    { id: 'ORD-2024-005', customer: '钱七', amount: '¥1,899', status: '待支付', date: '2024-01-13' },
  ];

  const maxLineValue = Math.max(...lineChartData);
  const maxBarValue = Math.max(...barChartData.map((d) => d.value));

  const generatePieGradient = () => {
    let current = 0;
    const stops: string[] = [];
    pieData.forEach((item) => {
      const start = current;
      current += item.value;
      stops.push(`${item.color} ${start}% ${current}%`);
    });
    return `conic-gradient(${stops.join(', ')})`;
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case '已完成':
        return 'bg-emerald-500/20 text-emerald-400';
      case '处理中':
        return 'bg-blue-500/20 text-blue-400';
      case '已发货':
        return 'bg-amber-500/20 text-amber-400';
      case '待支付':
        return 'bg-rose-500/20 text-rose-400';
      default:
        return 'bg-slate-500/20 text-slate-400';
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex">
      {/* 左侧边栏 */}
      <aside className="w-64 bg-slate-900/50 backdrop-blur-xl border-r border-slate-800/50 flex flex-col">
        <div className="p-6 border-b border-slate-800/50">
          <Link to="/" className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors">
            <ArrowLeft size={18} />
            <span className="text-sm">返回首页</span>
          </Link>
          <div className="mt-4 flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-500 to-emerald-500 flex items-center justify-center">
              <LayoutDashboard size={20} className="text-white" />
            </div>
            <div>
              <h1 className="font-bold text-lg">DataVision</h1>
              <p className="text-xs text-slate-500">数据分析平台</p>
            </div>
          </div>
        </div>

        <nav className="flex-1 p-4 space-y-1">
          <a
            href="#"
            className="flex items-center gap-3 px-4 py-3 rounded-xl bg-cyan-500/10 text-cyan-400 border border-cyan-500/20"
          >
            <LayoutDashboard size={20} />
            <span className="font-medium">仪表盘</span>
          </a>
          <a
            href="#"
            className="flex items-center gap-3 px-4 py-3 rounded-xl text-slate-400 hover:bg-slate-800/50 hover:text-slate-200 transition-colors"
          >
            <BarChart3 size={20} />
            <span>数据分析</span>
          </a>
          <a
            href="#"
            className="flex items-center gap-3 px-4 py-3 rounded-xl text-slate-400 hover:bg-slate-800/50 hover:text-slate-200 transition-colors"
          >
            <Users size={20} />
            <span>用户管理</span>
          </a>
          <a
            href="#"
            className="flex items-center gap-3 px-4 py-3 rounded-xl text-slate-400 hover:bg-slate-800/50 hover:text-slate-200 transition-colors"
          >
            <Settings size={20} />
            <span>系统设置</span>
          </a>
        </nav>

        <div className="p-4 border-t border-slate-800/50">
          <div className="flex items-center gap-3 p-3 rounded-xl bg-slate-800/30">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-cyan-400 to-emerald-400 flex items-center justify-center">
              <User size={18} className="text-slate-900" />
            </div>
            <div className="flex-1">
              <p className="font-medium text-sm">管理员</p>
              <p className="text-xs text-slate-500">admin@dashboard.com</p>
            </div>
          </div>
        </div>
      </aside>

      {/* 主内容区 */}
      <div className="flex-1 flex flex-col">
        {/* 顶部导航 */}
        <header className="sticky top-0 z-30 bg-slate-950/80 backdrop-blur-xl border-b border-slate-800/50 px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="relative">
              <Search size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500" />
              <input
                type="text"
                placeholder="搜索数据、报表、用户..."
                className="w-96 bg-slate-900/50 border border-slate-800 rounded-xl pl-10 pr-4 py-2.5 text-sm placeholder-slate-500 focus:outline-none focus:border-cyan-500/50 focus:ring-1 focus:ring-cyan-500/30 transition-all"
              />
            </div>
            <div className="flex items-center gap-4">
              <button className="relative p-2.5 rounded-xl bg-slate-900/50 border border-slate-800 hover:bg-slate-800/50 transition-colors">
                <Bell size={20} className="text-slate-400" />
                <span className="absolute top-2 right-2 w-2 h-2 bg-rose-500 rounded-full" />
              </button>
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-cyan-400 to-emerald-400 flex items-center justify-center cursor-pointer">
                <User size={18} className="text-slate-900" />
              </div>
            </div>
          </div>
        </header>

        {/* 内容区 */}
        <main className="flex-1 p-8 overflow-auto">
          {/* 页面标题 */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold">数据仪表盘</h2>
            <p className="text-slate-500 mt-1">欢迎回来，这是您的数据分析概览</p>
          </div>

          {/* 统计卡片 */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div
                  key={index}
                  className="bg-slate-900/40 backdrop-blur-xl border border-slate-800/50 rounded-2xl p-6 hover:border-slate-700/50 transition-all group"
                >
                  <div className="flex items-start justify-between">
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${stat.color} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform`}>
                      <Icon size={22} className="text-white" />
                    </div>
                    <div
                      className={`flex items-center gap-1 text-sm font-medium ${
                        stat.trend === 'up' ? 'text-emerald-400' : 'text-rose-400'
                      }`}
                    >
                      {stat.trend === 'up' ? <ArrowUpRight size={16} /> : <ArrowDownRight size={16} />}
                      {stat.change}
                    </div>
                  </div>
                  <div className="mt-5">
                    <p className="text-slate-500 text-sm">{stat.title}</p>
                    <p className="text-3xl font-bold mt-1">{stat.value}</p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* 图表区 */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
            {/* 折线图 */}
            <div className="lg:col-span-2 bg-slate-900/40 backdrop-blur-xl border border-slate-800/50 rounded-2xl p-6">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h3 className="text-lg font-semibold">销售趋势</h3>
                  <p className="text-sm text-slate-500">近30天销售额变化</p>
                </div>
                <button className="p-2 rounded-lg hover:bg-slate-800/50 transition-colors">
                  <MoreHorizontal size={18} className="text-slate-400" />
                </button>
              </div>
              <div className="relative h-64">
                {/* 网格线 */}
                <div className="absolute inset-0 flex flex-col justify-between">
                  {[...Array(5)].map((_, i) => (
                    <div key={i} className="border-b border-slate-800/50 w-full" />
                  ))}
                </div>
                {/* Y轴标签 */}
                <div className="absolute left-0 top-0 h-full flex flex-col justify-between text-xs text-slate-600 -translate-x-2">
                  <span>200K</span>
                  <span>150K</span>
                  <span>100K</span>
                  <span>50K</span>
                  <span>0</span>
                </div>
                {/* 折线图 */}
                <div className="relative h-full ml-8 flex items-end gap-1">
                  {lineChartData.map((value, index) => (
                    <div key={index} className="flex-1 flex flex-col justify-end h-full relative">
                      <div
                        className="w-full bg-gradient-to-t from-cyan-500/0 via-cyan-500/20 to-cyan-500/40 rounded-t"
                        style={{ height: `${(value / maxLineValue) * 100}%` }}
                      />
                      <div
                        className="absolute w-2 h-2 bg-cyan-400 rounded-full -translate-x-1/2 left-1/2 shadow-lg shadow-cyan-500/50"
                        style={{ bottom: `${(value / maxLineValue) * 100}%` }}
                      />
                    </div>
                  ))}
                </div>
              </div>
              {/* X轴标签 */}
              <div className="flex justify-between mt-4 ml-8 text-xs text-slate-600">
                <span>1天</span>
                <span>5天</span>
                <span>10天</span>
                <span>15天</span>
                <span>20天</span>
                <span>25天</span>
                <span>30天</span>
              </div>
            </div>

            {/* 饼图 */}
            <div className="bg-slate-900/40 backdrop-blur-xl border border-slate-800/50 rounded-2xl p-6">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h3 className="text-lg font-semibold">用户来源</h3>
                  <p className="text-sm text-slate-500">流量渠道分布</p>
                </div>
                <button className="p-2 rounded-lg hover:bg-slate-800/50 transition-colors">
                  <MoreHorizontal size={18} className="text-slate-400" />
                </button>
              </div>
              <div className="flex flex-col items-center">
                {/* 环形图 */}
                <div className="relative w-44 h-44">
                  <div
                    className="w-full h-full rounded-full"
                    style={{ background: generatePieGradient() }}
                  />
                  <div className="absolute inset-4 bg-slate-900 rounded-full flex items-center justify-center">
                    <div className="text-center">
                      <p className="text-2xl font-bold">100%</p>
                      <p className="text-xs text-slate-500">总流量</p>
                    </div>
                  </div>
                </div>
                {/* 图例 */}
                <div className="mt-6 w-full space-y-3">
                  {pieData.map((item, index) => (
                    <div key={index} className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div className="w-3 h-3 rounded-full" style={{ backgroundColor: item.color }} />
                        <span className="text-sm text-slate-400">{item.label}</span>
                      </div>
                      <span className="text-sm font-semibold">{item.value}%</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* 柱状图和订单表格 */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* 柱状图 */}
            <div className="bg-slate-900/40 backdrop-blur-xl border border-slate-800/50 rounded-2xl p-6">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h3 className="text-lg font-semibold">品类销售对比</h3>
                  <p className="text-sm text-slate-500">各品类销售额统计</p>
                </div>
                <button className="p-2 rounded-lg hover:bg-slate-800/50 transition-colors">
                  <MoreHorizontal size={18} className="text-slate-400" />
                </button>
              </div>
              <div className="relative h-56">
                {/* 网格线 */}
                <div className="absolute inset-0 flex flex-col justify-between">
                  {[...Array(5)].map((_, i) => (
                    <div key={i} className="border-b border-slate-800/50 w-full" />
                  ))}
                </div>
                {/* 柱状图 */}
                <div className="relative h-full flex items-end justify-around gap-4 px-2">
                  {barChartData.map((item, index) => (
                    <div key={index} className="flex-1 flex flex-col items-center justify-end h-full">
                      <div
                        className={`w-full max-w-12 ${item.color} rounded-t-lg hover:opacity-80 transition-opacity cursor-pointer relative group`}
                        style={{ height: `${(item.value / maxBarValue) * 100}%` }}
                      >
                        <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-slate-800 text-white text-xs py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                          ¥{item.value}K
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              {/* X轴标签 */}
              <div className="flex justify-around mt-4 text-xs text-slate-500">
                {barChartData.map((item, index) => (
                  <span key={index} className="text-center w-12 truncate">
                    {item.label}
                  </span>
                ))}
              </div>
            </div>

            {/* 最近订单表格 */}
            <div className="bg-slate-900/40 backdrop-blur-xl border border-slate-800/50 rounded-2xl p-6">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h3 className="text-lg font-semibold">最近订单</h3>
                  <p className="text-sm text-slate-500">最新交易记录</p>
                </div>
                <button className="text-sm text-cyan-400 hover:text-cyan-300 transition-colors">
                  查看全部
                </button>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="text-left text-xs text-slate-500 border-b border-slate-800/50">
                      <th className="pb-3 font-medium">订单号</th>
                      <th className="pb-3 font-medium">客户</th>
                      <th className="pb-3 font-medium">金额</th>
                      <th className="pb-3 font-medium">状态</th>
                    </tr>
                  </thead>
                  <tbody className="text-sm">
                    {recentOrders.map((order, index) => (
                      <tr
                        key={index}
                        className="border-b border-slate-800/30 last:border-0 hover:bg-slate-800/20 transition-colors"
                      >
                        <td className="py-3 font-mono text-slate-400 text-xs">{order.id}</td>
                        <td className="py-3">{order.customer}</td>
                        <td className="py-3 font-semibold">{order.amount}</td>
                        <td className="py-3">
                          <span className={`text-xs px-2.5 py-1 rounded-full ${getStatusColor(order.status)}`}>
                            {order.status}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
