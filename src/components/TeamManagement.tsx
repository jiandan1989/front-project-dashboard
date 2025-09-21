import React from 'react';
import { 
  User, 
  Calendar, 
  Clock, 
  GitCommit, 
  Target,
  Award,
  TrendingUp,
  AlertCircle
} from 'lucide-react';

export function TeamManagement() {
  const teamMembers = [
    { 
      name: '张三', 
      role: '高级前端工程师', 
      avatar: '👨‍💻',
      workload: 85,
      commits: 127,
      completedTasks: 18,
      efficiency: 'high',
      currentProject: '电商平台重构'
    },
    { 
      name: '李四', 
      role: '后端架构师', 
      avatar: '👩‍💻',
      workload: 92,
      commits: 89,
      completedTasks: 12,
      efficiency: 'high',
      currentProject: '微服务改造'
    },
    { 
      name: '王五', 
      role: 'UI/UX设计师', 
      avatar: '🎨',
      workload: 67,
      commits: 34,
      completedTasks: 25,
      efficiency: 'medium',
      currentProject: '设计系统升级'
    },
    { 
      name: '赵六', 
      role: '测试工程师', 
      avatar: '🔍',
      workload: 78,
      commits: 45,
      completedTasks: 22,
      efficiency: 'high',
      currentProject: '自动化测试'
    }
  ];

  const ganttData = [
    { task: '需求分析', start: 1, duration: 3, assignee: '产品经理', status: 'completed' },
    { task: '原型设计', start: 2, duration: 4, assignee: 'UI设计师', status: 'completed' },
    { task: '前端开发', start: 4, duration: 8, assignee: '前端团队', status: 'in-progress' },
    { task: '后端开发', start: 5, duration: 6, assignee: '后端团队', status: 'in-progress' },
    { task: '接口联调', start: 10, duration: 3, assignee: '全栈团队', status: 'pending' },
    { task: '测试验收', start: 12, duration: 4, assignee: '测试团队', status: 'pending' }
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold text-gray-900">团队管理</h2>
        <div className="flex space-x-3">
          <button className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors">
            添加成员
          </button>
          <button className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors">
            导出数据
          </button>
        </div>
      </div>

      {/* Team Overview Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {teamMembers.map((member, index) => (
          <div key={index} className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 hover:shadow-md transition-shadow">
            <div className="flex items-center space-x-3 mb-4">
              <div className="text-3xl">{member.avatar}</div>
              <div>
                <h3 className="font-semibold text-gray-900">{member.name}</h3>
                <p className="text-sm text-gray-600">{member.role}</p>
              </div>
            </div>
            
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-600">工作负载</span>
                <div className="flex items-center space-x-2">
                  <div className="w-16 bg-gray-200 rounded-full h-2">
                    <div 
                      className={`h-2 rounded-full ${
                        member.workload > 85 ? 'bg-red-500' : 
                        member.workload > 70 ? 'bg-yellow-500' : 'bg-green-500'
                      }`}
                      style={{ width: `${member.workload}%` }}
                    ></div>
                  </div>
                  <span className="text-sm font-medium">{member.workload}%</span>
                </div>
              </div>
              
              <div className="flex items-center justify-between text-sm">
                <span className="text-gray-600 flex items-center">
                  <GitCommit className="h-4 w-4 mr-1" />
                  提交
                </span>
                <span className="font-medium">{member.commits}</span>
              </div>
              
              <div className="flex items-center justify-between text-sm">
                <span className="text-gray-600 flex items-center">
                  <Target className="h-4 w-4 mr-1" />
                  完成
                </span>
                <span className="font-medium">{member.completedTasks}</span>
              </div>
              
              <div className="pt-2 border-t border-gray-100">
                <p className="text-xs text-gray-500">当前项目</p>
                <p className="text-sm font-medium text-gray-900">{member.currentProject}</p>
              </div>
              
              <div className={`flex items-center space-x-1 ${
                member.efficiency === 'high' ? 'text-green-600' : 
                member.efficiency === 'medium' ? 'text-yellow-600' : 'text-red-600'
              }`}>
                {member.efficiency === 'high' ? (
                  <TrendingUp className="h-4 w-4" />
                ) : (
                  <AlertCircle className="h-4 w-4" />
                )}
                <span className="text-sm font-medium">
                  {member.efficiency === 'high' ? '高效率' : 
                   member.efficiency === 'medium' ? '中效率' : '需关注'}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Gantt Chart */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-6">项目甘特图</h3>
        <div className="overflow-x-auto">
          <div className="min-w-full">
            <div className="flex mb-4">
              <div className="w-40 text-sm font-medium text-gray-600">任务</div>
              <div className="w-32 text-sm font-medium text-gray-600">负责人</div>
              <div className="flex-1 grid grid-cols-16 gap-1">
                {Array.from({ length: 16 }, (_, i) => (
                  <div key={i} className="text-xs text-gray-500 text-center">
                    {i + 1}周
                  </div>
                ))}
              </div>
            </div>
            
            {ganttData.map((item, index) => (
              <div key={index} className="flex items-center mb-3">
                <div className="w-40 text-sm text-gray-900">{item.task}</div>
                <div className="w-32 text-sm text-gray-600">{item.assignee}</div>
                <div className="flex-1 grid grid-cols-16 gap-1 h-8">
                  {Array.from({ length: 16 }, (_, i) => {
                    const isInRange = i >= item.start - 1 && i < item.start + item.duration - 1;
                    return (
                      <div
                        key={i}
                        className={`h-6 rounded ${
                          isInRange
                            ? item.status === 'completed'
                              ? 'bg-green-500'
                              : item.status === 'in-progress'
                              ? 'bg-blue-500'
                              : 'bg-gray-300'
                            : 'bg-gray-100'
                        }`}
                      ></div>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Resource Allocation */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">工种资源分配</h3>
          <div className="space-y-4">
            {[
              { role: '前端开发', count: 8, percentage: 35, color: 'blue' },
              { role: '后端开发', count: 6, percentage: 26, color: 'green' },
              { role: '测试工程师', count: 4, percentage: 17, color: 'purple' },
              { role: '产品经理', count: 3, percentage: 13, color: 'orange' },
              { role: 'UI/UX设计', count: 2, percentage: 9, color: 'pink' }
            ].map((role, index) => (
              <div key={index} className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className={`w-4 h-4 bg-${role.color}-500 rounded`}></div>
                  <span className="font-medium text-gray-900">{role.role}</span>
                  <span className="text-sm text-gray-500">({role.count}人)</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-24 bg-gray-200 rounded-full h-2">
                    <div 
                      className={`h-2 bg-${role.color}-500 rounded-full`}
                      style={{ width: `${role.percentage}%` }}
                    ></div>
                  </div>
                  <span className="text-sm font-medium text-gray-900">{role.percentage}%</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">人员流动统计</h3>
          <div className="grid grid-cols-2 gap-4 mb-6">
            <div className="text-center p-4 bg-green-50 rounded-lg">
              <div className="text-2xl font-bold text-green-600">+5</div>
              <div className="text-sm text-gray-600">本月新增</div>
            </div>
            <div className="text-center p-4 bg-red-50 rounded-lg">
              <div className="text-2xl font-bold text-red-600">-2</div>
              <div className="text-sm text-gray-600">本月离职</div>
            </div>
          </div>
          
          <div className="space-y-3">
            <h4 className="font-medium text-gray-900">项目投入频率</h4>
            {[
              { project: '电商平台重构', frequency: '12人次/周', trend: 'up' },
              { project: '移动端优化', frequency: '8人次/周', trend: 'stable' },
              { project: '数据中台建设', frequency: '15人次/周', trend: 'up' }
            ].map((proj, index) => (
              <div key={index} className="flex items-center justify-between text-sm">
                <span className="text-gray-900">{proj.project}</span>
                <div className="flex items-center space-x-2">
                  <span className="text-gray-600">{proj.frequency}</span>
                  {proj.trend === 'up' ? (
                    <TrendingUp className="h-4 w-4 text-green-500" />
                  ) : (
                    <div className="h-4 w-4 bg-gray-400 rounded-full"></div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}