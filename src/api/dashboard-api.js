import Candidate from "features/dashBoard/model/candidate";
import axiosInstance from "./api"

class DashboardApi {
    async findCandidates(keyword) {
        console.log("findCandidates", keyword)
        const configurationObject = {
            method: 'get',
        }
        const result = await axiosInstance(configurationObject)
        .get(`/findCandidates`, { params: { searchText: keyword }});
        return result.data.candidates.map(candidate => new Candidate(candidate));
    }
}

export default DashboardApi