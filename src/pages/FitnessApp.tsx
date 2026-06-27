import { useState } from 'react';
import {
  ArrowLeft,
  Home,
  Dumbbell,
  BarChart3,
  User,
  Footprints,
  Flame,
  Timer,
  ChevronRight,
  Play,
  Clock,
  Zap,
  Trophy,
  TrendingUp,
  Heart,
  Signal,
  Wifi,
  Battery,
} from 'lucide-react';
import { cn } from '@/lib/utils';

interface WorkoutPlan {
  id: string;
  name: string;
  duration: string;
  calories: string;
  time: string;
  completed: boolean;
  icon: string;
  color: string;
}

interface Course {
  id: string;
  title: string;
  instructor: string;
  duration: string;
  level: string;
  image: string;
  color: string;
}

const weeklyPlan: WorkoutPlan[] = [
  {
    id: '1',
    name: '胸部力量训练',
    duration: '45 分钟',
    calories: '320 卡',
    time: '07:00',
    completed: true,
    icon: '💪',
    color: 'from-orange-500 to-red-500',
  },
  {
    id: '2',
    name: '背部塑形训练',
    duration: '50 分钟',
    calories: '380 卡',
    time: '18:30',
    completed: false,
    icon: '🏋️',
    color: 'from-amber-500 to-orange-500',
  },
  {
    id: '3',
    name: '腿部爆发力',
    duration: '40 分钟',
    calories: '420 卡',
    time: '07:00',
    completed: false,
    icon: '🦵',
    color: 'from-red-500 to-pink-500',
  },
  {
    id: '4',
    name: '核心训练',
    duration: '30 分钟',
    calories: '250 卡',
    time: '19:00',
    completed: false,
    icon: '🔥',
    color: 'from-orange-400 to-amber-500',
  },
];

const recommendedCourses: Course[] = [
  {
    id: '1',
    title: 'HIIT 燃脂训练',
    instructor: '教练 Mike',
    duration: '25 分钟',
    level: '中级',
    image: '🔥',
    color: 'from-orange-500 to-red-600',
  },
  {
    id: '2',
    title: '瑜伽放松',
    instructor: '教练 Lily',
    duration: '40 分钟',
    level: '初级',
    image: '🧘',
    color: 'from-emerald-500 to-teal-600',
  },
];

const CircularProgress = ({
  percentage,
  size = 120,
  strokeWidth = 10,
  color = '#f97316',
  bgColor = '#2a2a2a',
  icon: Icon,
  value,
  label,
  unit,
}: {
  percentage: number;
  size?: number;
  strokeWidth?: number;
  color?: string;
  bgColor?: string;
  icon: React.ElementType;
  value: string;
  label: string;
  unit: string;
}) => {
  const radius = (size - strokeWidth) / 2;
  const circumference = radius * 2 * Math.PI;
  const offset = circumference - (percentage / 100) * circumference;

  return (
    <div className="flex flex-col items-center">
      <div className="relative" style={{ width: size, height: size }}>
        <svg width={size} height={size} className="transform -rotate-90">
          <circle
            cx={size / 2}
            cy={size / 2}
            r={radius}
            stroke={bgColor}
            strokeWidth={strokeWidth}
            fill="none"
          />
          <circle
            cx={size / 2}
            cy={size / 2}
            r={radius}
            stroke={color}
            strokeWidth={strokeWidth}
            fill="none"
            strokeDasharray={circumference}
            strokeDashoffset={offset}
            strokeLinecap="round"
            style={{
              filter: `drop-shadow(0 0 8px ${color}40)`,
            }}
          />
        </svg>
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <Icon size={24} className="text-orange-400 mb-1" />
          <span className="text-2xl font-bold text-white">
            {value}
            <span className="text-sm font-normal text-slate-400 ml-0.5">{unit}</span>
          </span>
        </div>
      </div>
      <p className="text-sm text-slate-400 mt-2">{label}</p>
    </div>
  );
};

export default function FitnessApp() {
  const [activeTab, setActiveTab] = useState('home');
  const [likedCourses, setLikedCourses] = useState<string[]>([]);

  const toggleLike = (courseId: string) => {
    setLikedCourses((prev) =>
      prev.includes(courseId) ? prev.filter((id) => id !== courseId) : [...prev, courseId]
    );
  };

  const currentTime = new Date().toLocaleTimeString('zh-CN', {
    hour: '2-digit',
    minute: '2-digit',
    hour12: false,
  });

  const tabs = [
    { id: 'home', label: '首页', icon: Home },
    { id: 'workout', label: '训练', icon: Dumbbell },
    { id: 'stats', label: '数据', icon: BarChart3 },
    { id: 'profile', label: '我的', icon: User },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-950 to-black flex items-center justify-center p-4 md:p-8">
      {/* 返回按钮 - 桌面端 */}
      <a
        href="/"
        className="fixed top-6 left-6 z-50 flex items-center gap-2 text-slate-400 hover:text-white transition-colors bg-slate-800/50 backdrop-blur px-4 py-2 rounded-full border border-slate-700"
      >
        <ArrowLeft size={18} />
        <span className="font-medium">返回作品集</span>
      </a>

      {/* 手机外框 */}
      <div className="relative w-full max-w-[390px] h-[844px] bg-slate-950 rounded-[3rem] border-[10px] border-slate-800 shadow-2xl shadow-black/50 overflow-hidden">
        {/* 手机顶部扬声器/刘海 */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-7 bg-slate-800 rounded-b-2xl z-20" />

        {/* 状态栏 */}
        <div className="flex items-center justify-between px-8 pt-3 pb-2 bg-slate-950">
          <span className="text-sm font-medium text-white">{currentTime}</span>
          <div className="flex items-center gap-1">
            <Signal size={16} className="text-white/80" />
            <Wifi size={16} className="text-white/80" />
            <Battery size={20} className="text-white/80" />
          </div>
        </div>

        {/* 主内容区 */}
        <div className="h-[calc(100%-60px)] overflow-y-auto pb-24">
          {/* 首页内容 */}
          {activeTab === 'home' && (
            <div className="px-5 pt-4 space-y-6">
              {/* 用户问候 */}
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-slate-400 text-sm">早上好 👋</p>
                  <h1 className="text-2xl font-bold text-white mt-1">运动达人</h1>
                </div>
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-orange-500 to-red-500 flex items-center justify-center text-xl shadow-lg shadow-orange-500/30">
                  💪
                </div>
              </div>

              {/* 今日目标卡片 */}
              <div className="bg-gradient-to-br from-orange-500/10 to-red-500/10 rounded-3xl p-5 border border-orange-500/20">
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-lg font-semibold text-white">今日活动</h2>
                  <span className="text-xs bg-orange-500/20 text-orange-400 px-3 py-1 rounded-full">
                    第 12 天
                  </span>
                </div>

                {/* 三个圆形进度环 */}
                <div className="flex items-center justify-around">
                  <CircularProgress
                    percentage={75}
                    size={100}
                    strokeWidth={8}
                    color="#f97316"
                    icon={Footprints}
                    value="7,520"
                    label="步数"
                    unit="步"
                  />
                  <CircularProgress
                    percentage={60}
                    size={100}
                    strokeWidth={8}
                    color="#ef4444"
                    icon={Flame}
                    value="385"
                    label="卡路里"
                    unit="卡"
                  />
                  <CircularProgress
                    percentage={45}
                    size={100}
                    strokeWidth={8}
                    color="#eab308"
                    icon={Timer}
                    value="42"
                    label="运动时长"
                    unit="分"
                  />
                </div>
              </div>

              {/* 本周训练计划 */}
              <div>
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-lg font-semibold text-white">本周训练计划</h2>
                  <button className="text-sm text-orange-400 hover:text-orange-300 flex items-center gap-0.5">
                    查看全部
                    <ChevronRight size={16} />
                  </button>
                </div>

                <div className="space-y-3">
                  {weeklyPlan.map((plan, index) => (
                    <div
                      key={plan.id}
                      className={cn(
                        'rounded-2xl p-4 border transition-all',
                        plan.completed
                          ? 'bg-slate-800/30 border-slate-700/50'
                          : 'bg-slate-800/60 border-slate-700 hover:border-orange-500/30'
                      )}
                    >
                      <div className="flex items-center gap-4">
                        <div
                          className={cn(
                            'w-14 h-14 rounded-2xl flex items-center justify-center text-2xl flex-shrink-0',
                            plan.completed
                              ? 'bg-slate-700/50'
                              : `bg-gradient-to-br ${plan.color} shadow-lg`
                          )}
                          style={
                            !plan.completed
                              ? { boxShadow: '0 4px 20px rgba(249, 115, 22, 0.3)' }
                              : {}
                          }
                        >
                          {plan.icon}
                        </div>

                        <div className="flex-1 min-w-0">
                          <div className="flex items-center gap-2">
                            <h3
                              className={cn(
                                'font-semibold truncate',
                                plan.completed ? 'text-slate-500 line-through' : 'text-white'
                              )}
                            >
                              {plan.name}
                            </h3>
                            {plan.completed && (
                              <span className="flex-shrink-0 text-emerald-400">✓</span>
                            )}
                          </div>
                          <div className="flex items-center gap-3 mt-1 text-xs text-slate-400">
                            <span className="flex items-center gap-1">
                              <Clock size={12} />
                              {plan.duration}
                            </span>
                            <span className="flex items-center gap-1">
                              <Flame size={12} />
                              {plan.calories}
                            </span>
                          </div>
                        </div>

                        <div className="text-right flex-shrink-0">
                          <p className="text-sm text-slate-400">{plan.time}</p>
                          <p className="text-xs text-slate-500 mt-0.5">周{['一', '二', '三', '四'][index]}</p>
                        </div>
                      </div>

                      {!plan.completed && index === 1 && (
                        <button className="w-full mt-4 py-3 rounded-xl bg-gradient-to-r from-orange-500 to-red-500 text-white font-medium flex items-center justify-center gap-2 hover:shadow-lg hover:shadow-orange-500/30 transition-all">
                          <Play size={18} fill="currentColor" />
                          开始训练
                        </button>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* 推荐课程 */}
              <div>
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-lg font-semibold text-white">推荐课程</h2>
                  <button className="text-sm text-orange-400 hover:text-orange-300 flex items-center gap-0.5">
                    更多
                    <ChevronRight size={16} />
                  </button>
                </div>

                <div className="flex gap-4 overflow-x-auto pb-2 -mx-5 px-5">
                  {recommendedCourses.map((course) => (
                    <div
                      key={course.id}
                      className="flex-shrink-0 w-56 bg-slate-800/60 rounded-2xl overflow-hidden border border-slate-700 hover:border-orange-500/30 transition-all group"
                    >
                      <div className={`relative h-32 bg-gradient-to-br ${course.color} flex items-center justify-center`}>
                        <span className="text-6xl">{course.image}</span>
                        <button
                          onClick={() => toggleLike(course.id)}
                          className="absolute top-3 right-3 p-2 rounded-full bg-black/20 backdrop-blur-sm hover:bg-black/40 transition-colors"
                        >
                          <Heart
                            size={18}
                            className={cn(
                              'transition-colors',
                              likedCourses.includes(course.id)
                                ? 'text-red-500 fill-red-500'
                                : 'text-white/80'
                            )}
                          />
                        </button>
                        <button className="absolute bottom-3 right-3 p-2.5 rounded-full bg-white/20 backdrop-blur-sm hover:bg-white/30 transition-colors group-hover:scale-110">
                          <Play size={16} className="text-white" fill="currentColor" />
                        </button>
                      </div>
                      <div className="p-4">
                        <h3 className="font-semibold text-white text-sm mb-1">{course.title}</h3>
                        <p className="text-xs text-slate-400 mb-3">{course.instructor}</p>
                        <div className="flex items-center justify-between text-xs">
                          <span className="flex items-center gap-1 text-slate-400">
                            <Clock size={12} />
                            {course.duration}
                          </span>
                          <span className="px-2 py-0.5 rounded-full bg-orange-500/20 text-orange-400">
                            {course.level}
                          </span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* 成就卡片 */}
              <div className="bg-gradient-to-r from-amber-500/10 to-orange-500/10 rounded-3xl p-5 border border-amber-500/20 mb-4">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-amber-400 to-orange-500 flex items-center justify-center shadow-lg shadow-amber-500/30">
                    <Trophy size={28} className="text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-white">连续打卡 12 天</h3>
                    <p className="text-sm text-slate-400 mt-0.5">继续保持，冲击 30 天成就！</p>
                  </div>
                  <div className="text-right">
                    <p className="text-2xl font-bold text-amber-400">🔥</p>
                    <p className="text-xs text-slate-500">Streak</p>
                  </div>
                </div>
                <div className="mt-4 h-2 bg-slate-700/50 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-amber-400 to-orange-500 rounded-full transition-all"
                    style={{ width: '40%' }}
                  />
                </div>
                <p className="text-xs text-slate-500 mt-2 text-right">距离 30 天还有 18 天</p>
              </div>
            </div>
          )}

          {/* 训练页 */}
          {activeTab === 'workout' && (
            <div className="px-5 pt-4 space-y-6">
              <h1 className="text-2xl font-bold text-white">训练计划</h1>

              <div className="grid grid-cols-2 gap-4">
                {[
                  { name: '力量训练', icon: '💪', color: 'from-orange-500 to-red-500', count: 12 },
                  { name: '有氧运动', icon: '🏃', color: 'from-blue-500 to-cyan-500', count: 8 },
                  { name: '瑜伽拉伸', icon: '🧘', color: 'from-emerald-500 to-teal-500', count: 6 },
                  { name: '核心训练', icon: '🔥', color: 'from-amber-500 to-orange-500', count: 10 },
                ].map((category) => (
                  <div
                    key={category.name}
                    className="bg-slate-800/60 rounded-2xl p-5 border border-slate-700 hover:border-orange-500/30 transition-all cursor-pointer"
                  >
                    <div
                      className={`w-12 h-12 rounded-xl bg-gradient-to-br ${category.color} flex items-center justify-center text-2xl mb-3`}
                    >
                      {category.icon}
                    </div>
                    <h3 className="font-semibold text-white">{category.name}</h3>
                    <p className="text-sm text-slate-400 mt-1">{category.count} 个课程</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* 数据页 */}
          {activeTab === 'stats' && (
            <div className="px-5 pt-4 space-y-6">
              <h1 className="text-2xl font-bold text-white">运动数据</h1>

              <div className="bg-slate-800/60 rounded-3xl p-5 border border-slate-700">
                <div className="flex items-center justify-between mb-4">
                  <h2 className="font-semibold text-white">本周运动</h2>
                  <span className="text-sm text-emerald-400 flex items-center gap-1">
                    <TrendingUp size={14} />
                    +15%
                  </span>
                </div>
                <div className="flex items-end justify-between h-40 gap-2">
                  {[60, 85, 45, 90, 70, 95, 55].map((height, i) => (
                    <div key={i} className="flex-1 flex flex-col items-center gap-2">
                      <div
                        className="w-full bg-gradient-to-t from-orange-500 to-amber-400 rounded-t-lg transition-all"
                        style={{ height: `${height}%` }}
                      />
                      <span className="text-xs text-slate-500">
                        {['一', '二', '三', '四', '五', '六', '日'][i]}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                {[
                  { label: '总运动时长', value: '24.5', unit: '小时', icon: Timer, color: 'text-blue-400' },
                  { label: '消耗卡路里', value: '8,420', unit: '卡', icon: Flame, color: 'text-red-400' },
                  { label: '总步数', value: '85,230', unit: '步', icon: Footprints, color: 'text-orange-400' },
                  { label: '完成训练', value: '32', unit: '次', icon: Zap, color: 'text-amber-400' },
                ].map((stat) => (
                  <div
                    key={stat.label}
                    className="bg-slate-800/60 rounded-2xl p-5 border border-slate-700"
                  >
                    <stat.icon size={24} className={stat.color} />
                    <p className="text-2xl font-bold text-white mt-3">
                      {stat.value}
                      <span className="text-sm font-normal text-slate-400 ml-1">{stat.unit}</span>
                    </p>
                    <p className="text-sm text-slate-400 mt-1">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* 我的页 */}
          {activeTab === 'profile' && (
            <div className="px-5 pt-4 space-y-6">
              <div className="text-center">
                <div className="w-24 h-24 rounded-3xl bg-gradient-to-br from-orange-500 to-red-500 mx-auto flex items-center justify-center text-4xl shadow-xl shadow-orange-500/30">
                  💪
                </div>
                <h1 className="text-xl font-bold text-white mt-4">运动达人</h1>
                <p className="text-sm text-slate-400 mt-1">健身爱好者 · 连续 12 天</p>
              </div>

              <div className="grid grid-cols-3 gap-4">
                <div className="text-center">
                  <p className="text-2xl font-bold text-white">32</p>
                  <p className="text-xs text-slate-400 mt-1">完成训练</p>
                </div>
                <div className="text-center">
                  <p className="text-2xl font-bold text-white">24.5h</p>
                  <p className="text-xs text-slate-400 mt-1">运动时长</p>
                </div>
                <div className="text-center">
                  <p className="text-2xl font-bold text-white">8,420</p>
                  <p className="text-xs text-slate-400 mt-1">消耗卡路里</p>
                </div>
              </div>

              <div className="space-y-2">
                {[
                  { icon: '🏆', label: '我的成就', value: '8 枚' },
                  { icon: '❤️', label: '收藏课程', value: '12 个' },
                  { icon: '⚙️', label: '设置', value: '' },
                  { icon: '❓', label: '帮助与反馈', value: '' },
                ].map((item) => (
                  <div
                    key={item.label}
                    className="flex items-center justify-between p-4 bg-slate-800/40 rounded-xl border border-slate-700/50 hover:border-slate-600 transition-colors cursor-pointer"
                  >
                    <div className="flex items-center gap-3">
                      <span className="text-xl">{item.icon}</span>
                      <span className="text-white">{item.label}</span>
                    </div>
                    <div className="flex items-center gap-2 text-slate-400">
                      {item.value && <span className="text-sm">{item.value}</span>}
                      <ChevronRight size={18} />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* 底部导航栏 */}
        <div className="absolute bottom-0 left-0 right-0 bg-slate-900/90 backdrop-blur-xl border-t border-slate-800 px-6 py-3 pb-5">
          <div className="flex items-center justify-around">
            {tabs.map((tab) => {
              const Icon = tab.icon;
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={cn(
                    'flex flex-col items-center gap-1 transition-all py-1 px-3',
                    isActive ? 'text-orange-400' : 'text-slate-500 hover:text-slate-300'
                  )}
                >
                  <div
                    className={cn(
                      'p-2 rounded-xl transition-all',
                      isActive ? 'bg-orange-500/20' : ''
                    )}
                  >
                    <Icon size={22} strokeWidth={isActive ? 2.5 : 2} />
                  </div>
                  <span className="text-xs font-medium">{tab.label}</span>
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
