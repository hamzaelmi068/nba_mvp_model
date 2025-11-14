# Basketball Reference Scraper

Simple Python scraper to download Basketball Reference data by season:
- Player stats: totals, per-game, per-100 possessions, advanced
- Team standings: win/loss by conference
- MVP voting: award shares and ranks

Data is saved as CSV files under `data/<YEAR>/...` with friendly progress logs.

## Requirements

Install dependencies (macOS/zsh):

```bash
python3 -m venv .venv
source .venv/bin/activate
pip install -r requirements.txt
```

## Usage

Run with default range (e.g., 2009 to 2024):

```bash
python scrape_basketball_reference.py --start-year 2009 --end-year 2024
```

Run for a single season (e.g., 2024):

```bash
python scrape_basketball_reference.py --start-year 2024 --end-year 2024
```

Output files per season live in `data/<YEAR>/`:
- `players_totals.csv`
- `players_per_game.csv`
- `players_per_poss.csv`
- `players_advanced.csv`
- `standings_east.csv`
- `standings_west.csv`
- `standings.csv` (combined tidy)
- `mvp_voting.csv`

## Notes
- Adds polite delays between requests.
- Uses a lightweight approach (requests + BeautifulSoup + pandas).
- If a table is commented-out (Basketball Reference often does this), the script detects and parses it reliably.
