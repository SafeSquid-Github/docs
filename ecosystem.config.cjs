/**
 * PM2 ecosystem for SafeSquid docs (Mintlify) local preview.
 * Start: pm2 start ecosystem.config.cjs
 * Logs: pm2 logs safesquid-docs-dev
 */
const path = require('path');

module.exports = {
  apps: [
    {
      name: 'safesquid-docs-dev',
      cwd: path.join(__dirname, 'docs'),
      script: 'npx',
      args: 'mintlify dev --no-open',
      interpreter: 'none',
      instances: 1,
      autorestart: true,
      max_restarts: 15,
      min_uptime: '15s',
      exp_backoff_restart_delay: 2000,
      env: {
        NODE_ENV: 'development',
      },
    },
  ],
};
