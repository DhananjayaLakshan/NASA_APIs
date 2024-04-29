import { useEffect, useState } from "react";
import axios from "axios";
import { Spinner, Table } from "flowbite-react";
import Aos from "aos";
import "aos/dist/aos.css";
import Cards from "../components/Cards";
import bgImage from "../images/mrpbg2.jpg";
const API_KEY = import.meta.env.VITE_NASA_API_KEY;

export default function Mrp() {
  const [apiData, setApiData] = useState([]);
  const [cameras, setCameras] = useState([]);
  const [selectedCamera, setSelectedCamara] = useState("fhaz");
  const [error, setError] = useState("");

  console.log(selectedCamera);

  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  useEffect(() => {
    const fetchAPOD = async () => {
      try {
        const response = await axios.get(
          `https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&camera=${selectedCamera}&api_key=${API_KEY}`
        );
        const fetchedPhotos = response.data.photos;

        setApiData(fetchedPhotos);
        setCameras(fetchedPhotos[0].rover.cameras);
      } catch (error) {
        console.error("Failed to fetch Mars Rover photos:", error);
        setError("Failed to load data from NASA's Mars Rover API.");
      }
    };

    fetchAPOD();
  }, [selectedCamera]);

  console.log(apiData);

  return (
    <div
      className="py-5 "
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        height: "auto", // You can adjust the height as needed
      }}
    >
      <h1
        data-aos="fade-up"
        data-aos-anchor-placement="top-bottom"
        className="font-semibold text-4xl sm:text-6xl text-center text-amber-200 absolute z-20 top-28 w-full"
      >
        Mars Rover Photos
      </h1>

      <div className="my-16 mt-64">
        <h1
          data-aos="fade-up"
          data-aos-anchor-placement="top-bottom"
          className="text-xl text-white font-bold mt-12 ml-8 text-c "
        >
          Rover Cameras
        </h1>
        <p className="text-white ml-8 mt-4 w-[50%] ">
          Explore the variety of cameras mounted on Mars rovers used to capture
          detailed imagery of the Martian surface. Select any camera from the
          list to view more specific details and historical data captured by
          each camera.
        </p>
        <Table
          data-aos="zoom-in"
          hoverable
          className="w-[50%] my-6 ml-8 items-center justify-center"
        >
          <Table.Head>
            <Table.HeadCell>Abbreviation</Table.HeadCell>
            <Table.HeadCell>Camera</Table.HeadCell>
          </Table.Head>
          <Table.Body className="divide-y">
            {cameras && cameras.length > 0 ? (
              cameras.map((camera, index) => (
                <Table.Row
                  key={index}
                  className="bg-white dark:border-gray-700 dark:bg-gray-800 cursor-pointer"
                  onClick={() => setSelectedCamara(camera.name.toLowerCase())} // Update selectedCamera state on row click
                >
                  <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white hover:underline">
                    {camera.name}
                  </Table.Cell>
                  <Table.Cell>{camera.full_name}</Table.Cell>
                </Table.Row>
              ))
            ) : (
              <p className="text-red-600 font-bold">{error}</p>
            )}
          </Table.Body>
        </Table>
      </div>

      <div className="flex flex-wrap justify-center gap-6 mt-10">
        {apiData && apiData.length > 0 ? (
          apiData.map((photo) => <Cards key={photo.id} data={photo} />)
        ) : error ? (
          <p>{error}</p>
        ) : (
          <div className="text-center w-full">
            <Spinner
              aria-label="Center-aligned spinner example"
              size="xl"
              color="success"
            />
          </div>
        )}
      </div>
    </div>
  );
}
