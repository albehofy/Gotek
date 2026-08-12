#!/bin/bash

# Media Glow CRM & ERP Unified Launcher Script

ROOT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"

# Disable Angular CLI Analytics Prompts globally for non-interactive execution
export NG_CLI_ANALYTICS=false
export CI=true

echo "========================================================"
echo "   🚀 Starting Media Glow Agency CRM & ERP Platform     "
echo "========================================================"
echo "Root Directory: $ROOT_DIR"
echo ""

# Function to stop all background processes on exit
cleanup() {
    echo ""
    echo "🛑 Shutting down backend and frontend services..."
    kill 0 2>/dev/null
    exit 0
}

trap cleanup SIGINT SIGTERM EXIT

# 1. Start Laravel Backend API
echo "⚡ [1/3] Starting Laravel Backend API on http://localhost:8000..."
cd "$ROOT_DIR/backend" || exit 1
php artisan serve --host=127.0.0.1 --port=8000 &
BACKEND_PID=$!

# Wait briefly to ensure backend starts
sleep 2

# 2. Start Website View Frontend (Port 4200)
if [ -d "$ROOT_DIR/fontend/view" ]; then
    echo "🌐 [2/3] Starting Public Website View Frontend on http://localhost:4200..."
    cd "$ROOT_DIR/fontend/view" || exit 1
    npm start &
    VIEW_PID=$!
fi

# 3. Start Angular Dashboard Frontend (Port 4201)
echo "💻 [3/3] Starting Angular CRM Dashboard on http://localhost:4201..."
cd "$ROOT_DIR/fontend/dashboard" || exit 1
npm start &
DASHBOARD_PID=$!

echo ""
echo "========================================================"
echo "   ✅ All Media Glow Services Running Successfully!     "
echo "   --------------------------------------------------   "
echo "   🔹 Laravel Backend API : http://localhost:8000"
echo "   🔹 Public Website View : http://localhost:4200"
echo "   🔹 CRM Dashboard UI   : http://localhost:4201"
echo "========================================================"
echo "Press Ctrl+C anytime to stop all servers."
echo ""

wait
