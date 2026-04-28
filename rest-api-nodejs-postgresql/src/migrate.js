const { Pool } = require('pg');
const fs = require('fs');
const path = require('path');

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: false
});

const runMigration = async () => {
  try {
    console.log('Running migration...');
    const sql = fs.readFileSync(path.join(__dirname, '../database/migration.sql'), 'utf8');
    await pool.query(sql);
    console.log('Migration completed successfully!');
  } catch (error) {
    console.error('Migration failed:', error);
    process.exit(1);
  } finally {
    await pool.end();
  }
};

runMigration();
