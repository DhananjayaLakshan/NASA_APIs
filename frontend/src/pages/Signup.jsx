import { Alert, Button, Label, Spinner, TextInput } from "flowbite-react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import signinBgImg from "../images/log.jpg";

export default function Signup() {
  const [formData, setFormData] = useState({});
  const [loading, setLoarding] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value.trim() });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.userName || !formData.email || !formData.password) {
      return setErrorMessage("Please fill out all the fields.");
    }

    try {
      setLoarding(true);
      setErrorMessage(null);

      const res = await fetch("/api/auth/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (data.success === false) {
        setLoarding(false);
        return setErrorMessage(data.message);
      }

      setFormData({});
      setLoarding(false);

      if (res.ok) {
        navigate("/sign-in");
      }
    } catch (error) {
      setLoarding(false);
      setErrorMessage(error.message);
    }
  };

  return (
    <div
      className="min-h-[110vh] "
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${signinBgImg})`,
        backgroundSize: "cover",
        backgroundBlendMode: "overlay",
      }}
    >
      <div className="h-0 sm:h-screen  flex p-3 max-w-3xl mx-auto flex-col md:flex-row md:items-center gap-5">
        {/**left side */}
        <div className="flex-1 mt-24 sm:mt-0">
          <Link to="/" className=" text-sm sm:text-xl font-bold">
            <span className="px-2 py-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white rounded-lg text-4xl">
              NASA {`{APIs}`}
            </span>
          </Link>
          <p className="text-sm mt-5 text-white">
            This website utilizes NASA APIs to offer users a captivating and
            educational exploration of space. Through the Mars Rover Photos API,
            visitors can view a comprehensive gallery of Martian landscapes
            captured by rover cameras. Additionally, the Astronomy Picture of
            the Day (APOD) API provides daily astronomical images with detailed
            explanations. Together, these resources enable astronomy
            enthusiasts, educators, and students to discover and learn about the
            universe from anywhere.
          </p>
        </div>

        {/**right side */}
        <div className="flex-1">
          <form className="flex flex-col gap-4 " onSubmit={handleSubmit}>
            <div>
              <Label className="text-white" value="username" />
              <TextInput
                type="text"
                placeholder="username"
                id="userName"
                onChange={handleChange}
                value={formData.userName || ""}
              />
            </div>
            <div>
              <Label className="text-white" value="email" />
              <TextInput
                type="email"
                placeholder="name@gmail.com"
                id="email"
                onChange={handleChange}
                value={formData.email || ""}
              />
            </div>
            <div>
              <Label className="text-white" value="password" />
              <TextInput
                type="password"
                placeholder="password"
                id="password"
                onChange={handleChange}
                value={formData.password || ""}
              />
            </div>
            <Button
              gradientDuoTone="purpleToPink"
              type="submit"
              disabled={loading}
            >
              {loading ? (
                <>
                  <Spinner size="sm" />
                  <span className="pl-3">Loading...</span>
                </>
              ) : (
                "Sign Up"
              )}
            </Button>
          </form>
          <div className="flex gap-3 text-sm mt-5 ">
            <span className="text-white">Have an account</span>
            <Link to="/sign-in" className="text-cyan-400 font-semibold">
              Sign In
            </Link>
          </div>
          {errorMessage && (
            <Alert className="mt-5 text-red-800" color="failure">
              {errorMessage}
            </Alert>
          )}
        </div>
      </div>
    </div>
  );
}
