import * as fs from 'fs';
import * as dotenv from 'dotenv';

// Load environment variables from .env file
dotenv.config();

// Access the environment variables
const postgresqlUri = process.env.EXPO_PUBLIC_NEON_POSTGREQL_URI;
const twelvedataApiKey = process.env.EXPO_PUBLIC_TWELVEDATA_APIKEY;

if (!postgresqlUri || !twelvedataApiKey) {
  throw new Error('Missing environment variables');
}

// YAML configuration with the environment variables injected
const yamlContent = `
configurationset:
  - configuration:
      name: postgresql_config
      uri: ${postgresqlUri}
  - configuration:
      name: twelvedata
      Authorization: apikey ${twelvedataApiKey}
`;

// Write the YAML content to a file
fs.writeFileSync('api/config.yaml', yamlContent.trim(), 'utf8');

console.log('YAML configuration file generated successfully.');
