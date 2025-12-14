# Vercel Deployment Configuration

## Issue Fixed
The deployment was failing because it exceeded Vercel's 300MB limit due to:
- Large historical data files (2013-2025) - hundreds of MB
- All CSV files being included in deployment

## Solution
Created `.vercelignore` to exclude:
- All historical data (2013-2025) - only 2026 data is needed for forecasting
- Python cache files
- Development scripts
- Results/output files
- Virtual environments

## What's Included in Deployment
- `data/2026/` - Only data needed for current forecasts
- `models/*.pkl` - Trained model file (needed by backend)
- `backend/` - API code
- `frontend/` - Frontend React app

## Notes
- The model was trained on historical data, but the trained model file contains all learned patterns
- Only 2026 data is needed at runtime for generating forecasts
- Historical data (2013-2025) is not needed for deployment

## If Deployment Still Fails
1. Check model file size - if > 50MB, consider compressing or using external storage
2. Verify only data/2026/ is included (not other years)
3. Consider moving data to external storage (S3, etc.) and loading at runtime

