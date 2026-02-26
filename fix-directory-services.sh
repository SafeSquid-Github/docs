#!/bin/bash

# Fix Directory_Services subdirectory links by adding /main/ back
echo "Fixing Directory_Services subdirectory links..."

# Fix Active_Directory/ links (but not its sub-pages)
find docs -type f \( -name "*.md" -o -name "*.mdx" \) -exec sed -i \
  's|/docs/Authentication/Directory_Services/Active_Directory/)|/docs/Authentication/Directory_Services/Active_Directory/main/)|g' \
  {} +

# Fix OpenLDAP/ links (but not its sub-pages)  
find docs -type f \( -name "*.md" -o -name "*.mdx" \) -exec sed -i \
  's|/docs/Authentication/Directory_Services/OpenLDAP/)|/docs/Authentication/Directory_Services/OpenLDAP/main/)|g' \
  {} +

echo "Fixed Directory_Services subdirectory links"
echo "Done!"
