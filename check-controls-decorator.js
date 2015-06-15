(function (root, $) {

    /**
     * Radio/checkbox controls decorator
     *
     * @param {Object} opts
     * @constructor
     */
    root.CheckControlsDecorator = function (opts) {

        var o = $.extend({
            controlsSel: 'input[type="checkbox"], input[type="radio"]',
            checkboxHolderCN: 'custom-checkbox',
            radioHolderCN: 'custom-radio'
        }, opts);

        var checkboxInputSel = '.' + o.checkboxHolderCN + ' input';
        var radioInputSel = '.' + o.radioHolderCN + ' input';

        /**
         * Update controls styles
         */
        this.refresh = function () {

            // add markup for style if this is not already done
            $(o.controlsSel).each(function () {

                var $control = $(this);
                var $holder = $control.parent();
                var $styleEl = $control.next();
                var hasStyleEl = $styleEl.length && $styleEl.hasClass('ctx-control');

                if ($control.is(':radio')) {
                    if (!$holder.hasClass(o.radioHolderCN)) {
                        $control.wrap('<span class="' + o.radioHolderCN + '"/>');
                    }
                }
                else {
                    if (!$holder.hasClass(o.checkboxHolderCN)) {
                        $control.wrap('<span class="' + o.checkboxHolderCN + '"/>');
                    }
                }

                if (!hasStyleEl) {
                    $control.after($('<span/>', {'class': 'ctx-control'}));
                }
            });

            if (typeof Modernizr !== 'undefined') {
                if (!Modernizr.csschecked) {
                    updateInputFields();
                }
            }
        };

        /**
         * Init styles
         */
        function init(self) {

            if (typeof Modernizr !== 'undefined') {
                //CSS :checked selector test
                Modernizr.addTest('csschecked', function () {
                    return Modernizr.testStyles('#modernizr input {margin-left:0px;} #modernizr input:checked {margin-left: 20px;}', function (elem) {
                        var chx = document.createElement('input');
                        chx.type = 'checkbox';
                        chx.checked = 'checked';
                        elem.appendChild(chx);
                        return elem.lastChild.offsetLeft >= 20;
                    });
                });

                //checkbox/radio style buttons event fallback
                if (!Modernizr.csschecked) {

                    // bind checkbox events
                    $(document.body)
                        .on('change.controlStyle', checkboxInputSel, function () {
                            updateInputFields($(this));
                        })
                        // bind radio input events
                        .on('change.controlStyle', radioInputSel, function () {
                            var $input = $(this),
                                groupName = $input.attr('name'),
                                $radiosGroup = $(radioInputSel).filter('[name="' + groupName + '"]');

                            updateInputFields($radiosGroup);
                        });
                }
            }

            self.refresh();
        }

        /**
         * Update radio/checkbox fields state
         * @param $fields
         */
        function updateInputFields($fields) {

            // update all fields if param $fields is not set
            if ($fields === undefined) {
                $fields = $(checkboxInputSel + ', ' + radioInputSel);
            }

            $fields.each(function () {
                var $input = $(this),
                    $holder = $input.parent(),
                    checked = $input.prop('checked');

                if (checked) {
                    $holder.addClass('checked');
                } else {
                    $holder.removeClass('checked');
                }
            });
        }

        // initialize
        init(this);
    };

})(window, jQuery);