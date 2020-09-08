const scriptName = 'UnOffi_SHMBot_2-4';
const botVersion = '2020.9.4f6';
/**
 * (string) room
 * (string) sender
 * (boolean) isGroupChat
 * (void) replier.reply(message)
 * (boolean) replier.reply(room, message, hideErrorToast = false) // 전송 성공시 true, 실패시 false 반환
 * (string) imageDB.getProfileBase64()
 * (string) packageName
 */
function response(room, msg, sender, isGroupChat, replier, imageDB, packageName) {
  function getCurrentPeriod(minutes, weeknumber) {
		// 현재 분으로 ~교시 얻은 후 리턴
		var classperiod = new Array(4);
		if(530 <= minutes && minutes < 540) {
			// 조회 10분전
			classperiod = [0.5, '조회', '9:00~9:10', false];

		} else if(540 <= minutes && minutes < 545) {
			// 조회 수업중
			classperiod = [0.5, '조회', '9:00~9:10', true];

		} else if(545 <= minutes && minutes < 550) {
			// 1교시 5분전
			classperiod = [1, '1교시', '9:10~9:50', false];

		} else if(550 <= minutes && minutes < 590) {
			// 1교시 수업중
			classperiod = [1, '1교시', '9:10~9:50', true];

		} else if(590 <= minutes && minutes < 600) {
			// 2교시 10분전
			classperiod = [2, '2교시', '10:00~10:40', false];

		} else if(600 <= minutes && minutes < 640) {
			// 2교시 수업중
			classperiod = [2, '2교시', '10:00~10:40', true];

		} else if(640 <= minutes && minutes < 650) {
			// 3교시 10분전
			classperiod = [3, '3교시', '10:50~11:30', false];

		} else if(650 <= minutes && minutes < 690) {
			// 3교시 수업중
			classperiod = [3, '3교시', '10:50~11:30', true];

		} else if(690 <= minutes && minutes < 700) {
			// 4교시 10분전
			classperiod = [4, '4교시', '11:40~12:20', false];

		} else if(700 <= minutes && minutes < 735) {
			// 4교시 수업중
			classperiod = [4, '4교시', '11:40~12:20', true];

		} else if(735 <= minutes && minutes < 740) {
			// 점심 5분전
			classperiod = [4.5, '점심', '12:20~13:20', false];

		} else if(740 <= minutes && minutes < 795) {
			// 점심 수업중
			classperiod = [4.5, '점심', '12:20~13:20', true];

		} else if(795 <= minutes && minutes < 800) {
			// 5교시 5분전
			classperiod = [5, '5교시', '13:20~14:00', false];

		} else if(800 <= minutes && minutes < 840) {
			// 5교시 수업중
			classperiod = [5, '5교시', '13:20~14:00', true];

		} else if(840 <= minutes && minutes < 850 && weeknumber !== 4) {
			// 6교시 10분전
			classperiod = [6, '6교시', '14:10~14:50', false];

		} else if(850 <= minutes && minutes < 885 && weeknumber !== 4) {
			// 6교시 수업중
			classperiod = [6, '6교시', '14:10~14:50', true];

		} else if(885 <= minutes && minutes < 890 && weeknumber !== 4) {
			// 종례 5분전
			classperiod = [6.5, '종례', '14:50~15:10', false];

		} else if(890 <= minutes && minutes < 910 && weeknumber !== 4) {
			// 종례 수업중
			classperiod = [6.5, '종례', '14:50~15:10', true];

		} else if(840 <= minutes && minutes < 850 && weeknumber == 4) {
			// 금요일 6교시 10분전
			classperiod = [6, '6교시', '14:10~14:50', false];

		} else if(850 <= minutes && minutes < 890 && weeknumber == 4) {
			// 금요일 6교시 수업중
			classperiod = [6, '6교시', '14:10~14:50', true];

		} else if(890 <= minutes && minutes < 900 && weeknumber === 4) {
			// 금요일 7교시 10분전
			classperiod = [7, '7교시', '15:00~15:40', false];

		} else if(900 <= minutes && minutes < 935 && weeknumber === 4) {
			// 금요일 7교시 수업중
			classperiod = [7, '7교시', '15:00~15:40', true];

		} else if(935 <= minutes && minutes < 940 && weeknumber === 4) {
			// 금요일 종례 5분전
			classperiod = [7.5, '종례', '15:40~16:00', false];

		} else if(940 <= minutes && minutes < 960 && weeknumber === 4) {
			// 금요일 종례 수업중
			classperiod = [7.5, '종례', '15:40~16:00', true];

		} else {
			// 수업 아님
			classperiod = [-1, 'ㅇㅇ 수업 아닌걸? ㅋㅋ', '0:00~0:00', false];

		}
		
		return classperiod;
	}
	function getClassInformation(classname) {
		var classinformation = new Array(4);
		if(classname === '과학') {
			// 과학
			classinformation = [1, '과학', '김상희', '수요일 4교시, 목요일 5교시, 금요일 5교시'];

		} else if(classname === '국어') {
			// 국어
			classinformation = [2, '국어', '김경삼', '월요일 6교시, 목요일 2교시, 금요알 2교시'];

		} else if(classname === '기술가정') {
			// 기가
			classinformation = [3, '기술가정', '안형웅', '화요일 2교시, 수요일 3교시, 목요일 6교시'];

		} else if(classname === '기가') {
			// 기가
			classinformation = [3, '기술가정', '안형웅', '화요일 2교시, 수요일 3교시, 목요일 6교시'];

		} else if(classname === '도덕') {
			// 도덕
			classinformation = [4, '도덕', '김새미', '월요일 2교시, 수요일 5교시'];

		} else if(classname === '미술') {
			// 미술
			classinformation = [5, '미술', '김예린', '수요일 1교시, 금요일 7교시'];

		} else if(classname === '수학') {
			// 수학
			classinformation = [6, '수학', '안성호', '월요일 5교시, 화요일 6교시, 금요알 3교시'];

		} else if(classname === '역사A') {
			// 역사A
			classinformation = [7, '역사A', '박경석', '월요일 3교시'];

		} else if(classname === '역사B') {
			// 역사B
			classinformation = [8, '역사B', '이승은', '월요일 4교시, 목요일 3교시'];

		} else if(classname === '영어') {
			// 영어
			classinformation = [9, '영어', '이혜진', '화요일 5교시, 목요일 4교시, 금요일 1교시'];

		} else if(classname === '음악') {
			// 음악
			classinformation = [10, '음악', '이윤정', '수요알 6교시, 금요일 6교시'];

		} else if(classname === '중국어') {
			// 중국어
			classinformation = [11, '중국어', '최윤정', '월요일 1교시, 화요일 2교시, 금요일 4교시'];

		} else if(classname === '창체진로') {
			// 진로
			classinformation = [12, '창체진로', '김경삼', '수요일 2교시'];

		} else if(classname === '진로') {
			// 진로
			classinformation = [12, '창체진로', '김경삼', '수요일 2교시'];

		} else if(classname === '체육') {
			// 체육
			classinformation = [13, '체육', '이경남', '화요일 4교시, 목요일 1교시'];

		} else if(classname === '스포츠클럽') {
			// 스클
			classinformation = [14, '스포츠클럽', '이우혁', '화요일 3교시'];

		} else if(classname === '스클') {
			// 스클
			classinformation = [14, '스포츠클럽', '이우혁', '화요일 3교시'];

		} else if(classname === '조회') {
			// 조회
			classinformation = [100, '조회', '최윤정', '매일 1교시 전'];

		} else if(classname === '종례') {
			// 종례
			classinformation = [102, '종례', '최윤정', '월~목요일 6교시 후, 금요일 7교시 후'];

		} else if(classname === '동아리') {
			// 종례
			classinformation = [103, '동아리', '각 반 동아리', '미정'];

		} else {
			// 과목 아님
			classinformation = [-1, 'ㅇㅇ 과목 아닌걸? ㅋㅋ', '아니라니까? ㅋㅋ', 'ㅋㅋ루삥빵뽕'];

		}

		return classinformation;
	}
	function getBookName(weeknumber) {
		var classname = new Array(7);
		var new_classname = new Array();
		var bookname;
		for(var i = 0; i<=6; i++) {
			classname[i] = org.jsoup.Jsoup.connect('https://api.h2owr.xyz/get/class/informations.php?weeknumber='+weeknumber).get().select('classname'+(i+1)).text();
			if(classname[i] === '없음') {
				delete classname[i];
			}
		}
		for(var i in classname) {
			if(classname[i] === '과학') {
				// 과학
				new_classname.push('과학 2');

			} else if(classname[i] === '국어') {
				// 국어
				new_classname.push('국어 2-2');
	
			} else if(classname[i] === '기술가정') {
				// 기가
				new_classname.push('기술/가정 2');
	
			} else if(classname[i] === '도덕') {
				// 도덕
				new_classname.push('도덕 2');
	
			} else if(classname[i] === '미술') {
				// 미술
				new_classname.push('미술 1|2');
	
			} else if(classname[i] === '수학') {
				// 수학
				new_classname.push('수학 2');
	
			} else if(classname[i] === '역사A' || classname[i] === '역사B') {
				// 역사A/B
				new_classname.push('역사 1');
	
			} else if(classname[i] === '영어') {
				// 영어
				new_classname.push('English 2');
	
			} else if(classname[i] === '음악') {
				// 음악
				new_classname.push('음악 1');
	
			} else if(classname[i] === '중국어') {
				// 중국어
				new_classname.push('생활 중국어');
	
			}
		}
		new_classname = new_classname.sort();
		let unique_classname = new_classname.filter((c, index) => {
			return new_classname.indexOf(c) === index;
		});
		bookname = unique_classname[0];
		for(var i = 1; i < unique_classname.length; i++) {
			bookname += ', '+unique_classname[i];
		}
		return bookname;
	}

	try {
		if(!msg.startsWith('!')) {
			// !로 시작하지 않을시
			return 0;
		}

		msg = msg.trim();
		msg = msg.split('!');
		msg = msg[1];
		msg = msg.split(' ');
		var cmdnow = '';
		// 예) !시간표 월요일 asdf
		var command = msg[0] // 시간표
		var arg0 = msg[1] // 월요일
		var arg1 = msg[2] // asdf
		var weekname = ['월요일', '화요일', '수요일', '목요일', '금요일', '토요일', '일요일'];
		var studentname = ['김강민', '김동순', '김민기', '김시온', '김장순', '김재경', '김주원', '남궁한', '박주찬', '박준희', '박지근', '송종국', '신현우', '심철웅', '안건영', '엄민영', '원동현', '이기태', '이재준', '임재빈', '장도경', '전시우', '정종환', '조성우', '조연우', '조현성', '황재성'];
		

		if(command === '시간표' && typeof arg0 === 'undefined' && typeof arg1 === 'undefined') {
			// !시간표
			cmdnow = '!시간표';
			var classname = new Array(7);
			var classlink = new Array(7);
			var weeknumber = org.jsoup.Jsoup.connect('https://api.h2owr.xyz/get/week/number.php').get().select('currentweek').text();
			var weekname = weekname[weeknumber];
			if(weeknumber>=5) {
				replier.reply('[ 알림 ]'+'\n'+'\n'+
				'= 금일은 수업일이 아닙니다');
				return 0;
			}
			for(var i = 0; i<=6; i++) {
				classname[i] = org.jsoup.Jsoup.connect('https://api.h2owr.xyz/get/class/informations.php?weeknumber='+weeknumber).get().select('classname'+(i+1)).text();
				classlink[i] = org.jsoup.Jsoup.connect('https://api.h2owr.xyz/get/class/informations.php?weeknumber='+weeknumber).get().select('classlink'+(i+1)).text();
				if(typeof classname[i] === 'undefined' && typeof classlink[i] === 'undefined') {
					classname[i] = '없음';
					classlink[i] = '없음';
				}
			}
			replier.reply('[ 오늘 시간표('+weekname+') ]'+'\n'+'\n'+
			'- 조회/종례\n'+
			'= https://us02web.zoom.us/j/96392634458?pwd=QmgyM1dFbFpQd1A3SnN5eW9OY0ZRUT09\n'+'\n'+
			'( 1교시 / 9:10~9:50 )'+'\n'+
			'- '+classname[0]+'\n'+
			'= '+classlink[0]+'\n'+'\n'+
			'( 2교시 / 10:00~10:40 )'+'\n'+
			'- '+classname[1]+'\n'+
			'= '+classlink[1]+'\n'+'\n'+
			'( 3교시 / 10:50~11:30 )'+'\n'+
			'- '+classname[2]+'\n'+
			'= '+classlink[2]+'\n'+'\n'+
			'( 4교시 / 11:40~12:20 )'+'\n'+
			'- '+classname[3]+'\n'+
			'= '+classlink[3]+'\n'+'\n'+
			'( 점심 / 12:20~13:20 )'+'\n'+
			'- 점심'+'\n'+
			'= 없음'+'\n'+'\n'+
			'( 5교시 / 13:20~14:00 )'+'\n'+
			'- '+classname[4]+'\n'+
			'= '+classlink[4]+'\n'+'\n'+
			'( 6교시 / 14:10~14:50 )'+'\n'+
			'- '+classname[5]+'\n'+
			'= '+classlink[5]+'\n'+'\n'+
			'( 7교시 / 15:00~15:40 )'+'\n'+
			'- '+classname[6]+'\n'+
			'= '+classlink[6]+'\n'+'\n');
			return 0;

		} else if(command === '시간표' && typeof arg0 !== 'undefined' && typeof arg1 === 'undefined') {
			// !시간표 arg0
			cmdnow = '!시간표 arg0';
			var classname = new Array(7);
			var classlink = new Array(7);
			var weeknumber = weekname.indexOf(arg0);
			if(weeknumber===-1) {
				replier.reply('[ 오류 ]'+'\n'+'\n'+
				'= 허용되지 않은 전달인자입니다');
				return 0;
			}
			var weekname = weekname[weeknumber];
			for(var i = 0; i<=6; i++) {
				classname[i] = org.jsoup.Jsoup.connect('https://api.h2owr.xyz/get/class/informations.php?weeknumber='+weeknumber).get().select('classname'+(i+1)).text();
				classlink[i] = org.jsoup.Jsoup.connect('https://api.h2owr.xyz/get/class/informations.php?weeknumber='+weeknumber).get().select('classlink'+(i+1)).text();
				if(typeof classname[i] === 'undefined' && typeof classlink[i] === 'undefined') {
					classname[i] = '없음';
					classlink[i] = '없음';
				}
			}
			replier.reply('[ 시간표 정보('+arg0+') ]'+'\n'+'\n'+
			'- 조회/종례\n'+
			'= https://us02web.zoom.us/j/96392634458?pwd=QmgyM1dFbFpQd1A3SnN5eW9OY0ZRUT09\n'+'\n'+
			'( 1교시 / 9:10~9:50 )'+'\n'+
			'- '+classname[0]+'\n'+
			'= '+classlink[0]+'\n'+'\n'+
			'( 2교시 / 10:00~10:40 )'+'\n'+
			'- '+classname[1]+'\n'+
			'= '+classlink[1]+'\n'+'\n'+
			'( 3교시 / 10:50~11:30 )'+'\n'+
			'- '+classname[2]+'\n'+
			'= '+classlink[2]+'\n'+'\n'+
			'( 4교시 / 11:40~12:20 )'+'\n'+
			'- '+classname[3]+'\n'+
			'= '+classlink[3]+'\n'+'\n'+
			'( 점심 / 12:20~13:20 )'+'\n'+
			'- 점심'+'\n'+
			'= 없음'+'\n'+'\n'+
			'( 5교시 / 13:20~14:00 )'+'\n'+
			'- '+classname[4]+'\n'+
			'= '+classlink[4]+'\n'+'\n'+
			'( 6교시 / 14:10~14:50 )'+'\n'+
			'- '+classname[5]+'\n'+
			'= '+classlink[5]+'\n'+'\n'+
			'( 7교시 / 15:00~15:40 )'+'\n'+
			'- '+classname[6]+'\n'+
			'= '+classlink[6]+'\n'+'\n');
			return 0;

		} else if(command === '과목' && typeof arg0 === 'undefined' && typeof arg1 === 'undefined') {
			// !과목
			cmdnow = '!과목';
			var weeknumber = org.jsoup.Jsoup.connect('https://api.h2owr.xyz/get/week/number.php').get().select('currentweek').text();
			var weekname = weekname[weeknumber];
			let timenow = new Date();
			var classperiod = getCurrentPeriod(timenow.getHours()*60+timenow.getMinutes(), weeknumber);
			if(weeknumber>=5) {
				replier.reply('[ 알림 ]'+'\n'+'\n'+
				'= 금일은 수업일이 아닙니다');
				return 0;
			}
			if(classperiod[0] === -1 || classperiod[0] === 0.5 || classperiod[0] === 4.5 || classperiod[0] === 6.5 || classperiod[0] === 7.5) {
				if(classperiod[0] === -1) {
					replier.reply('[ 알림 ]'+'\n'+'\n'+
					'= 지금은 수업시간이 아닙니다');
					return 0;
				} else if(classperiod[0] === 0.5) {
					classperiod[0] = 1;
				} else {
					classperiod[0] -= 0.5;
				}
				var classname = org.jsoup.Jsoup.connect('https://api.h2owr.xyz/get/class/information.php?weeknumber=255&classnumber='+classperiod[0]).get().select('classname').text();
				var classlink = org.jsoup.Jsoup.connect('https://api.h2owr.xyz/get/class/information.php?weeknumber=255&classnumber='+classperiod[0]).get().select('classlink').text();
			} else {
				var classname = org.jsoup.Jsoup.connect('https://api.h2owr.xyz/get/class/information.php?weeknumber='+weeknumber+'&classnumber='+classperiod[0]).get().select('classname').text();
				var classlink = org.jsoup.Jsoup.connect('https://api.h2owr.xyz/get/class/information.php?weeknumber='+weeknumber+'&classnumber='+classperiod[0]).get().select('classlink').text();
			}
			if(classperiod[3]) {
				classperiod[3] = '';
			} else {
				classperiod[3] = '(예비)';
			}
			replier.reply('[ 현재 과목'+classperiod[3]+' ]'+'\n'+'\n'+
			'( '+classperiod[1]+' / '+weekname+' / '+classperiod[2]+' )'+'\n'+
			'- '+classname+'\n'+
			'= '+classlink);
			return 0;

		} else if(command === '과목' && typeof arg0 !== 'undefined') {
			// !과목 arg0 arg1
			if(arg0 === '교시검색' && typeof arg0 !== 'undefined' && typeof arg1 !== 'undefined') {
				// !과목 교시검색 arg1
				cmdnow = '!과목 교시검색 arg1';
				var classinformation = getClassInformation(arg1);
				var classname = classinformation[1];
				if(classinformation[0] === -1) {
					replier.reply('[ 오류 ]'+'\n'+'\n'+
					'= 허용되지 않은 전달인자입니다');
					return 0;
				} else {
					replier.reply('[ 교시 정보 ]'+'\n'+'\n'+
					'( 과목 '+classname+'의 정보 )'+'\n'+
					'- 포함 교시 : '+classinformation[3]);
					return 0;
				}
			} else if(arg0 === '정보검색' && typeof arg0 !== 'undefined' && typeof arg1 !== 'undefined') {
				// !과목 정보검색 arg1
				cmdnow = '!과목 정보검색 arg1';
				var classinformation = getClassInformation(arg1);
				var classname = classinformation[1];
				if(classinformation[0] === -1) {
					replier.reply('[ 알림 ]'+'\n'+'\n'+
					'= 허용되지 않은 전달인자입니다');
					return 0;
				} else {
					var classlink = org.jsoup.Jsoup.connect('https://api.h2owr.xyz/get/class/specific.php?classnumber='+classinformation[0]).get().select('classlink').text();
					replier.reply('[ 과목 정보 ]'+'\n'+'\n'+
					'( 과목 '+classname+'의 정보 )'+'\n'+
					'- 선생님 : '+classinformation[2]+'쌤'+'\n'+
					'- 링크 : '+classlink+'\n'+
					'- 교시 : '+classinformation[3]);
					return 0;
				}
			} else {
				replier.reply('[ 알림 ]'+'\n'+'\n'+
				'= 허용되지 않은 전달인자입니다');
				return 0;
			}

		} else if(command === '책목록' && typeof arg0 === 'undefined' && typeof arg1 === 'undefined') {
			// !책목록
			cmdnow = '!책목록';
			var weeknumber = org.jsoup.Jsoup.connect('https://api.h2owr.xyz/get/week/number.php').get().select('currentweek').text();
			var weekname = weekname[weeknumber];
			var bookname = getBookName(weeknumber);
			if(weeknumber>=5) {
				replier.reply('[ 알림 ]'+'\n'+'\n'+
				'= 금일은 수업일이 아닙니다');
				return 0;
			}
			replier.reply('[ 책 정보('+weekname+') ]'+'\n'+'\n'+
			'- 책 목록 : '+bookname);
			return 0;
			
		} else if(command === '책목록' && typeof arg0 !== 'undefined' && typeof arg1 === 'undefined') {
			// !책목록 arg0
			cmdnow = '!책목록 arg0';
			var weeknumber = weekname.indexOf(arg0);
			var bookname = getBookName(weeknumber);
			if(weeknumber===-1) {
				replier.reply('[ 알림 ]'+'\n'+'\n'+
				'= 허용되지 않은 전달인자입니다');
				return 0;
			}
			if(weeknumber>=5) {
				replier.reply('[ 알림 ]'+'\n'+'\n'+
				'= 당일은 수업일이 아닙니다');
				return 0;
			}
			replier.reply('[ 책 정보('+arg0+') ]'+'\n'+'\n'+
			'- 책 목록 : '+bookname);
			return 0;
		
		} else if(command === '학생정보' && typeof arg0 !== 'undefined' && typeof arg1 === 'undefined') {
			// !학생정보 arg0
			cmdnow = '!학생정보 arg0';
			var inttype = /^[0-9]/; 
			var hangultype = /^[가-힣]/;
			if(inttype.test(arg0)) {
				if(1 <= arg0 && arg0 <= 27 || 2401 <= arg0 && arg0 <= 2427) {
					var studentnumber = org.jsoup.Jsoup.connect('https://api.h2owr.xyz/get/student/information.php?studentnumber='+arg0).get().select('studentnumber').text();
					var studentname = org.jsoup.Jsoup.connect('https://api.h2owr.xyz/get/student/information.php?studentnumber='+arg0).get().select('studentname').text();
					var studentclub = org.jsoup.Jsoup.connect('https://api.h2owr.xyz/get/student/information.php?studentnumber='+arg0).get().select('studentclub').text();
					if(typeof studentnumber === 'undefined') {
						replier.reply('[ 오류 ]'+'\n'+'\n'+
						'= 검색 결과가 없습니다');
						throw Error('!'+command+' '+arg0+' 실행중 오류 발생, 서버 다운 예상됨');
					}
				} else {
					replier.reply('[ 알림 ]'+'\n'+'\n'+
					'= 허용되지 않은 전달인자입니다');
					return 0;
				}
			} else if(hangultype.test(arg0)) {
				if(studentname.indexOf(arg0) !== -1) {
					var studentnumber = org.jsoup.Jsoup.connect('https://api.h2owr.xyz/get/student/information.php?studentname='+arg0).get().select('studentnumber').text();
					var studentname = org.jsoup.Jsoup.connect('https://api.h2owr.xyz/get/student/information.php?studentname='+arg0).get().select('studentname').text();
					var studentclub = org.jsoup.Jsoup.connect('https://api.h2owr.xyz/get/student/information.php?studentname='+arg0).get().select('studentclub').text();
					if(typeof studentnumber === 'undefined') {
						replier.reply('[ 오류 ]'+'\n'+'\n'+
						'= 검색 결과가 없습니다');
						throw Error('!'+command+' '+arg0+' 실행중 오류 발생, 서버 다운 예상됨');
					}
				} else {
					replier.reply('[ 알림 ]'+'\n'+'\n'+
					'= 허용되지 않은 전달인자입니다');
					return 0;
				}
			} else {
				replier.reply('[ 알림 ]'+'\n'+'\n'+
				'= 허용되지 않은 전달인자입니다');
				return 0;
			}
			replier.reply('[ 학생정보 ]'+'\n'+'\n'+
			'( '+arg0+'의 검색 결과 )'+'\n'+
			'- 이름 : '+studentname+'\n'+
			'- 학번 : '+studentnumber+'\n'+
			'- 동아리 : '+studentclub);
			return 0;
			
		} else if(command === '봇정보' && typeof arg0 === 'undefined' && typeof arg1 === 'undefined') {
			// !봇정보
			cmdnow = '!봇정보';
			replier.reply('[ 봇정보 ]'+'\n'+'\n'+
			'- 이름 : 비공식_신흥봇_2-4'+'\n'+
			'- 버전 : '+botVersion+'\n'+
			'- 기기 : Android '+Device.getAndroidVersionName()+'\n'+
			'- 깃헙 : https://go.h2owr.xyz/kakaobgh'+'\n'+
			'- 라이센스 : https://go.h2owr.xyz/kakaoblc'+'\n'+
			'- Made by KKM');
			return 0;

		} else if(command === '코로나' && typeof arg0 === 'undefined' && typeof arg1 === 'undefined') {
			// !코로나
			cmdnow = '!코로나';
			var date = org.jsoup.Jsoup.connect("https://api.h2owr.xyz/get/corona/data.php").get().select("date").text();
			var cases = org.jsoup.Jsoup.connect("https://api.h2owr.xyz/get/corona/data.php").get().select("cases").text();
			var casesPREV = org.jsoup.Jsoup.connect("https://api.h2owr.xyz/get/corona/data.php").get().select("casesPREV").text();
			var cured = org.jsoup.Jsoup.connect("https://api.h2owr.xyz/get/corona/data.php").get().select("cured").text();
			var curedPREV = org.jsoup.Jsoup.connect("https://api.h2owr.xyz/get/corona/data.php").get().select("curedPREV").text();
			var quaran = org.jsoup.Jsoup.connect("https://api.h2owr.xyz/get/corona/data.php").get().select("quaran").text();
			var quaranPREV = org.jsoup.Jsoup.connect("https://api.h2owr.xyz/get/corona/data.php").get().select("quaranPREV").text();
			var deaths = org.jsoup.Jsoup.connect("https://api.h2owr.xyz/get/corona/data.php").get().select("deaths").text();
			var deathsPREV = org.jsoup.Jsoup.connect("https://api.h2owr.xyz/get/corona/data.php").get().select("deathsPREV").text();
			var dperc = org.jsoup.Jsoup.connect("https://api.h2owr.xyz/get/corona/data.php").get().select("dperc").text();
			var cperc = org.jsoup.Jsoup.connect("https://api.h2owr.xyz/get/corona/data.php").get().select("cperc").text();
			replier.reply('[ 코로나 현황('+date+') ]'+'\n'+'\n'+
			'( 확진자 )'+'\n'+
			'= '+cases+' <오늘>'+'\n'+
			'= '+casesPREV+' <전날>'+'\n'+'\n'+
			'( 완치자 )'+'\n'+
			'= '+cured+' <오늘>'+'\n'+
			'= '+curedPREV+' <전날>'+'\n'+'\n'+
			'( 격리자 )'+'\n'+
			'= '+quaran+' <오늘>'+'\n'+
			'= '+quaranPREV+' <전날>'+'\n'+'\n'+
			'( 사망자 )'+'\n'+
			'= '+deaths+' <오늘>'+'\n'+
			'= '+deathsPREV+' <전날>'+'\n'+'\n'+
			'( 치사울/완치율 )'+'\n'+
			'= '+dperc+'%'+'\n'+
			'= '+cperc+'%');
			return 0;

		} else if(command === '시간' && typeof arg0 === 'undefined' && typeof arg1 === 'undefined') {
			// !시간
			cmdnow = '!시간';
			let timenow = new Date();
			replier.reply('[ 현재 시각 ]'+'\n'+'\n'+
			'- '+timenow.getHours()+'시 '+timenow.getMinutes()+'분');
			return 0;
			
		} else if(command === '호출' && typeof arg0 === 'undefined' && typeof arg1 === 'undefined') {
			// !호출
			cmdnow = '!호출';
			replier.reply('[ 알림 ]'+'\n'+'\n'+
			'= 개발자 호출됨');
			replier.reply('ㄱㅣㅁㄱㅏㅇㅁㅣㄴ', '[ 호출 ]'+'\n'+'\n'+
			'= ('+room+')에서 (@'+sender+')님에게 호출되었습니다');
			return 0;
			
		} else if(command === '도움말' && typeof arg0 === 'undefined' && typeof arg1 === 'undefined') {
			// !도움말
			cmdnow = '!도움말';
			replier.reply('[ 도움말 ]'+'\n'+'\n'+
			'- !도움말'+'\n'+
			'= 지금 보고있는 도움말을 출력합니다'+'\n'+'\n'+

			'- !시간표'+'\n'+
			'= 현재 요일에 따라서 시간표를 출력합니다'+'\n'+'\n'+

			'- !시간표 <월~금>요일'+'\n'+
			'= 요일별 시간표를 출력합니다'+'\n'+'\n'+

			'- !과목'+'\n'+
			'= 현재 수업중이거나 몇분 후 시작할 과목에 대한 정보를 출력합니다'+'\n'+'\n'+

			'- !과목 교시검색 <국어~종례>'+'\n'+
			'= 과목별 교시 정보를 출력합니다'+'\n'+'\n'+

			'- !과목 정보검색 <국어~종례>'+'\n'+
			'= 과목별  정보를 출력합니다'+'\n'+'\n'+

			'- !학생정보 <(240)1~(24)27/김강민~황재성>'+'\n'+
			'= 꺾쇠 안의 조건에 따라, 학생정보를 출력합니다.'+'\n'+'\n'+

			'- !책목록'+'\n'+
			'= 해당 요일에 준비해야 하는 책의 목록을 출력합니다'+'\n'+'\n'+

			'- !책목록 <월~금>요일'+'\n'+
			'= 꺾쇠 안의 조건에 따라, 해당 요일에 준비해야 하는 책의 목록을 출력합니다'+'\n'+'\n'+

			'- !코로나'+'\n'+
			'= 당일 1시 기준 코로나 관련 정보를 출력합니다'+'\n'+'\n'+

			'- !호출'+'\n'+
			'= 개발자를 호출합니다'+'\n'+'\n'+

			'- !시간'+'\n'+
			'= 현제 시간을 출력합니다'+'\n'+'\n'+

			'- !봇정보'+'\n'+
			'= 봇의 정보를 출력합니다');
			return 0;

		}
	} catch(e) {
		Log.error(e+' @ '+cmdnow);
		Api.makeNoti(e+' @ '+cmdnow);
		replier.reply('ㄱㅣㅁㄱㅏㅇㅁㅣㄴ', '[ 오류 ]'+'\n'+'\n'+
		'= 봇에서 오류가 발견되었습니다,'+'\n'+
		'= 서버 상태 또는 봇 코드를 확인해주세요'+'\n'+'\n'+
		'- '+e+' @ '+cmdnow);
	}
}

//아래 4개의 메소드는 액티비티 화면을 수정할때 사용됩니다.
function onCreate(savedInstanceState, activity) {}

function onStart(activity) {}

function onResume(activity) {}

function onPause(activity) {}

function onStop(activity) {}