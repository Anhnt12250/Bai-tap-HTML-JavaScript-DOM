const Months = ['Month', 'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
const PhoneZones = ['United States +1', 'Canada +1', 'United Kingdom +44', 'Japan +81', 'Ireland +353', 'Germany +49', 'Austria +43', 'Switzerland +41', 'South Korea +82', 'France +33', 'Afghanistan +93', 'Aland Islands +358', 'Albania +355', 'Algeria +213', 'American Samoa +1', 'Andorra +376', 'Angola +244', ' Anguilla +1', 'Antigua and Barbuda +1', 'Argentina +54', 'Armenia +374', 'Aruba +297', 'Ascension Island +247', 'Australia +61', 'Austria +43', 'Azerbaijan +994', 'Bahamas +1', 'Bahrain +973', 'Bangladesh +880', ' Barbados +1', ' Belarus +375', 'Belgium +32', 'Belize +501', 'Benin +229', 'Bermuda +1', 'Bhutan +975', 'Bolivia +591', 'Bonaire, Saint Eustatius, and Saba +599', 'Bosnia and Herzegovina +387', 'Botswana +267', 'Brazil +55', 'British Indian Ocean Territory +246', 'British Virgin Islands +1', 'Brunei +673', 'Bulgaria +359', 'Burkina Faso +226', 'Burundi +257', 'Cambodia +855', 'Cameroon +237', 'Canada +1', 'Cape Verde +238', 'Cayman Islands +1', 'Central African Republic +236', 'Chad +235', ' Chile +56', 'China +86', 'Christmas Island +61', 'Cocos (Keeling) Islands +61', ' Colombia +57', 'Comoros +269', 'Congo +242', 'Congo, The Democratic Republic of the +243', 'Cook Islands +682', 'Costa Rica +506', 'Croatia +385', 'Cuba +53', 'Curacao +599', 'Cyprus +357', 'Czech Republic +420', 'Denmark +45', 'Djibouti +253', 'Dominica +1', 'Dominican Republic +1', 'East Timor +670', 'Ecuador +593', 'Egypt +20', 'El Salvador +503', 'Equatorial Guinea +240', 'Eritrea +291', 'Estonia +372', 'Ethiopia +251', 'Falkland Islands (Malvinas) +500', 'Faroe Islands +298', 'Fiji +679', 'Finland +358', 'France +33', 'French Guiana +594', 'French Polynesia +689', 'Gabon +241', 'Gambia +220', 'Georgia +995', 'Germany +49', 'Ghana +233', 'Gibraltar +350', 'Greece +30', 'Greenland +299', 'Grenada +1', 'Guadeloupe +590', 'Guam +1', 'Guatemala +502', 'Guernsey +44', 'Guinea +224', 'Guinea-Bissau +245', 'Guyana +592', 'Haiti +509', 'Honduras +504', 'Hong Kong +852', 'Hungary +36', 'Iceland +354', 'India +91', 'Indonesia +62', 'Iran +98', 'Iraq +964', 'Ireland +353', 'Isle of Man +44', 'Israel +972', 'Italy +39', 'Ivory Coast +225', 'Jamaica +1', 'Japan +81', 'Jersey +44', 'Jordan +962', 'Kazakhstan +7', 'Kenya +254', 'Kiribati +686', 'Kosovo +383', 'Kuwait +965', 'Kyrgyzstan +996', 'Laos +856', 'Latvia +371', 'Lebanon +961', 'Lesotho +266', 'Liberia +231', 'Libya +218', 'Liechtenstein +423', 'Lithuania +370', 'Luxembourg +352', 'Macao +853', 'Macedonia +389', ' Madagascar +261', 'Malawi +265', 'Malaysia +60', 'Maldives +960', 'Mali +223', 'Malta +356', 'Marshall Islands +692', 'Martinique +596', 'Mauritania +222', 'Mauritius +230', 'Mayotte +262', 'Mexico +52', 'Micronesia +691', 'Moldova +373', 'Monaco +377', 'Mongolia +976', 'Montenegro +382', 'Montserrat +1', 'Morocco +212', 'Mozambique +258', 'Myanmar +95', 'Namibia +264', 'Nauru +674', 'Nepal +977', 'Netherlands +31', 'New Caledonia +687', 'New Zealand +64', 'Nicaragua +505', 'Niger +227', 'Nigeria +234', 'Niue +683', 'Norfolk Island +672', 'North Korea +850', 'Northern Mariana Islands +1', 'Norway +47', 'Oman +968', 'Pakistan +92', 'Palau +680', 'Palestine +970', 'Panama +507', 'Papua New Guinea +675', 'Paraguay +595', 'Peru +51', 'Philippines +63', 'Poland +48', 'Portugal +351', 'Puerto Rico +1', 'Qatar +974', 'Reunion +262', 'Romania +40', 'Russia +7', 'Rwanda +250', 'Saint Bartelemey +590', 'Saint Helena +290', 'Saint Kitts and Nevis +1', 'Saint Lucia +1', 'Saint Martin +590', ' Saint Pierre and Miquelon +508', ' Saint Vincent and the Grenadines +1', ' Samoa +685', ' San Marino +378', ' Sao Tome and Principe +239', ' Saudi Arabia +966', ' Senegal +221', ' Serbia +381', ' Seychelles +248', ' Sierra Leone +232', ' Singapore +65', ' Sint Maarten +1', ' Slovakia +421', ' Slovenia +386', ' Solomon Islands +677', ' Somalia +252', ' South Africa +27', ' South Korea +82', ' South Sudan +211', ' Spain +34', ' Sri Lanka +94', ' Sudan +249', ' Suriname +597', ' Svalbard and Jan Mayen +47', ' Swaziland +268', ' Sweden +46', ' Switzerland +41', ' Syria +963', ' Taiwan +886', ' Tajikistan +992', ' Tanzania +255', ' Thailand +66', ' Togo +228', ' Tokelau +690', ' Tonga +676', ' Trinidad and Tobago +1', ' Tristan de Cunha +290', ' Tunisia +216', ' Turkey +90', ' Turkmenistan +993', ' Turks and Caicos Islands +1', ' Tuvalu +688', ' U.S. Virgin Islands +1', ' Uganda +256', ' Ukraine +380', ' United Arab Emirates +971', ' United Kingdom +44', ' United States +1', ' Uruguay +598', ' Uzbekistan +998', ' Vanuatu +678', ' Vatican City +39', ' Venezuela +58', ' Vietnam +84', 'Wallis and Futuna +681', 'Western Sahara +212', 'Yemen +967', 'Zambia +260', 'Zimbabwe +263'];

function createForm(fieldName) {    
    let divElement = document.createElement('div');
    let formElement = document.createElement('form');

    let field = document.createElement('div');
    let inputElement = document.createElement('input');

    field.innerText = fieldName;
    Object.assign(field.style, {
        fontSize: '13px',
        fontWeight: '600',
        marginBottom: '5px',
    });
    
    inputElement.setAttribute('type', 'text');
    Object.assign(inputElement.style, {
        width: '100%',
        height: '25px',
        borderRadius: '5px',
        border: '0px',
        backgroundColor: '#ffffff33',
    });

    formElement.append(field);
    formElement.append(inputElement);

    divElement.append(formElement);

    divElement.style.marginBottom = '20px';

    return divElement;
}

function createFormDateOfBirth(fieldName) {    
    let divElement = document.createElement('div');
    let formElement = document.createElement('form');

    let field = document.createElement('div');
    Object.assign(field.style, {
        fontSize: '13px',
        fontWeight: '600',
        marginBottom: '5px',
    });
    let inputDay = document.createElement('input');
    Object.assign(inputDay.style, {
        width: '25%',
        height: '25px',
        marginLeft: '5px',
        borderRadius: '5px',
        border: '0px',
        backgroundColor: '#ffffff33',
    });
    let inputYear = document.createElement('input');
    Object.assign(inputYear.style, {
        width: '25%',
        height: '25px',
        marginLeft: '5px',
        borderRadius: '5px',
        border: '0px',
        backgroundColor: '#ffffff33',
    });

    field.innerText = fieldName;

    let inputMonth = document.createElement('select');
    Object.assign(inputMonth.style, {
        width: '45%',
        height: '25px',
        borderRadius: '5px',
        border: '0px',
        color: '#ffffff',
        backgroundColor: '#ffffff33',
    });

    for(let month of Months) {
        let option = document.createElement('option');
        option.innerText = month;
        inputMonth.append(option);
    }

    inputDay.setAttribute('type', 'day');
    inputDay.setAttribute('placeholder', 'Day');
    inputYear.setAttribute('type', 'year');
    inputYear.setAttribute('placeholder', 'Year');

    formElement.append(field);
    formElement.append(inputMonth);
    formElement.append(inputDay);
    formElement.append(inputYear);

    divElement.append(formElement);

    divElement.style.marginBottom = '20px';

    return divElement;
}

function createFormPhoneNumber(fieldName) {
    let divElement = document.createElement('div');
    let formElement = document.createElement('form');

    let field = document.createElement('div');
    let inputElement = document.createElement('input');

    field.innerText = fieldName;
    Object.assign(field.style, {
        fontSize: '13px',
        fontWeight: '600',
        marginBottom: '5px',
    });
    let inputPhoneZones = document.createElement('select');
    Object.assign(inputPhoneZones.style, {
        width: '35%',
        height: '25px',
        borderRadius: '5px',
        border: '0px',
        color: '#ffffff',
        backgroundColor: '#ffffff33',
    });
    for(let phoneZone of PhoneZones) {
        let option = document.createElement('option');
        option.innerText = phoneZone;
        inputPhoneZones.append(option);
    }
    inputElement.setAttribute('type', 'tel');
    Object.assign(inputElement.style, {
        width: '62%',
        height: '25px',
        marginLeft: '5px',
        borderRadius: '5px',
        border: '0px',
        color: '#ffffff',
        backgroundColor: '#ffffff33',
    });

    formElement.append(field);
    formElement.append(inputPhoneZones);
    formElement.append(inputElement);

    divElement.append(formElement);

    divElement.style.marginBottom = '20px';

    return divElement;
}

const body = document.body;

body.style.backgroundColor = '#111';
body.style.color = '#efefff';
body.style.fontWeight = '400';

const bigDiv = document.createElement('div');

    
    const divJoin = document.createElement('div');
        const divJoinChild = document.createElement('div');
            let img = document.createElement('img');
            img.setAttribute('src', 'https://cdn-icons-png.flaticon.com/512/5968/5968819.png');
            img.setAttribute('alt', 'Twitch Img');
            img.setAttribute('width', '39.24');
            img.setAttribute('height', '40');

            const divTitle = document.createElement('div');
                let joinTitle = document.createElement('h4');
                joinTitle.textContent = 'Join Twitch today';
                joinTitle.setAttribute('style', 'display: contents');

            divTitle.append(joinTitle);
            divTitle.style.marginLeft = '5px';

            divJoinChild.append(img);
            divJoinChild.append(divTitle);
    
        Object.assign(divJoinChild.style, {
            display: 'inline-flex',
            alignItems: 'center',
            fontSize: '18px',
            justifyContent: 'center',
        })

    divJoin.append(divJoinChild);
    
    Object.assign(divJoin.style, {
        display: 'flex',
        flexDirection: 'column',
    })
    
    const divSignUp = document.createElement('div'); 
        let signUpTitle = document.createElement('h3');
        signUpTitle.textContent = 'Sign up';
        signUpTitle.style.fontSize = '14.72px';

        divSignUp.append(signUpTitle);

        Object.assign(divSignUp.style, {
            display: 'flex',
            color: '#bf94ff',
        });

    const divForm = document.createElement('div');
        let formUsername = createForm('Username');
        let formPassword = createForm('Password');
        let formComfirmPassword = createForm('Comfirm Password');
        let formDateOfBirth = createFormDateOfBirth('Date of Birth');
        let formPhoneNumber = createFormPhoneNumber('Phone Number (Request Vertification)');

        let pDiscription1 = document.createElement('p');
        pDiscription1.textContent = 'Twitch may use your phone number to call or send text messages with information regarding your account.';
        let pDiscription2 = document.createElement('p');
        pDiscription2.textContent = 'By clicking Sign Up, you are agreeing to Twitch’s Terms of Service and are acknowledging our Privacy Notice applies.';

        Object.assign(pDiscription1.style, {
            color: '#ffffff33',
            fontSize: '12px',
            textAlign: 'center',
        });

        Object.assign(pDiscription2.style, {
            color: '#ffffff33',
            fontSize: '12px',
            textAlign: 'center',
        });

        let buttonSignUp = document.createElement('button');
        buttonSignUp.textContent = 'Sign Up';

        Object.assign(buttonSignUp.style, {
            width: '100%',
            height: '30px',
            backgroundColor: '#bf94ff',
            color: '#ffffff',
            fontWeight: '600',
            borderRadius: '5px',
            cursor: 'pointer',
        })

        divForm.append(formUsername);
        divForm.append(formPassword);
        divForm.append(formComfirmPassword);
        divForm.append(formDateOfBirth);
        divForm.append(formPhoneNumber);
        divForm.append(pDiscription1);
        divForm.append(pDiscription2);
        divForm.append(buttonSignUp);


Object.assign(bigDiv.style, {
    fontFamily: 'Inter, Roobert, Helvetica Neue, Helvetica, Arial, sans-serif',
    backgroundColor: '#18181B',
    maxWidth: '24em',
    margin: '0 auto',
    padding: '1rem 1rem ',
    borderRadius: '5px',
})

bigDiv.append(divJoin);
bigDiv.append(divSignUp);
bigDiv.append(divForm);

body.append(bigDiv);


