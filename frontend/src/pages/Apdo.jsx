import { useEffect, useState } from "react";
import axios from "axios";
import { TextInput, Spinner, Label, Card } from "flowbite-react";
import Aos from "aos";
import "aos/dist/aos.css";
const API_KEY = import.meta.env.VITE_NASA_API_KEY;

export default function Apdo() {
  // Helper function to format date as YYYY-MM-DD
  const formatDate = (date) => {
    const d = new Date(date);
    // d.setDate(d.getDate() - 1); // Subtract one day
    d.setDate(d.getDate());
    return `${d.getFullYear()}-${(d.getMonth() + 1)
      .toString()
      .padStart(2, "0")}-${d.getDate().toString().padStart(2, "0")}`;
  };

  const [apiData, setApiData] = useState(null);
  const [selectedDate, setSelectedDate] = useState(formatDate(new Date())); // Initialize with today's date formatted as YYYY-MM-DD
  const [error, setError] = useState("");

  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  // console.log(selectedDate);

  useEffect(() => {
    if (selectedDate) {
      const fetchAPOD = async () => {
        try {
          const response = await axios.get(
            `https://api.nasa.gov/planetary/apod?date=${selectedDate}&api_key=${API_KEY}`
          );
          setApiData(response.data);
        } catch (error) {
          console.error("Failed to fetch APOD data:", error);
          setError("Failed to load data from NASA's APOD API.");
        }
      };

      fetchAPOD();
    }
  }, [selectedDate]);

  const handleDateChange = (event) => {
    setSelectedDate(event.target.value); // Update the state to the new date
  };

  return (
    <div className="relative w-full h-[150vh] overflow-hidden">
      <h1
        data-aos="fade-up"
        data-aos-anchor-placement="top-bottom"
        className=" font-semibold text-4xl sm:text-6xl text-center text-orange-300 absolute z-20 top-28 w-full "
      >
        Astronomy Picture of the Day
      </h1>

      {apiData ? (
        <>
          <img
            src={apiData.url}
            alt={apiData.title}
            className="absolute inset-0 w-full h-full object-cover"
          />

          <div className="absolute z-10 inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
            <Card
              data-aos="fade-up"
              data-aos-anchor-placement="top-bottom"
              className="max-w-3xl bg-non border-none mt-36 sm:mt-0"
            >
              <h5 className="z-20 mt-20 sm:mt-0 text-2xl font-bold tracking-tight text-slate-50 dark:text-white">
                {apiData.title}
              </h5>
              <p className=" font-normal text-slate-50 dark:text-gray-400">
                {apiData.explanation}
              </p>
              <p className=" font-normal text-slate-50 dark:text-gray-400">
                {apiData.date}
              </p>
              <p className=" font-normal text-slate-50 dark:text-gray-400">
                {apiData.copyright}
              </p>

              <Label
                className="text-white "
                value="Select a date to explore more:"
              />
              <TextInput
                type="date"
                value={selectedDate}
                onChange={handleDateChange}
                className="w-[200px] mb-4"
              />
            </Card>
          </div>
        </>
      ) : error ? (
        <p className="text-dark text-center">{error}</p>
      ) : (
        <div className="flex justify-center items-center h-full">
          <Spinner aria-label="Loading spinner" size="xl" color="success" />
        </div>
      )}
    </div>
  );
}
