export class Tools {
    toolsId?: string;
    TODnumber?: string;
    toolDiameter?: number;
    radius?: number;
    toolMaterial?: string;
    numberOfFlutes?: number;
    toolDescription?: string;
    toolImage: any;

    constructor(toolsId?: string, TODnumber?: string, toolDiameter?: number, radius?: number, toolMaterial?: string, numberOfFlutes?: number, toolDescription?: string, toolImage?:any) {
        this.toolsId = toolsId;
        this.TODnumber = TODnumber;
        this.toolDiameter = toolDiameter;
        this.radius = radius;
        this.toolMaterial = toolMaterial;
        this.numberOfFlutes = numberOfFlutes;
        this.toolDescription = toolDescription;
        this.toolImage = toolImage;
    }
}

export interface Tools {
    toolsId?: string;
    TODnumber?: string;
    toolDiameter?: number;
    radius?: number;
    toolMaterial?: string;
    numberOfFlutes?: number;
    toolDescription?: string;
    toolImage: any;
}