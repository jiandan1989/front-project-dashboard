import React from 'react';
import { 
  TrendingUp, 
  TrendingDown, 
  Users, 
  Code, 
  AlertTriangle,
  CheckCircle,
  Clock,
  DollarSign
} from 'lucide-react';

export function Dashboard() {
  const kpiCards = [
    {
      title: '团队成员',
      value: '148',
      change: '+12%',
      trend: 'up',
      icon: Users,
      color: 'blue'
    },
    {
      title: '活跃项目',
      value: '24',
      change: '+8%',
      trend: 'up', 
      icon: Code,
      color: 'green'
    },
    {
      title: '异常率',
      value: '2.3%',
      change: '-0.5%',
      trend: 'down',
      icon: AlertTriangle,
      color: 'red'
    },
    {
      title: '完成率',
      value: '94.5%',
      change: '+3.2%',
      trend: 'up',
      icon: CheckCircle,
      color: 'emerald'
    }
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold text-gray-900">总览大盘</h2>
        <div className="flex space-x-3">
          <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
            导出报告
          </button>
          <select className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500">
            <option>最近7天</option>
            <option>最近30天</option>
            <option>最近90天</option>
          </select>
        </div>
      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {kpiCards.map((card, index) => (
          <div key={index} className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
            <div className="flex items-center justify-between">
              <div className={`w-12 h-12 bg-${card.color}-100 rounded-lg flex items-center justify-center`}>
                <card.icon className={`h-6 w-6 text-${card.color}-600`} />
              </div>
              <div className={`flex items-center space-x-1 ${
                card.trend === 'up' ? 'text-green-600' : 'text-red-600'
              }`}>
                {card.trend === 'up' ? (
                  <TrendingUp className="h-4 w-4" />
                ) : (
                  <TrendingDown className="h-4 w-4" />
                )}
                <span className="text-sm font-medium">{card.change}</span>
              </div>
            </div>
            <div className="mt-4">
              <h3 className="text-2xl font-bold text-gray-900">{card.value}</h3>
              <p className="text-gray-600 text-sm">{card.title}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Charts Row */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Code Commits Chart */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">代码提交趋势</h3>
          <div className="h-64 flex items-end justify-between space-x-2">
            {[65, 78, 90, 45, 88, 73, 95, 82, 67, 91, 84, 76, 89, 72].map((height, index) => (
              <div key={index} className="flex-1 flex flex-col items-center">
                <div 
                  className="w-full bg-gradient-to-t from-blue-500 to-blue-400 rounded-t-sm transition-all duration-300 hover:from-blue-600 hover:to-blue-500"
                  style={{ height: `${height}%` }}
                ></div>
                <span className="text-xs text-gray-500 mt-2">{index + 1}日</span>
              </div>
            ))}
          </div>
        </div>

        {/* Team Workload */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">团队工作负载</h3>
          <div className="space-y-4">
            {[
              { name: '前端团队', load: 85, members: 12 },
              { name: '后端团队', load: 72, members: 8 },
              { name: '测试团队', load: 68, members: 6 },
              { name: 'DevOps团队', load: 91, members: 4 },
              { name: 'UI/UX团队', load: 56, members: 5 }
            ].map((team, index) => (
              <div key={index} className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <span className="font-medium text-gray-900">{team.name}</span>
                  <span className="text-sm text-gray-500">({team.members}人)</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-32 bg-gray-200 rounded-full h-2">
                    <div 
                      className={`h-2 rounded-full ${
                        team.load > 80 ? 'bg-red-500' : 
                        team.load > 60 ? 'bg-yellow-500' : 'bg-green-500'
                      }`}
                      style={{ width: `${team.load}%` }}
                    ></div>
                  </div>
                  <span className="text-sm font-medium text-gray-900">{team.load}%</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Row */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Risk Alerts */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">风险预警</h3>
          <div className="space-y-3">
            {[
              { type: 'budget', project: '电商平台重构', risk: '预算超支15%', level: 'high' },
              { type: 'delay', project: '移动端优化', risk: '预计延期3天', level: 'medium' },
              { type: 'quality', project: '数据中台', risk: 'Bug率偏高', level: 'low' }
            ].map((alert, index) => (
              <div key={index} className={`p-3 rounded-lg border-l-4 ${
                alert.level === 'high' ? 'border-red-500 bg-red-50' :
                alert.level === 'medium' ? 'border-yellow-500 bg-yellow-50' :
                'border-blue-500 bg-blue-50'
              }`}>
                <div className="flex items-start justify-between">
                  <div>
                    <p className="font-medium text-gray-900">{alert.project}</p>
                    <p className="text-sm text-gray-600">{alert.risk}</p>
                  </div>
                  {alert.type === 'budget' && <DollarSign className="h-5 w-5 text-red-500" />}
                  {alert.type === 'delay' && <Clock className="h-5 w-5 text-yellow-500" />}
                  {alert.type === 'quality' && <AlertTriangle className="h-5 w-5 text-blue-500" />}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Application Health */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">应用健康状况</h3>
          <div className="space-y-4">
            {[
              { name: '用户中心', status: 'healthy', uptime: '99.9%', errors: 2 },
              { name: '订单系统', status: 'warning', uptime: '98.5%', errors: 12 },
              { name: '支付网关', status: 'healthy', uptime: '99.8%', errors: 1 },
              { name: '商品管理', status: 'error', uptime: '95.2%', errors: 45 }
            ].map((app, index) => (
              <div key={index} className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className={`w-3 h-3 rounded-full ${
                    app.status === 'healthy' ? 'bg-green-500' :
                    app.status === 'warning' ? 'bg-yellow-500' : 'bg-red-500'
                  }`}></div>
                  <span className="font-medium text-gray-900">{app.name}</span>
                </div>
                <div className="text-right">
                  <div className="text-sm font-medium text-gray-900">{app.uptime}</div>
                  <div className="text-xs text-gray-500">{app.errors} 错误</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Quick Stats */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">快速统计</h3>
          <div className="grid grid-cols-2 gap-4">
            <div className="text-center p-4 bg-gradient-to-r from-purple-50 to-pink-50 rounded-lg">
              <div className="text-2xl font-bold text-purple-600">1,247</div>
              <div className="text-sm text-gray-600">本周提交</div>
            </div>
            <div className="text-center p-4 bg-gradient-to-r from-green-50 to-emerald-50 rounded-lg">
              <div className="text-2xl font-bold text-green-600">89%</div>
              <div className="text-sm text-gray-600">需求完成</div>
            </div>
            <div className="text-center p-4 bg-gradient-to-r from-blue-50 to-cyan-50 rounded-lg">
              <div className="text-2xl font-bold text-blue-600">2.1M</div>
              <div className="text-sm text-gray-600">API调用</div>
            </div>
            <div className="text-center p-4 bg-gradient-to-r from-orange-50 to-red-50 rounded-lg">
              <div className="text-2xl font-bold text-orange-600">156h</div>
              <div className="text-sm text-gray-600">开发耗时</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}