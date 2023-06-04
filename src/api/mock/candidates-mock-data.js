const candidates =  [
    { 
        "id": "1", 
        "name": "karthick", 
        "title": "Lead Software Engineer",
        "exp": "12 years",
        "resumeLink": "",
        "photLink": "",
        "currentCompany": {
            "name": "ABC systems",
            "location": "Bangalore",
            "from": "05/2020",
            "to": "current"
        },
        "skills": ["iOS", "Flutter", "ReactJS", "Html"],
        "shortlisted": false,
        "interviewStatus": {
            "status": 'rejected',
            "rejected": {
                "rejectedRound": "secondRound",
                "date": "",
                "reason": ""
            },
            "firstRound": {
                "date": "",
                "interViewerName": "",
                "feedback": "",
                "selected": false
            },
            "secondRound": {
                "date": "",
                "interViewerName": "",
                "feedback": "",
                "selected": false
            },
        }
    }, 
    { 
        "id": "2", 
        "name": "Sam", 
        "title": "Lead Software Engineer",
        "exp": "12 years",
        "currentCompany": {
            "name": "XYZ systems",
            "location": "Bangalore",
            "from": "05/2019",
            "to": "current"
        },
        "skills": ["iOS", "Android", "ReactJS", "Html"],
        "shortlisted": false,
        "interviewStatus": {
            //Interview status can be new, joined, inProgress, rejected, offerReleased, CandidateRejectedOffer or candidateAcceptedOffer 
            "status": 'rejected',
            "joined": {
                "date": ""
            },
            "inProgress": {
                //Status can be firstRoundScheduled, firstRoundOver, waitingForSecondRound, secondRoundScehduled, 
                // secondRoundOver, waitingForThirdRound, thridRoundScheduled, thirdRoundOver
                //OfferInProgress,
                "status": "firstRoundOver",
                "firstRoundScheduled": {
                    "interviewerName": "",
                    "date": "",
                    "zoomLink": ""
                },
                "firstRoundOver": {
                    "interviewerName": "Sam",
                    "date": "",
                    "selected": true,
                    "feedback": "",
                    "detailedFeedback": [
                        {
                            "topic": "swift",
                            "feedback": ""
                        },
                        {
                            "topic": "iOS",
                            "feedback": ""
                        },
                        {
                            "topic": "Accessibility",
                            "feedback": ""
                        },
                        {
                            "topic": "Design patterens",
                            "feedback": ""
                        },
                    ],
                    "score": ""
                },
                "secondRoundScheduled": {
                    "interviewerName": "",
                    "date": "",
                    "zoomLink": ""
                },
                "secondRoundOver": {
                    "interviewerName": "Sam",
                    "date": "",
                    "selected": true,
                    "feedback": "",
                    "detailedFeedback": [
                        {
                            "topic": "swift",
                            "feedback": ""
                        },
                        {
                            "topic": "iOS",
                            "feedback": ""
                        },
                        {
                            "topic": "Accessibility",
                            "feedback": ""
                        },
                        {
                            "topic": "Design patterens",
                            "feedback": ""
                        },
                    ],
                    "score": ""
                },
                "thirdRoundScheduled": {
                    "interviewerName": "",
                    "date": "",
                    "zoomLink": ""
                },
                "thirdRoundOver": {
                    "interviewerName": "Sam",
                    "date": "",
                    "selected": true,
                    "feedback": "",
                    "detailedFeedback": [
                        {
                            "topic": "swift",
                            "feedback": ""
                        },
                        {
                            "topic": "iOS",
                            "feedback": ""
                        },
                        {
                            "topic": "Accessibility",
                            "feedback": ""
                        },
                        {
                            "topic": "Design patterens",
                            "feedback": ""
                        },
                    ],
                    "score": ""
                },
                "offerInProgress": {
                    "hr": "",
                    "email": "",
                    "number": ""
                },
            },
            "rejected": {
                "rejectedRound": "",
                "date": "",
                "reason": ""
            },
            "offerReleased": {
                "date": "",
                "joiningDate": "",
                "offerlink": ""
            },
            "candidateRejectedOffer": {
                "date": "",
                "reason": ""
            },
            "candidateAcceptedOffer": {
                "date": "",
                "joiningDate": ""
            }
        }
    },
    { 
        id: "3", 
        name: "karthick3", 
        title: "Lead Software Engineer",
        exp: "14 years",
        interviewStatus: {
            status: 'rejected',
            reason: 'technical skills were not good'
        },
        skills: ["iOS", "Flutter", "ReactJS", "Html"]
    },
    { 
        id: "4", 
        name: "karthick4", 
        title: "Lead Software Engineer",
        exp: "15 years",
        interviewStatus: {
            status: 'offer rejected',
            reason: ''
        },
        skills: ["iOS", "Flutter", "ReactJS", "Html"]
    },
    { 
        id: "5", 
        name: "karthick5", 
        title: "Lead Software Engineer",
        exp: "15 years",
        interviewStatus: {
            status: 'working',
            reason: ''
        },
        skills: ["iOS", "Flutter", "ReactJS", "Html"]
    }
]

export default candidates