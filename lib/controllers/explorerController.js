const explorerService = require("../../../refactoring/lib/services/explorerSevice");
const explorersReaderq = require("../../../refactoring/explorers.json");

class explorerController{
    static getExplorerByMission(mission){
        const gettingExplorerByMission = explorerService.filterByMission(explorersReaderq, mission);
        return gettingExplorerByMission;
    }
    static getExplorersUsernamesByMission(mission){
        return explorerService.getExplorersUsernamesByMission(explorersReaderq, mission);
    }
    static getExplorersAmonutByMission(mission){
        return explorerService.getAmountOfExplorersByMission(explorersReaderq, mission);
    }
}
module.exports = explorerController;