#!/usr/bin/env bash

function is_module_or_theme {
  # Get the directory from second argument
  local dir=$1
  # If the first argument is empty then return false
  if [[ -z "$dir" ]]; then
    echo "false"
    return
  fi

  # Check if the cwd includes "docroot/modules" or "docroot/themes"
  if [[ "$dir" == *"docroot/modules"* || "$dir" == *"docroot/themes"* ]]; then
    echo "true"
  else
    echo "false"
  fi
}

# Define function to return commit path
function get_commit_path {
  # Get the current working directory
  local cwd=$(pwd)
  # Check if the cwd includes "docroot/modules" or "docroot/themes"
  local is_module_or_theme=$(is_module_or_theme "$cwd")

  # If is_module_or_theme is true then return the path starting from "docroot" until the end of the string
  if [[ "$is_module_or_theme" == "true" ]]; then
    local path="${cwd#*docroot}"
    local full_path="/var/www/html/docroot$path"
    echo "$full_path"
  else
    echo "."
  fi
}
