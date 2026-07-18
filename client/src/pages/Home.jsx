import { Link } from "react-router-dom";
import Button from "../components/Button";
import TravelIllustration from "../assets/travel-planning.svg";
import {
  Compass,
  Wallet,
  Plane,
  Plus,
  UserPlus,
} from "lucide-react";
import airplane from "../assets/airplane.svg";
import camera from "../assets/camera.svg";
import compass from "../assets/compass.svg";
import curvedLine from "../assets/curved-line.svg";
import curvedLine2 from "../assets/curved-line2.svg";
import globe from "../assets/globe.svg";
import pin from "../assets/pin.svg";
import signpost from "../assets/signpost.svg";
import suitcase from "../assets/suitcase.svg";
import worldMap from "../assets/worldMap.svg";

function Home() {
  const features = [
    {
      icon: Compass,
      title: "Align Expectations",
      description:
        "Discover travel preferences before booking and avoid unnecessary surprises.",
    },
    {
      icon: Wallet,
      title: "Budget Together",
      description:
        "Find a budget that works for everyone in the group.",
    },
    {
      icon: Plane,
      title: "Travel Better",
      description:
        "Travel with people whose style matches yours for a smoother trip.",
    },
  ];

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-purple-50 via-purple-100 to-purple-200 overflow-hidden px-6 pt-2 pb-16">
      
      <div className="absolute inset-0 pointer-events-none select-none">

          {/* World Map */}
          <img
              src={worldMap}
              alt=""
              className="hidden lg:block absolute bottom-109 left-270 w-[500px] opacity-4"
          />

          {/* Flight path */}
          <img
              src={curvedLine2}
              alt=""
              className="hidden lg:block absolute bottom-125 right-285 w-[420px] opacity-10 rotate-330"
          />

          {/* Airplane */}
          <img
              src={airplane}
              alt=""
              className="absolute top-6 left-85 w-7 opacity-20 rotate-86"
          />

          {/* Pin */}
          <img
              src={pin}
              alt=""
              className="hidden lg:block absolute top-10 left-12 w-8 opacity-10"
          />

          {/* Camera */}
          <img
              src={camera}
              alt=""
              className="hidden lg:block absolute bottom-120 left-6 w-10 opacity-5 -rotate-12"
          />

          {/* Suitcase */}
          <img
              src={suitcase}
              alt=""
              className="hidden lg:block absolute bottom-40 left-4 w-12 opacity-5 rotate-6"
          />

          {/* Compass */}
          <img
              src={compass}
              alt=""
              className="hidden lg:block absolute bottom-80 left-4 w-10 opacity-5"
          />

          {/* Globe */}
          <img
              src={globe}
              alt=""
              className="hidden lg:block absolute top-80 right-16 w-14 opacity-5"
          />

          {/* Signpost */}
          <img
              src={signpost}
              alt=""
              className="hidden lg:block absolute bottom-77 right-75 w-10 opacity-5 rotate-320"
          />

          {/* Bottom Flight Path */}
          <img
              src={curvedLine}
              alt=""
              className="hidden lg:block absolute bottom-55 left-300 w-[350px] opacity-10 rotate-20"
          />

      </div>
      
      <div className="relative max-w-7xl mx-auto">

        {/* Hero Section */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-2 items-start py-6">
          <div className="text-center lg:text-left lg:pt-10">
            <div className="inline-flex items-center gap-2 bg-white/70 backdrop-blur-sm border border-purple-200 rounded-full px-5 py-2 shadow-sm">
              <span className="text-lg">🧳</span>
              <span className="text-sm font-semibold text-purple-700 tracking-wide">
                Travel Compatibility App
              </span>
            </div>

            <h1 className="text-4xl lg:text-6xl font-extrabold mt-6">
              AreWeGoing?
            </h1>

            <p className="text-xl lg:text-2xl text-gray-700 mt-8 max-w-xl leading-relaxed">
              Because great trips begin when expectations align.
            </p>

            <p className="text-gray-500 mt-5 max-w-lg leading-8">
              Plan smarter trips with friends by discovering travel compatibility
              before booking your next adventure.
            </p>

            <div className="flex flex-col sm:flex-row gap-5 mt-10">
              <Link to="/create-trip">
                <Button variant="primary">
                  <div className="flex items-center gap-2">
                    <Plus size={18} />
                    <span>Create a Trip</span>
                  </div>
                </Button>
              </Link>

              <Link to="/join-trip">
                <Button variant="secondary">
                  <div className="flex items-center gap-2">
                    <UserPlus size={18} />
                    <span>Join a Trip</span>
                  </div>
                </Button>
              </Link>
            </div>
          </div>
        <div className="flex justify-center lg:justify-start hidden md:flex items-center -mt-22">
          <div className="relative flex items-center justify-center -translate-x-9">

            <div className="absolute w-[500px] h-[500px] rounded-full bg-purple-200 blur-3xl opacity-30"></div>

            <img
              src={TravelIllustration}
              alt="Friends planning a trip"
              className="relative w-[585px] max-w-none animate-[float_8s_ease-in-out_infinite]"
            />

          </div>
        </div>

        </section>

        {/* Features Section */}
        <section className="mt-12 lg:-mt-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

            {features.map((feature) => (
              <div
                key={feature.title}
                className="group bg-white/80 backdrop-blur-sm rounded-3xl p-7 shadow-sm border border-white transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:border-purple-200"
              >
                <div className="w-14 h-14 rounded-2xl bg-purple-100 flex items-center justify-center transition-all duration-300 group-hover:bg-purple-600">
                    <feature.icon
                        className="text-purple-600 group-hover:text-white transition-colors duration-300"
                        size={28}
                        strokeWidth={2.2}
                    />
                </div>

                <h3 className="text-xl font-bold mt-5 text-gray-900">
                  {feature.title}
                </h3>

                <p className="text-gray-500 mt-4 leading-7">
                  {feature.description}
                </p>
              </div>
            ))}

          </div>
        </section>

      </div>
    </div>
  );
}

export default Home;