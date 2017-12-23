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
        { title: 'KOW' },
        { title: 'AUD' },
        { title: 'USD' },
        { title: 'EUR' },
        { title: 'GBP' },
        { title: 'THB' },
        { title: 'TWD' },
        { title: 'SAR' }
    ];

    var PaymentProfiles = [
        { title: 'Influencer – PayPal' },
        { title: 'Influencer-    Non-PayPal' },
        { title: 'Wire to USA – SWIFT code' },
        { title: 'Wire to Australia – BSB\\Account' },
        { title: 'Other' }
    ];


    $('.ui.styled.accordion').accordion();
    $('.ui.checkbox').checkbox();
    $('.ui.dropdown').dropdown();
    $('.ui.calendar.date').calendar({
        type: 'date'
    });
    $('.ui.calendar.period').calendar({

    });

    $('#vendor-search').search({
        source: vendors
    });

    $('#market-search').search({
        source: markets
    });

    $('#popup-btn').popup({
        popup : $('.custom.popup'),
        inline: true,
        on    : 'click'
    });
    //$('#date').bootstrapMaterialDatePicker({ weekStart : 0, time: false });
})();