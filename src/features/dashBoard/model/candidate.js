// class CurrentCompany {
//     constructor(jsonObject) {
//       this.name = jsonObject?.name || "";
//       this.location = jsonObject?.location || "";
//       this.from = jsonObject?.from || "";
//       this.to = jsonObject?.to || "";
//     }
//   }


//   CurrentCompany.prototype.toJsonObject = function() {
//     return Object.assign({}, this)
//   }

  class WorkHistory {
    constructor(jsonObject) {
      this.name = jsonObject?.name || ""
      this.location = jsonObject?.location || ""
      this.from = jsonObject?.from || ""
      this.to = jsonObject?.to || ""
    }
  }
  
  class Package {
    constructor(jsonObject) {
      this.current = jsonObject?.current || "";
      this.expected = jsonObject?.expected || "";
    }
  }

  Package.prototype.toJsonObject = function() {
    return Object.assign({}, this)
  }
  
  class Round {
    constructor(jsonObject) {
      this.date = jsonObject?.date || "";
      this.interViewerName = jsonObject?.interViewerName || "";
      this.feedback = jsonObject?.feedback || "";
      this.selected = jsonObject?.selected || false;
    }
  }

  Round.prototype.toJsonObject = function() {
    return Object.assign({}, this)
  }
  
  class InterviewStatus {
    constructor(jsonObject) {
      this.status = jsonObject?.status || "";
      this.joined = { date: jsonObject?.joined?.date || "" };
      this.rejected = {
        rejectedRound: jsonObject?.rejected?.rejectedRound || "",
        date: jsonObject?.rejected?.date || "",
        reason: jsonObject?.rejected?.reason || ""
      };
      this.offereReleased = {
        date: jsonObject?.offereReleased?.date || "",
        joiningDate: jsonObject?.offereReleased?.joiningDate || "",
        offerlink: jsonObject?.offereReleased?.offerlink || ""
      };
      this.firstRound = new Round(jsonObject?.firstRound);
      this.secondRound = new Round(jsonObject?.secondRound);
      this.finalRound = {
        date: jsonObject?.finalRound?.date || "",
        interViewerName: jsonObject?.finalRound?.interViewerName || "",
        feedback: jsonObject?.finalRound?.feedback || "",
        selected: jsonObject?.finalRound?.selected || false,
        package: new Package(jsonObject?.finalRound?.package)
      };
    }
  }

  InterviewStatus.prototype.toJsonObject = function() {
    return Object.assign({}, this)
  }
  
  class Candidate {
    constructor(jsonObject) {
      this.id = jsonObject?.id || "";
      this.name = jsonObject?.name || "";
      this.title = jsonObject?.title || "";
      this.exp = jsonObject?.exp || "";
      // this.currentCompany = new CurrentCompany(jsonObject?.currentCompany);
      this.skills = jsonObject?.skills || [];
      this.shortlisted = jsonObject?.shortlisted || false;
      this.interviewStatus = new InterviewStatus(jsonObject?.interviewStatus);
      this.phone =  jsonObject?.phone || "";
      this.email =  jsonObject?.email || "";
      this.workHistory = jsonObject?.workHistory.map((workHistory) => {
        return new WorkHistory(workHistory)
      }) || []
    }
  }

  Candidate.prototype.toJsonObject = function() {
    const candidate = Object.assign({}, this)
    // candidate.currentCompany = this.currentCompany.toJsonObject()
    candidate.interviewStatus = this.interviewStatus.toJsonObject()
    return candidate
  }

  Candidate.prototype.formatPhoneNumber = function() {
    const cleaned = ('' + this.phone).replace(/\D/g, '');
    const match = cleaned.match(/^(\d{3})(\d{3})(\d{4})$/);
    if (match) {
      return '(' + match[1] + ') ' + match[2] + '-' + match[3];
    }
    return this.phone;
  }

  Candidate.prototype.skillsAsString = function() {
    return this.skills.join(', ')
  }
  





















































  export default Candidate