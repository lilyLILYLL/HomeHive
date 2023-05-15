import React from "react";
import "../../scss/ServicesForm.scss";
import { availableServices } from "../../data/services.js";
import { ServiceForm } from "../../components/ServiceForm";
import { PageTitlte } from "../../components/PageTitlte";
export const ServiceLawnMaintenancePage = () => {
    return (
        <div>
            <PageTitlte title={"Lawn Maintenance"} />
            {availableServices.LAWN_MAINTENANCE.map((item, index) => {
                return <ServiceForm service={item} index={index} key={index} />;
            })}
        </div>
    );
};
