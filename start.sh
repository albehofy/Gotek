#!/bin/bash

# Media Glow CRM & ERP Unified Launcher Script

ROOT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"

echo "========================================================"
echo "   🚀 Starting Media Glow Agency CRM & ERP Platform     "
echo "========================================================"
echo "Root Directory: $ROOT_DIR"
echo ""

# Function to stop all background processes on exit
cleanup() {
    echo ""
    echo "🛑 Shutting down backend and frontend services..."
    kill 0
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

# 2. Start Angular Dashboard Frontend
echo "💻 [2/3] Starting Angular CRM Dashboard on http://localhost:4200..."
cd "$ROOT_DIR/fontend/dashboard" || exit 1
npm start -- --port=4200 &
DASHBOARD_PID=$!

# 3. Start Website View Frontend (if exists)
if [ -d "$ROOT_DIR/fontend/view" ]; then
    echo "🌐 [3/3] Starting Website View Frontend on http://localhost:4201..."
    cd "$ROOT_DIR/fontend/view" || exit 1
    npm start -- --port=4201 &
    VIEW_PID=$!
fi

echo ""
echo "========================================================"
echo "   ✅ All Media Glow Services Running Successfully!     "
echo "   --------------------------------------------------   "
echo "   🔹 Laravel Backend API : http://localhost:8000"
echo "   🔹 CRM Dashboard UI   : http://localhost:4200"
echo "   🔹 Public Website View : http://localhost:4201"
echo "========================================================"
echo "Press Ctrl+C anytime to stop all servers."
echo ""

wait
