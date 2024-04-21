import { Card } from "flowbite-react";

export default function Cards({ data }) {
  return (
    <Card
      data-aos="zoom-in"
      className="w-full sm:w-1/3 p-4 ml-5 mr-10" // Adjust width here for three cards in a row
      imgAlt={`Mars Rover Photo taken on ${data.earth_date}`}
      imgSrc={data.img_src}
    >
      <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
        {data.camera.full_name}
      </h5>
      <h6 className="text-md font-bold tracking-tight text-gray-900 dark:text-white">
        Rover Details:
      </h6>
      <ul>
        <li>Name: {data.rover.name}</li>
        <li>Satus: {data.rover.status}</li>
        <li>Landing Date: {data.rover.landing_date}</li>
        <li>Launch Date: {data.rover.launch_date}</li>
      </ul>

      <p className="font-normal text-gray-700 dark:text-gray-400">
        <span className="font-semibold">Photo taken on</span> {data.earth_date}
      </p>
    </Card>
  );
}
