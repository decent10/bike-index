import { useRouter } from "next/router";
import React from "react";
import { useFetch } from "../../hooks/api/useFetch";

function BikeDetail() {
  const router = useRouter();
  const bikeId = router.query.id;

  console.log(bikeId, Boolean(bikeId));

  const { data, isLoading, error } = useFetch(
    `bike_${bikeId}`,
    `/bikes/${Number(bikeId)}`,
    {
      enabled: Boolean(bikeId),
    }
  );
  console.log(data, isLoading, error);

  return <div>BikeDetail {router.query.id} </div>;
}

export default BikeDetail;
