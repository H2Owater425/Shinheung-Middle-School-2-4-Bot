function response(room, msg, sender, isGroupChat, replier) {
	msg = msg.trim();
	var msgsp = msg.split(" ");
	var msgstu = msg.substring(6);
	if(msg=="!월요일 시간표"){
		var week = org.jsoup.Jsoup.connect("https://api.h2owr.xyz/getclasses.php?week=1").get().select("week").text();
		var class1 = org.jsoup.Jsoup.connect("https://api.h2owr.xyz/getclasses.php?week=1").get().select("class1").text();
		var class1link = org.jsoup.Jsoup.connect("https://api.h2owr.xyz/getclasses.php?week=1").get().select("class1link").text();
		var class2 = org.jsoup.Jsoup.connect("https://api.h2owr.xyz/getclasses.php?week=1").get().select("class2").text();
		var class2link = org.jsoup.Jsoup.connect("https://api.h2owr.xyz/getclasses.php?week=1").get().select("class2link").text();
		var class3 = org.jsoup.Jsoup.connect("https://api.h2owr.xyz/getclasses.php?week=1").get().select("class3").text();
		var class3link = org.jsoup.Jsoup.connect("https://api.h2owr.xyz/getclasses.php?week=1").get().select("class3link").text();
		var class4 = org.jsoup.Jsoup.connect("https://api.h2owr.xyz/getclasses.php?week=1").get().select("class4").text();
		var class4link = org.jsoup.Jsoup.connect("https://api.h2owr.xyz/getclasses.php?week=1").get().select("class4link").text();
		var class5 = org.jsoup.Jsoup.connect("https://api.h2owr.xyz/getclasses.php?week=1").get().select("class5").text();
		var class5link = org.jsoup.Jsoup.connect("https://api.h2owr.xyz/getclasses.php?week=1").get().select("class5link").text();
		var class6 = org.jsoup.Jsoup.connect("https://api.h2owr.xyz/getclasses.php?week=1").get().select("class6").text();
		var class6link = org.jsoup.Jsoup.connect("https://api.h2owr.xyz/getclasses.php?week=1").get().select("class6link").text();
		var class7 = org.jsoup.Jsoup.connect("https://api.h2owr.xyz/getclasses.php?week=1").get().select("class7").text();
		var class7link = org.jsoup.Jsoup.connect("https://api.h2owr.xyz/getclasses.php?week=1").get().select("class7link").text();
		replier.reply('[ '+week+'요일 시간표 ]\n'+'\n'+
		'- 조회/종례\n'+
		'= https://us02web.zoom.us/j/96392634458?pwd=QmgyM1dFbFpQd1A3SnN5eW9OY0ZRUT09\n'+'\n'+
		'( 1교시 / 9:10~9:50 )\n'+
		'- '+class1+'\n'+
		'= '+class1link+'\n'+'\n'+
		'( 2교시 / 10:00~10:40 )\n'+
		'- '+class2+'\n'+
		'= '+class2link+'\n'+'\n'+
		'( 3교시 / 10:50~11:30 )\n'+
		'- '+class3+'\n'+
		'= '+class3link+'\n'+'\n'+
		'( 4교시 / 11:40~12:20 )\n'+
		'- '+class4+'\n'+
		'= '+class4link+'\n'+'\n'+
		'( 4.5교시 / 12:20~13:20 )\n'+
		'- 점심\n'+
		'= 없음\n'+'\n'+
		'( 5교시 / 13:20~14:00 )\n'+
		'- '+class5+'\n'+
		'= '+class5link+'\n'+'\n'+
		'( 6교시 / 14:10~14:50 )\n'+
		'- '+class6+'\n'+
		'= '+class6link+'\n'+'\n'+
		'( 7교시 / 15:00~15:40 )\n'+
		'- '+class7+'\n'+
		'= '+class7link);
	} else if(msg=="!화요일 시간표"){
		var week = org.jsoup.Jsoup.connect("https://api.h2owr.xyz/getclasses.php?week=2").get().select("week").text();
		var class1 = org.jsoup.Jsoup.connect("https://api.h2owr.xyz/getclasses.php?week=2").get().select("class1").text();
		var class1link = org.jsoup.Jsoup.connect("https://api.h2owr.xyz/getclasses.php?week=2").get().select("class1link").text();
		var class2 = org.jsoup.Jsoup.connect("https://api.h2owr.xyz/getclasses.php?week=2").get().select("class2").text();
		var class2link = org.jsoup.Jsoup.connect("https://api.h2owr.xyz/getclasses.php?week=2").get().select("class2link").text();
		var class3 = org.jsoup.Jsoup.connect("https://api.h2owr.xyz/getclasses.php?week=2").get().select("class3").text();
		var class3link = org.jsoup.Jsoup.connect("https://api.h2owr.xyz/getclasses.php?week=2").get().select("class3link").text();
		var class4 = org.jsoup.Jsoup.connect("https://api.h2owr.xyz/getclasses.php?week=2").get().select("class4").text();
		var class4link = org.jsoup.Jsoup.connect("https://api.h2owr.xyz/getclasses.php?week=2").get().select("class4link").text();
		var class5 = org.jsoup.Jsoup.connect("https://api.h2owr.xyz/getclasses.php?week=2").get().select("class5").text();
		var class5link = org.jsoup.Jsoup.connect("https://api.h2owr.xyz/getclasses.php?week=2").get().select("class5link").text();
		var class6 = org.jsoup.Jsoup.connect("https://api.h2owr.xyz/getclasses.php?week=2").get().select("class6").text();
		var class6link = org.jsoup.Jsoup.connect("https://api.h2owr.xyz/getclasses.php?week=2").get().select("class6link").text();
		var class7 = org.jsoup.Jsoup.connect("https://api.h2owr.xyz/getclasses.php?week=2").get().select("class7").text();
		var class7link = org.jsoup.Jsoup.connect("https://api.h2owr.xyz/getclasses.php?week=2").get().select("class7link").text();
		replier.reply('[ '+week+'요일 시간표 ]\n'+'\n'+
		'- 조회/종례\n'+
		'= https://us02web.zoom.us/j/96392634458?pwd=QmgyM1dFbFpQd1A3SnN5eW9OY0ZRUT09\n'+'\n'+
		'( 1교시 / 9:10~9:50 )\n'+
		'- '+class1+'\n'+
		'= '+class1link+'\n'+'\n'+
		'( 2교시 / 10:00~10:40 )\n'+
		'- '+class2+'\n'+
		'= '+class2link+'\n'+'\n'+
		'( 3교시 / 10:50~11:30 )\n'+
		'- '+class3+'\n'+
		'= '+class3link+'\n'+'\n'+
		'( 4교시 / 11:40~12:20 )\n'+
		'- '+class4+'\n'+
		'= '+class4link+'\n'+'\n'+
		'( 4.5교시 / 12:20~13:20 )\n'+
		'- 점심\n'+
		'= 없음\n'+'\n'+
		'( 5교시 / 13:20~14:00 )\n'+
		'- '+class5+'\n'+
		'= '+class5link+'\n'+'\n'+
		'( 6교시 / 14:10~14:50 )\n'+
		'- '+class6+'\n'+
		'= '+class6link+'\n'+'\n'+
		'( 7교시 / 15:00~15:40 )\n'+
		'- '+class7+'\n'+
		'= '+class7link);
	} else if(msg=="!수요일 시간표"){
		var week = org.jsoup.Jsoup.connect("https://api.h2owr.xyz/getclasses.php?week=3").get().select("week").text();
		var class1 = org.jsoup.Jsoup.connect("https://api.h2owr.xyz/getclasses.php?week=3").get().select("class1").text();
		var class1link = org.jsoup.Jsoup.connect("https://api.h2owr.xyz/getclasses.php?week=3").get().select("class1link").text();
		var class2 = org.jsoup.Jsoup.connect("https://api.h2owr.xyz/getclasses.php?week=3").get().select("class2").text();
		var class2link = org.jsoup.Jsoup.connect("https://api.h2owr.xyz/getclasses.php?week=3").get().select("class2link").text();
		var class3 = org.jsoup.Jsoup.connect("https://api.h2owr.xyz/getclasses.php?week=3").get().select("class3").text();
		var class3link = org.jsoup.Jsoup.connect("https://api.h2owr.xyz/getclasses.php?week=3").get().select("class3link").text();
		var class4 = org.jsoup.Jsoup.connect("https://api.h2owr.xyz/getclasses.php?week=3").get().select("class4").text();
		var class4link = org.jsoup.Jsoup.connect("https://api.h2owr.xyz/getclasses.php?week=3").get().select("class4link").text();
		var class5 = org.jsoup.Jsoup.connect("https://api.h2owr.xyz/getclasses.php?week=3").get().select("class5").text();
		var class5link = org.jsoup.Jsoup.connect("https://api.h2owr.xyz/getclasses.php?week=3").get().select("class5link").text();
		var class6 = org.jsoup.Jsoup.connect("https://api.h2owr.xyz/getclasses.php?week=3").get().select("class6").text();
		var class6link = org.jsoup.Jsoup.connect("https://api.h2owr.xyz/getclasses.php?week=3").get().select("class6link").text();
		var class7 = org.jsoup.Jsoup.connect("https://api.h2owr.xyz/getclasses.php?week=3").get().select("class7").text();
		var class7link = org.jsoup.Jsoup.connect("https://api.h2owr.xyz/getclasses.php?week=3").get().select("class7link").text();
		replier.reply('[ '+week+'요일 시간표 ]\n'+'\n'+
		'- 조회/종례\n'+
		'= https://us02web.zoom.us/j/96392634458?pwd=QmgyM1dFbFpQd1A3SnN5eW9OY0ZRUT09\n'+'\n'+
		'( 1교시 / 9:10~9:50 )\n'+
		'- '+class1+'\n'+
		'= '+class1link+'\n'+'\n'+
		'( 2교시 / 10:00~10:40 )\n'+
		'- '+class2+'\n'+
		'= '+class2link+'\n'+'\n'+
		'( 3교시 / 10:50~11:30 )\n'+
		'- '+class3+'\n'+
		'= '+class3link+'\n'+'\n'+
		'( 4교시 / 11:40~12:20 )\n'+
		'- '+class4+'\n'+
		'= '+class4link+'\n'+'\n'+
		'( 4.5교시 / 12:20~13:20 )\n'+
		'- 점심\n'+
		'= 없음\n'+'\n'+
		'( 5교시 / 13:20~14:00 )\n'+
		'- '+class5+'\n'+
		'= '+class5link+'\n'+'\n'+
		'( 6교시 / 14:10~14:50 )\n'+
		'- '+class6+'\n'+
		'= '+class6link+'\n'+'\n'+
		'( 7교시 / 15:00~15:40 )\n'+
		'- '+class7+'\n'+
		'= '+class7link);
	} else if(msg=="!목요일 시간표"){
		var week = org.jsoup.Jsoup.connect("https://api.h2owr.xyz/getclasses.php?week=4").get().select("week").text();
		var class1 = org.jsoup.Jsoup.connect("https://api.h2owr.xyz/getclasses.php?week=4").get().select("class1").text();
		var class1link = org.jsoup.Jsoup.connect("https://api.h2owr.xyz/getclasses.php?week=4").get().select("class1link").text();
		var class2 = org.jsoup.Jsoup.connect("https://api.h2owr.xyz/getclasses.php?week=4").get().select("class2").text();
		var class2link = org.jsoup.Jsoup.connect("https://api.h2owr.xyz/getclasses.php?week=4").get().select("class2link").text();
		var class3 = org.jsoup.Jsoup.connect("https://api.h2owr.xyz/getclasses.php?week=4").get().select("class3").text();
		var class3link = org.jsoup.Jsoup.connect("https://api.h2owr.xyz/getclasses.php?week=4").get().select("class3link").text();
		var class4 = org.jsoup.Jsoup.connect("https://api.h2owr.xyz/getclasses.php?week=4").get().select("class4").text();
		var class4link = org.jsoup.Jsoup.connect("https://api.h2owr.xyz/getclasses.php?week=4").get().select("class4link").text();
		var class5 = org.jsoup.Jsoup.connect("https://api.h2owr.xyz/getclasses.php?week=4").get().select("class5").text();
		var class5link = org.jsoup.Jsoup.connect("https://api.h2owr.xyz/getclasses.php?week=4").get().select("class5link").text();
		var class6 = org.jsoup.Jsoup.connect("https://api.h2owr.xyz/getclasses.php?week=4").get().select("class6").text();
		var class6link = org.jsoup.Jsoup.connect("https://api.h2owr.xyz/getclasses.php?week=4").get().select("class6link").text();
		var class7 = org.jsoup.Jsoup.connect("https://api.h2owr.xyz/getclasses.php?week=4").get().select("class7").text();
		var class7link = org.jsoup.Jsoup.connect("https://api.h2owr.xyz/getclasses.php?week=4").get().select("class7link").text();
		replier.reply('[ '+week+'요일 시간표 ]\n'+'\n'+
		'- 조회/종례\n'+
		'= https://us02web.zoom.us/j/96392634458?pwd=QmgyM1dFbFpQd1A3SnN5eW9OY0ZRUT09\n'+'\n'+
		'( 1교시 / 9:10~9:50 )\n'+
		'- '+class1+'\n'+
		'= '+class1link+'\n'+'\n'+
		'( 2교시 / 10:00~10:40 )\n'+
		'- '+class2+'\n'+
		'= '+class2link+'\n'+'\n'+
		'( 3교시 / 10:50~11:30 )\n'+
		'- '+class3+'\n'+
		'= '+class3link+'\n'+'\n'+
		'( 4교시 / 11:40~12:20 )\n'+
		'- '+class4+'\n'+
		'= '+class4link+'\n'+'\n'+
		'( 4.5교시 / 12:20~13:20 )\n'+
		'- 점심\n'+
		'= 없음\n'+'\n'+
		'( 5교시 / 13:20~14:00 )\n'+
		'- '+class5+'\n'+
		'= '+class5link+'\n'+'\n'+
		'( 6교시 / 14:10~14:50 )\n'+
		'- '+class6+'\n'+
		'= '+class6link+'\n'+'\n'+
		'( 7교시 / 15:00~15:40 )\n'+
		'- '+class7+'\n'+
		'= '+class7link);
	} else if(msg=="!금요일 시간표"){
		var week = org.jsoup.Jsoup.connect("https://api.h2owr.xyz/getclasses.php?week=5").get().select("week").text();
		var class1 = org.jsoup.Jsoup.connect("https://api.h2owr.xyz/getclasses.php?week=5").get().select("class1").text();
		var class1link = org.jsoup.Jsoup.connect("https://api.h2owr.xyz/getclasses.php?week=5").get().select("class1link").text();
		var class2 = org.jsoup.Jsoup.connect("https://api.h2owr.xyz/getclasses.php?week=5").get().select("class2").text();
		var class2link = org.jsoup.Jsoup.connect("https://api.h2owr.xyz/getclasses.php?week=5").get().select("class2link").text();
		var class3 = org.jsoup.Jsoup.connect("https://api.h2owr.xyz/getclasses.php?week=5").get().select("class3").text();
		var class3link = org.jsoup.Jsoup.connect("https://api.h2owr.xyz/getclasses.php?week=5").get().select("class3link").text();
		var class4 = org.jsoup.Jsoup.connect("https://api.h2owr.xyz/getclasses.php?week=5").get().select("class4").text();
		var class4link = org.jsoup.Jsoup.connect("https://api.h2owr.xyz/getclasses.php?week=5").get().select("class4link").text();
		var class5 = org.jsoup.Jsoup.connect("https://api.h2owr.xyz/getclasses.php?week=5").get().select("class5").text();
		var class5link = org.jsoup.Jsoup.connect("https://api.h2owr.xyz/getclasses.php?week=5").get().select("class5link").text();
		var class6 = org.jsoup.Jsoup.connect("https://api.h2owr.xyz/getclasses.php?week=5").get().select("class6").text();
		var class6link = org.jsoup.Jsoup.connect("https://api.h2owr.xyz/getclasses.php?week=5").get().select("class6link").text();
		var class7 = org.jsoup.Jsoup.connect("https://api.h2owr.xyz/getclasses.php?week=5").get().select("class7").text();
		var class7link = org.jsoup.Jsoup.connect("https://api.h2owr.xyz/getclasses.php?week=5").get().select("class7link").text();
		replier.reply('[ '+week+'요일 시간표 ]\n'+'\n'+
		'- 조회/종례\n'+
		'= https://us02web.zoom.us/j/96392634458?pwd=QmgyM1dFbFpQd1A3SnN5eW9OY0ZRUT09\n'+'\n'+
		'( 1교시 / 9:10~9:50 )\n'+
		'- '+class1+'\n'+
		'= '+class1link+'\n'+'\n'+
		'( 2교시 / 10:00~10:40 )\n'+
		'- '+class2+'\n'+
		'= '+class2link+'\n'+'\n'+
		'( 3교시 / 10:50~11:30 )\n'+
		'- '+class3+'\n'+
		'= '+class3link+'\n'+'\n'+
		'( 4교시 / 11:40~12:20 )\n'+
		'- '+class4+'\n'+
		'= '+class4link+'\n'+'\n'+
		'( 4.5교시 / 12:20~13:20 )\n'+
		'- 점심\n'+
		'= 없음\n'+'\n'+
		'( 5교시 / 13:20~14:00 )\n'+
		'- '+class5+'\n'+
		'= '+class5link+'\n'+'\n'+
		'( 6교시 / 14:10~14:50 )\n'+
		'- '+class6+'\n'+
		'= '+class6link+'\n'+'\n'+
		'( 7교시 / 15:00~15:40 )\n'+
		'- '+class7+'\n'+
		'= '+class7link);
	} else if(msg=="!토요일 시간표"){
		var week = org.jsoup.Jsoup.connect("https://api.h2owr.xyz/getclasses.php?week=6").get().select("week").text();
		replier.reply('[ '+week+'요일 시간표 ]\n'+'\n'+
		'( 이스터에그 ~토요일의 수업~ )\n'+
		'- 축하합니다! 이스터에그를 찾으셨습니다!'+'\n'+
		'= 토요일 시간표를 보려하다니 정말 시간이 남아 도시나보군요 (쉬는날인데 ㅎㅎㅋㅋ)');
	} else if(msg=="!일요일 시간표"){
		var week = org.jsoup.Jsoup.connect("https://api.h2owr.xyz/getclasses.php?week=7").get().select("week").text();
		replier.reply('[ '+week+'요일 시간표 ]\n'+'\n'+
		'( 이스터에그 ~다음날에 수업함~ )\n'+
		'- 축하합니다! 이스터에그를 찾으셨습니다!'+'\n'+
		'= 그거 아시나요? 다음날에 수업해요 ㅋㅋㅋㅋ');
	} else if(msg=="!시간표") {
		var week = org.jsoup.Jsoup.connect("https://api.h2owr.xyz/getweek.php").get().select("curweek").text();
		var fixedweek = org.jsoup.Jsoup.connect("https://api.h2owr.xyz/getclasses.php?week="+week).get().select("week").text();
		var class1 = org.jsoup.Jsoup.connect("https://api.h2owr.xyz/getclasses.php?week="+week).get().select("class1").text();
		var class1link = org.jsoup.Jsoup.connect("https://api.h2owr.xyz/getclasses.php?week="+week).get().select("class1link").text();
		var class2 = org.jsoup.Jsoup.connect("https://api.h2owr.xyz/getclasses.php?week="+week).get().select("class2").text();
		var class2link = org.jsoup.Jsoup.connect("https://api.h2owr.xyz/getclasses.php?week="+week).get().select("class2link").text();
		var class3 = org.jsoup.Jsoup.connect("https://api.h2owr.xyz/getclasses.php?week="+week).get().select("class3").text();
		var class3link = org.jsoup.Jsoup.connect("https://api.h2owr.xyz/getclasses.php?week="+week).get().select("class3link").text();
		var class4 = org.jsoup.Jsoup.connect("https://api.h2owr.xyz/getclasses.php?week="+week).get().select("class4").text();
		var class4link = org.jsoup.Jsoup.connect("https://api.h2owr.xyz/getclasses.php?week="+week).get().select("class4link").text();
		var class5 = org.jsoup.Jsoup.connect("https://api.h2owr.xyz/getclasses.php?week="+week).get().select("class5").text();
		var class5link = org.jsoup.Jsoup.connect("https://api.h2owr.xyz/getclasses.php?week="+week).get().select("class5link").text();
		var class6 = org.jsoup.Jsoup.connect("https://api.h2owr.xyz/getclasses.php?week="+week).get().select("class6").text();
		var class6link = org.jsoup.Jsoup.connect("https://api.h2owr.xyz/getclasses.php?week="+week).get().select("class6link").text();
		var class7 = org.jsoup.Jsoup.connect("https://api.h2owr.xyz/getclasses.php?week="+week).get().select("class7").text();
		var class7link = org.jsoup.Jsoup.connect("https://api.h2owr.xyz/getclasses.php?week="+week).get().select("class7link").text();
		if(week != 6 && week != 7) {
			replier.reply('[ 오늘 시간표('+fixedweek+'요일) ]\n'+'\n'+
			'- 조회/종례\n'+
			'= https://us02web.zoom.us/j/96392634458?pwd=QmgyM1dFbFpQd1A3SnN5eW9OY0ZRUT09\n'+'\n'+
			'( 1교시 / 9:10~9:50 )\n'+
			'- '+class1+'\n'+
			'= '+class1link+'\n'+'\n'+
			'( 2교시 / 10:00~10:40 )\n'+
			'- '+class2+'\n'+
			'= '+class2link+'\n'+'\n'+
			'( 3교시 / 10:50~11:30 )\n'+
			'- '+class3+'\n'+
			'= '+class3link+'\n'+'\n'+
			'( 4교시 / 11:40~12:20 )\n'+
			'- '+class4+'\n'+
			'= '+class4link+'\n'+'\n'+
			'( 4.5교시 / 12:20~13:20 )\n'+
			'- 점심\n'+
			'= 없음\n'+'\n'+
			'( 5교시 / 13:20~14:00 )\n'+
			'- '+class5+'\n'+
			'= '+class5link+'\n'+'\n'+
			'( 6교시 / 14:10~14:50 )\n'+
			'- '+class6+'\n'+
			'= '+class6link+'\n'+'\n'+
			'( 7교시 / 15:00~15:40 )\n'+
			'- '+class7+'\n'+
			'= '+class7link);
		} else {
			replier.reply('[ 오늘 시간표('+fixedweek+'요일) ]\n'+'\n'+
			'( 이스터에그 ~오늘은?~ )\n'+
			'- 축하합니다! 이스터에그를 찾으셨습니다!\n'+
			'= 그거 아세요? 오늘 쉬는날임 엌ㅋㅋㅋㅋㅋ\n'+
			'= 오늘 수업 안함 ㅋㅋ루삥뽕');
		}
	} else if(msg=="!과목") {
		var week = org.jsoup.Jsoup.connect("https://api.h2owr.xyz/getweek.php").get().select("curweek").text();
		let tnow = new Date();
		if(tnow.getHours()==8 && tnow.getMinutes()>=50 && tnow.getMinutes()<60) {
			var classnum=0; //0교시 <조회> 10분전
			var pre="(예비) ]";
		} else if(tnow.getHours()==9 && tnow.getMinutes()>=0 && tnow.getMinutes()<5) {
			var classnum=0; //0교시 <조회>
			var pre=" ]";
		} else if(tnow.getHours()==9 && tnow.getMinutes()>=5 && tnow.getMinutes()<10) {
			var classnum=1; //1교시 5분전
			var pre="(예비) ]";
		} else if(tnow.getHours()==9 && tnow.getMinutes()>=10 && tnow.getMinutes()<50) {
			var classnum=1; //1교시
			var pre=" ]";
		} else if(tnow.getHours()==9 && tnow.getMinutes()>=50 && tnow.getMinutes()<60) {
			var classnum=2; //2교시 10분전
			var pre="(예비) ]";
		} else if(tnow.getHours()==10 && tnow.getMinutes()>=0 && tnow.getMinutes()<40) {
			var classnum=2; //2교시
			var pre=" ]";
		} else if(tnow.getHours()==10 && tnow.getMinutes()>=40 && tnow.getMinutes()<50) {
			var classnum=3; //3교시 10분전
			var pre="(예비) ]";
		} else if(tnow.getHours()==10 && tnow.getMinutes()>=50 && tnow.getMinutes()<60) {
			var classnum=3; //3교시
			var pre=" ]";
		} else if(tnow.getHours()==11 && tnow.getMinutes()>=0 && tnow.getMinutes()<30) {
			var classnum=3; //3교시
			var pre=" ]";
		} else if(tnow.getHours()==11 && tnow.getMinutes()>=30 && tnow.getMinutes()<40) {
			var classnum=4; //4교시 10분전
			var pre="(예비) ]";
		} else if(tnow.getHours()==11 && tnow.getMinutes()>=40 && tnow.getMinutes()<60) {
			var classnum=4; //4교시
			var pre=" ]";
		} else if(tnow.getHours()==12 && tnow.getMinutes()>=0 && tnow.getMinutes()<15) {
			var classnum=4; //4교시
			var pre=" ]";
		} else if(tnow.getHours()==12 && tnow.getMinutes()>=15 && tnow.getMinutes()<15) {
			var classnum=99; //점심 5분전
			var pre="(예비) ]";
		} else if(tnow.getHours()==12 && tnow.getMinutes()>=20 && tnow.getMinutes()<60) {
			var classnum=99; //점심
			var pre=" ]";
		} else if(tnow.getHours()==13 && tnow.getMinutes()>=0 && tnow.getMinutes()<15) {
			var classnum=99; //점심
			var pre=" ]";
		} else if(tnow.getHours()==13 && tnow.getMinutes()>=15 && tnow.getMinutes()<20) {
			var classnum=5; //5교시 5분전
			var pre="(예비) ]";
		} else if(tnow.getHours()==13 && tnow.getMinutes()>=20 && tnow.getMinutes()<60) {
			var classnum=5; //5교시
			var pre=" ]";
		} else if(tnow.getHours()==14 && tnow.getMinutes()>=0 && tnow.getMinutes()<10) {
			var classnum=6; //6교시 10분전
			var pre="(예비) ]";
		} else if(tnow.getHours()==14 && tnow.getMinutes()>=10 && tnow.getMinutes()<45) {
			var classnum=6; //6교시
			var pre=" ]";
		} else if(tnow.getHours()==14 && tnow.getMinutes()>=50 && tnow.getMinutes()<60 && week==5) {
			var classnum=7; //7교시 10분전 금요일
			var pre="(예비) ]";
		} else if(tnow.getHours()==15 && tnow.getMinutes()>=0 && tnow.getMinutes()<35 && week==5) {
			var classnum=7; //7교시 금요일
			var pre=" ]";
		} else if(tnow.getHours()==15 && tnow.getMinutes()>=35 && tnow.getMinutes()<40 && week==5) {
			var classnum=98; //종례 5분전 금요일
			var pre="(예비) ]";
		} else if(tnow.getHours()==15 && tnow.getMinutes()>=40 && tnow.getMinutes()<60 && week==5) {
			var classnum=98; //종례 금요일
			var pre=" ]";
		} else if(tnow.getHours()==14 && tnow.getMinutes()>=45 && tnow.getMinutes()<50) {
			var classnum=97; //종례 2분전
			var pre="(예비) ]";
		} else if(tnow.getHours()==14 && tnow.getMinutes()>=50 && tnow.getMinutes()<60) {
			var classnum=97; //종례 
			var pre=" ]";
		} else if(tnow.getHours()==15 && tnow.getMinutes()>=0 && tnow.getMinutes()<10) {
			var classnum=97; //종례
			var pre=" ]";
		} 
		if(classnum==0) {
			var fixedclassnum = "0.5"
			var week = 0;
			var newclassnum = 1;
		} else if(classnum==99) {
			var fixedclassnum = "4.5"
			var week = 0;
			var newclassnum = 2;
		} else if(classnum==97) {
			var fixedclassnum = "6.5"
			var week = 0;
			var newclassnum = 3;
		} else if(classnum==98) {
			var fixedclassnum = "7.5"
			var week = 0;
			var newclassnum = 3;
		} else {
			var fixedclassnum = classnum;
		}
		if(typeof newclassnum != "undefined" || newclassnum != null || newclassnum != "") {
			var classname = org.jsoup.Jsoup.connect("https://api.h2owr.xyz/getclasslink.php?week="+week+"&classnum="+fixedclassnum).get().select("classname").text();	
			var classlink = org.jsoup.Jsoup.connect("https://api.h2owr.xyz/getclasslink.php?week="+week+"&classnum="+fixedclassnum).get().select("classlink").text();
		} else {
			var classname = org.jsoup.Jsoup.connect("https://api.h2owr.xyz/getclasslink.php?week=0&classnum="+newclassnum).get().select("classname").text();	
			var classlink = org.jsoup.Jsoup.connect("https://api.h2owr.xyz/getclasslink.php?week=0&classnum="+newclassnum).get().select("classlink").text();
		}
		var curweek = org.jsoup.Jsoup.connect("https://api.h2owr.xyz/getweek.php").get().select("curweek").text();
		if(curweek==1) {
			var fixedcurweek = '월';
		} else if(curweek==2) {
			var fixedcurweek = '화';
		} else if(curweek==3) {
			var fixedcurweek = '수';
		} else if(curweek==4) {
			var fixedcurweek = '목';
		} else if(curweek==5) {
			var fixedcurweek = '금';
		} else if(curweek==6) {
			var fixedcurweek = '토';
		} else if(curweek==7) {
			var fixedcurweek = '일';
		}
		if(classnum==0) {
			var classtime = '9:00~9:10';
		} else if(classnum==1) {
			var classtime = '9:10~9:50';
		} else if(classnum==2) {
			var classtime = '10:00~10:40';
		} else if(classnum==3) {
			var classtime = '10:50~11:30';
		} else if(classnum==4) {
			var classtime = '11:40~12:20';
		} else if(classnum==99) {
			var classtime = '12:20~13:20';
		} else if(classnum==5) {
			var classtime = '13:20~14:00';
		} else if(classnum==6) {
			var classtime = '14:10~14:50';
		} else if(classnum==7) {
			var classtime = '15:00~15:40';
		} else if(classnum==97) {
			var classtime = '14:50~15:10';
		} else if(classnum==98) {
			var classtime = '15:40~16:00';
		}
		if(typeof pre == "undefined" || pre == null || pre == "") {
			replier.reply('[ 오류 ]'+'\n'+'\n'+
			'- 지금은 수업시간이 아닙니다!');
		} else {
			replier.reply('[ 현재 과목'+pre+'\n'+'\n'+
			'( '+fixedclassnum+'교시 / '+fixedcurweek+'요일 / '+classtime+' )\n'+
			'- '+classname+'('+newclassnum+')\n'+
			'= '+classlink);
		}
	} else if(msg=="!도움말") {
		replier.reply('[ 도움말 ]'+'\n'+'\n'+
		'- !도움말'+'\n'+
		'= 지금 보고있는 도움말을 출력합니다.'+'\n'+'\n'+
		'- !<월~금>요일 시간표'+'\n'+
		'= 꺾쇠 안의 문자에 따라, 시간표를 출력합니다.'+'\n'+'\n'+
		'- !시간표'+'\n'+
		'= 현재 요일에 따라, 시간표를 출력합니다.'+'\n'+'\n'+
		'- !과목'+'\n'+
		'= 지금 수업중이거나, 2~10분 뒤에 시작할 수업의 과목에 대한 정보를 출력합니다.'+'\n'+'\n'+
		'- !학생정보 <(240)1~(24)27/김강민~황재성>'+'\n'+
		'= 꺾쇠 안의 조건에 따라, 학생정보를 출력합니다.'+'\n'+'\n'+
		'- !코로나 현황'+'\n'+
		'= 당일 1시 기준 코로나 관련 정보를 출력합니다.'+'\n'+'\n'+
		'- !과제영상'+'\n'+
		'= 클래스팅 과제 파일 올리는 방법(링크)를 출력합니다.'+'\n'+'\n'+
		'- !영상편집'+'\n'+
		'= 시낭송 영상 편집하는 방법(링크)를 출력합니다.'+'\n'+'\n'+
		'- !시간'+'\n'+
		'= 현제 시간을 출력합니다.'+'\n'+'\n'+
		'- !봇정보'+'\n'+
		'= 봇의 정보를 출력합니다.'+'\n'+'\n'+
		'- !과목정보 <국어~종례>'+'\n'+
		'= 꺾쇠 안의 조건에 따라, 과목정보를 출력합니다.'+'\n'+'\n'+
		'- !과목검색 <국어~종례>'+'\n'+
		'= 꺾쇠 안의 조건에 따라, 해당 과목이 무슨 교시인지를 출력합니다.'+'\n'+'\n'+
		'- !<월~금>요일 책목록'+'\n'+
		'= 꺾쇠 안의 조건에 따라, 해당 요일에 준비해야 하는 책의 목록을 출력합니다.'+'\n'+'\n'+
		'- !책목록'+'\n'+
		'= 해당 요일에 준비해야 하는 책의 목록을 출력합니다.');
	} else if(msgsp[0]=="!학생정보") {
		var inttype = /^[0-9]/; 
		var hangultype = /^[가-힣]/; 
		var strnallow = false;
		if(inttype.test(msgstu)) {
			var studentnumber = org.jsoup.Jsoup.connect("https://api.h2owr.xyz/getstuinfo.php?stunum="+msgstu).get().select("studentnumber").text();
			var studentname = org.jsoup.Jsoup.connect("https://api.h2owr.xyz/getstuinfo.php?stunum="+msgstu).get().select("studentname").text();
			var studentclub = org.jsoup.Jsoup.connect("https://api.h2owr.xyz/getstuinfo.php?stunum="+msgstu).get().select("studentclub").text();
		} else if (hangultype.test(msgstu)) {
			var studentnumber = org.jsoup.Jsoup.connect("https://api.h2owr.xyz/getstuinfo.php?stuname="+msgstu).get().select("studentnumber").text();
			var studentname = org.jsoup.Jsoup.connect("https://api.h2owr.xyz/getstuinfo.php?stuname="+msgstu).get().select("studentname").text();
			var studentclub = org.jsoup.Jsoup.connect("https://api.h2owr.xyz/getstuinfo.php?stuname="+msgstu).get().select("studentclub").text();
		} else {
			replier.reply('[ 오류 ]'+'\n'+'\n'+
			'- 허용되지 않은 문자열입니다!');
			var strnallow = true;
		}
		if(typeof studentnumber == "undefined" || studentnumber == null || studentnumber == "") {
			if(!strnallow) {
				replier.reply('[ 오류 ]'+'\n'+'\n'+
				'- 요청에 일치하는 결과가 존재하지 않습니다!');
			}
		} else {
			replier.reply('[ 학생정보 ]\n'+'\n'+
							'( '+msgstu+'의 검색 결과 )\n'+
							'- 이름 : '+studentname+'\n'+
							'- 학번 : '+studentnumber+'\n'+
							'- 동아리 : '+studentclub);
		}
	} else if(msg=="!코로나 현황") {
		var date = org.jsoup.Jsoup.connect("https://api.h2owr.xyz/getcoronadata.php").get().select("date").text();
		var cases = org.jsoup.Jsoup.connect("https://api.h2owr.xyz/getcoronadata.php").get().select("cases").text();
		var casesPREV = org.jsoup.Jsoup.connect("https://api.h2owr.xyz/getcoronadata.php").get().select("casesPREV").text();
		var cured = org.jsoup.Jsoup.connect("https://api.h2owr.xyz/getcoronadata.php").get().select("cured").text();
		var curedPREV = org.jsoup.Jsoup.connect("https://api.h2owr.xyz/getcoronadata.php").get().select("curedPREV").text();
		var quaran = org.jsoup.Jsoup.connect("https://api.h2owr.xyz/getcoronadata.php").get().select("quaran").text();
		var quaranPREV = org.jsoup.Jsoup.connect("https://api.h2owr.xyz/getcoronadata.php").get().select("quaranPREV").text();
		var deaths = org.jsoup.Jsoup.connect("https://api.h2owr.xyz/getcoronadata.php").get().select("deaths").text();
		var deathsPREV = org.jsoup.Jsoup.connect("https://api.h2owr.xyz/getcoronadata.php").get().select("deathsPREV").text();
		var dperc = org.jsoup.Jsoup.connect("https://api.h2owr.xyz/getcoronadata.php").get().select("dperc").text();
		var cperc = org.jsoup.Jsoup.connect("https://api.h2owr.xyz/getcoronadata.php").get().select("cperc").text();
		replier.reply('[ 코로나 현황('+date+') ]\n'+'\n'+
		'( 확진자 )\n'+
		'= '+cases+' <오늘>\n'+
		'= '+casesPREV+' <전날>\n'+'\n'+
		'( 완치자 )\n'+
		'= '+cured+' <오늘>\n'+
		'= '+curedPREV+' <전날>\n'+'\n'+
		'( 격리자 )\n'+
		'= '+quaran+' <오늘>\n'+
		'= '+quaranPREV+' <전날>\n'+'\n'+
		'( 사망자 )\n'+
		'= '+deaths+' <오늘>\n'+
		'= '+deathsPREV+' <전날>\n'+'\n'+
		'( 치사울/완치율 )\n'+
		'= '+dperc+'%\n'+
		'= '+cperc+'%');
	} else if(msg=="!과제영상") {
		replier.reply('[ 영상 ]'+'\n'+'\n'+
		'- 클래스팅 과제 파일 올리는 방법'+'\n'+
		'= https://go.h2owr.xyz/howtouploadctam');
	} else if(msg=="!시간") {
		let tnow = new Date();
		replier.reply('[ 시간 ]'+'\n'+'\n'+
		'- 현제 시간은 '+tnow.getHours()+':'+tnow.getMinutes()+' 입니다!');
	} else if(msg=="!봇정보") {
		replier.reply('[ 봇정보 ]\n'+'\n'+
						'- 이름 : 비공식_신흥봇_2-4\n'+
						'- 버전 : 2020.5.4f2\n'+
						'- 깃헙 : https://go.h2owr.xyz/kakaobgh\n'+
						'- 라이센스 : https://go.h2owr.xyz/kakaoblc\n'+
						'= Made by KKM');
	} else if(msg=="!미안하다이거보여주려고어그로끌었다") {
		replier.reply('( 이스터에그 ~미안하다...~ )\n- 축하합니다! 이스터에그를 찾으셨습니다!\n나루토랑 나루토 싸움 수준 ㄹㅇ 실화냐?\n진짜 세계관 최강자의 싸움이다\nhttps://go.h2owr.xyz/fightlevelreal');
	} else if(msg=="!영상편집") {
		replier.reply('[ 영상 ]'+'\n'+'\n'+
		'- 시낭송 영상 편집하는 방법'+'\n'+
		'= https://go.h2owr.xyz/howtoeditpvi');
	} else if(msg=="!동물정보 개구리") {
		replier.reply('[ 학생정보 ]\n'+'\n'+
		'( 이스터에그 ~개구리의 검색결과~ )\n'+
		'- 축하합니다! 이스터에그를 찾으셨습니다!\n'+
		'= 선생님 '+sender+' 학생이 별명써요!!!!!');
	} else if(msgsp[0]=="!과목정보") {
		var hangultype = /^[가-힣]/; 
		if (hangultype.test(msgstu)) {
			if(msgstu=='과학') {
				var msgstu = 1;
				var teachername = '김상희';
				var classtime = '화요일 2교시, 목요일 6교시, 금요일 1교시';
			} else if(msgstu=='국어') {
				var msgstu = 2;
				var teachername = '김경삼';
				var classtime = '월요일 5교시, 수요일 6교시, 금요일 2교시';
			} else if(msgstu=='기술가정') {
				var msgstu = 3;
				var teachername = '안형웅';
				var classtime = '화요일 2교시, 수요일 5교시, 목요일 4교시';
			} else if(msgstu=='기가') {
				var msgstu = 3;
				var teachername = '안형웅';
				var classtime = '화요일 2교시, 수요일 5교시, 목요일 4교시';
			} else if(msgstu=='도덕') {
				var msgstu = 4;
				var teachername = '김세미';
				var classtime = '화요일 6교시, 금요일 6교시';
			} else if(msgstu=='미술') {
				var msgstu = 5;
				var teachername = '김예린';
				var classtime = '월요일 6교시, 수요일 1교시';
			} else if(msgstu=='수학') {
				var msgstu = 6;
				var teachername = '안성호';
				var classtime = '화요일 1교시, 수요일 4교시, 목요일 3교시';
			} else if(msgstu=='역사A') {
				var msgstu = 7;
				var teachername = '박경석';
				var classtime = '목요일 2교시';
			} else if(msgstu=='역사B') {
				var msgstu = 8;
				var teachername = '이승은';
				var classtime = '월요일 2교시, 금요일 7교시';
			} else if(msgstu=='영어') {
				var msgstu = 9;
				var teachername = '이혜진';
				var classtime = '월요일 3교시, 수요일 2교시, 금요일 3교시';
			} else if(msgstu=='음악') {
				var msgstu = 10;
				var teachername = '이윤정';
				var classtime = '월요일 4교시, 금요일 4교시';
			} else if(msgstu=='중국어') {
				var msgstu = 11;
				var teachername = '최윤정';
				var classtime = '월요일 1교시, 목요일 1교시, 금요일 5교시';
			} else if(msgstu=='창체진로') {
				var msgstu = 12;
				var teachername = '김경삼';
				var classtime = '목요일 5교시';
			} else if(msgstu=='진로') {
				var msgstu = 12;
				var teachername = '김경삼';
				var classtime = '목요일 5교시';
			} else if(msgstu=='체육') {
				var msgstu = 13;
				var teachername = '이경남';
				var classtime = '화요일 5교시, 수요일 3교시';
			} else if(msgstu=='스포츠클럽') {
				var msgstu = 14;
				var teachername = '박경석';
				var classtime = '화요일 4교시';
			} else if(msgstu=='스클') {
				var msgstu = 14;
				var teachername = '박경석';
				var classtime = '화요일 4교시';
			} else if(msgstu=='조회') {
				var msgstu = 97;
				var teachername = '최윤정';
				var classtime = '월~금요일 0.5교시';
			} else if(msgstu=='종례') {
				var msgstu = 99;
				var teachername = '최윤정';
				var classtime = '월~목요일 6.5교시, 금요일 7.5교시';
			} else {
				replier.reply('[ 오류 ]'+'\n'+'\n'+
				'- 허용되지 않은 단어입니다!');
				var strnallow = true;
			}
			if(typeof strnallow != "undefined" || strnallow != null || strnallow != "") {
				if(strnallow != true) {
					var classname = org.jsoup.Jsoup.connect("https://api.h2owr.xyz/getclasssp.php?classnum="+msgstu).get().select("class").text();
					var classlink = org.jsoup.Jsoup.connect("https://api.h2owr.xyz/getclasssp.php?classnum="+msgstu).get().select("classlink").text();
					replier.reply('[ 과목정보 ]\n'+'\n'+
									'( 과목 '+classname+'의 정보 )\n'+
									'- 선생님 : '+teachername+'쌤\n'+
									'- 링크 : '+classlink+'\n'+
									'- 교시 : '+classtime);
				}
			}
		} else {
			replier.reply('[ 오류 ]'+'\n'+'\n'+
			'- 허용되지 않은 문자열입니다!');
		}
	} else if(msgsp[0]=="!과목검색") {
		var week = org.jsoup.Jsoup.connect("https://api.h2owr.xyz/getweek.php").get().select("curweek").text();
		var hangultype = /^[가-힣]/; 
		if (hangultype.test(msgstu)) {
			if(msgstu=='과학') {
				var classnum = 1;
			} else if(msgstu=='국어') {
				var classnum = 2;
			} else if(msgstu=='기술가정') {
				var classnum = 3;
			} else if(msgstu=='기가') {
				var classnum = 3;
			} else if(msgstu=='도덕') {
				var classnum = 4;
			} else if(msgstu=='미술') {
				var classnum = 5;
			} else if(msgstu=='수학') {
				var classnum = 6;
			} else if(msgstu=='역사A') {
				var classnum = 7;
			} else if(msgstu=='역사B') {
				var classnum = 8;
			} else if(msgstu=='영어') {
				var classnum = 9;
			} else if(msgstu=='음악') {
				var classnum = 10;
			} else if(msgstu=='중국어') {
				var classnum = 11;
			} else if(msgstu=='창체진로') {
				var classnum = 12;
			} else if(msgstu=='진로') {
				var classnum = 12;
			} else if(msgstu=='체육') {
				var classnum = 13;
			} else if(msgstu=='스포츠클럽') {
				var classnum = 14;
			} else if(msgstu=='스클') {
				var classnum = 14;
			} else if(msgstu=='조회') {
				var classnum = 97;
			} else if(msgstu=='종례') {
				var classnum = 99;
			} else if(msgstu=='동아리') {
				var classnum = 101;
			} else {
				replier.reply('[ 오류 ]'+'\n'+'\n'+
				'- 허용되지 않은 단어입니다!');
				var strnallow = true;
			}
			var week = org.jsoup.Jsoup.connect("https://api.h2owr.xyz/getweek.php").get().select("curweek").text();
			if(week>5) {
				replier.reply('[ 오류 ]'+'\n'+'\n'+
				'- 오늘은 수업일이 아닙니다!');
				var strnallow = true;
			}
			if(typeof strnallow != "undefined" || strnallow != null || strnallow != "") {
				if(strnallow != true) {
					var classtime = org.jsoup.Jsoup.connect("https://api.h2owr.xyz/getclasstime.php?week="+week+"&classnum="+classnum).get().select("classtime").text();
					var classname = msgstu;
					if(classnum==97) {
						var classtime = '0.5교시';
					} else if(classnum==99 && week!=5) {
						var classtime = '6.5교시';
					} else if(classnum==99 && week==5) {
						var classtime = '7.5교시';
					}
					replier.reply('[ 과목검색 ]\n'+'\n'+
						'( 과목 '+classname+'의 정보 )\n'+
						'- 포함 교시\n'+
						'= '+classtime);
				}
			}
		} else {
			replier.reply('[ 오류 ]'+'\n'+'\n'+
			'- 허용되지 않은 문자열입니다!');
		}
	} else if(msg=="!책목록") {
		var week = org.jsoup.Jsoup.connect("https://api.h2owr.xyz/getweek.php").get().select("curweek").text();
		if(week==1) {
			var fixedweek = '월';
			var booklist = '국어 2-1\n= 미술 2\n= 역사 1\n= 영어 2\n= 음악 1\n= 생활 중국어';
		} else if(week==2) {
			var fixedweek = '화';
			var booklist = '과학 2\n= 기술가정 2\n= 도덕 2\n= 수학 2\n= 체육 1/2';
		} else if(week==3) {
			var fixedweek = '수';
			var booklist = '국어 2-1\n= 기술가정 2\n= 미술 2\n= 수학 2\n= 영어 2\n= 체육 1/2';
		} else if(week==4) {
			var fixedweek = '목';
			var booklist = '과학 2\n= 기술가정 2\n= 수학 2\n= 역사 1\n= 생활 중국어';
		} else if(week==5) {
			var fixedweek = '금';
			var booklist = '과학 2\n= 국어 2-1\n= 도덕 2\n= 역사 1\n= 영어 2\n= 음악 1\n= 생활 중국어';
		} else {
			replier.reply('[ 오류 ]'+'\n'+'\n'+
			'- 오늘은 수업일이 아닙니다!');
			var strnallow = true;
		}
		if(strnallow != true) {
			replier.reply('[ 오늘 책('+fixedweek+'요일) ]\n'+'\n'+
			'- 책 목록\n'+
			'= '+booklist);
		}
	} else if(msg=="!월요일 책목록") {
		var fixedweek = '월';
		var booklist = '국어 2-1\n= 미술 2\n= 역사 1\n= 영어 2\n= 음악 1\n= 생활 중국어';
		replier.reply('[ 오늘 책('+fixedweek+'요일) ]\n'+'\n'+
		'- 책 목록\n'+
		'= '+booklist);
	} else if(msg=="!화요일 책목록") {
		var fixedweek = '화';
		var booklist = '과학 2\n= 기술가정 2\n= 도덕 2\n= 수학 2\n= 체육 1/2';
		replier.reply('[ 오늘 책('+fixedweek+'요일) ]\n'+'\n'+
		'- 책 목록\n'+
		'= '+booklist);
	} else if(msg=="!수요일 책목록") {
		var fixedweek = '수';
		var booklist = '국어 2-1\n= 기술가정 2\n= 미술 2\n= 수학 2\n= 영어 2\n= 체육 1/2';
		replier.reply('[ 오늘 책('+fixedweek+'요일) ]\n'+'\n'+
		'- 책 목록\n'+
		'= '+booklist);
	} else if(msg=="!목요일 책목록") {
		var fixedweek = '목';
		var booklist = '과학 2\n= 기술가정 2\n= 수학 2\n= 역사 1\n= 생활 중국어';
		replier.reply('[ 오늘 책('+fixedweek+'요일) ]\n'+'\n'+
		'- 책 목록\n'+
		'= '+booklist);
	} else if(msg=="!금요일 책목록") {
		var fixedweek = '금';
		var booklist = '과학 2\n= 국어 2-1\n= 도덕 2\n= 역사 1\n= 영어 2\n= 음악 1\n= 생활 중국어';
		replier.reply('[ 오늘 책('+fixedweek+'요일) ]\n'+'\n'+
		'- 책 목록\n'+
		'= '+booklist);
	}
}