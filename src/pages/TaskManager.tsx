import { useState } from 'react';
import {
  ArrowLeft,
  Plus,
  Calendar,
  Search,
  Filter,
  Users,
  Tag,
  Folder,
  ChevronDown,
  X,
  CheckCircle2,
  Clock,
  AlertCircle,
  LayoutDashboard,
  Settings,
  Bell,
} from 'lucide-react';
import { cn } from '@/lib/utils';

interface Task {
  id: string;
  title: string;
  description?: string;
  tags: { name: string; color: string }[];
  dueDate: string;
  assignee: { name: string; avatar: string };
  priority: 'low' | 'medium' | 'high';
}

interface Column {
  id: string;
  title: string;
  tasks: Task[];
  color: string;
}

const initialColumns: Column[] = [
  {
    id: 'todo',
    title: '待办',
    color: 'from-slate-500 to-slate-600',
    tasks: [
      {
        id: '1',
        title: '设计系统组件库更新',
        tags: [
          { name: '设计', color: 'bg-purple-500/20 text-purple-300' },
          { name: 'UI', color: 'bg-pink-500/20 text-pink-300' },
        ],
        dueDate: '06-30',
        assignee: { name: '李设计', avatar: 'LD' },
        priority: 'high',
      },
      {
        id: '2',
        title: '用户调研报告整理',
        tags: [{ name: '研究', color: 'bg-blue-500/20 text-blue-300' }],
        dueDate: '07-02',
        assignee: { name: '王调研', avatar: 'WD' },
        priority: 'medium',
      },
      {
        id: '3',
        title: 'API接口文档编写',
        tags: [
          { name: '后端', color: 'bg-green-500/20 text-green-300' },
          { name: '文档', color: 'bg-yellow-500/20 text-yellow-300' },
        ],
        dueDate: '07-05',
        assignee: { name: '张开发', avatar: 'ZK' },
        priority: 'low',
      },
    ],
  },
  {
    id: 'in-progress',
    title: '进行中',
    color: 'from-blue-500 to-indigo-600',
    tasks: [
      {
        id: '4',
        title: '登录模块重构',
        tags: [
          { name: '前端', color: 'bg-cyan-500/20 text-cyan-300' },
          { name: '核心', color: 'bg-red-500/20 text-red-300' },
        ],
        dueDate: '06-28',
        assignee: { name: '陈前端', avatar: 'CQ' },
        priority: 'high',
      },
      {
        id: '5',
        title: '数据可视化大屏开发',
        tags: [
          { name: '前端', color: 'bg-cyan-500/20 text-cyan-300' },
          { name: '数据', color: 'bg-orange-500/20 text-orange-300' },
        ],
        dueDate: '07-01',
        assignee: { name: '赵数据', avatar: 'ZS' },
        priority: 'medium',
      },
    ],
  },
  {
    id: 'review',
    title: '审核中',
    color: 'from-amber-500 to-orange-600',
    tasks: [
      {
        id: '6',
        title: '支付功能代码审查',
        tags: [
          { name: '后端', color: 'bg-green-500/20 text-green-300' },
          { name: '安全', color: 'bg-red-500/20 text-red-300' },
        ],
        dueDate: '06-29',
        assignee: { name: '钱架构', avatar: 'QJ' },
        priority: 'high',
      },
      {
        id: '7',
        title: '首页设计稿评审',
        tags: [{ name: '设计', color: 'bg-purple-500/20 text-purple-300' }],
        dueDate: '06-30',
        assignee: { name: '李设计', avatar: 'LD' },
        priority: 'medium',
      },
    ],
  },
  {
    id: 'done',
    title: '已完成',
    color: 'from-emerald-500 to-teal-600',
    tasks: [
      {
        id: '8',
        title: '项目环境搭建',
        tags: [
          { name: '运维', color: 'bg-indigo-500/20 text-indigo-300' },
          { name: '基础', color: 'bg-slate-500/20 text-slate-300' },
        ],
        dueDate: '06-20',
        assignee: { name: '孙运维', avatar: 'SY' },
        priority: 'medium',
      },
      {
        id: '9',
        title: '需求文档评审',
        tags: [{ name: '产品', color: 'bg-pink-500/20 text-pink-300' }],
        dueDate: '06-22',
        assignee: { name: '周产品', avatar: 'ZC' },
        priority: 'low',
      },
      {
        id: '10',
        title: '数据库设计',
        tags: [
          { name: '后端', color: 'bg-green-500/20 text-green-300' },
          { name: '数据', color: 'bg-orange-500/20 text-orange-300' },
        ],
        dueDate: '06-25',
        assignee: { name: '吴DBA', avatar: 'WD' },
        priority: 'high',
      },
    ],
  },
];

const projects = [
  { id: '1', name: '电商平台重构', icon: '🛒', active: true },
  { id: '2', name: '移动端App', icon: '📱', active: false },
  { id: '3', name: '数据中台', icon: '📊', active: false },
  { id: '4', name: 'CRM系统', icon: '👥', active: false },
];

const members = [
  { id: '1', name: '李设计', avatar: 'LD', role: '设计师' },
  { id: '2', name: '王调研', avatar: 'WD', role: '产品经理' },
  { id: '3', name: '张开发', avatar: 'ZK', role: '后端开发' },
  { id: '4', name: '陈前端', avatar: 'CQ', role: '前端开发' },
  { id: '5', name: '赵数据', avatar: 'ZS', role: '数据工程师' },
];

const tagFilters = [
  { id: '1', name: '设计', color: 'bg-purple-500' },
  { id: '2', name: '前端', color: 'bg-cyan-500' },
  { id: '3', name: '后端', color: 'bg-green-500' },
  { id: '4', name: '数据', color: 'bg-orange-500' },
  { id: '5', name: '安全', color: 'bg-red-500' },
];

export default function TaskManager() {
  const [columns, setColumns] = useState<Column[]>(initialColumns);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedColumn, setSelectedColumn] = useState('todo');
  const [newTask, setNewTask] = useState({
    title: '',
    description: '',
    tag: '设计',
    priority: 'medium' as 'low' | 'medium' | 'high',
    dueDate: '',
  });
  const [searchQuery, setSearchQuery] = useState('');
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);

  const totalTasks = columns.reduce((sum, col) => sum + col.tasks.length, 0);
  const inProgressTasks = columns.find((c) => c.id === 'in-progress')?.tasks.length || 0;
  const completedTasks = columns.find((c) => c.id === 'done')?.tasks.length || 0;
  const overdueTasks = 2;

  const handleAddTask = () => {
    if (!newTask.title.trim()) return;

    const tagColors: Record<string, string> = {
      设计: 'bg-purple-500/20 text-purple-300',
      前端: 'bg-cyan-500/20 text-cyan-300',
      后端: 'bg-green-500/20 text-green-300',
      数据: 'bg-orange-500/20 text-orange-300',
      安全: 'bg-red-500/20 text-red-300',
    };

    const task: Task = {
      id: Date.now().toString(),
      title: newTask.title,
      description: newTask.description,
      tags: [{ name: newTask.tag, color: tagColors[newTask.tag] || 'bg-slate-500/20 text-slate-300' }],
      dueDate: newTask.dueDate || '07-10',
      assignee: { name: '我', avatar: 'ME' },
      priority: newTask.priority,
    };

    setColumns((prev) =>
      prev.map((col) =>
        col.id === selectedColumn ? { ...col, tasks: [...col.tasks, task] } : col
      )
    );

    setNewTask({ title: '', description: '', tag: '设计', priority: 'medium', dueDate: '' });
    setIsModalOpen(false);
  };

  const priorityColors = {
    low: 'bg-emerald-500',
    medium: 'bg-amber-500',
    high: 'bg-red-500',
  };

  return (
    <div className="min-h-screen bg-slate-950 text-white font-sans">
      {/* 顶部导航栏 */}
      <nav className="sticky top-0 z-50 bg-slate-900/80 backdrop-blur-xl border-b border-slate-800">
        <div className="flex items-center justify-between px-6 py-3">
          <div className="flex items-center gap-6">
            <a
              href="/"
              className="flex items-center gap-2 text-slate-300 hover:text-white transition-colors"
            >
              <ArrowLeft size={20} />
              <span className="font-medium">返回作品集</span>
            </a>
            <div className="h-6 w-px bg-slate-700" />
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-violet-500 to-indigo-600 flex items-center justify-center shadow-lg shadow-indigo-500/30">
                <LayoutDashboard size={20} className="text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold bg-gradient-to-r from-violet-400 to-indigo-400 bg-clip-text text-transparent">
                  TaskFlow
                </h1>
                <p className="text-xs text-slate-500">智能任务管理平台</p>
              </div>
            </div>
          </div>

          <div className="hidden md:flex flex-1 max-w-md mx-8">
            <div className="relative w-full">
              <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500" />
              <input
                type="text"
                placeholder="搜索任务、项目、成员..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-11 pr-4 py-2.5 rounded-xl bg-slate-800/50 border border-slate-700 text-white placeholder-slate-500 focus:outline-none focus:border-violet-500/50 focus:bg-slate-800 transition-all"
              />
            </div>
          </div>

          <div className="flex items-center gap-3">
            <button className="relative p-2.5 rounded-xl bg-slate-800/50 hover:bg-slate-800 border border-slate-700 transition-colors">
              <Bell size={20} className="text-slate-400" />
              <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-red-500 rounded-full" />
            </button>
            <button className="p-2.5 rounded-xl bg-slate-800/50 hover:bg-slate-800 border border-slate-700 transition-colors">
              <Settings size={20} className="text-slate-400" />
            </button>
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-violet-500 to-pink-500 flex items-center justify-center font-semibold text-sm cursor-pointer hover:ring-2 hover:ring-violet-500/50 transition-all">
              ZL
            </div>
          </div>
        </div>
      </nav>

      <div className="flex">
        {/* 左侧边栏 */}
        <aside
          className={cn(
            'sticky top-[68px] h-[calc(100vh-68px)] bg-slate-900/50 border-r border-slate-800 transition-all duration-300 overflow-hidden',
            sidebarCollapsed ? 'w-0' : 'w-64'
          )}
        >
          <div className="p-4 space-y-6 w-64">
            {/* 添加任务按钮 */}
            <button
              onClick={() => setIsModalOpen(true)}
              className="w-full py-3 px-4 rounded-xl bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-500 hover:to-indigo-500 text-white font-medium flex items-center justify-center gap-2 shadow-lg shadow-violet-500/25 transition-all hover:shadow-violet-500/40"
            >
              <Plus size={20} />
              新建任务
            </button>

            {/* 项目列表 */}
            <div>
              <div className="flex items-center justify-between mb-3 px-2">
                <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
                  项目
                </span>
                <button className="p-1 rounded hover:bg-slate-800 transition-colors">
                  <Plus size={14} className="text-slate-500" />
                </button>
              </div>
              <div className="space-y-1">
                {projects.map((project) => (
                  <button
                    key={project.id}
                    className={cn(
                      'w-full flex items-center gap-3 px-3 py-2.5 rounded-lg transition-all',
                      project.active
                        ? 'bg-violet-500/10 text-violet-300 border border-violet-500/20'
                        : 'text-slate-400 hover:bg-slate-800/50 hover:text-slate-200'
                    )}
                  >
                    <span className="text-lg">{project.icon}</span>
                    <span className="text-sm font-medium truncate">{project.name}</span>
                    <ChevronDown size={14} className="ml-auto opacity-50" />
                  </button>
                ))}
              </div>
            </div>

            {/* 成员 */}
            <div>
              <div className="flex items-center justify-between mb-3 px-2">
                <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider flex items-center gap-2">
                  <Users size={12} />
                  团队成员
                </span>
                <button className="p-1 rounded hover:bg-slate-800 transition-colors">
                  <Plus size={14} className="text-slate-500" />
                </button>
              </div>
              <div className="space-y-1">
                {members.map((member) => (
                  <button
                    key={member.id}
                    className="w-full flex items-center gap-3 px-3 py-2 rounded-lg text-slate-400 hover:bg-slate-800/50 hover:text-slate-200 transition-all"
                  >
                    <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-slate-600 to-slate-700 flex items-center justify-center text-xs font-medium">
                      {member.avatar}
                    </div>
                    <div className="text-left">
                      <p className="text-sm font-medium truncate">{member.name}</p>
                      <p className="text-xs text-slate-500 truncate">{member.role}</p>
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* 标签筛选 */}
            <div>
              <div className="flex items-center justify-between mb-3 px-2">
                <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider flex items-center gap-2">
                  <Tag size={12} />
                  标签筛选
                </span>
              </div>
              <div className="flex flex-wrap gap-2 px-2">
                {tagFilters.map((tag) => (
                  <button
                    key={tag.id}
                    className={cn(
                      'px-3 py-1.5 rounded-full text-xs font-medium transition-all flex items-center gap-1.5',
                      'bg-slate-800 text-slate-400 hover:bg-slate-700 hover:text-slate-200'
                    )}
                  >
                    <span className={cn('w-2 h-2 rounded-full', tag.color)} />
                    {tag.name}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </aside>

        {/* 主内容区 */}
        <main className="flex-1 p-6 overflow-x-auto">
          {/* 统计卡片 */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
            <div className="bg-slate-900/50 backdrop-blur border border-slate-800 rounded-2xl p-5 hover:border-slate-700 transition-colors">
              <div className="flex items-center justify-between mb-3">
                <span className="text-slate-400 text-sm">总任务数</span>
                <div className="w-10 h-10 rounded-xl bg-violet-500/10 flex items-center justify-center">
                  <LayoutDashboard size={20} className="text-violet-400" />
                </div>
              </div>
              <p className="text-3xl font-bold text-white">{totalTasks}</p>
              <p className="text-xs text-emerald-400 mt-1">↑ 12% 较上周</p>
            </div>

            <div className="bg-slate-900/50 backdrop-blur border border-slate-800 rounded-2xl p-5 hover:border-slate-700 transition-colors">
              <div className="flex items-center justify-between mb-3">
                <span className="text-slate-400 text-sm">进行中</span>
                <div className="w-10 h-10 rounded-xl bg-blue-500/10 flex items-center justify-center">
                  <Clock size={20} className="text-blue-400" />
                </div>
              </div>
              <p className="text-3xl font-bold text-white">{inProgressTasks}</p>
              <p className="text-xs text-blue-400 mt-1">3 人正在处理</p>
            </div>

            <div className="bg-slate-900/50 backdrop-blur border border-slate-800 rounded-2xl p-5 hover:border-slate-700 transition-colors">
              <div className="flex items-center justify-between mb-3">
                <span className="text-slate-400 text-sm">已完成</span>
                <div className="w-10 h-10 rounded-xl bg-emerald-500/10 flex items-center justify-center">
                  <CheckCircle2 size={20} className="text-emerald-400" />
                </div>
              </div>
              <p className="text-3xl font-bold text-white">{completedTasks}</p>
              <p className="text-xs text-emerald-400 mt-1">完成率 75%</p>
            </div>

            <div className="bg-slate-900/50 backdrop-blur border border-slate-800 rounded-2xl p-5 hover:border-slate-700 transition-colors">
              <div className="flex items-center justify-between mb-3">
                <span className="text-slate-400 text-sm">已逾期</span>
                <div className="w-10 h-10 rounded-xl bg-red-500/10 flex items-center justify-center">
                  <AlertCircle size={20} className="text-red-400" />
                </div>
              </div>
              <p className="text-3xl font-bold text-white">{overdueTasks}</p>
              <p className="text-xs text-red-400 mt-1">需要尽快处理</p>
            </div>
          </div>

          {/* 看板视图 */}
          <div className="flex gap-4 min-w-max">
            {columns.map((column) => (
              <div
                key={column.id}
                className="w-80 flex-shrink-0 bg-slate-900/30 rounded-2xl border border-slate-800 overflow-hidden"
              >
                {/* 列头部 */}
                <div className="p-4 border-b border-slate-800">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className={cn('w-3 h-3 rounded-full bg-gradient-to-r', column.color)} />
                      <h3 className="font-semibold text-white">{column.title}</h3>
                      <span className="px-2 py-0.5 rounded-full bg-slate-800 text-slate-400 text-xs font-medium">
                        {column.tasks.length}
                      </span>
                    </div>
                    <button
                      onClick={() => {
                        setSelectedColumn(column.id);
                        setIsModalOpen(true);
                      }}
                      className="p-1.5 rounded-lg hover:bg-slate-800 transition-colors group"
                    >
                      <Plus size={16} className="text-slate-500 group-hover:text-white transition-colors" />
                    </button>
                  </div>
                </div>

                {/* 任务列表 */}
                <div className="p-3 space-y-3 max-h-[calc(100vh-380px)] overflow-y-auto">
                  {column.tasks.map((task) => (
                    <div
                      key={task.id}
                      className="group bg-slate-800/50 hover:bg-slate-800 border border-slate-700/50 hover:border-violet-500/30 rounded-xl p-4 cursor-pointer transition-all hover:shadow-lg hover:shadow-violet-500/10 hover:-translate-y-0.5"
                    >
                      {/* 优先级指示 */}
                      <div className="flex items-start justify-between mb-3">
                        <div className="flex gap-1.5">
                          {task.tags.map((tag, idx) => (
                            <span
                              key={idx}
                              className={cn('px-2 py-0.5 rounded-md text-xs font-medium', tag.color)}
                            >
                              {tag.name}
                            </span>
                          ))}
                        </div>
                        <div
                          className={cn(
                            'w-2 h-2 rounded-full mt-1.5',
                            priorityColors[task.priority]
                          )}
                        />
                      </div>

                      {/* 任务标题 */}
                      <h4 className="text-sm font-medium text-white mb-3 group-hover:text-violet-200 transition-colors line-clamp-2">
                        {task.title}
                      </h4>

                      {/* 底部信息 */}
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-1.5 text-slate-500 text-xs">
                          <Calendar size={12} />
                          <span>{task.dueDate}</span>
                        </div>
                        <div
                          className="w-7 h-7 rounded-lg bg-gradient-to-br from-slate-600 to-slate-700 flex items-center justify-center text-xs font-medium text-slate-300 group-hover:ring-2 group-hover:ring-violet-500/50 transition-all"
                          title={task.assignee.name}
                        >
                          {task.assignee.avatar}
                        </div>
                      </div>
                    </div>
                  ))}

                  {/* 添加卡片按钮 */}
                  <button
                    onClick={() => {
                      setSelectedColumn(column.id);
                      setIsModalOpen(true);
                    }}
                    className="w-full py-3 rounded-xl border border-dashed border-slate-700 text-slate-500 hover:text-slate-300 hover:border-slate-600 hover:bg-slate-800/30 transition-all flex items-center justify-center gap-2 text-sm"
                  >
                    <Plus size={16} />
                    添加任务
                  </button>
                </div>
              </div>
            ))}
          </div>
        </main>
      </div>

      {/* 新建任务模态框 */}
      {isModalOpen && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center p-4">
          <div
            className="absolute inset-0 bg-slate-950/80 backdrop-blur-sm"
            onClick={() => setIsModalOpen(false)}
          />
          <div className="relative w-full max-w-md bg-slate-900 rounded-2xl border border-slate-700 shadow-2xl shadow-black/50 overflow-hidden">
            {/* 模态框头部 */}
            <div className="flex items-center justify-between p-6 border-b border-slate-800">
              <h2 className="text-xl font-bold text-white">新建任务</h2>
              <button
                onClick={() => setIsModalOpen(false)}
                className="p-2 rounded-lg hover:bg-slate-800 transition-colors"
              >
                <X size={20} className="text-slate-400" />
              </button>
            </div>

            {/* 表单内容 */}
            <div className="p-6 space-y-5">
              <div>
                <label className="block text-sm font-medium text-slate-300 mb-2">任务标题</label>
                <input
                  type="text"
                  value={newTask.title}
                  onChange={(e) => setNewTask({ ...newTask, title: e.target.value })}
                  placeholder="输入任务标题..."
                  className="w-full px-4 py-3 rounded-xl bg-slate-800 border border-slate-700 text-white placeholder-slate-500 focus:outline-none focus:border-violet-500/50 transition-colors"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-300 mb-2">任务描述</label>
                <textarea
                  value={newTask.description}
                  onChange={(e) => setNewTask({ ...newTask, description: e.target.value })}
                  placeholder="添加任务描述..."
                  rows={3}
                  className="w-full px-4 py-3 rounded-xl bg-slate-800 border border-slate-700 text-white placeholder-slate-500 focus:outline-none focus:border-violet-500/50 transition-colors resize-none"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-2">标签</label>
                  <select
                    value={newTask.tag}
                    onChange={(e) => setNewTask({ ...newTask, tag: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-slate-800 border border-slate-700 text-white focus:outline-none focus:border-violet-500/50 transition-colors"
                  >
                    <option value="设计">设计</option>
                    <option value="前端">前端</option>
                    <option value="后端">后端</option>
                    <option value="数据">数据</option>
                    <option value="安全">安全</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-2">优先级</label>
                  <select
                    value={newTask.priority}
                    onChange={(e) =>
                      setNewTask({
                        ...newTask,
                        priority: e.target.value as 'low' | 'medium' | 'high',
                      })
                    }
                    className="w-full px-4 py-3 rounded-xl bg-slate-800 border border-slate-700 text-white focus:outline-none focus:border-violet-500/50 transition-colors"
                  >
                    <option value="low">低</option>
                    <option value="medium">中</option>
                    <option value="high">高</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-300 mb-2">截止日期</label>
                <input
                  type="date"
                  value={newTask.dueDate}
                  onChange={(e) => setNewTask({ ...newTask, dueDate: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-slate-800 border border-slate-700 text-white focus:outline-none focus:border-violet-500/50 transition-colors"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-300 mb-2">添加到列</label>
                <select
                  value={selectedColumn}
                  onChange={(e) => setSelectedColumn(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl bg-slate-800 border border-slate-700 text-white focus:outline-none focus:border-violet-500/50 transition-colors"
                >
                  <option value="todo">待办</option>
                  <option value="in-progress">进行中</option>
                  <option value="review">审核中</option>
                  <option value="done">已完成</option>
                </select>
              </div>
            </div>

            {/* 底部按钮 */}
            <div className="p-6 border-t border-slate-800 flex gap-3">
              <button
                onClick={() => setIsModalOpen(false)}
                className="flex-1 py-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 font-medium transition-colors"
              >
                取消
              </button>
              <button
                onClick={handleAddTask}
                className="flex-1 py-3 rounded-xl bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-500 hover:to-indigo-500 text-white font-medium shadow-lg shadow-violet-500/25 transition-all"
              >
                创建任务
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
