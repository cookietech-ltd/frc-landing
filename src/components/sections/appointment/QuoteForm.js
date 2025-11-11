"use client";

import { useMemo, useState } from "react";
import apiClient from "@/libs/apiClient";

const QuoteForm = () => {
  const serviceOptions = useMemo(
    () => [
      "Planned Maintenance Program",
      "General Service",
      "Delivery",
      "Installation",
      "Relocation",
      "Extraction",
      "Used Equipment",
    ],
    []
  );

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    address: "",
    phone: "",
    gymName: "",
    members: "",
    equipments: "",
    serviceType: serviceOptions[0],
    contactTime: "",
  });

  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const validate = () => {
    const nextErrors = {};

    if (!formData.name.trim()) {
      nextErrors.name = "Name is required.";
    }

    if (!formData.email.trim()) {
      nextErrors.email = "Email is required.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      nextErrors.email = "Enter a valid email address.";
    }

    if (!formData.address.trim()) {
      nextErrors.address = "Address is required.";
    }

    if (!formData.phone.trim()) {
      nextErrors.phone = "Contact number is required.";
    }

    if (!formData.gymName.trim()) {
      nextErrors.gymName = "Gym name is required.";
    }

    if (!formData.members) {
      nextErrors.members = "Number of members is required.";
    } else if (Number(formData.members) <= 0) {
      nextErrors.members = "Members must be greater than zero.";
    }

    if (!formData.equipments) {
      nextErrors.equipments = "Number of equipments is required.";
    } else if (Number(formData.equipments) < 0) {
      nextErrors.equipments = "Equipments cannot be negative.";
    }

    if (!formData.serviceType) {
      nextErrors.serviceType = "Select a service type.";
    }

    if (!formData.contactTime.trim()) {
      nextErrors.contactTime = "Preferred contact time is required.";
    }

    return nextErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const validationErrors = validate();
    if (Object.keys(validationErrors).length) {
      setErrors(validationErrors);
      setStatus("Please fix the highlighted fields.");
      return;
    }

    setErrors({});
    setIsSubmitting(true);
    setStatus("Sending...");

    try {
      const payload = {
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        address: formData.address,
        gym_name: formData.gymName,
        members: Number(formData.members),
        equipments: Number(formData.equipments),
        service_type: formData.serviceType,
        contact_time: formData.contactTime,
      };

      await apiClient.createVisitRequest(payload);

      setStatus("Thank you! Your request has been submitted successfully. We'll contact you soon.");

      setFormData({
        name: "",
        email: "",
        address: "",
        phone: "",
        gymName: "",
        members: "",
        equipments: "",
        serviceType: serviceOptions[0],
        contactTime: "",
      });
    } catch (error) {
      if (error.errors) {
        const backendErrors = {};
        Object.keys(error.errors).forEach((key) => {
          const fieldMap = {
            gym_name: "gymName",
            service_type: "serviceType",
            contact_time: "contactTime",
          };
          const frontendKey = fieldMap[key] || key;
          backendErrors[frontendKey] = error.errors[key];
        });
        setErrors(backendErrors);
        setStatus("Please fix the highlighted fields.");
      } else {
        setStatus(error.message || "Failed to submit request. Please try again.");
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="ltn__appointment-area pb-120">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="ltn__appointment-inner">
              <form id="quote-form" onSubmit={(e) => handleSubmit(e)}>
                <h6>Personal Information</h6>
                <div className="row">
                  <div className="col-md-6">
                    <div className="input-item input-item-name ltn__custom-icon">
                      <input
                        type="text"
                        name="name"
                        placeholder="Full name"
                        value={formData.name}
                        onChange={(e) => handleChange(e)}
                        aria-invalid={Boolean(errors.name)}
                        aria-describedby={errors.name ? "quote-name-error" : undefined}
                        required
                      />
                      {errors.name ? (
                        <small id="quote-name-error" className="text-danger">
                          {errors.name}
                        </small>
                      ) : null}
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="input-item input-item-email ltn__custom-icon">
                      <input
                        type="email"
                        name="email"
                        placeholder="Email address"
                        value={formData.email}
                        onChange={(e) => handleChange(e)}
                        aria-invalid={Boolean(errors.email)}
                        aria-describedby={errors.email ? "quote-email-error" : undefined}
                        required
                      />
                      {errors.email ? (
                        <small id="quote-email-error" className="text-danger">
                          {errors.email}
                        </small>
                      ) : null}
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="input-item input-item-phone ltn__custom-icon">
                      <input
                        type="tel"
                        name="phone"
                        placeholder="Phone number"
                        value={formData.phone}
                        onChange={(e) => handleChange(e)}
                        aria-invalid={Boolean(errors.phone)}
                        aria-describedby={errors.phone ? "quote-phone-error" : undefined}
                        required
                      />
                      {errors.phone ? (
                        <small id="quote-phone-error" className="text-danger">
                          {errors.phone}
                        </small>
                      ) : null}
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="input-item input-item-name ltn__custom-icon">
                      <input
                        type="text"
                        name="gymName"
                        placeholder="Gym or organization name"
                        value={formData.gymName}
                        onChange={(e) => handleChange(e)}
                        aria-invalid={Boolean(errors.gymName)}
                        aria-describedby={errors.gymName ? "quote-gym-error" : undefined}
                        required
                      />
                      {errors.gymName ? (
                        <small id="quote-gym-error" className="text-danger">
                          {errors.gymName}
                        </small>
                      ) : null}
                    </div>
                  </div>
                </div>

                <h6>Facility Information</h6>
                <div className="row">
                  <div className="col-12">
                    <div className="input-item input-item-textarea">
                      <input
                        type="text"
                        name="address"
                        placeholder="Facility address"
                        value={formData.address}
                        onChange={(e) => handleChange(e)}
                        aria-invalid={Boolean(errors.address)}
                        aria-describedby={errors.address ? "quote-address-error" : undefined}
                        required
                      />
                      {errors.address ? (
                        <small id="quote-address-error" className="text-danger">
                          {errors.address}
                        </small>
                      ) : null}
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="input-item input-item-number input-item-members ltn__custom-icon">
                      <input
                        type="number"
                        name="members"
                        placeholder="No. of members"
                        value={formData.members}
                        onChange={(e) => handleChange(e)}
                        min="1"
                        aria-invalid={Boolean(errors.members)}
                        aria-describedby={errors.members ? "quote-members-error" : undefined}
                        required
                      />
                      {errors.members ? (
                        <small id="quote-members-error" className="text-danger">
                          {errors.members}
                        </small>
                      ) : null}
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="input-item input-item-number input-item-equipment ltn__custom-icon">
                      <input
                        type="number"
                        name="equipments"
                        placeholder="No. of equipments"
                        value={formData.equipments}
                        onChange={(e) => handleChange(e)}
                        min="0"
                        aria-invalid={Boolean(errors.equipments)}
                        aria-describedby={errors.equipments ? "quote-equipments-error" : undefined}
                        required
                      />
                      {errors.equipments ? (
                        <small id="quote-equipments-error" className="text-danger">
                          {errors.equipments}
                        </small>
                      ) : null}
                    </div>
                  </div>
                </div>

                <h6>Service Information</h6>
                <div className="row">
                  <div className="col-12">
                    <div className="input-item">
                      <select
                        name="serviceType"
                        className="nice-select"
                        value={formData.serviceType}
                        onChange={(e) => handleChange(e)}
                        aria-invalid={Boolean(errors.serviceType)}
                        aria-describedby={errors.serviceType ? "quote-service-error" : undefined}
                        required
                      >
                        {serviceOptions.map((option) => (
                          <option key={option} value={option}>
                            {option}
                          </option>
                        ))}
                      </select>
                      {errors.serviceType ? (
                        <small id="quote-service-error" className="text-danger d-block mt-5">
                          {errors.serviceType}
                        </small>
                      ) : null}
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-12">
                    <div className="input-item input-item-textarea ltn__custom-icon">
                      <textarea
                        name="contactTime"
                        placeholder="Preferred contact time or availability"
                        value={formData.contactTime}
                        onChange={(e) => handleChange(e)}
                        rows={4}
                        aria-invalid={Boolean(errors.contactTime)}
                        aria-describedby={
                          errors.contactTime ? "quote-contact-time-error" : undefined
                        }
                        required
                      />
                      {errors.contactTime ? (
                        <small id="quote-contact-time-error" className="text-danger">
                          {errors.contactTime}
                        </small>
                      ) : null}
                    </div>
                  </div>
                </div>

                <div className="btn-wrapper text-center mt-0">
                  <button
                    className="btn theme-btn-1 btn-effect-1 text-uppercase"
                    type="submit"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Submitting..." : "Submit Now"}
                  </button>
                </div>
                {status ? (
                  <p
                    className="form-messege mb-0 mt-20"
                    style={{
                      color: status?.includes("Failed") || status?.includes("Please fix") ? "#ff4d4f" : "#1d9f40",
                    }}
                  >
                    {status}
                  </p>
                ) : (
                  ""
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuoteForm;


