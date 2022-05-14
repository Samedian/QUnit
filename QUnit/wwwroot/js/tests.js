steal(
    'funcunit/qunit',
    'siag/testing/resources/sinon.js')
    .then(
        'siag/testing/resources/sinon.qunit.js',
        './user_test.js',
        function ($) {

            if (steal.isRhino) {
                steal('funcunit/qunit/env');
            }
        });