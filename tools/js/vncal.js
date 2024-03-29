var TK19 = new Array(
	0x30baa3, 0x56ab50, 0x422ba0, 0x2cab61, 0x52a370, 0x3c51e8, 0x60d160, 0x4ae4b0, 0x376926, 0x58daa0,
	0x445b50, 0x3116d2, 0x562ae0, 0x3ea2e0, 0x28e2d2, 0x4ec950, 0x38d556, 0x5cb520, 0x46b690, 0x325da4,
	0x5855d0, 0x4225d0, 0x2ca5b3, 0x52a2b0, 0x3da8b7, 0x60a950, 0x4ab4a0, 0x35b2a5, 0x5aad50, 0x4455b0,
	0x302b74, 0x562570, 0x4052f9, 0x6452b0, 0x4e6950, 0x386d56, 0x5e5aa0, 0x46ab50, 0x3256d4, 0x584ae0,
	0x42a570, 0x2d4553, 0x50d2a0, 0x3be8a7, 0x60d550, 0x4a5aa0, 0x34ada5, 0x5a95d0, 0x464ae0, 0x2eaab4,
	0x54a4d0, 0x3ed2b8, 0x64b290, 0x4cb550, 0x385757, 0x5e2da0, 0x4895d0, 0x324d75, 0x5849b0, 0x42a4b0,
	0x2da4b3, 0x506a90, 0x3aad98, 0x606b50, 0x4c2b60, 0x359365, 0x5a9370, 0x464970, 0x306964, 0x52e4a0,
	0x3cea6a, 0x62da90, 0x4e5ad0, 0x392ad6, 0x5e2ae0, 0x4892e0, 0x32cad5, 0x56c950, 0x40d4a0, 0x2bd4a3,
	0x50b690, 0x3a57a7, 0x6055b0, 0x4c25d0, 0x3695b5, 0x5a92b0, 0x44a950, 0x2ed954, 0x54b4a0, 0x3cb550,
	0x286b52, 0x4e55b0, 0x3a2776, 0x5e2570, 0x4852b0, 0x32aaa5, 0x56e950, 0x406aa0, 0x2abaa3, 0x50ab50
); /* Years 2000-2099 */

var TK20 = new Array(
	0x3c4bd8, 0x624ae0, 0x4ca570, 0x3854d5, 0x5cd260, 0x44d950, 0x315554, 0x5656a0, 0x409ad0, 0x2a55d2,
	0x504ae0, 0x3aa5b6, 0x60a4d0, 0x48d250, 0x33d255, 0x58b540, 0x42d6a0, 0x2cada2, 0x5295b0, 0x3f4977,
	0x644970, 0x4ca4b0, 0x36b4b5, 0x5c6a50, 0x466d50, 0x312b54, 0x562b60, 0x409570, 0x2c52f2, 0x504970,
	0x3a6566, 0x5ed4a0, 0x48ea50, 0x336a95, 0x585ad0, 0x442b60, 0x2f86e3, 0x5292e0, 0x3dc8d7, 0x62c950,
	0x4cd4a0, 0x35d8a6, 0x5ab550, 0x4656a0, 0x31a5b4, 0x5625d0, 0x4092d0, 0x2ad2b2, 0x50a950, 0x38b557,
	0x5e6ca0, 0x48b550, 0x355355, 0x584da0, 0x42a5b0, 0x2f4573, 0x5452b0, 0x3ca9a8, 0x60e950, 0x4c6aa0,
	0x36aea6, 0x5aab50, 0x464b60, 0x30aae4, 0x56a570, 0x405260, 0x28f263, 0x4ed940, 0x38db47, 0x5cd6a0,
	0x4896d0, 0x344dd5, 0x5a4ad0, 0x42a4d0, 0x2cd4b4, 0x52b250, 0x3cd558, 0x60b540, 0x4ab5a0, 0x3755a6,
	0x5c95b0, 0x4649b0, 0x30a974, 0x56a4b0, 0x40aa50, 0x29aa52, 0x4e6d20, 0x39ad47, 0x5eab60, 0x489370,
	0x344af5, 0x5a4970, 0x4464b0, 0x2c74a3, 0x50ea50, 0x3d6a58, 0x6256a0, 0x4aaad0, 0x3696d5, 0x5c92e0
); /* Years 1900-1999 */

var TK21 = new Array(
	0x46c960, 0x2ed954, 0x54d4a0, 0x3eda50, 0x2a7552, 0x4e56a0, 0x38a7a7, 0x5ea5d0, 0x4a92b0, 0x32aab5,
	0x58a950, 0x42b4a0, 0x2cbaa4, 0x50ad50, 0x3c55d9, 0x624ba0, 0x4ca5b0, 0x375176, 0x5c5270, 0x466930,
	0x307934, 0x546aa0, 0x3ead50, 0x2a5b52, 0x504b60, 0x38a6e6, 0x5ea4e0, 0x48d260, 0x32ea65, 0x56d520,
	0x40daa0, 0x2d56a3, 0x5256d0, 0x3c4afb, 0x6249d0, 0x4ca4d0, 0x37d0b6, 0x5ab250, 0x44b520, 0x2edd25,
	0x54b5a0, 0x3e55d0, 0x2a55b2, 0x5049b0, 0x3aa577, 0x5ea4b0, 0x48aa50, 0x33b255, 0x586d20, 0x40ad60,
	0x2d4b63, 0x525370, 0x3e49e8, 0x60c970, 0x4c54b0, 0x3768a6, 0x5ada50, 0x445aa0, 0x2fa6a4, 0x54aad0,
	0x4052e0, 0x28d2e3, 0x4ec950, 0x38d557, 0x5ed4a0, 0x46d950, 0x325d55, 0x5856a0, 0x42a6d0, 0x2c55d4,
	0x5252b0, 0x3ca9b8, 0x62a930, 0x4ab490, 0x34b6a6, 0x5aad50, 0x4655a0, 0x2eab64, 0x54a570, 0x4052b0,
	0x2ab173, 0x4e6930, 0x386b37, 0x5e6aa0, 0x48ad50, 0x332ad5, 0x582b60, 0x42a570, 0x2e52e4, 0x50d160,
	0x3ae958, 0x60d520, 0x4ada90, 0x355aa6, 0x5a56d0, 0x462ae0, 0x30a9d4, 0x54a2d0, 0x3ed150, 0x28e952
); /* Years 2000-2099 */

var TK22 = new Array(
		0x4eb520, 0x38d727, 0x5eada0, 0x4a55b0, 0x362db5, 0x5a45b0, 0x44a2b0, 0x2eb2b4, 0x54a950, 0x3cb559,
		0x626b20, 0x4cad50, 0x385766, 0x5c5370, 0x484570, 0x326574, 0x5852b0, 0x406950, 0x2a7953, 0x505aa0,
		0x3baaa7, 0x5ea6d0, 0x4a4ae0, 0x35a2e5, 0x5aa550, 0x42d2a0, 0x2de2a4, 0x52d550, 0x3e5abb, 0x6256a0,
		0x4c96d0, 0x3949b6, 0x5e4ab0, 0x46a8d0, 0x30d4b5, 0x56b290, 0x40b550, 0x2a6d52, 0x504da0, 0x3b9567,
		0x609570, 0x4a49b0, 0x34a975, 0x5a64b0, 0x446a90, 0x2cba94, 0x526b50, 0x3e2b60, 0x28ab61, 0x4c9570,
		0x384ae6, 0x5cd160, 0x46e4a0, 0x2eed25, 0x54da90, 0x405b50, 0x2c36d3, 0x502ae0, 0x3a93d7, 0x6092d0,
		0x4ac950, 0x32d556, 0x58b4a0, 0x42b690, 0x2e5d94, 0x5255b0, 0x3e25fa, 0x6425b0, 0x4e92b0, 0x36aab6,
		0x5c6950, 0x4674a0, 0x31b2a5, 0x54ad50, 0x4055a0, 0x2aab73, 0x522570, 0x3a5377, 0x6052b0, 0x4a6950,
		0x346d56, 0x585aa0, 0x42ab50, 0x2e56d4, 0x544ae0, 0x3ca570, 0x2864d2, 0x4cd260, 0x36eaa6, 0x5ad550,
		0x465aa0, 0x30ada5, 0x5695d0, 0x404ad0, 0x2aa9b3, 0x50a4d0, 0x3ad2b7, 0x5eb250, 0x48b540, 0x33d556
); /* Years 2100-2199 */

var CAN = new Array("Giáp", "Ất", "Bính", "Đinh", "Mậu", "Kỷ", "Canh", "Tân", "Nhâm", "Quý");
var CHI = new Array("Tý", "Sửu", "Dần", "Mão", "Thìn", "Tỵ", "Ngọ", "Mùi", "Thân", "Dậu", "Tuất", "Hợi");
var TUAN = new Array("Chủ nhật", "Thứ hai", "Thứ ba", "Thứ tư", "Thứ năm", "Thứ sáu", "Thứ bảy");
var GIO_HD = new Array("110100101100", "001101001011", "110011010010", "101100110100", "001011001101", "010010110011");
var TIETKHI = new Array("Xuân phân", "Thanh minh", "Cốc vũ", "Lập hạ", "Tiểu mãn", "Mang chủng", "Hạ chí", "Tiểu thử", "Đại thử", "Lập thu", "Xử thử", "Bạch lộ", "Thu phân", "Hàn lộ", "Sương giáng", "Lập đông", "Tiểu tuyết", "Đại tuyết", "Đông chí", "Tiểu hàn", "Đại hàn", "Lập xuân", "Vũ Thủy", "Kinh trập");
var DAYNAMES = new Array("CN", "T2", "T3", "T4", "T5", "T6", "T7");
var TEN_THANG = ['Tháng Giêng', 'Tháng Hai', 'Tháng Ba', 'Tháng Tư', 'Tháng Năm', 'Tháng Sáu', 'Tháng Bảy', 'Tháng Tám', 'Tháng Chín', 'Tháng Mười', 'Tháng Mười Một', 'Tháng Chạp'];
var TEN_THANG_EN = [ 'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December' ];
var HOLIDAY = {
	"D":{	
		'1-1':"Tết Dương Lịch",		
		'14-2':"Lễ Tình Nhân.<i class='fa fa-heartbeat'></i> Valentine",		
		'8-3':"Ngày Quốc Tế Phụ Nữ",		
		'1-4':"Cá Tháng Tư",
		'30-4':"Giải Phóng Miền Nam",
		'1-5':"Quốc Tế Lao Động",
		'1-6':"Quốc Tế Thiếu Nhi",
		'2-9':"Quốc Khánh Nước Cộng Hòa Xã Hội Chủ Nghĩa Việt Nam",
		'30-10':"Halloween",
		'25-12':"Giáng sinh"
	},
	"DK":{
		'9-1':"Ngày Học sinh - Sinh viên Việt Nam",
		'3-2':"Thành lập Đảng Cộng Sản Việt Nam",
		'4-2':"Ngày ung thư thế giới",
		'20-2':"Ngày Công bằng xã hội thế giới",
		'27-2':"Ngày thầy thuốc Việt Nam",
		'20-3':"Ngày Quốc tế Hạnh Phúc",
		'21-3':"Ngày Thơ thế giới",
		'22-3':"Ngày Nước thế giới",
		'23-3':"Ngày Khí tượng thế giới",
		'24-3':"Ngày Thế giới phòng chống lao",
		'26-3':"Thành lập Đoàn Thanh niên",
		'7-4':"Ngày Sức khỏe thế giới",
		'21-4':"Ngày sách Việt Nam",
		'23-4':"Ngày tiếng Anh",
		'26-4':"Ngày Sở hữu trí tuệ thế giới",
		'15-5':"Ngày Quốc tế Gia Đình\nThành lập Đội Thiếu niên Tiền phong",
		'5-6':"Ngày môi trường thế giới\nNgày Bác Hồ ra đi tìm đường cứu nước",
		'27-7':"Thương binh liệt sĩ",
		'19-8':"Cách Mạng tháng Tám thành công",
		'16-9':"Ngày Quốc tế bảo vệ tầng Ôzôn",
		'21-9':"Ngày Quốc tế hòa bình",
		'27-9':"Ngày Du lịch thế giới",
		'5-10':"Ngày Nhà giáo thế giới",
		'13-10':"Ngày Doanh nhân Việt Nam",
		'16-10':"Ngày Lương thực thế giới",
		'20-10':"Thành lập Hội Phụ nữ Việt Nam",
		'20-11':"Ngày nhà giáo Việt Nam",
		'22-12':"Thành lập Quân Đội Nhân Dân Việt Nam"
	},
	"A":{
		"1-1":'<i class="fa fa-asterisk"></i>Tết Nguyên Đán<i class="fa fa-asterisk"></i>',
		"15-1":"Tết Nguyên Tiêu. Rằm Tháng Giêng",
		"3-3":"Tết Hàn thực",
		"10-3":"Giỗ Tổ Hùng Vương",
		"5-5":"Tết Đoan Ngọ",
		"15-7":"Lễ Vu Lan",
		"15-8":"Tết Trung Thu",
		"23-12":"Ông Táo chầu trời"
	},
	"AK":{
		"15-4": "Lễ Phật Đản"
	}
}
	

/* Create lunar date object, stores (lunar) date, month, year, leap month indicator, and Julian date number */
function LunarDate(dd, mm, yy, leap, jd) {
	this.day = dd;
	this.month = mm;
	this.year = yy;
	this.leap = leap;
	this.jd = jd;
}

var PI = Math.PI;

/* Discard the fractional part of a number, e.g., INT(3.2) = 3 */
function INT(d) {
	return Math.floor(d);
}

function jdn(dd, mm, yy) {
	var a = INT((14 - mm) / 12);
	var y = yy+4800-a;
	var m = mm+12*a-3;
	var jd = dd + INT((153*m+2)/5) + 365*y + INT(y/4) - INT(y/100) + INT(y/400) - 32045;
	return jd;	
}

function jdn2date(jd) {
	var Z, A, alpha, B, C, D, E, dd, mm, yyyy, F;
	Z = jd;
	if (Z < 2299161) {
	  A = Z;
	} else {
	  alpha = INT((Z-1867216.25)/36524.25);
	  A = Z + 1 + alpha - INT(alpha/4);
	}
	B = A + 1524;
	C = INT( (B-122.1)/365.25);
	D = INT( 365.25*C );
	E = INT( (B-D)/30.6001 );
	dd = INT(B - D - INT(30.6001*E));
	if (E < 14) {
	  mm = E - 1;
	} else {
	  mm = E - 13;
	}
	if (mm < 3) {
	  yyyy = C - 4715;
	} else {
	  yyyy = C - 4716;
	}
	return new Array(dd, mm, yyyy);
}

function decodeLunarYear(yy, k) {
	var monthLengths, regularMonths, offsetOfTet, leapMonth, leapMonthLength, solarNY, currentJD, j, mm;
	var ly = new Array();
	monthLengths = new Array(29, 30);
	regularMonths = new Array(12);
	offsetOfTet = k >> 17;
	leapMonth = k & 0xf;
	leapMonthLength = monthLengths[k >> 16 & 0x1];
	solarNY = jdn(1, 1, yy);
	currentJD = solarNY+offsetOfTet;
	j = k >> 4;
	for(i = 0; i < 12; i++) {
		regularMonths[12 - i - 1] = monthLengths[j & 0x1];
		j >>= 1;
	}
	if (leapMonth == 0) {
		for(mm = 1; mm <= 12; mm++) {
			ly.push(new LunarDate(1, mm, yy, 0, currentJD));
			currentJD += regularMonths[mm-1];
		}
	} else {
		for(mm = 1; mm <= leapMonth; mm++) {
			ly.push(new LunarDate(1, mm, yy, 0, currentJD));
			currentJD += regularMonths[mm-1];
		}
		ly.push(new LunarDate(1, leapMonth, yy, 1, currentJD));
		currentJD += leapMonthLength;
		for(mm = leapMonth+1; mm <= 12; mm++) {
			ly.push(new LunarDate(1, mm, yy, 0, currentJD));
			currentJD += regularMonths[mm-1];
		}
	}
	return ly;
}

function getYearInfo(yyyy) {
	var yearCode;
	if (yyyy < 1900) {
		yearCode = TK19[yyyy - 1800];
	} else if (yyyy < 2000) {
		yearCode = TK20[yyyy - 1900];
	} else if (yyyy < 2100) {
		yearCode = TK21[yyyy - 2000];
	} else {
		yearCode = TK22[yyyy - 2100];
	}
	return decodeLunarYear(yyyy, yearCode);
}

var FIRST_DAY = jdn(25, 1, 1800); // Tet am lich 1800
var LAST_DAY = jdn(31, 12, 2199);

function findLunarDate(jd, ly) {
	if (jd > LAST_DAY || jd < FIRST_DAY || ly[0].jd > jd) {
		return new LunarDate(0, 0, 0, 0, jd);
	}
	var i = ly.length-1;
	while (jd < ly[i].jd) {
		i--;
	}
	var off = jd - ly[i].jd;
	ret = new LunarDate(ly[i].day+off, ly[i].month, ly[i].year, ly[i].leap, jd);
	return ret;
}

function getLunarDate(dd, mm, yyyy) {
	var ly, jd;
	if (yyyy < 1800 || 2199 < yyyy) {
		//return new LunarDate(0, 0, 0, 0, 0);
	}
	ly = getYearInfo(yyyy);
	jd = jdn(dd, mm, yyyy);
	if (jd < ly[0].jd) {
		ly = getYearInfo(yyyy - 1);
	}
	return findLunarDate(jd, ly);
}

/* Compute the longitude of the sun at any time.
 * Parameter: floating number jdn, the number of days since 1/1/4713 BC noon
 * Algorithm from: "Astronomical Algorithms" by Jean Meeus, 1998
 */
function SunLongitude(jdn) {
	var T, T2, dr, M, L0, DL, L;
	T = (jdn - 2451545.0 ) / 36525; // Time in Julian centuries from 2000-01-01 12:00:00 GMT
	T2 = T*T;
	dr = PI/180; // degree to radian
	M = 357.52910 + 35999.05030*T - 0.0001559*T2 - 0.00000048*T*T2; // mean anomaly, degree
	L0 = 280.46645 + 36000.76983*T + 0.0003032*T2; // mean longitude, degree
	DL = (1.914600 - 0.004817*T - 0.000014*T2)*Math.sin(dr*M);
	DL = DL + (0.019993 - 0.000101*T)*Math.sin(dr*2*M) + 0.000290*Math.sin(dr*3*M);
	L = L0 + DL; // true longitude, degree
	L = L*dr;
	L = L - PI*2*(INT(L/(PI*2))); // Normalize to (0, 2*PI)
	return L;
}

/* Compute the sun segment at start (00:00) of the day with the given integral Julian day number.
 * The time zone if the time difference between local time and UTC: 7.0 for UTC+7:00.
 * The function returns a number between 0 and 23.
 * From the day after March equinox and the 1st major term after March equinox, 0 is returned.
 * After that, return 1, 2, 3 ...
 */
function getSunLongitude(dayNumber, timeZone) {
	return INT(SunLongitude(dayNumber - 0.5 - timeZone/24.0) / PI * 12);
}

var today = new Date();
var currentLunarDate = getLunarDate(today.getDate(), today.getMonth()+1, today.getFullYear());
var currentMonth = today.getMonth()+1;
var currentYear = today.getFullYear();

function parseQuery(q) {
	var ret = new Array();
	if (q.length < 2) return ret;
	var s = q.substring(1, q.length);
	var arr = s.split("&");
	var i, j;
	for (i = 0; i < arr.length; i++) {
		var a = arr[i].split("=");
		for (j = 0; j < a.length; j++) {
			ret.push(a[j]);
		}
	}
	return ret;
}

function getSelectedMonth() {
	var query = window.location.search;
	var arr = parseQuery(query);
	var idx;
	for (idx = 0; idx < arr.length; idx++) {
		if (arr[idx] == "mm") {
			currentMonth = parseInt(arr[idx+1]);
		} else if (arr[idx] == "yy") {
			currentYear = parseInt(arr[idx+1]);
		}
	}
}

function getMonth(mm, yy) {
	var ly1, ly2, tet1, jd1, jd2, mm1, yy1, result, i;
	if (mm < 12) {
		mm1 = mm + 1;
		yy1 = yy;
	} else {
		mm1 = 1;
		yy1 = yy + 1;
	}
	jd1 = jdn(1, mm, yy);
	jd2 = jdn(1, mm1, yy1);
	ly1 = getYearInfo(yy);
	
	tet1 = ly1[0].jd;
	result = new Array();
	if (tet1 <= jd1) { 
		for (i = jd1; i < jd2; i++) {
			result.push(findLunarDate(i, ly1));
		}
	} else if (jd1 < tet1 && jd2 < tet1) { 
		ly1 = getYearInfo(yy - 1);
		for (i = jd1; i < jd2; i++) {
			result.push(findLunarDate(i, ly1));
		}
	} else if (jd1 < tet1 && tet1 <= jd2) { 
		ly2 = getYearInfo(yy - 1);
		for (i = jd1; i < tet1; i++) {
			result.push(findLunarDate(i, ly2));
		}
		for (i = tet1; i < jd2; i++) {
			result.push(findLunarDate(i, ly1));
		}
	}
	return result;
}

function getDayName(lunarDate, dofw, sday, smonth, syear) {
	if (lunarDate.day == 0) {
		return "";
	}
	var cc = getCanChi(lunarDate);
	//var s = "Ngày " + cc[0] +", tháng "+cc[1] + ", năm " + cc[2];
	var s = dofw + " " + sday + "/" + smonth + "/" + syear + " - " + lunarDate.day + "/" + lunarDate.month + " " + cc[2];
	
	return s;
}

function getYearCanChi(year) {
	return CAN[(year+6) % 10] + " " + CHI[(year+8) % 12];
}

/*
 * Can cua gio Chinh Ty (00:00) cua ngay voi JDN nay
 */
function getCanHour0(jdn) {
	return CAN[(jdn-1)*2 % 10];
}

function getCanChi(lunar) {
	var dayName, monthName, yearName;
	dayName = CAN[(lunar.jd + 9) % 10] + " " + CHI[(lunar.jd+1)%12];
	monthName = CAN[(lunar.year*12+lunar.month+3) % 10] + " " + CHI[(lunar.month+1)%12];
	if (lunar.leap == 1) {
		monthName += " (nhu\u1EADn)";
	}
	yearName = getYearCanChi(lunar.year);
	return new Array(dayName, monthName, yearName);
}

function getGioHoangDao(jd) {
	var chiOfDay = (jd+1) % 12;
	var gioHD = GIO_HD[chiOfDay % 6]; // same values for Ty' (1) and Ngo. (6), for Suu and Mui etc.
	var ret = "";
	var count = 0;
	for (var i = 0; i < 12; i++) {
		if (gioHD.charAt(i) == '1') {
			ret += CHI[i];
			ret += ' ('+(i*2+23)%24+'-'+(i*2+1)%24+')';
			if (count++ < 5) ret += ', ';
			if (count == 3) ret += '\n';
		}
	}
	return ret;
}

function printSelectedMonth() {
	getSelectedMonth();
	return printTable(currentMonth, currentYear);
}

function printTable(mm, yy) {
	var i, j, k, solar;
	var currentMonth = getMonth(mm, yy);
	if (currentMonth.length == 0) return;
	var ld1 = currentMonth[0];
	var emptyCells = (ld1.jd + 1) % 7;
	var MonthHead = mm + "/" + yy;
	var LunarHead = getYearCanChi(ld1.year);
	
	var res = "";
	res += '<div class="custom-calendar-wrap"><div id="custom-inner" class="custom-inner">';
	res += printHead(mm, yy);
	res += '<div id="calendar" class="fc-calendar-container"><div class="fc-calendar fc-six-rows">';	
	res += '<div class="fc-head">';
	for(var x=0;x<=6;x++) {
		res += '<div title="'+ TUAN[x] +'">'+DAYNAMES[x]+'</div>';
	}
	res += '</div>';
	res += '<div class="fc-body">';
	for (i = 0; i < 6; i++) {
		res += '<div class="fc-row">';
		for (j = 0; j < 7; j++) {
			k = 7 * i + j;
			if (k < emptyCells || k >= emptyCells + currentMonth.length) {
				res += printEmptyCell();
			} else {
				solar = k - emptyCells + 1;
				ld1 = currentMonth[k - emptyCells];
				res += printCell(ld1, solar, mm, yy);				
			}
		}
		res += '</div>';
	}
	res += '</div></div></div>'
	res += '</div></div>';
		
	return res;
}

function getPrevMonthLink(mm, yy) {
	var mm1 = mm > 1 ? mm-1 : 12;
	var yy1 = mm > 1 ? yy : yy-1;
	return '<a id="m-prev" title="Lịch tháng trước" href="'+window.location.pathname+'?yy='+yy1+'&mm='+mm1+'"><span class="custom-prev"></span></a>';	
}

function getNextMonthLink(mm, yy) {
	var mm1 = mm < 12 ? mm+1 : 1;
	var yy1 = mm < 12 ? yy : yy+1;
	return '<a id="m-next" title="Lịch tháng sau" href="'+window.location.pathname+'?yy='+yy1+'&mm='+mm1+'"><span class="custom-next"></span></a>';	
}

function getPrevYearLink(mm, yy) {
	return '<a id="y-prev" title="Lịch tháng này năm trước" href="'+window.location.pathname+'?yy='+(yy-1)+'&mm='+mm+'"><span class="custom-prev"></span></a>';
}

function getNextYearLink(mm, yy) {
	return '<a id="y-next" title="Lịch tháng này năm sau" href="'+window.location.pathname+'?yy='+(yy+1)+'&mm='+mm+'"><span class="custom-next"></span></a>';
}

function printHead(mm, yy) {
	var res = "";
	res += '<div class="custom-header clearfix">';
	res += '<nav>';
	res += getPrevYearLink(mm, yy)+getPrevMonthLink(mm, yy);		
	res += getNextMonthLink(mm, yy)+getNextYearLink(mm, yy);
	res += '</nav>';
	res += '<h2 id="custom-month" class="custom-month">'+TEN_THANG_EN[mm-1]+'</h2><h3 id="custom-year" class="custom-year">'+yy+'</h3>';
	res += '</div>';
	
	return res;
}

function printEmptyCell() {
	return '<div></div>';
}

function printCell(lunarDate, solarDate, solarMonth, solarYear) {
	var cellClass, solarClass, lunarClass, solarColor;
	cellClass = "";
	solarClass = "t2t6";
	lunarClass = "am";
	solarColor = "#000";
	
	var dow = (lunarDate.jd + 1) % 7;
	
	if (dow == 0) {
		solarClass = "cn";
		solarColor = "#FF0000";
	} else if (dow == 6) {
		solarClass = "t7";
		solarColor = "#008000";
	}
	
	if (solarDate == today.getDate() && solarMonth == today.getMonth()+1 && solarYear == today.getFullYear()) {
		cellClass = "fc-today";
	}
	
	if (lunarDate.day == 1 && lunarDate.month == 1) {
		cellClass = "tet";
	}
		
	
	if (lunarDate.leap == 1) {
		lunarClass = "am2";
	}
	
	var lunarMonthLength = getLunarMonthLength(lunarDate.day, solarDate, solarMonth, solarYear);
	var lunar = lunarDate.day;
	if (solarDate == 1 || lunar == 1) {
		if(lunarMonthLength == 30)
			lunar = lunarDate.day + "/" + lunarDate.month + '(Đ)';
		else
			lunar = lunarDate.day + "/" + lunarDate.month + '(T)';
	}
	
	
	var args = lunarDate.day + "," + lunarDate.month + "," + lunarDate.year + "," + lunarDate.leap;
	args += "," + lunarDate.jd + "," + solarDate + "," + solarMonth + "," + solarYear+ "," + lunarMonthLength ;
	
	var res = "";
	res += ('<div class="notEmpty '+ cellClass + '"');
	
	var DHis = solarDate+'-'+solarMonth;
	var AHis = lunarDate.day+'-'+lunarDate.month;
	var hightlight = '';
	if(DHis in HOLIDAY.D || (AHis in HOLIDAY.A  && lunarDate.leap == 0)) hightlight = "*";
	
	
	if (lunarDate != null) res += (' title="'+getDayName(lunarDate, TUAN[dow], solarDate, solarMonth, solarYear)+'" onClick="updateDayInfo('+args+');">');
	res += (' <span style=color:'+solarColor+' class="'+solarClass+' fc-date">'+solarDate + hightlight +'</span> <span class="'+lunarClass+'">'+lunar+'</span></div>');
	
	return res;
}

function updateDayInfo(dd, mm, yy, leap, jd, sday, smonth, syear, length) {
	var lunar = new LunarDate(dd, mm, yy, leap, jd);
	
	var dayOfWeek = TUAN[(lunar.jd + 1) % 7];
	var x2 = '';	
	if (lunar.leap == 1) {
		x2 = "nhuận";
	}

	var DHis = sday+'-'+smonth;
	var AHis = dd+'-'+mm;
	var hisHTML = '';
	if(DHis in HOLIDAY.D) hisHTML += '<div class="solar-holiday">'+ HOLIDAY.D[DHis] +'</div>';
	if(AHis in HOLIDAY.A && leap == 0) hisHTML += '<div class="lular-holiday">'+ HOLIDAY.A[AHis] +'</div>';
	if(DHis in HOLIDAY.DK) hisHTML += '<div class="solar-holiday-other">'+ HOLIDAY.DK[DHis] +'</div>';
	if(AHis in HOLIDAY.AK && leap == 0) hisHTML += '<div class="lular-holiday-other">'+ HOLIDAY.AK[AHis] +'</div>';
	
	if (lunar.day == 0) 
		var cc = ['','',''];
	else
		var cc = getCanChi(lunar);
		
	var htmlDayDetail = '';
	htmlDayDetail += '<div class="solarTop">Tháng ' + smonth + ' năm ' + syear + '</div>';
	htmlDayDetail += '<div class="solarDW"><div class="solarDay">'+ sday +'</div><div class="dayOfWeek">'+ dayOfWeek +'</div></div>';	
	htmlDayDetail += '<div class="lunar-wrap"><div class="left-content"><span class="lunarM">'+ TEN_THANG[lunar.month-1] + (length == 30 ? '(Đ)' : '(T)') + ' ' + x2 +'</span><span class="lunarD">'+ lunar.day +'</span><span class="lunarY">Năm '+ cc[2] +'</span></div><div class="right-content"><span class="lunar-month">Tháng '+ cc[1] + '</span><span class="lunar-day">Ngày '+ cc[0] + '</span><span class="lunar-hour">Giờ ' + getCanHour0(jd) + " " + CHI[0] + '</span><span class="lunar-tk">Tiết ' + TIETKHI[getSunLongitude(jd+1, 7.0)] + '</span></div></div>';
	htmlDayDetail += hisHTML == '' ? '' : '<div class="holiday-wrap">'+hisHTML+'</div>';
	htmlDayDetail += '<div class="best-hours">Giờ hoàng đạo: '+ getGioHoangDao(jd) +'</div>';
	
	document.getElementById("detail-day").innerHTML = htmlDayDetail;
}

function getLunarMonthLength(ld, sd, sm, sy){
	var toLastDay = 30 - ld;
	
	var sDayFromLastDay = sd + toLastDay;
	
	var lastLD = getLunarDate(sDayFromLastDay, sm, sy);

	var result = "";
	if(lastLD.day == "30") result = 30;
	else if (lastLD.day == "1") result = 29;
	else if (lastLD.day == "2") result = 28;
	else if (lastLD.day == "3") result = 27;
	else result = 1;
	return result;	
}
