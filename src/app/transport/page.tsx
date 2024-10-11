import Loading from "@/components/flight/loading";
import FlightList from "@/components/transport/flight-list";
import { Suspense } from "react";

const Transport = () => {
  return (
    <section>
      <Suspense fallback={<Loading />}>
        <FlightList />
      </Suspense>
    </section>
  );
};

export default Transport;
