# 🎥 **React.js + Flask Movie Recommendation System**

![Python](https://img.shields.io/badge/Python-3.9.6-blue) ![Flask](https://img.shields.io/badge/Flask-Framework-orange) ![React](https://img.shields.io/badge/React-Frontend-green) ![API](https://img.shields.io/badge/TMDB-API-yellow)

---

## 🌟 **Overview**

Welcome to the **React.js + Flask Movie Recommendation System**! This application allows you to explore and discover movies seamlessly, providing personalized recommendations based on your searches.

### **Key Features**:

1. 🔍 **Search Movies**: Browse through 5000+ movies and access details such as cast, genre, and trailers (via **TMDB API**).
2. 🎥 **Personalized Recommendations**: Get movie suggestions powered by a Flask back-end using a **content-based filtering algorithm**.
3. 🎭 **Genre Filtering**: View top movies by genre directly fetched from the **TMDB API**.
4. 📱 **Responsive Design**: Optimized for all devices, including mobile.

![Maintenance](https://img.shields.io/badge/Maintained-Yes-brightgreen) ![Website](https://img.shields.io/badge/Website-Up-yellow)

---

## 📦 **Installation Guide**

### **Back-End Setup**:

1. Clone this repository:
   ```bash
   git clone <repository-url>
   ```
2. Install dependencies:
   ```bash
   pip install -r requirements.txt
   ```
3. Start the Flask server:
   ```bash
   python app.py
   ```

### **Front-End Setup**:

4. Navigate to the React app directory:
   ```bash
   cd movie-recommender-app
   ```
5. Install Node.js modules:
   ```bash
   npm install
   ```
6. Update the `proxy` field in `package.json` to match your Flask server's port (default: `localhost:5000`).
7. Build the project:
   ```bash
   npm run build
   ```

### **Running the Application**:

8. Access the app by navigating to:

   ```
   http://localhost:<portNumber>
   ```

   Alternatively, use:

   ```bash
   npm start
   ```

---

## 🏗️ **Application Architecture**

The app architecture is designed to ensure seamless integration between the front-end and back-end components.

![Architecture Diagram](https://user-images.githubusercontent.com/74367889/170507933-fabe5dcc-52a0-476f-8650-c454a433bc48.png)

---

## 🧠 **Recommendation Algorithm**

The recommendation system leverages **content-based filtering** to provide movie suggestions.

### **How It Works**:

1. Combines movie details such as **genre**, **title**, **cast**, and **director** into a unified tag.
2. Converts tags into numerical vectors.
3. Uses **cosine similarity** to compute similarity scores between movies.
4. Recommends movies with the highest similarity scores to the searched movie.

### **Cosine Similarity Formula**:

![Cosine Similarity Formula](https://user-images.githubusercontent.com/74367889/170820479-843243b2-3659-4101-8adf-2e5c7cdbcc19.png)

---

## 📚 **References**

1. [TMDB API Documentation](https://www.themoviedb.org/documentation/api)
2. [Cosine Similarity Explanation](https://www.machinelearningplus.com/nlp/cosine-similarity/)

---

Enjoy discovering your next favorite movie with my recommendation system! 🎬🍿
