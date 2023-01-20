import React, { useState } from "react";
import { useQuery } from "react-query";
import Loading from "../Shared/Loading";
import DeleteConfirmModal from "./DeleteConfirmModal";
import DoctorRow from "./DoctorRow";

const ManageDoctors = () => {
  const [deleteDoctor, setDeleteDoctor] = useState(null);
  const {
    data: doctors,
    isLoading,
    refetch,
  } = useQuery("doctors", () =>
    fetch("https://doctors-portal-server2.onrender.com/doctor", {
      headers: {
        authorization: "Bearer " + localStorage.getItem("accessToken"),
      },
    }).then((res) => res.json())
  );

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div>
      <h2 className="text-2xl">Manage doctors: {doctors.length}</h2>

      <div class="overflow-x-auto">
        <table class="table w-full">
          <thead>
            <tr>
              <th></th>
              <th>Avatar</th>
              <th>Name</th>
              <th>Speciality</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {doctors.map((doctor, index) => (
              <DoctorRow
                key={doctor._id}
                doctor={doctor}
                index={index}
                refetch={refetch}
                setDeleteDoctor={setDeleteDoctor}
              />
            ))}
          </tbody>
        </table>
      </div>
      {deleteDoctor && (
        <DeleteConfirmModal
          setDeleteDoctor={setDeleteDoctor}
          deleteDoctor={deleteDoctor}
          refetch={refetch}
        />
      )}
    </div>
  );
};

export default ManageDoctors;
