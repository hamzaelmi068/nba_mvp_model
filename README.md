# NBA MVP DataSculptor

**A sophisticated machine learning platform for predicting the next NBA Most Valuable Player.**

Overview
--------

The **NBA MVP DataSculptor** leverages historical NBA data, advanced statistical analysis, and machine learning algorithms (XGBoost, Random Forest, Ridge Regression) to forecast MVP candidates with high precision. It features a modern, interactive frontend for exploring predictions, comparing player stats, and visualizing the "MVP Ladder."

[**🎥 Watch the Demo**](https://github.com/user-attachments/assets/f041322b-e7f8-415a-91ec-8f3fff3dc791)


*Note: The demo above showcases the application running locally.*

 Features
---------

-   **🏆 MVP Forecasting**: Real-time probabilities for top MVP candidates using a trained ensemble model.
-   **📈 Interactive Analytics**: Visualize player performance trends and voting share predictions.
-   **⚡ Modern UI/UX**: Built with React and Framer Motion for smooth transitions and a premium feel.
-   **🧠 Advanced Modeling**: Uses 30+ years of historical data to train predictive models on voting patterns.

 Tech Stack
-----------

### Frontend
-   **Framework**: React (Vite)
-   **Styling**: CSS Modules / Custom CSS (with `clsx` for utility)
-   **Animation**: Framer Motion
-   **Charts**: Recharts
-   **HTTP**: Axios

### Backend & ML
-   **API**: FastAPI
-   **Machine Learning**: Scikit-Learn, XGBoost
-   **Data Processing**: Pandas, NumPy
-   **Web Scraping**: BeautifulSoup4

 Getting Started
---------------

Follow these steps to run the application locally.

### Prerequisites
-   Python 3.9+
-   Node.js 16+

### 1. clone the repository
```bash
git clone https://github.com/yourusername/nba-mvp-datasculptor.git
cd nba-mvp-datasculptor
```

### 2. Backend Setup
The backend serves the API and runs the ML inference.

```bash
# Navigate to the root folder (or backend depending on your setup, but model scripts are in root)
pip install -r requirements.txt

# Start the API server from the root directory (assuming main.py is accessible or adjusted)
# If main.py is in 'backend/', run:
cd backend
uvicorn main:app --reload
```
*The API will be available at `http://localhost:8000`.*

### 3. Frontend Setup
The frontend provides the user interface.

```bash
# Open a new terminal and navigate to the frontend directory
cd frontend

# Install dependencies
npm install

# Start the development server
npm run dev
```
*The app will be available at `http://localhost:5173`.*

 Project Structure
-----------------

```
nba_mvp_model/
├── backend/            # FastAPI application
├── frontend/           # React frontend application
├── data/               # Historical NBA data (CSVs)
├── models/             # Trained ML models (.pkl)
├── forecast.py         # Script for generating forecasts
├── model.py            # Core ML model definitions
├── scrape_...py        # Data scraping scripts
└── requirements.txt    # Python dependencies
```

 Contributing
------------
Contributions are welcome! Please open an issue or submit a pull request for any improvements or bug fixes.

 License
-------
[MIT](LICENSE)
