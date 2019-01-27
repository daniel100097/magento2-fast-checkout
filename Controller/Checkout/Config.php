<?php

namespace M2FC\M2FC\Controller\Checkout;

class Config extends \Magento\Framework\App\Action\Action
{

    function __construct(
        \Magento\Framework\App\Action\Context $context,
        \Magento\Framework\Controller\Result\JsonFactory $resultJsonFactory,
        \Magento\Checkout\Model\CompositeConfigProvider $configProvider,
        \Magento\Framework\Serialize\Serializer\JsonHexTag $serializer
    ){
        parent::__construct($context);
        $this->configProvider = $configProvider;
        $this->serializer = $serializer;
        $this->resultJsonFactory = $resultJsonFactory;
    }

    /**
    * @return array
    */
    public function execute()
    {
        $result = $this->resultJsonFactory->create();

        $result->setData($this->configProvider->getConfig());
        return $result;
    }
}