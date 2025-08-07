#!/bin/bash

# Export all slides as PNG images
echo "Exporting slides as PNG images..."

# Remove old exports
rm -rf dist/slides-export-*.png 2>/dev/null || true

# Export slides (excluding first and last slide since you mentioned they're fine)
npx slidev export --format png --per-slide --range "2-24" --scale 1.5 --output ./exported-slides/

echo "✅ Slides exported to ./exported-slides/"
echo "📁 You can now drag and drop all PNG files into the chat"

# List exported files
ls -la exported-slides/ 2>/dev/null || echo "Export folder will be created after successful export"