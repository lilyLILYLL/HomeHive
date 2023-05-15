import React from "react";
import { PageTitlte } from "../../components/PageTitlte";
import { availableServices } from "../../data/services";
import { ServiceForm } from "../../components/ServiceForm";

export const ServiceHandyManPage = () => {
    return (
        <div>
            <PageTitlte title="Handyman Services" />
            {availableServices &&
                availableServices.HANDYMAN.map((service, index) => {
                    return (
                        <ServiceForm
                            service={service}
                            index={index}
                            key={index}
                        />
                    );
                })}
        </div>
    );
};
