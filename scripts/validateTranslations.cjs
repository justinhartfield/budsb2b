#!/usr/bin/env node

/**
 * Translation Validation Script
 * Checks for missing translations, inconsistencies, and errors
 */

const fs = require('fs');
const path = require('path');

// Import translations
const enCommon = require('../src/translations/en/common').common;
const deCommon = require('../src/translations/de/common').common;
const enBudsPro = require('../src/translations/en/budsProPage').budsProPage;
const deBudsPro = require('../src/translations/de/budsProPage').budsProPage;

const translations = {
  en: { common: enCommon, budsProPage: enBudsPro },
  de: { common: deCommon, budsProPage: deBudsPro }
};

let errors = 0;
let warnings = 0;

console.log('🔍 Validating Translations...\n');

// Helper to get all keys from nested object
function getAllKeys(obj, prefix = '') {
  let keys = [];
  for (const key in obj) {
    const fullKey = prefix ? `${prefix}.${key}` : key;
    if (typeof obj[key] === 'object' && !Array.isArray(obj[key]) && obj[key] !== null) {
      keys = keys.concat(getAllKeys(obj[key], fullKey));
    } else {
      keys.push(fullKey);
    }
  }
  return keys;
}

// Check if all EN keys have DE equivalents
function checkMissingTranslations(namespace) {
  console.log(`\n📋 Checking ${namespace}...`);
  
  const enKeys = getAllKeys(translations.en[namespace]);
  const deKeys = getAllKeys(translations.de[namespace]);
  
  const missingInDE = enKeys.filter(key => !deKeys.includes(key));
  const extraInDE = deKeys.filter(key => !enKeys.includes(key));
  
  if (missingInDE.length > 0) {
    console.log(`  ❌ Missing in German (${missingInDE.length}):`);
    missingInDE.forEach(key => console.log(`     - ${key}`));
    errors += missingInDE.length;
  }
  
  if (extraInDE.length > 0) {
    console.log(`  ⚠️  Extra in German (${extraInDE.length}):`);
    extraInDE.forEach(key => console.log(`     - ${key}`));
    warnings += extraInDE.length;
  }
  
  if (missingInDE.length === 0 && extraInDE.length === 0) {
    console.log(`  ✅ All translations present (${enKeys.length} keys)`);
  }
}

// Check for placeholder text
function checkPlaceholders(namespace) {
  const placeholders = ['TODO', 'TBD', 'FIXME', 'XXX'];
  
  function findPlaceholders(obj, path = '') {
    for (const key in obj) {
      const fullPath = path ? `${path}.${key}` : key;
      if (typeof obj[key] === 'string') {
        placeholders.forEach(placeholder => {
          if (obj[key].includes(placeholder)) {
            console.log(`  ⚠️  Placeholder found in ${fullPath}: "${obj[key]}"`);
            warnings++;
          }
        });
      } else if (typeof obj[key] === 'object' && obj[key] !== null) {
        findPlaceholders(obj[key], fullPath);
      }
    }
  }
  
  findPlaceholders(translations.en[namespace]);
  findPlaceholders(translations.de[namespace]);
}

// Run validations
['common', 'budsProPage'].forEach(namespace => {
  checkMissingTranslations(namespace);
  checkPlaceholders(namespace);
});

// Summary
console.log('\n' + '='.repeat(50));
console.log('📊 Validation Summary');
console.log('='.repeat(50));
console.log(`✅ Namespaces checked: 2 (common, budsProPage)`);
console.log(`❌ Errors: ${errors}`);
console.log(`⚠️  Warnings: ${warnings}`);

if (errors > 0) {
  console.log('\n❌ Validation failed! Please fix errors before deploying.');
  process.exit(1);
} else if (warnings > 0) {
  console.log('\n⚠️  Validation passed with warnings. Review before deploying.');
  process.exit(0);
} else {
  console.log('\n✅ All translations validated successfully!');
  process.exit(0);
}

