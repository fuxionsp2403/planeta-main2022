import { Earth } from "./earth.model";

export class Planets {
    id?:number;
    name?:string;
    englishName?:string;
    isPlanet?:boolean;
    moons?:number;
    semimajorAxis?:number;
    perihelion?:number;
    aphelion?:number;
    eccentricity?:number;
    inclination?:number;
    density?:number;
    gravity?:number;
    escape?:number;
    meanRadius?:number;
    equaRadius?:number;
    polarRadius?:number;
    flattening?:number;
    dimension?:string;
    sideralOrbit?:number;
    sideralRotation?:number;
    aroundPlanet?:number;
    discoveredBy?:string;
    discoveryDate?:Date;
    alternativeName?:string;
    axialTilt?:number;
    avgTemp?:string;
    mainAnomaly?:number;
    argPeriapsis?:number;
    longAscNode?:number;
    bodyType?:string;
    earth?:Earth[];
}

export class Saturn {
    id?:number;
    name?:string;
    englishName?:string;
    isPlanet?:boolean;
    moons?: {    
        moon?: string;
        rel?: string;
    };
    semimajorAxis?:number;
    perihelion?:number;
    aphelion?:number;
    eccentricity?:number;
    inclination?:number;
    density?:number;
    gravity?:number;
    escape?:number;
    meanRadius?:number;
    equaRadius?:number;
    polarRadius?:number;
    flattening?:number;
    dimension?:string;
    sideralOrbit?:number;
    sideralRotation?:number;
    aroundPlanet?:number;
    discoveredBy?:string;
    discoveryDate?:Date;
    alternativeName?:string;
    axialTilt?:number;
    avgTemp?:string;
    mainAnomaly?:number;
    argPeriapsis?:number;
    longAscNode?:number;
    bodyType?:string;
    earth?:Earth[];    
}
export class Moons {
    moon?: string;
    rel?: string;
}
