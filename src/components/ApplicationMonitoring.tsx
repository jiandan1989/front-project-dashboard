import React from 'react';
import { 
  Activity, 
  AlertCircle, 
  CheckCircle, 
  TrendingUp,
  TrendingDown,
  Eye,
  Zap,
  Globe,
  Server,
  Database,
  Wifi
} from 'lucide-react';

export function ApplicationMonitoring() {
  const applications = [
    {
      name: '用户中心服务',
      status: 'healthy',
      uptime: '99.95%',
      responseTime: '125ms',
      requests: '2.3M',
      errorRate: '0.05%',
      alerts: 0,
      trend: 'stable'
    },
    {
      name: '订单管理系统',
      status: 'warning',
      uptime: '98.2%',
      responseTime: '280ms',
      requests: '1.8M',
      errorRate: '1.8%',
      alerts: 3,
      trend: 'down'
    },
    {
      name: '支付网关',
      status: 'healthy',
      uptime: '99.8%',
      responseTime: '95ms',
      requests: '890K',
      errorRate: '0.2%',
      alerts: 1,
      trend: 'up'
    },
    {
      name: '商品推荐引擎',
      status: 'critical',
      uptime: '95.1%',
      responseTime: '450ms',
      requests: '3.2M',
      errorRate: '4.9%',
      alerts: 8,
      trend: 'down'
    }
  ];

  const trafficData = [
    { time: '00:00', visits: 1200, api: 8500, users: 450 },
    { time: '04:00', visits: 800, api: 5200, users: 280 },
    { time: '08:00', visits: 3200, api: 15600, users: 1200 },
    { time: '12:00', visits: 4500, api: 22400, users: 1800 },
    { time: '16:00', visits: 3800, api: 18900, users: 1500 },
    { time: '20:00', visits: 2800, api: 14200, users: 1100 }
  ];

  const healthMetrics = [
    { 
      title: '服务可用性', 
      value: '99.2%', 
      change: '+0.3%',
      trend: 'up',
      color: 'green',
      icon: CheckCircle 
    },
    { 
      title: '平均响应时间', 
      value: '165ms', 
      change: '-12ms',
      trend: 'up',
      color: 'blue',
      icon: Zap 
    },
    { 
      title: '错误率', 
      value: '1.8%', 
      change: '+0.4%',
      trend: 'down',
      color: 'red',
      icon: AlertCircle 
    },
    { 
      title: '活跃告警', 
      value: '12', 
      change: '-3',
      trend: 'up',
      color: 'orange',
      icon: Activity 
    }
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold text-gray-900">应用监控</h2>
        <div className="flex space-x-3">
          <button className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors">
            告警设置
          </button>
          <select className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500">
            <option>实时监控</option>
            <option>最近1小时</option>
            <option>最近24小时</option>
          </select>
        </div>
      </div>

      {/* Health Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {healthMetrics.map((metric, index) => (
          <div key={index} className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
            <div className="flex items-center justify-between">
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
            <div className="mt-4">
              <h3 className="text-2xl font-bold text-gray-900">{metric.value}</h3>
              <p className="text-gray-600 text-sm">{metric.title}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Applications Status */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-6">应用健康状况</h3>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {applications.map((app, index) => (
            <div key={index} className={`rounded-lg p-4 border-l-4 ${
              app.status === 'healthy' ? 'border-green-500 bg-green-50' :
              app.status === 'warning' ? 'border-yellow-500 bg-yellow-50' :
              'border-red-500 bg-red-50'
            }`}>
              <div className="flex items-start justify-between mb-3">
                <div>
                  <h4 className="font-semibold text-gray-900">{app.name}</h4>
                  <div className="flex items-center space-x-2 mt-1">
                    <div className={`w-2 h-2 rounded-full ${
                      app.status === 'healthy' ? 'bg-green-500' :
                      app.status === 'warning' ? 'bg-yellow-500' : 'bg-red-500'
                    }`}></div>
                    <span className="text-sm text-gray-600">
                      {app.status === 'healthy' ? '健康' :
                       app.status === 'warning' ? '警告' : '异常'}
                    </span>
                  </div>
                </div>
                {app.alerts > 0 && (
                  <div className="bg-red-100 text-red-800 px-2 py-1 rounded-full text-xs font-medium">
                    {app.alerts} 告警
                  </div>
                )}
              </div>
              
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <span className="text-gray-600">可用性</span>
                  <div className="font-medium text-gray-900">{app.uptime}</div>
                </div>
                <div>
                  <span className="text-gray-600">响应时间</span>
                  <div className="font-medium text-gray-900">{app.responseTime}</div>
                </div>
                <div>
                  <span className="text-gray-600">请求量</span>
                  <div className="font-medium text-gray-900">{app.requests}</div>
                </div>
                <div>
                  <span className="text-gray-600">错误率</span>
                  <div className={`font-medium ${
                    parseFloat(app.errorRate) > 2 ? 'text-red-600' : 'text-gray-900'
                  }`}>
                    {app.errorRate}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Traffic Analytics */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">访问量趋势</h3>
          <div className="h-64 flex items-end justify-between space-x-2">
            {trafficData.map((data, index) => (
              <div key={index} className="flex-1 flex flex-col items-center">
                <div className="w-full space-y-1 flex flex-col items-end">
                  <div 
                    className="w-full bg-gradient-to-t from-blue-500 to-blue-400 rounded-t-sm"
                    style={{ height: `${(data.visits / 5000) * 100}%` }}
                    title={`访问量: ${data.visits}`}
                  ></div>
                  <div 
                    className="w-full bg-gradient-to-t from-green-500 to-green-400 rounded-t-sm"
                    style={{ height: `${(data.api / 25000) * 100}%` }}
                    title={`API调用: ${data.api}`}
                  ></div>
                  <div 
                    className="w-full bg-gradient-to-t from-purple-500 to-purple-400 rounded-t-sm"
                    style={{ height: `${(data.users / 2000) * 100}%` }}
                    title={`活跃用户: ${data.users}`}
                  ></div>
                </div>
                <span className="text-xs text-gray-500 mt-2">{data.time}</span>
              </div>
            ))}
          </div>
          <div className="flex justify-center space-x-6 mt-4 text-sm">
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-blue-500 rounded"></div>
              <span>页面访问</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-green-500 rounded"></div>
              <span>API调用</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-purple-500 rounded"></div>
              <span>活跃用户</span>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">实时监控指标</h3>
          <div className="space-y-4">
            <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
              <div className="flex items-center space-x-3">
                <Server className="h-5 w-5 text-gray-600" />
                <span className="font-medium text-gray-900">CPU使用率</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-24 bg-gray-200 rounded-full h-2">
                  <div className="h-2 bg-blue-500 rounded-full" style={{ width: '67%' }}></div>
                </div>
                <span className="text-sm font-medium text-gray-900">67%</span>
              </div>
            </div>
            
            <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
              <div className="flex items-center space-x-3">
                <Database className="h-5 w-5 text-gray-600" />
                <span className="font-medium text-gray-900">内存使用率</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-24 bg-gray-200 rounded-full h-2">
                  <div className="h-2 bg-green-500 rounded-full" style={{ width: '43%' }}></div>
                </div>
                <span className="text-sm font-medium text-gray-900">43%</span>
              </div>
            </div>
            
            <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
              <div className="flex items-center space-x-3">
                <Wifi className="h-5 w-5 text-gray-600" />
                <span className="font-medium text-gray-900">网络IO</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-24 bg-gray-200 rounded-full h-2">
                  <div className="h-2 bg-purple-500 rounded-full" style={{ width: '28%' }}></div>
                </div>
                <span className="text-sm font-medium text-gray-900">28%</span>
              </div>
            </div>
            
            <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
              <div className="flex items-center space-x-3">
                <Globe className="h-5 w-5 text-gray-600" />
                <span className="font-medium text-gray-900">磁盘使用率</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-24 bg-gray-200 rounded-full h-2">
                  <div className="h-2 bg-orange-500 rounded-full" style={{ width: '76%' }}></div>
                </div>
                <span className="text-sm font-medium text-gray-900">76%</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Alert Summary */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">告警汇总</h3>
        <div className="space-y-3">
          {[
            { 
              level: 'critical', 
              message: '商品推荐引擎响应时间超过阈值', 
              time: '2分钟前',
              app: '推荐引擎' 
            },
            { 
              level: 'warning', 
              message: '订单系统错误率持续上升', 
              time: '5分钟前',
              app: '订单系统' 
            },
            { 
              level: 'info', 
              message: '支付网关流量峰值检测', 
              time: '8分钟前',
              app: '支付网关' 
            }
          ].map((alert, index) => (
            <div key={index} className={`p-4 rounded-lg border-l-4 ${
              alert.level === 'critical' ? 'border-red-500 bg-red-50' :
              alert.level === 'warning' ? 'border-yellow-500 bg-yellow-50' :
              'border-blue-500 bg-blue-50'
            }`}>
              <div className="flex items-start justify-between">
                <div>
                  <p className="font-medium text-gray-900">{alert.message}</p>
                  <p className="text-sm text-gray-600">应用: {alert.app}</p>
                </div>
                <div className="text-sm text-gray-500">{alert.time}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}