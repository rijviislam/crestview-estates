import { Helmet } from "react-helmet-async";
import Banner from "../../Component/Banner/Banner";
import Estate from "../../Component/Estate/Estate";
import Slider from "../Shared/Slider";

export default function Hoom() {
  return (
    <div>
      <Helmet>
        <title>Home</title>
      </Helmet>
      <Banner />
      <Slider />
      <Estate />
    </div>
  );
}
