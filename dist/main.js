"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const core = __importStar(require("@actions/core"));
const wait_1 = require("./wait");
async function run() {
    try {
        const ms = core.getInput("milliseconds");
        core.debug(`Waiting ${ms} milliseconds ...`); // debug is only output if you set the secret `ACTIONS_STEP_DEBUG` to true
        core.debug(new Date().toTimeString());
        await (0, wait_1.wait)(Number.parseInt(ms, 10));
        core.debug(new Date().toTimeString());
        core.setOutput("time", new Date().toTimeString());
    }
    catch (error) {
        if (error instanceof Error)
            core.setFailed(error.message);
    }
}
run();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL3NyYy9tYWluLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxvREFBc0M7QUFDdEMsaUNBQThCO0FBRTlCLEtBQUssVUFBVSxHQUFHO0lBQ2hCLElBQUksQ0FBQztRQUNILE1BQU0sRUFBRSxHQUFXLElBQUksQ0FBQyxRQUFRLENBQUMsY0FBYyxDQUFDLENBQUM7UUFDakQsSUFBSSxDQUFDLEtBQUssQ0FBQyxXQUFXLEVBQUUsbUJBQW1CLENBQUMsQ0FBQyxDQUFDLDBFQUEwRTtRQUV4SCxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksSUFBSSxFQUFFLENBQUMsWUFBWSxFQUFFLENBQUMsQ0FBQztRQUN0QyxNQUFNLElBQUEsV0FBSSxFQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFDcEMsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLElBQUksRUFBRSxDQUFDLFlBQVksRUFBRSxDQUFDLENBQUM7UUFFdEMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLEVBQUUsSUFBSSxJQUFJLEVBQUUsQ0FBQyxZQUFZLEVBQUUsQ0FBQyxDQUFDO0lBQ3BELENBQUM7SUFBQyxPQUFPLEtBQUssRUFBRSxDQUFDO1FBQ2YsSUFBSSxLQUFLLFlBQVksS0FBSztZQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQzVELENBQUM7QUFDSCxDQUFDO0FBRUQsR0FBRyxFQUFFLENBQUMifQ==