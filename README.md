# owm-finder

Open Weather Map City Finder Using Node.js And Express.

This simple node application is useful if you want to search for available cities in
OpenWeatherMap and fetch weather for that particular city using it's ID

## How To Use

1. Clone This Repo

   ```
     git clone https://github.com/jack-coder-25/owm-finder.git
   ```

2. Download City Data JSON File Into The Directory

   ```
   cd owm-finder && wget http://bulk.openweathermap.org/sample/city.list.min.json.gz
   ```

3. Run Npm Install To Install Express

   ```
   npm install
   ```

4. Start The Server

   ```
   npm start
   ```

5. Make A Request
   ```
   curl http://localhost:2819/?query=San

   [
     {
       id: 1,
       name: San
     }
   ]
   ```
