import React, { useState } from 'react';
import { Layout } from './components/Layout';
import { Dashboard } from './components/Dashboard';
import { TeamManagement } from './components/TeamManagement';
import { ProjectManagement } from './components/ProjectManagement';
import { ApplicationMonitoring } from './components/ApplicationMonitoring';
import { DataAnalytics } from './components/DataAnalytics';

function App() {
  const [activeTab, setActiveTab] = useState('dashboard');

  const renderContent = () => {
    switch (activeTab) {
      case 'dashboard':
        return <Dashboard />;
      case 'team':
        return <TeamManagement />;
      case 'projects':
        return <ProjectManagement />;
      case 'monitoring':
        return <ApplicationMonitoring />;
      case 'analytics':
        return <DataAnalytics />;
      default:
        return <Dashboard />;
    }
  };

  return (
    <Layout activeTab={activeTab} setActiveTab={setActiveTab}>
      {renderContent()}
    </Layout>
  );
}

export default App;