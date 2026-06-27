import { useState } from 'react';
import {
  ArrowLeft,
  Sun,
  Moon,
  Heart,
  MessageCircle,
  Share2,
  Bookmark,
  MoreHorizontal,
  Send,
  Grid3X3,
  UserPlus,
  Settings,
  Search,
  Home,
  PlusSquare,
  Film,
  User,
  Camera,
} from 'lucide-react';
import { cn } from '@/lib/utils';

export default function SocialDesign() {
  const [isDarkMode, setIsDarkMode] = useState(true);

  const stories = [
    { id: 1, name: '我的故事', avatar: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=portrait%20of%20a%20young%20asian%20woman%20with%20long%20hair%20smiling%20soft%20lighting&image_size=square', isOwn: true },
    { id: 2, name: '小琳', avatar: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=portrait%20of%20a%20young%20asian%20girl%20with%20cute%20hairstyle%20pastel%20aesthetic&image_size=square' },
    { id: 3, name: '阿杰', avatar: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=portrait%20of%20a%20young%20asian%20man%20casual%20style%20warm%20smile&image_size=square' },
    { id: 4, name: '小美', avatar: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=portrait%20of%20a%20stylish%20asian%20woman%20fashion%20makeup%20elegant&image_size=square' },
    { id: 5, name: '大伟', avatar: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=portrait%20of%20a%20friendly%20asian%20man%20glasses%20smart%20casual&image_size=square' },
    { id: 6, name: '思思', avatar: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=portrait%20of%20a%20sweet%20asian%20girl%20soft%20dreamy%20aesthetic&image_size=square' },
  ];

  const posts = [
    {
      id: 1,
      user: '小琳',
      avatar: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=portrait%20of%20a%20young%20asian%20girl%20with%20cute%20hairstyle%20pastel%20aesthetic&image_size=square',
      time: '2小时前',
      image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=beautiful%20sunset%20over%20ocean%20pastel%20pink%20purple%20sky%20dreamy%20aesthetic&image_size=square_hd',
      likes: 1234,
      comments: 89,
      description: '今天的日落太美了 🌅 粉紫色的天空像油画一样 #日落 #风景 #治愈',
      liked: true,
      saved: false,
      commentPreview: {
        user: '阿杰',
        text: '太美了！下次带我一起去看',
      },
    },
    {
      id: 2,
      user: '阿杰',
      avatar: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=portrait%20of%20a%20young%20asian%20man%20casual%20style%20warm%20smile&image_size=square',
      time: '5小时前',
      image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=cozy%20cafe%20interior%20warm%20lighting%20coffee%20aesthetic%20pastel&image_size=square_hd',
      likes: 856,
      comments: 45,
      description: '周末的下午茶时光 ☕️ 这家咖啡店的氛围真的太棒了 #咖啡 #周末 #生活方式',
      liked: false,
      saved: true,
      commentPreview: {
        user: '小美',
        text: '地址发我！想去打卡',
      },
    },
    {
      id: 3,
      user: '小美',
      avatar: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=portrait%20of%20a%20stylish%20asian%20woman%20fashion%20makeup%20elegant&image_size=square',
      time: '昨天',
      image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=stylish%20fashion%20outfit%20street%20style%20pastel%20colors%20aesthetic&image_size=square_hd',
      likes: 2341,
      comments: 156,
      description: '今日穿搭分享 ✨ 粉紫色系真的太温柔了 #穿搭 #时尚 #日常',
      liked: false,
      saved: false,
      commentPreview: {
        user: '思思',
        text: '这套好好看！求链接',
      },
    },
  ];

  const profilePosts = [
    'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=beautiful%20cherry%20blossom%20pink%20aesthetic%20dreamy&image_size=square',
    'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=pastel%20purple%20sunset%20mountains%20dreamy%20landscape&image_size=square',
    'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=cute%20aesthetic%20desk%20setup%20pastel%20pink%20purple&image_size=square',
    'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=soft%20pink%20flowers%20dreamy%20aesthetic%20photography&image_size=square',
    'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=pastel%20purple%20clouds%20sky%20dreamy%20aesthetic&image_size=square',
    'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=aesthetic%20coffee%20and%20book%20cozy%20warm%20pastel&image_size=square',
  ];

  const chats = [
    {
      id: 1,
      name: '小琳',
      avatar: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=portrait%20of%20a%20young%20asian%20girl%20with%20cute%20hairstyle%20pastel%20aesthetic&image_size=square',
      lastMessage: '明天一起去看电影吗？',
      time: '刚刚',
      unread: 3,
    },
    {
      id: 2,
      name: '阿杰',
      avatar: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=portrait%20of%20a%20young%20asian%20man%20casual%20style%20warm%20smile&image_size=square',
      lastMessage: '那个项目进展怎么样了？',
      time: '10分钟前',
      unread: 1,
    },
    {
      id: 3,
      name: '小美',
      avatar: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=portrait%20of%20a%20stylish%20asian%20woman%20fashion%20makeup%20elegant&image_size=square',
      lastMessage: '那件衣服链接发我一下呀',
      time: '1小时前',
      unread: 0,
    },
    {
      id: 4,
      name: '大伟',
      avatar: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=portrait%20of%20a%20friendly%20asian%20man%20glasses%20smart%20casual&image_size=square',
      lastMessage: '周末的聚会记得来哦',
      time: '3小时前',
      unread: 0,
    },
    {
      id: 5,
      name: '思思',
      avatar: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=portrait%20of%20a%20sweet%20asian%20girl%20soft%20dreamy%20aesthetic&image_size=square',
      lastMessage: '你发的那张图真的好好看！',
      time: '昨天',
      unread: 0,
    },
  ];

  const bgClass = isDarkMode ? 'bg-gray-950' : 'bg-gray-50';
  const textClass = isDarkMode ? 'text-white' : 'text-gray-900';
  const textMutedClass = isDarkMode ? 'text-gray-400' : 'text-gray-500';
  const cardBgClass = isDarkMode ? 'bg-gray-900' : 'bg-white';
  const borderClass = isDarkMode ? 'border-gray-800' : 'border-gray-200';
  const navBgClass = isDarkMode ? 'bg-gray-950/90' : 'bg-white/90';

  return (
    <div className={cn('min-h-screen transition-colors duration-500', bgClass, textClass)}>
      <nav className={cn('sticky top-0 z-50 backdrop-blur-md border-b transition-colors duration-500', navBgClass, borderClass)}>
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <a
              href="/"
              className={cn('flex items-center gap-2 transition-colors group', textClass)}
            >
              <ArrowLeft size={20} className="group-hover:text-pink-500 transition-colors" />
              <span className="font-medium">返回作品集</span>
            </a>

            <h1 className="text-xl md:text-2xl font-bold bg-gradient-to-r from-pink-500 via-purple-500 to-pink-500 bg-clip-text text-transparent bg-size-200 animate-gradient-shift">
              社交平台设计
            </h1>

            <button
              onClick={() => setIsDarkMode(!isDarkMode)}
              className={cn(
                'p-2.5 rounded-full transition-all duration-300',
                isDarkMode
                  ? 'bg-gray-800 hover:bg-gray-700 text-yellow-400'
                  : 'bg-gray-100 hover:bg-gray-200 text-gray-700'
              )}
            >
              {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>
          </div>
        </div>
      </nav>

      <div className="container mx-auto px-6 py-12">
        <section className="mb-20">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-1 h-8 bg-gradient-to-b from-pink-500 to-purple-500 rounded-full" />
            <h2 className="text-2xl md:text-3xl font-bold">首页 Feed 流</h2>
          </div>

          <div className="max-w-md mx-auto">
            <div className={cn('rounded-3xl overflow-hidden shadow-2xl transition-colors duration-500', cardBgClass)}>
              <div className={cn('flex items-center justify-between px-4 py-3 border-b transition-colors duration-500', borderClass)}>
                <span className="font-semibold text-lg">Social</span>
                <div className="flex items-center gap-4">
                  <Heart size={22} className="text-pink-500" />
                  <Send size={22} />
                </div>
              </div>

              <div className="flex gap-4 px-4 py-4 overflow-x-auto scrollbar-hide">
                {stories.map((story) => (
                  <div key={story.id} className="flex flex-col items-center gap-1.5 flex-shrink-0">
                    <div className={cn(
                      'p-0.5 rounded-full',
                      story.isOwn
                        ? isDarkMode ? 'bg-gray-700' : 'bg-gray-200'
                        : 'bg-gradient-to-tr from-pink-500 via-purple-500 to-pink-500'
                    )}>
                      <div className={cn('p-0.5 rounded-full', cardBgClass)}>
                        <div className="relative">
                          <img
                            src={story.avatar}
                            alt={story.name}
                            className="w-14 h-14 rounded-full object-cover"
                          />
                          {story.isOwn && (
                            <div className="absolute -bottom-0.5 -right-0.5 w-5 h-5 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full flex items-center justify-center border-2 border-white">
                              <span className="text-white text-xs font-bold">+</span>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                    <span className={cn('text-xs', textMutedClass)}>{story.name}</span>
                  </div>
                ))}
              </div>

              <div className="space-y-4 pb-4">
                {posts.map((post) => (
                  <article key={post.id} className={cn('border-t transition-colors duration-500', borderClass)}>
                    <div className="flex items-center justify-between px-4 py-3">
                      <div className="flex items-center gap-3">
                        <div className="p-0.5 rounded-full bg-gradient-to-tr from-pink-500 via-purple-500 to-pink-500">
                          <div className={cn('p-0.5 rounded-full', cardBgClass)}>
                            <img
                              src={post.avatar}
                              alt={post.user}
                              className="w-8 h-8 rounded-full object-cover"
                            />
                          </div>
                        </div>
                        <div>
                          <p className="font-semibold text-sm">{post.user}</p>
                          <p className={cn('text-xs', textMutedClass)}>{post.time}</p>
                        </div>
                      </div>
                      <MoreHorizontal size={20} className={textMutedClass} />
                    </div>

                    <div className="aspect-square bg-gray-100">
                      <img
                        src={post.image}
                        alt="post"
                        className="w-full h-full object-cover"
                      />
                    </div>

                    <div className="px-4 py-3">
                      <div className="flex items-center justify-between mb-3">
                        <div className="flex items-center gap-4">
                          <Heart
                            size={24}
                            className={cn(
                              'transition-all duration-300 cursor-pointer',
                              post.liked ? 'text-pink-500 fill-pink-500 scale-110' : 'hover:text-pink-500'
                            )}
                          />
                          <MessageCircle size={24} className="hover:text-purple-500 transition-colors cursor-pointer" />
                          <Send size={24} className="hover:text-pink-500 transition-colors cursor-pointer -rotate-12" />
                        </div>
                        <Bookmark
                          size={24}
                          className={cn(
                            'transition-all duration-300 cursor-pointer',
                            post.saved ? 'fill-current' : 'hover:text-purple-500'
                          )}
                        />
                      </div>

                      <p className="font-semibold text-sm mb-2">{post.likes.toLocaleString()} 次赞</p>

                      <p className="text-sm mb-2">
                        <span className="font-semibold mr-2">{post.user}</span>
                        {post.description}
                      </p>

                      <p className={cn('text-sm cursor-pointer mb-2', textMutedClass)}>
                        查看全部 {post.comments} 条评论
                      </p>

                      <div className="flex items-start gap-2 text-sm">
                        <span className="font-semibold flex-shrink-0">{post.commentPreview.user}</span>
                        <span className={textMutedClass}>{post.commentPreview.text}</span>
                      </div>
                    </div>
                  </article>
                ))}
              </div>

              <div className={cn('flex items-center justify-around py-3 border-t transition-colors duration-500', borderClass)}>
                <Home size={24} className="text-pink-500" />
                <Search size={24} className={textMutedClass} />
                <PlusSquare size={24} className={textMutedClass} />
                <Film size={24} className={textMutedClass} />
                <div className="w-6 h-6 rounded-full overflow-hidden ring-2 ring-pink-500">
                  <img
                    src={stories[0].avatar}
                    alt="profile"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-20">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-1 h-8 bg-gradient-to-b from-purple-500 to-pink-500 rounded-full" />
            <h2 className="text-2xl md:text-3xl font-bold">个人主页</h2>
          </div>

          <div className="max-w-md mx-auto">
            <div className={cn('rounded-3xl overflow-hidden shadow-2xl transition-colors duration-500', cardBgClass)}>
              <div className="relative">
                <img
                  src="https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=dreamy%20pastel%20pink%20purple%20gradient%20sky%20clouds%20aesthetic%20banner&image_size=landscape_16_9"
                  alt="cover"
                  className="w-full h-40 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-pink-500/20 to-transparent" />
              </div>

              <div className="px-6 pb-6">
                <div className="flex justify-between items-end -mt-12 mb-4">
                  <div className="p-1 rounded-full bg-gradient-to-tr from-pink-500 via-purple-500 to-pink-500">
                    <div className={cn('p-1 rounded-full', cardBgClass)}>
                      <img
                        src="https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=portrait%20of%20a%20young%20asian%20woman%20with%20long%20hair%20smiling%20soft%20lighting&image_size=square"
                        alt="avatar"
                        className="w-24 h-24 rounded-full object-cover"
                      />
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <button className={cn(
                      'p-2.5 rounded-full border transition-colors',
                      borderClass,
                      'hover:border-pink-500 hover:text-pink-500'
                    )}>
                      <UserPlus size={20} />
                    </button>
                    <button className={cn(
                      'p-2.5 rounded-full border transition-colors',
                      borderClass,
                      'hover:border-purple-500 hover:text-purple-500'
                    )}>
                      <Settings size={20} />
                    </button>
                  </div>
                </div>

                <div className="mb-4">
                  <h3 className="text-xl font-bold mb-1">糖糖小姐</h3>
                  <p className={cn('text-sm', textMutedClass)}>@tangtang_design</p>
                </div>

                <p className="text-sm mb-4 leading-relaxed">
                  🎨 UI/UX 设计师
                  <br />
                  ✨ 热爱生活，记录美好
                  <br />
                  📍 上海
                </p>

                <div className="flex justify-around mb-6 py-4 border-y border-pink-500/20">
                  <div className="text-center">
                    <p className="text-xl font-bold bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent">256</p>
                    <p className={cn('text-xs', textMutedClass)}>关注</p>
                  </div>
                  <div className="text-center">
                    <p className="text-xl font-bold bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent">12.3k</p>
                    <p className={cn('text-xs', textMutedClass)}>粉丝</p>
                  </div>
                  <div className="text-center">
                    <p className="text-xl font-bold bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent">45.6k</p>
                    <p className={cn('text-xs', textMutedClass)}>获赞</p>
                  </div>
                </div>

                <button className="w-full py-3 rounded-xl bg-gradient-to-r from-pink-500 to-purple-500 text-white font-semibold hover:shadow-lg hover:shadow-pink-500/30 transition-all duration-300 hover:-translate-y-0.5">
                  编辑资料
                </button>

                <div className="flex justify-around mt-6 mb-4">
                  <Grid3X3 size={22} className="text-pink-500" />
                  <Film size={22} className={textMutedClass} />
                  <User size={22} className={textMutedClass} />
                  <Bookmark size={22} className={textMutedClass} />
                </div>

                <div className="grid grid-cols-3 gap-0.5">
                  {profilePosts.map((post, index) => (
                    <div key={index} className="aspect-square overflow-hidden relative group cursor-pointer">
                      <img
                        src={post}
                        alt={`post-${index}`}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors flex items-center justify-center opacity-0 group-hover:opacity-100">
                        <div className="flex items-center gap-4 text-white">
                          <div className="flex items-center gap-1">
                            <Heart size={16} fill="white" />
                            <span className="text-sm font-semibold">{Math.floor(Math.random() * 2000) + 100}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <MessageCircle size={16} fill="white" />
                            <span className="text-sm font-semibold">{Math.floor(Math.random() * 200) + 10}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-1 h-8 bg-gradient-to-b from-pink-500 to-purple-500 rounded-full" />
            <h2 className="text-2xl md:text-3xl font-bold">消息页面</h2>
          </div>

          <div className="max-w-md mx-auto">
            <div className={cn('rounded-3xl overflow-hidden shadow-2xl transition-colors duration-500', cardBgClass)}>
              <div className={cn('flex items-center justify-between px-4 py-3 border-b transition-colors duration-500', borderClass)}>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full overflow-hidden">
                    <img
                      src="https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=portrait%20of%20a%20young%20asian%20woman%20with%20long%20hair%20smiling%20soft%20lighting&image_size=square"
                      alt="profile"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <span className="font-semibold text-lg">消息</span>
                </div>
                <div className="flex items-center gap-4">
                  <Camera size={22} className={textMutedClass} />
                  <Send size={22} className={textMutedClass} />
                </div>
              </div>

              <div className="px-4 py-3">
                <div className={cn(
                  'flex items-center gap-3 px-4 py-2.5 rounded-full transition-colors duration-500',
                  isDarkMode ? 'bg-gray-800' : 'bg-gray-100'
                )}>
                  <Search size={18} className={textMutedClass} />
                  <input
                    type="text"
                    placeholder="搜索"
                    className={cn(
                      'flex-1 bg-transparent outline-none text-sm',
                      textClass,
                      'placeholder-gray-500'
                    )}
                  />
                </div>
              </div>

              <div className="px-4 pb-4">
                <p className="font-semibold mb-3">消息</p>
                <div className="space-y-1">
                  {chats.map((chat) => (
                    <div
                      key={chat.id}
                      className={cn(
                        'flex items-center gap-3 p-2 rounded-xl cursor-pointer transition-colors',
                        isDarkMode ? 'hover:bg-gray-800' : 'hover:bg-gray-50'
                      )}
                    >
                      <div className="relative flex-shrink-0">
                        <img
                          src={chat.avatar}
                          alt={chat.name}
                          className="w-12 h-12 rounded-full object-cover"
                        />
                        {chat.unread > 0 && (
                          <div className="absolute -top-0.5 -right-0.5 w-4 h-4 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                            {chat.unread}
                          </div>
                        )}
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between mb-0.5">
                          <p className="font-semibold text-sm truncate">{chat.name}</p>
                          <span className={cn('text-xs flex-shrink-0 ml-2', textMutedClass)}>{chat.time}</span>
                        </div>
                        <p className={cn(
                          'text-sm truncate',
                          chat.unread > 0 ? textClass : textMutedClass
                        )}>
                          {chat.lastMessage}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className={cn('flex items-center justify-around py-3 border-t transition-colors duration-500', borderClass)}>
                <Home size={24} className={textMutedClass} />
                <Search size={24} className={textMutedClass} />
                <PlusSquare size={24} className={textMutedClass} />
                <div className="relative">
                  <Film size={24} className={textMutedClass} />
                </div>
                <div className="w-6 h-6 rounded-full overflow-hidden ring-2 ring-pink-500">
                  <img
                    src={stories[0].avatar}
                    alt="profile"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      <footer className={cn('py-12 text-center border-t transition-colors duration-500', borderClass)}>
        <p className="text-lg font-semibold mb-2 bg-gradient-to-r from-pink-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
          社交平台设计
        </p>
        <p className={cn('text-sm', textMutedClass)}>© 2024 社交UI设计演示项目 · UI/UX 设计作品集</p>
      </footer>
    </div>
  );
}
