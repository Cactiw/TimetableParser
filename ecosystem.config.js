module.exports = {
  apps : [{
    name: 'TimetableParser',
    script: 'main.py',
    interpreter: 'python3',
    log_file: 'TimetableParser.log',
    min_uptime: 5000,
    kill_timeout: 15000,
    max_restarts: 3,


    // Options reference: https://pm2.keymetrics.io/docs/usage/application-declaration/
    args: '-u',
    instances: 1,
    autorestart: true,
    watch: false,
    max_memory_restart: '1500M',
    env: {
      NODE_ENV: 'production'
    },
    env_production: {
      NODE_ENV: 'production'
    }
  }
  ]
};