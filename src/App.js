import { useEffect, useState } from 'react';
import './App.css';
import Forecast from './components/Forecast';
import Inputs from './components/Inputs';
import TemperatureAndDetails from './components/TemperatureAndDetails';
import TimeAndLocation from './components/TimeAndLocation';
import TopButtons from './components/TopButtons'
import getFormattedWeatherData from './services/weatherService'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {

  const [query, setQuery] = useState({ q: 'houston' });
  const [units, setUnits] = useState('metric');
  const [weather, setWeather] = useState(null);


  useEffect(() => {
    const fetchWeatherData = async () => {

      const message = query.q ? query.q : 'current location';
      toast.info('Fetching weather data...' + message); ;

      await getFormattedWeatherData({ ...query, units }).then(
        data => {

          toast.success(`Successfully fetched weather data for ${data.name}, ${data.country}`)

          setWeather(data);
        }
      );
    };
    fetchWeatherData();
  }, [query, units])

  const formatBackground = () => {
    if (!weather) return 'from-cyan-700 to-blue-700';

    const threshold = units === 'metric' ? 20: 60;
    if(weather.temp <= threshold) return 'from-cyan-700 to-blue-700';

    return 'from-yellow-700 to-orange-700';
  };

  return (

    <div className={`mx-auto max-w-screen-md mt-4 py-5 px-32 bg-gradient-to-br ${formatBackground()} shadow-xl shadow-gray-400`}>
      <TopButtons setQuery={setQuery} />
      <Inputs setQuery={setQuery} units={units} setUnits={setUnits} />

      {weather && (
        <div>
          <TimeAndLocation weather={weather} />
          <TemperatureAndDetails weather={weather} />

          <Forecast title="Hourly Forecast" items={weather.hourly} />
          <Forecast title="Daily Forecast" items={weather.daily} />
        </div>
      )}

        <ToastContainer autoClose={2000} theme='colored' newestOnTop={true}/>

    </div>

  );
}

export default App;
