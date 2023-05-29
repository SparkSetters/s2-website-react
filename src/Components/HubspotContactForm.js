import React, {useEffect} from "react";

const HubspotContactForm = props => {
    const {region, portalId, formId} = props;
    useEffect(() => {
        const script = document.createElement('script');
        script.src = '//js.hsforms.net/forms/embed/v2.js';
        document.body.appendChild(script);

        script.addEventListener('load', () => {
            if (window.hbspt) {
                window.hbspt.forms.create({
                    region: region,
                    portalId: portalId,
                    formId: formId,
                    target: '#hubspotForm'
                })
            }
        });
    }, [region, portalId, formId]);

    return (
        <div>
            <div id="hubspotForm"></div>
        </div>
    );
};

export default HubspotContactForm;