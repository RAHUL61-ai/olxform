import { Check } from "lucide-react"; 
import React, { useState } from "react";
import { FaCheck } from 'react-icons/fa';
import { FaCamera } from "react-icons/fa";

const FourRowTable = () => {


  const [activeType, setActiveType] = useState("Farm House");

  const [bhk,setbhk]=useState("1");

  const[bathrooms,setbathrooms]=useState("1");

  const[furnising,setfurnising]=useState("Furnished");

  const[project,setproject]=useState("New Launch");

  const[list,setlist]=useState("");

  const[park,setpark] =useState("");
  








  const [selected, setSelected] = useState('');
  const [showOptions, setShowOptions] = useState(false);

  const options = [
    'East', 'North', 'North-East', 'North-West',
    'South', 'South-East', 'South-West', 'West'
  ];

  const handleSelect = (option) => {
    setSelected(option);
    setShowOptions(false);
  };





  const [alue, setalue] = useState('');



  const [valum, setValum] = useState('');
  const isInvalidm = valum.length > 0 && valum.length < 10;







  const [valud, setValud] = useState('');
  const isInvalidd = valud.length > 0 && valud.length < 10;




  const [price, setPrice] = useState('');

  const formatIndianPrice = (value) => {
    // Remove all non-digit chars
    const numeric = value.replace(/[^0-9]/g, '');
    if (numeric.length <= 3) return numeric;

    const lastThree = numeric.slice(-3);
    const rest = numeric.slice(0, -3);
    const formattedRest = rest.replace(/\B(?=(\d{2})+(?!\d))/g, ",");
    return formattedRest + "," + lastThree;
  };

  const handleChange = (e) => {
    const raw = e.target.value;
    const formatted = formatIndianPrice(raw);
    setPrice(formatted);
  };







  const [images, setImages] = useState(Array(20).fill(null));

  const handleUpload = (e, index) => {
    const file = e.target.files[0];
    if (!file) return;

    const newImages = [...images];
    newImages[index] = URL.createObjectURL(file);
    setImages(newImages);
  };

  const handleRemove = (index) => {
    const newImages = [...images];
    newImages[index] = null;
    setImages(newImages);
  };




  const [selectedTab, setSelectedTab] = useState("list");
  const [selectedState, setSelectedState] = useState("");
  const [error, setError] = useState(false);








  const indianStates = [
    "Andhra Pradesh", "Arunachal Pradesh", "Assam", "Bihar", "Chhattisgarh", "Goa",
    "Gujarat", "Haryana", "Himachal Pradesh", "Jharkhand", "Karnataka", "Kerala",
    "Madhya Pradesh", "Maharashtra", "Manipur", "Meghalaya", "Mizoram", "Nagaland",
    "Odisha", "Punjab", "Rajasthan", "Sikkim", "Tamil Nadu", "Telangana", "Tripura",
    "Uttar Pradesh", "Uttarakhand", "West Bengal", "Andaman and Nicobar Islands",
    "Chandigarh", "Dadra and Nagar Haveli and Daman and Diu", "Delhi", "Jammu and Kashmir",
    "Ladakh", "Lakshadweep", "Puducherry"
  ];


  

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [image, setImage] = useState(null);
  const [errors, setErrors] = useState(false);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(URL.createObjectURL(file));
    }
  };

  const handleSubmit = () => {
    if (!name.trim()) {
      setError(true);
    } else {
      alert(`Name: ${name}, Phone: ${phone}`);
    }
  };







   const [value, setValue] = useState("");
    const [touched, setTouched] = useState(false);
  
    const maxVal = 99999999;
    const isInvalid = Number(value) > maxVal;
    const isValid = value && !isInvalid;
  


  

    const [values, setValues] = useState("");
     const [toucheds, setToucheds] = useState(false);
   
     const maxVale = 99999999;
     const isInvalids = Number(values) > maxVale;
     const isValids = values && !isInvalid;



     const [valuesd, setValuesd] = useState("");
     const [touchedsd, setTouchedsd] = useState(false);
   
     const maxValed = 99999999;
     const isInvalidsd = Number(valuesd) > maxValed;
     const isValidsd = valuesd && !isInvalid;






     const [valuesdf, setValuesdf] = useState("");
     const [touchedsdf, setTouchedsdf] = useState(false);
   
     const maxValedf = 200;
     const isInvalidsdf = Number(valuesdf) > maxValedf;
     const isValidsdf = valuesdf && !isInvalid;
    



     
     const [valuesdfn, setValuesdfn] = useState("");
     const [touchedsdfn, setTouchedsdfn] = useState(false);
   
     const maxValedfn = 200;
     const isInvalidsdfn = Number(valuesdfn) > maxValedfn;
     const isValidsdfn = valuesdfn && !isInvalid;
    







     const parks=[
      "1",
      "2",
      "3",
      "4",
      "4+"
    ]

  const lists=[
    "Builder",
    "Dealer",
    "Owner"
  ]

  const projects=[
   " NewLaunch",
   "Ready to Move",
   "Under Construction"

  ]

  const furnis=[
    "Furnished",
    "semi-Furnished",
    "unfernished"
  ]

  const baths=[
    "1",
    "2",
    "3",
    "4",
    "4+"
  ]
  const bhks=[
    "1",
    "2",
    "3",
    "4",
    "4+"
  ]

  const types = [
    "Flats / Apartments",
    "Independent / Builder Floors",
    "Farm House",
    "House & Villa",
  ];

  return (
    <div className="flex justify-center items-center min-h-screen ">
      <div className="w-[1000px] h-[3518px] border border-gray-500 mt-20 mb-20">
        <div className="h-[150px] border-b pl-4 pt-4">

        <h2 class="font-bold text-[20px]">SELECTED CATEGORY</h2>
    <br></br>
    

    <p class="text-gray-400 text-[13px]">Properties  / For Sale:Shops & Offices  &nbsp; &nbsp;<a href="#" class="text-blue-500 underline font-bold text-[16px]">Change</a></p> 

          
        </div>
        <div className="h-[1750px] border-b">
        
        
        <h2 class="font-bold text-[20px] pl-6 pt-4">INCLUDE SOME DETAILS</h2>

        <div className="p-4 pl-6">
      <label className="font-medium mb-2 block">Type <span className="text-red-500">*</span></label>
      <div className="flex flex-wrap gap-2">
        {types.map((type) => (
          <button
            key={type}
            onClick={() => setActiveType(type)}
            className={`px-4 py-2 border rounded-md text-sm 
              ${activeType === type
                ? "bg-blue-100 border-black-800 text-black"
                : "bg-white border-gray-400 hover:bg-gray-100"}`}
          >
            {type}
          </button>
        ))}
      </div>
    </div>


    <div className="p-4 pl-6">
      <label className="font-medium mb-2 block">BHK <span className="text-red-500">*</span></label>
      <div className="flex flex-wrap gap-2">
        {bhks.map((bh) => (
          <button
            key={bh}
            onClick={() => setbhk(bh)}
            className={`px-8 py-2 border rounded-md text-sm 
              ${bhk === bh
                ? "bg-blue-100 border-black-800 text-black"
                : "bg-white border-gray-400 hover:bg-gray-100"}`}
          >
            {bh}
          </button>
        ))}
      </div>
    </div>





    <div className="p-4 pl-6">
      <label className="font-medium mb-2 block">Bathrooms <span className="text-red-500">*</span></label>
      <div className="flex flex-wrap gap-2">
        {baths.map((bath) => (
          <button
            key={bath}
            onClick={() => setbathrooms(bath)}
            className={`px-8 py-2 border rounded-md text-sm 
              ${bathrooms === bath
                ? "bg-blue-100 border-black-800 text-black"
                : "bg-white border-gray-400 hover:bg-gray-100"}`}
          >
            {bath}
          </button>
        ))}
      </div>
    </div>






    <div className="p-4 pl-6">
      <label className="font-medium mb-2 block">Furnising <span className="text-red-500">*</span></label>
      <div className="flex flex-wrap gap-2">
        {furnis.map((furn) => (
          <button
            key={furn}
            onClick={() => setfurnising(furn)}
            className={`px-4 py-2 border rounded-md text-sm 
              ${furnising === furn
                ? "bg-blue-100 border-black-800 text-black"
                : "bg-white border-gray-400 hover:bg-gray-100"}`}
          >
            {furn}
          </button>
        ))}
      </div>
    </div>





    <div className="p-4 pl-6">
      <label className="font-medium mb-2 block">Project-status <span className="text-red-500">*</span></label>
      <div className="flex flex-wrap gap-2">
        {projects.map((pro) => (
          <button
            key={pro}
            onClick={() => setproject(pro)}
            className={`px-4 py-2 border rounded-md text-sm 
              ${project === pro
                ? "bg-blue-100 border-black-800 text-black"
                : "bg-white border-gray-400 hover:bg-gray-100"}`}
          >
            {pro}
          </button>
        ))}
      </div>
    </div>








    <div className="p-4 pl-6">
      <label className="font-medium mb-2 block">List <span className="text-red-500">*</span></label>
      <div className="flex flex-wrap gap-2">
        {lists.map((lis) => (
          <button
            key={lis}
            onClick={() => setlist(lis)}
            className={`px-4 py-2 border rounded-md text-sm 
              ${list === lis
                ? "bg-blue-100 border-black-800 text-black"
                : "bg-white border-gray-400 hover:bg-gray-100"}`}
          >
            {lis}
          </button>
        ))}
      </div>
    </div>








 <div className="p-4 pl-6 max-w-md">
      <label className="font-medium block mb-1">
        Super Builtup area sqft <span className="text-red-500">*</span>
      </label>
      <div className="relative">
        <input
          type="text"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          onFocus={() => setTouched(true)}
          className={`w-full px-4 py-2 border rounded-md outline-none transition ${
            !touched
              ? "border-gray-400"
              : isInvalid
              ? "border-red-800"
              : isValid
              ? "border-black-600"
              : "border-blue-900"
          }`}
        />
        {isValid && (
          <Check className="text-blue-500 w-5 h-5 absolute top-1/2 right-3 transform -translate-y-1/2" />
        )}
      </div>
      {isInvalid && (
        <p className="text-red-500 text-sm mt-1">
          Super builtup area square has a maximum value 99999999
        </p>
      )}
    </div>






    <div className="p-4 pl-6 max-w-md">
      <label className="font-medium block mb-1">
        Carpet area sqft <span className="text-red-500">*</span>
      </label>
      <div className="relative">
        <input
          type="text"
          value={values}
          onChange={(e) => setValues(e.target.value)}
          onFocus={() => setToucheds(true)}
          className={`w-full px-4 py-2 border rounded-md outline-none transition ${
            !toucheds
              ? "border-gray-400"
              : isInvalids
              ? "border-red-800"
              : isValids
              ? "border-black-600"
              : "border-blue-900"
          }`}
        />
        {isValids && (
          <Check className="text-blue-500 w-5 h-5 absolute top-1/2 right-3 transform -translate-y-1/2" />
        )}
      </div>
      {isInvalids && (
        <p className="text-red-500 text-sm mt-1">
          Super builtup area square has a maximum value 99999999
        </p>
      )}
    </div>










    <div className="p-4 pl-6 max-w-md">
      <label className="font-medium block mb-1">
      Maintenance (Monthly) <span className="text-red-500">*</span>
      </label>
      <div className="relative">
        <input
          type="text"
          value={valuesd}
          onChange={(e) => setValuesd(e.target.value)}
          onFocus={() => setTouchedsd(true)}
          className={`w-full px-4 py-2 border rounded-md outline-none transition ${
            !touchedsd
              ? "border-gray-400"
              : isInvalidsd
              ? "border-red-800"
              : isValidsd
              ? "border-black-600"
              : "border-blue-900"
          }`}
        />
        {isValidsd && (
          <Check className="text-blue-500 w-5 h-5 absolute top-1/2 right-3 transform -translate-y-1/2" />
        )}
      </div>
      {isInvalidsd && (
        <p className="text-red-500 text-sm mt-1">
          Super builtup area square has a maximum value 99999999
        </p>
      )}
    </div>










    <div className="p-4 pl-6 max-w-md">
      <label className="font-medium block mb-1">
      Total Floor <span className="text-red-500">*</span>
      </label>
      <div className="relative">
        <input
          type="text"
          value={valuesdf}
          onChange={(e) => setValuesdf(e.target.value)}
          onFocus={() => setTouchedsdf(true)}
          className={`w-full px-4 py-2 border rounded-md outline-none transition ${
            !touchedsdf
              ? "border-gray-400"
              : isInvalidsdf
              ? "border-red-800"
              : isValidsdf
              ? "border-black-600"
              : "border-blue-900"
          }`}
        />
        {isValidsdf && (
          <Check className="text-blue-500 w-5 h-5 absolute top-1/2 right-3 transform -translate-y-1/2" />
        )}
      </div>
      {isInvalidsdf && (
        <p className="text-red-500 text-sm mt-1">
          Super builtup area square has a maximum value 200
        </p>
      )}
    </div>






    <div className="p-4 pl-6 max-w-md">
      <label className="font-medium block mb-1">
       Floor No <span className="text-red-500">*</span>
      </label>
      <div className="relative">
        <input
          type="text"
          value={valuesdfn}
          onChange={(e) => setValuesdfn(e.target.value)}
          onFocus={() => setTouchedsdfn(true)}
          className={`w-full px-4 py-2 border rounded-md outline-none transition ${
            !touchedsdfn
              ? "border-gray-400"
              : isInvalidsdfn
              ? "border-red-800"
              : isValidsdfn
              ? "border-black-600"
              : "border-blue-900"
          }`}
        />
        {isValidsdfn && (
          <Check className="text-blue-500 w-5 h-5 absolute top-1/2 right-3 transform -translate-y-1/2" />
        )}
      </div>
      {isInvalidsdfn && (
        <p className="text-red-500 text-sm mt-1">
          Super builtup area square has a maximum value 200
        </p>
      )}
    </div>




    <div className="p-4 pl-6">
      <label className="font-medium mb-2 block">Car Parking <span className="text-red-500">*</span></label>
      <div className="flex flex-wrap gap-2">
        {parks.map((par) => (
          <button
            key={par}
            onClick={() => setpark(par)}
            className={`px-8 py-2 border rounded-md text-sm 
              ${park === par
                ? "bg-blue-100 border-black-800 text-black"
                : "bg-white border-gray-400 hover:bg-gray-100"}`}
          >
            {par}
          </button>
        ))}
      </div>
    </div>








    <div className=" w-100 mt-4  ml-[28px]">
      <label className="block text-sm font-semibold mb-1">Facing</label>
      <div
        onClick={() => setShowOptions(!showOptions)}
        className={`border px-4 py-2 rounded cursor-pointer flex justify-between items-center transition-all duration-300 ${
          selected ? 'border-green-500' : 'border-gray-400'
        } ${showOptions ? 'ring-2 ring-blue-400 shadow-md' : ''}`}
      >
        <span>{selected || 'Select Facing'}</span>
        {selected && <FaCheck className="text-green-600" />}
      </div>

      {showOptions && (
        <ul className=" z-10 bg-white border w-full mt-1 rounded shadow-md max-h-48 overflow-y-auto animate-fade-in">
          {options.map((option) => (
            <li
              key={option}
              onClick={() => handleSelect(option)}
              className="px-4 py-2 hover:bg-blue-100 cursor-pointer"
            >
              {option}
            </li>
          ))}
        </ul>
      )}
    </div>






    <div className="w-[400px] ml-[30px] mt-[30px]">
      <label className="block text-sm font-semibold text-black-800 mb-1">Project Name</label>
      <input
        type="text"
        maxLength={70}
        value={alue}
        onChange={(e) => setalue(e.target.value)}
        className="w-full border border-blue-400 rounded px-3 py-2 outline-none focus:ring-2 focus:ring-blue-400"
      />
      <div className="text-right text-sm text-gray-500 mt-1">
        {alue.length} / 70
      </div>
    </div>






    <div className="w-[400px] ml-[30px]">
      <label className="block text-sm font-semibold text-black-800 mb-1">Title Name</label>
      <input
        type="text"
        maxLength={70}
        value={valum}
        onChange={(e) => setValum(e.target.value)}
        className={`w-full border rounded px-3 py-2 outline-none transition-all duration-200 ${
          isInvalidm ? 'border-red-500 focus:ring-red-400' : 'border-blue-800 focus:ring-blue-600'
        } focus:ring-2`}
      />
      <div className="text-right text-sm text-gray-500 mt-1">
        {valum.length} / 70
      </div>
      {isInvalidm && (
        <p className="text-red-600 text-sm ">Minimum 10 characters hone chahiye</p>
      )}
    </div>











    <div className="w-[400px]  ml-[30px]">
      <label className="block text-sm font-semibold text-black-800 mb-1">Description</label>
      <input
        type="text"
        maxLength={4000}
        value={valud}
        onChange={(e) => setValud(e.target.value)}
        className={`w-full border rounded px-3 py-10 outline-none transition-all duration-200 ${
          isInvalidd ? 'border-red-500 focus:ring-red-400' : 'border-blue-800 focus:ring-blue-600'
        } focus:ring-2`}
      />
      <div className="text-right text-sm text-gray-500 mt-1">
        {valud.length} / 4000
      </div>
      {isInvalidd && (
        <p className="text-red-600 text-sm mt-0">Minimum 10 characters hone chahiye</p>
      )}
    </div>








        
        </div>

        <div className="h-40 border-b flex ">





        <div className="w-[400px] ml-[29px] mt-[20px]">
      <h2 className="font-bold text-lg mb-2">SET A PRICE</h2>
      <label className="text-sm font-medium text-gray-700 mb-1 block">Price<span className="text-red-500">*</span></label>

      <div className="flex items-center border border-blue-800 rounded px-2 focus-within:ring-2 focus-within:ring-blue-500">
        <span className="text-gray-600 text-lg">₹</span>
        <input
          type="text"
          value={price}
          onChange={handleChange}
          className="w-full px-3 py-2 outline-none text-black text-base bg-transparent"
        />
      </div>
    </div>





        </div>
        <div className="h-159   ">


        <div className="max-w-md mx-auto ml-[25px] mt-[20px]">
      <h2 className="text-lg font-bold mb-4">UPLOAD UP TO 20 PHOTOS</h2>
      <div className="grid grid-cols-4 gap-2">
        {images.map((img, index) => (
          <div
            key={index}
            className={`relative w-24 h-24 border-2 overflow-hidden flex items-center justify-center ${
              index === 0 ? 'border-black text-black' : 'border-gray-400 text-gray-500'
            }`}
          >
            {img ? (
              <>
                <img src={img} alt={`img-${index}`} className="w-full h-full object-cover" />
                <button
                  onClick={() => handleRemove(index)}
                  className="absolute top-0 right-0 bg-white text-red-600 text-xs font-bold px-1"
                >
                  ❌
                </button>
              </>
            ) : (
              <label className="text-center text-xs cursor-pointer w-full h-full flex flex-col items-center justify-center">
                <img
                  src="https://img.icons8.com/ios/50/000000/add-image.png"
                  className="w-6 h-6 mx-auto mb-1"
                  alt="Add"
                />
                Add Photo
                <input
                  type="file"
                  accept="image/*"
                  onChange={(e) => handleUpload(e, index)}
                  className="absolute inset-0 opacity-0 cursor-pointer"
                />
              </label>
            )}
          </div>
        ))}
      </div>
    </div>





    <div className="h-70 border b flex items-center justify-center mt-20 ">



    <div className="max-w-md mx-auto p-4 ml-[50px]">
      <h2 className="text-xl font-bold mb-4">CONFIRM YOUR LOCATION</h2>

    
      <div className="flex border-b-2 mb-4">
        <button
          className={`w-1/2 text-center pb-2 ${
            selectedTab === "list"
              ? "border-b-4 border-blue-600 font-semibold"
              : "text-gray-600"
          }`}
          onClick={() => setSelectedTab("list")}
        >
          LIST
        </button>
        <button
          className={`w-1/2 text-center pb-2 ${
            selectedTab === "current"
              ? "border-b-4 border-blue-600 font-semibold"
              : "text-gray-600"
          }`}
          onClick={() => setSelectedTab("current")}
        >
          CURRENT LOCATION
        </button>
      </div>

      
      {selectedTab === "list" && (
        <>
          <label className="block mb-1 font-medium">State *</label>
          <select
            className={`w-full border p-2 rounded ${
              error && !selectedState ? "border-red-500" : ""
            }`}
            value={selectedState}
            onChange={(e) => {
              setSelectedState(e.target.value);
              setError(false);
            }}
          >
            <option value="">Select a State</option>
            {indianStates.map((state, i) => (
              <option key={i} value={state}>
                {state}
              </option>
            ))}
          </select>
          {error && !selectedState && (
            <p className="text-red-600 text-sm mt-1">This field is mandatory</p>
          )}
      
        </>
      )}

    
      {selectedTab === "current" && (
        <p className="text-gray-600">Feature coming soon for current location 📍</p>
      )}
    </div>




    </div>







       
    <div className="h-50  flex items-center justify-center mt-20">







    <div className="max-w-md mx-auto p-6 font-sans mt-4 ml-4">
      <h2 className="text-xl font-bold mb-4">REVIEW YOUR DETAILS</h2>

      
      <div className="flex items-center gap-5 mb-6">
        
        <div className="relative w-32 h-32">
          <div className="w-32 h-32 rounded-full bg-sky-400 flex items-center justify-center overflow-hidden">
            {image ? (
              <img
                src={image}
                alt="Profile"
                className="w-full h-full object-cover rounded-full"
              />
            ) : (
              <FaCamera className="text-white text-3xl" />
            )}
          </div>
          <input
            type="file"
            onChange={handleImageChange}
            className="absolute inset-0 opacity-0 cursor-pointer"
            accept="image/*"
          />
        </div>

        
        <div className="flex-1">
          <label className="font-semibold block mb-1 text-sm text-gray-700">
            Name
          </label>
          <input
            type="text"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
              setError(false);
            }}
            className={`w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 ${
              errors && !name ? "border-red-500" : "border-gray-300"
            }`}
            placeholder="Enter your name"
          />
          <div className="text-right text-xs text-gray-400 mt-1">
            {name.length} / 30
          </div>
          {errors && !name && (
            <p className="text-red-500 text-sm mt-1">This field is mandatory</p>
          )}
        </div>
      </div>

      
      <h3 className="font-semibold text-md mb-1">Let's verify your account</h3>
      <p className="text-sm text-gray-700 mb-3">
        We will send you a confirmation code by SMS on the next step.
      </p>

      <label className="block mb-1 text-sm font-medium text-gray-700">
        Mobile Phone Number *
      </label>
      <div className="flex">
        <span className="inline-flex items-center px-3 bg-gray-100 border border-r-0 border-gray-300 text-gray-600 rounded-l">
          +91
        </span>
        <input
          type="tel"
          className="w-full border border-gray-300 rounded-r px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          placeholder="Enter mobile number"
        />
      </div>








    </div>













   
        </div>
        
        

        <div className="h-30 border b  mt-30 ">



<button className="mt-3 bg-sky-400 text-white px-8 py-4 rounded hover:bg-sky-500 ml-8 mt-8">
Post
</button>



</div>
        

      </div>
    </div>
    </div>
  );
};

export default FourRowTable;