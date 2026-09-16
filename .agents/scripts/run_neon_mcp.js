const path = require('path');
const fs = require('fs');
const envPath = path.resolve(__dirname, '../../.env');
if (fs.existsSync(envPath)) {
  const envContent = fs.readFileSync(envPath, 'utf8');
  envContent.split('\n').forEach(line => {
    const match = line.match(/^\s*([\w.-]+)\s*=\s*(.*)?\s*$/);
    if (match) {
      const key = match[1];
      let value = match[2] || '';
      if (value.startsWith('"') && value.endsWith('"')) {
        value = value.slice(1, -1);
      }
      process.env[key] = value;
    }
  });
}
const { spawn } = require('child_process');

// Ensure NEON_API_KEY is present
if (!process.env.NEON_API_KEY) {
  console.error("NEON_API_KEY is not set in .env");
  process.exit(1);
}

const child = spawn('npx', ['-y', '@neondatabase/mcp-server-neon'], {
  stdio: 'inherit',
  env: process.env,
  shell: true
});

child.on('error', (err) => {
  console.error('Failed to start subprocess.', err);
});
