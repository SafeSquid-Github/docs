#!/bin/bash

# Image Optimization Script for SafeSquid Docs
# Compresses large images to reduce build memory usage

set -e

STATIC_DIR="./static/img"
BACKUP_DIR="./static/img_backup_$(date +%Y%m%d)"
TARGET_SIZE=200  # Target max width in KB for documentation images

echo "🔍 Analyzing images in $STATIC_DIR..."

# Check if sharp-cli is installed
if ! command -v sharp &> /dev/null; then
    echo "❌ sharp-cli not found. Installing..."
    npm install -g sharp-cli
fi

# Create backup
echo "📦 Creating backup at $BACKUP_DIR..."
mkdir -p "$BACKUP_DIR"
cp -r "$STATIC_DIR"/* "$BACKUP_DIR/" 2>/dev/null || true

# Find images larger than 200KB
echo ""
echo "📊 Images larger than 200KB:"
find "$STATIC_DIR" -type f \( -name "*.png" -o -name "*.jpg" -o -name "*.jpeg" -o -name "*.webp" \) \
  -size +200k -exec du -h {} + | sort -rh | head -20

echo ""
echo "💡 Optimization Options:"
echo ""
echo "1. Compress ALL images (aggressive - recommended for first run)"
echo "   - Max width: 1200px"
echo "   - Quality: 85%"
echo "   - Format: WebP"
echo "   - Expected reduction: ~70%"
echo ""
echo "2. Compress LARGE images only (>500KB)"
echo "   - Max width: 1000px"
echo "   - Quality: 80%"
echo "   - Format: WebP"
echo "   - Expected reduction: ~50%"
echo ""
echo "3. Compress HUGE images only (>1MB)"
echo "   - Max width: 800px"
echo "   - Quality: 75%"
echo "   - Format: WebP"
echo "   - Expected reduction: ~30%"
echo ""
echo "4. Analyze only (no changes)"
echo ""

read -p "Choose option [1-4]: " choice

case $choice in
  1)
    echo "🔧 Compressing ALL images..."
    find "$STATIC_DIR" -type f \( -name "*.png" -o -name "*.jpg" -o -name "*.jpeg" \) -print0 | \
    while IFS= read -r -d '' file; do
      echo "  Processing: $file"
      sharp -i "$file" -o "${file%.*}.webp" --width 1200 --quality 85
      # Remove original if conversion successful
      if [ -f "${file%.*}.webp" ]; then
        rm "$file"
      fi
    done
    
    # Re-compress existing WebP files
    find "$STATIC_DIR" -type f -name "*.webp" -print0 | \
    while IFS= read -r -d '' file; do
      echo "  Recompressing: $file"
      sharp -i "$file" -o "${file}.tmp.webp" --width 1200 --quality 85
      mv "${file}.tmp.webp" "$file"
    done
    ;;
    
  2)
    echo "🔧 Compressing LARGE images (>500KB)..."
    find "$STATIC_DIR" -type f \( -name "*.png" -o -name "*.jpg" -o -name "*.jpeg" -o -name "*.webp" \) -size +500k -print0 | \
    while IFS= read -r -d '' file; do
      echo "  Processing: $file"
      ext="${file##*.}"
      if [ "$ext" != "webp" ]; then
        sharp -i "$file" -o "${file%.*}.webp" --width 1000 --quality 80
        if [ -f "${file%.*}.webp" ]; then
          rm "$file"
        fi
      else
        sharp -i "$file" -o "${file}.tmp.webp" --width 1000 --quality 80
        mv "${file}.tmp.webp" "$file"
      fi
    done
    ;;
    
  3)
    echo "🔧 Compressing HUGE images (>1MB)..."
    find "$STATIC_DIR" -type f \( -name "*.png" -o -name "*.jpg" -o -name "*.jpeg" -o -name "*.webp" \) -size +1M -print0 | \
    while IFS= read -r -d '' file; do
      echo "  Processing: $file"
      ext="${file##*.}"
      if [ "$ext" != "webp" ]; then
        sharp -i "$file" -o "${file%.*}.webp" --width 800 --quality 75
        if [ -f "${file%.*}.webp" ]; then
          rm "$file"
        fi
      else
        sharp -i "$file" -o "${file}.tmp.webp" --width 800 --quality 75
        mv "${file}.tmp.webp" "$file"
      fi
    done
    ;;
    
  4)
    echo ""
    echo "📊 Full size analysis:"
    echo ""
    echo "Total static directory size:"
    du -sh "$STATIC_DIR"
    echo ""
    echo "Top 30 largest images:"
    find "$STATIC_DIR" -type f \( -name "*.png" -o -name "*.jpg" -o -name "*.jpeg" -o -name "*.webp" \) \
      -exec du -h {} + | sort -rh | head -30
    echo ""
    echo "Image count by format:"
    echo "PNG:  $(find "$STATIC_DIR" -type f -name "*.png" | wc -l)"
    echo "JPG:  $(find "$STATIC_DIR" -type f -name "*.jpg" -o -name "*.jpeg" | wc -l)"
    echo "WebP: $(find "$STATIC_DIR" -type f -name "*.webp" | wc -l)"
    exit 0
    ;;
    
  *)
    echo "❌ Invalid option"
    exit 1
    ;;
esac

echo ""
echo "✅ Optimization complete!"
echo ""
echo "Before/After comparison:"
du -sh "$BACKUP_DIR" "$STATIC_DIR"
echo ""
echo "💾 Backup saved at: $BACKUP_DIR"
echo ""
echo "🧪 Test the build:"
echo "  npm run build:low-memory"
echo ""
echo "📝 Update image references:"
echo "  If you compressed PNG/JPG → WebP, update markdown files:"
echo "  find docs -name '*.md' -exec sed -i 's/\\.png/.webp/g' {} +"
echo "  find docs -name '*.md' -exec sed -i 's/\\.jpg/.webp/g' {} +"
