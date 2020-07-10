import { IonicNativePlugin } from '@ionic-native/core';
export declare class PayHere extends IonicNativePlugin {
    /**
     *
     * @param {checkoutRequest} Parameters see [documentation](https://support.payhere.lk/api-&-mobile-sdk/mobile-sdk-for-android)
     * @returns {Promise<any>} Returns a Promise that resolves if the payment completed successfully.
     */
    checkout(checkoutRequest: CheckoutRequest): Promise<PHResponse>;
    /**
     *
     * @param {checkoutRequest} Parameters see [documentation](https://support.payhere.lk/api-&-mobile-sdk/mobile-sdk-for-android)
     * @returns {Promise<any>} Returns a Promise that resolves if the card validated successfully.
     */
    preApprove(checkoutRequest: PreApproveRequest): Promise<PHResponse>;
}
export interface CheckoutRequest {
    sandboxEnabled?: boolean;
    merchantId: String;
    amount: Number;
    currency: Currency;
    orderId: String;
    itemsDescription: String;
    customer: Customer;
    billing: Billing;
    shipping?: Shipping;
    items: Array<Item>;
    custom1?: String;
    custom2?: String;
}
export interface PreApproveRequest {
    sandboxEnabled?: boolean;
    merchantId: String;
    currency: Currency;
    orderId: String;
    itemsDescription: String;
    customer: Customer;
    billing: Billing;
    items: Array<Item>;
    custom1?: String;
    custom2?: String;
}
export interface Customer {
    firstName: String;
    lastName?: String;
    email?: String;
    phone?: String;
}
export interface Billing {
    address: String;
    city: String;
    country: String;
}
export interface Shipping {
    address: String;
    city: String;
    country: String;
}
export interface Item {
    id: String;
    name: String;
    quantity: Number;
    amount: Number;
}
export declare enum Currency {
    LKR = "LKR",
    USD = "GBP",
    EUR = "EUR",
    AUD = "AUD"
}
export interface PHResponse {
    status: String;
    statusCode: String;
    message: String;
    data?: Object;
}
