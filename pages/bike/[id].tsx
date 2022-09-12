import { useRouter } from "next/router";
import React from "react";
import { BikeDetails } from "../../components/BikeDetails";
import { Spinner } from "../../components/Spinner";
import { useFetch } from "../../hooks/api/useFetch";

function BikeDetail() {
  const router = useRouter();
  const bikeId = router.query.id;

  const { data, isLoading, error } = useFetch(
    `bike_${bikeId}`,
    `/bikes/${Number(bikeId)}`,
    {
      enabled: Boolean(bikeId),
    }
  );
  if (isLoading) return <Spinner />;
  const { bike } = data;

  return (
    <section className="text-gray-700 body-font overflow-hidden bg-white">
      <BikeDetails
        name={bike.name || bike.title}
        description={bike.description}
        image={bike.large_img}
        colors={bike.frame_colors}
        manufacturer={bike.manufacturer_name}
        frameSize={bike.frame_size || "M"}
      />
    </section>
  );
}

export default BikeDetail;
