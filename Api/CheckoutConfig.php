<?php
namespace M2FC\M2FC\Api;

class CheckoutConfig{

    function __construct(
    ){
        $this->configProvider = \Magento\Framework\App\ObjectManager::getInstance()
            ->get(\Magento\Checkout\Model\CompositeConfigProvider::class);
        $this->serializer = \Magento\Framework\App\ObjectManager::getInstance()
            ->get(\Magento\Framework\Serialize\Serializer\JsonHexTag::class);
    }
    /**
     * @return array
     */
    function getConfig(){
        return 111;
    }
}