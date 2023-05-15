import React from "react";
import { PageTitlte } from "../../components/PageTitlte";
import "../../scss/ServicesForm.scss";
import { ServiceForm } from "../../components/ServiceForm";
import { availableServices } from "../../data/services";
export const ServiceFenceInstallationPage = () => {
    return (
        <div>
            <PageTitlte title={"Fence Installation"} />
            {availableServices.FENCE_INSTALLATION.map((item, index) => {
                return <ServiceForm service={item} index={index} key={index} />;
            })}
        </div>
    );
};
