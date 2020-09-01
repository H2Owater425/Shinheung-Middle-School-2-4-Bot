function response(room, msg, sender, isGroupChat, replier) {

	function getWeekNumber(week) {
		// ~요일에서 숫자로 변환 후 리턴
		if(week==='월요일') {
			week = 1;
		} else if(week==='화요일') {
			week = 2;
		} else if(week==='수요일') {
			week = 3;
		} else if(week==='목요일') {
			week = 4;
		} else if(week==='금요일') {
			week = 5;
		} else if(week==='토요일') {
			week = 6;
		} else if(week==='일요일') {
			week = 7;
		} else {
			return -1;
		}
		return week;
	}
	function getWeekName(week) {
		// 숫자에서 ~요일로 변환 후 리턴
		if(week===1) {
			week = '월요일';
		} else if(week===2) {
			week = '화요일';
		} else if(week===3) {
			week = '수요일';
		} else if(week===4) {
			week = '목요일';
		} else if(week===5) {
			week = '금요일';
		} else if(week===6) {
			week = '토요일';
		} else if(week===7) {
			week = '일요일';
		} else {
			return -1;
		}
		return week;
	}
	function getCurrentClassNumber(minute) {
		// 현재 분으로 ~교시 얻은 후 리턴
		var classnumber;
		if(minute)
		return classnumber
	}
	try{
		if(!msg.startsWith('!')) {
			// !로 시작하지 않을시
			return 0
		}
		msg = msg.trim();
		msg = msg.split('!');
		msg = msg[1];
		msg = msg.split(' ');
		// 예) !시간표 월요일 asdf
		var command = msg[0] // 시간표
		var arg0 = msg[1] // 월요일
		var arg1 = msg[2] // asdf
		if(command === '시간표' && typeof arg0 === 'undefined' && typeof arg1 === 'undefined') {
			// !시간표
			var classname = new Array();
			var classlink = new Array();
			var weeknumber = org.jsoup.Jsoup.connect('https://api.h2owr.xyz/getclasses.php?getweek.php').get().select('curweek').text();
			if(weeknumber<=6) {
				replier.reply('[ 알림 ]'+'\n'+'\n'+
				'- 오늘은 수업일이 아닙니다');
			}
			var weekname = getWeekName(weeknumber)
			if(weekname===-1) {
				replier.reply('[ 오류 ]'+'\n'+'\n'+
				'- 요일을 얻지 못했습니다');
				return -1
			}
			for(var i; i<=6; i++) {
				classname[i] = org.jsoup.Jsoup.connect('https://api.h2owr.xyz/getclasses.php?week='+weeknumber).get().select('class'+i).text();
				classlink[i] = org.jsoup.Jsoup.connect('https://api.h2owr.xyz/getclasses.php?week='+weeknumber).get().select('class'+i+'link').text();
			}
			if(typeof classname[6] === 'undefined' && typeof classlink[6] === 'undefined') {
				classname[6] = '없음';
				classlink[6] = '없음';
			}
			replier.reply('[ 시간표('+weekname+') ]\n'+'\n'+
			'- 조회/종례\n'+
			'= https://us02web.zoom.us/j/96392634458?pwd=QmgyM1dFbFpQd1A3SnN5eW9OY0ZRUT09\n'+'\n'+
			'( 1교시 / 9:10~9:50 )\n'+
			'- '+classname[0]+'\n'+
			'= '+classlink[0]+'\n'+'\n'+
			'( 2교시 / 10:00~10:40 )\n'+
			'- '+classname[1]+'\n'+
			'= '+classlink[1]+'\n'+'\n'+
			'( 3교시 / 10:50~11:30 )\n'+
			'- '+classname[2]+'\n'+
			'= '+classlink[2]+'\n'+'\n'+
			'( 4교시 / 11:40~12:20 )\n'+
			'- '+classname[3]+'\n'+
			'= '+classlink[3]+'\n'+'\n'+
			'( 4.5교시 / 12:20~13:20 )\n'+
			'- 점심\n'+
			'= 없음\n'+'\n'+
			'( 5교시 / 13:20~14:00 )\n'+
			'- '+classname[4]+'\n'+
			'= '+classlink[4]+'\n'+'\n'+
			'( 6교시 / 14:10~14:50 )\n'+
			'- '+classname[5]+'\n'+
			'= '+classlink[5]+'\n'+'\n'+
			'( 7교시 / 15:00~15:40 )\n'+
			'- '+classname[6]+'\n'+
			'= '+classlink[6]);
			return 0 // !시간표 끝
		} else if(command === '시간표' && typeof arg0 !== 'undefined' && typeof arg1 === 'undefined') {
			// !시간표 arg0
			var classname = new Array();
			var classlink = new Array();
			var weeknumber = getWeekNumber(arg0)
			if(weeknumber===-1) {
				replier.reply('[ 오류 ]'+'\n'+'\n'+
				'- 허용되지 않은 전달인자입니다');
				return -1
			}
			for(var i; i<=6; i++) {
				classname[i] = org.jsoup.Jsoup.connect('https://api.h2owr.xyz/getclasses.php?week='+weeknumber).get().select('class'+i).text();
				classlink[i] = org.jsoup.Jsoup.connect('https://api.h2owr.xyz/getclasses.php?week='+weeknumber).get().select('class'+i+'link').text();
			}
			if(typeof classname[6] === 'undefined' && typeof classlink[6] === 'undefined') {
				classname[6] = '없음';
				classlink[6] = '없음';
			}
			replier.reply('[ 시간표('+arg0+') ]\n'+'\n'+
			'- 조회/종례\n'+
			'= https://us02web.zoom.us/j/96392634458?pwd=QmgyM1dFbFpQd1A3SnN5eW9OY0ZRUT09\n'+'\n'+
			'( 1교시 / 9:10~9:50 )\n'+
			'- '+classname[0]+'\n'+
			'= '+classlink[0]+'\n'+'\n'+
			'( 2교시 / 10:00~10:40 )\n'+
			'- '+classname[1]+'\n'+
			'= '+classlink[1]+'\n'+'\n'+
			'( 3교시 / 10:50~11:30 )\n'+
			'- '+classname[2]+'\n'+
			'= '+classlink[2]+'\n'+'\n'+
			'( 4교시 / 11:40~12:20 )\n'+
			'- '+classname[3]+'\n'+
			'= '+classlink[3]+'\n'+'\n'+
			'( 4.5교시 / 12:20~13:20 )\n'+
			'- 점심\n'+
			'= 없음\n'+'\n'+
			'( 5교시 / 13:20~14:00 )\n'+
			'- '+classname[4]+'\n'+
			'= '+classlink[4]+'\n'+'\n'+
			'( 6교시 / 14:10~14:50 )\n'+
			'- '+classname[5]+'\n'+
			'= '+classlink[5]+'\n'+'\n'+
			'( 7교시 / 15:00~15:40 )\n'+
			'- '+classname[6]+'\n'+
			'= '+classlink[6]);
			return 0 // !시간표 arg0 끝
		} else if(command === '과목' && typeof arg0 === 'undefined' && typeof arg1 === 'undefined') {
			// !과목
			let now = new Date();
			var minute = now.getHours() * 60 + now.getMinutes();
			
		} else if(command === '과목' && typeof arg0 !== 'undefined' && typeof arg1 !== 'undefined') {
			// !과목 arg0 arg1

			if(arg0 === '검색') {
				// !과목 검색 arg1

			} else if(arg0 === '정보') {
				// !과목 정보 arg1

			}
		} else if(command === '책목록' && typeof arg0 === 'undefined' && typeof arg1 === 'undefined') {
			// !책목록
			
		} else if(command === '책목록' && typeof arg0 !== 'undefined' && typeof arg1 === 'undefined') {
			// !책목록 arg0
		
		} else if(command === '학생정보' && typeof arg0 !== 'undefined' && typeof arg1 === 'undefined') {
			// 학생정보 arg0
			
		} else if(command === '도움말' && typeof arg0 === 'undefined' && typeof arg1 === 'undefined') {
			// !도움말
			
		} else if(command === '봇정보' && typeof arg0 === 'undefined' && typeof arg1 === 'undefined') {
			// !봇정보
			
		} else if(command === '코로나' && typeof arg0 === 'undefined' && typeof arg1 === 'undefined') {
			// !코로나
			
		} else if(command === '시간' && typeof arg0 === 'undefined' && typeof arg1 === 'undefined') {
			// !시간
			
		} else {
			
		}
	} catch(e) {
		replier.reply('ㄱㅣㅁㄱㅏㅇㅁㅣㄴ', e.message);
		replier.reply('https://api.h2owr.xyz/getclasses.php?week='+weeknumber);
	}
}