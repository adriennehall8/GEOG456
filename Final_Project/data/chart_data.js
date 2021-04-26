//literally the least efficient way to do this but I sorted, filtered, and aggregated the data in excel to manually create these simple arrays.

//states with NHPD properties - array length = 55
var states = ["AK", "AL","AR", "AZ", "CA", "CO", "CT", "DC", "DE", "FL", "GA", "HI", "IA", "ID", "IL", "IN", "KS", "KY", "LA", "MA", "MD", "ME", "MI", "MN", "MO", "MP", "MS", "MT", "NC", "ND", "NE", "NH", "NJ", "NM", "NV", "NY", "OH", "OK", "OR", "PA", "RI", "SC", "SD", "TN", "TX", "UT", "VA", "VT", "WA", "WI", "WP", "WV", "WY"];

//total housing units by state - array length = 55
var unitsByState = [7449, 95384, 53318, 50250, 469714, 77775, 77031, 38117, 14663, 309034, 177662, 17579, 43761, 18211, 208433, 104394, 42796, 79533, 89003, 170961, 103056, 28278, 152323, 115133, 106293, 361, 65788, 15702, 142330, 11569, 29314, 21947, 147472, 27976, 35739, 569367, 215682, 54272, 56135, 176947, 34270, 71069, 17286, 116958, 337767, 34237, 131325, 13881, 122621, 93234, 49, 32724, 8444];

//total active subsidies by state - array length = 55
var subsidiesByState = [271, 2168, 1774, 1161, 9512, 1765, 1526, 459, 416, 5408, 3281, 339, 1634, 713, 3699, 2852, 1354, 2351, 2123, 3763, 1907, 1030, 3319, 2842, 3130, 8, 1699, 570, 3950, 498, 1111, 772, 2900, 630, 742, 7381, 5450, 1553, 1553, 3722, 805, 2182, 725, 2529, 5170, 880, 2382, 719, 2770, 2667, 1, 985, 324];

//these variables capture the number of properties with an expiring subsidy by state by earliest end year
//only included the next 5 years because of the tedious way I went about this

// in this case the same 51 states had properties expiring each year between 2021-2025 so I can use one state array for the 5 years
var statesEndYear = ["AK", "AL", "AR", "AZ", "CA", "CO", "CT", "DC", "DE", "FL", "GA", "HI", "IA", "ID", "IL", "IN", "KS", "KY","LA", "MA", "MD", "ME", "MI", "MN", "MO", "MS", "MT", "NC", "ND", "NE","NH", "NJ", "NM", "NV", "NY", "OH", "OK", "OR", "PA", "RI", "SC", "SD", "TN", "TX", "UT", "VA", "VT", "WA", "WI", "WV", "WY"];

//count of properties expiring by year per by state
var ending2021 = [3, 80, 50, 21, 290, 52, 42, 17, 9, 102, 71, 9, 53, 18, 74, 99, 39, 36, 32, 93, 54, 14, 107, 95, 99, 54, 20, 104, 15, 32, 18, 114, 12, 19, 279, 162, 25, 56, 105, 29, 48, 44, 58, 140, 21, 52, 20, 66, 88, 14, 7]

var ending2022 = [6, 49, 37, 28, 239, 82, 42, 12, 15, 108, 65, 10, 52, 15, 93, 132, 24, 86, 38, 94, 31, 22, 85, 70, 129, 69, 12, 101, 26, 38, 12, 88, 19, 21, 261, 199, 49, 50, 95, 20, 39, 26, 60, 125, 22, 46, 8, 52, 112, 26, 7];

var ending2023 = [4, 90, 31, 18, 243, 74, 34, 8, 14, 88, 66, 9, 68, 28, 122, 99, 47, 73, 51, 109, 47, 24, 78, 127, 118, 44, 13, 162, 21, 20, 18, 82, 26, 19, 224, 194, 48, 50, 87, 21, 45, 19, 69, 91, 39, 54, 20, 68, 98, 14, 8];

var ending2024 = [5, 72, 39, 37, 256, 43, 30, 9, 15, 91, 77, 8, 76, 19, 97, 120, 39, 78, 46, 89, 41, 37, 75, 112, 122, 42, 17, 174, 17, 45, 18, 73, 14, 18, 240, 246, 34, 66, 106, 24, 48, 32, 75, 119, 32, 47, 12, 91, 106, 17, 6];

var ending2025 = [8, 51, 35, 37, 288, 35, 53, 5, 6, 117, 84, 9, 65, 19, 89, 86, 26, 60, 37, 71, 45, 27, 93, 87, 110, 39, 20, 125, 30, 54, 35, 85, 18, 25, 224, 325, 40, 57, 85, 22, 68, 32, 73, 139, 30, 55, 24, 66, 118, 17, 14];