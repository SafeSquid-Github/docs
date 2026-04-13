#!/bin/bash

# Simple image compression using sharp
# Compress all PNG/JPG to WebP, re-compress existing WebP

STATIC_DIR="./static/img"
BACKUP_DIR="./static/img_backup_$(date +%Y%m%d_%H%M%S)"
MAX_WIDTH=1200
QUALITY=85

echo "🔍 Creating backup..."
mkdir -p "$BACKUP_DIR"
cp -r "$STATIC_DIR" "$BACKUP_DIR/"

echo "✅ Backup created at: $BACKUP_DIR"
echo ""
echo "🔧 Starting compression (${MAX_WIDTH}px max width, ${QUALITY}% quality)..."
echo ""

# Counter
total=0
processed=0

# Convert PNG/JPG to WebP
echo "📦 Converting PNG/JPG to WebP..."
find "$STATIC_DIR" -type f \( -name "*.png" -o -name "*.jpg" -o -name "*.jpeg" \) | while read file; do
  total=$((total + 1))
  base="${file%.*}"
  output="${base}.webp"
  
  echo "  $file → ${output##*/}"
  
  if sharp -i "$file" -o "$output" -f webp -q $QUALITY resize $MAX_WIDTH 2>/dev/null; then
    rm "$file"
    processed=$((processed + 1))
  else
    echo "    ⚠️  Failed to convert, keeping original"
  fi
done

echo ""
echo "📦 Re-compressing existing WebP files..."

# Re-compress existing WebP
find "$STATIC_DIR" -type f -name "*.webp" | while read file; do
  temp="${file}.tmp.webp"
  
  if sharp -i "$file" -o "$temp" -f webp -q $QUALITY resize $MAX_WIDTH 2>/dev/null; then
    mv "$temp" "$file"
    echo "  ✓ ${file##*/}"
  else
    rm -f "$temp"
  fi
done

echo ""
echo "✅ Compression complete!"
echo ""
echo "📊 Size comparison:"
du -sh "$BACKUP_DIR/img" "$STATIC_DIR" 2>/dev/null || du -sh "$BACKUP_DIR" "$STATIC_DIR"
echo ""
echo "💾 Backup location: $BACKUP_DIR"
echo ""
echo "🧪 Test the build:"
echo "  npm run build:low-memory"
