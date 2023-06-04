import MockAdapter from 'axios-mock-adapter'

const mockAxios = (axios) => {
    console.log('MockAxios')
    const mock = new MockAdapter(axios)
    
    mock.onGet('/findCandidates', { params: { searchText: "iOS" }}).reply(200, {
       candidates:  [
            { 
                "id": "1",
                "profilePic": "https://picsum.photos/id/300/200/300",
                "name": "karthick1", 
                "title": "Lead Software Engineer",
                "exp": "10 years",
                "workHistory": [
                    {
                        "name": "WellsFargo EGS",
                        "location": "Bangalore",
                        "from": "05/2020",
                        "to": "current"
                    },
                    {
                        "name": "ABC systems",
                        "location": "Bangalore",
                        "from": "05/2018",
                        "to": "05/2020"
                    },
                    {
                        "name": "WellsFargo EGS",
                        "location": "Bangalore",
                        "from": "03/2010",
                        "to": "05/2018"
                    }
                ],
                "skills": ["iOS", "Flutter", "ReactJS", "Html"],
                "shortlisted": false,
                "phone": "1234567890",
                "email": "ccc@gmail.com",
                "interviewStatus": {
                    "status": 'new',
                    "joined": {
                        "date": ""
                    },
                    "rejected": {
                        "rejectedRound": "",
                        "date": "",
                        "reason": ""
                    },
                    "offereReleased": {
                        "date": "",
                        "joiningDate": "",
                        "offerlink": ""
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
                    "finalRound": {
                        "date": "",
                        "interViewerName": "",
                        "feedback": "",
                        "selected": false,
                        "package": {
                            "current": "",
                            "expected": ""
                        }
                    }
                }
            }, 
            { 
                id: "2", 
                name: "karthick2", 
                title: "Lead Software Engineer",
                exp: "12 years",
                "workHistory": [
                    {
                        "name": "WellsFargo EGS",
                        "location": "Bangalore",
                        "from": "05/2020",
                        "to": "current"
                    },
                    {
                        "name": "ABC systems",
                        "location": "Bangalore",
                        "from": "05/2018",
                        "to": "05/2020"
                    },
                    {
                        "name": "WellsFargo EGS",
                        "location": "Bangalore",
                        "from": "03/2010",
                        "to": "05/2018"
                    }
                ],
                "skills": ["iOS", "Flutter", "ReactJS", "Html"],
                "shortlisted": false,
                "phone": "12345678",
                "email": "ccc@gmail.com",
                "interviewStatus": {
                    "status": 'rejected',
                    "joined": {
                        "date": ""
                    },
                    "rejected": {
                        "rejectedRound": "",
                        "date": "",
                        "reason": ""
                    },
                    "offereReleased": {
                        "date": "",
                        "joiningDate": "",
                        "offerlink": ""
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
                    "finalRound": {
                        "date": "",
                        "interViewerName": "",
                        "feedback": "",
                        "selected": false,
                        "package": {
                            "current": "",
                            "expected": ""
                        }
                    }
                }
            },
            { 
                id: "3", 
                name: "karthick3", 
                title: "Lead Software Engineer",
                exp: "14 years",
                skills: ["iOS", "Flutter", "ReactJS", "Html"],
                "workHistory": [
                    {
                        "name": "WellsFargo EGS",
                        "location": "Bangalore",
                        "from": "05/2020",
                        "to": "current"
                    },
                    {
                        "name": "ABC systems",
                        "location": "Bangalore",
                        "from": "05/2018",
                        "to": "05/2020"
                    },
                    {
                        "name": "WellsFargo EGS",
                        "location": "Bangalore",
                        "from": "03/2010",
                        "to": "05/2018"
                    }
                ],
                "shortlisted": false,
                "phone": "12345678",
                "email": "ccc@gmail.com",
                "interviewStatus": {
                    "status": 'offereReleased',
                    "joined": {
                        "date": ""
                    },
                    "rejected": {
                        "rejectedRound": "",
                        "date": "",
                        "reason": ""
                    },
                    "offereReleased": {
                        "date": "",
                        "joiningDate": "",
                        "offerlink": ""
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
                    "finalRound": {
                        "date": "",
                        "interViewerName": "",
                        "feedback": "",
                        "selected": false,
                        "package": {
                            "current": "",
                            "expected": ""
                        }
                    }
                }
            },
            { 
                id: "4", 
                name: "karthick4", 
                title: "Lead Software Engineer",
                exp: "15 years",
                skills: ["iOS", "Flutter", "ReactJS", "Html"],
                "workHistory": [
                    {
                        "name": "WellsFargo EGS",
                        "location": "Bangalore",
                        "from": "05/2020",
                        "to": "current"
                    },
                    {
                        "name": "ABC systems",
                        "location": "Bangalore",
                        "from": "05/2018",
                        "to": "05/2020"
                    },
                    {
                        "name": "WellsFargo EGS",
                        "location": "Bangalore",
                        "from": "03/2010",
                        "to": "05/2018"
                    }
                ],
                "shortlisted": false,
                "phone": "12345678",
                "email": "ccc@gmail.com",
                "interviewStatus": {
                    "status": 'offereReleased',
                    "joined": {
                        "date": ""
                    },
                    "rejected": {
                        "rejectedRound": "",
                        "date": "",
                        "reason": ""
                    },
                    "offereReleased": {
                        "date": "",
                        "joiningDate": "",
                        "offerlink": ""
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
                    "finalRound": {
                        "date": "",
                        "interViewerName": "",
                        "feedback": "",
                        "selected": false,
                        "package": {
                            "current": "",
                            "expected": ""
                        }
                    }
                }
            },
            { 
                id: "5", 
                name: "karthick5", 
                title: "Lead Software Engineer",
                exp: "15 years",
                "shortlisted": false,
                "phone": "12345678",
                "email": "ccc@gmail.com",
                skills: ["iOS", "Flutter", "ReactJS", "Html"],
                "workHistory": [
                    {
                        "name": "WellsFargo EGS",
                        "location": "Bangalore",
                        "from": "05/2020",
                        "to": "current"
                    },
                    {
                        "name": "ABC systems",
                        "location": "Bangalore",
                        "from": "05/2018",
                        "to": "05/2020"
                    },
                    {
                        "name": "WellsFargo EGS",
                        "location": "Bangalore",
                        "from": "03/2010",
                        "to": "05/2018"
                    }
                ],
                "interviewStatus": {
                    "status": 'firstRound',
                    "joined": {
                        "date": ""
                    },
                    "rejected": {
                        "rejectedRound": "",
                        "date": "",
                        "reason": ""
                    },
                    "offereReleased": {
                        "date": "",
                        "joiningDate": "",
                        "offerlink": ""
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
                    "finalRound": {
                        "date": "",
                        "interViewerName": "",
                        "feedback": "",
                        "selected": false,
                        "package": {
                            "current": "",
                            "expected": ""
                        }
                    }
                }
            }
        ]
    });
}

export default mockAxios