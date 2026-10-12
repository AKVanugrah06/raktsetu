#!/usr/bin/env bash
# Creates (or updates) every label in .github/labels.json on saisiddi/raktsetu.
# Requires: GitHub CLI (`gh`), authenticated, and `jq`.
#
# Usage: ./scripts/create-labels.sh

set -euo pipefail

REPO="saisiddi/raktsetu"
LABELS_FILE="$(dirname "$0")/../.github/labels.json"

if ! command -v gh >/dev/null 2>&1; then
  echo "Error: GitHub CLI ('gh') is not installed. See https://cli.github.com/" >&2
  exit 1
fi

if ! command -v jq >/dev/null 2>&1; then
  echo "Error: 'jq' is not installed." >&2
  exit 1
fi

jq -c '.[]' "$LABELS_FILE" | while read -r label; do
  name=$(echo "$label" | jq -r '.name')
  color=$(echo "$label" | jq -r '.color')
  description=$(echo "$label" | jq -r '.description')

  echo "Creating label: $name"
  gh label create "$name" \
    --repo "$REPO" \
    --color "$color" \
    --description "$description" \
    --force
done

echo "Done. $(jq 'length' "$LABELS_FILE") labels created/updated on $REPO."
