import React, { useState } from 'react';
import { Settings, Cpu, Zap, Shield, Globe, Database, Save, RotateCcw } from 'lucide-react';

export default function AISettingsApp() {
  const [settings, setSettings] = useState({
    modelType: 'gpt-4',
    deploymentRegion: 'us-east-1',
    maxTokens: 2048,
    temperature: 0.7,
    topP: 0.9,
    autoScale: true,
    maxInstances: 10,
    minInstances: 1,
    rateLimitPerMin: 100,
    enableLogging: true,
    enableCache: true,
    securityLevel: 'high',
    apiVersion: 'v1',
  });

  const [saved, setSaved] = useState(false);

  const handleChange = (key, value) => {
    setSettings(prev => ({ ...prev, [key]: value }));
    setSaved(false);
  };

  const handleSave = () => {
    console.log('Saving settings:', settings);
    setSaved(true);
    setTimeout(() => setSaved(false), 3000);
  };

  const handleReset = () => {
    setSettings({
      modelType: 'gpt-4',
      deploymentRegion: 'us-east-1',
      maxTokens: 2048,
      temperature: 0.7,
      topP: 0.9,
      autoScale: true,
      maxInstances: 10,
      minInstances: 1,
      rateLimitPerMin: 100,
      enableLogging: true,
      enableCache: true,
      securityLevel: 'high',
      apiVersion: 'v1',
    });
    setSaved(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 p-6">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 mb-6 border border-white/20">
          <div className="flex items-center gap-3">
            <Settings className="w-8 h-8 text-purple-400" />
            <div>
              <h1 className="text-3xl font-bold text-white">AI Deployment Settings</h1>
              <p className="text-purple-200">Configure your AI model deployment parameters</p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Model Configuration */}
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20">
            <div className="flex items-center gap-2 mb-4">
              <Cpu className="w-6 h-6 text-blue-400" />
              <h2 className="text-xl font-semibold text-white">Model Configuration</h2>
            </div>
            
            <div className="space-y-4">
              <div>
                <label className="block text-purple-200 mb-2">Model Type</label>
                <select 
                  value={settings.modelType}
                  onChange={(e) => handleChange('modelType', e.target.value)}
                  className="w-full bg-white/5 border border-white/20 rounded-lg px-4 py-2 text-white"
                >
                  <option value="gpt-4">GPT-4</option>
                  <option value="gpt-3.5-turbo">GPT-3.5 Turbo</option>
                  <option value="claude-3">Claude 3</option>
                  <option value="llama-2">Llama 2</option>
                </select>
              </div>

              <div>
                <label className="block text-purple-200 mb-2">Max Tokens: {settings.maxTokens}</label>
                <input 
                  type="range"
                  min="256"
                  max="8192"
                  step="256"
                  value={settings.maxTokens}
                  onChange={(e) => handleChange('maxTokens', parseInt(e.target.value))}
                  className="w-full"
                />
              </div>

              <div>
                <label className="block text-purple-200 mb-2">Temperature: {settings.temperature}</label>
                <input 
                  type="range"
                  min="0"
                  max="2"
                  step="0.1"
                  value={settings.temperature}
                  onChange={(e) => handleChange('temperature', parseFloat(e.target.value))}
                  className="w-full"
                />
              </div>

              <div>
                <label className="block text-purple-200 mb-2">Top P: {settings.topP}</label>
                <input 
                  type="range"
                  min="0"
                  max="1"
                  step="0.1"
                  value={settings.topP}
                  onChange={(e) => handleChange('topP', parseFloat(e.target.value))}
                  className="w-full"
                />
              </div>
            </div>
          </div>

          {/* Deployment Settings */}
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20">
            <div className="flex items-center gap-2 mb-4">
              <Globe className="w-6 h-6 text-green-400" />
              <h2 className="text-xl font-semibold text-white">Deployment Settings</h2>
            </div>
            
            <div className="space-y-4">
              <div>
                <label className="block text-purple-200 mb-2">Region</label>
                <select 
                  value={settings.deploymentRegion}
                  onChange={(e) => handleChange('deploymentRegion', e.target.value)}
                  className="w-full bg-white/5 border border-white/20 rounded-lg px-4 py-2 text-white"
                >
                  <option value="us-east-1">US East (N. Virginia)</option>
                  <option value="us-west-2">US West (Oregon)</option>
                  <option value="eu-west-1">EU (Ireland)</option>
                  <option value="ap-southeast-1">Asia Pacific (Singapore)</option>
                </select>
              </div>

              <div>
                <label className="block text-purple-200 mb-2">API Version</label>
                <select 
                  value={settings.apiVersion}
                  onChange={(e) => handleChange('apiVersion', e.target.value)}
                  className="w-full bg-white/5 border border-white/20 rounded-lg px-4 py-2 text-white"
                >
                  <option value="v1">v1</option>
                  <option value="v2">v2 (Beta)</option>
                  <option value="v3">v3 (Alpha)</option>
                </select>
              </div>

              <div className="flex items-center justify-between">
                <label className="text-purple-200">Auto-scaling</label>
                <button 
                  onClick={() => handleChange('autoScale', !settings.autoScale)}
                  className={`w-12 h-6 rounded-full transition ${settings.autoScale ? 'bg-green-500' : 'bg-gray-600'}`}
                >
                  <div className={`w-5 h-5 bg-white rounded-full transition transform ${settings.autoScale ? 'translate-x-6' : 'translate-x-1'}`} />
                </button>
              </div>

              <div>
                <label className="block text-purple-200 mb-2">Min Instances: {settings.minInstances}</label>
                <input 
                  type="number"
                  min="1"
                  max="5"
                  value={settings.minInstances}
                  onChange={(e) => handleChange('minInstances', parseInt(e.target.value))}
                  className="w-full bg-white/5 border border-white/20 rounded-lg px-4 py-2 text-white"
                />
              </div>

              <div>
                <label className="block text-purple-200 mb-2">Max Instances: {settings.maxInstances}</label>
                <input 
                  type="number"
                  min="1"
                  max="50"
                  value={settings.maxInstances}
                  onChange={(e) => handleChange('maxInstances', parseInt(e.target.value))}
                  className="w-full bg-white/5 border border-white/20 rounded-lg px-4 py-2 text-white"
                />
              </div>
            </div>
          </div>

          {/* Performance & Limits */}
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20">
            <div className="flex items-center gap-2 mb-4">
              <Zap className="w-6 h-6 text-yellow-400" />
              <h2 className="text-xl font-semibold text-white">Performance & Limits</h2>
            </div>
            
            <div className="space-y-4">
              <div>
                <label className="block text-purple-200 mb-2">Rate Limit (per minute): {settings.rateLimitPerMin}</label>
                <input 
                  type="number"
                  min="10"
                  max="1000"
                  step="10"
                  value={settings.rateLimitPerMin}
                  onChange={(e) => handleChange('rateLimitPerMin', parseInt(e.target.value))}
                  className="w-full bg-white/5 border border-white/20 rounded-lg px-4 py-2 text-white"
                />
              </div>

              <div className="flex items-center justify-between">
                <label className="text-purple-200">Enable Caching</label>
                <button 
                  onClick={() => handleChange('enableCache', !settings.enableCache)}
                  className={`w-12 h-6 rounded-full transition ${settings.enableCache ? 'bg-green-500' : 'bg-gray-600'}`}
                >
                  <div className={`w-5 h-5 bg-white rounded-full transition transform ${settings.enableCache ? 'translate-x-6' : 'translate-x-1'}`} />
                </button>
              </div>

              <div className="flex items-center justify-between">
                <label className="text-purple-200">Enable Logging</label>
                <button 
                  onClick={() => handleChange('enableLogging', !settings.enableLogging)}
                  className={`w-12 h-6 rounded-full transition ${settings.enableLogging ? 'bg-green-500' : 'bg-gray-600'}`}
                >
                  <div className={`w-5 h-5 bg-white rounded-full transition transform ${settings.enableLogging ? 'translate-x-6' : 'translate-x-1'}`} />
                </button>
              </div>
            </div>
          </div>

          {/* Security */}
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20">
            <div className="flex items-center gap-2 mb-4">
              <Shield className="w-6 h-6 text-red-400" />
              <h2 className="text-xl font-semibold text-white">Security</h2>
            </div>
            
            <div className="space-y-4">
              <div>
                <label className="block text-purple-200 mb-2">Security Level</label>
                <select 
                  value={settings.securityLevel}
                  onChange={(e) => handleChange('securityLevel', e.target.value)}
                  className="w-full bg-white/5 border border-white/20 rounded-lg px-4 py-2 text-white"
                >
                  <option value="low">Low</option>
                  <option value="medium">Medium</option>
                  <option value="high">High</option>
                  <option value="critical">Critical</option>
                </select>
              </div>

              <div className="bg-white/5 rounded-lg p-4 border border-white/10">
                <h3 className="text-white font-semibold mb-2">Security Features</h3>
                <ul className="text-purple-200 text-sm space-y-1">
                  <li>• End-to-end encryption</li>
                  <li>• API key rotation</li>
                  <li>• Request signing</li>
                  <li>• IP whitelisting</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="mt-6 bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 flex gap-4">
          <button 
            onClick={handleSave}
            className="flex-1 bg-gradient-to-r from-purple-500 to-blue-500 text-white py-3 rounded-lg font-semibold hover:from-purple-600 hover:to-blue-600 transition flex items-center justify-center gap-2"
          >
            <Save className="w-5 h-5" />
            Save Configuration
          </button>
          <button 
            onClick={handleReset}
            className="bg-white/10 text-white py-3 px-6 rounded-lg font-semibold hover:bg-white/20 transition flex items-center gap-2"
          >
            <RotateCcw className="w-5 h-5" />
            Reset
          </button>
        </div>

        {saved && (
          <div className="mt-4 bg-green-500/20 border border-green-500/50 rounded-lg p-4 text-green-200 text-center">
            ✓ Settings saved successfully!
          </div>
        )}
      </div>
    </div>
  );
}