#!/bin/bash

# Fix broken /main/ links in all markdown files
echo "Fixing /main/ links..."

# Find all .md and .mdx files and replace /main/ with /
find docs -type f \( -name "*.md" -o -name "*.mdx" \) -exec sed -i 's|/docs/\([^)]*\)/main/|/docs/\1/|g' {} +

echo "Fixed /main/ links in docs directory"

# Count remaining instances (should be 0)
remaining=$(grep -r "/main/" docs/ --include="*.md" --include="*.mdx" | wc -l)
echo "Remaining /main/ instances: $remaining"

# Fix specific broken anchors
echo ""
echo "Fixing broken anchors..."

# Fix anchor references in SSL_Inspection files
find docs -type f \( -name "*.md" -o -name "*.mdx" \) -exec sed -i \
  -e 's|/docs/SSL_Inspection/Configure_HTTPS_Inspection/#generating-ssl-certificates|/docs/SSL_Inspection/Configure_HTTPS_Inspection/#step-1-generate-or-import-root-ca-certificate|g' \
  -e 's|/docs/SSL_Inspection/Configure_HTTPS_Inspection/#enabling-ssl-inspection|/docs/SSL_Inspection/Configure_HTTPS_Inspection/#step-2-enable-https-inspection-in-safesquid|g' \
  -e 's|/docs/SSL_Inspection/Configure_HTTPS_Inspection/#bypass-policies|/docs/SSL_Inspection/Configure_HTTPS_Inspection/#step-4-configure-bypass-policies|g' \
  -e 's|/docs/SSL_Inspection/Configure_HTTPS_Inspection/#import-certificate-into-firefox|/docs/SSL_Inspection/Configure_HTTPS_Inspection/#firefox-all-platforms|g' \
  {} +

echo "Fixed broken anchors"
echo "Done!"
