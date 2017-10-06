export const Consts = {
	indicators: {
		ADMINISTRATIVE: {
			id: 'ADMINISTRATIVE',
			name: 'Administrative Capacity Indicator',
			plural: 'Administrative Capacity Indicators',
			subindicators: {
				ADMINISTRATIVE_CENTRALIZED_PROCUREMENT: {name: 'Joint of centralized procurement', desc: 'Centralized procurement suggests good administrative capacity if the tender is managed by a central procuring body.'},
				ADMINISTRATIVE_USE_OF_WTO_FRAMEWORK: {name: 'Use of WTO framework', desc: 'Use of the WTO framework suggests good administrative capacity if the tendering process is conducted according to the WTO framework.'},
				ADMINISTRATIVE_FRAMEWORK_AGREEMENT: {name: 'Use of framework agreements', desc: 'Framework agreement suggests good administrative capacity if the tender establishes a framework agreement.'},
				ADMINISTRATIVE_ELECTRONIC_AUCTION: {name: 'Electronic auction', desc: 'Electronic auction points at good administrative capacity if the tender was conducted through an electronic auction.'},
				ADMINISTRATIVE_ENGLISH_AS_FOREIGN_LANGUAGE: {name: 'English as foreign language', desc: 'English as a foreign language suggests good administrative capacity if the bids can be submitted in English as a foreign language.'},
				ADMINISTRATIVE_DISCREPANCIES_BETWEEN_CALL_FOR_TENDER_AND_AWARD: {
					name: 'Discrepancies between call for tender and contract award notices',
					desc: 'Discrepancies between call for tender and contract award notices is the ratio of fields with different values in the call for tender and contract award announcements related to a given tender (based on last published versions).'
				},
				ADMINISTRATIVE_COVERED_BY_GPA: {name: 'Covered by GPA', desc: 'N/A'},
			},
			icon: 'icon-trophy'
		},
		CORRUPTION: {
			id: 'CORRUPTION',
			name: 'Corruption Risk Indicator',
			plural: 'Corruption Risk Indicators',
			subindicators: {
				CORRUPTION_SINGLE_BID: {name: 'Single bidder contract', desc: 'Single bid signals a risk when only one bid is submitted in a tender in a competitive market.'},
				CORRUPTION_PRIOR_INFORMATION_NOTICE: {
					name: 'Call for tenders publication',
					desc: 'Not publishing calls for tender signals a risk when no call for tenders is published prior to a contract award, decreasing the potential bidder pool.'
				},
				CORRUPTION_PROCEDURE_TYPE: {
					name: 'Procedure type',
					desc: 'Non-open procedures signal a risk of using procedures types which are less open for competition and more readily used for directly contracting connected companies (e.g. negotiated without publication).'
				},
				CORRUPTION_ADVERTISEMENT_PERIOD: {name: 'Length of advertisement period', desc: 'Advertisement period length reveals the risk of suspiciously tight bidding deadlines or when advertisement period is excessively long.'},
				CORRUPTION_DESCRIPTION_LENGTH: {name: 'Description length', desc: 'Product description length signals the risk of product description being tailored to one company, when the description is excessively long.'},
				CORRUPTION_ELIGIBILITY_CRITERIA_LENGTH: {
					name: 'Eligibility criteria length',
					desc: 'Eligibility criteria length signals the risk of criteria being tailored to one company with the criteria description being excessively long.'
				},
				CORRUPTION_EVALUATION_CRITERIA: {name: 'Evaluation criteria', desc: 'Evaluation criteria signal the risk of using non-quantitative criteria to assess bidders which are subjective and can easily be manipulated.'},
				CORRUPTION_DECISION_PERIOD: {name: 'Length of decision period', desc: 'Length of decision period signals risks when the the decision period length is either suspiciously short or suspiciously long.'},
				CORRUPTION_WINNER_CONTRACT_SHARE: {name: 'Winner contract share', desc: 'Winner contract share is the share of contract value won by a given company from a given buyer in a given year.'},
				CORRUPTION_NEW_COMPANY: {name: 'New company', desc: 'New company signals the risk of a very young company winning a tender (younger than 1 year at the time of winning).'},
				CORRUPTION_POLITICAL_CONNECTIONS_OF_SUPPLIERS: {name: 'Political connections of suppliers', desc: 'Political connection of the supplier captures the risk of at least one owner or manager holding a political office.'},
				CORRUPTION_TAX_HAVEN: {name: 'Tax haven', desc: 'Tax haven signals a risk when the supplier is located in a tax haven country (based on the financial secrecy index).'}
			},
			icon: 'icon-flag'
		},
		TRANSPARENCY: {
			id: 'TRANSPARENCY',
			name: 'Transparency Indicator',
			plural: 'Transparency Indicators',
			subindicators: {
				TRANSPARENCY_PUBLICATION_RATE: {name: 'Publication rate', desc: 'Publication rate is the ratio of advertised public procurement spending over the total public procurement spending of a given contracting authority.'},
				TRANSPARENCY_NUMBER_OF_KEY_MISSING_FIELDS: {
					name: 'Number of key missing fields in form',
					desc: 'Number of key missing fields is the ratio of fields with missing values in the call for tender and contract award announcement related to a given tender (based on the most recently published versions).'
				}
			},
			icon: 'icon-checkmark'
		}
	},
	countries: {
		'AF': 'Afghanistan',
		'AX': 'Åland Islands',
		'AL': 'Albania',
		'DZ': 'Algeria',
		'AS': 'American Samoa',
		'AD': 'Andorra',
		'AO': 'Angola',
		'AI': 'Anguilla',
		'AQ': 'Antarctica',
		'AG': 'Antigua and Barbuda',
		'AR': 'Argentina',
		'AM': 'Armenia',
		'AW': 'Aruba',
		'AU': 'Australia',
		'AT': 'Austria',
		'AZ': 'Azerbaijan',
		'BS': 'Bahamas',
		'BH': 'Bahrain',
		'BD': 'Bangladesh',
		'BB': 'Barbados',
		'BY': 'Belarus',
		'BE': 'Belgium',
		'BZ': 'Belize',
		'BJ': 'Benin',
		'BM': 'Bermuda',
		'BT': 'Bhutan',
		'BO': 'Bolivia',
		'BA': 'Bosnia and Herzegovina',
		'BW': 'Botswana',
		'BV': 'Bouvet Island',
		'BR': 'Brazil',
		'IO': 'British Indian Ocean Territory',
		'BN': 'Brunei Darussalam',
		'BG': 'Bulgaria',
		'BF': 'Burkina Faso',
		'BI': 'Burundi',
		'KH': 'Cambodia',
		'CM': 'Cameroon',
		'CA': 'Canada',
		'CV': 'Cape Verde',
		'KY': 'Cayman Islands',
		'CF': 'Central African Republic',
		'TD': 'Chad',
		'CL': 'Chile',
		'CN': 'China',
		'CX': 'Christmas Island',
		'CC': 'Cocos (Keeling) Islands',
		'CO': 'Colombia',
		'KM': 'Comoros',
		'CG': 'Congo',
		'CD': 'Congo, The Democratic Republic of the',
		'CK': 'Cook Islands',
		'CR': 'Costa Rica',
		'CI': 'Cote D\'Ivoire',
		'HR': 'Croatia',
		'CU': 'Cuba',
		'CY': 'Cyprus',
		'CZ': 'Czech Republic',
		'DK': 'Denmark',
		'DJ': 'Djibouti',
		'DM': 'Dominica',
		'DO': 'Dominican Republic',
		'EC': 'Ecuador',
		'EG': 'Egypt',
		'SV': 'El Salvador',
		'GQ': 'Equatorial Guinea',
		'ER': 'Eritrea',
		'EE': 'Estonia',
		'ET': 'Ethiopia',
		'FK': 'Falkland Islands (Malvinas)',
		'FO': 'Faroe Islands',
		'FJ': 'Fiji',
		'FI': 'Finland',
		'FR': 'France',
		'GF': 'French Guiana',
		'PF': 'French Polynesia',
		'TF': 'French Southern Territories',
		'GA': 'Gabon',
		'GM': 'Gambia',
		'GE': 'Georgia',
		'DE': 'Germany',
		'GH': 'Ghana',
		'GI': 'Gibraltar',
		'GR': 'Greece',
		'GL': 'Greenland',
		'GD': 'Grenada',
		'GP': 'Guadeloupe',
		'GU': 'Guam',
		'GT': 'Guatemala',
		'GG': 'Guernsey',
		'GN': 'Guinea',
		'GW': 'Guinea-Bissau',
		'GY': 'Guyana',
		'HT': 'Haiti',
		'HM': 'Heard Island and Mcdonald Islands',
		'VA': 'Holy See (Vatican City State)',
		'HN': 'Honduras',
		'HK': 'Hong Kong',
		'HU': 'Hungary',
		'IS': 'Iceland',
		'IN': 'India',
		'ID': 'Indonesia',
		'IR': 'Iran, Islamic Republic Of',
		'IQ': 'Iraq',
		'IE': 'Ireland',
		'IM': 'Isle of Man',
		'IL': 'Israel',
		'IT': 'Italy',
		'JM': 'Jamaica',
		'JP': 'Japan',
		'JE': 'Jersey',
		'JO': 'Jordan',
		'KZ': 'Kazakhstan',
		'KE': 'Kenya',
		'KI': 'Kiribati',
		'KP': 'Korea, Democratic People\'S Republic of',
		'KR': 'Korea, Republic of',
		'KW': 'Kuwait',
		'KG': 'Kyrgyzstan',
		'LA': 'Lao People\'S Democratic Republic',
		'LV': 'Latvia',
		'LB': 'Lebanon',
		'LS': 'Lesotho',
		'LR': 'Liberia',
		'LY': 'Libyan Arab Jamahiriya',
		'LI': 'Liechtenstein',
		'LT': 'Lithuania',
		'LU': 'Luxembourg',
		'MO': 'Macao',
		'MK': 'Macedonia, The Former Yugoslav Republic of',
		'MG': 'Madagascar',
		'MW': 'Malawi',
		'MY': 'Malaysia',
		'MV': 'Maldives',
		'ML': 'Mali',
		'MT': 'Malta',
		'MH': 'Marshall Islands',
		'MQ': 'Martinique',
		'MR': 'Mauritania',
		'MU': 'Mauritius',
		'YT': 'Mayotte',
		'MX': 'Mexico',
		'FM': 'Micronesia, Federated States of',
		'MD': 'Moldova, Republic of',
		'MC': 'Monaco',
		'MN': 'Mongolia',
		'MS': 'Montserrat',
		'MA': 'Morocco',
		'MZ': 'Mozambique',
		'MM': 'Myanmar',
		'NA': 'Namibia',
		'NR': 'Nauru',
		'NP': 'Nepal',
		'NL': 'Netherlands',
		'AN': 'Netherlands Antilles',
		'NC': 'New Caledonia',
		'NZ': 'New Zealand',
		'NI': 'Nicaragua',
		'NE': 'Niger',
		'NG': 'Nigeria',
		'NU': 'Niue',
		'NF': 'Norfolk Island',
		'MP': 'Northern Mariana Islands',
		'NO': 'Norway',
		'OM': 'Oman',
		'PK': 'Pakistan',
		'PW': 'Palau',
		'PS': 'Palestinian Territory, Occupied',
		'PA': 'Panama',
		'PG': 'Papua New Guinea',
		'PY': 'Paraguay',
		'PE': 'Peru',
		'PH': 'Philippines',
		'PN': 'Pitcairn',
		'PL': 'Poland',
		'PT': 'Portugal',
		'PR': 'Puerto Rico',
		'QA': 'Qatar',
		'RE': 'Reunion',
		'RO': 'Romania',
		'RU': 'Russian Federation',
		'RW': 'RWANDA',
		'SH': 'Saint Helena',
		'KN': 'Saint Kitts and Nevis',
		'LC': 'Saint Lucia',
		'PM': 'Saint Pierre and Miquelon',
		'VC': 'Saint Vincent and the Grenadines',
		'WS': 'Samoa',
		'SM': 'San Marino',
		'ST': 'Sao Tome and Principe',
		'SA': 'Saudi Arabia',
		'SN': 'Senegal',
		'CS': 'Serbia and Montenegro',
		'RS': 'Serbia',
		'SC': 'Seychelles',
		'SL': 'Sierra Leone',
		'SG': 'Singapore',
		'SK': 'Slovakia',
		'SI': 'Slovenia',
		'SB': 'Solomon Islands',
		'SO': 'Somalia',
		'ZA': 'South Africa',
		'GS': 'South Georgia and the South Sandwich Islands',
		'ES': 'Spain',
		'LK': 'Sri Lanka',
		'SD': 'Sudan',
		'SR': 'Suriname',
		'SJ': 'Svalbard and Jan Mayen',
		'SZ': 'Swaziland',
		'SE': 'Sweden',
		'CH': 'Switzerland',
		'SY': 'Syrian Arab Republic',
		'TW': 'Taiwan, Province of China',
		'TJ': 'Tajikistan',
		'TZ': 'Tanzania, United Republic of',
		'TH': 'Thailand',
		'TL': 'Timor-Leste',
		'TG': 'Togo',
		'TK': 'Tokelau',
		'TO': 'Tonga',
		'TT': 'Trinidad and Tobago',
		'TN': 'Tunisia',
		'TR': 'Turkey',
		'TM': 'Turkmenistan',
		'TC': 'Turks and Caicos Islands',
		'TV': 'Tuvalu',
		'UG': 'Uganda',
		'UA': 'Ukraine',
		'AE': 'United Arab Emirates',
		'UK': 'United Kingdom',
		'GB': 'United Kingdom',
		'US': 'United States',
		'UM': 'United States Minor Outlying Islands',
		'UY': 'Uruguay',
		'UZ': 'Uzbekistan',
		'VU': 'Vanuatu',
		'VE': 'Venezuela',
		'VN': 'Viet Nam',
		'VG': 'Virgin Islands, British',
		'VI': 'Virgin Islands, U.S.',
		'WF': 'Wallis and Futuna',
		'EH': 'Western Sahara',
		'YE': 'Yemen',
		'ZM': 'Zambia',
		'ZW': 'Zimbabwe'
	},
	currencies: {
		'USD': {
			'symbol': '$',
			'name': 'US Dollar',
			'symbol_native': '$',
			'decimal_digits': 2,
			'code': 'USD',
			'name_plural': 'US dollars'
		},
		'CAD': {
			'symbol': 'CA$',
			'name': 'Canadian Dollar',
			'symbol_native': '$',
			'decimal_digits': 2,
			'code': 'CAD',
			'name_plural': 'Canadian dollars'
		},
		'EUR': {
			'symbol': '€',
			'name': 'Euro',
			'symbol_native': '€',
			'decimal_digits': 2,
			'code': 'EUR',
			'name_plural': 'euros'
		},
		'AED': {
			'symbol': 'AED',
			'name': 'UAE Dirham',
			'symbol_native': 'د.إ.‏',
			'decimal_digits': 2,
			'code': 'AED',
			'name_plural': 'UAE dirhams'
		},
		'AFN': {
			'symbol': 'Af',
			'name': 'Afghan Afghani',
			'symbol_native': '؋',
			'decimal_digits': 0,
			'code': 'AFN',
			'name_plural': 'Afghan Afghanis'
		},
		'ALL': {
			'symbol': 'ALL',
			'name': 'Albanian Lek',
			'symbol_native': 'Lek',
			'decimal_digits': 0,
			'code': 'ALL',
			'name_plural': 'Albanian lekë'
		},
		'AMD': {
			'symbol': 'AMD',
			'name': 'Armenian Dram',
			'symbol_native': 'դր.',
			'decimal_digits': 0,
			'code': 'AMD',
			'name_plural': 'Armenian drams'
		},
		'ARS': {
			'symbol': 'AR$',
			'name': 'Argentine Peso',
			'symbol_native': '$',
			'decimal_digits': 2,
			'code': 'ARS',
			'name_plural': 'Argentine pesos'
		},
		'AUD': {
			'symbol': 'AU$',
			'name': 'Australian Dollar',
			'symbol_native': '$',
			'decimal_digits': 2,
			'code': 'AUD',
			'name_plural': 'Australian dollars'
		},
		'AZN': {
			'symbol': 'man.',
			'name': 'Azerbaijani Manat',
			'symbol_native': 'ман.',
			'decimal_digits': 2,
			'code': 'AZN',
			'name_plural': 'Azerbaijani manats'
		},
		'BAM': {
			'symbol': 'KM',
			'name': 'Bosnia-Herzegovina Convertible Mark',
			'symbol_native': 'KM',
			'decimal_digits': 2,
			'code': 'BAM',
			'name_plural': 'Bosnia-Herzegovina convertible marks'
		},
		'BDT': {
			'symbol': 'Tk',
			'name': 'Bangladeshi Taka',
			'symbol_native': '৳',
			'decimal_digits': 2,
			'code': 'BDT',
			'name_plural': 'Bangladeshi takas'
		},
		'BGN': {
			'symbol': 'BGN',
			'name': 'Bulgarian Lev',
			'symbol_native': 'лв.',
			'decimal_digits': 2,
			'code': 'BGN',
			'name_plural': 'Bulgarian leva'
		},
		'BHD': {
			'symbol': 'BD',
			'name': 'Bahraini Dinar',
			'symbol_native': 'د.ب.‏',
			'decimal_digits': 3,
			'code': 'BHD',
			'name_plural': 'Bahraini dinars'
		},
		'BIF': {
			'symbol': 'FBu',
			'name': 'Burundian Franc',
			'symbol_native': 'FBu',
			'decimal_digits': 0,
			'code': 'BIF',
			'name_plural': 'Burundian francs'
		},
		'BND': {
			'symbol': 'BN$',
			'name': 'Brunei Dollar',
			'symbol_native': '$',
			'decimal_digits': 2,
			'code': 'BND',
			'name_plural': 'Brunei dollars'
		},
		'BOB': {
			'symbol': 'Bs',
			'name': 'Bolivian Boliviano',
			'symbol_native': 'Bs',
			'decimal_digits': 2,
			'code': 'BOB',
			'name_plural': 'Bolivian bolivianos'
		},
		'BRL': {
			'symbol': 'R$',
			'name': 'Brazilian Real',
			'symbol_native': 'R$',
			'decimal_digits': 2,
			'code': 'BRL',
			'name_plural': 'Brazilian reals'
		},
		'BWP': {
			'symbol': 'BWP',
			'name': 'Botswanan Pula',
			'symbol_native': 'P',
			'decimal_digits': 2,
			'code': 'BWP',
			'name_plural': 'Botswanan pulas'
		},
		'BYR': {
			'symbol': 'BYR',
			'name': 'Belarusian Ruble',
			'symbol_native': 'BYR',
			'decimal_digits': 0,
			'code': 'BYR',
			'name_plural': 'Belarusian rubles'
		},
		'BZD': {
			'symbol': 'BZ$',
			'name': 'Belize Dollar',
			'symbol_native': '$',
			'decimal_digits': 2,
			'code': 'BZD',
			'name_plural': 'Belize dollars'
		},
		'CDF': {
			'symbol': 'CDF',
			'name': 'Congolese Franc',
			'symbol_native': 'FrCD',
			'decimal_digits': 2,
			'code': 'CDF',
			'name_plural': 'Congolese francs'
		},
		'CHF': {
			'symbol': 'CHF',
			'name': 'Swiss Franc',
			'symbol_native': 'CHF',
			'decimal_digits': 2,
			'code': 'CHF',
			'name_plural': 'Swiss francs'
		},
		'CLP': {
			'symbol': 'CL$',
			'name': 'Chilean Peso',
			'symbol_native': '$',
			'decimal_digits': 0,
			'code': 'CLP',
			'name_plural': 'Chilean pesos'
		},
		'CNY': {
			'symbol': 'CN¥',
			'name': 'Chinese Yuan',
			'symbol_native': 'CN¥',
			'decimal_digits': 2,
			'code': 'CNY',
			'name_plural': 'Chinese yuan'
		},
		'COP': {
			'symbol': 'CO$',
			'name': 'Colombian Peso',
			'symbol_native': '$',
			'decimal_digits': 0,
			'code': 'COP',
			'name_plural': 'Colombian pesos'
		},
		'CRC': {
			'symbol': '₡',
			'name': 'Costa Rican Colón',
			'symbol_native': '₡',
			'decimal_digits': 0,
			'code': 'CRC',
			'name_plural': 'Costa Rican colóns'
		},
		'CVE': {
			'symbol': 'CV$',
			'name': 'Cape Verdean Escudo',
			'symbol_native': 'CV$',
			'decimal_digits': 2,
			'code': 'CVE',
			'name_plural': 'Cape Verdean escudos'
		},
		'CZK': {
			'symbol': 'Kč',
			'name': 'Czech Republic Koruna',
			'symbol_native': 'Kč',
			'decimal_digits': 2,
			'code': 'CZK',
			'name_plural': 'Czech Republic korunas'
		},
		'DJF': {
			'symbol': 'Fdj',
			'name': 'Djiboutian Franc',
			'symbol_native': 'Fdj',
			'decimal_digits': 0,
			'code': 'DJF',
			'name_plural': 'Djiboutian francs'
		},
		'DKK': {
			'symbol': 'Dkr',
			'name': 'Danish Krone',
			'symbol_native': 'kr',
			'decimal_digits': 2,
			'code': 'DKK',
			'name_plural': 'Danish kroner'
		},
		'DOP': {
			'symbol': 'RD$',
			'name': 'Dominican Peso',
			'symbol_native': 'RD$',
			'decimal_digits': 2,
			'code': 'DOP',
			'name_plural': 'Dominican pesos'
		},
		'DZD': {
			'symbol': 'DA',
			'name': 'Algerian Dinar',
			'symbol_native': 'د.ج.‏',
			'decimal_digits': 2,
			'code': 'DZD',
			'name_plural': 'Algerian dinars'
		},
		'EEK': {
			'symbol': 'Ekr',
			'name': 'Estonian Kroon',
			'symbol_native': 'kr',
			'decimal_digits': 2,
			'code': 'EEK',
			'name_plural': 'Estonian kroons'
		},
		'EGP': {
			'symbol': 'EGP',
			'name': 'Egyptian Pound',
			'symbol_native': 'ج.م.‏',
			'decimal_digits': 2,
			'code': 'EGP',
			'name_plural': 'Egyptian pounds'
		},
		'ERN': {
			'symbol': 'Nfk',
			'name': 'Eritrean Nakfa',
			'symbol_native': 'Nfk',
			'decimal_digits': 2,
			'code': 'ERN',
			'name_plural': 'Eritrean nakfas'
		},
		'ETB': {
			'symbol': 'Br',
			'name': 'Ethiopian Birr',
			'symbol_native': 'Br',
			'decimal_digits': 2,
			'code': 'ETB',
			'name_plural': 'Ethiopian birrs'
		},
		'GBP': {
			'symbol': '£',
			'name': 'British Pound Sterling',
			'symbol_native': '£',
			'decimal_digits': 2,
			'code': 'GBP',
			'name_plural': 'British pounds sterling'
		},
		'GEL': {
			'symbol': 'GEL',
			'name': 'Georgian Lari',
			'symbol_native': 'GEL',
			'decimal_digits': 2,
			'code': 'GEL',
			'name_plural': 'Georgian laris'
		},
		'GHS': {
			'symbol': 'GH₵',
			'name': 'Ghanaian Cedi',
			'symbol_native': 'GH₵',
			'decimal_digits': 2,
			'code': 'GHS',
			'name_plural': 'Ghanaian cedis'
		},
		'GNF': {
			'symbol': 'FG',
			'name': 'Guinean Franc',
			'symbol_native': 'FG',
			'decimal_digits': 0,
			'code': 'GNF',
			'name_plural': 'Guinean francs'
		},
		'GTQ': {
			'symbol': 'GTQ',
			'name': 'Guatemalan Quetzal',
			'symbol_native': 'Q',
			'decimal_digits': 2,
			'code': 'GTQ',
			'name_plural': 'Guatemalan quetzals'
		},
		'HKD': {
			'symbol': 'HK$',
			'name': 'Hong Kong Dollar',
			'symbol_native': '$',
			'decimal_digits': 2,
			'code': 'HKD',
			'name_plural': 'Hong Kong dollars'
		},
		'HNL': {
			'symbol': 'HNL',
			'name': 'Honduran Lempira',
			'symbol_native': 'L',
			'decimal_digits': 2,
			'code': 'HNL',
			'name_plural': 'Honduran lempiras'
		},
		'HRK': {
			'symbol': 'kn',
			'name': 'Croatian Kuna',
			'symbol_native': 'kn',
			'decimal_digits': 2,
			'code': 'HRK',
			'name_plural': 'Croatian kunas'
		},
		'HUF': {
			'symbol': 'Ft',
			'name': 'Hungarian Forint',
			'symbol_native': 'Ft',
			'decimal_digits': 0,
			'code': 'HUF',
			'name_plural': 'Hungarian forints'
		},
		'IDR': {
			'symbol': 'Rp',
			'name': 'Indonesian Rupiah',
			'symbol_native': 'Rp',
			'decimal_digits': 0,
			'code': 'IDR',
			'name_plural': 'Indonesian rupiahs'
		},
		'ILS': {
			'symbol': '₪',
			'name': 'Israeli New Sheqel',
			'symbol_native': '₪',
			'decimal_digits': 2,
			'code': 'ILS',
			'name_plural': 'Israeli new sheqels'
		},
		'INR': {
			'symbol': 'Rs',
			'name': 'Indian Rupee',
			'symbol_native': 'টকা',
			'decimal_digits': 2,
			'code': 'INR',
			'name_plural': 'Indian rupees'
		},
		'IQD': {
			'symbol': 'IQD',
			'name': 'Iraqi Dinar',
			'symbol_native': 'د.ع.‏',
			'decimal_digits': 0,
			'code': 'IQD',
			'name_plural': 'Iraqi dinars'
		},
		'IRR': {
			'symbol': 'IRR',
			'name': 'Iranian Rial',
			'symbol_native': '﷼',
			'decimal_digits': 0,
			'code': 'IRR',
			'name_plural': 'Iranian rials'
		},
		'ISK': {
			'symbol': 'Ikr',
			'name': 'Icelandic Króna',
			'symbol_native': 'kr',
			'decimal_digits': 0,
			'code': 'ISK',
			'name_plural': 'Icelandic krónur'
		},
		'JMD': {
			'symbol': 'J$',
			'name': 'Jamaican Dollar',
			'symbol_native': '$',
			'decimal_digits': 2,
			'code': 'JMD',
			'name_plural': 'Jamaican dollars'
		},
		'JOD': {
			'symbol': 'JD',
			'name': 'Jordanian Dinar',
			'symbol_native': 'د.أ.‏',
			'decimal_digits': 3,
			'code': 'JOD',
			'name_plural': 'Jordanian dinars'
		},
		'JPY': {
			'symbol': '¥',
			'name': 'Japanese Yen',
			'symbol_native': '￥',
			'decimal_digits': 0,
			'code': 'JPY',
			'name_plural': 'Japanese yen'
		},
		'KES': {
			'symbol': 'Ksh',
			'name': 'Kenyan Shilling',
			'symbol_native': 'Ksh',
			'decimal_digits': 2,
			'code': 'KES',
			'name_plural': 'Kenyan shillings'
		},
		'KHR': {
			'symbol': 'KHR',
			'name': 'Cambodian Riel',
			'symbol_native': '៛',
			'decimal_digits': 2,
			'code': 'KHR',
			'name_plural': 'Cambodian riels'
		},
		'KMF': {
			'symbol': 'CF',
			'name': 'Comorian Franc',
			'symbol_native': 'FC',
			'decimal_digits': 0,
			'code': 'KMF',
			'name_plural': 'Comorian francs'
		},
		'KRW': {
			'symbol': '₩',
			'name': 'South Korean Won',
			'symbol_native': '₩',
			'decimal_digits': 0,
			'code': 'KRW',
			'name_plural': 'South Korean won'
		},
		'KWD': {
			'symbol': 'KD',
			'name': 'Kuwaiti Dinar',
			'symbol_native': 'د.ك.‏',
			'decimal_digits': 3,
			'code': 'KWD',
			'name_plural': 'Kuwaiti dinars'
		},
		'KZT': {
			'symbol': 'KZT',
			'name': 'Kazakhstani Tenge',
			'symbol_native': 'тңг.',
			'decimal_digits': 2,
			'code': 'KZT',
			'name_plural': 'Kazakhstani tenges'
		},
		'LBP': {
			'symbol': 'LB£',
			'name': 'Lebanese Pound',
			'symbol_native': 'ل.ل.‏',
			'decimal_digits': 0,
			'code': 'LBP',
			'name_plural': 'Lebanese pounds'
		},
		'LKR': {
			'symbol': 'SLRs',
			'name': 'Sri Lankan Rupee',
			'symbol_native': 'SL Re',
			'decimal_digits': 2,
			'code': 'LKR',
			'name_plural': 'Sri Lankan rupees'
		},
		'LTL': {
			'symbol': 'Lt',
			'name': 'Lithuanian Litas',
			'symbol_native': 'Lt',
			'decimal_digits': 2,
			'code': 'LTL',
			'name_plural': 'Lithuanian litai'
		},
		'LVL': {
			'symbol': 'Ls',
			'name': 'Latvian Lats',
			'symbol_native': 'Ls',
			'decimal_digits': 2,
			'code': 'LVL',
			'name_plural': 'Latvian lati'
		},
		'LYD': {
			'symbol': 'LD',
			'name': 'Libyan Dinar',
			'symbol_native': 'د.ل.‏',
			'decimal_digits': 3,
			'code': 'LYD',
			'name_plural': 'Libyan dinars'
		},
		'MAD': {
			'symbol': 'MAD',
			'name': 'Moroccan Dirham',
			'symbol_native': 'د.م.‏',
			'decimal_digits': 2,
			'code': 'MAD',
			'name_plural': 'Moroccan dirhams'
		},
		'MDL': {
			'symbol': 'MDL',
			'name': 'Moldovan Leu',
			'symbol_native': 'MDL',
			'decimal_digits': 2,
			'code': 'MDL',
			'name_plural': 'Moldovan lei'
		},
		'MGA': {
			'symbol': 'MGA',
			'name': 'Malagasy Ariary',
			'symbol_native': 'MGA',
			'decimal_digits': 0,
			'code': 'MGA',
			'name_plural': 'Malagasy Ariaries'
		},
		'MKD': {
			'symbol': 'MKD',
			'name': 'Macedonian Denar',
			'symbol_native': 'MKD',
			'decimal_digits': 2,
			'code': 'MKD',
			'name_plural': 'Macedonian denari'
		},
		'MMK': {
			'symbol': 'MMK',
			'name': 'Myanma Kyat',
			'symbol_native': 'K',
			'decimal_digits': 0,
			'code': 'MMK',
			'name_plural': 'Myanma kyats'
		},
		'MOP': {
			'symbol': 'MOP$',
			'name': 'Macanese Pataca',
			'symbol_native': 'MOP$',
			'decimal_digits': 2,
			'code': 'MOP',
			'name_plural': 'Macanese patacas'
		},
		'MUR': {
			'symbol': 'MURs',
			'name': 'Mauritian Rupee',
			'symbol_native': 'MURs',
			'decimal_digits': 0,
			'code': 'MUR',
			'name_plural': 'Mauritian rupees'
		},
		'MXN': {
			'symbol': 'MX$',
			'name': 'Mexican Peso',
			'symbol_native': '$',
			'decimal_digits': 2,
			'code': 'MXN',
			'name_plural': 'Mexican pesos'
		},
		'MYR': {
			'symbol': 'RM',
			'name': 'Malaysian Ringgit',
			'symbol_native': 'RM',
			'decimal_digits': 2,
			'code': 'MYR',
			'name_plural': 'Malaysian ringgits'
		},
		'MZN': {
			'symbol': 'MTn',
			'name': 'Mozambican Metical',
			'symbol_native': 'MTn',
			'decimal_digits': 2,
			'code': 'MZN',
			'name_plural': 'Mozambican meticals'
		},
		'NAD': {
			'symbol': 'N$',
			'name': 'Namibian Dollar',
			'symbol_native': 'N$',
			'decimal_digits': 2,
			'code': 'NAD',
			'name_plural': 'Namibian dollars'
		},
		'NGN': {
			'symbol': '₦',
			'name': 'Nigerian Naira',
			'symbol_native': '₦',
			'decimal_digits': 2,
			'code': 'NGN',
			'name_plural': 'Nigerian nairas'
		},
		'NIO': {
			'symbol': 'C$',
			'name': 'Nicaraguan Córdoba',
			'symbol_native': 'C$',
			'decimal_digits': 2,
			'code': 'NIO',
			'name_plural': 'Nicaraguan córdobas'
		},
		'NOK': {
			'symbol': 'Nkr',
			'name': 'Norwegian Krone',
			'symbol_native': 'kr',
			'decimal_digits': 2,
			'code': 'NOK',
			'name_plural': 'Norwegian kroner'
		},
		'NPR': {
			'symbol': 'NPRs',
			'name': 'Nepalese Rupee',
			'symbol_native': 'नेरू',
			'decimal_digits': 2,
			'code': 'NPR',
			'name_plural': 'Nepalese rupees'
		},
		'NZD': {
			'symbol': 'NZ$',
			'name': 'New Zealand Dollar',
			'symbol_native': '$',
			'decimal_digits': 2,
			'code': 'NZD',
			'name_plural': 'New Zealand dollars'
		},
		'OMR': {
			'symbol': 'OMR',
			'name': 'Omani Rial',
			'symbol_native': 'ر.ع.‏',
			'decimal_digits': 3,
			'code': 'OMR',
			'name_plural': 'Omani rials'
		},
		'PAB': {
			'symbol': 'B/.',
			'name': 'Panamanian Balboa',
			'symbol_native': 'B/.',
			'decimal_digits': 2,
			'code': 'PAB',
			'name_plural': 'Panamanian balboas'
		},
		'PEN': {
			'symbol': 'S/.',
			'name': 'Peruvian Nuevo Sol',
			'symbol_native': 'S/.',
			'decimal_digits': 2,
			'code': 'PEN',
			'name_plural': 'Peruvian nuevos soles'
		},
		'PHP': {
			'symbol': '₱',
			'name': 'Philippine Peso',
			'symbol_native': '₱',
			'decimal_digits': 2,
			'code': 'PHP',
			'name_plural': 'Philippine pesos'
		},
		'PKR': {
			'symbol': 'PKRs',
			'name': 'Pakistani Rupee',
			'symbol_native': '₨',
			'decimal_digits': 0,
			'code': 'PKR',
			'name_plural': 'Pakistani rupees'
		},
		'PLN': {
			'symbol': 'zł',
			'name': 'Polish Zloty',
			'symbol_native': 'zł',
			'decimal_digits': 2,
			'code': 'PLN',
			'name_plural': 'Polish zlotys'
		},
		'PYG': {
			'symbol': '₲',
			'name': 'Paraguayan Guarani',
			'symbol_native': '₲',
			'decimal_digits': 0,
			'code': 'PYG',
			'name_plural': 'Paraguayan guaranis'
		},
		'QAR': {
			'symbol': 'QR',
			'name': 'Qatari Rial',
			'symbol_native': 'ر.ق.‏',
			'decimal_digits': 2,
			'code': 'QAR',
			'name_plural': 'Qatari rials'
		},
		'RON': {
			'symbol': 'RON',
			'name': 'Romanian Leu',
			'symbol_native': 'RON',
			'decimal_digits': 2,
			'code': 'RON',
			'name_plural': 'Romanian lei'
		},
		'RSD': {
			'symbol': 'din.',
			'name': 'Serbian Dinar',
			'symbol_native': 'дин.',
			'decimal_digits': 0,
			'code': 'RSD',
			'name_plural': 'Serbian dinars'
		},
		'RUB': {
			'symbol': 'RUB',
			'name': 'Russian Ruble',
			'symbol_native': 'руб.',
			'decimal_digits': 2,
			'code': 'RUB',
			'name_plural': 'Russian rubles'
		},
		'RWF': {
			'symbol': 'RWF',
			'name': 'Rwandan Franc',
			'symbol_native': 'FR',
			'decimal_digits': 0,
			'code': 'RWF',
			'name_plural': 'Rwandan francs'
		},
		'SAR': {
			'symbol': 'SR',
			'name': 'Saudi Riyal',
			'symbol_native': 'ر.س.‏',
			'decimal_digits': 2,
			'code': 'SAR',
			'name_plural': 'Saudi riyals'
		},
		'SDG': {
			'symbol': 'SDG',
			'name': 'Sudanese Pound',
			'symbol_native': 'SDG',
			'decimal_digits': 2,
			'code': 'SDG',
			'name_plural': 'Sudanese pounds'
		},
		'SEK': {
			'symbol': 'Skr',
			'name': 'Swedish Krona',
			'symbol_native': 'kr',
			'decimal_digits': 2,
			'code': 'SEK',
			'name_plural': 'Swedish kronor'
		},
		'SGD': {
			'symbol': 'S$',
			'name': 'Singapore Dollar',
			'symbol_native': '$',
			'decimal_digits': 2,
			'code': 'SGD',
			'name_plural': 'Singapore dollars'
		},
		'SOS': {
			'symbol': 'Ssh',
			'name': 'Somali Shilling',
			'symbol_native': 'Ssh',
			'decimal_digits': 0,
			'code': 'SOS',
			'name_plural': 'Somali shillings'
		},
		'SYP': {
			'symbol': 'SY£',
			'name': 'Syrian Pound',
			'symbol_native': 'ل.س.‏',
			'decimal_digits': 0,
			'code': 'SYP',
			'name_plural': 'Syrian pounds'
		},
		'THB': {
			'symbol': '฿',
			'name': 'Thai Baht',
			'symbol_native': '฿',
			'decimal_digits': 2,
			'code': 'THB',
			'name_plural': 'Thai baht'
		},
		'TND': {
			'symbol': 'DT',
			'name': 'Tunisian Dinar',
			'symbol_native': 'د.ت.‏',
			'decimal_digits': 3,
			'code': 'TND',
			'name_plural': 'Tunisian dinars'
		},
		'TOP': {
			'symbol': 'T$',
			'name': 'Tongan Paʻanga',
			'symbol_native': 'T$',
			'decimal_digits': 2,
			'code': 'TOP',
			'name_plural': 'Tongan paʻanga'
		},
		'TRY': {
			'symbol': 'TL',
			'name': 'Turkish Lira',
			'symbol_native': 'TL',
			'decimal_digits': 2,
			'code': 'TRY',
			'name_plural': 'Turkish Lira'
		},
		'TTD': {
			'symbol': 'TT$',
			'name': 'Trinidad and Tobago Dollar',
			'symbol_native': '$',
			'decimal_digits': 2,
			'code': 'TTD',
			'name_plural': 'Trinidad and Tobago dollars'
		},
		'TWD': {
			'symbol': 'NT$',
			'name': 'New Taiwan Dollar',
			'symbol_native': 'NT$',
			'decimal_digits': 2,
			'code': 'TWD',
			'name_plural': 'New Taiwan dollars'
		},
		'TZS': {
			'symbol': 'TSh',
			'name': 'Tanzanian Shilling',
			'symbol_native': 'TSh',
			'decimal_digits': 0,
			'code': 'TZS',
			'name_plural': 'Tanzanian shillings'
		},
		'UAH': {
			'symbol': '₴',
			'name': 'Ukrainian Hryvnia',
			'symbol_native': '₴',
			'decimal_digits': 2,
			'code': 'UAH',
			'name_plural': 'Ukrainian hryvnias'
		},
		'UGX': {
			'symbol': 'USh',
			'name': 'Ugandan Shilling',
			'symbol_native': 'USh',
			'decimal_digits': 0,
			'code': 'UGX',
			'name_plural': 'Ugandan shillings'
		},
		'UYU': {
			'symbol': '$U',
			'name': 'Uruguayan Peso',
			'symbol_native': '$',
			'decimal_digits': 2,
			'code': 'UYU',
			'name_plural': 'Uruguayan pesos'
		},
		'UZS': {
			'symbol': 'UZS',
			'name': 'Uzbekistan Som',
			'symbol_native': 'UZS',
			'decimal_digits': 0,
			'code': 'UZS',
			'name_plural': 'Uzbekistan som'
		},
		'VEF': {
			'symbol': 'Bs.F.',
			'name': 'Venezuelan Bolívar',
			'symbol_native': 'Bs.F.',
			'decimal_digits': 2,
			'code': 'VEF',
			'name_plural': 'Venezuelan bolívars'
		},
		'VND': {
			'symbol': '₫',
			'name': 'Vietnamese Dong',
			'symbol_native': '₫',
			'decimal_digits': 0,
			'code': 'VND',
			'name_plural': 'Vietnamese dong'
		},
		'XAF': {
			'symbol': 'FCFA',
			'name': 'CFA Franc BEAC',
			'symbol_native': 'FCFA',
			'decimal_digits': 0,
			'code': 'XAF',
			'name_plural': 'CFA francs BEAC'
		},
		'XOF': {
			'symbol': 'CFA',
			'name': 'CFA Franc BCEAO',
			'symbol_native': 'CFA',
			'decimal_digits': 0,
			'code': 'XOF',
			'name_plural': 'CFA francs BCEAO'
		},
		'YER': {
			'symbol': 'YR',
			'name': 'Yemeni Rial',
			'symbol_native': 'ر.ي.‏',
			'decimal_digits': 0,
			'code': 'YER',
			'name_plural': 'Yemeni rials'
		},
		'ZAR': {
			'symbol': 'R',
			'name': 'South African Rand',
			'symbol_native': 'R',
			'decimal_digits': 2,
			'code': 'ZAR',
			'name_plural': 'South African rand'
		},
		'ZMK': {
			'symbol': 'ZK',
			'name': 'Zambian Kwacha',
			'symbol_native': 'ZK',
			'decimal_digits': 0,
			'code': 'ZMK',
			'name_plural': 'Zambian kwachas'
		}
	},
	IPSUM: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.',
	colors: {
		diverging: [
			'#bf9d76',
			'#e99450',
			'#7794b1',
			'#f2dfa7',
			'#a5d7c6',
			'#afafaf',
			'#707160',
			'#ba9383',
			'#d9d5c3',
			'#8c510a',
			'#bf812d',
			'#dfc27d',
			'#f6e8c3',
			'#c7eae5',
			'#80cdc1',
			'#35978f',
			'#01665e',
			'#003c30'],
		single: ['#66A4D9'],
		single2: ['#35978f'],
		single3: ['#dfc27d'],
		single4: ['#e99450']
	}
};
