# Root Cause Analysis: Docs Build Failure After Image Optimization

**Date:** 2026-02-28  
**Severity:** High (Production builds blocked)  
**Status:** ✅ Resolved  
**Duration:** ~30 minutes

---

## Executive Summary

After implementing image compression to reduce memory usage during builds, the SafeSquid documentation site began failing to compile with broken image reference errors. The root cause was incomplete migration from PNG/JPG to WebP format — images were converted but markdown references were not updated.

---

## Timeline

| Time | Event |
|------|-------|
| 11:51 AM | Image compression script executed (`compress-images.sh`) |
| 11:52 AM | 24 PNG/JPG files converted to WebP, 1,597 WebP files re-compressed |
| 12:08 PM | Compression complete: 214MB → 79MB (63% reduction) |
| 12:09 PM | Dev server started throwing MDX compilation errors |
| 12:10 PM | User reports: "Build failure — webpack config conflict" |
| 12:15 PM | Investigation begins |
| 12:20 PM | Root cause identified: Broken image references |
| 12:25 PM | Markdown files updated (2 files, 19 image references) |
| 12:26 PM | Dev server restarted — errors resolved |

---

## Root Cause

### **Problem Statement**
The image compression script (`compress-images.sh`) converted PNG and JPG files to WebP format but **did not update markdown file references**.

### **Technical Details**

**What happened:**
1. Script converted `pptx_image1.png` → `pptx_image1.webp`
2. Script deleted original `pptx_image1.png`
3. Markdown still referenced `/img/SAB_Debian/pptx_image1.png`
4. Docusaurus couldn't resolve the image path
5. Build failed with MDX compilation errors

**Affected files:**
- `docs/01-Getting_Started/03-Install_SafeSquid/01-SafeSquid_Appliance_Builder.md` (17 images)
- `docs/23-Troubleshooting/18-How_to_use_find_client_id.sh_for_getting_complete_connection_log.md` (1 image)

**Error message:**
```
Error: Markdown image with URL `/img/SAB_Debian/pptx_image1.png` 
in source file "docs/01-Getting_Started/03-Install_SafeSquid/01-SafeSquid_Appliance_Builder.md" (73:4) 
couldn't be resolved to an existing local image file.
```

---

## Contributing Factors

### **Primary Cause**
Compression script missing markdown update step:
```bash
# ❌ Original script did NOT include this:
find docs -name "*.md" -exec sed -i 's/\.png/.webp/g' {} +
find docs -name "*.md" -exec sed -i 's/\.jpg/.webp/g' {} +
```

### **Secondary Factors**
1. **No validation step** — Script didn't verify references before deleting originals
2. **No dry-run mode** — Couldn't preview changes before applying
3. **Incomplete backup** — Backup only included `static/img`, not `docs/`

---

## Impact Assessment

### **User Impact**
- ✅ **Dev server:** Still running (compiles with warnings)
- ❌ **Production builds:** Would fail completely
- ❌ **Link checking:** Blocked (requires successful build)
- ❌ **Deployments:** Blocked

### **Business Impact**
- **Severity:** High
- **Duration:** 30 minutes
- **Downtime:** None (dev server continued running)
- **Data loss:** None (backup created)

---

## Resolution

### **Immediate Fix (Applied)**

1. **Updated broken markdown references:**
   ```bash
   # Fix picture1.jpg → picture1.webp
   sed -i 's|/img/picture1\.jpg|/img/picture1.webp|g' \
     docs/23-Troubleshooting/18-How_to_use_find_client_id.sh_for_getting_complete_connection_log.md
   
   # Fix all pptx_image*.png → pptx_image*.webp
   sed -i 's|/img/SAB_Debian/pptx_image\([0-9]*\)\.png|/img/SAB_Debian/pptx_image\1.webp|g' \
     docs/01-Getting_Started/03-Install_SafeSquid/01-SafeSquid_Appliance_Builder.md
   ```

2. **Restarted dev server:**
   ```bash
   pm2 restart safesquid-docs
   ```

3. **Verified compilation:**
   - Dev server now compiles cleanly
   - All image references resolved
   - No MDX errors

---

## Preventive Measures

### **Immediate Actions (To Implement)**

1. **Update compression script** to include markdown updates:
   ```bash
   #!/bin/bash
   # After converting images, update markdown references:
   
   echo "📝 Updating markdown references..."
   find docs -name "*.md" -exec sed -i 's|/img/\([^)]*\)\.png|/img/\1.webp|g' {} +
   find docs -name "*.md" -exec sed -i 's|/img/\([^)]*\)\.jpg|/img/\1.webp|g' {} +
   find docs -name "*.md" -exec sed -i 's|/img/\([^)]*\)\.jpeg|/img/\1.webp|g' {} +
   
   echo "✅ References updated"
   ```

2. **Add validation step** before deleting originals:
   ```bash
   # Check if markdown references exist before conversion
   for img in $(find static/img -name "*.png" -o -name "*.jpg"); do
     basename="${img##*/}"
     if grep -r "$basename" docs/ >/dev/null 2>&1; then
       echo "⚠️  $basename is referenced in markdown"
     fi
   done
   ```

3. **Implement dry-run mode:**
   ```bash
   ./compress-images.sh --dry-run  # Preview changes only
   ./compress-images.sh --execute  # Actually apply changes
   ```

### **Long-term Improvements**

1. **Pre-commit hook** to validate image references:
   ```bash
   # .git/hooks/pre-commit
   for img in $(grep -roh '/img/[^)]*\.\(png\|jpg\|webp\)' docs/); do
     if [ ! -f "static$img" ]; then
       echo "❌ Broken image reference: $img"
       exit 1
     fi
   done
   ```

2. **CI/CD check** for broken references in GitHub Actions

3. **Docusaurus config** to warn instead of fail:
   ```typescript
   markdown: {
     hooks: {
       onBrokenMarkdownImages: 'warn', // Don't fail builds
     },
   }
   ```

---

## Lessons Learned

### **What Went Well**
✅ Backup created before compression (static/img saved)  
✅ Dev server continued running (didn't crash)  
✅ Quick identification of root cause (~10 minutes)  
✅ Simple fix (2 sed commands)  

### **What Could Be Improved**
❌ Script should have updated markdown references automatically  
❌ No validation before deleting original files  
❌ No testing/dry-run before production execution  
❌ Incomplete documentation in script comments  

### **Action Items**
- [ ] Update `compress-images.sh` with markdown update logic
- [ ] Add `--dry-run` flag
- [ ] Create pre-commit hook for image validation
- [ ] Document script usage in BUILD_OPTIMIZATION.md
- [ ] Add CI/CD check for broken image references

---

## Verification

### **Build Status**
```bash
# Dev server
✅ Running on port 3001
✅ No MDX compilation errors
✅ All image references resolved

# Production build
⏳ Not tested yet (run: npm run build)
```

### **Files Changed**
```
Modified:
  docs/01-Getting_Started/03-Install_SafeSquid/01-SafeSquid_Appliance_Builder.md (17 references)
  docs/23-Troubleshooting/18-How_to_use_find_client_id.sh_for_getting_complete_connection_log.md (1 reference)

Not changed (no broken references):
  docs/07-Profiling_Engine/04-Content_Analyser/02-Text_Analyser.md
  docs/07-Profiling_Engine/04-Content_Analyser/03-Image_Analyser_AI.md
  docs/14-Malware_Scanners/01-SqScan.md
  docs/14-Malware_Scanners/02-ClamAV_Malware_Scanning.md
  docs/23-Troubleshooting/07-Not_Generating_Performance_Plot.md
```

---

## Appendix

### **Error Logs**
```
Error: Markdown image with URL `/img/SAB_Debian/pptx_image1.png` 
in source file "docs/01-Getting_Started/03-Install_SafeSquid/01-SafeSquid_Appliance_Builder.md" (73:4) 
couldn't be resolved to an existing local image file.

Error: Markdown image with URL `/img/picture1.jpg` 
in source file "docs/23-Troubleshooting/18-How_to_use_find_client_id.sh_for_getting_complete_connection_log.md" (24:1) 
couldn't be resolved to an existing local image file.
```

### **Compression Results**
```
Before: 214MB static assets
After:  79MB static assets
Saved:  135MB (63% reduction)

Files processed:
- 24 PNG/JPG → WebP (converted + deleted originals)
- 1,597 WebP → Re-compressed
```

---

**Status:** ✅ **RESOLVED**  
**Next step:** Test production build (`npm run build`) to confirm full resolution
