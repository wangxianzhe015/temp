/**
 * Created by Steel on 12/21/2017.
 */
;(function(){
    var vendors = [
        { title: 'Google Australia' },
        { title: 'Google DoubleClick' },
        { title: 'Bing Ads' },
        { title: 'Twitter' },
        { title: 'FaceBook' },
        { title: '---' },
        { title: 'Yedioth Internt' },
        { title: 'Chieh-Heng Wu' },
        { title: 'CJ E&M Hong Kong Limited' },
        { title: 'Cyber Agent, Inc' },
        { title: 'Pulse - 0817P534-1/0817P534-2' },
        { title: 'SnapChat - 16598' },
        { title: 'SnapChat' },
        { title: 'Tune Inc - 01309940' },
        { title: 'Bruce Griffiths' },
        { title: 'Global Erasmus' },
        { title: 'AHA Brand Agency' },
        { title: 'Orion - 7 Eleven' },
        { title: 'Joker' },
        { title: 'Parnas Hotel' },
        { title: 'Shila Stay Co.,LTD' },
        { title: 'CHEN JINFU' },
        { title: 'HUNG YU PING PINKY' },
        { title: 'Travelholic' },
        { title: 'Localytics' },
        { title: 'AdSupply Inc' },
        { title: 'Appfigures' },
        { title: 'Adphorus' },
        { title: 'Kong King Consulting' },
        { title: 'YNET' },
        { title: 'Joker' },
        { title: 'Invisible Studios Pte Ltd' },
        { title: 'Event winners (post fee)' },
        { title: 'Snapchat - 17362' },
        { title: 'Meethk' },
        { title: 'CJ E&M Hong Kong Limited - 201610414003 &201610414003' },
        { title: 'Dulceida' },
        { title: 'Sumwell' }
    ];

    var categories = [
        { title: 'Digital Advertising' },
        { title: 'Influencers' },
        { title: 'Mobile App Installs' },
        { title: 'Digital Production' },
        { title: 'PPC Brand' },
        { title: 'OTHER Brand Marketing' },
        { title: 'PR' }
    ];

    var markets = [
        { title: 'South Korea' },
        { title: '--' },
        { title: 'Hong Kong' },
        { title: 'Malaysia' },
        { title: 'Thailand' },
        { title: 'Singapore' },
        { title: 'Taiwan' },
        { title: 'Japan' },
        { title: '--' },
        { title: 'MENA' },
        { title: 'Saudi Arabia' },
        { title: 'Kuwait' },
        { title: '--' },
        { title: 'United Kingdom' },
        { title: 'Ireland' },
        { title: 'Spain' },
        { title: 'Italy' },
        { title: '--' },
        { title: 'New Zealand' },
        { title: 'Australia' },
        { title: 'Russia' },
        { title: 'Israel' },
        { title: '--' },
        { title: 'OTHER' }
    ];

    var influencers = [
        { title: 'Marta Riumbau' },
        { title: 'jbackpacktravel' },
        { title: 'Laura Escanes' },
        { title: 'Aida Domenech' },
        { title: 'Pantip' },
        { title: 'Lee, Chien-Hong' },
        { title: 'Yau Siu Hang' },
        { title: 'WONG YIN YI' },
        { title: 'POON WAI NANG' },
        { title: 'finance@volo.mobi' },
        { title: 'Su, Pin-Hwa' },
        { title: 'Marina Sato' },
        { title: 'Saad El Din Abdul Moula - HC17' },
        { title: '4 Top Influencers online video' },
        { title: 'Mylifemytravel' },
        { title: 'atravelblog' },
        { title: '1000 miles' },
        { title: 'Night Owl Cinematics' },
        { title: 'Hotel Mela' },
        { title: 'Romizunaidi Bin Roslan' },
        { title: 'ibreak2travel' },
        { title: 'Fraser Residence' },
        { title: 'Trippiece Inc' },
        { title: 'Nurul Huda Mukhtar - paypal' },
        { title: 'Zepo Silup Co Ltd' },
        { title: 'Yunting Chen' },
        { title: 'Wan-Ping Yu' },
        { title: 'Design 210' },
        { title: 'Urbanfly Limited' }
    ];

    var currencies = [
        {
            value: 'KOW',
            name: 'KOW'
        },
        {
            value: 'AUD',
            name: 'AUD'
        },
        {
            value: 'USD',
            name: 'USD'
        },
        {
            value: 'EUR',
            name: 'EUR'
        },
        {
            value: 'GBP',
            name: 'GBP'
        },
        {
            value: 'THB',
            name: 'THB'
        },
        {
            value: 'TWD',
            name: 'TWD'
        },
        {
            value: 'SAR',
            name: 'SAR'
        }
    ];

    var paymentProfiles = [
        {
            vale: '0',
            name: 'Influencer – PayPal'
        },
        {
            vale: '1',
            name: 'Influencer-    Non-PayPal'
        },
        {
            vale: '2',
            name: 'Wire to USA – SWIFT code'
        },
        {
            vale: '3',
            name: 'Wire to Australia – BSB\\Account'
        },
        {
            vale: '4',
            name: 'Other'
        }
    ];


    $('.ui.styled.accordion').accordion();
    $('.ui.checkbox').checkbox();

    $('.ui.calendar.date').calendar({
        type: 'date'
    });
    $('#currency-units-dropdown').dropdown();
    $('#payment-profile-dropdown').dropdown({
        values: paymentProfiles
    });
    $('#allocation-period-input').daterangepicker();

    $('#vendor-search').search({
        source: $.merge(vendors, influencers)
    });

    $('#market-search').search({
        source: markets
    });

    $('#popup-btn').popup({
        popup : $('.custom.popup'),
        inline: true,
        on    : 'click'
    });

    $('#preview-btn').on("click", function(){
        var result = {
            "vendor": $('#vendor-input').val(),
            "amount": $('#amount-input').val(),
            "currency": $('#currency-unit').text(),
            "invoice": $('#invoice-input').val(),
            "date": $('#invoice-date-input').val(),
            "invoice_reference": $('#invoice-reference-input').val(),
            "due_date": $('#payment-due-input').val(),
            "allocation": $('input[name="allocation-method"]:checked').val(),
            "market": $('#market-search-input').val(),
            "allocation_period": $('#allocation-period-input').val()
        };
        alert(JSON.stringify(result));
    });

    $('#payee-add-btn').on("click", function(){
        var data = {
            "name": $('#payee-name').val(),
            "address": $('#payee-address').val(),
            "detail": $('#payment-details').val(),
            "category": $('#payment-category').text()
        };

        if (data.name == ""){
            $('#payee-name').focus();
            return false;
        }
        if (data.category == "Payment Profile"){
            $('#payment-category').click();
            return false;
        }

        if (data.category.indexOf("influencer") > -1){
            $.merge(influencers, [{title: data.name}]);
        } else {
            $.merge(vendors, [{title: data.name}]);
        }
        $('#vendor-search').search({
            source: $.merge(vendors, influencers)
        });
        $('body').click();
    });

    $('#upload-btn').on("click", function(){
        $('#file-input').click();
    });
    //$('#date').bootstrapMaterialDatePicker({ weekStart : 0, time: false });
})();