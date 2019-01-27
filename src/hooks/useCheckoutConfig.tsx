interface RootObject {
    payment: Payment;
    formKey: string;
    customerData: any[];
    quoteData: QuoteData;
    quoteItemData: QuoteItemDatum[];
    quoteMessages: QuoteMessages;
    isCustomerLoggedIn: boolean;
    selectedShippingMethod?: any;
    storeCode: string;
    isGuestCheckoutAllowed: boolean;
    isCustomerLoginRequired: boolean;
    registerUrl: string;
    checkoutUrl: string;
    defaultSuccessPageUrl: string;
    pageNotFoundUrl: string;
    forgotPasswordUrl: string;
    staticBaseUrl: string;
    priceFormat: PriceFormat;
    basePriceFormat: PriceFormat;
    postCodes: PostCodes;
    imageData: ImageData;
    totalsData: TotalsData;
    shippingPolicy: ShippingPolicy;
    activeCarriers: string[];
    originCountryCode: string;
    paymentMethods: any[];
    autocomplete: string;
    displayBillingOnPaymentMethod: boolean;
    maxCartItemsToDisplay: number;
    cartUrl: string;
    isDisplayShippingPriceExclTax: boolean;
    isDisplayShippingBothPrices: boolean;
    reviewShippingDisplayMode: string;
    reviewItemPriceDisplayMode: string;
    reviewTotalsDisplayMode: string;
    includeTaxInGrandTotal: boolean;
    isFullTaxSummaryDisplayed: boolean;
    isZeroTaxDisplayed: boolean;
    reloadOnBillingAddress: boolean;
    defaultCountryId: string;
    defaultRegionId?: any;
    defaultPostcode?: any;
    isDisplayPriceWithWeeeDetails: boolean;
    isDisplayFinalPrice: boolean;
    isWeeeEnabled: string;
    isIncludedInSubtotal: boolean;
    getIncludeWeeeFlag: boolean;
    vault: any[];
    persistenceConfig: PersistenceConfig;
    captcha: Captcha;
    checkoutAgreements: CheckoutAgreements;
}

interface CheckoutAgreements {
    isEnabled: boolean;
}

interface Captcha {
    user_login: Userlogin;
}

interface Userlogin {
    isCaseSensitive: boolean;
    imageHeight: number;
    imageSrc: string;
    refreshUrl: string;
    isRequired: boolean;
    timestamp: number;
}

interface PersistenceConfig {
    isRememberMeCheckboxVisible: boolean;
    isRememberMeCheckboxChecked: boolean;
}

interface ShippingPolicy {
    isEnabled: boolean;
    shippingPolicyContent: string;
}

interface TotalsData {
    subtotal: string;
    base_subtotal: string;
    subtotal_with_discount: string;
    base_subtotal_with_discount: string;
    tax_amount: string;
    base_tax_amount: string;
    shipping_amount: string;
    base_shipping_amount: string;
    shipping_tax_amount: string;
    base_shipping_tax_amount: string;
    discount_amount: string;
    base_discount_amount: string;
    grand_total: number;
    base_grand_total: string;
    shipping_discount_amount: string;
    base_shipping_discount_amount: string;
    subtotal_incl_tax: string;
    shipping_incl_tax: string;
    base_shipping_incl_tax: string;
    total_segments: Totalsegment[];
    coupon_code?: any;
    items: Item2[];
    items_qty: string;
    base_currency_code: string;
    quote_currency_code: string;
    extension_attributes: any[];
}

interface Item2 {
    item_id: string;
    name: string;
    qty: number;
    price: string;
    base_price: string;
    discount_percent: string;
    discount_amount: string;
    base_discount_amount: string;
    tax_percent: string;
    tax_amount: string;
    base_tax_amount: string;
    row_total: string;
    base_row_total: string;
    row_total_with_discount: string;
    price_incl_tax: string;
    base_price_incl_tax: string;
    row_total_incl_tax: string;
    base_row_total_incl_tax: string;
    weee_tax_applied?: any;
    weee_tax_applied_amount?: any;
    options: string;
}

interface Totalsegment {
    code: string;
    title: string;
    value: string;
    area?: string;
    extension_attributes: Extensionattribute | any[];
}

interface Extensionattribute {
    tax_grandtotal_details: any[];
}

interface ImageData {
    '7': _7;
}

// tslint:disable-next-line:class-name
interface _7 {
    src: string;
    alt: string;
    width: number;
    height: number;
}

interface PostCodes {
    DZ: DZ;
    AS: DZ;
    AR: DZ;
    AM: DZ;
    AU: DZ;
    AT: DZ;
    AZ: AZ;
    BD: DZ;
    BY: DZ;
    BE: DZ;
    BA: DZ;
    BR: AZ;
    BN: DZ;
    BG: DZ;
    CA: AZ;
    IC: DZ;
    CN: DZ;
    HR: DZ;
    CU: DZ;
    CY: DZ;
    CZ: DZ;
    DK: DZ;
    EE: DZ;
    FI: DZ;
    FR: DZ;
    GF: DZ;
    GE: DZ;
    DE: DZ;
    GR: DZ;
    GL: DZ;
    GP: DZ;
    GU: DZ;
    GG: DZ;
    HU: DZ;
    IS: DZ;
    IN: DZ;
    ID: DZ;
    IL: DZ;
    IT: DZ;
    JP: AZ;
    JE: DZ;
    KZ: DZ;
    KE: DZ;
    KR: DZ;
    KG: DZ;
    LV: DZ;
    LI: DZ;
    LT: DZ;
    LU: DZ;
    MK: DZ;
    MG: DZ;
    MY: DZ;
    MV: AZ;
    MT: MT;
    MH: DZ;
    MQ: DZ;
    MX: DZ;
    MD: DZ;
    MC: DZ;
    MN: DZ;
    MA: DZ;
    NL: DZ;
    NO: DZ;
    PK: DZ;
    PH: DZ;
    PL: DZ;
    PT: AZ;
    PR: DZ;
    RE: DZ;
    RO: DZ;
    RU: DZ;
    MP: DZ;
    CS: DZ;
    SG: DZ;
    SK: DZ;
    SI: DZ;
    ZA: DZ;
    ES: DZ;
    XY: DZ;
    SZ: DZ;
    SE: DZ;
    CH: DZ;
    TW: AZ;
    TJ: DZ;
    TH: DZ;
    TR: DZ;
    TM: DZ;
    UA: DZ;
    GB: GB;
    US: AZ;
    UY: DZ;
    UZ: DZ;
    VI: DZ;
}

interface GB {
    pattern_1: Pattern1;
    pattern_2: Pattern1;
    pattern_3: Pattern1;
    pattern_4: Pattern1;
    pattern_5: Pattern1;
    pattern_6: Pattern1;
}

interface MT {
    pattern_1: Pattern1;
    pattern_2: Pattern1;
    pattern_3: Pattern1;
}

interface AZ {
    pattern_1: Pattern1;
    pattern_2: Pattern1;
}

interface DZ {
    pattern_1: Pattern1;
}

interface Pattern1 {
    example: string;
    pattern: string;
}

interface PriceFormat {
    pattern: string;
    precision: number;
    requiredPrecision: number;
    decimalSymbol: string;
    groupSymbol: string;
    groupLength: number;
    integerRequired: boolean;
}

interface QuoteMessages {
    '7': string;
}

interface QuoteItemDatum {
    item_id: string;
    quote_id: string;
    created_at: string;
    updated_at: string;
    product_id: string;
    store_id: number;
    parent_item_id?: any;
    is_virtual: string;
    sku: string;
    name: string;
    description?: any;
    applied_rule_ids?: any;
    additional_data?: any;
    is_qty_decimal: boolean;
    no_discount: string;
    weight: string;
    qty: number;
    price: string;
    base_price: string;
    custom_price?: any;
    discount_percent: string;
    discount_amount: string;
    base_discount_amount: string;
    tax_percent: string;
    tax_amount: string;
    base_tax_amount: string;
    row_total: string;
    base_row_total: string;
    row_total_with_discount: string;
    row_weight: string;
    product_type: string;
    base_tax_before_discount?: any;
    tax_before_discount?: any;
    original_custom_price?: any;
    redirect_url?: any;
    base_cost?: any;
    price_incl_tax: string;
    base_price_incl_tax: string;
    row_total_incl_tax: string;
    base_row_total_incl_tax: string;
    discount_tax_compensation_amount: string;
    base_discount_tax_compensation_amount: string;
    gift_message_id?: any;
    free_shipping: string;
    weee_tax_applied?: any;
    weee_tax_applied_amount?: any;
    weee_tax_applied_row_amount?: any;
    weee_tax_disposition?: any;
    weee_tax_row_disposition?: any;
    base_weee_tax_applied_amount?: any;
    base_weee_tax_applied_row_amnt?: any;
    base_weee_tax_disposition?: any;
    base_weee_tax_row_disposition?: any;
    has_children: boolean;
    qty_options: Qtyoptions;
    product: Product;
    tax_class_id: string;
    has_error: boolean;
    product_option: Item;
    options: Option[];
    thumbnail: string;
    message: string;
}

interface Option {
    value: string;
    label: string;
}

interface Product {
    entity_id: string;
    attribute_set_id: string;
    type_id: string;
    sku: string;
    has_options: string;
    required_options: string;
    created_at: string;
    updated_at: string;
    price: string;
    name: string;
    small_image: string;
    thumbnail: string;
    msrp_display_actual_price_type: string;
    url_key: string;
    status: string;
    visibility: string;
    tax_class_id: string;
    sale: string;
    store_id: number;
    request_path: string;
    extension_attributes: Item;
    customer_group_id: string;
    final_price?: any;
}

interface Qtyoptions {
    '1807': Item;
}

interface QuoteData {
    entity_id: string;
    store_id: number;
    created_at: string;
    updated_at: string;
    converted_at?: any;
    is_active: string;
    is_virtual: number;
    is_multi_shipping: number;
    items_count: string;
    items_qty: string;
    orig_order_id: string;
    store_to_base_rate: string;
    store_to_quote_rate: string;
    base_currency_code: string;
    store_currency_code: string;
    quote_currency_code: string;
    grand_total: string;
    base_grand_total: string;
    checkout_method?: any;
    customer_id?: any;
    customer_tax_class_id: string;
    customer_group_id: string;
    customer_email?: any;
    customer_prefix?: any;
    customer_firstname?: any;
    customer_middlename?: any;
    customer_lastname?: any;
    customer_suffix?: any;
    customer_dob?: any;
    customer_note?: any;
    customer_note_notify: string;
    customer_is_guest: string;
    remote_ip: string;
    applied_rule_ids?: any;
    reserved_order_id?: any;
    password_hash?: any;
    coupon_code?: any;
    global_currency_code: string;
    base_to_global_rate: string;
    base_to_quote_rate: string;
    customer_taxvat?: any;
    customer_gender?: any;
    subtotal: string;
    base_subtotal: string;
    subtotal_with_discount: string;
    base_subtotal_with_discount: string;
    is_changed: string;
    trigger_recollect: string;
    ext_shipping_info?: any;
    gift_message_id?: any;
    is_persistent: string;
    items: Item[];
    extension_attributes: Item;
    x_forwarded_for?: any;
}

// tslint:disable-next-line:no-empty-interface
interface Item {}

interface Payment {
    ccform: Ccform;
    checkmo: Checkmo;
    paypalExpress: PaypalExpress;
    paypalIframe: any[];
    paypalBillingAgreement: PaypalBillingAgreement;
    iframe: Iframe;
    braintree: Braintree;
    three_d_secure: Threedsecure;
    braintree_paypal: Braintreepaypal;
}

interface Braintreepaypal {
    isActive: boolean;
    title: string;
    isAllowShippingAddressOverride: boolean;
    merchantName?: any;
    locale: string;
    paymentAcceptanceMarkSrc: string;
    vaultCode: string;
    skipOrderReview: boolean;
    paymentIcon: AE;
    isRequiredBillingAddress: boolean;
}

interface Threedsecure {
    enabled: boolean;
    thresholdAmount: number;
    specificCountries: any[];
}

interface Braintree {
    isActive: boolean;
    clientToken?: any;
    ccTypesMapper: CcTypesMapper;
    sdkUrl: string;
    countrySpecificCardTypes: any[];
    availableCardTypes: string[];
    useCvv: boolean;
    environment: string;
    kountMerchantId?: any;
    hasFraudProtection: boolean;
    merchantId?: any;
    ccVaultCode: string;
}

interface CcTypesMapper {
    'american-express': string;
    discover: string;
    jcb: string;
    mastercard: string;
    'master-card': string;
    visa: string;
    maestro: string;
    'diners-club': string;
    unionpay: string;
}

interface Iframe {
    timeoutTime: TimeoutTime;
    dateDelim: DateDelim;
    cardFieldsMap: CardFieldsMap;
    source: DateDelim;
    controllerName: DateDelim;
    cgiUrl: DateDelim;
    placeOrderUrl: DateDelim;
    saveOrderUrl: DateDelim;
    expireYearLength: TimeoutTime;
}

interface CardFieldsMap {
    payflowpro: any[];
    authorizenet_directpost: any[];
}

interface DateDelim {
    payflowpro: string;
    authorizenet_directpost: string;
}

interface TimeoutTime {
    payflowpro: number;
    authorizenet_directpost: number;
}

interface PaypalBillingAgreement {
    agreements: any[];
    transportName: string;
}

interface PaypalExpress {
    paymentAcceptanceMarkHref: string;
    paymentAcceptanceMarkSrc: string;
    isContextCheckout: boolean;
    inContextConfig: any[];
}

interface Checkmo {
    mailingAddress: string;
    payableTo?: any;
}

interface Ccform {
    icons: Icons;
}

interface Icons {
    AE: AE;
    VI: AE;
    MC: AE;
    DI: AE;
    JCB: AE;
    SM: AE;
    DN: AE;
    SO: AE;
    MI: AE;
    MD: AE;
}

interface AE {
    url: string;
    width: number;
    height: number;
}

export default function useCheckoutConfig(): RootObject {
    // @ts-ignore
    return window.checkoutConfig;
}
