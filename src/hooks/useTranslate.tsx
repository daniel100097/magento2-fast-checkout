export default function useTranslate() {
    const translate = (text: string) => {
        // @ts-ignore magento translate
        if (jQuery && jQuery.mage && jQuery.mage.__) {
            // @ts-ignore magento translate
            return jQuery.mage.__(text);
        } else {
            return text;
        }
    };
    return { t: translate };
}
