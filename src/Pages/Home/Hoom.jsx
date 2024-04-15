import { Helmet } from "react-helmet-async";
import Banner from "../../Component/Banner/Banner";
import Best from "../../Component/Best/Best";
import Estate from "../../Component/Estate/Estate";

export default function Hoom() {
  return (
    <div>
      <Helmet>
        <title>Home</title>
      </Helmet>
      <Banner />
      <Estate />
      <Best />
    </div>
  );
}
