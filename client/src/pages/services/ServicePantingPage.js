import React from "react";
import "../../scss/ServicesForm.scss";
import { availableServices } from "../../data/services.js";
import { ServiceForm } from "../../components/ServiceForm";
import { PageTitlte } from "../../components/PageTitlte";
export const ServicePantingPage = () => {
    return (
        <div>
            <PageTitlte title={"Painting"} />
            {availableServices.PAINTING.map((item, index) => {
                return <ServiceForm service={item} index={index} key={index} />;
            })}
        </div>
    );
};
