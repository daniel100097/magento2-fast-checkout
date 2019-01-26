define(['jquery'], function($) {
    'use strict';

    console.log();
    $(function() {
        setTimeout(() => {
            $('.opc-wrapper')
                .children()
                .remove();
            $('.opc-wrapper').attr('id', 'm2fc');
            $('.opc-wrapper').attr('class', 'm2fc');
            m2fc_bootstrap();
        }, 2000);
    });
    return class {
        initContainer() {
            return null;
        }
    };
});
