import React, { useState, useEffect } from "react";
import {  AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import { RxCross2 } from "react-icons/rx";
import { BsCheck2All, BsTelephone } from "react-icons/bs";
import { BiNote, BiSelectMultiple } from "react-icons/bi";
import Loading from "../Loading/Loading";
import AddressModal from "./AddressModal";
const Test = () => {
  const [details, setDetails] = useState([]);
  const [isCheckedPayment, setIsCheckedPayemnt] = useState(true);
  const [isCheckedDelivery, setIsCheckedDelivery] = useState(true);
  const [showAddressAddModal, setShowAddressAddModal] = useState(false);
  const [selectedAddress, setSelectedAddress] = useState("");
  const [selectedAddressValue, setSelectedAddressValue] = useState();
  const [inputValue, setInputValue] = useState("");
  const [charge, setCharge] = useState();
  const [cartdetails, setCartdetails] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [updateState, setUpdateState] = useState(false);
  const [addressDetails, setAddressDetails] = useState([]);
  //CUSTOMER TOKER AND BASE URL ,USER INFORMATION GET
  const customerToken =
    "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwczpcL1wvd29tYW5hcGkuc2Vsb3BpYS5jb21cL2FwaVwvdXNlclwvbG9naW4iLCJpYXQiOjE2ODczMjIzNzgsImV4cCI6MTY4NzMyNTk3OCwibmJmIjoxNjg3MzIyMzc4LCJqdGkiOiJWeEl0QkxOaGdWQTIwYURuIiwic3ViIjozMCwicHJ2IjoiMjNiZDVjODk0OWY2MDBhZGIzOWU3MDFjNDAwODcyZGI3YTU5NzZmNyJ9.grt9pnYXq6Qs4HQ77fIbeyf77wsoV4abFGYCGq7Io0w";
  const baseUrl = "https://womanapi.selopia.com";
  //USER INFO GET
  const getDetails = async () => {
    const res = await fetch(`${baseUrl}/api/user/me`, {
      method: "GET",
      headers: {
        Authorization: `bearer ${customerToken}`,
      },
    });
    const data = await res.json();
    if (res.ok) {
      setDetails(data);

      setIsLoading(false);
    }
  };
  //USER ADDRESS GET
  const getAddressDetails = async () => {
    const res = await fetch(`${baseUrl}/api/user/address-list`, {
      method: "GET",
      headers: {
        Authorization: `bearer ${customerToken}`,
      },
    });
    const data = await res.json();
    if (res.ok) {
      setAddressDetails(data?.addresses);
      setIsLoading(false);
    }
  };
  //USEEFFECT
  useEffect(() => {
    getDetails();
    const cartDetailsGet = async () => {
      const res = await fetch(`${baseUrl}/api/user/cart-list`, {
        method: "GET",
        headers: {
          Authorization: `bearer ${customerToken}`,
        },
      });
      const data = await res.json();
      if (res.ok) {
        setCartdetails(data?.cart);

        setIsLoading(false);
      }
    };
    cartDetailsGet();
    getAddressDetails();
  }, [customerToken, updateState]);
  //CART ITEM DELETE
  const handleCartItemsDelete = async (id) => {
    const res = await fetch(`${baseUrl}/api/user/cart-delete/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${customerToken}`,
      },
    });

    if (res.ok) {
      window.alert("deleted");
      setUpdateState(!updateState);
    }
  };

  //INCREASE PRODUCT QUANTITY
  const updateQuantity = async (id, productId, qty, value, type) => {
    const formData = new FormData();
    formData.append("quantity", Number(qty) + value);
    formData.append("product_id", productId);
    formData.append("type", type);
    const res = await fetch(`${baseUrl}/api/user/cart-update/${id}`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${customerToken}`,
      },
      body: formData,
    });
    const resData = await res.json();
    if (res.ok) {
      console.log(resData);
      setUpdateState(!updateState);
    }
  };
  //GET CHARGE
  const getCharge = async (id) => {
    const res = await fetch(`${baseUrl}/api/user/delivery-charge/${id}`, {
      method: "GET",
      headers: {
        Authorization: `bearer ${customerToken}`,
      },
    });
    const data = await res.json();
    if (res.ok) {
      setCharge(data?.data);
      setIsLoading(false);
    }
  };

  //SUBTOTAL & TOTAL CALULATION
  const perSubTotals = cartdetails.map(
    (product) => product.price * product.quantity
  );

  const subTotal = perSubTotals.reduce(
    (accumulator, current) => accumulator + current,
    0
  );
  const Total = subTotal + Number(charge);
  //ALL HANDLE STATE FUNCTION
  const handleInputChange = (event) => {
    const value = event.target.value;
    setInputValue(value);
    
  };
  const handleCheckboxDeliveryChange = (event) => {
    setIsCheckedDelivery(event.target.checked);
    
  };
  const handleCheckboxPayment = (event) => {
    setIsCheckedPayemnt(event.target.checked);
  };
  //ORDER PLACE 
  const handleSubmit = async () => {
    const formData = new FormData();
    formData.append("payment_method_id", 1);
    formData.append("shipping_method_id", 1);
    formData.append("shipping_address_id", selectedAddress);
    formData.append("shipping_phone", inputValue);
    const res = await fetch(`${baseUrl}/api/user/order`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${customerToken}`,
      },
      body: formData,
    });
    
    if (res.ok) {
      alert("order placed!!!");
      setUpdateState(!updateState);
    }
  };

  return (
    <div>
      {isLoading ? (
        <Loading />
      ) : (
        <div className="container mx-auto mt-3 ">
          <div className="grid grid-cols-1 lg:grid-cols-12 lg:gap-2">
            <div className="p-3 lg:p-0 col-span-6">
              <div className="border mt-2 grid grid-cols-12  items-center rounded-lg px-3  py-2">
                <div className="col-span-12 lg:col-span-1">
                  <div class="w-10 h-10 border border-gray-500 bg-white rounded-full relative">
                    <p className="absolute top-2 left-2.5  text-black font-normal ">
                      01
                    </p>
                  </div>
                </div>
                <div className="col-span-12 lg:col-span-11">
                  <div>
                    <h4 className="text-base flex items-center m-0 gap-4">Customer Information <BsCheck2All size={22}className="font-bold"/></h4>
                   
                      <div className="flex gap-1">
                        
                      <p className="text-sm font-bold">{details?.name}</p>
                      <p className="text-sm font-bold">||</p>
                      <p className="text-sm font-bold">{details?.email}</p>
                      </div>
                      
                      
      
                  </div>
                </div>
              </div>
              
               <div className="mt-2">
               <div className="grid grid-cols-12 items-center rounded-lg px-3  py-2 border">
                  <div className="col-span-12 lg:col-span-1">
                    <div class="w-10 h-10 border border-gray-500 bg-white rounded-full relative">
                      <p className="absolute top-2 left-2.5  text-black font-normal">
                        02
                      </p>
                    </div>
                  </div>
                  <div className="col-span-12 lg:col-span-8 ">
                    <h4 className="text-base flex items-center m-0 gap-4">Shipping Information {selectedAddress && inputValue.length===11&&  <BsCheck2All size={22}className="font-bold"/>}</h4>
                    
                    {
                      selectedAddress && inputValue.length===11&&  <p className="text-sm font-bold">{selectedAddressValue?.country},{selectedAddressValue?.divison},{selectedAddressValue?.district},{selectedAddressValue?.sub_district},{selectedAddressValue?.address} <p>{inputValue}</p></p>
                    }
                  </div>
                  <div className="col-span-6 lg:col-span-3">
                    <button className=" cursor-pointer border border-gray-400 rounded-lg bg-white py-1 px-1 flex items-center justify-center gap-2 font-sm text-black ">
                      <span
                        onClick={() =>
                          setShowAddressAddModal(!showAddressAddModal)
                        }
                        className="font-sm text-sm"
                      >
                        Add Address
                      </span>
                      <AiOutlinePlus
                        size={12}
                        className="cursor-pointer"
                        onClick={() =>
                          setShowAddressAddModal(!showAddressAddModal)
                        }
                      />
                    </button>
                  </div>
                </div>
               </div>
              <div className=" px-3  py-2 items-center">
                <div className="lg:space-y-4 lg:px-4 lg:py-4">
                  <div>
                    <form class="w-full max-w-sm">
                      <label className="text-sm">
                        Shipping Phone Number
                      </label>
                      <div class="flex items-center border-b border-teal-500 py-2">
                        <BsTelephone/>
                        <input
                          class="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
                          type="number"
                          placeholder="Type shipping phone number"
                          onChange={handleInputChange}
                          // onChange={(event) => setState(event.target.value)}
                          value={inputValue}
                        />
                      </div>
                      {!inputValue && (
                        <p className="text-xs text-red-600">
                          Enter shipping phone number for confirm an order
                        </p>
                      )}
                    </form>
                  </div>
                  <p className="text-sm flex items-center gap-x-1 ">
                    {" "}
                    <BiSelectMultiple
                      className="text-yellow-400"
                      size={15}
                    />{" "}
                    Select at least one address if there is multiple address
                    available
                  </p>
                  {addressDetails &&
                    addressDetails?.map((userAddress, index) => (
                      <div className="">
                        <div
                          className={`bg-white ${
                            selectedAddress === userAddress?.id
                              ? " border"
                              : ""
                          } cursor-pointer grid grid-cols-12  px-4 py-4 text-sm border`}
                          onClick={() => {
                            getCharge(userAddress?.id);
                            setSelectedAddress(userAddress?.id);
                            setSelectedAddressValue({country:userAddress?.country_name,divison:userAddress?.division_name,district:userAddress?.district_name,sub_district:userAddress?.sub_district_name,address:userAddress?.address})
                          }}
                        >
                          <div className="col-span-11">
                            <p className="font-bold text-sm">
                              {" "}
                              {userAddress?.country_name},
                              {userAddress?.division_name},
                              {userAddress?.district_name},
                              {userAddress?.sub_district_name},
                              {userAddress?.address}
                            </p>
                            {selectedAddress === userAddress?.id && (
                            <p className="text-xs text-blue-800 font-bold flex items-center gap-x-1">
                              <BiNote className="text-red-500" size={15} />
                              {charge}tk delivery charger will be include in
                              your cart
                            </p>
                          )}
                          </div>
                          <div className="col-span-1">
                            {selectedAddress === userAddress?.id && (
                              <BsCheck2All size={22} />
                            )}
                          </div>
                        </div>
                      </div>
                    ))}
                </div>
              </div>

              <div className="border mt-2 grid grid-cols-12  items-center rounded-lg px-3  py-2">
                <div className="col-span-12 lg:col-span-1">
                  <div class="w-10 h-10 border border-gray-500 bg-white rounded-full relative">
                    <p className="absolute top-2 left-2.5 text-black font-normal">
                      03
                    </p>
                  </div>
                </div>
                <div className="col-span-12 lg:col-span-11">
                  <div>
                    <h4 className="text-base flex gap-4 m-0 items-center ">Delivery Methods {selectedAddress && inputValue.length===11&& <BsCheck2All size={22}className="font-bold"/>}</h4>
                    {selectedAddress && inputValue.length===11&&(
                      <div className="flex gap-2 ">
                        <input
                          type="checkbox"
                          checked={isCheckedDelivery}
                          onChange={handleCheckboxDeliveryChange}
                        />
                        <p className="text-sm">Home Delivery</p>
                      </div>
                    )}
                  </div>
                </div>
              </div>

              <div className="border mt-2 grid grid-cols-12  items-center rounded-lg px-3  py-2">
                <div className="col-span-12 lg:col-span-1">
                  <div class="w-10 h-10 border border-gray-500 bg-white rounded-full relative">
                    <p className="absolute top-2 left-2.5 text-black font-normal ">
                      04
                    </p>
                  </div>
                </div>
                <div className="col-span-12 lg:col-span-11">
                  <div>
                    <h4 className="text-base gap-4 flex m-0 items-center">Payment Methods {selectedAddress && inputValue.length===11&& <BsCheck2All size={22}className="font-bold"/>}</h4>
                    {selectedAddress && inputValue.length===11&& (
                      <div className="flex gap-2 ">
                        <input
                          type="checkbox"
                          checked={isCheckedPayment}
                          onChange={handleCheckboxPayment}
                        />
                        <p className="text-sm">Cash On Delivery</p>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
            <div className="col-span-12 lg:col-span-2 "></div>
            <div className="p-3 lg:p-0 rounded-lg bg-white col-span-3 border h-fit overflow-hidden">
              <div class=" lg:space-y-2  p-3 lg:p-5 ">
                <div className="border-b">
                <p class="text-lg ">Order Summary</p>
                
                </div>
                 {
                  cartdetails.length>0? <div>
                  {cartdetails?.map((product, index) => {
                   let str=product?.product?.name;
                   let arr=str.split('');
                   arr.splice(25);
                   let newStr=arr.join('');
                   return (
                     <div class="p-2 lg:p-0 flex gap-2  border-b  ">
                       <img
                         class=" h-16 w-16 object-cover object-center"
                         src={`${baseUrl}${product?.product?.thumbnail}`}
                         alt=""
                       />
                       <div class="flex w-full flex-col px-1 py-1 ">
                         <p class="font-bold text-sm">{newStr}....</p>
                         <p class="float-right text-gray-600 font-sm leading-2">
                           ৳ {product?.price}
                         </p>
                         <div class="flex gap-4 py-2 items-center leading-3">
                           <AiOutlineMinus
                             size={15}
                             className=" cursor-pointer"
                             onClick={() => {
                               updateQuantity(
                                 product.id,
                                 product.product_id,
                                 product.quantity,
                                 -1,
                                 "decrement"
                               );
                             }}
                           />
                           <span className="">{product?.quantity}</span>
                           <AiOutlinePlus
                             size={15}
                             className="cursor-pointer"
                             onClick={() => {
                               updateQuantity(
                                 product.id,
                                 product.product_id,
                                 product.quantity,
                                 1,
                                 "increment"
                               );
                             }}
                           />
                         </div>
                       </div>
                       <div>
                         <RxCross2
                           size={15}
                           className=" cursor-pointer"
                           onClick={() => handleCartItemsDelete(product.id)}
                         />
                       </div>
                     </div>
                     
                   );
                 })}
                  </div> :<div className="flex items-center justify-center">
                    <div>
                    <h4 className="text-center text-base ">Cart is empty</h4>
                    <p className="text-xs text-center ">No items added in cart</p>
                    <img src="https://woman.selopia.com/static/media/no-item.38f4347d752782f5bf7d.png" alt="" className="w-20 h-20  ms-3 mt-2"/>
                    </div>
                  </div>
                 }
                
                <div className="p-2 lg:p-0">
                  <div className="flex justify-between items-center">
                    <p className="text-sm font-normal">Subtotal</p>
                    <p className="text-sm font-bold">৳ {subTotal.toFixed(2)}</p>
                  </div>
                  <div className="flex justify-between items-center">
                    <p className="text-sm font-normal">Shipping</p>

                    {charge && charge ? (
                      <p className="text-sm font-bold">৳ {charge}</p>
                    ) : (
                      <p className="text-sm font-bold">৳ 0</p>
                    )}
                  </div>
                  <div className="flex justify-between items-center">
                    <p className="text-sm font-normal">Tax</p>
                    <p className="text-sm font-bold">৳ 0</p>
                  </div>
                  <div className="flex justify-between items-center">
                    <p className="text-sm font-bold">Total</p>
                    <p className="text-sm">
                      {Total && Total ? (
                        <p className="text-sm font-bold">৳ {Total}</p>
                      ) : (
                        <p className="text-sm font-bold">৳ 0</p>
                      )}{" "}
                    </p>
                  </div>
                </div>
              </div>
              <div className="p-5 lg:p-3">
              <button className=" w-3/4  mt-2 rounded-md lg:w-full bg-gray-900 px-2 py-1 opacity-80 font-medium text-white" onClick={handleSubmit}>
                Place Order
              </button>
              </div>
            </div>
          </div>
        </div>
      )}
      {showAddressAddModal && (
        <AddressModal
          show={showAddressAddModal}
          setShow={setShowAddressAddModal}
          baseUrl={baseUrl}
          customerToken={customerToken}
          updateState={updateState}
          setUpdateState={setUpdateState}
        ></AddressModal>
      )}
    </div>
  );
};

export default Test;
