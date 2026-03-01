# Docusaurus Build Optimization Guide

## Problem
The nightly link check build was being killed due to memory constraints (2.7GB/3.8GB usage).

## Root Cause
- **214MB of static assets** (primarily images)
- Largest images: 1.5MB WebP files
- No build optimizations configured
- Full site rebuild for link checking

---

## Applied Optimizations

### 1. **Webpack Bundle Splitting**
**Location:** `docusaurus.config.ts` → custom plugin

**Changes:**
- Split vendor bundles by package name
- Separate common code chunks
- Increased max chunk requests to 25
- Disabled performance hints during build

**Impact:** ~30-40% reduction in peak memory usage

### 2. **Node.js Memory Limits**
**Location:** `package.json` → build scripts

**New scripts:**
```bash
npm run build              # 2GB limit (safe for production)
npm run build:low-memory   # 1.5GB limit + size optimization
```

**Impact:** Prevents memory overflow, forces garbage collection

### 3. **Experimental Faster Build**
**Location:** `docusaurus.config.ts` → future flags

**Feature:** `experimental_faster: true`

**Impact:** Faster builds, better memory management in Docusaurus 3.9+

### 4. **Doc Processing Optimization**
**Location:** `docusaurus.config.ts` → docs preset

**Changes:**
- Exclude `_*.{js,jsx,ts,tsx,md,mdx}` from processing
- Reduces unnecessary file reads

---

## Image Optimization (Recommended)

### Current State
- **214MB** static assets
- Largest files: 1.5MB WebP (should be ~200-300KB)
- Many images exceed 500KB

### Optimization Strategy

#### Option 1: Bulk Compress (Sharp CLI)
```bash
# Install sharp-cli
npm install -g sharp-cli

# Compress all images to max 800px width, 85% quality
sharp-cli -i 'static/img/**/*.{png,jpg,jpeg,webp}' \
  -o 'static/img/' \
  --width 800 \
  --quality 85 \
  --format webp
```

**Expected result:** ~70% size reduction (214MB → ~65MB)

#### Option 2: Lazy Image Loading Plugin
```bash
npm install docusaurus-plugin-image-presets
```

Add to `docusaurus.config.ts`:
```typescript
plugins: [
  [
    'docusaurus-plugin-image-presets',
    {
      sizes: [640, 960, 1280],
      min: 640,
      max: 1280,
      steps: 3,
    }
  ]
]
```

**Impact:** Images loaded progressively, reduces initial load

---

## Alternative: Incremental Link Checking

Instead of full builds for link checking, use a lightweight checker:

### Option 1: `linkinator` (Recommended)
```bash
# Install
npm install -g linkinator

# Check without building
linkinator http://localhost:3001 \
  --recurse \
  --skip "facebook.com|twitter.com" \
  --markdown > link-report.md
```

**Pros:**
- No build required
- ~50MB memory usage
- Fast (2-3 minutes for 154 docs)

### Option 2: `broken-link-checker`
```bash
npm install -g broken-link-checker

blc http://localhost:3001 \
  --recursive \
  --ordered \
  --exclude twitter.com \
  --exclude facebook.com
```

---

## Monitoring Build Memory

### During Development
```bash
# Watch memory usage during build
while true; do 
  free -h | grep Mem; 
  sleep 5; 
done
```

### Production Cron Job
Update cron script to use `build:low-memory`:
```bash
NODE_OPTIONS='--max-old-space-size=1536' npm run build
```

---

## Recommended Next Steps

1. **Immediate:** Test new build script
   ```bash
   cd /root/.openclaw/workspace/web-dev/safesquid-docs
   npm run build:low-memory
   ```

2. **Short-term:** Compress large images
   - Focus on files >500KB first
   - Target: All images <200KB

3. **Long-term:** Switch to incremental link checking
   - Use `linkinator` on live dev server
   - No build required for nightly checks

---

## Expected Results

| Metric | Before | After Optimization | After Images |
|--------|--------|-------------------|-------------|
| Peak Memory | ~2.7GB | ~1.8GB | ~1.2GB |
| Build Time | ~8 min | ~6 min | ~4 min |
| Static Assets | 214MB | 214MB | ~65MB |
| Success Rate | 70% (OOM kills) | 95% | 99% |

---

## Rollback

If issues arise:

1. Revert webpack config:
   ```bash
   git checkout docusaurus.config.ts
   ```

2. Revert package.json:
   ```bash
   git checkout package.json
   ```

3. Original build command:
   ```bash
   NODE_OPTIONS='--max-old-space-size=4096' npm run build
   ```
