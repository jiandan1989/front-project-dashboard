import React from 'react';
import { 
  FolderOpen, 
  Calendar, 
  Users, 
  Target,
  AlertTriangle,
  CheckCircle,
  Clock,
  DollarSign,
  TrendingUp,
  TrendingDown
} from 'lucide-react';

export function ProjectManagement() {
  const projects = [
    {
      name: '电商平台重构',
      status: 'in-progress',
      progress: 68,
      startDate: '2024-01-15',
      endDate: '2024-04-30',
      budget: '¥2,500,000',
      spent: '¥1,700,000',
      team: 12,
      requirements: { total: 45, completed: 31, pending: 14 },
      risks: ['预算可能超支', '关键人员休假'],
      priority: 'high'
    },
    {
      name: '移动端应用优化',
      status: 'in-progress', 
      progress: 45,
      startDate: '2024-02-01',
      endDate: '2024-05-15',
      budget: '¥800,000',
      spent: '¥360,000',
      team: 6,
      requirements: { total: 28, completed: 12, pending: 16 },
      risks: ['UI设计延期'],
      priority: 'medium'
    },
    {
      name: '数据中台建设',
      status: 'planning',
      progress: 15,
      startDate: '2024-03-01',
      endDate: '2024-08-31',
      budget: '¥3,200,000',
      spent: '¥480,000',
      team: 8,
      requirements: { total: 67, completed: 10, pending: 57 },
      risks: ['技术选型待定', '人员配置不足'],
      priority: 'high'
    },
    {
      name: '客服系统升级',
      status: 'completed',
      progress: 100,
      startDate: '2023-10-01',
      endDate: '2024-01-31',
      budget: '¥600,000',
      spent: '¥580,000',
      team: 4,
      requirements: { total: 22, completed: 22, pending: 0 },
      risks: [],
      priority: 'low'
    }
  ];

  const developmentStats = [
    { phase: '需求分析', avgTime: 8.5, trend: 'down', efficiency: 85 },
    { phase: '设计开发', avgTime: 24.2, trend: 'up', efficiency: 78 },
    { phase: '测试验收', avgTime: 12.8, trend: 'stable', efficiency: 92 },
    { phase: '部署上线', avgTime: 3.2, trend: 'down', efficiency: 95 }
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold text-gray-900">项目管理</h2>
        <div className="flex space-x-3">
          <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
            新建项目
          </button>
          <select className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500">
            <option>全部状态</option>
            <option>进行中</option>
            <option>已完成</option>
            <option>计划中</option>
          </select>
        </div>
      </div>

      {/* Project Cards */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {projects.map((project, index) => (
          <div key={index} className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 hover:shadow-md transition-shadow">
            <div className="flex items-start justify-between mb-4">
              <div>
                <h3 className="font-semibold text-gray-900 text-lg mb-1">{project.name}</h3>
                <div className="flex items-center space-x-4 text-sm text-gray-600">
                  <div className="flex items-center">
                    <Calendar className="h-4 w-4 mr-1" />
                    {project.startDate} - {project.endDate}
                  </div>
                  <div className="flex items-center">
                    <Users className="h-4 w-4 mr-1" />
                    {project.team}人
                  </div>
                </div>
              </div>
              <div className={`px-3 py-1 rounded-full text-xs font-medium ${
                project.status === 'completed' ? 'bg-green-100 text-green-800' :
                project.status === 'in-progress' ? 'bg-blue-100 text-blue-800' :
                'bg-yellow-100 text-yellow-800'
              }`}>
                {project.status === 'completed' ? '已完成' :
                 project.status === 'in-progress' ? '进行中' : '计划中'}
              </div>
            </div>

            {/* Progress Bar */}
            <div className="mb-4">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-medium text-gray-700">项目进度</span>
                <span className="text-sm font-medium text-gray-900">{project.progress}%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div 
                  className={`h-2 rounded-full transition-all duration-300 ${
                    project.progress === 100 ? 'bg-green-500' :
                    project.progress >= 50 ? 'bg-blue-500' : 'bg-yellow-500'
                  }`}
                  style={{ width: `${project.progress}%` }}
                ></div>
              </div>
            </div>

            {/* Budget & Requirements */}
            <div className="grid grid-cols-2 gap-4 mb-4">
              <div className="bg-gray-50 rounded-lg p-3">
                <div className="flex items-center space-x-2 mb-1">
                  <DollarSign className="h-4 w-4 text-gray-600" />
                  <span className="text-sm font-medium text-gray-700">预算</span>
                </div>
                <div className="text-lg font-semibold text-gray-900">{project.budget}</div>
                <div className="text-xs text-gray-600">已使用: {project.spent}</div>
              </div>
              <div className="bg-gray-50 rounded-lg p-3">
                <div className="flex items-center space-x-2 mb-1">
                  <Target className="h-4 w-4 text-gray-600" />
                  <span className="text-sm font-medium text-gray-700">需求</span>
                </div>
                <div className="text-lg font-semibold text-gray-900">
                  {project.requirements.completed}/{project.requirements.total}
                </div>
                <div className="text-xs text-gray-600">待完成: {project.requirements.pending}</div>
              </div>
            </div>

            {/* Risks */}
            {project.risks.length > 0 && (
              <div className="bg-amber-50 border border-amber-200 rounded-lg p-3">
                <div className="flex items-center space-x-2 mb-2">
                  <AlertTriangle className="h-4 w-4 text-amber-600" />
                  <span className="text-sm font-medium text-amber-800">风险提醒</span>
                </div>
                <ul className="space-y-1">
                  {project.risks.map((risk, riskIndex) => (
                    <li key={riskIndex} className="text-sm text-amber-700">• {risk}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Development Time Analysis */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-6">开发耗时分析大盘</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {developmentStats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg p-4 mb-3">
                <div className="text-2xl font-bold text-gray-900 mb-1">{stat.avgTime}天</div>
                <div className="text-sm text-gray-600">{stat.phase}</div>
                <div className="flex items-center justify-center mt-2">
                  {stat.trend === 'up' ? (
                    <TrendingUp className="h-4 w-4 text-red-500 mr-1" />
                  ) : stat.trend === 'down' ? (
                    <TrendingDown className="h-4 w-4 text-green-500 mr-1" />
                  ) : (
                    <div className="h-4 w-4 bg-gray-400 rounded-full mr-1"></div>
                  )}
                  <span className={`text-xs ${
                    stat.trend === 'up' ? 'text-red-500' :
                    stat.trend === 'down' ? 'text-green-500' : 'text-gray-500'
                  }`}>
                    {stat.trend === 'up' ? '增长' : 
                     stat.trend === 'down' ? '优化' : '稳定'}
                  </span>
                </div>
              </div>
              <div className="text-sm text-gray-600">
                效率: <span className="font-medium text-gray-900">{stat.efficiency}%</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Progress Tracking */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-6">进度跟踪看板</h3>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="bg-yellow-50 rounded-lg p-4">
            <h4 className="font-medium text-yellow-800 mb-3">计划中 (1)</h4>
            <div className="space-y-2">
              <div className="bg-white rounded p-3 border border-yellow-200">
                <div className="font-medium text-gray-900">数据中台建设</div>
                <div className="text-sm text-gray-600">预计开始: 3月1日</div>
              </div>
            </div>
          </div>
          
          <div className="bg-blue-50 rounded-lg p-4">
            <h4 className="font-medium text-blue-800 mb-3">进行中 (2)</h4>
            <div className="space-y-2">
              <div className="bg-white rounded p-3 border border-blue-200">
                <div className="font-medium text-gray-900">电商平台重构</div>
                <div className="text-sm text-gray-600">进度: 68%</div>
              </div>
              <div className="bg-white rounded p-3 border border-blue-200">
                <div className="font-medium text-gray-900">移动端应用优化</div>
                <div className="text-sm text-gray-600">进度: 45%</div>
              </div>
            </div>
          </div>
          
          <div className="bg-green-50 rounded-lg p-4">
            <h4 className="font-medium text-green-800 mb-3">已完成 (1)</h4>
            <div className="space-y-2">
              <div className="bg-white rounded p-3 border border-green-200">
                <div className="font-medium text-gray-900">客服系统升级</div>
                <div className="text-sm text-gray-600">完成时间: 1月31日</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}