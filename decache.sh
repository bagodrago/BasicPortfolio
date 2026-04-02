#!/bin/bash
# Deletes cache and reruns npm run dev

rm -rf .next node_modules/.cache node_modules/.vite
npm run dev