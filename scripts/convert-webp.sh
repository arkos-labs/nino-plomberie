#!/bin/bash

# Script de conversion JPG → WebP + responsive images
# Utilise ImageMagick (convertir) ou ffmpeg
# Usage: bash convert-webp.sh /public/realisations

SOURCE_DIR="${1:-.}"

if [ ! -d "$SOURCE_DIR" ]; then
  echo "❌ Erreur: Répertoire '$SOURCE_DIR' non trouvé"
  exit 1
fi

echo "🔄 Conversion images JPG → WebP dans $SOURCE_DIR"
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"

# Vérifier outils disponibles
if ! command -v convert &> /dev/null; then
  echo "❌ ImageMagick non installé"
  echo "   Mac: brew install imagemagick"
  echo "   Ubuntu: sudo apt-get install imagemagick"
  exit 1
fi

CONVERTED=0
ERRORS=0

# Traiter chaque JPG
for jpg_file in "$SOURCE_DIR"/*.jpg; do
  if [ -f "$jpg_file" ]; then
    filename=$(basename "$jpg_file" .jpg)

    # WebP original
    if convert "$jpg_file" -quality 80 "$SOURCE_DIR/$filename.webp" 2>/dev/null; then
      echo "✅ $filename.webp"
      ((CONVERTED++))
    else
      echo "❌ $filename.webp — ERREUR"
      ((ERRORS++))
      continue
    fi

    # WebP petit (375px)
    if convert "$jpg_file" -quality 80 -resize 375x "$SOURCE_DIR/$filename-sm.webp" 2>/dev/null; then
      echo "   └─ $filename-sm.webp (375px)"
    else
      echo "   └─ ❌ $filename-sm.webp — ERREUR"
      ((ERRORS++))
    fi

    # WebP moyen (768px)
    if convert "$jpg_file" -quality 80 -resize 768x "$SOURCE_DIR/$filename-md.webp" 2>/dev/null; then
      echo "   └─ $filename-md.webp (768px)"
    else
      echo "   └─ ❌ $filename-md.webp — ERREUR"
      ((ERRORS++))
    fi
  fi
done

echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo "📊 Résumé:"
echo "   ✅ Images converties: $CONVERTED"
echo "   ❌ Erreurs: $ERRORS"
echo "   📁 Répertoire: $SOURCE_DIR"
echo ""
echo "💾 Fichiers créés:"
echo "   - {filename}.webp (original)"
echo "   - {filename}-sm.webp (375px)"
echo "   - {filename}-md.webp (768px)"
echo ""
echo "🚀 Prêt! Intégrez OptimizedImage composant"
