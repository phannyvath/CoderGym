import React, { useState } from "react";
import { TestimonialsData } from "../../mockData/data";
import Slider from "react-slick";
import { FaStar } from "react-icons/fa"; // Font Awesome for stars
import Modal from "react-modal"; // For modal

Modal.setAppElement("#root"); // Important for accessibility

const Testimonials = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedTestimonial, setSelectedTestimonial] = useState(null);

  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplaySpeed: 200,
    cssEase: "linear",
    pauseOnHover: true,
    pauseOnFocus: true,
    responsive: [
      {
        breakpoint: 10000,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 1034,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  };

  // Function to render stars
  const renderStars = (rating) => {
    return [...Array(5)].map((star, index) => (
      <FaStar
        key={index}
        className={`h-5 w-5 ${
          index < rating ? "text-primary" : "text-gray-300"
        }`}
      />
    ));
  };

  // Function to handle opening the modal
  const openModal = (testimonial) => {
    setSelectedTestimonial(testimonial);
    setModalIsOpen(true);
  };

  // Function to handle closing the modal
  const closeModal = () => {
    setModalIsOpen(false);
    setSelectedTestimonial(null);
  };

  return (
    <div className="py-14 mb-10 bg-gray-50">
      <div className="container mx-auto">
        {/* Header Section */}
        <div className="text-left mb-10 max-w-[500px] space-y-2 mr-auto">
          <h1 className="text-4xl font-bold text-primary">
            What are our Customers Saying?
          </h1>
        </div>
        {/* Testimonials Card */}
        <div>
          <Slider {...settings}>
            {TestimonialsData.map((data) => (
              <div
                key={data.id}
                className="p-5 bg-white shadow-md rounded-lg cursor-pointer hover:bg-orange-100 hover:scale-110 duration-300 "
                onClick={() => openModal(data)} // Open modal on click
              >
                <div className="mb-4">
                  <img
                    src={data.img}
                    alt={data.name}
                    className="rounded-full w-16 h-16 mx-auto mb-4"
                  />
                </div>
                <div className="text-center">
                  <p className="font-bold text-lg">{data.name}</p>
                  <div className="flex justify-center mt-2 mb-4 ">
                    {renderStars(data.rating)}
                  </div>
                  {/* Truncate text and show modal on click */}
                  <p className="text-gray-600">
                    {data.text.length > 100
                      ? `${data.text.substring(0, 100)}...`
                      : data.text}
                  </p>
                </div>
              </div>
            ))}
          </Slider>
        </div>
        {/* Modal for showing full testimonial */}
        <Modal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          contentLabel="Testimonial Modal"
          className="modal bg-white p-8 max-w-lg mx-auto rounded-lg shadow-lg"
          overlayClassName="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center"
        >
          {selectedTestimonial && (
            <div className="text-center">
              {/* Modal Image */}
              <div className="mb-4">
                <img
                  src={selectedTestimonial.img}
                  alt={selectedTestimonial.name}
                  className="rounded-full w-24 h-24 mx-auto mb-4"
                />
              </div>
              {/* Modal Title */}
              <h2 className="text-2xl font-bold mb-4 text-primary">
                {selectedTestimonial.name}
              </h2>
              {/* Star Rating */}
              <div className="flex justify-center mb-4">
                {renderStars(selectedTestimonial.rating)}
              </div>
              {/* Full Testimonial Text */}
              <p className="text-gray-700">{selectedTestimonial.text}</p>
              {/* Close Button */}
              <button
                onClick={closeModal}
                className="mt-6 py-2 px-4 bg-primary text-white rounded-lg"
              >
                Close
              </button>
            </div>
          )}
        </Modal>
      </div>
    </div>
  );
};

export default Testimonials;
