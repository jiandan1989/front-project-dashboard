import React from 'react';
import { 
  BarChart3, 
  PieChart, 
  TrendingUp,
  TrendingDown,
  Award,
  AlertTriangle,
  CheckCircle,
  Target,
  Users,
  Code,
  Bug,
  Clock
} from 'lucide-react';

export function DataAnalytics() {
  const qualityMetrics = [
    {
      title: '代码质量评分',
      value: '8.7',
      maxValue: '10',
      change: '+0.3',
      trend: 'up',
      color: 'green',
      icon: Award
    },
    {
      title: 'Bug密度',
      value: '0.8',
      unit: '/KLOC',
      change: '-0.2',
      trend: 'up',
      color: 'blue',
      icon: Bug
    },
    {
      title: '测试覆盖率',
      value: '85.2%',
      change: '+4.5%',
      trend: 'up',
      color: 'purple',
      icon: CheckCircle
    },
    {
      title: '修复时间',
      value: '2.3',
      unit: '天',
      change: '-0.8天',
      trend: 'up',
      color: 'orange',
      icon: Clock
    }
  ];

  const riskAnalysis = [
    { 
      category: '延期风险',
      projects: [
        { name: '电商平台重构', probability: 65, impact: 'high', days: 8 },
        { name: '移动端优化', probability: 30, impact: 'medium', days: 3 }
      ]
    },
    {
      category: '预算风险', 
      projects: [
        { name: '数据中台建设', probability: 45, impact: 'high', amount: '¥320,000' },
        { name: '电商平台重构', probability: 78, impact: 'medium', amount: '¥180,000' }
      ]
    },
    {
      category: '质量风险',
      projects: [
        { name: '移动端优化', probability: 25, impact: 'low', issue: 'UI测试不足' },
        { name: '商品推荐引擎', probability: 55, impact: 'high', issue: '性能测试缺失' }
      ]
    }
  ];

  const teamEfficiency = [
    { name: '前端团队', productivity: 87, quality: 92, satisfaction: 85 },
    { name: '后端团队', productivity: 82, quality: 88, satisfaction: 90 },
    { name: '测试团队', productivity: 78, quality: 95, satisfaction: 82 },
    { name: 'DevOps团队', productivity: 91, quality: 89, satisfaction: 88 },
    { name: 'UI/UX团队', productivity: 74, quality: 91, satisfaction: 93 }
  ];

  const technologyStack = [
    { name: 'React', usage: 45, satisfaction: 92, trend: 'up' },
    { name: 'Vue.js', usage: 35, satisfaction: 88, trend: 'stable' },
    { name: 'Angular', usage: 20, satisfaction: 76, trend: 'down' },
    { name: 'Node.js', usage: 60, satisfaction: 85, trend: 'up' },
    { name: 'Spring Boot', usage: 40, satisfaction: 89, trend: 'stable' }
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold text-gray-900">数据分析</h2>
        <div className="flex space-x-3">
          <button className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors">
            生成报告
          </button>
          <select className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500">
            <option>本月数据</option>
            <option>本季度</option>
            <option>本年度</option>
          </select>
        </div>
      </div>

      {/* Quality Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {qualityMetrics.map((metric, index) => (
          <div key={index} className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
            <div className="flex items-center justify-between mb-4">
              <div className={`w-12 h-12 bg-${metric.color}-100 rounded-lg flex items-center justify-center`}>
                <metric.icon className={`h-6 w-6 text-${metric.color}-600`} />
              </div>
              <div className={`flex items-center space-x-1 ${
                metric.trend === 'up' ? 'text-green-600' : 'text-red-600'
              }`}>
                {metric.trend === 'up' ? (
                  <TrendingUp className="h-4 w-4" />
                ) : (
                  <TrendingDown className="h-4 w-4" />
                )}
                <span className="text-sm font-medium">{metric.change}</span>
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-900">
                {metric.value}
                {metric.maxValue && <span className="text-gray-400">/{metric.maxValue}</span>}
                {metric.unit && <span className="text-sm text-gray-500 ml-1">{metric.unit}</span>}
              </h3>
              <p className="text-gray-600 text-sm">{metric.title}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Risk Analysis */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-6">风险分析统计</h3>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {riskAnalysis.map((category, index) => (
            <div key={index} className="border border-gray-200 rounded-lg p-4">
              <h4 className="font-medium text-gray-900 mb-4 flex items-center">
                <AlertTriangle className="h-5 w-5 mr-2 text-yellow-600" />
                {category.category}
              </h4>
              <div className="space-y-3">
                {category.projects.map((project, projectIndex) => (
                  <div key={projectIndex} className={`p-3 rounded border-l-4 ${
                    project.impact === 'high' ? 'border-red-500 bg-red-50' :
                    project.impact === 'medium' ? 'border-yellow-500 bg-yellow-50' :
                    'border-blue-500 bg-blue-50'
                  }`}>
                    <div className="flex items-start justify-between mb-2">
                      <span className="font-medium text-gray-900 text-sm">{project.name}</span>
                      <span className={`text-xs px-2 py-1 rounded ${
                        project.impact === 'high' ? 'bg-red-100 text-red-800' :
                        project.impact === 'medium' ? 'bg-yellow-100 text-yellow-800' :
                        'bg-blue-100 text-blue-800'
                      }`}>
                        {project.impact === 'high' ? '高风险' : 
                         project.impact === 'medium' ? '中风险' : '低风险'}
                      </span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-600">概率</span>
                      <span className="font-medium">{project.probability}%</span>
                    </div>
                    {project.days && (
                      <div className="text-xs text-gray-600 mt-1">
                        预计延期: {project.days}天
                      </div>
                    )}
                    {project.amount && (
                      <div className="text-xs text-gray-600 mt-1">
                        预计超支: {project.amount}
                      </div>
                    )}
                    {project.issue && (
                      <div className="text-xs text-gray-600 mt-1">
                        风险点: {project.issue}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Team Efficiency Analysis */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-6">团队效率分析</h3>
          <div className="space-y-4">
            {teamEfficiency.map((team, index) => (
              <div key={index} className="border border-gray-200 rounded-lg p-4">
                <h4 className="font-medium text-gray-900 mb-3">{team.name}</h4>
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600">生产效率</span>
                    <div className="flex items-center space-x-2">
                      <div className="w-20 bg-gray-200 rounded-full h-2">
                        <div 
                          className="h-2 bg-blue-500 rounded-full"
                          style={{ width: `${team.productivity}%` }}
                        ></div>
                      </div>
                      <span className="text-sm font-medium">{team.productivity}%</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600">质量指标</span>
                    <div className="flex items-center space-x-2">
                      <div className="w-20 bg-gray-200 rounded-full h-2">
                        <div 
                          className="h-2 bg-green-500 rounded-full"
                          style={{ width: `${team.quality}%` }}
                        ></div>
                      </div>
                      <span className="text-sm font-medium">{team.quality}%</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600">满意度</span>
                    <div className="flex items-center space-x-2">
                      <div className="w-20 bg-gray-200 rounded-full h-2">
                        <div 
                          className="h-2 bg-purple-500 rounded-full"
                          style={{ width: `${team.satisfaction}%` }}
                        ></div>
                      </div>
                      <span className="text-sm font-medium">{team.satisfaction}%</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-6">技术栈使用统计</h3>
          <div className="space-y-4">
            {technologyStack.map((tech, index) => (
              <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                  <span className="font-medium text-gray-900">{tech.name}</span>
                  <div className={`flex items-center space-x-1 ${
                    tech.trend === 'up' ? 'text-green-600' :
                    tech.trend === 'down' ? 'text-red-600' : 'text-gray-600'
                  }`}>
                    {tech.trend === 'up' ? (
                      <TrendingUp className="h-4 w-4" />
                    ) : tech.trend === 'down' ? (
                      <TrendingDown className="h-4 w-4" />
                    ) : (
                      <div className="w-4 h-4 flex items-center justify-center">
                        <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
                      </div>
                    )}
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-sm font-medium text-gray-900">{tech.usage}% 使用率</div>
                  <div className="text-xs text-gray-600">{tech.satisfaction}% 满意度</div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-6 p-4 bg-blue-50 rounded-lg">
            <h4 className="font-medium text-blue-900 mb-2">技术趋势洞察</h4>
            <ul className="text-sm text-blue-800 space-y-1">
              <li>• React生态系统使用率持续上升，团队满意度高</li>
              <li>• Node.js在后端服务中应用广泛，性能表现良好</li>
              <li>• 建议逐步迁移Angular项目至React/Vue</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Monthly Trend Analysis */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-6">月度趋势分析</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="text-center">
            <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-lg p-6 mb-3">
              <div className="text-3xl font-bold text-green-600 mb-2">+12%</div>
              <div className="text-sm text-gray-600">开发效率提升</div>
            </div>
            <p className="text-xs text-gray-500">相比上月</p>
          </div>
          <div className="text-center">
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg p-6 mb-3">
              <div className="text-3xl font-bold text-blue-600 mb-2">-8%</div>
              <div className="text-sm text-gray-600">Bug数量下降</div>
            </div>
            <p className="text-xs text-gray-500">相比上月</p>
          </div>
          <div className="text-center">
            <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-lg p-6 mb-3">
              <div className="text-3xl font-bold text-purple-600 mb-2">+5%</div>
              <div className="text-sm text-gray-600">交付速度提升</div>
            </div>
            <p className="text-xs text-gray-500">相比上月</p>
          </div>
        </div>
      </div>
    </div>
  );
}