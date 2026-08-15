#!/bin/bash

# ═══════════════════════════════════════════════════════════════════════════
# Media Glow Agency CRM & ERP Unified Platform Launcher Script
# Starts: Laravel Backend API (8000), Website View (4200), CRM Dashboard (4201)
# ═══════════════════════════════════════════════════════════════════════════

ROOT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"

# Disable interactive prompts for CLI tools
export NG_CLI_ANALYTICS=false
export CI=true

# Color Constants
GREEN='\033[0;32m'
BLUE='\033[0;34m'
CYAN='\033[0;36m'
GOLD='\033[0;33m'
RED='\033[0;31m'
NC='\033[0m' # No Color

echo -e "${CYAN}================================================================${NC}"
echo -e "${GOLD}   🚀 Launching Media Glow Unified Agency Platform (v2026)      ${NC}"
echo -e "${CYAN}================================================================${NC}"
echo -e "Root Directory: ${BLUE}$ROOT_DIR${NC}"
echo ""

# Function to gracefully stop all background services on Exit/Interrupt
cleanup() {
    echo ""
    echo -e "${RED}🛑 Shutting down backend and frontend services gracefully...${NC}"
    kill 0 2>/dev/null
    exit 0
}

trap cleanup SIGINT SIGTERM EXIT

# 0. Port Cleanup Check (Ensures ports 8000, 4200, 4201 are free)
echo -e "${GOLD}🔍 [0/4] Checking and clearing active ports (8000, 4200, 4201)...${NC}"
fuser -k 8000/tcp 4200/tcp 4201/tcp 2>/dev/null || true
sleep 1

# 1. Run Database Migrations & Media Cleanup Command (2-year media auto-cleanup)
if [ -d "$ROOT_DIR/backend" ]; then
    echo -e "${GOLD}⚡ [1/4] Running Laravel migrations & Media auto-cleanup...${NC}"
    cd "$ROOT_DIR/backend" || exit 1
    php artisan migrate --force 2>/dev/null || true
    php artisan media:cleanup-old 2>/dev/null || true
fi

# 2. Start Laravel Backend API Server (Port 8000)
echo -e "${GREEN}⚡ [2/4] Starting Laravel Backend API on http://localhost:8000...${NC}"
cd "$ROOT_DIR/backend" || exit 1
php artisan serve --host=127.0.0.1 --port=8000 &
BACKEND_PID=$!
sleep 2

# 3. Start Website View Frontend (Port 4200)
if [ -d "$ROOT_DIR/fontend/view" ]; then
    echo -e "${BLUE}🌐 [3/4] Starting Public Website View Frontend on http://localhost:4200...${NC}"
    cd "$ROOT_DIR/fontend/view" || exit 1
    npx ng serve --port 4200 --host 0.0.0.0 &
    VIEW_PID=$!
fi

# 4. Start Angular CRM Dashboard Frontend (Port 4201)
if [ -d "$ROOT_DIR/fontend/dashboard" ]; then
    echo -e "${CYAN}💻 [4/4] Starting Angular CRM Dashboard UI on http://localhost:4201...${NC}"
    cd "$ROOT_DIR/fontend/dashboard" || exit 1
    npx ng serve --port 4201 --host 0.0.0.0 &
    DASHBOARD_PID=$!
fi

echo ""
echo -e "${CYAN}================================================================${NC}"
echo -e "${GREEN}   ✅ All Media Glow Platform Services Running Successfully!   ${NC}"
echo -e "${CYAN}   ------------------------------------------------------------ ${NC}"
echo -e "${GREEN}   🔹 Laravel Backend API : ${BLUE}http://localhost:8000${NC}"
echo -e "${GREEN}   🔹 Public Website View : ${BLUE}http://localhost:4200${NC}"
echo -e "${GREEN}   🔹 CRM Admin Dashboard : ${BLUE}http://localhost:4201${NC}"
echo -e "${CYAN}================================================================${NC}"
echo -e "Press ${RED}Ctrl+C${NC} anytime to stop all running services."
echo ""

wait
