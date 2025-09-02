/*
*This is auto generated from the ControlManifest.Input.xml file
*/

// Define IInputs and IOutputs Type. They should match with ControlManifest.
export interface IInputs {
    name: ComponentFramework.PropertyTypes.StringProperty;
    addressLine1: ComponentFramework.PropertyTypes.StringProperty;
    city: ComponentFramework.PropertyTypes.StringProperty;
    state: ComponentFramework.PropertyTypes.StringProperty;
    zipcode: ComponentFramework.PropertyTypes.StringProperty;
    country: ComponentFramework.PropertyTypes.StringProperty;
    actionName: ComponentFramework.PropertyTypes.StringProperty;
    minlength: ComponentFramework.PropertyTypes.StringProperty;
    subKey: ComponentFramework.PropertyTypes.StringProperty;
}
export interface IOutputs {
    name?: string;
    addressLine1?: string;
    city?: string;
    state?: string;
    zipcode?: string;
    country?: string;
}
