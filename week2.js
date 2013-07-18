var ExamScores = [100,98,90,100,88];
        var addScore = function (score, data) {
                var TotalOfScores = 0;
                console.log ("Before adding today's exam score, you took " + (data.length) + " exams and the scores were " + ExamScores);
                console.log ("Additionally, we have also added your last score of " + score + " to your exam history.  Here are your itemized averages.");
                console.log (" ");
	        for (var i = 0; i < data.length; i++) {
                        TotalOfScores = TotalOfScores + data [ i ];
                        console.log ("Total exams: " + ( i + 1 ) + ".  Average = " + 
                                (TotalOfScores / (i + 1)));
                        if (i === 4) {
                                console.log("   And with todays' score: Average = " +
                                    ((TotalOfScores + score) / (i + 2)));
                        };
                };
                console.log (" ");
                return data;
        };
        console.log ("All of your scores have been entered.  Please take a moment and review them for accuracy.  The complete list of your exams are: " + addScore(70,ExamScores));
    