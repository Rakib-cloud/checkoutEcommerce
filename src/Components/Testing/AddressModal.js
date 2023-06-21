import React, { useState, useEffect } from "react";
import "rodal/lib/rodal.css";
import { useForm } from "react-hook-form";
import Rodal from "rodal";

const AddressModal = ({ show, setShow, baseUrl, customerToken,updateState,setUpdateState }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  const [countryList, setCountryList] = useState([]);
  
  const [divisionList, setDivisionList] = useState([]);
  const [districtList, setDistrictList] = useState([]);
  const [subdistrictList, setSubDistrictList] = useState([]);
  const [unionList, setUnionList] = useState([]);
  const [countryid, setCountryid] = useState("");
  const [divisionId, setDivisionId] = useState("");
  const [districtId, setDistrictId] = useState("");
  const [subdistrictId, setSubDistrictId] = useState("");
  const token =
    "XYdA0tA6g6THFiy0vKE4mTADrQJb7jdpiCLFQWDMKwHVPH4r3ZWTjmKzSSNevIfF";
//GET COUNTRY
  const getCountry = async () => {
    const res = await fetch(`${baseUrl}/api/country-list`, {
      method: "GET",
      headers: {
        Authorization: token,
      },
    });
    const data = await res.json();
    if (res.ok) {
      console.log(data?.data);
      setCountryList(data?.data);
    }
  };
//GET DIVISION
  const getDivision = async () => {
    const res = await fetch(
      `${baseUrl}/api/division-list?country_id=${countryid}`,
      {
        method: "GET",
        headers: {
          Authorization: token,
        },
      }
    );
    const data = await res.json();
    if (res.ok) {
      console.log(data?.data);
      setDivisionList(data?.data);
    }
  };
//GET DISTRICT
  const getDistrict = async () => {
    const res = await fetch(
      `${baseUrl}/api/district-list?division_id=${divisionId}`,
      {
        method: "GET",
        headers: {
          Authorization: token,
        },
      }
    );
    const data = await res.json();
    if (res.ok) {
      setDistrictList(data?.data);
    }
  };
//GET SUBDISTRICT
  const getSubDistrict = async () => {
    const res = await fetch(
      `${baseUrl}/api/sub-district-list?district_id=${districtId}`,
      {
        method: "GET",
        headers: {
          Authorization: token,
        },
      }
    );
    const data = await res.json();
    if (res.ok) {
      setSubDistrictList(data?.data);
    }
  };
//GET UNION
  const getUnion = async () => {
    const res = await fetch(
      `${baseUrl}/api/union-list?sub_district_id=${subdistrictId}`,
      {
        method: "GET",
        headers: {
          Authorization: token,
        },
      }
    );
    const data = await res.json();
    if (res.ok) {
      setUnionList(data?.data);
    }
  };
//SUBMIT USER ADDRESS
  const onSubmit = async (data) => {
    console.log("addressdate", data);
    const formData = new FormData();
    formData.append("country_id", data?.country_id);
    formData.append("division_id", data?.division_id);
    formData.append("district_id", data?.district_id);
    formData.append("sub_district_id", data?.sub_district_id);
    formData.append("union_id", data?.union_id);
    formData.append("is_default", 0);
    formData.append("postal_code", data?.postal_code);
    formData.append("address", data?.address);

    const res = await fetch(`${baseUrl}/api/user/create-new-address`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${customerToken}`,
      },
      body: formData,
    });
    const resData = await res.json();
    if (res.ok) {
      alert("added");
      setUpdateState(!updateState);
      setShow(!show)
    }
  };

  useEffect(() => {
    getCountry();
    getDivision();
    getDistrict();
    getSubDistrict();
    getUnion();
  }, [
    token,
    baseUrl,
    countryid,
    divisionId,
    districtId,
    subdistrictId,
    updateState,
  ]);

  return (
    <Rodal
      visible={show}
      onClose={() => setShow(!show)}
      animation="slideDown"
      customStyles={{
        width: "800px",
        height: "auto",
        bottom: "auto",
        top: "40%",
        transform: "translateY(-50%)",
      }}
    >
      <div className=" lg:p-3">
        <h4 class="border-b font-semibold  lg:p-0 ">Create New Address</h4>
        <form onSubmit={handleSubmit(onSubmit)} className="mt-2">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            <div class=" pb-2">
              <label for="">Country</label>
              <div>
                <select
                  class=" select w-1/2 lg:w-full select-success "
                  onClick={(e) => setCountryid(e?.target?.value)}
                  {...register("country_id", {
                    required: {
                      // value: true,
                      message: "Country is Required",
                    },
                  })}
                >
                  <option value="" disabled selected>
                    Please select country
                  </option>
                  {countryList?.map((country, index) => (
                    <option value={country.id} key={index}>
                      {country?.name}{" "}
                    </option>
                  ))}{" "}
                </select>
              </div>
            </div>

            <div class=" pb-2">
              <label for="">Division</label>
              <div>
                <select
                  class=" select w-1/2 lg:w-full select-success"
                  onClick={(e) => setDivisionId(e?.target?.value)}
                  {...register("division_id", {
                    required: {
                      // value: true,
                      message: "Division is Required",
                    },
                  })}
                >
                  <option value="" disabled selected>
                    select country first
                  </option>
                  {divisionList?.map((division, index) => (
                    <option value={division.id} key={index}>
                      {division?.name}{" "}
                    </option>
                  ))}{" "}
                </select>
              </div>
            </div>
            <div class=" pb-2">
              <label for="">District</label>
              <div>
                <select
                  class="select w-1/2 lg:w-full  select-success"
                  onClick={(e) => setDistrictId(e?.target?.value)}
                  {...register("district_id", {
                    required: {
                      // value: true,
                      message: "Division is Required",
                    },
                  })}
                >
                  <option value="" disabled selected>
                    select Division first
                  </option>
                  {districtList?.map((disctrict, index) => (
                    <option value={disctrict.id} key={index}>
                      {disctrict?.name}{" "}
                    </option>
                  ))}{" "}
                </select>
              </div>
            </div>
            <div class=" pb-2">
              <label for="">Sub District</label>
              <div>
                <select
                  class="select w-1/2 lg:w-full select-success"
                  onClick={(e) => setSubDistrictId(e?.target?.value)}
                  {...register("sub_district_id", {
                    required: {
                      // value: true,
                      message: "District is Required",
                    },
                  })}
                >
                  <option value="" disabled selected>
                    select District first
                  </option>
                  {subdistrictList?.map((subdisctrict, index) => (
                    <option value={subdisctrict.id} key={index}>
                      {subdisctrict?.name}{" "}
                    </option>
                  ))}{" "}
                </select>
              </div>
            </div>
            <div class=" pb-2">
              <label for="">Union</label>
              <div>
                <select
                  class="select w-1/2 lg:w-full  select-success "
                  {...register("union_id", {
                    required: {
                      // value: true,
                      message: "Union is Required",
                    },
                  })}
                >
                  <option value="" disabled selected>
                    select Sub District first
                  </option>
                  {unionList?.map((union, index) => (
                    <option value={union.id} key={index}>
                      {union?.name}{" "}
                    </option>
                  ))}{" "}
                </select>
              </div>
            </div>
            <div class=" pb-2">
              <label for="">Postal Code</label>
              <div>
                <input
                  type="number"
                  class="input input-bordered input-success w-1/2 lg:w-full "
                  placeholder="type your zip code"
                  {...register("postal_code", {
                    required: {
                      // value: true,
                      message: "Postal code is Required",
                    },
                  })}
                />
              </div>
            </div>
          </div>
          <div class=" pb-2">
            <div className="">
              <label for="">Address</label>
              <textarea
                type="text"
                class="w-full bg-gray-100 p-4"
                rows="lg:7 2"
                cols="lg:30 15"
                {...register("address", {
                  required: {
                    // value: true,
                    message: "Address is Required",
                  },
                })}
              />
            </div>
          </div>

          <div class=" pb-2">
            <button className="  rounded-md bg-teal-500 px-4 py-2 font-medium text-white">
              Add Address
            </button>
          </div>
        </form>
      </div>
    </Rodal>
  );
};

export default AddressModal;
