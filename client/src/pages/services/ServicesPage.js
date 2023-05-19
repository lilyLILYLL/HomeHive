import React from "react";
import { Link, useLocation } from "react-router-dom";
import { services } from "../../data/services";
import { ServiceForm } from "../../components/ServiceForm";
import { PageTitlte } from "../../components/PageTitlte";
export const ServicesPage = () => {
    return (
        <div >
            <PageTitlte title="Services" />
            {services &&
                services.map((service, index) => {
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
