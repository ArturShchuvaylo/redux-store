import React from "react";
import { PhonesStoreServiceConsumer } from "../phones-store-service-context/phones-store-service.context";

const withPhonesStoreService = () => (Wrapped) => {
    return (props) => {
        return (
            <PhonesStoreServiceConsumer>
                {
                    (phonesStoreService) => {
                        return <Wrapped {...props} phonesStoreService={phonesStoreService} />
                    }
                }
            </PhonesStoreServiceConsumer>
        )
    }
}

export default withPhonesStoreService;

